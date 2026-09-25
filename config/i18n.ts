import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
// Turkey is the main market: / always opens /tr.
export const defaultLocale: Locale = "tr";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: "always",
  // No Accept-Language redirect: / → /tr for every visitor; the language switcher covers en/de/fr.
  localeDetection: false,
});

/** @deprecated Use `routing` for middleware/navigation. Kept for backwards compatibility. */
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "always" as const,
};
