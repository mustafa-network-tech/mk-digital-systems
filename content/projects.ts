/* ==========================================================================
 * Portfolio source of truth.
 * One record per showcased project; localized copy lives in content/project-copy
 * and is keyed by the same id. The id doubles as the URL slug (/work/[id]).
 * Only showcased layers live here: internal tools, later projects and projects
 * outside the MK portfolio are intentionally kept out of this public repo.
 * ========================================================================== */

/** flagship = case-study systems, selected = selected works, sector-demo = sample sector websites */
export type ProjectLayer = "flagship" | "selected" | "sector-demo";
/**
 * Only set a status after the public URL is verified; "in-use" only for real, active users.
 * "coming-soon" = on the roadmap and shown publicly, but with no demo yet (never implies one).
 */
export type ProjectStatus = "live-demo" | "closed-test" | "sample-site" | "in-use" | "coming-soon";
/** Service families (solution page ids); "mobile" is new, "smart" is the current AI/voice family. */
export type ServiceId = "web" | "custom" | "business" | "mobile" | "smart";
export type SectorId =
  | "field-operations"
  | "restaurant"
  | "agriculture"
  | "hospitality"
  | "veterinary"
  | "logistics"
  | "beauty"
  | "consulting"
  | "industrial-supply"
  | "retail"
  | "manufacturing"
  | "photography"
  | "music"
  | "community"
  | "lifestyle";
/** The three visitor intents used by the hero and the brief. */
export type NeedId = "operations" | "presence" | "idea";
/** demo = working demo, product = the product's own website, site = a public website */
export type ProjectLink = { kind: "demo" | "product" | "site"; url: string };
export type ProjectMedia = { src: string; frame: "phone" | "desktop" };
/** A sub-system or surface of one project (e.g. MK OPS inside Saha ve Şantiye). */
export type ProjectPart = { id: string; status?: ProjectStatus; links: ProjectLink[] };

export const projectIds = [
  "saha-santiye",
  "mk-adisyon",
  "mk-resepsiyon",
  "mk-pati",
  "mk-farm",
  "mk-kargo",
  "namehub",
  "aria",
  "mavi-kadraj-arsiv",
  "kadraj-rotam",
  "aura",
  "is-takip",
  "gunluk-imalat",
  "mavi-sarkilar",
  "musty",
  "mk-firsat",
  "mavi-kadraj-otel",
  "mavi-kafe",
  "mavi-guzellik",
  "mavi-danismanlik",
  "mavi-yapi",
  "mavi-iletisim",
] as const;
export type ProjectId = (typeof projectIds)[number];

export type Project = {
  id: ProjectId;
  name: string;
  layer: ProjectLayer;
  status?: ProjectStatus;
  services: ServiceId[];
  sectors: SectorId[];
  needs: NeedId[];
  cardType: "system" | "experience";
  scene: "ink" | "paper" | "blue";
  media?: ProjectMedia;
  links: ProjectLink[];
  parts?: ProjectPart[];
  /** First case studies (Faz 3). */
  caseStudy?: boolean;
};

export const projects: Project[] = [
  /* ---------- Flagship / case study systems ---------- */
  {
    id: "saha-santiye",
    name: "Saha ve Şantiye Operasyonları",
    layer: "flagship",
    status: "live-demo",
    services: ["custom", "business"],
    sectors: ["field-operations"],
    needs: ["operations"],
    cardType: "system",
    scene: "ink",
    media: { src: "/work/saha-santiye.webp", frame: "phone" },
    links: [],
    parts: [
      {
        id: "mk-ops",
        status: "live-demo",
        links: [
          { kind: "product", url: "https://www.mk-ops.tr" },
          { kind: "demo", url: "https://mkops-demo.vercel.app" },
        ],
      },
      {
        // A working system in real use (confirmed by Mustafa, 2026-09-26). No public
        // link: visitors must never be sent to the real system or its data.
        id: "santiye-yonetim",
        status: "in-use",
        links: [],
      },
    ],
    caseStudy: true,
  },
  {
    id: "mk-adisyon",
    name: "MK Adisyon",
    layer: "flagship",
    status: "live-demo",
    services: ["business", "mobile"],
    sectors: ["restaurant"],
    needs: ["operations"],
    cardType: "system",
    scene: "blue",
    media: { src: "/work/mk-adisyon.webp", frame: "desktop" },
    links: [],
    parts: [
      { id: "web", status: "live-demo", links: [{ kind: "demo", url: "https://adisyonn.vercel.app" }] },
      { id: "mobile", status: "closed-test", links: [] },
    ],
    caseStudy: true,
  },
  {
    id: "mk-resepsiyon",
    name: "MK Resepsiyon",
    layer: "flagship",
    status: "live-demo",
    services: ["business"],
    sectors: ["hospitality"],
    needs: ["operations"],
    cardType: "system",
    scene: "blue",
    media: { src: "/work/mk-resepsiyon.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://resepsiyon.vercel.app" }],
  },
  {
    id: "mk-pati",
    name: "MK Pati",
    layer: "flagship",
    status: "live-demo",
    services: ["business", "smart"],
    sectors: ["veterinary"],
    needs: ["operations"],
    cardType: "system",
    scene: "paper",
    media: { src: "/work/mk-pati.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://mavi-pati.vercel.app" }],
  },
  {
    id: "mk-farm",
    name: "MK Farm",
    layer: "flagship",
    status: "live-demo",
    services: ["custom", "business"],
    sectors: ["agriculture"],
    needs: ["operations"],
    cardType: "system",
    scene: "paper",
    media: { src: "/work/mk-farm.webp", frame: "phone" },
    links: [{ kind: "demo", url: "https://graceful-melba-ff5818.netlify.app" }],
    caseStudy: true,
  },
  {
    // No status until the public URL is live and verified.
    id: "mk-kargo",
    name: "MK Kargo",
    layer: "flagship",
    services: ["web", "business"],
    sectors: ["logistics"],
    needs: ["operations"],
    cardType: "system",
    scene: "ink",
    media: { src: "/work/mk-kargo.webp", frame: "desktop" },
    links: [],
  },
  /* ---------- Selected works ---------- */
  {
    id: "namehub",
    name: "NameHub",
    layer: "selected",
    status: "live-demo",
    services: ["web", "custom"],
    sectors: ["lifestyle"],
    needs: ["idea"],
    cardType: "experience",
    scene: "paper",
    media: { src: "/work/namehub.webp", frame: "desktop" },
    links: [{ kind: "product", url: "https://www.namehub.tr" }],
  },
  {
    id: "aria",
    name: "ARIA",
    layer: "selected",
    status: "live-demo",
    services: ["web", "custom"],
    sectors: ["community", "photography"],
    needs: ["idea"],
    cardType: "experience",
    scene: "ink",
    media: { src: "/work/aria.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://aria-demo-omega.vercel.app" }],
  },
  {
    id: "mavi-kadraj-arsiv",
    name: "Mavi Kadraj Arşiv",
    layer: "selected",
    status: "live-demo",
    services: ["web", "custom"],
    sectors: ["photography"],
    needs: ["presence"],
    cardType: "experience",
    scene: "blue",
    media: { src: "/work/mavi-kadraj-arsiv.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://arsiv.mavikadraj.com.tr" }],
  },
  {
    id: "kadraj-rotam",
    name: "Kadraj Rotam",
    layer: "selected",
    status: "live-demo",
    services: ["web", "custom"],
    sectors: ["photography"],
    needs: ["idea"],
    cardType: "experience",
    scene: "paper",
    media: { src: "/work/kadraj-rotam.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://kadrajrotam.com.tr" }],
  },
  {
    id: "aura",
    name: "Aura",
    layer: "selected",
    status: "live-demo",
    services: ["mobile"],
    sectors: ["lifestyle"],
    needs: ["idea"],
    cardType: "experience",
    scene: "blue",
    media: { src: "/work/aura.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://source-code-gray-theta.vercel.app" }],
  },
  {
    id: "is-takip",
    name: "İş Takip",
    layer: "selected",
    status: "live-demo",
    services: ["business"],
    sectors: [],
    needs: ["operations"],
    cardType: "system",
    scene: "ink",
    media: { src: "/work/is-takip.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://storied-eclair-15f19d.netlify.app" }],
  },
  {
    id: "gunluk-imalat",
    name: "Günlük İmalat Kartı",
    layer: "selected",
    status: "live-demo",
    services: ["business"],
    sectors: ["manufacturing"],
    needs: ["operations"],
    cardType: "system",
    scene: "paper",
    media: { src: "/work/gunluk-imalat.webp", frame: "desktop" },
    links: [{ kind: "demo", url: "https://lucent-mochi-7b5733.netlify.app" }],
  },
  {
    id: "mavi-sarkilar",
    name: "Mavi Şarkılar",
    layer: "selected",
    status: "sample-site",
    services: ["web"],
    sectors: ["music"],
    needs: ["presence"],
    cardType: "experience",
    scene: "ink",
    media: { src: "/work/mavi-sarkilar.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://spotify-demo-hazel.vercel.app" }],
  },
  {
    id: "musty",
    name: "Musty",
    layer: "selected",
    status: "sample-site",
    services: ["web"],
    sectors: ["music"],
    needs: ["presence"],
    cardType: "experience",
    scene: "ink",
    media: { src: "/work/musty.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://mk-music3.vercel.app" }],
  },
  {
    // No visual until the MK Fırsat identity is designed; no demo link while coming soon.
    id: "mk-firsat",
    name: "MK Fırsat",
    layer: "selected",
    status: "coming-soon",
    services: ["web", "mobile"],
    sectors: ["retail"],
    needs: ["idea"],
    cardType: "experience",
    scene: "blue",
    links: [],
  },
  /* ---------- Sector website demos ---------- */
  {
    id: "mavi-kadraj-otel",
    name: "Mavi Kadraj Otel",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["hospitality"],
    needs: ["presence"],
    cardType: "experience",
    scene: "paper",
    media: { src: "/work/mavi-kadraj-otel-site.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://mk-otel.vercel.app" }],
  },
  {
    id: "mavi-kafe",
    name: "Mavi Kafe",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["restaurant"],
    needs: ["presence"],
    cardType: "experience",
    scene: "paper",
    media: { src: "/work/mavi-kafe.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://mk-kafe.vercel.app" }],
  },
  {
    id: "mavi-guzellik",
    name: "Mavi Güzellik",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["beauty"],
    needs: ["presence"],
    cardType: "experience",
    scene: "blue",
    media: { src: "/work/mavi-guzellik.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://guzellik-salonu-demo-web.vercel.app" }],
  },
  {
    id: "mavi-danismanlik",
    name: "Mavi Danışmanlık",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["consulting"],
    needs: ["presence"],
    cardType: "experience",
    scene: "blue",
    media: { src: "/work/mavi-danismanlik.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://danismanlik-demo.vercel.app" }],
  },
  {
    id: "mavi-yapi",
    name: "Mavi Yapı",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["industrial-supply"],
    needs: ["presence"],
    cardType: "experience",
    scene: "ink",
    media: { src: "/work/mavi-yapi.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://mavi-yapi.vercel.app" }],
  },
  {
    id: "mavi-iletisim",
    name: "Mavi İletişim",
    layer: "sector-demo",
    status: "sample-site",
    services: ["web"],
    sectors: ["retail"],
    needs: ["presence"],
    cardType: "experience",
    scene: "paper",
    media: { src: "/work/mavi-iletisim.webp", frame: "desktop" },
    links: [{ kind: "site", url: "https://mavi-iletisim-demo.vercel.app" }],
  },
];

export const projectLayers: ProjectLayer[] = ["flagship", "selected", "sector-demo"];

export function getProject(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}
export function projectsByLayer(layer: ProjectLayer): Project[] {
  return projects.filter((p) => p.layer === layer);
}
/** Projects related to a service family, flagship first (solution pages and future service pages). */
export function projectsForService(service: ServiceId): Project[] {
  return projectLayers.flatMap((layer) =>
    projects.filter((p) => p.layer === layer && p.services.includes(service)),
  );
}
/** Projects related to a sector, flagship first (future sector pages). */
export function projectsForSector(sector: SectorId): Project[] {
  return projectLayers.flatMap((layer) =>
    projects.filter((p) => p.layer === layer && p.sectors.includes(sector)),
  );
}
