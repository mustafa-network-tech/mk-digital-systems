import type { Locale } from "@/config/i18n";
import en from "./locales/en";
import tr from "./locales/tr";
import de from "./locales/de";
import fr from "./locales/fr";
import { additionalStories } from "./project-stories";
import { pricingCopy, type PricingCopy } from "./pricing-copy";

export type StoryCopy = {
  name?: string;
  industry: string;
  headline: string;
  problem: string;
  solution: string;
  features: string[];
  alt: string;
};
export type SiteContent = {
  nav: {
    home: string;
    solutions: string;
    work: string;
    contact: string;
    start: string;
    language: string;
    open: string;
    close: string;
    skip: string;
  };
  hero: {
    label: string;
    title: string;
    accent: string;
    description: string;
    primary: string;
    secondary: string;
    note: string;
    visual: string;
    caption: string;
    detail: string;
  };
  needs: {
    label: string;
    title: string;
    description: string;
    explore: string;
    items: {
      title: string;
      subtitle: string;
      description: string;
      steps: string[];
      family: string;
    }[];
  };
  work: {
    label: string;
    title: string;
    description: string;
    all: string;
    explore: string;
    discuss: string;
    live: string;
    inquiry: string;
    problem: string;
    solution: string;
    experience: string;
    demo: string;
    project: string;
    diagram: string;
    stories: Record<string, StoryCopy>;
  };
  solutions: {
    label: string;
    title: string;
    description: string;
    audience: string;
    builds: string;
    example: string;
    cta: string;
    items: {
      id: string;
      title: string;
      description: string;
      for: string;
      features: string[];
      project: string;
    }[];
  };
  process: {
    label: string;
    title: string;
    description: string;
    steps: { title: string; description: string }[];
  };
  industries: {
    label: string;
    title: string;
    description: string;
    items: string[];
  };
  contact: {
    label: string;
    title: string;
    description: string;
    intro: string;
    direct: string;
    emailUs: string;
    call: string;
    whatsapp: string;
    next: string;
    nextText: string;
    required: string;
    optional: string;
    name: string;
    company: string;
    email: string;
    phone: string;
    country: string;
    type: string;
    message: string;
    placeholder: string;
    more: string;
    consent: string;
    privacy: string;
    submit: string;
    sending: string;
    success: string;
    successText: string;
    error: string;
    invalid: string;
    retry: string;
    types: string[];
  };
  footer: {
    label: string;
    title: string;
    cta: string;
    description: string;
    privacy: string;
    terms: string;
    copyright: string;
    top: string;
    socialLabel: string;
    socialProfile: string;
    signature: string;
  };
  legal: {
    privacyTitle: string;
    privacyIntro: string;
    privacySections: { title: string; body: string }[];
    termsTitle: string;
    termsIntro: string;
    termsSections: { title: string; body: string }[];
    updated: string;
  };
  meta: Record<
    "home" | "solutions" | "work" | "contact" | "privacy" | "terms",
    { title: string; description: string }
  >;
  notFound: { title: string; description: string; back: string };
};

const dictionaries: Record<Locale, SiteContent> = { en, tr, de, fr };
export function getContent(
  locale: Locale,
): SiteContent & { pricing: PricingCopy } {
  const content = dictionaries[locale];
  return {
    ...content,
    pricing: pricingCopy[locale],
    work: {
      ...content.work,
      stories: {
        ...content.work.stories,
        ...additionalStories[locale],
        santiye: {
          ...content.work.stories.santiye,
          name: (
            {
              en: "Construction Management",
              tr: "Şantiye Yönetim Sistemi",
              de: "Baustellenmanagement",
              fr: "Gestion de chantier",
            } as const
          )[locale],
        },
      },
    },
  };
}
