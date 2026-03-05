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
      <div className="px-4 py-20 text-left md:px-6 md:py-28 lg:px-8">
        <h1 className="inline-block origin-left text-4xl font-bold tracking-tight text-title transition-all duration-200 hover:scale-[1.02] hover:underline md:text-5xl lg:text-6xl">
          {t("title")}
        </h1>
        <p className="mt-4 origin-left text-lg text-muted transition-transform duration-200 hover:scale-[1.02] md:mt-5 md:text-xl">
          {t("heroSubtitle")}
        </p>
      </div>

      <section className="section-spacing w-full px-4 md:px-6 lg:px-8">
        <div className="max-w-3xl text-left">
          <p className="origin-left text-body text-base leading-relaxed transition-transform duration-200 hover:scale-[1.02]">
            {t("intro")}
          </p>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="inline-block origin-left text-lg font-semibold tracking-tight text-title transition-all duration-200 hover:scale-[1.02] hover:underline">
            {t("howWeWork")}
          </h2>
          <ul className="mt-4 space-y-2 text-body text-sm leading-relaxed">
            {HOW_WE_WORK_KEYS.map((key) => (
              <li key={key} className="flex origin-left gap-2 transition-transform duration-200 hover:scale-[1.02]">
                <span className="text-muted shrink-0">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="inline-block origin-left text-lg font-semibold tracking-tight text-title transition-all duration-200 hover:scale-[1.02] hover:underline">
            {t("whatWeDeliver")}
          </h2>
          <ul className="mt-4 space-y-2 text-body text-sm leading-relaxed">
            {WHAT_WE_DELIVER_KEYS.map((key) => (
              <li key={key} className="flex origin-left gap-2 transition-transform duration-200 hover:scale-[1.02]">
                <span className="text-muted shrink-0">•</span>
                <span>{t(key)}</span>
              </li>
            ))}
          </ul>

          <hr className="my-10 border-[rgba(255,255,255,0.08)]" aria-hidden />

          <h2 className="inline-block origin-left text-lg font-semibold tracking-tight text-title transition-all duration-200 hover:scale-[1.02] hover:underline">
            {t("tools")}
          </h2>
          <p className="mt-2 text-body text-sm leading-relaxed">
            {t("toolsDescription")}
          </p>
          <div className="mt-4 flex flex-wrap gap-2">
            {TOOLS.map((tool) => (
              <span
                key={tool}
                className="rounded-full border border-[rgba(255,255,255,0.08)] bg-base px-4 py-2 text-sm text-body transition-all duration-200 hover:scale-110 hover:shadow-[0_0_20px_rgba(59,130,246,0.35)]"
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
