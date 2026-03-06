import { WHATSAPP_NUMBER } from "./constants";

const DEFAULT_MESSAGE: Record<"tr" | "en", string> = {
  tr: "Merhaba, projem hakkında bilgi almak istiyorum.",
  en: "Hello, I'd like to get information about my project.",
};

/** MK Field Ops demo: dedicated number and pre-filled message (TR/EN) */
const MK_FIELD_OPS_NUMBER = "905327209407";
export const MK_FIELD_OPS_DEMO_MESSAGE: Record<"tr" | "en", string> = {
  tr: "MK Field Ops demo talebi hakkında bilgi almak istiyorum.",
  en: "I would like to get information about MK Field Ops demo request.",
};

/** WhatsApp URL for MK Field Ops demo request (opens chat with pre-filled message) */
export function getMkFieldOpsDemoWhatsAppUrl(locale: "tr" | "en"): string {
  const text = encodeURIComponent(MK_FIELD_OPS_DEMO_MESSAGE[locale]);
  return `https://wa.me/${MK_FIELD_OPS_NUMBER}?text=${text}`;
}

export function buildWhatsAppUrl(message?: string, locale: "tr" | "en" = "tr"): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(DEFAULT_MESSAGE[locale]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
