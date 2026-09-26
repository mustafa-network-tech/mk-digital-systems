import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { localPath } from "./paths";
import {
  getPricing,
  formatStartingPrice,
  marketForLocale,
  pricingMarkets,
} from "../content/pricing";

// Mustafa-approved starting prices (TL); support = work on an existing website.
const expectedPrices = {
  landing_page: 5000, corporate_web: 7500, premium_web: 12500,
  reservation_system: 15000, management_panel: 15000, mobile_app: 15000,
  custom_software: 20000, operations_system: 25000, saas_system: 35000,
  wordpress_revision: 5000, seo: 10000,
};
test("one TR price book supplies the approved starting budgets in two groups", () => {
  expect(Object.fromEntries(getPricing().map((level) => [level.id, level.startingPrice]))).toEqual(
    expectedPrices,
  );
  expect(getPricing().filter((level) => level.group === "support").map((level) => level.id)).toEqual(["wordpress_revision", "seo"]);
  expect(locales.map(marketForLocale)).toEqual(["TR", null, null, null]);
  expect(getPricing().every((level) => level.currency === "TRY")).toBe(true);
  expect(pricingMarkets.EU).toBeUndefined();
  expect(pricingMarkets.US).toBeUndefined();
  expect(() => getPricing("EU")).toThrow("not configured");
});
test("pricing copy claims no unverified app platform", () => {
  // No iOS release is verified; mobile work is described without naming platforms.
  for (const locale of locales)
    expect(JSON.stringify(getContent(locale).pricing), locale).not.toMatch(/\biOS\b|App Store|Android/i);
});
for (const locale of locales) {
  test(`${locale}: pricing is localized, readable HTML with contextual contact links`, async ({
    page,
    request,
  }) => {
    const copy = getContent(locale).pricing;
    const priced = marketForLocale(locale) !== null;
    await page.goto(`/${locale}`);
    if (priced) await expect(page.locator(".pricing-preview .pricing-amount span").first()).toHaveText(copy.previewFrom);
    else await expect(page.locator(".pricing-preview .pricing-amount").first()).toHaveText(copy.quote);
    for (const width of [360,375,390,430,768,1024,1440]) {
      await page.setViewportSize({width,height:900});
      expect(await page.locator(".pricing-preview").evaluate(section => Array.from(section.querySelectorAll<HTMLElement>("article,h3,p")).every(element => element.scrollWidth <= element.clientWidth + 1)), `Preview text at ${width}px`).toBe(true);
    }
    await expect(page.locator(".pricing-preview .pricing-entry")).toHaveCount(
      3,
    );
    await expect(page.locator(".pricing-preview")).toContainText(
      copy.disclaimer,
    );
    await expect(
      page.locator(".pricing-preview .pricing-bottom a"),
    ).toHaveAttribute("href", `${localPath(locale, "/solutions")}#pricing`);
    await page.locator(".pricing-preview .pricing-bottom a").click();
    await expect(page).toHaveURL(new RegExp(`${localPath(locale, "/solutions")}#pricing$`));
    const pricing = page.locator("#pricing");
    await expect(pricing.locator("article")).toHaveCount(getPricing().length);
    await expect(pricing.locator("h2")).toHaveText(copy.title);
    await expect(pricing.locator(".pricing-group-title")).toHaveText([copy.groupTitles.new, copy.groupTitles.support]);
    for (const level of getPricing()) {
      const row = pricing.locator(`[data-pricing-group="${level.group}"] [data-pricing-id="${level.id}"]`);
      await expect(row.locator("h4")).toHaveText(copy.items[level.id].title);
      await expect(row.locator(".pricing-amount")).toHaveText(
        priced
          ? `${copy.from}${formatStartingPrice(level.startingPrice, level.currency, locale)}${copy.suffix}`
          : copy.quote,
      );
      const href = await row.locator("a").getAttribute("href");
      expect(href).toMatch(/^https:\/\/wa\.me\/\d+\?text=/);
      expect(new URL(href!).searchParams.get("text")).toBe(
        copy.inquiry.replace("{service}", copy.items[level.id].title),
      );
    }
    await expect(
      pricing.locator(".pricing-contact-links a").first(),
    ).toHaveAttribute("href", /^tel:\+\d+$/);
    await expect(
      pricing.locator(".pricing-contact-links a").last(),
    ).toHaveAttribute("href", /^mailto:/);
    const html = await (await request.get(localPath(locale, "/solutions"))).text();
    expect(html).toContain('id="pricing"');
    // Amounts are real HTML in Turkish; other locales never show TL amounts.
    if (priced) expect(html).toContain(formatStartingPrice(35000, "TRY", locale));
    else {
      expect(html).not.toMatch(/\d[\d.,\s]*\s?TL\b/);
      await expect(pricing).not.toContainText("TL");
    }
    for (const width of [360, 375, 390, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
        `${width}px`,
      ).toBe(true);
      for (const link of await pricing.locator("a").all()) {
        const box = await link.boundingBox();
        expect(box!.height).toBeGreaterThanOrEqual(44);
      }
    }
    const accessibility = await new AxeBuilder({ page })
      .include("#pricing")
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(accessibility.violations.map((v) => v.id)).toEqual([]);
  });
}
