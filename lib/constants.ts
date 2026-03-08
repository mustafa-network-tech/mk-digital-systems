/**
 * WhatsApp numarası: ülke kodu + numara, başında + veya 0 olmadan (örn: 905321234567)
 * .env.local içinde NEXT_PUBLIC_WHATSAPP_NUMBER=905321234567 şeklinde tanımlayabilirsiniz.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "905456597551";

/** İletişim formu gönderim adresi (mailto veya API için) */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mustafa82oner@gmail.com";

/**
 * Formspree form ID. Tanımlıysa form doğrudan Formspree'ye gönderilir (mustafa82oner@gmail.com).
 * .env.local'de NEXT_PUBLIC_FORMSPREE_FORM_ID ile override edilebilir.
 */
export const FORMSPREE_FORM_ID =
  process.env.NEXT_PUBLIC_FORMSPREE_FORM_ID || "xlgpgrdo";
