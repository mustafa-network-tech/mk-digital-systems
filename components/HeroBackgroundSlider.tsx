"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

/** `public/hero/` — mk.jpg, mk1.jpg, mk2.jpg, mk3.jpg */
const HERO_BACKGROUNDS = ["/hero/mk.jpg", "/hero/mk1.jpg", "/hero/mk2.jpg", "/hero/mk3.jpg"] as const;

type SlideKey = "slide0" | "slide1" | "slide2" | "slide3";

const animations = [
  "hero-slide-animate-fade-up",
  "hero-slide-animate-fade-right",
  "hero-slide-animate-zoom-in",
] as const;

export function HeroBackgroundSlider() {
  const t = useTranslations("heroSlider");
  const slides = useMemo(
    () =>
      HERO_BACKGROUNDS.map((src, i) => ({
        src,
        caption: t(`slide${i}` as SlideKey),
      })),
    [t]
  );

  const [index, setIndex] = useState(0);
  const [animClass, setAnimClass] = useState<(typeof animations)[number]>(animations[0]);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => {
        const next = (prev + 1) % slides.length;
        setAnimClass(animations[next % animations.length]);
        return next;
      });
    }, 2700);

    return () => clearInterval(interval);
  }, [slides.length]);

  const current = slides[index];

  return (
    <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#020617]">
      <div className={`relative h-full w-full transition-opacity duration-700 ${animClass}`}>
        {/* Katman 1: tüm alan — düşük netlik (silik kartlar / derinlik) */}
        <div className="absolute inset-0 overflow-hidden" aria-hidden>
          <Image
            key={`${current.src}-base`}
            src={current.src}
            alt=""
            fill
            priority
            sizes="100vw"
            className="scale-[1.12] object-cover object-[78%_center] opacity-[0.44] blur-2xl saturate-[0.92]"
          />
        </div>
        {/* Katman 2: sağ şerit — daha az blur (ana KPI / odak alanı) */}
        <div
          className="absolute inset-0 overflow-hidden [clip-path:inset(0_0_12%_36%)] sm:[clip-path:inset(0_0_10%_34%)]"
          aria-hidden
        >
          <Image
            key={`${current.src}-focus`}
            src={current.src}
            alt=""
            fill
            sizes="100vw"
            className="scale-105 object-cover object-right opacity-[0.5] blur-[6px] contrast-[1.04] sm:blur-[5px] sm:opacity-[0.48]"
          />
        </div>
        {/* Sol: metin okunurluğu — koyu gradient (SaaS tipik sol sütun) */}
        <div
          className="absolute inset-0 bg-[linear-gradient(90deg,#020617_0%,rgba(2,6,23,0.92)_34%,rgba(2,6,23,0.55)_54%,rgba(2,6,23,0.12)_72%,transparent_82%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-gradient-to-b from-[#020617]/75 via-transparent via-40% to-[#020617]/95"
          aria-hidden
        />
        {/* Sağ üst: hafif mavi / mor glow */}
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_70%_55%_at_100%_0%,rgba(99,102,241,0.16),transparent_58%)]"
          aria-hidden
        />
        <div
          className="absolute inset-0 bg-[radial-gradient(ellipse_45%_38%_at_92%_28%,rgba(59,130,246,0.12),transparent_65%)]"
          aria-hidden
        />
        {/* Çok hafif grain — performans: statik SVG tile */}
        <div className="hero-bg-grain absolute inset-0 z-[1] opacity-[0.04] md:opacity-[0.035]" aria-hidden />
        {/* Slogan — yüksek kontrast, alta yakın; rozetlerle çakışmaması için sayfada mb ile ayrılır */}
        <div className="hero-slider-caption absolute bottom-2 left-3 right-3 z-[5] max-w-xl rounded-xl border border-white/20 bg-[rgba(15,23,42,0.92)] px-4 py-3 text-center text-sm font-medium leading-snug text-white shadow-[0_10px_40px_rgba(0,0,0,0.5)] ring-1 ring-white/10 backdrop-blur-md sm:left-4 sm:right-4 sm:text-[0.9375rem] md:bottom-3 md:left-auto md:right-6 md:max-w-md md:text-left md:text-sm">
          <span className="[text-shadow:0_1px_2px_rgba(0,0,0,0.85)]">{current.caption}</span>
        </div>
      </div>
    </div>
  );
}
