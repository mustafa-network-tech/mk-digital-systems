import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { heroSlides } from "../content/hero";
import { briefTypes } from "../content/brief";
import { getHomeCopy, otherSystems, selectedStories } from "../content/home";
import { solutionIds, solutionRoutes, solutionShowcase } from "../content/solutions";
import { localPath } from "./paths";

const written = locales.filter((l) => getHomeCopy(l));

test("home copy is proof, not promises: no testimonials, ratings, figures or commercial terms", () => {
  expect(written).toContain("tr");
  for (const locale of written) {
    const copy = JSON.stringify({ ...getHomeCopy(locale), process: getContent(locale).process });
    expect(copy, locale).not.toMatch(
      /testimonial|müşteri yorumu|yıldız|memnuniyet|\d+\s?%|%\s?\d+|kaynak kod|hosting|barındırma|bakım|KDV|revizyon|garanti|teslim süresi|destek süresi|SLA|\biOS\b|App Store|Android|AZG/i,
    );
    // The founder story names no employer and stays with the verified background.
    expect(getHomeCopy(locale)!.founder.paragraphs.join(" "), locale).toMatch(/20/);
  }
});

test("Selected Works: case studies with screens the hero does not use, then live systems", () => {
  const heroScreens = new Set(heroSlides.flatMap((s) => s.screens.map((screen) => screen.src)));
  const stories = selectedStories();
  expect(stories.map((s) => s.project.id)).toEqual(["saha-santiye", "mk-adisyon", "mk-farm"]);
  for (const { project, screen } of stories) {
    expect(screen, project.id).toBeTruthy();
    expect(heroScreens.has(screen.src), `${project.id} repeats a hero screen`).toBe(false);
  }
  const others = otherSystems().map((p) => p.id);
  expect(others).toEqual(["mk-resepsiyon", "mk-pati"]);
  // No public link, no status or confidential: never on the home page.
  for (const hidden of ["mk-kargo", "santiye-yonetim", "proje-asama-takip", "onayli-proje-takip"])
    expect(others).not.toContain(hidden);
});

for (const locale of written) {
  test(`${locale}: home sections in order, each with its own job`, async ({ page }) => {
    const home = getHomeCopy(locale)!;
    const c = getContent(locale);
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(`/${locale}`, { waitUntil: "networkidle" });
    await expect(page.locator("h1")).toHaveCount(1);
    const order = await page.evaluate(() =>
      Array.from(document.querySelectorAll("main > section, main > .process-section")).map(
        (s) => s.getAttribute("aria-labelledby") ?? s.className,
      ),
    );
    const expected = ["selected-work-title", "home-solutions-title", "founder-title", "process-section", "pricing-preview-title", "home-faq-title", "final-cta-title"];
    expect(order.filter((o) => expected.some((e) => o.includes(e)))).toEqual(expected.map((e) => expect.stringContaining(e)));
    // The retired sections are gone.
    await expect(page.locator(".needs-section, .industry-section, .capabilities-section")).toHaveCount(0);
    // Stories link to their case studies; the thin line shows other live systems.
    for (const { project } of selectedStories())
      await expect(page.locator(`#${project.id} .story-more`)).toHaveAttribute("href", `${localPath(locale, "/work")}/${project.id}`);
    await expect(page.locator(".other-systems li")).toHaveCount(otherSystems().length);
    await expect(page.locator("#mk-kargo")).toHaveCount(0);
    // Solutions: need → approach → real work, never a Selected Works project again.
    const storyIds = selectedStories().map((s) => s.project.id);
    for (const id of solutionIds) {
      await expect(page.locator(`#${id} h3 a`)).toHaveAttribute("href", localPath(locale, solutionRoutes[id]));
      expect(storyIds).not.toContain(solutionShowcase[id].home);
      await expect(page.locator(`#${id} .solution-row-work`)).toHaveAttribute(
        "href",
        `${localPath(locale, "/work")}#${solutionShowcase[id].home}`,
      );
    }
    // Founder: named, text first, linked to the work it explains.
    await expect(page.locator(".founder-section")).toContainText(home.founder.name);
    // FAQ: native disclosures, no FAQPage markup.
    await expect(page.locator(".home-faq .faq-item")).toHaveCount(home.faq.items.length);
    const graph = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(
      (s) => JSON.parse(s)["@graph"] ?? [],
    );
    expect(graph.map((n: { "@type": string }) => n["@type"])).not.toContain("FAQPage");
    // Final CTA: every brief type opens the form pre-selected; the footer does not repeat the invitation.
    const types = page.locator(".final-cta-types a");
    await expect(types).toHaveCount(briefTypes.length);
    for (const [i, type] of briefTypes.entries()) {
      await expect(types.nth(i)).toHaveText(c.contact.types[type]);
      await expect(types.nth(i)).toHaveAttribute("href", `${localPath(locale, "/contact")}?type=${type}`);
    }
    await expect(page.locator(".final-cta")).toContainText("iletisim@mk-digitalsystems.com");
    await expect(page.locator(".footer-invitation")).toHaveCount(0);
    await expect(page.locator(".footer-solutions a")).toHaveCount(solutionIds.length);
    for (const width of [360, 375, 390, 430, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px`).toBe(true);
    }
    expect(errors).toEqual([]);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual([]);
  });
}

test("the footer invitation stays on every other page", async ({ page }) => {
  for (const route of ["/work", "/solutions", "/contact"] as const) {
    await page.goto(localPath("tr", route));
    await expect(page.locator(".footer-invitation"), route).toHaveCount(1);
  }
});
