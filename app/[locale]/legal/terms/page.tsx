import { getTranslations, unstable_setRequestLocale } from "next-intl/server";

export default async function TermsPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);
  const t = await getTranslations("legal");

  return (
    <>
      <div className="py-16 md:py-20 px-4 md:px-6 text-center">
        <h1 className="text-section text-title font-semibold">{t("terms.title")}</h1>
        <p className="mt-3 text-body text-base opacity-90">{t("terms.heroSubtitle")}</p>
      </div>
      <section className="terms-content text-left max-w-[880px] mx-auto pt-20 pb-16 md:pb-20 pl-5 pr-4 md:pl-8 md:pr-6 lg:pl-16 lg:pr-8 leading-[1.8] md:leading-[1.75]">
        <p className="text-body text-sm">{t("terms.intro")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section1Title")}</h2>
        <p className="text-body text-sm">{t("terms.section1Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section2Title")}</h2>
        <p className="text-body text-sm">{t("terms.section2Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section3Title")}</h2>
        <ul className="list-disc list-inside text-body text-sm space-y-1">
          <li>{t("terms.section3Item1")}</li>
          <li>{t("terms.section3Item2")}</li>
          <li>{t("terms.section3Item3")}</li>
        </ul>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section4Title")}</h2>
        <p className="text-body text-sm">{t("terms.section4Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section5Title")}</h2>
        <ul className="list-disc list-inside text-body text-sm space-y-1">
          <li>{t("terms.section5Item1")}</li>
          <li>{t("terms.section5Item2")}</li>
          <li>{t("terms.section5Item3")}</li>
        </ul>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section6Title")}</h2>
        <p className="text-body text-sm">{t("terms.section6Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section7Title")}</h2>
        <p className="text-body text-sm">{t("terms.section7Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section8Title")}</h2>
        <p className="text-body text-sm">{t("terms.section8Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section9Title")}</h2>
        <p className="text-body text-sm">{t("terms.section9Body")}</p>

        <h2 className="text-title text-lg font-semibold mt-10 mb-2">{t("terms.section10Title")}</h2>
        <p className="text-body text-sm">{t("terms.section10Body")}</p>

        <p className="text-body text-xs opacity-75 mt-12">{t("terms.lastUpdated")}</p>
      </section>
    </>
  );
}
