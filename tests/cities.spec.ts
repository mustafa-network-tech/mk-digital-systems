import { test, expect } from "@playwright/test";
import AxeBuilder from "@axe-core/playwright";
import { cityIds, citySlug, getCity, heroExists, readyCities, serviceAreasCopy, type CityPage } from "../content/cities";
import { getProject } from "../content/projects";
import { solutionIds } from "../content/solutions";

const all: CityPage[] = cityIds.map(getCity);
const published = readyCities();
/** Cities with a real Mavi Kadraj archive photo; every other hero is a labelled illustration. */
const archivePhotos = ["bolu", "canakkale", "bursa", "nevsehir"];

/** Every visible word of a city page, with the city's own name masked out. */
function body(city: CityPage) {
  const text = [
    city.title,
    city.lead,
    city.summary,
    city.cta.title,
    city.cta.text,
    ...city.blocks.flatMap((b) => {
      switch (b.kind) {
        case "story":
        case "note":
          return [b.heading, ...b.paragraphs];
        case "economy":
          return [b.heading, b.intro, ...b.sectors.flatMap((s) => [s.title, s.text])];
        case "needs":
          return [b.heading, b.intro ?? "", ...b.items.flatMap((i) => [i.title, i.text])];
        case "solutions":
          return [b.heading, b.intro, ...b.items.map((i) => i.text)];
        case "work":
          return [b.heading, b.intro, ...b.projects.map((p) => p.note)];
        case "faq":
          return [b.heading, ...b.items.flatMap((i) => [i.question, i.answer])];
      }
    }),
  ].join(" ");
  const stem = city.name.toLocaleLowerCase("tr").slice(0, Math.max(4, city.name.length - 1));
  return text
    .toLocaleLowerCase("tr")
    .split(/[^\p{L}\p{N}]+/u)
    .filter(Boolean)
    .map((word) => (word.startsWith(stem) ? "ŞEHİR" : word));
}
function shingles(words: string[], n = 5) {
  const set = new Set<string>();
  for (let i = 0; i + n <= words.length; i++) set.add(words.slice(i, i + n).join(" "));
  return set;
}

test("eighteen written city pages, Turkish slugs, researched sources", () => {
  expect(cityIds).toHaveLength(18);
  for (const city of all) {
    expect(citySlug(city.id)).toMatch(/^[a-z]+-web-tasarim$/);
    expect(city.ready, city.id).toBe(true);
    expect(city.meta.title.length, `${city.id} title`).toBeLessThanOrEqual(90);
    expect(city.meta.description.length, `${city.id} description`).toBeGreaterThan(110);
    expect(city.meta.description.length, `${city.id} description`).toBeLessThanOrEqual(165);
    expect(city.title, city.id).toContain(city.name.slice(0, 4));
    expect(city.sources.length, city.id).toBeGreaterThanOrEqual(3);
    for (const source of city.sources) expect(source.url, city.id).toMatch(/^https?:\/\/[^/]*\.(gov\.tr|org\.tr|bel\.tr)\//);
    // Hero: a real archive photo only where one exists; everything else is labelled an illustration.
    expect(city.hero.src).toMatch(new RegExp(`^/cities/${city.id}\\.(webp|jpg|jpeg|avif)$`));
    expect(city.hero.kind, city.id).toBe(archivePhotos.includes(city.id) ? "photo" : "illustration");
    expect(city.hero.alt.length, city.id).toBeGreaterThan(20);
  }
});

test("every page is its own page: unique copy, order, priorities, projects and questions", () => {
  for (const key of ["title", "lead", "summary"] as const)
    expect(new Set(all.map((c) => c[key])).size, key).toBe(all.length);
  expect(new Set(all.map((c) => c.meta.title)).size).toBe(all.length);
  expect(new Set(all.map((c) => c.meta.description)).size).toBe(all.length);
  expect(new Set(all.map((c) => c.cta.title)).size).toBe(all.length);
  // Section order and solution priority vary across the set.
  expect(new Set(all.map((c) => c.blocks.map((b) => b.kind).join(">"))).size).toBeGreaterThanOrEqual(12);
  const priorities = all.map((c) => {
    const s = c.blocks.find((b) => b.kind === "solutions");
    return s?.kind === "solutions" ? s.items.map((i) => i.id).join(">") : "";
  });
  expect(new Set(priorities).size).toBeGreaterThanOrEqual(10);
  expect(new Set(priorities.map((p) => p.split(">")[0])).size).toBe(solutionIds.length);
  expect(new Set(all.map((c) => {
    const w = c.blocks.find((b) => b.kind === "work");
    return w?.kind === "work" ? w.projects.map((p) => p.id).join(",") : "";
  })).size).toBe(all.length);
  // No FAQ question, heading or paragraph is copied from one city to another.
  const seen = new Map<string, string>();
  for (const city of all)
    for (const b of city.blocks) {
      const texts =
        b.kind === "faq" ? b.items.map((i) => i.question) : b.kind === "story" || b.kind === "note" ? b.paragraphs : [b.heading];
      for (const text of texts) {
        expect(seen.get(text), `${city.id}: "${text}" also on ${seen.get(text)}`).toBeUndefined();
        seen.set(text, city.id);
      }
    }
});

test("no thin or near-duplicate pages (city name masked)", () => {
  const words = new Map(all.map((c) => [c.id, body(c)]));
  for (const [id, w] of words) expect(w.length, `${id} words`).toBeGreaterThanOrEqual(480);
  const sets = new Map([...words].map(([id, w]) => [id, shingles(w)]));
  for (let i = 0; i < all.length; i++)
    for (let j = i + 1; j < all.length; j++) {
      const a = sets.get(all[i].id)!;
      const b = sets.get(all[j].id)!;
      let shared = 0;
      for (const s of a) if (b.has(s)) shared++;
      const jaccard = shared / (a.size + b.size - shared);
      expect(jaccard, `${all[i].id} ~ ${all[j].id}`).toBeLessThan(0.05);
    }
});

test("honest pages: no office, branch, local clients, rankings or invented figures", () => {
  for (const city of all) {
    const text = JSON.stringify(city);
    expect(text, city.id).not.toMatch(
      /ofisimiz (var|bulunuyor|mevcut)|şubemiz|şubeleri(miz)?|(bolu|şehir)daki müşterilerimiz|müşterilerimizden|referanslarımız|garanti|ilk sıra(ya|da) çıkar|google'da (ilk|1)|müşteri yorumu|₺|\bTL\b|AZG|Fibertek|Abidos|Schnäppli|mustafaoner\.net/i,
    );
    // Projects are capability examples: real, public, never confidential, and said so on the page.
    const work = city.blocks.find((b) => b.kind === "work");
    expect(work?.kind, city.id).toBe("work");
    if (work?.kind !== "work") continue;
    expect(work.intro, city.id).toMatch(/değil|yapılmadı|ait olmayan/);
    for (const { id } of work.projects) {
      const project = getProject(id);
      expect(project, `${city.id}: ${id}`).toBeTruthy();
      expect(project!.confidential, `${city.id}: ${id}`).toBeFalsy();
      expect(project!.status, `${city.id}: ${id}`).not.toBe("coming-soon");
      expect(project!.media, `${city.id}: ${id}`).toBeTruthy();
    }
    const solutions = city.blocks.find((b) => b.kind === "solutions");
    expect(solutions?.kind === "solutions" && new Set(solutions.items.map((i) => i.id)).size, city.id).toBe(4);
    const faq = city.blocks.find((b) => b.kind === "faq");
    expect(faq?.kind === "faq" && faq.items.length, city.id).toBeGreaterThanOrEqual(3);
  }
});

test("a city is published only with its hero image", () => {
  for (const city of all)
    expect(published.includes(city), city.id).toBe(heroExists(city) || process.env.CITY_PREVIEW === "1");
});

test("service areas index: Turkish only, one footer link, no city list in the footer", async ({ page, request }) => {
  if (!published.length) {
    // No hero added yet: no index, no footer link.
    expect((await request.get("/tr/hizmet-bolgeleri")).status()).toBe(404);
    await page.goto("/tr");
    await expect(page.locator(".site-footer").getByRole("link", { name: serviceAreasCopy.label })).toHaveCount(0);
    return;
  }
  const index = await request.get("/tr/hizmet-bolgeleri");
  expect(index.status()).toBe(200);
  for (const path of ["/en/service-areas", "/de/service-areas", "/fr/service-areas", "/en/hizmet-bolgeleri"])
    expect((await request.get(path)).status(), path).toBe(404);
  const moved = await request.get("/tr/service-areas", { maxRedirects: 0 });
  expect(moved.status()).toBe(301);
  expect(moved.headers().location).toBe("/tr/hizmet-bolgeleri");
  await page.goto("/tr/hizmet-bolgeleri");
  await expect(page.locator("h1")).toHaveText(serviceAreasCopy.title);
  await expect(page.locator(".service-area-group li")).toHaveCount(published.length);
  await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", /\/tr\/hizmet-bolgeleri$/);
  await expect(page.locator('link[rel="alternate"][hreflang]')).toHaveCount(2);
  const footer = page.locator(".site-footer");
  await expect(footer.getByRole("link", { name: serviceAreasCopy.label })).toHaveCount(1);
  expect(await footer.locator('a[href*="-web-tasarim"]').count()).toBe(0);
  await expect(page.locator(".site-header a", { hasText: serviceAreasCopy.label })).toHaveCount(0);
  await page.goto("/en");
  await expect(page.locator(".site-footer").getByRole("link", { name: serviceAreasCopy.label })).toHaveCount(0);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  expect(results.violations).toEqual([]);
});

test("published city pages: SEO, schema, labelled hero, Turkish only", async ({ page, request }) => {
  test.skip(!published.length, "No city has its hero image yet (or build with CITY_PREVIEW=1).");
  for (const city of published) {
    const slug = citySlug(city.id);
    for (const locale of ["en", "de", "fr"]) expect((await request.get(`/${locale}/${slug}`)).status(), `${locale}/${slug}`).toBe(404);
    await page.goto(`/tr/${slug}`);
    await expect(page.locator("h1")).toHaveCount(1);
    await expect(page.locator("h1")).toHaveText(city.title);
    await expect(page).toHaveTitle(city.meta.title);
    await expect(page.locator('link[rel="canonical"]')).toHaveAttribute("href", new RegExp(`/tr/${slug}$`));
    const alternates = await page.locator('link[rel="alternate"][hreflang]').evaluateAll((els) =>
      els.map((e) => `${e.getAttribute("hreflang")} ${e.getAttribute("href")}`),
    );
    expect(alternates.map((a) => a.split(" ")[0]).sort(), slug).toEqual(["tr", "x-default"]);
    const graph = await page.locator('script[type="application/ld+json"]').evaluateAll((els) =>
      els.flatMap((e) => JSON.parse(e.textContent ?? "{}")["@graph"] ?? []),
    );
    const types = graph.map((n: { "@type": string }) => n["@type"]);
    expect(types, slug).toEqual(expect.arrayContaining(["WebPage", "BreadcrumbList", "Service"]));
    expect(types.filter((t: string) => /LocalBusiness|Place|PostalAddress|Offer|FAQPage|Review/.test(t)), slug).toEqual([]);
    const service = graph.find((n: { "@type": string }) => n["@type"] === "Service");
    expect(service.areaServed.name).toBe(city.name);
    await expect(page.locator(".breadcrumb a").nth(1)).toHaveAttribute("href", "/tr/hizmet-bolgeleri");
    const caption = page.locator(".city-figure figcaption");
    if (city.hero.kind === "illustration") await expect(caption).toContainText("gerçek bir fotoğraf değildir");
    else await expect(caption).toContainText("Mavi Kadraj");
    // Switching language leaves the Turkish-only page for that language's home.
    await expect(page.locator(".footer-languages a[hreflang=en]")).toHaveAttribute("href", "/en");
    await expect(page.locator(`[data-solution]`)).toHaveCount(4);
    expect((await request.get(`/og/tr/${slug}`)).headers()["content-type"]).toContain("image/png");
  }
  await page.goto(`/tr/${citySlug(published[0].id)}`);
  const results = await new AxeBuilder({ page }).withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "wcag22aa"]).analyze();
  expect(results.violations).toEqual([]);
  expect((await request.get("/tr/istanbul-web-tasarim")).status()).toBe(404);
});
