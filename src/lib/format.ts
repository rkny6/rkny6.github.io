import type { Locale } from '@/i18n/config';

const DATE_LOCALES: Record<Locale, string> = {
  en: 'en-US',
  zh: 'zh-CN',
};

/** 2026-09-12 -> "Sep 12, 2026" / "2026年9月12日" */
export function formatDate(date: Date, lang: Locale): string {
  return new Intl.DateTimeFormat(DATE_LOCALES[lang], {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  }).format(date);
}

/** ISO date for <time datetime> attributes. */
export function isoDate(date: Date): string {
  return date.toISOString().slice(0, 10);
}
