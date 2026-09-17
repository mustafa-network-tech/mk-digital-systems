import { CONTACT_EMAIL, WHATSAPP_NUMBER } from "./constants";

const phone =
  process.env.NEXT_PUBLIC_PHONE_NUMBER?.replace(/\D/g, "") || WHATSAPP_NUMBER;
export const contactConfig = {
  email: CONTACT_EMAIL,
  emailHref: `mailto:${CONTACT_EMAIL}`,
  phone: `+${phone}`,
  phoneHref: `tel:+${phone}`,
  whatsappHref: `https://wa.me/${WHATSAPP_NUMBER}`,
};
export function whatsappInquiry(message: string) {
  return `${contactConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
}
