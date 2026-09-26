"use client";
import type { ComponentProps } from "react";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/config/navigation";
import type { Locale } from "@/config/i18n";

type Href = ComponentProps<typeof Link>["href"];
/** Routes that exist in Turkish only (content/cities): other languages open their home page. */
const turkishOnly = ["/service-areas", "/[area]"];

/**
 * The current page as a Link href for switching to `target`. Dynamic routes
 * (e.g. /work/[slug]) need their params so each locale gets its own slug path.
 */
export function useLocaleHref() {
  const pathname = usePathname();
  const params = useParams();
  const href = pathname.includes("[") ? { pathname, params } : pathname || "/";
  return (target: Locale) => (target !== "tr" && turkishOnly.includes(pathname) ? "/" : href) as Href;
}
