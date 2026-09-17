import { whatsappInquiry } from "./contact-config";

const DEFAULT_MESSAGE: Record<"tr" | "en", string> = {
  tr: "Merhaba, dijital sistem veya ürün geliştirme hakkında bilgi almak istiyorum.",
  en: "Hello, I would like information about a digital system or product build.",
};

/** Legacy demo helper uses the same central contact destination. */
export const MK_FIELD_OPS_DEMO_MESSAGE: Record<"tr" | "en", string> = {
  tr: "MK Field Ops demo talebi hakkında bilgi almak istiyorum.",
  en: "I would like to get information about MK Field Ops demo request.",
};

/** WhatsApp URL for MK Field Ops demo request (opens chat with pre-filled message) */
export function getMkFieldOpsDemoWhatsAppUrl(locale: "tr" | "en"): string {
  return whatsappInquiry(MK_FIELD_OPS_DEMO_MESSAGE[locale]);
}

export function buildWhatsAppUrl(
  message?: string,
  locale: "tr" | "en" = "en",
): string {
  return whatsappInquiry(message || DEFAULT_MESSAGE[locale]);
}
