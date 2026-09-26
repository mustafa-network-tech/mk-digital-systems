import type { Locale } from "@/config/i18n";
import { projects, type Project } from "@/content/projects";
import { caseStudyScreens } from "@/content/case-studies";
import tr from "./tr";

/**
 * Home page sections after the hero (Faz 4): Selected Works → Solutions → Founder →
 * Process → Starting prices → FAQ → Final CTA. Each has one job; the hero shows
 * capability variety, Selected Works shows proof and story.
 */
export type HomeCopy = {
  selectedWorks: { label: string; title: string; description: string; others: string };
  solutions: {
    label: string;
    title: string;
    description: string;
    need: string;
    approach: string;
    example: string;
    all: string;
  };
  founder: {
    label: string;
    title: string;
    paragraphs: string[];
    name: string;
    role: string;
    proof: string;
  };
  faq: { label: string; title: string; items: { question: string; answer: string }[] };
  finalCta: {
    label: string;
    title: string;
    text: string;
    types: string;
    primary: string;
  };
};

/** Written languages; other locales keep the previous home sections until translated. */
const books: Partial<Record<Locale, HomeCopy>> = { tr };
export function getHomeCopy(locale: Locale): HomeCopy | undefined {
  return books[locale];
}

/** Big stories: every case study, told with a screen the hero does not use. */
export function selectedStories(): { project: Project; screen: ReturnType<typeof caseStudyScreens>[number] }[] {
  return projects
    .filter((p) => p.caseStudy)
    .map((project) => ({ project, screen: caseStudyScreens(project.id).find((s) => s.featured)! }));
}

/** The thin "other systems" line: live flagship systems without a case study yet. */
export function otherSystems(): Project[] {
  return projects.filter(
    (p) =>
      p.layer === "flagship" &&
      !p.caseStudy &&
      !p.confidential &&
      p.media &&
      (p.status === "live-demo" || p.status === "closed-test") &&
      [...p.links, ...(p.parts ?? []).flatMap((part) => part.links)].length > 0,
  );
}
