import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { locales, type Locale } from "@/config/i18n";
import { getContent } from "@/content/site";
import { contactConfig } from "@/lib/contact-config";
import { getProject, type ProjectId } from "@/content/projects";
import { getProjectCopy } from "@/content/project-copy";
import { caseStudyLocales, caseStudyScreens, getCaseStudy } from "@/content/case-studies";
import {
  SITE_URL,
  caseStudyAlternates,
  caseStudyUrl,
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
/** The organization, with the public contact point from lib/contact-config. */
function organizationNode(locale: Locale) {
  return {
    "@type": "Organization",
    "@id": `${SITE_URL}/#organization`,
    name: "MK Digital Systems",
    url: SITE_URL,
    email: contactConfig.email,
    telephone: contactConfig.phone,
    logo: `${SITE_URL}/brand/icon-512.png`,
    description: getContent(locale).footer.description,
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer service",
      email: contactConfig.email,
      telephone: contactConfig.phone,
      availableLanguage: ["tr", "en", "de", "fr"],
    },
  };
}
export function pageSchema(locale: Locale, page: PageKey) {
  const c = getContent(locale);
  const orgId = `${SITE_URL}/#organization`;
  const graph: Record<string, unknown>[] = [
    organizationNode(locale),
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

/* ---------- Case studies (/work/[slug]) ---------- */

const ogLocale = { tr: "tr_TR", en: "en_US", de: "de_DE", fr: "fr_FR" } as const;

export function caseStudyMetadata(locale: Locale, id: ProjectId): Metadata {
  const copy = getCaseStudy(locale, id)!;
  const available = caseStudyLocales(id);
  const url = caseStudyUrl(locale, id);
  const image = `${SITE_URL}/og/${locale}/${id}`;
  return {
    metadataBase: new URL(SITE_URL),
    title: copy.meta.title,
    description: copy.meta.description,
    alternates: { canonical: url, languages: caseStudyAlternates(id, available) },
    robots: { index: isIndexable, follow: isIndexable },
    openGraph: {
      title: copy.meta.title,
      description: copy.meta.description,
      siteName: "MK Digital Systems",
      url,
      type: "article",
      locale: ogLocale[locale],
      alternateLocale: available.filter((l) => l !== locale).map((l) => ogLocale[l]),
      images: [{ url: image, width: 1200, height: 630, alt: copy.title }],
    },
    twitter: { card: "summary_large_image", title: copy.meta.title, description: copy.meta.description, images: [image] },
  };
}

/**
 * Case study structured data: the page, its breadcrumb, and the work itself as a
 * CreativeWork by MK Digital Systems. No Product/Offer or review markup: these
 * pages describe a solved problem, they do not sell a product.
 */
export function caseStudySchema(locale: Locale, id: ProjectId) {
  const c = getContent(locale);
  const copy = getCaseStudy(locale, id)!;
  const project = getProject(id)!;
  const name = getProjectCopy(locale, id).name ?? project.name;
  const url = caseStudyUrl(locale, id);
  const orgId = `${SITE_URL}/#organization`;
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${url}#page`,
        url,
        name: copy.meta.title,
        description: copy.meta.description,
        inLanguage: locale,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        breadcrumb: { "@id": `${url}#breadcrumb` },
        mainEntity: { "@id": `${url}#work` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: c.nav.home, item: pageUrl(locale, "home") },
          { "@type": "ListItem", position: 2, name: c.nav.work, item: pageUrl(locale, "work") },
          { "@type": "ListItem", position: 3, name, item: url },
        ],
      },
      {
        "@type": "CreativeWork",
        "@id": `${url}#work`,
        name,
        headline: copy.title,
        description: copy.meta.description,
        inLanguage: locale,
        creator: { "@id": orgId },
        about: getProjectCopy(locale, id).industry,
        image: caseStudyScreens(id).map((screen) => `${SITE_URL}${screen.src}`),
      },
      { "@type": "Organization", "@id": orgId, name: "MK Digital Systems", url: SITE_URL },
      { "@type": "WebSite", "@id": `${SITE_URL}/#website`, name: "MK Digital Systems", url: SITE_URL, publisher: { "@id": orgId } },
    ],
  };
}
