import type { ProjectId } from "@/content/projects";
import type { SolutionId } from "@/content/solutions";

/**
 * City pages (Faz 5): one Turkish page per city at /tr/{id}-web-tasarim.
 * Ids are ASCII so the slug needs no transliteration.
 */
export const cityIds = [
  "bolu",
  "duzce",
  "sakarya",
  "bartin",
  "kilis",
  "osmaniye",
  "karaman",
  "yozgat",
  "yalova",
  "bilecik",
  "kocaeli",
  "tekirdag",
  "canakkale",
  "bursa",
  "nevsehir",
  "eskisehir",
  "edirne",
  "zonguldak",
] as const;
export type CityId = (typeof cityIds)[number];

export const cityRegions = ["marmara", "karadeniz", "ic-anadolu", "guney"] as const;
export type CityRegion = (typeof cityRegions)[number];

/** Page sections. Each city orders and words them for itself; none is required twice. */
export type CityBlock =
  | { kind: "story"; heading: string; paragraphs: string[] }
  | { kind: "economy"; heading: string; intro: string; sectors: { title: string; text: string }[] }
  | { kind: "needs"; heading: string; intro?: string; items: { title: string; text: string }[] }
  | {
      kind: "solutions";
      heading: string;
      intro: string;
      /** In the order that matters most for this city; each text is written for the city. */
      items: { id: SolutionId; text: string }[];
    }
  | {
      kind: "work";
      heading: string;
      intro: string;
      /** Real MK projects as capability examples only, never as local references. */
      projects: { id: ProjectId; note: string }[];
    }
  | { kind: "note"; heading: string; paragraphs: string[] }
  | { kind: "faq"; heading: string; items: { question: string; answer: string }[] };

export type CityPage = {
  id: CityId;
  /** Display name, e.g. "Çanakkale". */
  name: string;
  /** Groups the service-areas index. */
  region: CityRegion;
  /** Only ready pages are routed, listed and put in the sitemap. */
  ready: boolean;
  meta: { title: string; description: string };
  eyebrow: string;
  /** H1. */
  title: string;
  lead: string;
  /** One line for the service-areas index. */
  summary: string;
  blocks: CityBlock[];
  cta: { title: string; text: string; whatsapp: string };
  /** Official sources the city facts come from (rendered as a short source list). */
  sources: { label: string; url: string }[];
};
