import type { ProjectId } from "@/content/projects";

/**
 * Real screens for case studies, captured from each product's own demo or a
 * local run with clearly sample data (codes "DEMO-…", "Örnek Mahallesi").
 * Never production data: no real people, companies, phones, project or work
 * order numbers, locations, financial figures or site photos.
 * part: the ProjectPart the screen belongs to (for projects with two approaches).
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
    desktop("ops-approvals", "/hero/ops-approvals.webp", "mk-ops"),
    { id: "ops-mobile", src: "/hero/saha-santiye-phone.webp", width: 560, height: 1120, frame: "phone", part: "mk-ops" },
    desktop("ops-management", "/cases/mkops-management.webp", "mk-ops"),
    desktop("santiye-projects", "/cases/santiye-projects.webp", "santiye-yonetim"),
    { id: "santiye-mobile", src: "/cases/santiye-projects-mobile.webp", width: 560, height: 1212, frame: "phone", part: "santiye-yonetim" },
    desktop("santiye-dashboard", "/cases/santiye-dashboard.webp", "santiye-yonetim"),
  ],
};
