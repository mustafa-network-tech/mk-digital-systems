import type { ServiceId } from "./projects";
import type { PricingCategory, PricingGroup } from "./pricing";

/**
 * Project types a visitor can pick in the project brief. One list for the form,
 * the API validation and every ?type= link (solutions, pricing, case studies).
 * Localized labels live in content/locales → contact.types, keyed by these ids.
 */
export const briefTypes = ["web", "custom", "business", "mobile", "support", "unsure"] as const;
export type BriefType = (typeof briefTypes)[number];

/**
 * Retired ids from older links and cached forms. They map to the closest current
 * type so no ?type= link or late submission silently loses its intent.
 * "product" (digital product) and "smart" (AI / voice) now belong to custom software.
 */
const retiredTypes: Record<string, BriefType> = { product: "custom", smart: "custom" };

export function isBriefType(value: unknown): value is BriefType {
  return typeof value === "string" && (briefTypes as readonly string[]).includes(value);
}

/** A current brief type for a known (or retired) id; anything else is "unsure". */
export function toBriefType(value: unknown): BriefType {
  if (isBriefType(value)) return value;
  return (typeof value === "string" && retiredTypes[value]) || "unsure";
}

/** Whether an id is accepted from a submission: current or retired, never arbitrary text. */
export function isKnownBriefType(value: unknown): boolean {
  return isBriefType(value) || (typeof value === "string" && value in retiredTypes);
}

/** The brief type a project's service family leads to (case study CTAs). */
export function briefTypeForService(service: ServiceId): BriefType {
  return toBriefType(service);
}

/** The brief type for a starting-price row: support work, or the row's service family. */
export function briefTypeForPricing(level: { group: PricingGroup; category: PricingCategory }): BriefType {
  return level.group === "support" ? "support" : toBriefType(level.category);
}
