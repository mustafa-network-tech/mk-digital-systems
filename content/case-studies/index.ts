import type { Locale } from "@/config/i18n";
import { projects, type ProjectId } from "@/content/projects";
import { caseStudyMedia } from "./media";
import tr from "./tr";
import en from "./en";
import de from "./de";
import fr from "./fr";

/**
 * Case studies: the story of a solved problem, told as
 * who → problem → approach → solution → real screens → modules → status.
 * Never a product sales page: no prices, packages, testimonials or unverified results.
 * Which projects have one comes from Project.caseStudy; copy is per locale.
 */
export type CaseStudySection = { heading: string; text: string; points?: string[] };
export type CaseStudyCopy = {
  meta: { title: string; description: string };
  /** H1: what the page is about, in the visitor's words. */
  title: string;
  lead: string;
  audience: CaseStudySection;
  problem: CaseStudySection;
  approach: CaseStudySection;
  /** How it was solved; for projects with parts, each part adds its own summary. */
  solution: CaseStudySection & {
    parts?: Record<string, { summary: string; highlights: string[] }>;
  };
  /** Captions and alt texts for caseStudyMedia screens, keyed by screen id. */
  screens: Record<string, { caption: string; alt: string }>;
  screensNote: string;
  /** Closing line under "Facing a similar problem?", specific to this problem. */
  ctaText: string;
  modules: { heading: string; items: { title: string; text: string }[] };
};

const books: Record<Locale, Partial<Record<ProjectId, CaseStudyCopy>>> = { tr, en, de, fr };

/** Projects that have a case study, in portfolio order. */
export const caseStudyIds: ProjectId[] = projects.filter((p) => p.caseStudy).map((p) => p.id);

export function getCaseStudy(locale: Locale, id: string): CaseStudyCopy | undefined {
  return caseStudyIds.includes(id as ProjectId) ? books[locale][id as ProjectId] : undefined;
}
/** Locales in which a case study is written (drives static params, hreflang and sitemap). */
export function caseStudyLocales(id: ProjectId): Locale[] {
  return (Object.keys(books) as Locale[]).filter((locale) => books[locale][id]);
}
export function caseStudyScreens(id: ProjectId) {
  return caseStudyMedia[id] ?? [];
}
