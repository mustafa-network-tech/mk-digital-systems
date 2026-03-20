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
      <section className="relative z-[1] overflow-hidden border-b border-white/[0.05] bg-[#0B0F14]/70 py-16 md:py-20">
        <div className="container-custom relative z-10">
          <h1 className="text-section font-semibold tracking-tight text-[#E6EAF0]">{t("title")}</h1>
          <p className="mt-3 max-w-2xl text-base leading-relaxed text-[#9CA3AF]">{t("heroSubtitle")}</p>
        </div>
      </section>
      <section className="section-spacing relative z-[1]">
        <div className="container-custom">
          <Link
            href="/#services"
            className="inline-flex items-center gap-1.5 text-sm no-underline cursor-pointer mb-[18px] transition-all duration-200 ease-out hover:text-white hover:-translate-x-0.5"
            style={{ color: "rgba(255,255,255,0.7)" }}
          >
            ← {t("backToServices")}
          </Link>
          <div className="grid grid-cols-1 gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3 lg:gap-7">
            {services.map((s) => (
              <Link
                key={s.id}
                id={s.id}
                href={`/services#${s.id}`}
                className="service-card-glow block cursor-pointer rounded-[14px] border border-white/[0.07] bg-[#111827]/95 p-6 text-[#E6EAF0] no-underline backdrop-blur-[2px] hover:border-white/[0.12] hover:bg-[#141B2D]"
              >
                <div className="service-card-content">
                  <span
                    className="service-card-icon mb-2 block opacity-[0.88]"
                    style={{ fontSize: "21px", color: s.iconColor }}
                    aria-hidden
                  >
                    {s.icon}
                  </span>
                  <h2 className="mb-2 text-base font-semibold leading-snug text-[#E6EAF0] md:text-[1.05rem]">
                    {isTr ? s.titleTr : s.titleEn}
                  </h2>
                  <p className="mb-4 max-w-[300px] text-sm leading-relaxed text-[#9CA3AF]/95">
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
        </div>
      </section>
    </>
  );
}
