import { locales, type Locale } from "@/config/i18n";
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
export const pagePaths = {
  home: "",
  solutions: "/solutions",
  work: "/work",
  contact: "/contact",
  privacy: "/legal/privacy",
  terms: "/legal/terms",
} as const;
export type PageKey = keyof typeof pagePaths;
export function pageUrl(locale: Locale, page: PageKey) {
  return `${SITE_URL}/${locale}${pagePaths[page]}`;
}
export function languageAlternates(page: PageKey) {
  return {
    ...Object.fromEntries(
      locales.map((locale) => [locale, pageUrl(locale, page)]),
    ),
    "x-default": pageUrl("en", page),
  };
}
