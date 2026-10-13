import type { Locale } from '@/i18n/config';

/**
 * Global site identity. Change name/handle/links here — everything else
 * (header, footer, SEO, contact page) reads from this file.
 */
export const site = {
  /** Site brand name: title suffix, header, footer, SEO, RSS. */
  title: 'la sixième nuit',

  /** Canonical origin of the deployed site (GitHub Pages user site). */
  url: 'https://rkny6.github.io',

  /** Personal handle used in greetings and the about page. */
  handle: 'rkny6',

  /** Full display name. */
  name: {
    en: 'la sixième nuit',
    zh: 'la sixième nuit',
  } satisfies Record<Locale, string>,

  /** One-line role, localized. */
  role: {
    en: 'Independent developer',
    zh: '独立开发者',
  } satisfies Record<Locale, string>,

  /** Short intro used on the home page + default OG description. */
  tagline: {
    en: 'I just like to build fun stuff.',
    zh: '喜欢做点好玩的东西。',
  } satisfies Record<Locale, string>,

  email: 'rokunoy@outlook.com',

  /**
   * Feature switches hide a page's entry points. Disabled routes live in
   * \`src/pages/_hidden/\` so Astro does not build them.
   */
  features: {
    now: false,
    ask: false,
    contact: false,
  },

  /** Social / platform links shown in About, Contact and the footer. */
  links: [
    { label: 'GitHub', url: 'https://github.com/rkny6' },
    { label: 'X', url: 'https://x.com/06_nuit' },
  ],
} as const;

export type Site = typeof site;
