/**
 * Process Orbit Neural — 6-step delivery flow (TR + EN).
 * Used by ProcessOrbitNeural.tsx. No hardcoded copy in component.
 */

export const PROCESS_SECTION_TITLE = {
  tr: "Teslim akışı",
  en: "How we ship",
} as const;

export type ProcessStepId = "request" | "analysis" | "design" | "build" | "launch" | "support";

export interface ProcessStepContent {
  id: ProcessStepId;
  /** Short label for orbit node (one line). */
  nodeTitleTr: string;
  nodeTitleEn: string;
  titleTr: string;
  titleEn: string;
  descTr: string;
  descEn: string;
}

export const PROCESS_STEPS: ProcessStepContent[] = [
  {
    id: "request",
    nodeTitleTr: "Brief",
    nodeTitleEn: "Brief",
    titleTr: "Brief",
    titleEn: "Brief",
    descTr:
      "İş problemi, kullanıcılar ve başarı ölçütleri netleşir. Zaman, risk ve öncelikler baştan şeffaftır.",
    descEn:
      "We align on the problem, stakeholders, and success metrics. Time, risk, and priorities are explicit from day one.",
  },
  {
    id: "analysis",
    nodeTitleTr: "Keşif",
    nodeTitleEn: "Discovery",
    titleTr: "Keşif",
    titleEn: "Discovery",
    descTr:
      "Mevcut sistem veya entegrasyonlar varsa haritalanır. Performans, güvenlik ve veri akışı için teknik yol haritası çıkarılır.",
    descEn:
      "We map existing systems and integrations. Technical risks, performance, and data flows shape a concrete plan.",
  },
  {
    id: "design",
    nodeTitleTr: "Tasarım",
    nodeTitleEn: "Design",
    titleTr: "Ürün & bilgi mimarisi",
    titleEn: "Product & IA",
    descTr:
      "Ekran hiyerarşisi, yetkiler ve bileşen dili tanımlanır. Hız, tutarlılık ve operasyonel netlik hedeftir.",
    descEn:
      "We define screen hierarchy, permissions, and component language — optimized for speed, consistency, and operational clarity.",
  },
  {
    id: "build",
    nodeTitleTr: "Geliştirme",
    nodeTitleEn: "Build",
    titleTr: "Geliştirme",
    titleEn: "Build",
    descTr:
      "Seçilen yığınla modüler geliştirme; kod düzeni, test edilebilirlik ve devreye alınabilir parçalar önceliklidir.",
    descEn:
      "Modular engineering on the agreed stack — clean boundaries, testability, and shippable increments come first.",
  },
  {
    id: "launch",
    nodeTitleTr: "Yayın",
    nodeTitleEn: "Launch",
    titleTr: "Yayın & gözlem",
    titleEn: "Launch & observe",
    descTr:
      "Kritik akışlar doğrulanır, izleme ve geri dönüşler açılır. Üretimde ölçülebilir bir başlangıç hedeflenir.",
    descEn:
      "Critical paths are verified; monitoring and feedback loops go live. We aim for a measurable production cutover.",
  },
  {
    id: "support",
    nodeTitleTr: "Evrim",
    nodeTitleEn: "Evolve",
    titleTr: "İyileştirme",
    titleEn: "Improve",
    descTr:
      "Güncelleme, güvenlik ve küçük özellikler planlı şekilde devam eder; ürün yaşam döngüsüyle birlikte ilerler.",
    descEn:
      "Planned updates, security hygiene, and scoped features continue — software evolves with your operations.",
  },
];
