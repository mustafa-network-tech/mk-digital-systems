// Factual project data, separate from independently editable localized storytelling.
export type ProjectRecord = {
  id: string;
  name: string;
  image?: string;
  url?: string;
  status: "demo" | "active" | "development" | "project";
  scene: "ink" | "paper" | "blue";
  kind:
    | "ops"
    | "farm"
    | "hotel"
    | "restaurant"
    | "construction"
    | "web"
    | "analysis";
};
export const selectedProjects: ProjectRecord[] = [
  {
    id: "santiye",
    name: "Şantiye Yönetim Sistemi",
    image: "/work/santiye-yonetim-sistemi.webp",
    status: "active",
    scene: "ink",
    kind: "construction",
  },
  {
    id: "mk-farm",
    name: "MK Farm",
    image: "/work/mk-farm.webp",
    url: "https://graceful-melba-ff5818.netlify.app/",
    status: "active",
    scene: "paper",
    kind: "farm",
  },
  {
    id: "mavi-resepsiyon",
    name: "Mavi Resepsiyon",
    url: "https://resepsiyon.vercel.app/",
    status: "demo",
    scene: "blue",
    kind: "hotel",
  },
  {
    id: "mavi-adisyon",
    name: "Mavi Adisyon",
    url: "https://adisyonn.vercel.app/login",
    status: "demo",
    scene: "ink",
    kind: "restaurant",
  },
  {
    id: "mk-traceops",
    name: "MK TraceOps",
    image: "/work/mk-traceops.webp",
    status: "development",
    scene: "paper",
    kind: "ops",
  },
  {
    id: "mavi-kadraj-otel",
    name: "Mavi Kadraj Otel",
    image: "/work/mavi-kadraj-otel.webp",
    status: "demo",
    url: "https://mk-otel.vercel.app/",
    scene: "paper",
    kind: "web",
  },
  {
    id: "mavi-gayrimenkul",
    name: "Mavi Gayrimenkul",
    status: "demo",
    url: "https://mk-emlak-swfa.vercel.app/",
    scene: "blue",
    kind: "web",
  },
  {
    id: "mavi-kafe",
    name: "Mavi Kafe & Restaurant",
    status: "demo",
    url: "https://mk-kafe.vercel.app/",
    scene: "paper",
    kind: "web",
  },
];
