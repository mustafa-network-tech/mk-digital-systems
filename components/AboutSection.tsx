import { getTranslations } from "next-intl/server";

const TOOLS = [
  "Next.js",
  "React",
  "TypeScript",
  "Tailwind",
  "Node.js",
  "REST API",
  "WordPress",
  "WooCommerce",
  "PHP",
  "Laravel",
  "Android",
  "Kotlin",
  "Figma",
  "SEO",
  "Core Web Vitals",
  "Make",
  "Zapier",
];

const HOW_WE_WORK_KEYS = ["howWeWork1", "howWeWork2", "howWeWork3", "howWeWork4", "howWeWork5"] as const;
const WHAT_WE_DELIVER_KEYS = ["whatWeDeliver1", "whatWeDeliver2", "whatWeDeliver3", "whatWeDeliver4", "whatWeDeliver5"] as const;

export default async function AboutSection() {
  const t = await getTranslations("about");

  return (
    <>
      <div className="page-glass-hero px-4 py-20 text-left md:px-6 md:py-28 lg:px-8">
        <h1 className="text-4xl font-bold tracking-tight text-title md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-muted md:mt-5 md:text-xl">
          {t("heroSubtitle")}
        </p>
      </div>

      <section className="section-spacing page-glass-section w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <p className="text-body text-base leading-relaxed md:text-[1.05rem] md:leading-[1.75]">
            {t("intro")}
          </p>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="text-lg font-semibold tracking-tight text-title">
            {t("howWeWork")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-body text-sm leading-relaxed md:text-base">
            {HOW_WE_WORK_KEYS.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="text-muted shrink-0">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="text-lg font-semibold tracking-tight text-title">
            {t("whatWeDeliver")}
          </h2>
          <ul className="mt-4 space-y-2.5 text-body text-sm leading-relaxed md:text-base">
            {WHAT_WE_DELIVER_KEYS.map((key) => (
              <li key={key} className="flex gap-2">
                <span className="text-muted shrink-0">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="text-lg font-semibold tracking-tight text-title">
            {t("tools")}
          </h2>
          <p className="mt-2 text-body text-sm leading-relaxed md:text-base">
            {t("toolsDescription")}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[rgba(255,255,255,0.08)] bg-base px-4 py-2 text-sm text-body transition-colors duration-200 hover:border-white/15 hover:bg-white/[0.04]"
              >
                {tool}
              </span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
