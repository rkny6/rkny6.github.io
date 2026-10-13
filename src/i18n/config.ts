export const LOCALES = ['en', 'zh'] as const;

export type Locale = (typeof LOCALES)[number];

export const DEFAULT_LOCALE: Locale = 'en';

export const LOCALE_LABELS: Record<Locale, string> = {
  en: 'EN',
  zh: '中文',
};

/** HTML lang attribute values. */
export const HTML_LANG: Record<Locale, string> = {
  en: 'en',
  zh: 'zh-CN',
};

/** BCP-47 tags used by Intl / Open Graph. */
export const OG_LOCALE: Record<Locale, string> = {
  en: 'en_US',
  zh: 'zh_CN',
};

/**
 * The site's base path (empty on a GitHub Pages user site served from the
 * root). Astro exposes it at build time via `import.meta.env.BASE_URL`. All
 * internal links are prefixed with it so they resolve under the deployed
 * sub-path when one exists.
 */
const BASE = import.meta.env.BASE_URL.replace(/\/$/, '');

/**
 * Build a localized path. English lives at the site root, Chinese under /zh.
 * The result is prefixed with the site base so it works on GitHub Pages.
 *   localizedPath('en', '/blog')  -> '/blog'
 *   localizedPath('zh', '/blog')  -> '/zh/blog'
 */
export function localizedPath(lang: Locale, path: string): string {
  const clean = path === '/' || path === '' ? '' : path.startsWith('/') ? path : `/${path}`;
  const localized = lang === DEFAULT_LOCALE ? clean : `/zh${clean}`;
  const root = localized === '' ? '/' : localized;
  return `${BASE}${root}`;
}

/**
 * Given the current pathname (which includes the site base), return the
 * pathname for the same page in another language. Query strings are handled
 * by the caller.
 */
export function switchLangPath(pathname: string, lang: Locale): string {
  // Strip the base prefix so the rest of the logic works on root-relative paths.
  const rootPath = pathname.startsWith(BASE) ? pathname.slice(BASE.length) || '/' : pathname;
  const isZh = rootPath === '/zh' || rootPath.startsWith('/zh/');
  const rest = isZh ? rootPath.slice(3) || '/' : rootPath;
  return localizedPath(lang, rest);
}

/** A value that exists in both languages (used by src/data/profile.ts). */
export type Localized<T = string> = Record<Locale, T>;

/** Pick the localized slice for a locale. */
export function pick<T>(value: Localized<T>, lang: Locale): T {
  return value[lang];
}
