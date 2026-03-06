import { getTranslations, setRequestLocale } from "next-intl/server";
import { ContactForm } from "./ContactForm";
import { buildWhatsAppUrl } from "@/lib/whatsapp";

export default async function ContactPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  setRequestLocale(locale);

  const t = await getTranslations("contact");
  const tToast = await getTranslations("toast");

  return (
    <>
      <section className="relative overflow-hidden bg-hero-gradient py-16 md:py-20">
        <div className="container-custom relative z-10">
          <h1 className="text-section text-title font-semibold">{t("title")}</h1>
          <p className="mt-3 max-w-2xl text-body text-base">
            {t("heroSubtitle")}
          </p>
        </div>
      </section>
      <section className="section-spacing">
        <div className="container-custom max-w-xl">
          <div className="rounded-card border border-[rgba(255,255,255,0.08)] bg-surface p-8 md:p-10 shadow-card">
            <ContactForm
              locale={locale as "tr" | "en"}
              nameLabel={t("name")}
              emailLabel={t("email")}
              messageLabel={t("message")}
              submitLabel={t("submit")}
              submitSending={t("submitSending")}
              successMessage={t("successMessage")}
              errorMessage={t("errorMessage")}
            />
            <p className="mt-6 text-sm text-muted">
              <a
                href={buildWhatsAppUrl(undefined, locale as "tr" | "en")}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent hover:underline"
              >
                {t("whatsapp")}
              </a>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
