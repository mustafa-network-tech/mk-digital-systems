import type { NeedId, ProjectId } from "./projects";

/**
 * Hero product stage: real project → real screen. Every surface is a capture of the
 * product's own working site, app or demo (public demo roles or sample data),
 * never a logo, poster or mock-up. Logos may only appear small in the caption.
 * layout: how the slide is composed, so each product keeps its own character.
 */
export type HeroLayout =
  | "desktop-phone" // a large screen with a phone in front (systems with a mobile side)
  | "phones" // a stack of phone screens (mobile apps)
  | "bleed" // one full-bleed screen (creative and visual web work)
  | "phone" // one phone on its own
  | "layered" // a web surface with a 9:16 content surface (content projects)
  | "photo"; // a web/archive surface with one of its photographs as a print
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
  "mavi-kadraj-arsiv",
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
  /** Kind of work shown in the caption when there is no portfolio record. */
  kind?: "selected" | "sector-demo";
  layout: HeroLayout;
  need: NeedId;
  /** First screen is the main one; the rest sit beside or behind it. */
  screens: HeroImage[];
  /** The product's own mark, shown in the slide caption. */
  logo?: HeroImage;
};

const desktop = (name: string): HeroImage => ({
  src: `/hero/${name}.webp`,
  width: 1600,
  height: 1000,
});
const phone = (name: string, height: number): HeroImage => ({
  src: `/hero/${name}.webp`,
  width: 560,
  height,
});

export const heroSlides: HeroSlide[] = [
  {
    id: "saha-santiye",
    project: "saha-santiye",
    layout: "desktop-phone",
    need: "operations",
    screens: [desktop("ops-approvals"), phone("saha-santiye-phone", 1120)],
    logo: { src: "/hero/mkops.jpeg", width: 1024, height: 1024 },
  },
  {
    id: "aura",
    project: "aura",
    layout: "phones",
    need: "idea",
    screens: [
      phone("aura-today", 1212),
      phone("aura-mood", 1212),
      phone("aura-calendar", 1212),
    ],
  },
  {
    id: "mavi-sarkilar",
    project: "mavi-sarkilar",
    layout: "bleed",
    need: "presence",
    screens: [desktop("mavi-sarkilar")],
  },
  {
    id: "mk-adisyon",
    project: "mk-adisyon",
    layout: "desktop-phone",
    need: "operations",
    screens: [desktop("adisyon-kasa"), phone("adisyon-garson", 1212)],
  },
  {
    id: "kadraj-rotam",
    project: "kadraj-rotam",
    layout: "bleed",
    need: "idea",
    screens: [desktop("kadraj-rotam")],
  },
  {
    // The web experience, with a 9:16 typewriter story from "kendi hâlinde 1i".
    id: "gonul-pusulasi",
    project: "gonul-pusulasi",
    layout: "layered",
    need: "presence",
    screens: [
      desktop("gonul-pusulasi-web"),
      { src: "/hero/gonul-pusulasi-story.webp", width: 560, height: 995 },
    ],
  },
  {
    id: "musty",
    project: "musty",
    layout: "bleed",
    need: "presence",
    screens: [desktop("musty")],
  },
  {
    id: "mk-farm",
    project: "mk-farm",
    layout: "phone",
    need: "operations",
    screens: [phone("mk-farm-phone", 1064)],
  },
  {
    // The archive site, with one of the "Seçilmiş Kareler" photographs from mavikadraj.com.tr.
    id: "mavi-kadraj-arsiv",
    project: "mavi-kadraj-arsiv",
    layout: "photo",
    need: "presence",
    screens: [
      desktop("mavi-kadraj-arsiv"),
      { src: "/hero/mavi-kadraj-photo.webp", width: 900, height: 601 },
    ],
  },
  {
    id: "aria",
    project: "aria",
    layout: "bleed",
    need: "idea",
    screens: [desktop("aria")],
  },
  {
    id: "namehub",
    project: "namehub",
    layout: "bleed",
    need: "idea",
    screens: [desktop("namehub")],
  },
  {
    id: "mavi-kadraj-otel",
    project: "mavi-kadraj-otel",
    layout: "bleed",
    need: "presence",
    screens: [desktop("mavi-kadraj-otel")],
  },
];

/** Faint MK brand atmosphere behind the stage (no artwork with invented figures). */
export const heroBackdrop: HeroImage = { src: "/hero/mk.jpg", width: 1536, height: 1024 };

/**
 * Default rotation alternates very different kinds of work (operations system,
 * mobile app, creative web, business system, digital discovery product, content
 * platform, sector software, photography, visual web) so the variety reads at a glance.
 */
export const heroRotation: HeroSlideId[] = [
  "saha-santiye",
  "aura",
  "mavi-sarkilar",
  "mk-adisyon",
  "kadraj-rotam",
  "gonul-pusulasi",
  "mk-farm",
  "mavi-kadraj-arsiv",
  "musty",
];
/** What each need chip brings forward. */
export const heroNeedSlides: Record<NeedId, HeroSlideId[]> = {
  operations: ["saha-santiye", "mk-adisyon", "mk-farm"],
  presence: [
    "mavi-sarkilar",
    "musty",
    "mavi-kadraj-arsiv",
    "gonul-pusulasi",
    "mavi-kadraj-otel",
  ],
  idea: ["aura", "aria", "namehub", "kadraj-rotam"],
};
