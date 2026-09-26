import { defaultLocale, locales, pathnames, type Locale } from "@/config/i18n";
export const configuredSiteUrl = process.env.SITE_URL?.trim();
function origin(value: string): string {
  const url = new URL(value);
  if (
    !/^https?:$/.test(url.protocol) ||
    url.username ||
    url.password ||
    url.pathname !== "/" ||
    url.search ||
    url.hash
  )
    throw new Error("SITE_URL must be a plain HTTP(S) origin");
  return url.origin;
}
export const SITE_URL = origin(configuredSiteUrl || "http://localhost:3000");
export const isIndexable =
  !!configuredSiteUrl &&
  process.env.VERCEL_ENV !== "preview" &&
  new URL(SITE_URL).protocol === "https:";
/** Internal route per page; the public, localized path comes from `pathnames`. */
export const pagePaths = {
  home: "/",
  solutions: "/solutions",
  work: "/work",
  contact: "/contact",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
} as const;
export type PageKey = keyof typeof pagePaths;
export function localizedPath(locale: Locale, page: PageKey): string {
  const entry: string | Partial<Record<Locale, string>> = pathnames[pagePaths[page]];
  const path = typeof entry === "string" ? entry : (entry[locale] ?? pagePaths[page]);
  return path === "/" ? "" : path;
}
export function pageUrl(locale: Locale, page: PageKey) {
  return `${SITE_URL}/${locale}${localizedPath(locale, page)}`;
}
/** Case study URL: the localized /work path plus the project id as slug. */
export function caseStudyUrl(locale: Locale, slug: string) {
  const entry: string | Partial<Record<Locale, string>> = pathnames["/work/[slug]"];
  const path = typeof entry === "string" ? entry : (entry[locale] ?? "/work/[slug]");
  return `${SITE_URL}/${locale}${path.replace("[slug]", slug)}`;
}
/** hreflang map for a case study, limited to the locales it is written in. */
export function caseStudyAlternates(slug: string, available: readonly Locale[]) {
  return {
    ...Object.fromEntries(available.map((locale) => [locale, caseStudyUrl(locale, slug)])),
    "x-default": caseStudyUrl(available.includes(defaultLocale) ? defaultLocale : available[0], slug),
  };
}
export function languageAlternates(page: PageKey) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, pageUrl(locale, page)]),
    ),
    "x-default": pageUrl(defaultLocale, page),
  };
}
