import { unstable_setRequestLocale } from "next-intl/server";
import AboutSection from "@/components/AboutSection";

export default async function AboutPage({ params }: { params: Promise<{ locale: string }> }) {
  const { locale } = await params;
  unstable_setRequestLocale(locale);

  return <AboutSection />;
}
