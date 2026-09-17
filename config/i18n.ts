import { defineRouting } from "next-intl/routing";

export const locales = ["tr", "en", "de", "fr"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "en";

export const routing = defineRouting({
  locales: [...locales],
  defaultLocale,
  localePrefix: "always",
});

/** @deprecated Use `routing` for middleware/navigation. Kept for backwards compatibility. */
export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "always" as const,
};
