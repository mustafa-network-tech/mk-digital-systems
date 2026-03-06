import { getTranslations, setRequestLocale } from "next-intl/server";

export default async function PrivacyPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <>
      <div className="py-16 md:py-20 px-4 md:px-6 text-center">
        <h1 className="text-section text-title font-semibold">{t("privacy.title")}</h1>
        <p className="mt-3 text-body text-base">{t("privacy.heroSubtitle")}</p>
      </div>
      <section className="pl-6 pr-4 md:pl-12 md:pr-6 text-left max-w-[880px] mx-auto pt-20 pb-16 md:pb-20">
        <p className="text-body text-sm leading-relaxed">{t("privacy.intro")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2 text-center">{t("privacy.section1Title")}</h2>
        <p className="text-body text-sm leading-relaxed">{t("privacy.section1Intro")}</p>
        <ul className="list-disc list-inside text-body text-sm leading-relaxed mt-2 space-y-1">
          <li>{t("privacy.section1Item1")}</li>
          <li>{t("privacy.section1Item2")}</li>
          <li>{t("privacy.section1Item3")}</li>
          <li>{t("privacy.section1Item4")}</li>
        </ul>
        <p className="text-body text-sm leading-relaxed mt-3">{t("privacy.section1Note")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2 text-center">{t("privacy.section2Title")}</h2>
        <p className="text-body text-sm leading-relaxed">{t("privacy.section2Intro")}</p>
        <ul className="list-disc list-inside text-body text-sm leading-relaxed mt-2 space-y-1">
          <li>{t("privacy.section2Item1")}</li>
          <li>{t("privacy.section2Item2")}</li>
          <li>{t("privacy.section2Item3")}</li>
          <li>{t("privacy.section2Item4")}</li>
        </ul>
        <p className="text-body text-sm leading-relaxed mt-3">{t("privacy.section2Note")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2 text-center">{t("privacy.section3Title")}</h2>
        <p className="text-body text-sm leading-relaxed">{t("privacy.section3Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2 text-center">{t("privacy.section4Title")}</h2>
        <p className="text-body text-sm leading-relaxed">{t("privacy.section4Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2 text-center">{t("privacy.section5Title")}</h2>
        <p className="text-body text-sm leading-relaxed">{t("privacy.section5Body")}</p>

        <p className="text-body text-xs opacity-75 mt-12">{t("privacy.lastUpdated")}</p>
      </section>
    </>
  );
}
