import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
// Turkey is the main market: / always opens /tr.
export const defaultLocale: Locale = "tr";

/**
 * Public URL per locale for each internal route (app/[locale]/...).
 * Turkish uses Turkish slugs; en/de/fr keep the English ones. Old Turkish
 * URLs 301 to these in next.config.mjs; keep both lists in sync.
 */
export const pathnames = {
  "/": "/",
  "/solutions": { tr: "/cozumler" },
  // One static entry per solution (content/solutions): the slug differs per language.
  "/solutions/web-design": { tr: "/cozumler/web-tasarim" },
  "/solutions/custom-software": { tr: "/cozumler/ozel-yazilim" },
  "/solutions/business-management-systems": { tr: "/cozumler/isletme-yonetim-sistemleri" },
  "/solutions/mobile-app-development": { tr: "/cozumler/mobil-uygulama" },
  "/work": { tr: "/calismalar" },
  "/work/[slug]": { tr: "/calismalar/[slug]" },
  "/contact": { tr: "/iletisim" },
  "/legal/privacy": { tr: "/yasal/gizlilik" },
  "/legal/terms": { tr: "/yasal/kosullar" },
} as const;

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: "always",
  // No Accept-Language redirect: / → /tr for every visitor; the language switcher covers en/de/fr.
  localeDetection: false,
  pathnames,
});

/** @deprecated Use `routing` for middleware/navigation. Kept for backwards compatibility. */
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "always" as const,
};
