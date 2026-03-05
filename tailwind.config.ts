import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./config/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0B0F14",
        base: "#0B0F14",
        surface: "#111827",
        elevated: "#0F172A",
        hero: "#0B0F14",
        border: "rgba(255,255,255,0.08)",
        accent: { DEFAULT: "#3B82F6", hover: "#60A5FA" },
        primary: { DEFAULT: "#3B82F6", hover: "#60A5FA" },
        title: "#E6EAF0",
        body: "#A9B2C1",
        muted: "#7C879A",
        nav: "#E6EAF0",
      },
      backgroundImage: {
        "hero-gradient": "linear-gradient(180deg, #0B0F14, #111827)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "sans-serif"],
        alt: ["var(--font-plus-jakarta)", "Plus Jakarta Sans", "sans-serif"],
        handwriting: ["var(--font-caveat)", "Caveat", "cursive"],
      },
      fontSize: {
        "hero-desktop": ["56px", { lineHeight: "1.1", fontWeight: "600" }],
        "hero-tablet": ["44px", { lineHeight: "1.1", fontWeight: "600" }],
        "hero-mobile": ["36px", { lineHeight: "1.1", fontWeight: "600" }],
        "section": ["32px", { lineHeight: "1.2", fontWeight: "600" }],
        "card-title": ["18px", { lineHeight: "1.3", fontWeight: "500" }],
      },
      maxWidth: {
        container: "1200px",
      },
      spacing: {
        "section-desktop": "120px",
        "section-mobile": "80px",
      },
      borderRadius: {
        card: "16px",
        button: "12px",
      },
      boxShadow: {
        card: "0 10px 30px rgba(0,0,0,0.35)",
        cardHover: "0 14px 40px rgba(0,0,0,0.4)",
        navbar: "0 1px 0 rgba(255,255,255,0.06)",
      },
      keyframes: {
        "float-slow": {
          "0%, 100%": { transform: "translateX(-50%) translateY(0) rotate(0deg)" },
          "50%": { transform: "translateX(-50%) translateY(-20px) rotate(5deg)" },
        },
        "float-slower": {
          "0%, 100%": { transform: "translateY(0) rotate(0deg)" },
          "50%": { transform: "translateY(15px) rotate(-3deg)" },
        },
      },
      animation: {
        "float-slow": "float-slow 18s ease-in-out infinite",
        "float-slower": "float-slower 22s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};

export default config;
