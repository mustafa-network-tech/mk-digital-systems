import type { Locale } from "@/config/i18n";
import { projects, projectsForService, type Project, type ProjectId, type ServiceId } from "@/content/projects";
import { getPricing, marketForLocale, type PricingCategory } from "@/content/pricing";
import { briefTypeForService, type BriefType } from "@/content/brief";
import tr from "./tr";

/* ==========================================================================
 * Solutions: the four commercial axes (Faz 4). One source for the hub, the
 * solution pages, the home overview, pricing rows and brief links.
 * SEO and WordPress work are support services inside Web, not an axis.
 * ========================================================================== */

export const solutionIds = ["web", "custom", "business", "mobile"] as const satisfies readonly ServiceId[];
export type SolutionId = (typeof solutionIds)[number];

/** Internal route per solution; the public, localized path comes from config/i18n pathnames. */
export const solutionRoutes = {
  web: "/solutions/web-design",
  custom: "/solutions/custom-software",
  business: "/solutions/business-management-systems",
  mobile: "/solutions/mobile-app-development",
} as const satisfies Record<SolutionId, string>;
export type SolutionRoute = (typeof solutionRoutes)[SolutionId];

/**
 * Real work shown first for each axis, in this order (checked by tests: every project
 * carries the service, has a status, a real screen and is not confidential or coming soon).
 * `home` is the single example on the home overview and never repeats Selected Works.
 */
export const solutionShowcase: Record<SolutionId, { home: ProjectId; page: ProjectId[] }> = {
  web: { home: "mavi-gayrimenkul", page: ["mavi-gayrimenkul", "kadraj-rotam", "mavi-sarkilar", "mavi-kafe"] },
  custom: { home: "santiye-yonetim", page: ["santiye-yonetim", "saha-santiye", "mk-farm", "kadraj-rotam"] },
  business: { home: "is-takip", page: ["mk-adisyon", "mk-resepsiyon", "mk-pati", "is-takip"] },
  mobile: { home: "aura", page: ["mk-adisyon", "aura"] },
};

/** Supporting services shown inside the Web solution (and on the hub), never as an axis. */
export const supportPricingIds = ["wordpress_revision", "seo"] as const;

export function isSolutionId(value: string): value is SolutionId {
  return (solutionIds as readonly string[]).includes(value);
}
export function solutionBySlug(slug: string): SolutionId | undefined {
  return solutionIds.find((id) => solutionRoutes[id] === `/solutions/${slug}`);
}
export function solutionSlug(id: SolutionId): string {
  return solutionRoutes[id].replace("/solutions/", "");
}
export function solutionBriefType(id: SolutionId): BriefType {
  return briefTypeForService(id);
}

/** Real work for a solution page: the showcase first, then the rest of the service family. */
export function solutionProjects(id: SolutionId, limit = 6): Project[] {
  const showcase = solutionShowcase[id].page.map((pid) => projects.find((p) => p.id === pid)!);
  const rest = projectsForService(id).filter(
    (p) => !showcase.includes(p) && p.status && p.status !== "coming-soon" && !p.confidential && p.media,
  );
  return [...showcase, ...rest].slice(0, limit);
}

/** New-project price rows of a solution (TR only; other markets quote per project). */
export function solutionPrices(id: SolutionId, locale: Locale) {
  const market = marketForLocale(locale);
  if (!market) return [];
  return getPricing(market).filter((level) => level.group === "new" && level.category === (id as PricingCategory));
}
/** The lowest new-project starting price of a solution, derived from content/pricing.ts. */
export function solutionStartingPrice(id: SolutionId, locale: Locale) {
  const rows = solutionPrices(id, locale);
  return rows.length ? rows.reduce((min, row) => (row.startingPrice < min.startingPrice ? row : min)) : undefined;
}

/* ---------- Localized copy ---------- */

export type SolutionPageCopy = {
  meta: { title: string; description: string };
  /** Short name used in lists, breadcrumbs and pricing rows. */
  name: string;
  /** H1: the page in the visitor's words. */
  title: string;
  lead: string;
  /** Home overview row and hub block: the need, then the approach, in one line each. */
  need: string;
  approach: string;
  needs: { heading: string; items: string[] };
  method: { heading: string; text: string; points: string[] };
  builds: { heading: string; items: { title: string; text: string }[] };
  work: { heading: string; text: string };
  faq: { heading: string; items: { question: string; answer: string }[] };
  cta: { title: string; text: string };
};

export type SolutionsCopy = {
  hub: {
    label: string;
    title: string;
    description: string;
    /** Heading of the four-axis list on the hub and the home page. */
    axesTitle: string;
    explore: string;
    example: string;
    support: { title: string; text: string };
  };
  /** Labels shared by the four solution pages (price notes come from content/pricing-copy). */
  page: {
    label: string;
    price: string;
    support: string;
    others: string;
    ctaPrimary: string;
    ctaSecondary: string;
    /** WhatsApp message; {solution} is replaced by the solution name. */
    inquiry: string;
  };
  items: Record<SolutionId, SolutionPageCopy>;
};

/** Written languages; a solution page exists only where its copy does (drives routes, hreflang, sitemap). */
const books: Partial<Record<Locale, SolutionsCopy>> = { tr };

export function getSolutionsCopy(locale: Locale): SolutionsCopy | undefined {
  return books[locale];
}
export function solutionLocales(): Locale[] {
  return (Object.keys(books) as Locale[]).filter((locale) => books[locale]);
}
