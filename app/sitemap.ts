import type { MetadataRoute } from "next";
import { locales } from "@/config/i18n";
import {
  caseStudyAlternates,
  caseStudyUrl,
  isIndexable,
  languageAlternates,
  pagePaths,
  pageUrl,
  serviceAreasUrl,
  solutionAlternates,
  solutionUrl,
  cityUrl,
  turkishOnlyAlternates,
  type PageKey,
} from "@/lib/site-config";
import { caseStudyIds, caseStudyLocales } from "@/content/case-studies";
import { solutionIds, solutionLocales, solutionRoutes } from "@/content/solutions";
import { citySlug, hasServiceAreas, readyCities } from "@/content/cities";
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
  // Service areas and city pages: Turkish only, ready cities only.
  const areas = !hasServiceAreas() ? [] : [
    {
      url: serviceAreasUrl(),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: turkishOnlyAlternates(serviceAreasUrl()) },
    },
    ...readyCities().map((city) => ({
      url: cityUrl(citySlug(city.id)),
      changeFrequency: "monthly" as const,
      priority: 0.6,
      alternates: { languages: turkishOnlyAlternates(cityUrl(citySlug(city.id))) },
    })),
  ];
  return [...pages, ...solutions, ...cases, ...areas];
}
