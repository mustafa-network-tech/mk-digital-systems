import type { Locale } from "@/config/i18n";

export type PricingMarket = "TR" | "EU" | "US";
export type PricingCurrency = "TRY" | "EUR" | "USD";
/** new = a project built from scratch; support = work on a customer's existing website. */
export type PricingGroup = "new" | "support";
export const pricingGroups: PricingGroup[] = ["new", "support"];
export const pricingLevels = [
  { id: "landing_page", group: "new", category: "web", startingPrice: 5000 },
  { id: "corporate_web", group: "new", category: "web", startingPrice: 7500 },
  { id: "premium_web", group: "new", category: "web", startingPrice: 12500 },
  { id: "reservation_system", group: "new", category: "business", startingPrice: 15000 },
  { id: "management_panel", group: "new", category: "business", startingPrice: 15000 },
  { id: "mobile_app", group: "new", category: "mobile", startingPrice: 15000 },
  { id: "custom_software", group: "new", category: "custom", startingPrice: 20000 },
  { id: "operations_system", group: "new", category: "business", startingPrice: 25000 },
  { id: "saas_system", group: "new", category: "custom", startingPrice: 35000 },
  { id: "wordpress_revision", group: "support", category: "web", startingPrice: 5000 },
  { id: "seo", group: "support", category: "web", startingPrice: 10000 },
] as const;
export type PricingId = (typeof pricingLevels)[number]["id"];
export type PricingCategory = (typeof pricingLevels)[number]["category"];
type PriceBook = {
  currency: PricingCurrency;
  prices: Record<PricingId, number>;
};
// Independent market price books can be added later. No exchange-rate conversion.
export const pricingMarkets: Partial<Record<PricingMarket, PriceBook>> = {
  TR: {
    currency: "TRY",
    prices: Object.fromEntries(
      pricingLevels.map((p) => [p.id, p.startingPrice]),
    ) as Record<PricingId, number>,
  },
};
/** Only Turkish visitors see amounts; other locales get a project-based quotation. */
export function marketForLocale(locale: Locale): PricingMarket | null {
  return locale === "tr" ? "TR" : null;
}
export function getPricing(market: PricingMarket = "TR") {
  const book = pricingMarkets[market];
  if (!book) throw new Error(`Pricing is not configured for market ${market}`);
  return pricingLevels.map((level) => ({
    ...level,
    startingPrice: book.prices[level.id],
    currency: book.currency,
  }));
}
export function formatStartingPrice(
  amount: number,
  currency: PricingCurrency,
  locale: Locale,
) {
  const number = new Intl.NumberFormat(locale, {
    maximumFractionDigits: 0,
  }).format(amount);
  return `${number} ${currency === "TRY" ? "TL" : currency}`;
}
