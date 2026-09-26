import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales, type Locale } from "../config/i18n";
import { getContent } from "../content/site";
import { contactConfig, normalizePhone } from "../lib/contact-config";
import { localPath, type Route } from "./paths";
import { projectsByLayer } from "../content/projects";
import { getProjectCopy } from "../content/project-copy";

test("contact defaults and domestic numbers share valid international URLs", () => {
  expect(normalizePhone("0545 659 75 51")).toBe("905456597551");
  expect(normalizePhone("5456597551")).toBe("905456597551");
  expect(normalizePhone("+90 545 659 75 51")).toBe("905456597551");
  expect(normalizePhone("00905456597551")).toBe("905456597551");
  expect(contactConfig.email).toBe("iletisim@mk-digitalsystems.com");
  expect(contactConfig.emailHref).toBe("mailto:iletisim@mk-digitalsystems.com");
  expect(contactConfig.phoneDisplay).toBe("0545 659 75 51");
  expect(contactConfig.phoneHref).toBe("tel:+905456597551");
  expect(contactConfig.whatsappHref).toBe("https://wa.me/905456597551");
});
for (const locale of locales) {
  test(`${locale}: final contact actions, legal email and public SEO`, async ({
    page,
  }) => {
    const copy = getContent(locale);
    const titles = new Set<string>(),
      descriptions = new Set<string>();
    for (const path of [
      "/",
      "/solutions",
      "/work",
      "/contact",
      "/legal/privacy",
      "/legal/terms",
    ] as Route[]) {
      await page.goto(localPath(locale, path));
      const actions = page.locator(".footer-contact-actions");
      await expect(actions.locator("a")).toHaveCount(3);
      await expect(actions.locator('a[href="tel:+905456597551"]')).toHaveText(
        copy.contact.call,
      );
      await expect(
        actions.locator('a[href="https://wa.me/905456597551"]'),
      ).toHaveText(copy.contact.whatsapp);
      await expect(
        actions.locator(`a[href="${contactConfig.emailHref}"]`),
      ).toHaveText(copy.contact.emailUs);
      expect(await page.locator("body").innerText()).not.toMatch(
        /hotmail\.com|Projenizi konuşalım|Benzer bir projeyi konuşalım|Discuss a similar project|Parlons d'un projet similaire|Ein ähnliches Projekt besprechen/,
      );
      titles.add(await page.title());
      descriptions.add(
        (await page
          .locator('meta[name="description"]')
          .getAttribute("content"))!,
      );
      const canonical = new URL((await page.locator('link[rel="canonical"]').getAttribute("href"))!);
      expect(canonical.pathname).toBe(localPath(locale, path));
      for (const alternate of [...locales,"x-default"]) {
        const href = (await page.locator(`link[rel="alternate"][hreflang="${alternate}"]`).getAttribute("href"))!;
        expect(new URL(href).origin).toBe(canonical.origin);
        expect(new URL(href).pathname).toBe(localPath(alternate === "x-default" ? "tr" : (alternate as Locale), path));
      }
      await expect(page.locator('meta[property="og:url"]')).toHaveAttribute("content",canonical.href);
      await expect(page.locator('meta[name="twitter:card"]')).toHaveAttribute(
        "content",
        "summary_large_image",
      );
      const schema = JSON.parse(
        (await page
          .locator('script[type="application/ld+json"]')
          .first()
          .textContent())!,
      );
      const organization = schema["@graph"].find(
        (node: Record<string, unknown>) => node["@type"] === "Organization",
      );
      expect(organization.email).toBe(contactConfig.email);
      expect(organization.contactPoint.email).toBe(contactConfig.email);
      expect(organization.telephone).toBe("+905456597551");
      expect(
        schema["@graph"].some((node: Record<string, unknown>) =>
          ["Review", "AggregateRating", "Product", "Offer"].includes(
            String(node["@type"]),
          ),
        ),
      ).toBe(false);
      for (const width of [360, 375, 390, 430, 768, 1024, 1440]) {
        await page.setViewportSize({ width, height: 900 });
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= innerWidth,
          ),
          `${path} ${width}px`,
        ).toBe(true);
        for (const link of await actions.locator("a").all()) {
          const box = (await link.boundingBox())!;
          expect(box.height).toBeGreaterThanOrEqual(44);
          expect(box.x).toBeGreaterThanOrEqual(0);
          expect(box.x + box.width).toBeLessThanOrEqual(width + 1);
        }
      }
      if (path.startsWith("/legal/"))
        await expect(
          page.locator(
            `.legal-content a[href="${contactConfig.emailHref}"]`,
          ),
        ).toHaveText(contactConfig.email);
    }
    expect(titles.size).toBe(6);
    expect(descriptions.size).toBe(6);
    await page.goto(localPath(locale, "/work"));
    for (const project of projectsByLayer("flagship")) {
      const link = page.locator(`#${project.id} .story-links > a[target="_blank"]`).first();
      const first = project.links[0] ?? project.parts?.flatMap((part) => part.links)[0];
      if (first) await expect(link).toHaveAttribute("href", first.url);
      else
        expect(
          new URL((await link.getAttribute("href"))!).searchParams.get("text"),
        ).toContain(getProjectCopy(locale, project.id).name ?? project.name);
    }
    await page.goto(localPath(locale, "/contact"));
    await page.setViewportSize({ width: 390, height: 844 });
    const channels = (await page.locator(".contact-channels").boundingBox())!;
    const form = (await page.locator(".brief-form").boundingBox())!;
    expect(channels.y).toBeLessThan(form.y);
    const accessibility = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(accessibility.violations.map((v) => v.id)).toEqual([]);
  });
}
