import { test, expect } from "@playwright/test";
import { getContent } from "../content/site";
import { locales, pathnames } from "../config/i18n";
import { validateBrief } from "../lib/contact-validation";
import AxeBuilder from "@axe-core/playwright";
import { localPath, type Route } from "./paths";
import * as caseStudies from "../content/case-studies";
import * as solutions from "../content/solutions";
const widths = [360, 375, 390, 430, 768, 1024, 1440];
const pages: Route[] = ["/", "/solutions", "/work", "/contact"];
for (const locale of locales) {
  test(`${locale}: routes, responsive layout, semantics and SEO`, async ({
    page,
  }) => {
    const errors: string[] = [];
    page.on("pageerror", (e) => errors.push(e.message));
    page.on("console", (e) => {
      if (e.type() === "error") errors.push(e.text());
    });
    for (const suffix of pages) {
      await page.goto(localPath(locale, suffix));
      await expect(page.locator("html")).toHaveAttribute("lang", locale);
      await expect(page.locator("h1")).toHaveCount(1);
      await expect(page.locator("main")).toBeVisible();
      const key = suffix.slice(1) || "home";
      const c = getContent(locale);
      await expect(page).toHaveTitle(c.meta[key as "home"].title);
      await expect(page.locator('link[rel="canonical"]')).toHaveAttribute(
        "href",
        `http://localhost:3000${localPath(locale, suffix)}`,
      );
      for (const l of [...locales, "x-default"])
        await expect(
          page.locator(`link[rel="alternate"][hreflang="${l}"]`),
        ).toHaveCount(1);
      await expect(page.locator('meta[property="og:image"]')).toHaveAttribute(
        "content",
        new RegExp(`/og/${locale}/${key}$`),
      );
      await expect(page.locator('meta[name="robots"]')).toHaveAttribute(
        "content",
        /noindex/,
      );
      const schemas = await page
        .locator('script[type="application/ld+json"]')
        .allTextContents();
      expect(schemas.length).toBeGreaterThan(0);
      schemas.forEach((s) => {
        const data = JSON.parse(s);
        expect(data["@context"]).toBe("https://schema.org");
        expect(
          data["@graph"].some(
            (n: Record<string, unknown>) => n["@type"] === "Organization",
          ),
        ).toBe(true);
      });
      for (const width of widths) {
        await page.setViewportSize({ width, height: 900 });
        expect(
          await page.evaluate(
            () => document.documentElement.scrollWidth <= window.innerWidth,
          ),
          `${locale}${suffix} at ${width}`,
        ).toBe(true);
        await expect(page.locator("h1")).toBeVisible();
      }
    }
    expect(errors).toEqual([]);
  });
}
test("language selection preserves the current page", async ({ page }) => {
  await page.goto("/tr/calismalar");
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.locator(".language-menu summary").click();
  await page.locator(".language-options a[hreflang=de]").click();
  await expect(page).toHaveURL(/\/de\/work$/);
  await expect(page.locator("html")).toHaveAttribute("lang", "de");
  await page.locator(".footer-languages a[hreflang=fr]").click();
  await expect(page).toHaveURL(/\/fr\/work$/);
  await page.locator(".footer-languages a[hreflang=tr]").click();
  await expect(page).toHaveURL(/\/tr\/calismalar$/);
});
test("mobile menu has keyboard containment, Escape and usable locale navigation", async ({
  page,
}) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en");
  await page.locator(".menu-toggle").click();
  await expect(page.locator(".mobile-menu")).toBeVisible();
  await expect(page.locator(".mobile-menu nav a").first()).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.locator(".mobile-menu-close")).toBeFocused();
  await page.keyboard.press("Shift+Tab");
  await expect(page.locator(".mobile-menu > a.button")).toBeFocused();
  await page.keyboard.press("Tab");
  await expect(page.locator(".mobile-menu-close")).toBeFocused();
  await page.keyboard.press("Escape");
  await expect(page.locator(".mobile-menu")).toHaveCount(0);
  await expect(page.locator(".menu-toggle")).toBeFocused();
  expect(await page.evaluate(() => document.body.style.overflow)).not.toBe(
    "hidden",
  );
  await page.locator(".menu-toggle").click();
  await page.locator(".mobile-languages a[hreflang=tr]").click();
  await expect(page).toHaveURL(/\/tr$/);
  await expect(page.locator(".mobile-menu")).toHaveCount(0);
});
test("customer pathway responds to keyboard and links to a matching solution", async ({
  page,
}) => {
  await page.goto("/en");
  await page.locator("#need-business").focus();
  await page.keyboard.press("Enter");
  await expect(page.locator("#need-business")).toHaveAttribute(
    "aria-expanded",
    "true",
  );
  await expect(page.locator("#need-detail .text-link")).toHaveAttribute(
    "href",
    "/en/solutions#business",
  );
  await page.locator("#need-detail .text-link").click();
  await expect(page).toHaveURL(/\/en\/solutions#business$/);
});
test("project brief retains failed submissions and submits company as a genuine field", async ({
  page,
}) => {
  await page.goto("/en/contact?type=business&project=mk-resepsiyon");
  await expect(page.locator('input[value="business"]')).toBeChecked();
  await page.locator("#name").fill("Test Visitor");
  await page.locator("#email").fill("visitor@example.test");
  await page
    .locator("#message")
    .fill("We would like a clearer booking workflow for our team.");
  await page.locator(".optional-details summary").click();
  await page.locator("#company").fill("Test Company");
  await page.locator("#phone").fill("+90 000 000 0000");
  await page.locator('input[name="consent"]').check();
  let sentBody = "";
  await page.route("https://formspree.io/**", async (route) => {
    sentBody = route.request().postData() || "";
    await route.fulfill({
      status: 503,
      contentType: "application/json",
      body: '{"error":"Test failure"}',
    });
  });
  await page.locator('button[type="submit"]').click();
  await expect(page.locator(".form-error")).toContainText(
    getContent("en").contact.error,
  );
  await expect(page.locator("#message")).toHaveValue(
    "We would like a clearer booking workflow for our team.",
  );
  expect(sentBody).toContain("Test Company");
  expect(sentBody).toContain("mk-resepsiyon");
  await page.unroute("https://formspree.io/**");
  await page.route("https://formspree.io/**", (route) =>
    route.fulfill({
      status: 200,
      contentType: "application/json",
      body: '{"ok":true}',
    }),
  );
  await page.locator('button[type="submit"]').click();
  await expect(page.locator(".form-success")).toBeVisible();
  await expect(page.locator(".form-success")).toBeFocused();
});
test("form validation and reduced motion are available", async ({ page }) => {
  await page.emulateMedia({ reducedMotion: "reduce" });
  await page.goto("/fr/contact");
  await page.locator('button[type="submit"]').click();
  await expect(page.locator(".form-error")).toContainText(
    getContent("fr").contact.invalid,
  );
  await expect(page.locator("#name")).toBeFocused();
  await page.goto("/fr");
  // The hero's floating phone stays still for reduced motion.
  expect(
    await page
      .locator(".stage-slide.is-active .phone-side")
      .evaluate((el) => getComputedStyle(el).animationName),
  ).toBe("none");
  await page.keyboard.press("Tab");
  await expect(page.locator(".skip-link")).toBeFocused();
});
test("safe preview indexing, OG cards, legal routes and legacy redirects", async ({
  request,
}) => {
  const robots = await request.get("/robots.txt");
  expect(await robots.text()).toContain("Disallow: /");
  const sitemap = await request.get("/sitemap.xml");
  expect(sitemap.ok()).toBe(true);
  expect(await sitemap.text()).not.toContain("<url>");
  for (const locale of locales)
    for (const kind of ["privacy", "terms"])
      expect((await request.get(localPath(locale, `/legal/${kind}` as Route))).ok()).toBe(true);
  for (const locale of locales) for (const page of ["home", "solutions", "work", "contact"]) {
    const image = await request.get(`/og/${locale}/${page}`);
    expect(image.status()).toBe(200);
    expect(image.headers()["content-type"]).toContain("image/png");
  }
  for (const [from, to] of [
    ["projects", "work"],
    ["services", "solutions"],
    ["about", ""],
  ]) {
    const r = await request.get(`/de/${from}`, { maxRedirects: 0 });
    expect(r.status()).toBe(308);
    expect(r.headers().location).toBe(`/de/${to}`.replace(/\/$/, ""));
  }
  // Old English-slug Turkish URLs move to Turkish slugs in one 301, keeping the query.
  for (const [from, to] of [
    ["/tr/solutions", "/tr/cozumler"],
    ["/tr/services", "/tr/cozumler"],
    ["/tr/work", "/tr/calismalar"],
    ["/tr/projects", "/tr/calismalar"],
    ["/tr/contact?type=web", "/tr/iletisim?type=web"],
    ["/tr/legal/privacy", "/tr/yasal/gizlilik"],
    ["/tr/legal/terms", "/tr/yasal/kosullar"],
  ]) {
    const r = await request.get(from, { maxRedirects: 0 });
    expect(r.status(), from).toBe(301);
    expect(r.headers().location).toBe(to);
    expect((await request.get(to)).status(), to).toBe(200);
  }
  // Other locales keep English slugs; Turkish slugs are Turkish only.
  expect((await request.get("/en/work", { maxRedirects: 0 })).status()).toBe(200);
  expect((await request.get("/en/does-not-exist")).status()).toBe(404);
});
test("root opens Turkish regardless of browser language", async ({ request }) => {
  for (const lang of ["en-US,en;q=0.9", "de-DE", "fr-FR", "tr-TR"]) {
    const r = await request.get("/", { maxRedirects: 0, headers: { "accept-language": lang } });
    expect([307, 308]).toContain(r.status());
    expect(new URL(r.headers().location, "http://x").pathname).toBe("/tr");
  }
});
test("API validation rejects malformed types, missing consent and oversized briefs before delivery", async ({
  request,
}) => {
  expect(
    (await request.post("/api/contact", { data: { name: 123 } })).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/contact", {
        data: {
          name: "Visitor",
          email: "v@example.test",
          message: "A useful project inquiry message.",
          projectType: "web",
          lang: "en",
        },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/contact", {
        data: "{bad",
        headers: { "content-type": "application/json" },
      })
    ).status(),
  ).toBe(400);
  expect(
    (
      await request.post("/api/contact", {
        data: { message: "x".repeat(20000) },
      })
    ).status(),
  ).toBe(413);
});
test("genuine company fields are not treated as honeypots", () => {
  const result = validateBrief({
    name: "Test Visitor",
    email: "v@example.test",
    message: "A useful project inquiry message.",
    company: "A genuine business",
    projectType: "business",
    consent: true,
    lang: "de",
  });
  expect(result.ok).toBe(true);
  if (result.ok) {
    expect(result.brief.company).toBe("A genuine business");
    expect(result.brief.website).toBe("");
  }
  expect(
    validateBrief({
      name: "A\nInjected",
      email: "v@example.test",
      message: "A useful project inquiry message.",
      projectType: "web",
      consent: true,
      lang: "en",
    }).ok,
  ).toBe(false);
});
test("save reviewable desktop and mobile page captures", async ({ page }) => {
  for (const suffix of pages) {
    await page.setViewportSize({ width: 1440, height: 1000 });
    await page.goto(localPath("tr", suffix));
    await page.screenshot({
      path: `artifacts/qa/desktop-${suffix.slice(1) || "home"}.png`,
      fullPage: true,
    });
    await page.setViewportSize({ width: 390, height: 844 });
    await page.screenshot({
      path: `artifacts/qa/mobile-${suffix.slice(1) || "home"}.png`,
      fullPage: true,
    });
  }
});
test("WCAG accessibility checks on primary pages and the mobile menu", async ({
  page,
}) => {
  for (const suffix of pages) {
    await page.goto(localPath("en", suffix));
    if (suffix === "/") await expect(page.locator(".need-content")).toHaveCSS("opacity", "1");
    const result = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
      .analyze();
    expect(
      result.violations.map((v) => ({
        id: v.id,
        nodes: v.nodes.map((n) => n.target),
      })),
      suffix || "home",
    ).toEqual([]);
  }
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto("/en");
  await page.locator(".menu-toggle").click();
  await expect(page.locator(".mobile-menu")).toHaveCSS("opacity", "1");
  const menu = await new AxeBuilder({ page })
    .withTags(["wcag2a", "wcag2aa", "wcag21aa"])
    .analyze();
  expect(
    menu.violations.map((v) => ({
      id: v.id,
      nodes: v.nodes.map((n) => n.target),
    })),
  ).toEqual([]);
});

import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";
import ts from "typescript";

test("configured production sitemap and preview exclusion", () => {
  function load(file: string, dependencies: Record<string, unknown>, env: Record<string,string>) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any -- Transpiled route module exports are executed in an isolated context.
    const compiledModule = { exports: {} as Record<string, any> };
    const code = ts.transpileModule(readFileSync(file, "utf8"), {compilerOptions: {module: ts.ModuleKind.CommonJS, target: ts.ScriptTarget.ES2020}}).outputText;
    runInNewContext(code, {module: compiledModule, exports: compiledModule.exports, process: {env}, URL, require: (id: string) => dependencies[id]});
    return compiledModule.exports;
  }
  const env = {SITE_URL: "https://agency.example", VERCEL_ENV: "production"};
  const config = load("lib/site-config.ts", {"@/config/i18n": {locales, defaultLocale: "tr", pathnames}}, env);
  const dependencies = {"@/config/i18n": {locales, defaultLocale: "tr"}, "@/lib/site-config": config, "@/content/case-studies": caseStudies, "@/content/solutions": solutions};
  const sitemap = load("app/sitemap.ts", dependencies, env).default();
  const caseEntries = caseStudies.caseStudyIds.reduce((n, id) => n + caseStudies.caseStudyLocales(id).length, 0);
  // Solution pages exist only in written languages; each lists exactly those plus x-default.
  const written = solutions.solutionLocales();
  const solutionEntries = solutions.solutionIds.length * written.length;
  expect(solutionEntries).toBeGreaterThan(0);
  expect(sitemap).toHaveLength(24 + caseEntries + solutionEntries);
  expect(new Set(sitemap.map((entry: {url:string}) => entry.url)).size).toBe(24 + caseEntries + solutionEntries);
  const solutionUrls = new Set(solutions.solutionIds.flatMap((id) => written.map((l) => config.solutionUrl(l, solutions.solutionRoutes[id]))));
  for (const entry of sitemap) {
    expect(entry.url).toMatch(/^https:\/\/agency\.example\/(tr|en|de|fr)(\/|$)/);
    expect(Object.keys(entry.alternates.languages)).toHaveLength(solutionUrls.has(entry.url) ? written.length + 1 : 5);
    expect(entry.alternates.languages["x-default"]).toContain("/tr");
  }
  expect(solutionUrls.has("https://agency.example/tr/cozumler/mobil-uygulama")).toBe(true);
  for (const url of solutionUrls) expect(sitemap.map((entry: {url:string}) => entry.url)).toContain(url);
  const urls = sitemap.map((entry: {url:string}) => entry.url);
  expect(urls).toContain("https://agency.example/tr/calismalar");
  expect(urls).toContain("https://agency.example/tr/yasal/gizlilik");
  expect(urls).toContain("https://agency.example/de/work");
  expect(urls.filter((url: string) => /\/tr\/(solutions|work|contact|legal)/.test(url))).toEqual([]);
  const work = sitemap.find((entry: {url:string}) => entry.url.endsWith("/tr/calismalar"));
  expect(work.alternates.languages).toMatchObject({en: "https://agency.example/en/work", "x-default": "https://agency.example/tr/calismalar"});
  const story = sitemap.find((entry: {url:string}) => entry.url.endsWith("/tr/calismalar/saha-santiye"));
  expect(story.alternates.languages).toMatchObject({en: "https://agency.example/en/work/saha-santiye", "x-default": "https://agency.example/tr/calismalar/saha-santiye"});
  const robots = load("app/robots.ts", {"@/lib/site-config": config}, env).default();
  expect(robots.sitemap).toBe("https://agency.example/sitemap.xml");
  const previewEnv = {...env, VERCEL_ENV: "preview"};
  const preview = load("lib/site-config.ts", {"@/config/i18n": {locales, defaultLocale: "tr", pathnames}}, previewEnv);
  expect(preview.isIndexable).toBe(false);
  expect(load("app/sitemap.ts", {...dependencies, "@/lib/site-config": preview}, previewEnv).default()).toEqual([]);
});
