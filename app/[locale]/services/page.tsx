import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/config/navigation";
import { services } from "@/lib/services";

export default async function ServicesPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("services");
  const isTr = locale === "tr";

  return (
    <>
      <section className="relative overflow-hidden bg-transparent py-16 md:py-20">
        <div className="container-custom relative z-10">
          <h1 className="text-section font-semibold text-[#E6EAF0]">{t("title")}</h1>
          <p className="mt-3 max-w-2xl text-body text-base">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-custom">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm no-underline cursor-pointer mb-[18px] transition-all duration-200 ease-out hover:text-white hover:-translate-x-0.5"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            ← {t("backToServices")}
          </Link>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
            {services.map((s) => (
              <Link
                key={s.id}
                id={s.id}
                href={`/services#${s.id}`}
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
                  <h2 className="text-lg font-semibold text-[#E6EAF0] mb-2">{isTr ? s.titleTr : s.titleEn}</h2>
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
        </div>
      </section>
    </>
  );
}
