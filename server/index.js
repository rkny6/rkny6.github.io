/**
 * Optional Ask Box proxy — a tiny, dependency-free Node HTTP server.
 *
 * WHY THIS EXISTS
 *   GitHub Pages is static-only and cannot run server endpoints. If your ask
 *   provider needs a secret API key, deploy THIS file on any Node host (a
 *   small VPS, a serverless function, etc.), then point the static site at it:
 *
 *     1. Deploy this file as a Node service (Root: server/,
 *        Build: npm install, Start: node index.js).
 *     2. Set ASK_API_URL / ASK_TARGET_URL in the service env.
 *     3. Set PUBLIC_ASK_API_URL=https://<your-service>/ask
 *        in the static site's build env.
 *
 * The browser POSTs here; this server adds the secret header and forwards.
 * The API key never reaches client JavaScript.
 *
 * Swap the forwarding logic in `forward()` for any provider (Formspree,
 * FormSubmit, a Slack webhook, your own inbox...).
 */
import http from 'node:http';

const PORT = process.env.PORT || 8787;
const TARGET_URL = process.env.ASK_TARGET_URL || '';
const API_KEY = process.env.ASK_API_KEY || '';
/** Comma-separated origins allowed to call this proxy; empty = allow all. */
const ALLOWED_ORIGINS = (process.env.ALLOWED_ORIGINS || '').split(',').filter(Boolean);

const MAX_BODY = 16 * 1024; // 16 kB is plenty for a question

function corsHeaders(origin) {
  const allowed = ALLOWED_ORIGINS.length === 0 || ALLOWED_ORIGINS.includes(origin);
  return {
    'Access-Control-Allow-Origin': allowed && origin ? origin : '',
    'Access-Control-Allow-Methods': 'POST, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type',
    'Access-Control-Max-Age': '86400',
  };
}

async function forward(payload) {
  if (!TARGET_URL) {
    // No provider configured on the server side either — behave like the
    // placeholder so the demo flow keeps working.
    console.info('[ask-proxy] no ASK_TARGET_URL; accepted without storing', {
      lang: payload.lang,
      length: payload.message?.length,
    });
    return { ok: true };
  }

  const res = await fetch(TARGET_URL, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      ...(API_KEY ? { Authorization: `Bearer ${API_KEY}` } : {}),
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) throw new Error(`upstream ${res.status}`);
  return { ok: true };
}

const server = http.createServer(async (req, res) => {
  const origin = req.headers.origin || '';
  const cors = corsHeaders(origin);

  if (req.method === 'OPTIONS') {
    res.writeHead(204, cors);
    return res.end();
  }

  const path = new URL(req.url || '/', 'http://localhost').pathname;
  if (req.method !== 'POST' || (path !== '/' && path !== '/ask')) {
    res.writeHead(404, { ...cors, 'Content-Type': 'application/json' });
    return res.end(JSON.stringify({ ok: false, error: 'not found' }));
  }

  let body = '';
  req.on('data', (chunk) => {
    body += chunk;
    if (body.length > MAX_BODY) req.destroy();
  });

  req.on('end', async () => {
    try {
      const payload = JSON.parse(body);
      const message = typeof payload.message === 'string' ? payload.message.trim() : '';
      if (!message || message.length > 2000) {
        res.writeHead(400, { ...cors, 'Content-Type': 'application/json' });
        return res.end(JSON.stringify({ ok: false, error: 'invalid message' }));
      }
      const result = await forward({ ...payload, message });
      res.writeHead(200, { ...cors, 'Content-Type': 'application/json' });
      res.end(JSON.stringify(result));
    } catch (err) {
      console.error('[ask-proxy] failed', err);
      res.writeHead(502, { ...cors, 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ ok: false, error: 'upstream failure' }));
    }
  });
});

server.listen(PORT, () => console.log(`[ask-proxy] listening on :${PORT}`));
