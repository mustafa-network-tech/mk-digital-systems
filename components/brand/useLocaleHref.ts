"use client";
import type { ComponentProps } from "react";
import { useParams } from "next/navigation";
import { Link, usePathname } from "@/config/navigation";

/**
 * The current page as a Link href for switching language. Dynamic routes
 * (e.g. /work/[slug]) need their params so each locale gets its own slug path.
 */
export function useLocaleHref() {
  const pathname = usePathname();
  const params = useParams();
  const href = pathname.includes("[") ? { pathname, params } : pathname || "/";
  return href as ComponentProps<typeof Link>["href"];
}
