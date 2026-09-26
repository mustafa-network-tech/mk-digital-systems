import { existsSync } from "node:fs";
import { join } from "node:path";
import { test, expect } from "@playwright/test";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { heroBackdrop, heroNeedSlides, heroRotation, heroSlideIds, heroSlides } from "../content/hero";

test("every hero slide has its images and copy in every locale", () => {
  expect(heroSlides.map((s) => s.id)).toEqual([...heroSlideIds]);
  for (const slide of heroSlides)
    for (const image of [...slide.screens, ...(slide.logo ? [slide.logo] : [])])
      expect(existsSync(join("public", image.src)), image.src).toBe(true);
  expect(existsSync(join("public", heroBackdrop.src))).toBe(true);
  // Real project → real screen: no logos, posters or brand artwork as stage surfaces.
  for (const slide of heroSlides)
    for (const screen of slide.screens) expect(screen.src, slide.id).not.toMatch(/\/(gp|mk\d?|aira|mavikadraj|mkops)\.(jpe?g|png)$/);
  for (const locale of locales) {
    const hero = getContent(locale).hero;
    for (const id of heroSlideIds) expect(hero.categories[id]?.trim(), `${locale}/${id}`).toBeTruthy();
  }
});

test("need chips bring their products forward and the stage is fully controllable", async ({ page }) => {
  const copy = getContent("tr").hero;
  await page.goto("/tr", { waitUntil: "networkidle" });
  const stage = page.locator(".hero-stage");
  const activeName = stage.locator(".stage-name");
  const name = (id: string) => heroSlides.find((s) => s.id === id)!;
  await expect(stage.locator(".stage-slide")).toHaveCount(heroRotation.length);
  await expect(stage.locator(".stage-slide.is-active")).toHaveCount(1);
  // Hidden slides are out of the accessibility tree and not focusable.
  await expect(stage.locator('.stage-slide[aria-hidden="true"]')).toHaveCount(heroRotation.length - 1);

  await page.getByRole("button", { name: copy.stage.pause }).click();
  await expect(page.getByRole("button", { name: copy.stage.play })).toBeVisible();
  const first = await activeName.textContent();
  await page.getByRole("button", { name: copy.stage.next }).click();
  await expect(activeName).not.toHaveText(first!);
  await page.getByRole("button", { name: copy.stage.prev }).click();
  await expect(activeName).toHaveText(first!);
  await page.getByRole("button", { name: copy.stage.next }).focus();
  await page.keyboard.press("ArrowRight");
  await expect(stage.locator(".stage-dots button").nth(1)).toHaveAttribute("aria-current", "true");

  for (const need of ["operations", "presence", "idea"] as const) {
    const chip = page.getByRole("button", { name: copy.needs[need] });
    await chip.click();
    await expect(chip).toHaveAttribute("aria-pressed", "true");
    await expect(stage.locator(".stage-slide")).toHaveCount(heroNeedSlides[need].length);
    await expect(stage.locator(".stage-dots button").first()).toHaveAttribute("aria-current", "true");
    expect(name(heroNeedSlides[need][0])).toBeTruthy();
  }
  // Pressing the active chip again returns to the full rotation.
  await page.getByRole("button", { name: copy.needs.idea }).click();
  await expect(stage.locator(".stage-slide")).toHaveCount(heroRotation.length);
});

test("reduced motion starts paused but can still be played", async ({ browser }) => {
  const context = await browser.newContext({ reducedMotion: "reduce" });
  const page = await context.newPage();
  await page.goto("/tr", { waitUntil: "networkidle" });
  const dots = page.locator(".hero-stage .stage-dots button");
  await expect(dots.first()).toHaveAttribute("aria-current", "true");
  await expect(page.getByRole("button", { name: getContent("tr").hero.stage.play })).toBeVisible();
  await page.waitForTimeout(6800);
  await expect(dots.first()).toHaveAttribute("aria-current", "true");
  await page.getByRole("button", { name: getContent("tr").hero.stage.play }).click();
  await page.mouse.move(0, 0);
  await expect(dots.nth(1)).toHaveAttribute("aria-current", "true", { timeout: 8000 });
  await context.close();
});

test("autoplay keeps going with the pointer over the stage and after a click", async ({ page }) => {
  await page.goto("/tr", { waitUntil: "networkidle" });
  const stage = page.locator(".hero-stage");
  const dots = stage.locator(".stage-dots button");
  await expect(dots.first()).toHaveAttribute("aria-current", "true");
  await stage.hover();
  await expect(dots.nth(1)).toHaveAttribute("aria-current", "true", { timeout: 8000 });
  await page.getByRole("button", { name: getContent("tr").hero.stage.next }).click();
  await expect(dots.nth(2)).toHaveAttribute("aria-current", "true");
  await expect(dots.nth(3)).toHaveAttribute("aria-current", "true", { timeout: 8000 });
  // Hidden slides are inert: nothing inside them can take focus.
  await expect(stage.locator(".stage-slide:not(.is-active)").first()).toHaveAttribute("inert", "");
});
