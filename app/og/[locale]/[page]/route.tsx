import { ImageResponse } from "next/og";
/* eslint-disable @next/next/no-img-element -- ImageResponse renders an embedded bitmap. */
import { readFile } from "node:fs/promises";
import path from "node:path";
import { locales, type Locale } from "@/config/i18n";
import { getContent } from "@/content/site";
import { getCaseStudy } from "@/content/case-studies";
import { getSolutionsCopy, solutionBySlug } from "@/content/solutions";
export const runtime = "nodejs";
export async function GET(
  _request: Request,
  { params }: { params: Promise<{ locale: string; page: string }> },
) {
  const { locale, page } = await params;
  if (!locales.includes(locale as Locale)) return new Response("Not found", { status: 404 });
  // A case study card uses its own title and sits under "Work"; a solution page under "Solutions".
  const caseStudy = getCaseStudy(locale as Locale, page);
  const solutionId = solutionBySlug(page);
  const solution = solutionId ? getSolutionsCopy(locale as Locale)?.items[solutionId] : undefined;
  if (!caseStudy && !solution && !["home", "work", "solutions", "contact"].includes(page))
    return new Response("Not found", { status: 404 });
  const c = getContent(locale as Locale);
  const key = (caseStudy ? "work" : solution ? "solutions" : page) as "home" | "work" | "solutions" | "contact";
  const title = caseStudy
    ? caseStudy.title
    : solution
      ? solution.title
    : key === "home"
      ? `${c.hero.title} ${c.hero.accent}`
      : key === "work"
        ? c.work.title
        : key === "solutions"
          ? c.solutions.title
          : c.contact.title;
  const [mark, font] = await Promise.all([
    readFile(path.join(process.cwd(), "public/brand/icon-192.png")),
    readFile(path.join(process.cwd(), "public/fonts/inter-og.ttf")),
  ]);
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        background: "#f5f4ef",
        color: "#202320",
        padding: "65px 72px",
        fontFamily: "Inter",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
        <img
          src={`data:image/png;base64,${mark.toString("base64")}`}
          width={58}
          height={58}
          alt=""
        />
        <span style={{ fontSize: 22, fontWeight: 600, letterSpacing: -1 }}>
          MK DIGITAL SYSTEMS
        </span>
        <span style={{ fontSize: 15, marginLeft: "auto", color: "#244de0" }}>
          {locale.toUpperCase()}
        </span>
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 76,
          lineHeight: 1.05,
          letterSpacing: -4,
          marginTop: 67,
          maxWidth: 990,
        }}
      >
        {title.replace(/\n/g, " ")}
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginTop: "auto",
          borderTop: "1px solid #d9dad2",
          paddingTop: 22,
          color: "#244de0",
          fontSize: 18,
        }}
      >
        <span>{caseStudy ? c.caseStudy.label : c.nav[key === "home" ? "solutions" : key]}</span>
        <span>MK</span>
      </div>
    </div>,
    {
      width: 1200,
      height: 630,
      fonts: [{ name: "Inter", data: font, weight: 500, style: "normal" }],
      headers: { "Cache-Control": "public, max-age=86400" },
    },
  );
}
