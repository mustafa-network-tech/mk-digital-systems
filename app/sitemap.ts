import type { MetadataRoute } from "next";
import { locales } from "@/config/i18n";
import {
  caseStudyAlternates,
  caseStudyUrl,
  isIndexable,
  languageAlternates,
  pagePaths,
  pageUrl,
  solutionAlternates,
  solutionUrl,
  type PageKey,
} from "@/lib/site-config";
import { caseStudyIds, caseStudyLocales } from "@/content/case-studies";
import { solutionIds, solutionLocales, solutionRoutes } from "@/content/solutions";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  const pages = locales.flatMap((locale) =>
    (Object.keys(pagePaths) as PageKey[]).map((page) => ({
      url: pageUrl(locale, page),
      changeFrequency: "monthly" as const,
      priority:
        page === "home"
          ? 1
          : page === "privacy" || page === "terms"
            ? 0.3
            : 0.8,
      alternates: { languages: languageAlternates(page) },
    })),
  );
  // Case studies: one entry per written locale, linked to each other.
  const cases = caseStudyIds.flatMap((id) => {
    const available = caseStudyLocales(id);
    return available.map((locale) => ({
      url: caseStudyUrl(locale, id),
      changeFrequency: "monthly" as const,
      priority: 0.7,
      alternates: { languages: caseStudyAlternates(id, available) },
    }));
  });
  // Solution pages: one entry per written locale, linked to each other.
  const available = solutionLocales();
  const solutions = solutionIds.flatMap((id) =>
    available.map((locale) => ({
      url: solutionUrl(locale, solutionRoutes[id]),
      changeFrequency: "monthly" as const,
      priority: 0.8,
      alternates: { languages: solutionAlternates(solutionRoutes[id], available) },
    })),
  );
  return [...pages, ...solutions, ...cases];
}
