import { Instagram, Facebook } from "lucide-react";
import type { SocialPlatform } from "@/lib/site-links";

export function SocialIcon({ platform }: { platform: SocialPlatform }) {
  if (platform === "instagram")
    return <Instagram size={19} strokeWidth={1.6} aria-hidden="true" />;
  if (platform === "facebook")
    return <Facebook size={19} strokeWidth={1.6} aria-hidden="true" />;
  return (
    <svg
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 1 1-2-2.75V9.4a6.33 6.33 0 1 0 5.45 6.27V8.68A8.16 8.16 0 0 0 20.6 10V6.55a4.87 4.87 0 0 1-1.01.14Z" />
    </svg>
  );
}
