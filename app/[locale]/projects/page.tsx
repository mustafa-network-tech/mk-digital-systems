import { getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { Link } from "@/config/navigation";
import { projects } from "@/lib/projects";
import { ProjectsClient } from "./ProjectsClient";

export default async function ProjectsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  const t = await getTranslations("projects");
  const isTr = locale === "tr";

  const projectList = projects.map((p) => ({
    id: p.id,
    title: isTr ? p.titleTr : p.titleEn,
    summary: isTr ? p.summaryTr : p.summaryEn,
    detail: isTr ? p.detailTr : p.detailEn,
    stack: p.stack,
  }));

  return (
    <div className="relative z-10 min-h-screen bg-transparent">
      <section className="relative overflow-hidden pt-7 pb-[18px] px-6 md:px-10 lg:px-12">
        <h1 className="text-section font-bold text-[#E6EAF0]">{t("title")}</h1>
        <p className="mt-3 max-w-2xl text-base leading-[1.6] text-[#9CA3AF]">
          {t("heroSubtitle")}
        </p>
      </section>
      <section className="section-spacing px-6 md:px-10 lg:px-12">
        <Link
          href="/#projects"
          className="inline-flex items-center gap-1.5 text-sm no-underline cursor-pointer mb-[18px] transition-all duration-200 ease-out hover:text-white hover:-translate-x-0.5"
          style={{ color: "rgba(255,255,255,0.7)" }}
        >
          ← {t("backToProjects")}
        </Link>
        <ProjectsClient projects={projectList} demoLabel={t("demo")} />
      </section>
    </div>
  );
}
