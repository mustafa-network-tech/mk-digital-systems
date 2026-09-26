import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { caseStudyIds, caseStudyLocales, caseStudyScreens, getCaseStudy } from "../content/case-studies";
import { getProject, relatedProjects } from "../content/projects";
import { localPath } from "./paths";

const path = (locale: (typeof locales)[number], slug: string) => `${localPath(locale, "/work")}/${slug}`;
const written = caseStudyIds.flatMap((id) => caseStudyLocales(id).map((locale) => ({ id, locale })));

test("case study copy is complete and never reads like a sales page", () => {
  expect(written).toHaveLength(caseStudyIds.length * locales.length);
  for (const id of caseStudyIds) expect(caseStudyLocales(id)).toEqual(locales);
  for (const { id, locale } of written) {
    const copy = getCaseStudy(locale, id)!;
    const where = `${locale}/${id}`;
    expect(copy.meta.title.length, `${where} title length`).toBeLessThanOrEqual(90);
    expect(copy.meta.description.length, `${where} description length`).toBeLessThanOrEqual(165);
    for (const screen of caseStudyScreens(id)) {
      expect(copy.screens[screen.id]?.caption, `${where} ${screen.id}`).toBeTruthy();
      expect(copy.screens[screen.id]?.alt, `${where} ${screen.id}`).toBeTruthy();
    }
    // No prices, packages, testimonials or invented percentages.
    expect(JSON.stringify(copy), where).not.toMatch(/satın al|paket seç|müşteri yorumu|\bTL\b|₺|€|\$|\d+\s?%|%\s?\d+|buy now|testimonial/i);
  }
});

test("MK Adisyon keeps the verified web and closed-test mobile surfaces distinct", () => {
  const project = getProject("mk-adisyon")!;
  expect(project.name).toBe("MK Adisyon");
  expect(project.parts).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: "web", status: "live-demo" }),
      expect.objectContaining({
        id: "mobile",
        status: "closed-test",
        links: [expect.objectContaining({ url: "https://adisyon-app-umber.vercel.app" })],
      }),
    ]),
  );
  expect(caseStudyScreens("mk-adisyon")).toEqual(
    expect.arrayContaining([
      expect.objectContaining({ id: "adisyon-waiter", part: "web" }),
      expect.objectContaining({ id: "adisyon-mobile-app", part: "mobile" }),
    ]),
  );
  for (const locale of locales) {
    const copy = getCaseStudy(locale, "mk-adisyon")!;
    expect(copy.solution.parts?.web).toBeTruthy();
    expect(copy.solution.parts?.mobile).toBeTruthy();
  }
});

for (const { id, locale } of written) {
  test(`${locale}/${id}: page, SEO layer and structure`, async ({ page }) => {
    const copy = getCaseStudy(locale, id)!;
    const c = getContent(locale);
    const url = path(locale, id);
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(copy.meta.title);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(copy.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", copy.meta.description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `http://localhost:3000${url}`);
    for (const l of [...caseStudyLocales(id), "x-default"])
      await expect(page.locator(`link[rel="alternate"][hreflang="${l}"]`)).toHaveCount(1);
    await expect(page.locator('meta[property="og:type"]')).toHaveAttribute("content", "article");
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", new RegExp(`/og/${locale}/${id}$`));
    const graph = (await page.locator('script[type="application/ld+json"]').allTextContents())
      .flatMap((s) => JSON.parse(s)["@graph"] ?? []);
    const types = graph.map((n: { "@type": string }) => n["@type"]);
    expect(types).toEqual(expect.arrayContaining(["WebPage", "BreadcrumbList", "CreativeWork"]));
    expect(types).not.toEqual(expect.arrayContaining(["Product"]));
    const crumbs = graph.find((n: { "@type": string }) => n["@type"] === "BreadcrumbList").itemListElement;
    expect(crumbs.map((i: { name: string }) => i.name)).toEqual([c.nav.home, c.nav.work, expect.any(String)]);
    await expect(page.locator(".breadcrumb li")).toHaveCount(3);
    // Every real screen loads and has alt text.
    for (const img of await page.locator(".case-gallery img, .case-stage img").all()) {
      await img.scrollIntoViewIfNeeded();
      await expect(img).toHaveAttribute("alt", /\S/);
      await expect.poll(() => img.evaluate((el: HTMLImageElement) => el.complete && el.naturalWidth > 0)).toBe(true);
    }
    // Related work comes from the data model and links onward.
    await expect(page.locator(".case-related .work-card")).toHaveCount(relatedProjects(id).length);
    for (const width of [360, 768, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px`).toBe(true);
    }
  });
}

test("all case studies are linked from /work and home, and switch language with their slug", async ({ page }) => {
  const label = getContent("tr").caseStudy.read;
  await page.goto(localPath("tr", "/work"));
  for (const id of caseStudyIds)
    await expect(page.locator(`#${id} a`, { hasText: label })).toHaveAttribute("href", path("tr", id));
  await page.goto("/tr");
  for (const id of caseStudyIds)
    await expect(page.locator(`#${id} .story-more`)).toHaveAttribute("href", path("tr", id));
  for (const id of caseStudyIds) {
    await page.goto(path("tr", id));
    await page.setViewportSize({ width: 1440, height: 900 });
    await page.locator(".language-menu summary").click();
    await page.locator(".language-options a[hreflang=en]").click();
    await expect(page).toHaveURL(new RegExp(`/en/work/${id}$`));
  }
});

test("old slugs redirect once, unknown case studies are 404, and every OG card renders", async ({ request }) => {
  for (const id of caseStudyIds) {
    const r = await request.get(`/tr/work/${id}`, { maxRedirects: 0 });
    expect(r.status()).toBe(301);
    expect(r.headers().location).toBe(path("tr", id));
    const og = await request.get(`/og/tr/${id}`);
    expect(og.status()).toBe(200);
    expect(og.headers()["content-type"]).toContain("image/png");
  }
  expect((await request.get(path("tr", "yok-boyle-bir-proje"))).status()).toBe(404);
});

for (const id of caseStudyIds)
  test(`${id}: case study passes WCAG checks`, async ({ page }) => {
    await page.goto(path("tr", id), { waitUntil: "networkidle" });
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual([]);
  });
