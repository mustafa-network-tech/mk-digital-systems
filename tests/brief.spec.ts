import { test, expect } from "@playwright/test";
import { locales } from "../config/i18n";
import { getContent } from "../content/site";
import { getPricing } from "../content/pricing";
import { projects } from "../content/projects";
import {
  briefTypeForPricing,
  briefTypeForService,
  briefTypes,
  isBriefType,
  toBriefType,
} from "../content/brief";
import { validateBrief } from "../lib/contact-validation";
import { localPath } from "./paths";

const brief = (projectType: string) => ({
  name: "Test Visitor",
  email: "v@example.test",
  message: "A useful project inquiry message.",
  projectType,
  consent: true,
  lang: "tr",
});

test("one brief type list feeds the form labels, services and starting prices", () => {
  // Mobile app and support for an existing site are real, priced services.
  expect(briefTypes).toEqual(["web", "custom", "business", "mobile", "support", "unsure"]);
  for (const locale of locales) {
    const labels = getContent(locale).contact.types;
    expect(Object.keys(labels).sort(), locale).toEqual([...briefTypes].sort());
    for (const id of briefTypes) expect(labels[id].trim(), `${locale} ${id}`).not.toBe("");
    expect(new Set(Object.values(labels)).size, `${locale} labels are distinct`).toBe(briefTypes.length);
  }
  // Every CTA that pre-selects a type lands on a real option, never on "unsure" by accident.
  for (const p of projects)
    for (const s of p.services) expect(briefTypeForService(s), `${p.id} ${s}`).not.toBe("unsure");
  for (const level of getPricing()) expect(briefTypeForPricing(level), level.id).not.toBe("unsure");
  expect(briefTypeForPricing(getPricing().find((l) => l.id === "mobile_app")!)).toBe("mobile");
  expect(briefTypeForPricing(getPricing().find((l) => l.id === "seo")!)).toBe("support");
});

test("retired and unknown types are mapped safely, never lost or passed through", () => {
  expect(toBriefType("mobile")).toBe("mobile");
  expect(toBriefType("product")).toBe("custom");
  expect(toBriefType("smart")).toBe("custom");
  expect(toBriefType("<script>")).toBe("unsure");
  expect(toBriefType(undefined)).toBe("unsure");
  expect(isBriefType("product")).toBe(false);

  for (const type of ["mobile", "support"]) {
    const result = validateBrief(brief(type));
    expect(result.ok, type).toBe(true);
    if (result.ok) expect(result.brief.projectType).toBe(type);
  }
  // A cached old form still delivers, as its current type.
  const legacy = validateBrief(brief("product"));
  expect(legacy.ok).toBe(true);
  if (legacy.ok) expect(legacy.brief.projectType).toBe("custom");
  expect(validateBrief(brief("anything-else")).ok).toBe(false);
});

for (const locale of locales) {
  test(`${locale}: ?type= pre-selects every brief type, including mobile`, async ({ page }) => {
    const labels = getContent(locale).contact.types;
    await page.goto(`${localPath(locale, "/contact")}?type=mobile`);
    const options = page.locator('input[name="projectType"]');
    await expect(options).toHaveCount(briefTypes.length);
    await expect(page.locator('input[value="mobile"]')).toBeChecked();
    await expect(page.locator(".type-options")).toContainText(labels.mobile);
    for (const [query, expected] of [
      ["support", "support"],
      ["product", "custom"],
      ["smart", "custom"],
      ["nonsense", "unsure"],
    ]) {
      await page.goto(`${localPath(locale, "/contact")}?type=${query}`);
      await expect(page.locator(`input[value="${expected}"]`), `${query} → ${expected}`).toBeChecked();
    }
  });
}

test("the brief sends the chosen type with its readable label", async ({ page }) => {
  await page.goto(`${localPath("tr", "/contact")}?type=mobile`);
  await page.locator("#name").fill("Test Ziyaretçi");
  await page.locator("#email").fill("ziyaretci@example.test");
  await page.locator("#message").fill("Restoranımız için sipariş alan bir mobil uygulama düşünüyoruz.");
  await page.locator('input[name="consent"]').check();
  let sent = "";
  await page.route("https://formspree.io/**", async (route) => {
    sent = route.request().postData() || "";
    await route.fulfill({ status: 200, contentType: "application/json", body: '{"ok":true}' });
  });
  await page.locator('button[type="submit"]').click();
  await expect(page.locator(".form-success")).toBeVisible();
  expect(sent).toMatch(/name="projectType"\r\n\r\nmobile\r\n/);
  expect(sent).toContain(getContent("tr").contact.types.mobile);
});
