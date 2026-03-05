export const locales = ["tr", "en"] as const;
export type Locale = (typeof locales)[number];
export const defaultLocale: Locale = "tr";

export const i18nConfig = {
  locales,
  defaultLocale,
  localePrefix: "always" as const,
};

export default async function getRequestConfig(opts: {
  requestLocale?: string | Promise<string | undefined>;
  locale?: string;
}) {
  const requested = opts.locale ?? opts.requestLocale;
  const localeResolved =
    requested == null ? undefined : typeof requested === "string" ? requested : await requested;
  let locale = localeResolved && locales.includes(localeResolved as Locale) ? localeResolved : defaultLocale;
  const messages = (await import(`../messages/${locale}.json`)).default;
  return { messages, locale, timeZone: "UTC" };
}
