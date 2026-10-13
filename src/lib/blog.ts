import { getCollection, type CollectionEntry } from 'astro:content';
import { DEFAULT_LOCALE, type Locale } from '@/i18n/config';

export type BlogPost = CollectionEntry<'blog'>;

/** Language folder is the first path segment of the generated id. */
export function postLang(post: BlogPost): Locale {
  return post.id.startsWith('zh/') ? 'zh' : 'en';
}

/** Slug without the language folder. Posts sharing a slug are translations. */
export function postSlug(post: BlogPost): string {
  return post.id.replace(/^(en|zh)\//, '');
}

/** All non-draft posts for one language, newest first. */
export async function getPosts(lang: Locale): Promise<BlogPost[]> {
  const posts = await getCollection('blog', ({ data }) => !data.draft);
  return posts
    .filter((p) => postLang(p) === lang)
    .sort((a, b) => b.data.date.valueOf() - a.data.date.valueOf());
}

/** All tags used by a language's posts, with counts, alphabetical. */
export async function getTags(lang: Locale): Promise<{ tag: string; count: number }[]> {
  const posts = await getPosts(lang);
  const counts = new Map<string, number>();
  for (const p of posts) {
    for (const tag of p.data.tags) counts.set(tag, (counts.get(tag) ?? 0) + 1);
  }
  return [...counts.entries()]
    .map(([tag, count]) => ({ tag, count }))
    .sort((a, b) => a.tag.localeCompare(b.tag));
}

/**
 * The translated twin of a post (same slug, other language), if it exists.
 * Used to keep readers on the same article when switching language.
 */
export async function getPostTranslation(post: BlogPost): Promise<BlogPost | undefined> {
  const target: Locale = postLang(post) === 'en' ? 'zh' : 'en';
  const all = await getCollection('blog');
  return all.find((p) => postLang(p) === target && postSlug(p) === postSlug(post) && !p.data.draft);
}

/** Approximate reading time; counts CJK characters individually. */
export function readingTime(body: string): number {
  const cjk = (body.match(/[\u3400-\u9fff\uf900-\ufaff]/g) ?? []).length;
  const words = body
    .replace(/[\u3400-\u9fff\uf900-\ufaff]/g, ' ')
    .split(/\s+/)
    .filter(Boolean).length;
  const minutes = (words + cjk / 2) / 200;
  return Math.max(1, Math.round(minutes));
}

/** Simple pagination helper. */
export function paginate<T>(items: T[], page: number, perPage: number) {
  const totalPages = Math.max(1, Math.ceil(items.length / perPage));
  const current = Math.min(Math.max(1, page), totalPages);
  return {
    current,
    totalPages,
    items: items.slice((current - 1) * perPage, current * perPage),
    prev: current > 1 ? current - 1 : null,
    next: current < totalPages ? current + 1 : null,
  };
}

export const DEFAULT_POST_LANG = DEFAULT_LOCALE;
