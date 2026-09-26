import { existsSync, readdirSync, readFileSync } from "node:fs";
import { join } from "node:path";
import { test, expect } from "@playwright/test";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import {
  projectIds,
  projectLayers,
  projects,
  projectsByLayer,
  type Project,
  type ProjectStatus,
} from "../content/projects";
import { getProjectCopy } from "../content/project-copy";
import { heroSlideIds } from "../content/hero";
import { localPath } from "./paths";

const allLinks = (p: Project) => [...p.links, ...(p.parts ?? []).flatMap((part) => part.links)];

test("every portfolio id has exactly one record, in the declared order", () => {
  expect(projects.map((p) => p.id)).toEqual([...projectIds]);
  for (const p of projects) {
    expect(projectLayers, p.id).toContain(p.layer);
    expect(p.name.trim(), p.id).not.toBe("");
    expect(p.services.length, `${p.id} services`).toBeGreaterThan(0);
    expect(p.needs.length, `${p.id} needs`).toBeGreaterThan(0);
  }
});

test("every project is described in every locale; flagship copy is complete", () => {
  for (const locale of locales)
    for (const p of projects) {
      const copy = getProjectCopy(locale, p.id);
      const where = `${locale}/${p.id}`;
      expect(copy, where).toBeTruthy();
      expect(copy.industry.trim(), `${where} industry`).not.toBe("");
      expect(copy.summary.trim(), `${where} summary`).not.toBe("");
      if (p.media) expect(copy.alt?.trim(), `${where} alt`).toBeTruthy();
      for (const part of p.parts ?? []) {
        expect(copy.parts?.[part.id]?.name.trim(), `${where} part ${part.id}`).toBeTruthy();
        expect(copy.parts?.[part.id]?.description.trim(), `${where} part ${part.id}`).toBeTruthy();
      }
      if (p.layer !== "flagship") continue;
      expect(copy.headline?.trim(), `${where} headline`).toBeTruthy();
      expect(copy.problem?.trim(), `${where} problem`).toBeTruthy();
      expect(copy.solution?.trim(), `${where} solution`).toBeTruthy();
      expect(copy.modules?.length, `${where} modules`).toBeGreaterThan(0);
      // Same module list in every locale, just translated.
      expect(copy.modules?.length, `${where} module count`).toBe(
        getProjectCopy("tr", p.id).modules?.length,
      );
    }
});

// What each label promises must be backed by the data.
// Live demo and sample site need something public to open.
const needsPublicLink: ProjectStatus[] = ["live-demo", "sample-site"];
test("status rules: links are HTTPS and every label is backed by the data", () => {
  for (const p of projects) {
    const links = allLinks(p);
    for (const link of links) expect(link.url, p.id).toMatch(/^https:\/\/[^\s]+$/);
    if (p.status && needsPublicLink.includes(p.status))
      expect(links.length, `${p.id} is "${p.status}" without a public link`).toBeGreaterThan(0);
    // Coming soon is roadmap only: it never offers a demo, so it carries no links at all.
    if (p.status === "coming-soon") expect(links, `${p.id} is coming soon but has links`).toEqual([]);
    // Without a public link the only possible labels are closed test, in use or coming soon.
    if (!links.length) expect([undefined, "closed-test", "in-use", "coming-soon"], p.id).toContain(p.status);
    for (const part of p.parts ?? [])
      if (part.status && needsPublicLink.includes(part.status))
        expect(part.links.length, `${p.id}/${part.id}`).toBeGreaterThan(0);
    // In use = a real system: never send visitors into it through a demo link.
    for (const item of [{ id: p.id, status: p.status, links: p.links }, ...(p.parts ?? [])])
      if (item.status === "in-use")
        expect(item.links.filter((l) => l.kind === "demo"), `${p.id}/${item.id} is in use`).toEqual([]);
  }
  // Sector sites are sample sites by definition.
  for (const p of projectsByLayer("sector-demo")) expect(p.status, p.id).toBe("sample-site");
});

test("every project is shown with a real screen of its own product", () => {
  for (const p of projects) {
    if (p.media) expect(existsSync(join("public", p.media.src)), p.media.src).toBe(true);
    // A coming-soon project waits for its own visual identity instead of a placeholder screen;
    // a confidential system is told through its problem and modules only.
    if (p.status !== "coming-soon" && !p.confidential)
      expect(p.media, `${p.id} needs a real screenshot`).toBeTruthy();
  }
});

test("confidential systems are described only: no screens, links, case study or hero slide", () => {
  const confidential = projects.filter((p) => p.confidential);
  expect(confidential.length).toBeGreaterThan(0);
  for (const p of confidential) {
    expect(p.status, p.id).toBe("in-use");
    expect(p.media, `${p.id} media`).toBeUndefined();
    expect(allLinks(p), `${p.id} links`).toEqual([]);
    expect(p.caseStudy, `${p.id} case study`).toBeFalsy();
    expect(heroSlideIds as readonly string[], `${p.id} hero`).not.toContain(p.id);
    for (const locale of locales) {
      const copy = JSON.stringify(getProjectCopy(locale, p.id));
      // No workplace, client or network-specific codes that would point to where it runs.
      expect(copy, `${locale}/${p.id}`).not.toMatch(/\b(HP|GF|BF|UAVT|TAFICS|Rekor|CIZIM|OBK)\b/);
      expect(copy, `${locale}/${p.id}`).not.toMatch(/https?:\/\/|workers\.dev|vercel\.app/);
    }
  }
});

test("former employer, client and unowned brand names never appear in public content", () => {
  const files = ["content", "content/locales", "content/project-copy"].flatMap((dir) =>
    readdirSync(dir)
      .filter((f) => /\.(ts|md)$/.test(f))
      .map((f) => join(dir, f)),
  );
  for (const file of files)
    expect(readFileSync(file, "utf8"), file).not.toMatch(/\b(AZG|Fibertek|Abidos)\b/i);
  // MK Fırsat's former working name is not ours to use anywhere public.
  const source = [...files, ...["app", "components", "lib", "public"].flatMap((dir) =>
    readdirSync(dir, { recursive: true })
      .map((f) => join(dir, String(f)))
      .filter((f) => /\.(tsx?|json|txt|md|webmanifest|svg)$/.test(f)),
  )];
  for (const file of source) expect(readFileSync(file, "utf8"), file).not.toMatch(/schn[aä]ppli/i);
});

test("coming-soon projects show their status and no call to action", async ({ page }) => {
  for (const locale of locales) {
    await page.goto(localPath(locale, "/work"));
    for (const p of projects.filter((p) => p.status === "coming-soon")) {
      const card = page.locator(`#${p.id}`);
      await expect(card.locator(".project-status")).toHaveText(getContent(locale).work.statuses["coming-soon"]);
      await expect(card.locator("a")).toHaveCount(0);
    }
  }
});

test("/work filter shows one layer at a time and keeps every card reachable", async ({ page }) => {
  for (const locale of locales) {
    const copy = getContent(locale).work;
    await page.goto(localPath(locale, "/work"));
    const buttons = page.locator(".work-filter button");
    await expect(buttons).toHaveCount(projectLayers.length + 1);
    await expect(buttons.first()).toHaveAttribute("aria-pressed", "true");
    await expect(page.locator(".work-layer:visible")).toHaveCount(projectLayers.length);
    for (const p of projects) await expect(page.locator(`#${p.id}`), p.id).toHaveCount(1);
    for (const [i, layer] of projectLayers.entries()) {
      await buttons.nth(i + 1).click();
      await expect(buttons.nth(i + 1)).toHaveAttribute("aria-pressed", "true");
      await expect(buttons.nth(i + 1)).toContainText(copy.layers[layer].label);
      await expect(page.locator(".work-layer:visible")).toHaveCount(1);
      await expect(page.locator(`.work-layer[data-layer="${layer}"]`)).toBeVisible();
      await expect(page.locator(`.work-layer[data-layer="${layer}"] article`)).toHaveCount(
        projectsByLayer(layer).length,
      );
    }
    await buttons.first().click();
    await expect(page.locator(".work-layer:visible")).toHaveCount(projectLayers.length);
    // Filtering never changes the URL, so no filtered view can be indexed.
    expect(new URL(page.url()).pathname + new URL(page.url()).search).toBe(localPath(locale, "/work"));
  }
});

test("/work card text fits at every width, including long German strings", async ({ page }) => {
  for (const locale of ["de", "fr", "tr"] as const)
    for (const width of [360, 390, 768, 1024, 1440]) {
      await page.setViewportSize({ width, height: 900 });
      await page.goto(localPath(locale, "/work"));
      const overflowing = await page.evaluate(() =>
        Array.from(
          document.querySelectorAll<HTMLElement>(
            ".work-filter button, .work-card h3, .work-card p, .work-card a, .work-layer-head h2, .story-copy",
          ),
        )
          .filter((el) => el.scrollWidth > el.clientWidth + 1)
          .map((el) => el.textContent?.slice(0, 40)),
      );
      expect(overflowing, `${locale} at ${width}px`).toEqual([]);
      expect(
        await page.evaluate(() => document.documentElement.scrollWidth <= innerWidth),
        `${locale} page width at ${width}px`,
      ).toBe(true);
    }
});
