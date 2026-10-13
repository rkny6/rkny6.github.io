/**
 * Ask Box provider contract.
 *
 * The whole site talks to the ask box through `askService.ts`, which talks to
 * a provider implementing this interface. To swap providers, implement
 * `AskProvider` and register it in `askService.ts` — no component changes.
 */

export interface AskPayload {
  /** Optional display name. */
  name?: string;
  /** Optional reply address. */
  email?: string;
  /** The question itself. Required, trimmed, max 2000 chars. */
  message: string;
  /** Locale the question was submitted from — useful for routing replies. */
  lang: 'en' | 'zh';
  /** Submission timestamp, ISO-8601. */
  submittedAt: string;
}

export interface AskResult {
  ok: boolean;
  /** Optional provider message shown to the user on failure. */
  error?: string;
}

export type AskMode = 'placeholder' | 'live';

export interface AskProvider {
  /** Human-readable provider name, for logs/debugging. */
  readonly name: string;
  /**
   * `placeholder` means submissions are acknowledged but not persisted —
   * the UI shows an honest note instead of pretending to store them.
   */
  readonly mode: AskMode;
  submit(payload: AskPayload): Promise<AskResult>;
}
