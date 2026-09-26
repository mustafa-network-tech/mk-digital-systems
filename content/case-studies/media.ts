import type { ProjectId } from "@/content/projects";

/**
 * Real screens for case studies, captured from each product's own demo or a
 * local run with clearly sample data (codes "DEMO-…", "Örnek Mahallesi").
 * Never production data: no real people, companies, phones, project or work
 * order numbers, locations, financial figures or site photos.
 * part: the ProjectPart the screen belongs to (for projects with several surfaces, e.g. MK Adisyon web and mobile).
 */
export type CaseScreen = {
  id: string;
  src: string;
  width: number;
  height: number;
  frame: "desktop" | "phone";
  part?: string;
};

const desktop = (id: string, src: string, part?: string): CaseScreen => ({ id, src, width: 1600, height: 1000, frame: "desktop", part });

export const caseStudyMedia: Partial<Record<ProjectId, CaseScreen[]>> = {
  "saha-santiye": [
    desktop("ops-approvals", "/hero/ops-approvals.webp"),
    { id: "ops-mobile", src: "/hero/saha-santiye-phone.webp", width: 560, height: 1120, frame: "phone" },
    desktop("ops-management", "/cases/mkops-management.webp"),
  ],
  "mk-adisyon": [
    desktop("adisyon-cashier", "/hero/adisyon-kasa.webp", "web"),
    { id: "adisyon-waiter", src: "/hero/adisyon-garson.webp", width: 560, height: 1212, frame: "phone", part: "web" },
    { id: "adisyon-mobile-app", src: "/cases/adisyon-mobile-app.webp", width: 390, height: 844, frame: "phone", part: "mobile" },
  ],
  "mk-farm": [
    desktop("farm-dashboard", "/cases/farm-dashboard.webp"),
    { id: "farm-animals-mobile", src: "/cases/farm-animals-mobile.webp", width: 390, height: 844, frame: "phone" },
    desktop("farm-reports", "/cases/farm-reports.webp"),
  ],
};
