export function normalizePhone(value: string) {
  const digits = value.replace(/\D/g, "").replace(/^00/, "");
  return /^0\d{10}$/.test(digits)
    ? `90${digits.slice(1)}`
    : /^5\d{9}$/.test(digits)
      ? `90${digits}`
      : digits;
}
const whatsapp = normalizePhone(
  process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "905456597551",
);
const phone = normalizePhone(process.env.NEXT_PUBLIC_PHONE_NUMBER || whatsapp);
/** Public corporate contact address; every page, mailto link and JSON-LD reads it from here. */
const email =
  process.env.NEXT_PUBLIC_CONTACT_EMAIL?.trim() || "iletisim@mk-digitalsystems.com";
const phoneDisplay = /^905\d{9}$/.test(phone)
  ? `0${phone.slice(2, 5)} ${phone.slice(5, 8)} ${phone.slice(8, 10)} ${phone.slice(10)}`
  : `+${phone}`;
export const contactConfig = {
  email,
  emailHref: `mailto:${email}`,
  phone: `+${phone}`,
  phoneDisplay,
  whatsapp,
  phoneHref: `tel:+${phone}`,
  whatsappHref: `https://wa.me/${whatsapp}`,
};
export function whatsappInquiry(message: string) {
  return `${contactConfig.whatsappHref}?text=${encodeURIComponent(message)}`;
}
