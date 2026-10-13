import { DEFAULT_LOCALE, type Locale } from './config';
import { ui, type UIKey } from './ui';

export * from './config';
export { ui };
export type { UIKey };

/** Translate a UI key for a locale. Falls back to English. */
export function t(lang: Locale, key: UIKey): string {
  return ui[lang]?.[key] ?? ui[DEFAULT_LOCALE][key] ?? key;
}

/** Translate with `{n}`-style interpolation. */
export function tf(lang: Locale, key: UIKey, vars: Record<string, string | number>): string {
  let str = t(lang, key);
  for (const [k, v] of Object.entries(vars)) {
    str = str.replaceAll(`{${k}}`, String(v));
  }
  return str;
}
