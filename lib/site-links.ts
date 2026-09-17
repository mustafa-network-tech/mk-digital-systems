export type SocialPlatform = "instagram" | "tiktok" | "facebook";
export type SocialLink = {
  platform: SocialPlatform;
  name: string;
  url: string;
};
export const socialLinks: SocialLink[] = [
  {
    platform: "instagram",
    name: "Instagram",
    url: "https://www.instagram.com/mk_digital.systems/",
  },
  {
    platform: "tiktok",
    name: "TikTok",
    url: "https://www.tiktok.com/@mk_digital_systems",
  },
];
// Add a verified Facebook URL here when supplied; unconfigured platforms stay hidden.
export const siteLinks = {
  creator: "https://mustafaoner.net",
  creatorLabel: "mustafaoner.net",
};
