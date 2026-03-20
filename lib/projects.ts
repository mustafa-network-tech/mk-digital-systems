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

export type Project = BaseProject | FeaturedProject;

export function isFeaturedProject(p: Project): p is FeaturedProject {
  return "featured" in p && p.featured === true;
}

export const projects: Project[] = [
  {
    id: "1",
    featured: true,
    titleTr: "MK Field Ops",
    titleEn: "MK Field Ops",
    labelTr: "ÖNE ÇIKAN PROJE",
    labelEn: "FEATURED PROJECT",
    summaryTr: "Çok dilli saha operasyonu, ekip yönetimi ve proje takip platformu.",
    summaryEn: "Multi-language field operations, team management, and project tracking platform.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "i18n", "SaaS"],
    subtitleTr: "Çok dilli saha operasyonu ve proje yönetim platformu",
    subtitleEn: "Multi-language field operations and project management platform",
    detailTr: `MK Field Ops, Next.js ve TypeScript ile geliştirilmiş, saha operasyonlarını, ekip bazlı iş akışlarını ve proje süreçlerini yönetmek için tasarlanmış SaaS odaklı bir platformdur.

Uygulamanın kendisi 5 dil desteklemektedir:
Türkçe, İngilizce, İspanyolca, Fransızca ve Almanca.

Sistemde ilk kullanıcı proje alanını oluşturur ve campaign manager rolünü alır. Bu kullanıcı yeni üyeleri onaylayabilir, yetki verebilir ve proje içindeki erişimi yönetebilir.

Platformda 3 ana rol yapısı bulunur:
- Team Leader
- Project Manager
- Campaign Manager

Her kullanıcı yalnızca kendi rolüne uygun modülleri, ekranları ve yetkileri görür.

Sistem şu özellikleri içerir:
- günlük iş girişi
- imalat takibi
- malzeme takibi
- finansal ilerleme takibi
- haftalık ve aylık raporlama
- esnek hakediş / dönem tanımları
- ekip bazlı yüzde tanımlama
- yetki bazlı kullanıcı görünürlüğü ve iş akışı kontrolü

MK Field Ops, çok dilli SaaS mimarisini, rol tabanlı erişim yapısını, proje raporlamasını ve saha operasyon yönetimini tek bir üründe birleştirir.`,
    detailEn: `MK Field Ops is a SaaS-oriented platform built with Next.js and TypeScript, designed to manage field operations, team-based workflows, and structured project processes.

The product itself supports 5 languages:
Turkish, English, Spanish, French, and German.

The first user creates the project space and becomes the campaign manager. This user can approve new members, assign permissions, and manage access across the system.

The platform includes 3 main roles:
- Team Leader
- Project Manager
- Campaign Manager

Each user only sees the modules, views, and permissions allowed by their role.

The system includes:
- daily work entry
- production tracking
- material tracking
- financial progress tracking
- weekly and monthly reporting
- flexible progress/payment periods
- team-based percentage definitions
- permission-based user visibility and workflow control

MK Field Ops combines multilingual SaaS architecture, role-based access control, project reporting, and field operation management in a single product.`,
    modalStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Role-Based Access",
      "Multi-Language",
      "SaaS Architecture",
    ],
  },
  {
    id: "2",
    featured: true,
    titleTr: "MK Ops",
    titleEn: "MK Ops",
    labelTr: "ÜRÜN",
    labelEn: "PRODUCT",
    summaryTr: "Operasyon komuta ekranı: görevler, KPI’lar ve saha–ofis görünürlüğü tek panelde.",
    summaryEn: "Operations command view: tasks, KPIs, and field–office visibility in one panel.",
    stack: ["Next.js", "TypeScript", "Tailwind", "Supabase", "Dashboard", "SaaS"],
    subtitleTr: "Operasyon yönetimi ve koordinasyon paneli",
    subtitleEn: "Operations management and coordination panel",
    detailTr: `MK Ops, saha ekipleri ve ofis koordinasyonunu aynı operasyon görünümünde birleştirmek için tasarlanmış bir panel ve komuta katmanıdır.

Amaç; günlük operasyon akışını, öncelikleri ve performans göstergelerini tek ekranda toparlamak, gecikmeleri ve darboğazları erken görmektir.

MK Ops şu alanlara odaklanır:
- görev ve iş kalemi önceliklendirme
- ekip ve proje bazlı KPI / durum özeti
- saha ile ofis arasında tutarlı bilgi akışı
- raporlama ve üst yönetim özeti görünümleri
- rol bazlı erişim ile sadeleştirilmiş arayüz

MK Field Ops ile birlikte düşünüldüğünde; sahadaki detaylı iş akışları ve üretim takibi Field Ops tarafında, üst düzey operasyon koordinasyonu ve pano ihtiyacı MK Ops ile desteklenir.

Teknik olarak Next.js, TypeScript ve Supabase tabanlı, güvenli oturum ve ölçeklenebilir SaaS yapısına uygundur.`,
    detailEn: `MK Ops is a panel and command-layer product designed to align field teams and office coordination within one operational view.

The goal is to consolidate daily operations, priorities, and performance signals on a single surface—surfacing delays and bottlenecks early.

MK Ops focuses on:
- task and work-item prioritization
- team- and project-level KPI / status summaries
- consistent information flow between field and office
- reporting and executive overview views
- role-based access with a simplified interface

Together with MK Field Ops: detailed field workflows and production tracking live in Field Ops, while higher-level operations coordination and dashboard needs are supported by MK Ops.

Built on Next.js, TypeScript, and Supabase, suitable for secure sessions and scalable SaaS delivery.`,
    modalStack: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Dashboards",
      "KPI & Reporting",
      "Role-Based Access",
      "SaaS",
    ],
  },
];
