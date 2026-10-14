import type { Locale } from '@/i18n/config';

export const projectOrder: Record<Locale, readonly string[]> = {
  en: ['pulse', 'inkwell', 'tiny-query', 'echo', 'grain', 'gridpaper', 'relayd', 'idea-premortem'],
  zh: ['pulse', 'inkwell', 'tiny-query', 'echo', 'echo-pomodoro', 'grain', 'gridpaper', 'relayd', 'idea-premortem'],
};