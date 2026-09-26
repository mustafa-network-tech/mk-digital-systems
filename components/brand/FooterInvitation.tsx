"use client";
import type { ReactNode } from "react";
import { usePathname } from "@/config/navigation";

/**
 * The footer's invitation block. Left out on the home page when that page closes
 * with its own Final CTA (`homeHasCta`); every other page keeps it unchanged.
 */
export function FooterInvitation({ homeHasCta, children }: { homeHasCta: boolean; children: ReactNode }) {
  const path = usePathname();
  return homeHasCta && path === "/" ? null : children;
}
