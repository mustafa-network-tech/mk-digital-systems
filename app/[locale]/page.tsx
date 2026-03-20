import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/config/navigation";
import { buildWhatsAppUrl, getMkFieldOpsDemoWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/lib/services";
import { projects, isFeaturedProject } from "@/lib/projects";
import { ProcessOrbitNeural } from "@/components/sections/ProcessOrbitNeural";
import { HomeFeaturedProjectCard } from "./components/HomeFeaturedProjectCard";
import { HeroBackgroundSlider } from "@/components/HeroBackgroundSlider";

export default async function HomePage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale: localeParam } = await params;
  setRequestLocale(localeParam);

  const t = await getTranslations("hero");
  const tWhy = await getTranslations("why");
  const tTrust = await getTranslations("trust");
  const tServices = await getTranslations("services");
  const tProjects = await getTranslations("projects");
  const locale = localeParam;
  const isTr = locale === "tr";
  const whatsappUrl = buildWhatsAppUrl(undefined, locale as "tr" | "en");

  const previewServices = services.slice(0, 4);
  const previewProjects = projects.slice(0, 3);
  const whatsappDemoUrl = getMkFieldOpsDemoWhatsAppUrl(locale as "tr" | "en");

  return (
    <>
      {/* Hero + value badges in the same background */}
      <section className="relative flex min-h-[80vh] items-center overflow-hidden bg-transparent pb-20 pt-16 md:pb-24 md:pt-24">
        <HeroBackgroundSlider />
        <div className="container-custom relative z-10 w-full">
          <div className="hero-copy max-w-[40rem] pt-8 md:max-w-[44rem] md:pt-12">
            <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop hero-h1 max-w-4xl [text-shadow:0_1px_32px_rgba(2,6,23,0.85)]">
              {t("titleBefore")}
              <span className="hero-accent">{t("titleAccent")}</span>
              {t("titleAfter")}
            </h1>
            <p className="hero-paragraph mt-5 max-w-[36rem] text-base leading-relaxed md:text-lg md:leading-relaxed [text-shadow:0_1px_24px_rgba(2,6,23,0.9)]">
              {t("subtitle")}
            </p>
          </div>
          <div className="mt-10 flex max-w-[40rem] flex-wrap items-center gap-3 md:max-w-[44rem]">
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hero-cta-primary inline-flex items-center justify-center rounded-[10px] px-[22px] py-3 text-sm font-semibold text-white"
            >
              {t("ctaQuote")}
            </a>
            <Link
              href="/projects"
              className="hero-cta-secondary inline-flex items-center justify-center rounded-[10px] px-[22px] py-3 text-sm font-medium text-[#E6EAF0]/90"
            >
              {t("cta2")}
            </Link>
          </div>

          {/* Value props — altta slogan bandına yer bırak (çakışma olmasın) */}
          <div className="mt-12 mb-16 flex justify-center sm:mb-20 md:mb-14 md:justify-start">
            <div className="flex flex-wrap items-center justify-center gap-8 md:justify-start md:gap-12">
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[rgba(15,23,42,0.45)] py-[7px] px-[14px] text-xs font-medium text-[#E6EAF0]/72 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm md:py-2 md:px-[15px]"
                role="presentation"
              >
                <span aria-hidden className="shrink-0 text-[0.85em] opacity-80" style={{ color: "#FACC15" }}>⚡</span>
                {tTrust("speed")}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[rgba(15,23,42,0.45)] py-[7px] px-[14px] text-xs font-medium text-[#E6EAF0]/72 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm md:py-2 md:px-[15px]"
                role="presentation"
              >
                <span aria-hidden className="shrink-0 text-[0.85em] opacity-80" style={{ color: "#60A5FA" }}>🧭</span>
                {tTrust("discipline")}
              </span>
              <span
                className="inline-flex items-center gap-1.5 rounded-full border border-white/[0.09] bg-[rgba(15,23,42,0.45)] py-[7px] px-[14px] text-xs font-medium text-[#E6EAF0]/72 shadow-[0_4px_20px_rgba(0,0,0,0.25)] backdrop-blur-sm md:py-2 md:px-[15px]"
                role="presentation"
              >
                <span aria-hidden className="shrink-0 text-[0.85em] opacity-80" style={{ color: "#34D399" }}>■</span>
                {tTrust("clean")}
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Çözüm alanları önizleme — arka plan küreden ayrışır */}
      <section
        id="services"
        className="section-spacing relative z-[1] border-t border-white/[0.05] bg-[#0B0F14]/75 shadow-[inset_0_1px_0_rgba(255,255,255,0.03)]"
      >
        <div className="container-custom relative">
          <h2 className="text-section font-semibold tracking-tight text-[#E6EAF0]">{tServices("title")}</h2>
          <p className="mt-3 max-w-2xl text-sm leading-relaxed text-[#9CA3AF] md:text-base md:leading-relaxed">
            {tServices("heroSubtitle")}
          </p>
          <div className="mt-10 grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4 lg:gap-7">
            {previewServices.map((s) => (
              <Link
                key={s.id}
                href="/services"
                className="service-card-glow block cursor-pointer rounded-[14px] border border-white/[0.07] bg-[#111827]/95 p-6 text-[#E6EAF0] no-underline backdrop-blur-[2px] transition-colors hover:border-white/[0.12] hover:bg-[#141B2D]"
              >
                <div className="service-card-content">
                  <span
                    className="service-card-icon mb-2 block opacity-[0.88]"
                    style={{ fontSize: "21px", color: s.iconColor }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h3 className="mb-2 text-base font-semibold leading-snug text-[#E6EAF0] md:text-[1.05rem]">
                    {isTr ? s.titleTr : s.titleEn}
                  </h3>
                  <p className="mb-4 max-w-[280px] text-sm leading-relaxed text-[#9CA3AF]/95">
                    {isTr ? s.descTr : s.descEn}
                  </p>
                  <div className="mt-auto flex flex-wrap gap-1.5 pt-1">
                    {s.tags.map((tag) => (
                      <span key={tag} className="service-card-tag">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </Link>
            ))}
          </div>
          <div className="mt-8">
            <Link
              href="/services"
              className="text-sm font-medium text-[#60A5FA] transition duration-200 ease-out hover:underline underline-offset-4"
            >
              {tServices("viewAllLink")}
            </Link>
          </div>
        </div>
      </section>

      {/* Projects preview */}
      <section id="projects" className="section-spacing">
        <div className="container-custom">
          <h2 className="text-section font-semibold text-[#E6EAF0]">{tProjects("title")}</h2>
          <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {previewProjects.map((p) =>
              isFeaturedProject(p) ? (
                <HomeFeaturedProjectCard
                  key={p.id}
                  id={p.id}
                  title={isTr ? p.titleTr : p.titleEn}
                  summary={isTr ? p.summaryTr : p.summaryEn}
                  label={isTr ? p.labelTr : p.labelEn}
                  stack={p.stack}
                  whatsappDemoUrl={whatsappDemoUrl}
                  requestDemoLabel={tProjects("requestDemo")}
                />
              ) : (
                <Link
                  key={p.id}
                  href={`/projects#${p.id}`}
                  className="project-card-glow block cursor-pointer rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111827] p-[26px] text-[#E6EAF0] no-underline shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] ease-out"
                >
                  <div className="project-card-content">
                    {"hideLabel" in p && p.hideLabel ? null : (
                      <span className="mb-[10px] block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                        {tProjects("demo")}
                      </span>
                    )}
                    <h3 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{isTr ? p.titleTr : p.titleEn}</h3>
                    <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{isTr ? p.summaryTr : p.summaryEn}</p>
                    <div className="flex flex-wrap gap-2">
                      {p.stack.map((tech) => (
                        <span key={tech} className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </Link>
              )
            )}
          </div>
        </div>
      </section>

      {/* Why MK Digital Systems - mobile: vertical cards (icon / title / desc); desktop: row; no text collision */}
      <section className="why-section w-full px-5 py-16 text-center md:px-12 md:py-24">
        <h2 className="text-2xl font-semibold tracking-tight text-[#e6edf3] md:text-3xl md:font-bold md:italic lg:text-4xl">
          <span className="why-main-title inline-block max-w-[22ch] md:max-w-none">
            {tWhy("title")}
          </span>
        </h2>
        <p className="why-desc-hover mx-auto mt-4 max-w-[52ch] text-sm leading-relaxed text-white/70 md:mt-6 md:max-w-2xl md:text-base md:text-white/80">
          {tWhy("description")}
        </p>
        <div className="mt-12 grid grid-cols-1 gap-10 md:mt-16 md:flex md:flex-row md:justify-center md:items-start md:gap-12 lg:gap-16">
          <div className="flex flex-col items-center text-center transition-colors duration-200 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl" aria-hidden>⚡</span>
            <h3 className="process-step-title mt-3 text-lg font-semibold text-[#e6edf3] transition-colors duration-200 hover:text-white md:text-xl md:font-extrabold md:italic">
              {tWhy("feature1Title")}
            </h3>
            <p className="process-step-desc mt-2 cursor-default text-sm leading-relaxed text-white/75 md:text-base md:text-white">
              {tWhy("feature1Desc")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-colors duration-200 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl" aria-hidden>🧠</span>
            <h3 className="process-step-title mt-3 text-lg font-semibold text-[#e6edf3] transition-colors duration-200 hover:text-white md:text-xl md:font-extrabold md:italic">
              {tWhy("feature2Title")}
            </h3>
            <p className="process-step-desc mt-2 cursor-default text-sm leading-relaxed text-white/75 md:text-base md:text-white">
              {tWhy("feature2Desc")}
            </p>
          </div>
          <div className="flex flex-col items-center text-center transition-colors duration-200 ease-out hover:drop-shadow-[0_0_12px_rgba(255,255,255,0.15)]">
            <span className="flex h-11 w-11 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-2xl" aria-hidden>🛠</span>
            <h3 className="process-step-title mt-3 text-lg font-semibold text-[#e6edf3] transition-colors duration-200 hover:text-white md:text-xl md:font-extrabold md:italic">
              {tWhy("feature3Title")}
            </h3>
            <p className="process-step-desc mt-2 cursor-default text-sm leading-relaxed text-white/75 md:text-base md:text-white">
              {tWhy("feature3Desc")}
            </p>
          </div>
        </div>
      </section>

      {/* Project Process — Orbit + Neural (6 steps) */}
      <section className="relative z-10 w-full px-4 md:px-6 lg:px-8">
        <ProcessOrbitNeural locale={locale as "tr" | "en"} />
      </section>
    </>
  );
}
