export type BaseProject = {
  id: string;
  titleTr: string;
  titleEn: string;
  summaryTr: string;
  summaryEn: string;
  stack: readonly string[];
  detailTr: string;
  detailEn: string;
  /** Optional custom card label (e.g. PROJE / PROJECT) */
  labelTr?: string;
  labelEn?: string;
  /** Optional modal subtitle */
  subtitleTr?: string;
  subtitleEn?: string;
  /** When set, card and modal show external link button opening this URL */
  externalUrl?: string;
  /** Optional button label override (e.g. "Uygulamaya Git" / "Visit App" for app links) */
  externalButtonLabelTr?: string;
  externalButtonLabelEn?: string;
  /** When true, card shows no label (no "Örnek" / "PROJE" etc.) */
  hideLabel?: boolean;
  /** When true, card and modal always use English content regardless of site locale */
  enOnly?: boolean;
};

export type FeaturedProject = BaseProject & {
  featured: true;
  labelTr: string;
  labelEn: string;
  subtitleTr: string;
  subtitleEn: string;
  modalStack: readonly string[];
};

/** Vitray kartı: Talep Et (WhatsApp) + Detayları Gör (site URL) */
export type ProductShowcaseProject = BaseProject & {
  productCard: true;
  externalUrl: string;
};

export type Project = BaseProject | FeaturedProject | ProductShowcaseProject;

export function isFeaturedProject(p: Project): p is FeaturedProject {
  return "featured" in p && p.featured === true;
}

export function isProductShowcaseProject(p: Project): p is ProductShowcaseProject {
  return "productCard" in p && p.productCard === true;
}

export const projects: Project[] = [
  {
    id: "mk-ops",
    productCard: true,
    titleTr: "MK Ops",
    titleEn: "MK Ops",
    summaryTr:
      "İş takibi, proje yönetimi, envanter kontrolü, kazanç takibi ve rol bazlı yetki sistemi ile operasyon süreçlerini tek panelden yönetin.",
    summaryEn:
      "Run operations from one panel: work tracking, project management, inventory, revenue tracking, and role-based access control.",
    stack: ["Next.js", "TypeScript", "Dashboard", "RBAC", "SaaS"],
    externalUrl: "https://mk-ops.tr",
    detailTr: `MK Ops; iş takibi, proje yönetimi, envanter kontrolü, kazanç takibi ve rol bazlı yetki sistemi ile operasyon süreçlerini tek panelden yönetmenizi sağlar.

Daha fazla bilgi için mk-ops.tr adresini ziyaret edebilir veya iletişim kanalı üzerinden talepte bulunabilirsiniz.`,
    detailEn: `MK Ops helps you manage operational processes from a single panel with work tracking, project management, inventory control, revenue tracking, and role-based permissions.

Visit mk-ops.tr for more information or reach out via the contact channel to request access.`,
  },
  {
    id: "mk-skor",
    productCard: true,
    titleTr: "MK Skor",
    titleEn: "MK Skor",
    summaryTr:
      "Test, analiz ve performans ölçümleri ile kullanıcıları zamana bağlı olarak değerlendirir, istatistiksel sonuçlar sunar.",
    summaryEn:
      "Evaluates users over time with tests, analytics, and performance metrics, and delivers statistical results.",
    stack: ["Next.js", "Analytics", "Reporting", "SaaS"],
    externalUrl: "https://mk-skor.vercel.app/",
    detailTr: `MK Skor; test, analiz ve performans ölçümleri ile kullanıcıları zamana bağlı olarak değerlendirir ve istatistiksel sonuçlar sunar.

Uygulamayı incelemek için mk-skor.vercel.app adresine gidebilir veya iletişim kanalı üzerinden talepte bulunabilirsiniz.`,
    detailEn: `MK Skor evaluates users over time using tests, analytics, and performance measurements, and provides statistical results.

Open mk-skor.vercel.app to explore the app or contact us to request access.`,
  },
];
