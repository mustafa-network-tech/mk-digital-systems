import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/config/i18n";
import { getContent } from "@/content/site";
import { CONTACT_EMAIL } from "@/lib/constants";
import {
  SITE_URL,
  isIndexable,
  languageAlternates,
  pageUrl,
  type PageKey,
} from "./site-config";
export function validLocale(locale: string): Locale {
  if (!locales.includes(locale as Locale)) notFound();
  return locale as Locale;
}
export function pageMetadata(locale: Locale, page: PageKey): Metadata {
  const { title, description } = getContent(locale).meta[page];
  const image = `${SITE_URL}/og/${locale}/${page === "privacy" || page === "terms" ? "home" : page}`;
  return {
    metadataBase: new URL(SITE_URL),
    title,
    description,
    alternates: {
      canonical: pageUrl(locale, page),
      languages: languageAlternates(page),
    },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: {
      title,
      description,
      siteName: "MK Digital Systems",
      url: pageUrl(locale, page),
      type: "website",
      locale: { tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR" }[locale],
      alternateLocale: locales
        .filter((l) => l !== locale)
        .map(
          (l) => ({ tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR" })[l],
        ),
      images: [{ url: image, width: 1200, height: 630, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
export function pageSchema(locale: Locale, page: PageKey) {
  const c = getContent(locale);
  const orgId = `${SITE_URL}/#organization`;
  const graph: Record<string, unknown>[] = [
    {
      "@type": "Organization",
      "@id": orgId,
      name: "MK Digital Systems",
      url: SITE_URL,
      email: CONTACT_EMAIL,
      logo: `${SITE_URL}/brand/icon-512.png`,
      description: c.footer.description,
    },
    {
      "@type": "WebSite",
      "@id": `${SITE_URL}/#website`,
      name: "MK Digital Systems",
      url: SITE_URL,
      inLanguage: [...locales],
      publisher: { "@id": orgId },
    },
    {
      "@type": "WebPage",
      "@id": `${pageUrl(locale, page)}#page`,
      url: pageUrl(locale, page),
      name: c.meta[page].title,
      description: c.meta[page].description,
      inLanguage: locale,
      isPartOf: { "@id": `${SITE_URL}/#website` },
      about: { "@id": orgId },
    },
  ];
  if (page !== "home")
    graph.push({
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: c.nav.home,
          item: pageUrl(locale, "home"),
        },
        {
          "@type": "ListItem",
          position: 2,
          name:
            page === "privacy"
              ? c.footer.privacy
              : page === "terms"
                ? c.footer.terms
                : c.nav[page],
          item: pageUrl(locale, page),
        },
      ],
    });
  if (page === "solutions")
    c.solutions.items.forEach((item) =>
      graph.push({
        "@type": "Service",
        "@id": `${pageUrl(locale, page)}#${item.id}`,
        name: item.title,
        description: item.description,
        serviceType: item.title,
        provider: { "@id": orgId },
        url: `${pageUrl(locale, page)}#${item.id}`,
      }),
    );
  return { "@context": "https://schema.org", "@graph": graph };
}
