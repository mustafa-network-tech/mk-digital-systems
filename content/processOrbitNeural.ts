/**
 * Process Orbit Neural — 6-step project flow content (TR + EN).
 * Used by ProcessOrbitNeural.tsx. No hardcoded copy in component.
 */

export const PROCESS_SECTION_TITLE = {
  tr: "Proje Süreci",
  en: "Project Flow",
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
    nodeTitleTr: "Talep",
    nodeTitleEn: "Request",
    titleTr: "Talep",
    titleEn: "Request",
    descTr:
      "İhtiyacınızı netleştirir, hedefi ve kapsamı belirleriz. Zaman–bütçe–öncelik üçlüsünü baştan şeffaflaştırırız.",
    descEn:
      "We clarify your needs and define scope and goals. We make time–budget–priorities transparent from day one.",
  },
  {
    id: "analysis",
    nodeTitleTr: "Analiz",
    nodeTitleEn: "Analysis",
    titleTr: "Analiz",
    titleEn: "Analysis",
    descTr:
      "Mevcut yapı/altyapı varsa inceleriz. Performans, SEO, güvenlik ve kullanıcı akışı için yol haritası çıkarırız.",
    descEn:
      "If there's an existing system, we audit it. We map performance, SEO, security, and user flows into a clear roadmap.",
  },
  {
    id: "design",
    nodeTitleTr: "Tasarım",
    nodeTitleEn: "Design",
    titleTr: "Tasarım & Planlama",
    titleEn: "Design & Planning",
    descTr:
      "Arayüz mimarisi, sayfa akışı ve bileşen dili belirlenir. Temiz, hızlı ve marka uyumlu UI hedefleriz.",
    descEn:
      "We define UI architecture, page flow, and component language. Clean, fast, brand-aligned UI is the target.",
  },
  {
    id: "build",
    nodeTitleTr: "Kodlama",
    nodeTitleEn: "Build",
    titleTr: "Geliştirme",
    titleEn: "Development",
    descTr:
      "Next.js / WordPress / PHP gibi uygun teknolojiyle geliştirme yapılır. Kod düzeni, modülerlik ve sürdürülebilirlik esas alınır.",
    descEn:
      "We build with the right stack (Next.js / WordPress / PHP). Modularity, maintainability, and clean code come first.",
  },
  {
    id: "launch",
    nodeTitleTr: "Test & Yayın",
    nodeTitleEn: "Testing & Launch",
    titleTr: "Test & Yayın",
    titleEn: "Testing & Launch",
    descTr:
      "Mobil/masaüstü uyumluluk, hız, formlar ve kritik akışlar test edilir. Yayına alınır ve temel izleme kurulur.",
    descEn:
      "We test responsiveness, speed, forms, and critical flows. Then we launch and set up basic monitoring.",
  },
  {
    id: "support",
    nodeTitleTr: "Bakım & Destek",
    nodeTitleEn: "Maintenance",
    titleTr: "Bakım & Destek",
    titleEn: "Maintenance & Support",
    descTr:
      "Güncelleme, iyileştirme ve teknik destek devam eder. İhtiyaç oldukça yeni özellikler planlayıp devreye alırız.",
    descEn:
      "We keep improving with updates and support. When needed, we plan and ship new features.",
  },
];
