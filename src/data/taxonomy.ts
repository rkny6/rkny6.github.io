/**
 * Shared vocabularies for project entries. Imported by the content schema
 * (content.config.ts) and by the views, so the lists live in one place.
 */
export const PROJECT_CATEGORIES = ['open-source', 'products', 'experiments', 'tools'] as const;
export type ProjectCategory = (typeof PROJECT_CATEGORIES)[number];

export const PROJECT_STATUSES = ['active', 'in-progress', 'completed', 'archived', 'concept'] as const;
export type ProjectStatus = (typeof PROJECT_STATUSES)[number];
