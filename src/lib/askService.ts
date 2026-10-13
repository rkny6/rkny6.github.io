/**
 * Ask Box service — the single entry point the UI uses.
 *
 *   import { askService } from '@/lib/askService';
 *   const result = await askService.submit({ message, lang });
 *
 * Provider selection happens once, from build-time environment variables:
 *
 *   PUBLIC_ASK_API_URL set   -> direct-http provider (your endpoint/proxy)
 *   PUBLIC_ASK_API_URL empty -> placeholder provider (demo mode, stores nothing)
 *
 * To plug in a different provider (Formspree adapter, GitHub Issues writer,
 * email relay, ...): create a file in src/lib/ask/ implementing AskProvider,
 * then return it from `resolveProvider()` below. Nothing else changes.
 */
import { createDirectProvider } from './ask/direct';
import { placeholderProvider } from './ask/placeholder';
import type { AskMode, AskPayload, AskProvider, AskResult } from './ask/types';

export type { AskMode, AskPayload, AskProvider, AskResult } from './ask/types';

const MAX_MESSAGE_LENGTH = 2000;

function resolveProvider(): AskProvider {
  const endpoint = (import.meta.env.PUBLIC_ASK_API_URL as string | undefined)?.trim();
  return endpoint ? createDirectProvider(endpoint) : placeholderProvider;
}

const provider = resolveProvider();

export const askService = {
  /** `placeholder` when no provider is configured — show a demo-mode note. */
  mode: provider.mode,
  providerName: provider.name,

  async submit(input: { message: string; name?: string; email?: string; lang: 'en' | 'zh' }): Promise<AskResult> {
    const message = input.message.trim();
    if (!message) return { ok: false, error: 'empty message' };
    if (message.length > MAX_MESSAGE_LENGTH) return { ok: false, error: 'message too long' };

    const payload: AskPayload = {
      message,
      lang: input.lang,
      submittedAt: new Date().toISOString(),
      ...(input.name?.trim() ? { name: input.name.trim() } : {}),
      ...(input.email?.trim() ? { email: input.email.trim() } : {}),
    };

    return provider.submit(payload);
  },
};
