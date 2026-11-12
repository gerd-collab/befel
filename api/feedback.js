import { cleanReport, createLimiter, createTracker, feedbackConfigured, MAX_BODY_BYTES, newReference } from '../server/feedback.js';

function sameOrigin(req) {
  try {
    const origin = new URL(req.headers.origin);
    return ['http:', 'https:'].includes(origin.protocol) && origin.host === req.headers.host
      && req.headers['sec-fetch-site'] !== 'cross-site';
  } catch { return false; }
}

function reply(res, status, data) {
  res.statusCode = status;
  res.setHeader('Content-Type', 'application/json; charset=utf-8');
  res.end(JSON.stringify(data));
}

export function createHandler({ env = process.env, submit = createTracker({ env }), limit = createLimiter() } = {}) {
  return async function handler(req, res) {
    res.setHeader('Cache-Control', 'no-store');
    res.setHeader('X-Content-Type-Options', 'nosniff');
    if (req.method !== 'POST') { res.setHeader('Allow', 'POST'); return reply(res, 405, { error: 'method_not_allowed' }); }
    if (!sameOrigin(req)) return reply(res, 403, { error: 'foreign_origin' });
    if (!feedbackConfigured(env)) return reply(res, 503, { error: 'not_configured' });
    if (!/^application\/json(?:\s*;|$)/i.test(req.headers['content-type'] || '')) return reply(res, 415, { error: 'json_required' });
    if (Number(req.headers['content-length']) > MAX_BODY_BYTES) return reply(res, 413, { error: 'body_too_large' });
    // Vercel supplies this header itself; the local dev server uses the socket address.
    const ip = req.headers['x-vercel-forwarded-for'] || req.socket?.remoteAddress || 'unknown';
    if (!limit(ip)) { res.setHeader('Retry-After', '3600'); return reply(res, 429, { error: 'rate_limited' }); }
    let body = req.body;
    try {
      if (body === undefined) {
        const chunks = [];
        let size = 0;
        for await (const chunk of req) {
          size += Buffer.byteLength(chunk);
          if (size > MAX_BODY_BYTES) return reply(res, 413, { error: 'body_too_large' });
          chunks.push(Buffer.from(chunk));
        }
        body = Buffer.concat(chunks).toString('utf8');
      }
      if (typeof body === 'string') {
        if (Buffer.byteLength(body) > MAX_BODY_BYTES) return reply(res, 413, { error: 'body_too_large' });
        body = JSON.parse(body);
      }
    } catch { return reply(res, 400, { error: 'invalid_json' }); }
    const report = cleanReport(body);
    if (report.error) return reply(res, 400, { error: report.error });
    try {
      const result = await submit(report, newReference());
      return reply(res, 201, result);
    } catch { return reply(res, 502, { error: 'tracker_unavailable' }); }
  };
}

export default createHandler();
