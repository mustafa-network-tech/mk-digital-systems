import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { getProject, projects } from "../content/projects";
import { getCaseStudy } from "../content/case-studies";
import { briefTypes } from "../content/brief";
import {
  getSolutionsCopy,
  solutionIds,
  solutionLocales,
  solutionProjects,
  solutionPrices,
  solutionRoutes,
  solutionShowcase,
  solutionSlug,
} from "../content/solutions";
import { localPath } from "./paths";

const written = solutionLocales();
const pages = written.flatMap((locale) => solutionIds.map((id) => ({ locale, id })));

test("four commercial axes, each written with complete, honest copy", () => {
  expect(solutionIds).toEqual(["web", "custom", "business", "mobile"]);
  expect(written).toContain("tr");
  for (const { locale, id } of pages) {
    const copy = getSolutionsCopy(locale)!.items[id];
    const where = `${locale}/${id}`;
    expect(copy.meta.title.length, `${where} title`).toBeLessThanOrEqual(90);
    expect(copy.meta.description.length, `${where} description`).toBeLessThanOrEqual(165);
    expect(copy.meta.description.length, `${where} description`).toBeGreaterThan(90);
    for (const list of [copy.needs.items, copy.method.points, copy.builds.items, copy.faq.items])
      expect(list.length, where).toBeGreaterThan(1);
    // No invented commercial terms, platform claims, social proof or figures.
    expect(JSON.stringify(copy), where).not.toMatch(
      /kaynak kod|hosting|barındırma|bakım|KDV|revizyon|garanti|teslim süresi|destek süresi|\biOS\b|App Store|Android|müşteri yorumu|testimonial|\d+\s?%|%\s?\d+|₺|\bTL\b/i,
    );
  }
  // Every title and description is unique across solution pages and the site's own pages.
  for (const locale of written) {
    const c = getContent(locale);
    const items = Object.values(getSolutionsCopy(locale)!.items);
    const titles = [...items.map((i) => i.meta.title), ...Object.values(c.meta).map((m) => m.title)];
    const descriptions = [...items.map((i) => i.meta.description), ...Object.values(c.meta).map((m) => m.description)];
    expect(new Set(titles).size, locale).toBe(titles.length);
    expect(new Set(descriptions).size, locale).toBe(descriptions.length);
  }
});

test("showcased work is real, verifiable and never repeats on the home page", () => {
  const homeExamples = solutionIds.map((id) => solutionShowcase[id].home);
  expect(new Set(homeExamples).size).toBe(homeExamples.length);
  for (const id of solutionIds) {
    for (const pid of [solutionShowcase[id].home, ...solutionShowcase[id].page]) {
      const p = getProject(pid)!;
      expect(p, pid).toBeTruthy();
      expect(p.services, `${id}: ${pid} carries the service`).toContain(id);
      expect(p.status, pid).toBeTruthy();
      expect(p.status, pid).not.toBe("coming-soon");
      expect(p.media, `${pid} real screen`).toBeTruthy();
      expect(p.confidential, pid).toBeFalsy();
    }
    for (const p of solutionProjects(id)) expect(p.services, `${id}: ${p.id}`).toContain(id);
  }
  // Home examples never repeat the Selected Works stories.
  for (const pid of homeExamples) expect(projects.find((p) => p.id === pid)!.caseStudy, pid).toBeFalsy();
});

test("every solution leads to a real brief type and has prices from the price book", () => {
  for (const id of solutionIds) {
    expect(briefTypes as readonly string[]).toContain(id);
    expect(solutionPrices(id, "tr").length, id).toBeGreaterThan(0);
    for (const locale of locales.filter((l) => l !== "tr")) expect(solutionPrices(id, locale), `${locale} ${id}`).toEqual([]);
  }
});

for (const { locale, id } of pages) {
  test(`${locale}/${id}: page, SEO layer and structure`, async ({ page }) => {
    const all = getSolutionsCopy(locale)!;
    const copy = all.items[id];
    const c = getContent(locale);
    const url = localPath(locale, solutionRoutes[id]);
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    await page.goto(url, { waitUntil: "networkidle" });
    await expect(page).toHaveTitle(copy.meta.title);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(copy.title);
    await expect(page.locator('meta[name="description"]')).toHaveAttribute("content", copy.meta.description);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", `http://localhost:3000${url}`);
    for (const l of [...written, "x-default"])
      await expect(page.locator(`link[rel="alternate"][hreflang="${l}"]`)).toHaveCount(1);
    await expect(page.locator('meta[property="og:image"]')).toHaveAttribute("content", new RegExp(`/og/${locale}/${solutionSlug(id)}$`));
    await expect(page.locator('meta[name="robots"]')).toHaveAttribute("content", /noindex/);
    const graph = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(
      (s) => JSON.parse(s)["@graph"] ?? [],
    );
    const types = graph.map((n: { "@type": string }) => n["@type"]);
    expect(types).toEqual(expect.arrayContaining(["WebPage", "BreadcrumbList", "Service", "Organization"]));
    for (const banned of ["Offer", "Product", "AggregateRating", "Review", "FAQPage"]) expect(types).not.toContain(banned);
    const crumbs = graph.find((n: { "@type": string }) => n["@type"] === "BreadcrumbList").itemListElement;
    expect(crumbs.map((i: { name: string }) => i.name)).toEqual([c.nav.home, c.nav.solutions, copy.name]);
    await expect(page.locator(".breadcrumb li")).toHaveCount(3);
    // Real work from the data model, prices from the price book, questions as native disclosures.
    await expect(page.locator(".solution-work .work-card")).toHaveCount(solutionProjects(id).length);
    for (const p of solutionProjects(id).filter((p) => getCaseStudy(locale, p.id)))
      await expect(page.locator(".solution-stories a", { hasText: p.name })).toHaveCount(1);
    await expect(page.locator(".solution-prices").first().locator(".pricing-entry")).toHaveCount(solutionPrices(id, locale).length);
    await expect(page.locator(".faq-item")).toHaveCount(copy.faq.items.length);
    await page.locator(".faq-item summary").first().click();
    await expect(page.locator(".faq-item").first()).toHaveAttribute("open", "");
    // The other three solutions and a pre-selected brief.
    await expect(page.locator(".solution-others a")).toHaveCount(solutionIds.length - 1);
    await expect(page.locator(".case-cta .button")).toHaveAttribute("href", `${localPath(locale, "/contact")}?type=${id}`);
    for (const width of [360, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      expect(await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth), `${width}px`).toBe(true);
    }
    expect(errors).toEqual([]);
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations.map((v) => ({ id: v.id, nodes: v.nodes.map((n) => n.target) }))).toEqual([]);
  });
}

test("solution URLs: Turkish slugs, one-hop 301s, 404s for unwritten pages, OG cards", async ({ request }) => {
  for (const id of solutionIds) {
    const r = await request.get(`/tr${solutionRoutes[id]}`, { maxRedirects: 0 });
    expect(r.status(), id).toBe(301);
    expect(r.headers().location).toBe(localPath("tr", solutionRoutes[id]));
    for (const locale of written) {
      const og = await request.get(`/og/${locale}/${solutionSlug(id)}`);
      expect(og.status()).toBe(200);
      expect(og.headers()["content-type"]).toContain("image/png");
    }
    for (const locale of locales.filter((l) => !written.includes(l)))
      expect((await request.get(`/${locale}${solutionRoutes[id]}`)).status(), `${locale} ${id}`).toBe(404);
  }
  expect((await request.get(`${localPath("tr", "/solutions")}/yok-boyle-bir-cozum`)).status()).toBe(404);
});

test("the hub lists the four axes, support services and the full price list", async ({ page }) => {
  for (const locale of written) {
    const all = getSolutionsCopy(locale)!;
    await page.goto(localPath(locale, "/solutions"));
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator(".solution-row")).toHaveCount(solutionIds.length);
    for (const id of solutionIds) {
      // Old #web / #custom / #business links still land on their axis.
      await expect(page.locator(`#${id}`)).toHaveCount(1);
      await expect(page.locator(`#${id} h3 a`)).toHaveAttribute("href", localPath(locale, solutionRoutes[id]));
    }
    await expect(page.locator(".solutions-support h2")).toHaveText(all.hub.support.title);
    await expect(page.locator("#pricing")).toHaveCount(1);
    // No Service nodes on the hub: each solution page carries its own.
    const graph = (await page.locator('script[type="application/ld+json"]').allTextContents()).flatMap(
      (s) => JSON.parse(s)["@graph"] ?? [],
    );
    expect(graph.map((n: { "@type": string }) => n["@type"])).not.toContain("Service");
    const result = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21aa"]).analyze();
    expect(result.violations.map((v) => v.id)).toEqual([]);
  }
});
