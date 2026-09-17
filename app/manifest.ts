import type { MetadataRoute } from "next";
export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "MK Digital Systems",
    short_name: "MK Digital",
    start_url: "/en",
    display: "browser",
    background_color: "#f5f4ef",
    theme_color: "#244de0",
    icons: [
      { src: "/brand/icon-192.png", sizes: "192x192", type: "image/png" },
      { src: "/brand/icon-512.png", sizes: "512x512", type: "image/png" },
    ],
  };
}
