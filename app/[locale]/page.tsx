import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/config/navigation";
import { buildWhatsAppUrl, getMkFieldOpsDemoWhatsAppUrl } from "@/lib/whatsapp";
import { services } from "@/lib/services";
import { projects, isFeaturedProject } from "@/lib/projects";
import { ProcessOrbitNeural } from "@/components/sections/ProcessOrbitNeural";
import { HomeFeaturedProjectCard } from "./components/HomeFeaturedProjectCard";

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
      {/* Hero */}
      <section className="relative min-h-[70vh] overflow-hidden flex items-center bg-transparent pt-16 md:pt-24 pb-20 md:pb-28">
        <div className="container-custom relative z-10 w-full">
          <h1 className="text-hero-mobile md:text-hero-tablet lg:text-hero-desktop hero-h1 max-w-4xl pt-8 md:pt-12">
            {t("titleBefore")}
            <span className="hero-accent">{t("titleAccent")}</span>
            {t("titleAfter")}
          </h1>
          <p className="mt-5 max-w-[600px] text-lg hero-paragraph">
            {t("subtitle")}
          </p>
          <div className="mt-10 flex flex-wrap items-center gap-3">
            <Link
              href="/projects"
              className="inline-flex items-center justify-center rounded-[10px] bg-[#3B82F6] px-[22px] py-3 text-sm font-medium text-white transition hover:bg-[#60A5FA]"
            >
              {t("cta2")}
            </Link>
            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-xl bg-accent px-[22px] py-3 text-sm font-medium text-[#0B0F14] transition hover:bg-accent-hover"
            >
              {t("ctaQuote")}
            </a>
          </div>
        </div>
      </section>

      {/* Value props badges - no full-width background */}
      <section className="pt-0 pb-6 flex justify-center -mt-5">
        <div className="flex flex-wrap justify-center items-center gap-12 md:gap-16 w-fit">
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] py-[10px] px-[18px] text-sm font-medium text-[#E6EAF0] transition-all duration-[0.25s] ease-[ease] hover:-translate-y-[3px] hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)]"
            role="presentation"
          >
            <span aria-hidden className="shrink-0" style={{ color: "#FACC15" }}>⚡</span>
            {tTrust("speed")}
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] py-[10px] px-[18px] text-sm font-medium text-[#E6EAF0] transition-all duration-[0.25s] ease-[ease] hover:-translate-y-[3px] hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)]"
            role="presentation"
          >
            <span aria-hidden className="shrink-0" style={{ color: "#60A5FA" }}>🧭</span>
            {tTrust("discipline")}
          </span>
          <span
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(255,255,255,0.10)] bg-[rgba(255,255,255,0.06)] py-[10px] px-[18px] text-sm font-medium text-[#E6EAF0] transition-all duration-[0.25s] ease-[ease] hover:-translate-y-[3px] hover:bg-[rgba(255,255,255,0.12)] hover:border-[rgba(255,255,255,0.25)]"
            role="presentation"
          >
            <span aria-hidden className="shrink-0" style={{ color: "#34D399" }}>■</span>
            {tTrust("clean")}
          </span>
        </div>
      </section>

      {/* Services preview */}
      <section id="services" className="section-spacing">
        <div className="container-custom">
          <h2 className="text-section font-semibold text-[#E6EAF0]">{tServices("title")}</h2>
          <div className="mt-10 grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {previewServices.map((s) => (
              <Link
                key={s.id}
                href="/services"
                className="service-card-glow block cursor-pointer rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111827] p-7 text-[#E6EAF0] no-underline hover:border-[rgba(255,255,255,0.18)] hover:bg-[#141B2D]"
              >
                <div className="service-card-content">
                  <span
                    className="service-card-icon mb-2.5 block opacity-95"
                    style={{ fontSize: "23px", color: s.iconColor }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h3 className="text-lg font-semibold text-[#E6EAF0] mb-2">{isTr ? s.titleTr : s.titleEn}</h3>
                  <p className="text-sm text-[#9CA3AF] leading-[1.6] mb-3.5 max-w-[260px]">{isTr ? s.descTr : s.descEn}</p>
                  <div className="mt-2.5 flex flex-wrap gap-2">
                    {s.tags.map((tag) => (
                      <span key={tag} className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]">
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
          <div className="mt-8">
            <Link href="/projects" className="text-sm font-medium text-[#60A5FA] no-underline underline-offset-4 transition hover:underline">
              {tProjects("viewAllLink")}
            </Link>
          </div>
        </div>
      </section>

      {/* Why MK Digital Systems - mobile: vertical cards (icon / title / desc); desktop: row; no text collision */}
      <section className="why-section w-full px-5 py-14 text-center md:px-12 md:py-20">
        <h2 className="text-2xl font-semibold text-[#e6edf3] md:text-3xl md:font-bold md:italic lg:text-4xl">
          <span className="why-main-title inline-block">
            {tWhy("title")}
          </span>
        </h2>
        <p className="why-desc-hover mx-auto mt-3 max-w-[52ch] text-sm leading-relaxed text-white/75 md:mt-5 md:max-w-2xl md:text-base md:text-white md:text-lg">
          {tWhy("description")}
        </p>
        <div className="mt-10 grid grid-cols-1 gap-8 md:mt-14 md:flex md:flex-row md:justify-center md:items-start md:gap-10 lg:gap-16">
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
