import type { AskPayload, AskProvider, AskResult } from './types';

/**
 * Default provider used when no endpoint is configured.
 *
 * Submissions are accepted (so the UI flow can be tested end-to-end) but
 * nothing is stored or forwarded. The UI shows a visible "demo mode" note so
 * visitors are never misled.
 */
export const placeholderProvider: AskProvider = {
  name: 'placeholder',
  mode: 'placeholder',
  async submit(payload: AskPayload): Promise<AskResult> {
    // Intentionally not persisted anywhere.
    console.info('[ask] placeholder provider received a question', {
      lang: payload.lang,
      length: payload.message.length,
    });
    return { ok: true };
  },
};
