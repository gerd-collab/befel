import { test } from 'node:test';
import assert from 'node:assert/strict';
import { createHandler } from '../api/feedback.js';
import { cleanReport, createLimiter, createTracker, issueDescription, MAX_IMAGE_BYTES } from '../server/feedback.js';

const env = { FEEDBACK_BOT_EMAIL: 'bot@example.test', FEEDBACK_BOT_PASSWORD: 'test-secret', FEEDBACK_PROJECT_ID: 'befael-project', FEEDBACK_APP_ID: 'befael-app' };
const image = `data:image/png;base64,${Buffer.from('iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/x8AAwMCAO+jRZkAAAAASUVORK5CYII=', 'base64').toString('base64')}`;
const report = { category: 'bug', text: 'Der nächste Schritt öffnet sich nicht.', screenshot: image,
  context: { view: 'm01-inversion', title: 'Erwachsenenlogik', lang: 'de', theme: 'dark', journal: 'private journal', email: 'private@example.test' } };

function response() {
  return { statusCode: 200, headers: {}, setHeader(key, value) { this.headers[key] = value; },
    end(body) { this.data = JSON.parse(body); } };
}
const request = (overrides = {}) => ({ method: 'POST', headers: { host: 'befael.test', origin: 'https://befael.test', 'content-type': 'application/json' }, body: report, ...overrides });
async function invoke(handler, req = request()) { const res = response(); await handler(req, res); return res; }

test('accepts bounded reports and rejects malformed text, categories and screenshots', () => {
  const clean = cleanReport(report);
  assert.equal(clean.category, 'bug');
  assert.equal(clean.screenshot.type, 'image/png');
  assert.equal(clean.context.view, 'm01-inversion');
  assert.equal(clean.context.journal, undefined);
  assert.equal(clean.context.email, undefined);
  for (const body of [null, [], { ...report, category: '__proto__' }, { ...report, text: 'kurz' },
    { ...report, text: 'a'.repeat(2001) }, { ...report, screenshot: 'data:text/html;base64,PGI+' },
    { ...report, screenshot: 'data:image/png;base64,PGI+' },
    { ...report, screenshot: `data:image/png;base64,${Buffer.alloc(MAX_IMAGE_BYTES + 1).toString('base64')}` }]) {
    assert.ok(cleanReport(body).error);
  }
  assert.equal(cleanReport({ ...report, screenshot: null }).screenshot, null);
  const description = issueDescription(clean, 'FB-ABC234');
  assert.match(description, /Ta Befäl/);
  assert.match(description, /FB-ABC234/);
  assert.match(description, /m01-inversion/);
  assert.doesNotMatch(description, /private journal|private@example.test/);
});

test('API rejects unsupported methods, origins, configuration and JSON before forwarding', async () => {
  let calls = 0;
  const handler = createHandler({ env, submit: async () => { calls++; } });
  assert.equal((await invoke(handler, request({ method: 'GET' }))).statusCode, 405);
  assert.equal((await invoke(handler, request({ headers: { ...request().headers, origin: 'https://foreign.test' } }))).statusCode, 403);
  assert.equal((await invoke(handler, request({ headers: { ...request().headers, origin: undefined } }))).statusCode, 403);
  assert.equal((await invoke(handler, request({ headers: { ...request().headers, 'content-type': 'text/plain' } }))).statusCode, 415);
  assert.equal((await invoke(handler, request({ headers: { ...request().headers, 'content-length': 5000000 } }))).statusCode, 413);
  assert.equal((await invoke(handler, request({ body: '{' }))).statusCode, 400);
  assert.equal((await invoke(handler, request({ body: null }))).statusCode, 400);
  assert.equal((await invoke(createHandler({ env: {}, submit: async () => { calls++; } }))).statusCode, 503);
  assert.equal((await invoke(createHandler({ env, limit: () => false }))).statusCode, 429);
  assert.equal(calls, 0);
});

test('full submission logs in, creates the issue and uploads the screenshot without returning credentials', async () => {
  const calls = [];
  const submit = createTracker({ env, fetcher: async (url, init) => {
    calls.push({ url, ...init });
    if (url.endsWith('/auth/login')) return Response.json({ accessToken: 'server-only-token' });
    if (url.endsWith('/issues')) return Response.json({ data: { id: 'issue-7', number: 42 } });
    if (url.endsWith('/attachments')) return Response.json({ data: { id: 'attachment-1' } });
    throw new Error('Unexpected route');
  } });
  const result = await invoke(createHandler({ env, submit }));
  assert.equal(result.statusCode, 201);
  assert.equal(result.data.number, 42);
  assert.match(result.data.reference, /^FB-[23456789ABCDEFGHJKMNPQRSTUVWXYZ]{6}$/);
  assert.equal(result.data.attachmentFailed, false);
  assert.equal(calls.length, 3);
  assert.match(calls[1].url, /projects\/befael-project\/issues$/);
  assert.equal(calls[1].headers.Authorization, 'Bearer server-only-token');
  const issue = JSON.parse(calls[1].body);
  assert.equal(issue.category, 'bug');
  assert.equal(issue.appId, 'befael-app');
  assert.match(issue.description, new RegExp(result.data.reference));
  assert.equal(calls[2].body.get('file').type, 'image/png');
  assert.doesNotMatch(JSON.stringify(result.data), /server-only-token|test-secret|bot@example/);
});

test('expired token is refreshed once and an attachment failure preserves the successful report', async () => {
  let logins = 0;
  let issues = 0;
  const submit = createTracker({ env, fetcher: async (url) => {
    if (url.endsWith('/auth/login')) return Response.json({ accessToken: `token-${++logins}` });
    if (url.endsWith('/issues')) {
      if (++issues === 1) return new Response('', { status: 401 });
      return Response.json({ data: { id: 'issue-7', number: 42 } });
    }
    return new Response('', { status: 500 });
  } });
  const result = await invoke(createHandler({ env, submit }));
  assert.equal(result.statusCode, 201);
  assert.equal(result.data.attachmentFailed, true);
  assert.equal(issues, 2);
  assert.equal(logins, 2);
  assert.equal((await invoke(createHandler({ env, submit: async () => { throw new Error('private upstream detail'); } }))).statusCode, 502);
});

test('per-instance limiter expires its hourly allowance independently for each address', () => {
  const limit = createLimiter();
  for (let i = 0; i < 20; i++) assert.ok(limit('ip-1', 1000));
  assert.equal(limit('ip-1', 1000), false);
  assert.equal(limit('ip-2', 1000), true);
  assert.equal(limit('ip-1', 3601000), true);
});

test('bot credentials alone resolve the exact course project and app URL, with cached lookup', async () => {
  const calls = [];
  const submit = createTracker({
    env: { FEEDBACK_BOT_EMAIL: env.FEEDBACK_BOT_EMAIL, FEEDBACK_BOT_PASSWORD: env.FEEDBACK_BOT_PASSWORD },
    fetcher: async (url, init) => {
      calls.push({ url, ...init });
      if (url.endsWith('/auth/login')) return Response.json({ accessToken: 'bot-token' });
      if (url.endsWith('/auth/me')) return Response.json({ projects: [
        { id: 'cyber', name: 'Cyber Schooling' }, { id: 'course', name: 'Ta Befäl' },
      ] });
      if (url.endsWith('/projects/course/apps')) return Response.json({ data: [
        { id: 'other-app', url: 'https://other.vercel.app' },
        { id: 'course-app', url: 'https://befael.vercel.app/?lang=sv', active: true },
        { id: 'retired-app', url: 'https://befael.vercel.app/', active: false },
      ] });
      if (url.endsWith('/projects/course/issues')) return Response.json({ data: { id: 'issue', number: 43 } });
      throw new Error('Unexpected route');
    },
  });
  const clean = cleanReport({ ...report, screenshot: null });
  await submit(clean, 'FB-ABC234');
  await submit(clean, 'FB-ABC235');
  const issues = calls.filter((entry) => entry.url.endsWith('/issues'));
  assert.equal(issues.length, 2);
  for (const issue of issues) assert.equal(JSON.parse(issue.body).appId, 'course-app');
  assert.equal(calls.filter((entry) => entry.url.endsWith('/auth/me')).length, 1);
  assert.equal(calls.filter((entry) => entry.url.endsWith('/apps')).length, 1);
});

test('missing or ambiguous course/app never falls back to another project or unassigned issue', async () => {
  for (const scenario of ['other-project-only', 'duplicate-project', 'missing-app', 'duplicate-app']) {
    let posts = 0;
    const submit = createTracker({
      env: { FEEDBACK_BOT_EMAIL: env.FEEDBACK_BOT_EMAIL, FEEDBACK_BOT_PASSWORD: env.FEEDBACK_BOT_PASSWORD },
      fetcher: async (url) => {
        if (url.endsWith('/auth/login')) return Response.json({ accessToken: 'bot-token' });
        if (url.endsWith('/auth/me')) return Response.json({ projects: scenario === 'other-project-only'
          ? [{ id: 'cyber', name: 'Cyber Schooling' }]
          : scenario === 'duplicate-project' ? [{ id: 'one', name: 'Ta Befäl' }, { id: 'two', name: 'Ta Befäl' }]
            : [{ id: 'course', name: 'Ta Befäl' }] });
        if (url.endsWith('/apps')) return Response.json({ data: scenario === 'duplicate-app'
          ? [{ id: 'one', url: 'https://befael.vercel.app/' }, { id: 'two', url: 'https://befael.vercel.app/' }]
          : [{ id: 'other', url: 'https://other.vercel.app/' }] });
        posts++;
        throw new Error('Must never create an issue');
      },
    });
    await assert.rejects(() => submit(cleanReport(report), 'FB-ABC234'));
    assert.equal(posts, 0, scenario);
  }
});
