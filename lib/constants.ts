/**
 * WhatsApp numarası: ülke kodu + numara, başında + veya 0 olmadan (örn: 905321234567)
 * .env.local içinde NEXT_PUBLIC_WHATSAPP_NUMBER=905321234567 şeklinde tanımlayabilirsiniz.
 */
import { contactConfig } from "./contact-config";
export const WHATSAPP_NUMBER = contactConfig.whatsapp;

/** İletişim formu gönderim adresi (mailto veya API için) */
export const CONTACT_EMAIL = contactConfig.email;

/**
 * Formspree form ID. Alıcı e-posta sağlayıcı hesabında yapılandırılır.
 * .env.local'de NEXT_PUBLIC_FORMSPREE_FORM_ID ile override edilebilir.
 */
export const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID === "disabled"
    ? ""
    : process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xlgpgrdo";
