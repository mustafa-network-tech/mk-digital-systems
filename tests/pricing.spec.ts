import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { localPath } from "./paths";
import {
  getPricing,
  formatStartingPrice,
  pricingMarkets,
} from "../content/pricing";

const expectedPrices = [5000, 7500, 12500, 15000, 15000, 20000, 25000, 35000];
test("one price book supplies the eight requested starting budgets", () => {
  expect(getPricing().map((level) => level.startingPrice)).toEqual(
    expectedPrices,
  );
  expect(getPricing().every((level) => level.currency === "TRY")).toBe(true);
  expect(pricingMarkets.EU).toBeUndefined();
  expect(pricingMarkets.US).toBeUndefined();
  expect(() => getPricing("EU")).toThrow("not configured");
});
for (const locale of locales) {
  test(`${locale}: pricing is localized, readable HTML with contextual contact links`, async ({
    page,
    request,
  }) => {
    const copy = getContent(locale).pricing;
    await page.goto(`/${locale}`);
    await expect(page.locator(".pricing-preview .pricing-amount span").first()).toHaveText(copy.previewFrom);
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
    await expect(pricing.locator("article")).toHaveCount(8);
    await expect(pricing.locator("h2")).toHaveText(copy.title);
    for (const level of getPricing()) {
      const row = pricing.locator(`[data-pricing-id="${level.id}"]`);
      await expect(row.locator("h3")).toHaveText(copy.items[level.id].title);
      await expect(row.locator(".pricing-amount")).toHaveText(
        `${copy.from}${formatStartingPrice(level.startingPrice, level.currency, locale)}${copy.suffix}`,
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
    expect(html).toContain(formatStartingPrice(35000, "TRY", locale));
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
