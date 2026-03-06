import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "@/config/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested =
    typeof requestLocale === "string" ? requestLocale : await requestLocale;
  const locale =
    requested && locales.includes(requested as Locale) ? requested : defaultLocale;
  const messages = (await import(`../messages/${locale}.json`)).default;
  return {
    locale,
    messages,
    timeZone: "UTC",
  };
});
