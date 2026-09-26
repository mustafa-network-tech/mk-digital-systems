"use client";
import type { ReactNode } from "react";
import { usePathname } from "@/config/navigation";

/**
 * The footer's invitation block, left out on the home page where the Final CTA
 * already closes the page; every other page keeps it unchanged.
 */
export function FooterInvitation({ children }: { children: ReactNode }) {
  return usePathname() === "/" ? null : children;
}
