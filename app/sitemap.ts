import type { MetadataRoute } from "next";
import { locales } from "@/config/i18n";
import {
  isIndexable,
  languageAlternates,
  pagePaths,
  pageUrl,
  type PageKey,
} from "@/lib/site-config";
export default function sitemap(): MetadataRoute.Sitemap {
  if (!isIndexable) return [];
  return locales.flatMap((locale) =>
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
}
