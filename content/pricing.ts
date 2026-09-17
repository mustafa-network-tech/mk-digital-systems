import type { Locale } from "@/config/i18n";

export type PricingMarket = "TR" | "EU" | "US";
export type PricingCurrency = "TRY" | "EUR" | "USD";
export const pricingLevels = [
  { id: "landing_page", category: "web", startingPrice: 5000 },
  { id: "corporate_web", category: "web", startingPrice: 7500 },
  { id: "premium_web", category: "web", startingPrice: 12500 },
  { id: "reservation_system", category: "business", startingPrice: 15000 },
  { id: "management_panel", category: "business", startingPrice: 15000 },
  { id: "custom_software", category: "custom", startingPrice: 20000 },
  { id: "operations_system", category: "business", startingPrice: 25000 },
  { id: "saas_system", category: "custom", startingPrice: 35000 },
] as const;
export type PricingId = (typeof pricingLevels)[number]["id"];
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
