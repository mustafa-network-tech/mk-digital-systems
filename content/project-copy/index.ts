import type { Locale } from "@/config/i18n";
import type { ProjectId } from "@/content/projects";
import tr from "./tr";
import en from "./en";
import de from "./de";
import fr from "./fr";

/**
 * Localized project copy, keyed by project id (content/projects.ts).
 * Every locale must describe every project: a missing id is a type error.
 * Flagship projects also carry headline / problem / solution / modules for
 * their system cards and future case studies.
 */
export type ProjectCopy = {
  /** Localized display name, only when it differs from Project.name. */
  name?: string;
  /** Short sector or category eyebrow. */
  industry: string;
  /** One-sentence description used on cards. */
  summary: string;
  headline?: string;
  problem?: string;
  solution?: string;
  modules?: string[];
  /** Alt text for the project's media. */
  alt?: string;
  /** Names and one-line descriptions for ProjectPart ids. */
  parts?: Record<string, { name: string; description: string }>;
};
export type ProjectCopyBook = Record<ProjectId, ProjectCopy>;

const books: Record<Locale, ProjectCopyBook> = { tr, en, de, fr };

export function getProjectCopy(locale: Locale, id: ProjectId): ProjectCopy {
  return books[locale][id];
}
