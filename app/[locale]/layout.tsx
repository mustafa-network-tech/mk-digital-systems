import { notFound } from "next/navigation";
import { getMessages, getTranslations, unstable_setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { locales, type Locale } from "@/config/i18n";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { GlobalBlurBackground } from "@/components/GlobalBlurBackground";
import { LocaleGuard } from "@/components/LocaleGuard";
import type { Metadata } from "next";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: { params: Promise<{ locale: string }> }): Promise<Metadata> {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) return {};
  const t = await getTranslations({ locale, namespace: "meta" });
  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!locales.includes(locale as Locale)) notFound();
  unstable_setRequestLocale(locale);

  const messages = await getMessages({ locale });

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      <LocaleGuard />
      <GlobalBlurBackground />
      <div className="relative flex min-h-screen flex-col">
        <Header />
        <main className="relative z-10 flex-1 pt-2">{children}</main>
        <Footer />
      </div>
    </NextIntlClientProvider>
  );
}
