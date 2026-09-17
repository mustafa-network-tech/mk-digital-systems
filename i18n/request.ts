import { getRequestConfig } from "next-intl/server";
import { locales, defaultLocale, type Locale } from "@/config/i18n";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested =
    typeof requestLocale === "string" ? requestLocale : await requestLocale;
  const locale =
    requested && locales.includes(requested as Locale) ? requested : defaultLocale;
  return {
    locale,
    // Public content is centralized in content/locales. Only navigation needs
    // the next-intl client context; don't ship complete dictionaries to clients.
    messages: {},
    timeZone: "UTC",
  };
});
