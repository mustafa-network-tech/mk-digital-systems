import { setRequestLocale } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import type { Metadata, Viewport } from "next";
import "../globals.css";
import { locales } from "@/config/i18n";
import { getContent } from "@/content/site";
import { validLocale } from "@/lib/seo";
import { Navigation } from "@/components/brand/Navigation";
import { SiteFooter } from "@/components/brand/SiteFooter";
export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}
export const metadata: Metadata = {
  icons: { icon: "/brand/icon-192.png", apple: "/apple-touch-icon.png" },
  manifest: "/manifest.webmanifest",
};
export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#f5f4ef",
};
export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const locale = validLocale((await params).locale);
  setRequestLocale(locale);
  const copy = getContent(locale);
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={{}}>
          <a href="#main" className="skip-link">
            {copy.nav.skip}
          </a>
          <Navigation locale={locale} copy={copy.nav} />
          <main id="main" tabIndex={-1}>
            {children}
          </main>
          <SiteFooter locale={locale} copy={copy} />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
