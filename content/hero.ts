import type { NeedId, ProjectId } from "./projects";

/**
 * Hero product stage. Product screens are real captures of each product's own
 * UI (public demo roles or sample data), never mock-ups.
 * layout: how the slide is composed, so each product keeps its own character.
 */
export type HeroLayout =
  | "desktop-phone" // a large screen with a phone in front (systems with a mobile side)
  | "phones" // a stack of phone screens (mobile apps)
  | "bleed" // one full-bleed screen (creative and visual web work)
  | "phone" // one phone on its own
  | "artwork"; // a brand or visual design piece
export type HeroImage = { src: string; width: number; height: number };
export const heroSlideIds = [
  "saha-santiye",
  "aura",
  "mavi-sarkilar",
  "mk-adisyon",
  "kadraj-rotam",
  "gonul-pusulasi",
  "musty",
  "mk-farm",
  "aria",
  "namehub",
  "mavi-kadraj-otel",
] as const;
export type HeroSlideId = (typeof heroSlideIds)[number];
export type HeroSlide = {
  id: HeroSlideId;
  /** Portfolio record for name and status; visual design pieces have none. */
  project?: ProjectId;
  name?: string;
  layout: HeroLayout;
  need: NeedId;
  /** First screen is the main one; the rest sit beside or behind it. */
  screens: HeroImage[];
  /** The product's own mark, shown in the slide caption. */
  logo?: HeroImage;
};

const desktop = (name: string): HeroImage => ({ src: `/hero/${name}.webp`, width: 1600, height: 1000 });
const phone = (name: string, height: number): HeroImage => ({ src: `/hero/${name}.webp`, width: 560, height });

export const heroSlides: HeroSlide[] = [
  {
    id: "saha-santiye", project: "saha-santiye", layout: "desktop-phone", need: "operations",
    screens: [desktop("ops-approvals"), phone("saha-santiye-phone", 1120)],
    logo: { src: "/hero/mkops.jpeg", width: 1024, height: 1024 },
  },
  { id: "aura", project: "aura", layout: "phones", need: "idea", screens: [phone("aura-today", 1212), phone("aura-mood", 1212), phone("aura-calendar", 1212)] },
  { id: "mavi-sarkilar", project: "mavi-sarkilar", layout: "bleed", need: "presence", screens: [desktop("mavi-sarkilar")] },
  { id: "mk-adisyon", project: "mk-adisyon", layout: "desktop-phone", need: "operations", screens: [desktop("adisyon-kasa"), phone("adisyon-garson", 1212)] },
  { id: "kadraj-rotam", project: "kadraj-rotam", layout: "bleed", need: "idea", screens: [desktop("kadraj-rotam")] },
  {
    id: "gonul-pusulasi", name: "Gönül Pusulası", layout: "artwork", need: "presence",
    screens: [{ src: "/hero/gp.jpg", width: 1024, height: 812 }],
  },
  { id: "musty", project: "musty", layout: "bleed", need: "presence", screens: [desktop("musty")] },
  { id: "mk-farm", project: "mk-farm", layout: "phone", need: "operations", screens: [phone("mk-farm-phone", 1064)] },
  {
    id: "aria", project: "aria", layout: "bleed", need: "idea", screens: [desktop("aria")],
    logo: { src: "/hero/aira.jpg", width: 999, height: 997 },
  },
  { id: "namehub", project: "namehub", layout: "bleed", need: "idea", screens: [desktop("namehub")] },
  {
    id: "mavi-kadraj-otel", project: "mavi-kadraj-otel", layout: "bleed", need: "presence", screens: [desktop("mavi-kadraj-otel")],
    logo: { src: "/hero/mavikadraj.png", width: 1024, height: 1536 },
  },
];

/** Very faint atmosphere behind the stage, one per slide in turn (brand artwork). */
export const heroBackdrops: HeroImage[] = ["mk", "mk1", "mk2", "mk3"].map((name) => ({
  src: `/hero/${name}.jpg`,
  width: 1536,
  height: 1024,
}));

/**
 * Default rotation alternates very different kinds of work (operations system,
 * mobile app, creative web, business system, digital product, visual design,
 * visual web, sector software) so the variety reads at a glance.
 */
export const heroRotation: HeroSlideId[] = [
  "saha-santiye",
  "aura",
  "mavi-sarkilar",
  "mk-adisyon",
  "kadraj-rotam",
  "gonul-pusulasi",
  "musty",
  "mk-farm",
];
/** What each need chip brings forward. */
export const heroNeedSlides: Record<NeedId, HeroSlideId[]> = {
  operations: ["saha-santiye", "mk-adisyon", "mk-farm"],
  presence: ["mavi-sarkilar", "musty", "mavi-kadraj-otel", "gonul-pusulasi"],
  idea: ["aura", "aria", "namehub", "kadraj-rotam"],
};
