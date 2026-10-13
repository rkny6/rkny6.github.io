import { getCollection, type CollectionEntry } from 'astro:content';
import { projectOrder } from '@/data/project-order';
import type { Locale } from '@/i18n/config';

export type ProjectEntry = CollectionEntry<'projects'>;

/** Language folder is the first path segment of the generated id. */
export function projectLang(entry: ProjectEntry): Locale {
  return entry.id.startsWith('zh/') ? 'zh' : 'en';
}

/** Slug without the language folder. Entries sharing a slug are translations. */
export function projectSlug(entry: ProjectEntry): string {
  return entry.id.replace(/^(en|zh)\//, '');
}

/** All non-draft projects for one language, in the configured display order. */
export async function getProjects(lang: Locale): Promise<ProjectEntry[]> {
  const entries = await getCollection('projects', ({ data }) => !data.draft);
  const localizedEntries = entries.filter((p) => projectLang(p) === lang);
  const positions = new Map(projectOrder[lang].map((slug, index) => [slug, index]));
  const unordered = localizedEntries.map(projectSlug).filter((slug) => !positions.has(slug));

  if (unordered.length > 0) {
    throw new Error(`Add project(s) to the ${lang} display order: ${unordered.join(', ')}`);
  }

  return localizedEntries.sort(
    (a, b) => positions.get(projectSlug(a))! - positions.get(projectSlug(b))!,
  );
}

/** Featured projects for the home page, in the configured display order. */
export async function getFeaturedProjects(lang: Locale): Promise<ProjectEntry[]> {
  const entries = await getProjects(lang);
  return entries.filter((p) => p.data.featured);
}

/** The translated twin of a project (same slug, other language), if it exists. */
export async function getProjectTranslation(entry: ProjectEntry): Promise<ProjectEntry | undefined> {
  const target: Locale = projectLang(entry) === 'en' ? 'zh' : 'en';
  const all = await getCollection('projects');
  return all.find((p) => projectLang(p) === target && projectSlug(p) === projectSlug(entry) && !p.data.draft);
}
