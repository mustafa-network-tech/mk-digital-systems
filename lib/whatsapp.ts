import { WHATSAPP_NUMBER } from "./constants";

const DEFAULT_MESSAGE: Record<"tr" | "en", string> = {
  tr: "Merhaba, projem hakkında bilgi almak istiyorum.",
  en: "Hello, I'd like to get information about my project.",
};

export function buildWhatsAppUrl(message?: string, locale: "tr" | "en" = "tr"): string {
  const text = message
    ? encodeURIComponent(message)
    : encodeURIComponent(DEFAULT_MESSAGE[locale]);
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${text}`;
}
