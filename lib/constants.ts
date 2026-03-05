/**
 * WhatsApp numarası: ülke kodu + numara, başında + veya 0 olmadan (örn: 905321234567)
 * .env.local içinde NEXT_PUBLIC_WHATSAPP_NUMBER=905321234567 şeklinde tanımlayabilirsiniz.
 */
export const WHATSAPP_NUMBER =
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER?.replace(/\D/g, "") || "905456597551";

/** İletişim formu gönderim adresi (mailto veya API için) */
export const CONTACT_EMAIL =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL || "mustafa82oner@gmail.com";
