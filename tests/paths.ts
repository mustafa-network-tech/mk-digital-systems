import { pathnames, type Locale } from "../config/i18n";

export type Route = keyof typeof pathnames;

/** Public URL path of an internal route, e.g. ("tr", "/work") → "/tr/calismalar". */
export function localPath(locale: Locale, route: Route): string {
  const entry: string | Partial<Record<Locale, string>> = pathnames[route];
  const path = typeof entry === "string" ? entry : (entry[locale] ?? route);
  return `/${locale}${path === "/" ? "" : path}`;
}
