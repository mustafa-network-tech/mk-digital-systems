import { test, expect } from "@playwright/test";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { socialLinks, siteLinks } from "../lib/site-links";
import { localPath } from "./paths";

for (const locale of locales) {
  test(`${locale}: secondary social links and creator credit without a map`, async ({
    page,
  }) => {
    const copy = getContent(locale);
    await page.goto(localPath(locale, "/contact"));
    await expect(page.locator('iframe[src*="google.com/maps"]')).toHaveCount(0);
    const socials = page.locator(".footer-socials");
    await expect(socials.locator("a")).toHaveCount(2);
    for (const link of socialLinks) {
      const anchor = socials.locator(`a[href="${link.url}"]`);
      await expect(anchor).toHaveAttribute("target", "_blank");
      await expect(anchor).toHaveAttribute("rel", "noopener noreferrer");
      await expect(anchor).toHaveAttribute(
        "aria-label",
        copy.footer.socialProfile.replace("{platform}", link.name),
      );
      await expect(anchor.locator("svg")).toHaveCount(1);
    }
    await expect(socials.locator('a[href*="facebook"]')).toHaveCount(0);
    await expect(page.locator(".footer-contact-actions a")).toHaveCount(3);
    await expect(page.locator(".footer-signature > p")).toContainText(
      copy.footer.signature,
    );
    const credit = page.locator(".footer-signature > p a");
    await expect(credit).toHaveAttribute("href", siteLinks.creator);
    await expect(credit).toHaveAttribute("target", "_blank");
    await expect(credit).toHaveAttribute("rel", "noopener noreferrer");
    for (const width of [360, 375, 390, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(
        await page.evaluate(
          () => document.documentElement.scrollWidth <= innerWidth,
        ),
      ).toBe(true);
      for (const link of await socials.locator("a").all())
        expect((await link.boundingBox())!.height).toBeGreaterThanOrEqual(44);
    }
    if (locale === "tr") {
      await page.addStyleTag({
        content: ".site-header,.skip-link{visibility:hidden!important}",
      });
      await page
        .locator("footer")
        .screenshot({ path: "artifacts/qa/social-footer-desktop.png" });
      await page.setViewportSize({ width: 390, height: 844 });
      await page
        .locator("footer")
        .screenshot({ path: "artifacts/qa/social-footer-mobile.png" });
    }
  });
}
