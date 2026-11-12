// Same tracker API as CyberSchooling Web, with a dedicated project for Ta Befäl.
// No learner journal, answers, names, or contact details are read by this module.
import { randomInt } from 'node:crypto';

export const MAX_IMAGE_BYTES = 2.5 * 1024 * 1024;
export const MAX_BODY_BYTES = 4 * 1024 * 1024;
const ALPHABET = '23456789ABCDEFGHJKMNPQRSTUVWXYZ';
export const newReference = () => `FB-${Array.from({ length: 6 }, () => ALPHABET[randomInt(ALPHABET.length)]).join('')}`;
const oneLine = (value, max) => typeof value === 'string' ? value.replace(/\s+/g, ' ').trim().slice(0, max) : '';

export function cleanReport(body) {
  if (!body || typeof body !== 'object' || Array.isArray(body)) return { error: 'invalid_report' };
  if (!['bug', 'idea'].includes(body.category)) return { error: 'invalid_category' };
  const text = typeof body.text === 'string' ? body.text.replace(/\r\n?/g, '\n').trim() : '';
  if (text.length < 5 || text.length > 2000) return { error: 'invalid_text' };
  let screenshot = null;
  if (body.screenshot != null && body.screenshot !== '') {
    const match = typeof body.screenshot === 'string' && /^data:image\/(jpeg|png|webp);base64,([A-Za-z0-9+/]+={0,2})$/.exec(body.screenshot);
    if (!match || match[2].length > Math.ceil(MAX_IMAGE_BYTES / 3) * 4) return { error: 'invalid_image' };
    const bytes = Buffer.from(match[2], 'base64');
    const valid = match[1] === 'jpeg' ? bytes.subarray(0, 3).equals(Buffer.from([0xff, 0xd8, 0xff]))
      : match[1] === 'png' ? bytes.subarray(0, 8).equals(Buffer.from([137, 80, 78, 71, 13, 10, 26, 10]))
      : bytes.toString('ascii', 0, 4) === 'RIFF' && bytes.toString('ascii', 8, 12) === 'WEBP';
    if (!valid || bytes.length > MAX_IMAGE_BYTES) return { error: 'invalid_image' };
    screenshot = { bytes, type: `image/${match[1]}` };
  }
  const input = body.context && typeof body.context === 'object' ? body.context : {};
  const context = Object.fromEntries(Object.entries({ view: 100, title: 200, viewport: 25, screen: 25, userAgent: 300, lang: 8, theme: 8 })
    .map(([key, max]) => [key, oneLine(input[key], max)]));
  return { category: body.category, text, screenshot, context };
}

export function issueDescription(report, reference) {
  const c = report.context;
  return `${report.text}\n\n---\n${[
    `- **Referenz:** ${reference}`,
    '- **Quelle:** Ta Befäl – Lernplattform',
    `- **Art:** ${report.category === 'bug' ? 'Fehler' : 'Wunsch / Idee'}`,
    c.view ? `- **Ansicht:** ${c.view}` : null,
    c.title ? `- **Seite:** ${c.title}` : null,
    `- **Sprache/Theme:** ${c.lang || '–'} / ${c.theme || '–'}`,
    `- **Fenster/Bildschirm:** ${c.viewport || '–'} / ${c.screen || '–'}`,
    c.userAgent ? `- **Browser:** ${c.userAgent}` : null,
    `- **Screenshot:** ${report.screenshot ? 'angehängt' : 'keiner'}`,
  ].filter(Boolean).join('\n')}`;
}

export function feedbackConfigured(env = process.env) {
  return Boolean(env.FEEDBACK_BOT_EMAIL && env.FEEDBACK_BOT_PASSWORD);
}

/** Dependency injection keeps tests off the real tracker. Tokens live only on the server. */
export function createTracker({ env = process.env, fetcher = fetch } = {}) {
  let token;
  let until = 0;
  let destination;
  let destinationUntil = 0;
  const base = () => (env.FEEDBACK_API_URL || 'https://ws.cyberschooling.eu/feedback/api/v1').replace(/\/+$/, '');
  async function call(path, init = {}, retried = false) {
    if (!token || Date.now() >= until) {
      const response = await fetcher(`${base()}/auth/login`, {
        method: 'POST', headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email: env.FEEDBACK_BOT_EMAIL, password: env.FEEDBACK_BOT_PASSWORD }),
        signal: AbortSignal.timeout(10000),
      });
      if (!response.ok) throw new Error('Tracker login failed');
      const data = await response.json();
      if (!data.accessToken) throw new Error('Missing tracker token');
      token = data.accessToken;
      until = Date.now() + 10 * 60 * 1000;
    }
    const response = await fetcher(`${base()}${path}`, {
      ...init, headers: { ...init.headers, Authorization: `Bearer ${token}` }, signal: AbortSignal.timeout(10000),
    });
    if (response.status === 401 && !retried) { token = null; return call(path, init, true); }
    if (!response.ok) throw new Error(`Tracker request failed (${response.status})`);
    return response.json();
  }
  async function target() {
    if (destination && Date.now() < destinationUntil) return destination;
    let projectId = env.FEEDBACK_PROJECT_ID;
    if (!projectId) {
      // Resolve only the explicitly named course project, never the bot's first/only project.
      const wanted = (env.FEEDBACK_PROJECT_NAME || 'Ta Befäl').normalize('NFC').trim().toLowerCase();
      const { projects } = await call('/auth/me');
      const matches = Array.isArray(projects) ? projects.filter((project) =>
        String(project.name || '').normalize('NFC').trim().toLowerCase() === wanted) : [];
      if (matches.length !== 1 || !matches[0].id) throw new Error('Course project is missing or ambiguous');
      projectId = matches[0].id;
    }
    let appId = env.FEEDBACK_APP_ID;
    if (!appId) {
      const { data: apps } = await call(`/projects/${encodeURIComponent(projectId)}/apps`);
      const active = Array.isArray(apps) ? apps.filter((app) => app.active !== false) : [];
      const matches = active.filter((app) => {
        try { return new URL(app.url).hostname === 'befael.vercel.app'; }
        catch { return false; }
      });
      // Refuse to create a report without a unique app assignment.
      if (matches.length !== 1 || !matches[0].id) throw new Error('Course app is missing or ambiguous');
      appId = matches[0].id;
    }
    destination = { projectId, appId };
    destinationUntil = Date.now() + 10 * 60 * 1000;
    return destination;
  }
  return async (report, reference) => {
    const { projectId, appId } = await target();
    const { data: issue } = await call(`/projects/${encodeURIComponent(projectId)}/issues`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        title: `Ta Befäl: ${oneLine(report.text.split('\n')[0], 90)}`,
        description: issueDescription(report, reference), category: report.category, priority: 'normal',
        appId,
      }),
    });
    if (!issue?.id) throw new Error('Missing tracker receipt');
    let attachmentFailed = false;
    if (report.screenshot) {
      const form = new FormData();
      const ext = report.screenshot.type.split('/')[1].replace('jpeg', 'jpg');
      form.append('file', new Blob([report.screenshot.bytes], { type: report.screenshot.type }), `screenshot-befael.${ext}`);
      try { await call(`/issues/${encodeURIComponent(issue.id)}/attachments`, { method: 'POST', body: form }); }
      catch { attachmentFailed = true; } // The issue already exists; do not invite a duplicate report.
    }
    return { number: issue.number ?? null, reference, attachmentFailed };
  };
}

// Best-effort per-instance throttle for this public course (no learner accounts).
// Entries expire and the map is bounded; no IP is forwarded to the tracker or persisted.
export function createLimiter() {
  const requests = new Map();
  return (key, now = Date.now()) => {
    for (const [ip, entry] of requests) if (entry.until <= now) requests.delete(ip);
    const entry = requests.get(key) || { count: 0, until: now + 3600000 };
    if (entry.count >= 20 || (!requests.has(key) && requests.size >= 10000)) return false;
    entry.count += 1;
    requests.set(key, entry);
    return true;
  };
}
