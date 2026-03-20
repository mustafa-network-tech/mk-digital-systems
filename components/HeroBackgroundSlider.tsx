"use client";

import Image from "next/image";
import { useEffect, useMemo, useState } from "react";
import { useTranslations } from "next-intl";

/** `public/hero/` — hero.jpg, hero1.jpg, hero2.jpg */
const HERO_BACKGROUNDS = ["/hero/hero.jpg", "/hero/hero1.jpg", "/hero/hero2.jpg"] as const;

type SlideKey = "slide0" | "slide1" | "slide2";

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
    <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
      <div className={`relative h-full w-full transition-opacity duration-700 ${animClass}`}>
        <Image
          src={current.src}
          alt=""
          fill
          priority
          className="object-cover opacity-60"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#020617]/70 via-[#020617]/75 to-[#020617]" />
        <div className="absolute bottom-8 left-1/2 w-[90%] max-w-2xl -translate-x-1/2 rounded-2xl bg-black/45 px-5 py-3 text-center text-sm text-slate-100/95 backdrop-blur-md md:text-base">
          {current.caption}
        </div>
      </div>
    </div>
  );
}
