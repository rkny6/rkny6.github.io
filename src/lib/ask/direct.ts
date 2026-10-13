import type { AskPayload, AskProvider, AskResult } from './types';

/**
 * Direct provider: POSTs the question as JSON to an HTTP endpoint.
 *
 * The endpoint is configured with the PUBLIC_ASK_API_URL build-time variable
 * and can be either:
 *
 *   1. A key-free form/inbox service (e.g. a Formspree form endpoint) whose
 *      URL is public by design — safe to call from the browser.
 *   2. Your own proxy (see /server/ask-proxy.ts) deployed as a small Render
 *      Web Service. The proxy holds the secret API key; the browser never
 *      sees it.
 *
 * NEVER put a secret key in PUBLIC_ASK_API_URL or any PUBLIC_ variable —
 * everything prefixed PUBLIC_ is inlined into client JavaScript at build time.
 */
export function createDirectProvider(endpoint: string): AskProvider {
  return {
    name: 'direct-http',
    mode: 'live',
    async submit(payload: AskPayload): Promise<AskResult> {
      try {
        const res = await fetch(endpoint, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(payload),
        });
        if (!res.ok) {
          return { ok: false, error: `Provider responded with ${res.status}` };
        }
        return { ok: true };
      } catch (err) {
        return { ok: false, error: err instanceof Error ? err.message : 'network error' };
      }
    },
  };
}
