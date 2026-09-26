"use client";
import Image from "next/image";
import { useCallback, useEffect, useRef, useState } from "react";
import type { HeroImage, HeroLayout, HeroSlideId } from "@/content/hero";
import type { NeedId } from "@/content/projects";
import type { SiteContent } from "@/content/site";
import { Arrow } from "./Arrow";

export type StageSlide = {
  id: HeroSlideId;
  layout: HeroLayout;
  name: string;
  category: string;
  tag: string;
  screens: (HeroImage & { alt: string })[];
  logo?: HeroImage;
};
type Copy = Pick<SiteContent["hero"], "visual" | "needsLabel" | "needs" | "stage">;

const INTERVAL = 6000;
const needOrder: NeedId[] = ["operations", "presence", "idea"];

/**
 * Product stage: real product screens, one composition per product.
 * Calm autoplay that pauses on hover, focus, a hidden tab or the pause button,
 * and never starts for visitors who prefer reduced motion.
 */
export function HeroStage({
  slides,
  rotation,
  needSlides,
  backdrops,
  copy,
}: {
  slides: StageSlide[];
  rotation: HeroSlideId[];
  needSlides: Record<NeedId, HeroSlideId[]>;
  backdrops: HeroImage[];
  copy: Copy;
}) {
  const [need, setNeed] = useState<NeedId | null>(null);
  const [index, setIndex] = useState(0);
  const [playing, setPlaying] = useState(true);
  const [hold, setHold] = useState(false);
  const [reduced, setReduced] = useState(false);
  const ids = need ? needSlides[need] : rotation;
  const list = ids.map((id) => slides.find((s) => s.id === id)!);
  const active = list[index % list.length];
  // Images are only mounted once a slide is shown or next in line (lazy loading).
  const [loaded, setLoaded] = useState<Set<HeroSlideId>>(() => new Set([rotation[0], rotation[1]]));
  const pointer = useRef<number | null>(null);

  useEffect(() => {
    const query = window.matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      setReduced(query.matches);
      if (query.matches) setPlaying(false);
    };
    update();
    query.addEventListener("change", update);
    return () => query.removeEventListener("change", update);
  }, []);

  useEffect(() => {
    const next = list[(index + 1) % list.length].id;
    setLoaded((current) =>
      current.has(active.id) && current.has(next) ? current : new Set([...current, active.id, next]),
    );
  }, [active.id, index, list]);

  const go = useCallback(
    (step: number) => setIndex((i) => (i + step + list.length) % list.length),
    [list.length],
  );

  useEffect(() => {
    if (!playing || hold || reduced) return;
    const timer = window.setInterval(() => {
      if (document.visibilityState === "visible") go(1);
    }, INTERVAL);
    return () => window.clearInterval(timer);
  }, [playing, hold, reduced, go, need]);

  const choose = (id: NeedId) => {
    setNeed((current) => (current === id ? null : id));
    setIndex(0);
  };
  const backdropOf = (id: HeroSlideId) => slides.findIndex((s) => s.id === id) % backdrops.length;
  const label = (n: number, name: string) => `${n} / ${list.length} · ${name}`;

  return (
    <div className="hero-stage-wrap wrap">
      <div className="hero-needs" role="group" aria-label={copy.needsLabel}>
        <span className="hero-needs-label" aria-hidden="true">
          {copy.needsLabel}
        </span>
        {needOrder.map((id) => (
          <button key={id} type="button" aria-pressed={need === id} onClick={() => choose(id)}>
            {copy.needs[id]}
          </button>
        ))}
      </div>
      <section
        className={`hero-stage ${reduced ? "is-still" : ""}`}
        aria-roledescription="carousel"
        aria-label={copy.visual}
        onMouseEnter={() => setHold(true)}
        onMouseLeave={() => setHold(false)}
        onFocus={() => setHold(true)}
        onBlur={(e) => {
          if (!e.currentTarget.contains(e.relatedTarget as Node)) setHold(false);
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight") go(1);
          if (e.key === "ArrowLeft") go(-1);
        }}
        onPointerDown={(e) => {
          pointer.current = e.clientX;
        }}
        onPointerUp={(e) => {
          if (pointer.current === null) return;
          const dx = e.clientX - pointer.current;
          pointer.current = null;
          if (Math.abs(dx) > 40) go(dx < 0 ? 1 : -1);
        }}
      >
        <div className="stage-backdrops" aria-hidden="true">
          {backdrops.map((b, i) => (
            <div key={b.src} className={`stage-backdrop ${i === backdropOf(active.id) ? "is-active" : ""}`}>
              {/* Seen at low opacity, so a small file is enough; the first one loads early as it is in view. */}
              <Image src={b.src} alt="" fill sizes="(max-width: 767px) 50vw, 760px" quality={40} priority={i === 0} />
            </div>
          ))}
        </div>
        <div className="stage-slides" aria-live={playing && !hold && !reduced ? "off" : "polite"}>
          {list.map((slide, i) => {
            const isActive = slide.id === active.id;
            return (
              <div
                key={slide.id}
                className={`stage-slide layout-${slide.layout} ${isActive ? "is-active" : ""}`}
                role="group"
                aria-roledescription="slide"
                aria-label={label(i + 1, slide.name)}
                aria-hidden={!isActive}
                // React 18 has no typed `inert`; an empty string sets the attribute.
                {...({ inert: isActive ? undefined : "" } as object)}
              >
                {loaded.has(slide.id) && <Composition slide={slide} first={i === 0 && !need} />}
              </div>
            );
          })}
        </div>
        <div className="stage-caption">
          {active.logo && (
            <span className="stage-logo">
              <Image src={active.logo.src} alt="" width={40} height={40} sizes="40px" />
            </span>
          )}
          <div>
            <p className="stage-name">{active.name}</p>
            <p className="stage-meta">
              <span>{active.category}</span>
              <span className="stage-tag">{active.tag}</span>
            </p>
          </div>
        </div>
        <div className="stage-controls">
          <span className="stage-count" aria-hidden="true">
            {String((index % list.length) + 1).padStart(2, "0")} / {String(list.length).padStart(2, "0")}
          </span>
          <div className="stage-dots">
            {list.map((slide, i) => (
              <button
                key={slide.id}
                type="button"
                aria-label={copy.stage.goTo.replace("{name}", slide.name)}
                aria-current={slide.id === active.id ? "true" : undefined}
                onClick={() => setIndex(i)}
              />
            ))}
          </div>
          <button type="button" className="stage-button" aria-label={copy.stage.prev} onClick={() => go(-1)}>
            <span className="stage-flip">
              <Arrow />
            </span>
          </button>
          <button type="button" className="stage-button" aria-label={copy.stage.next} onClick={() => go(1)}>
            <Arrow />
          </button>
          {!reduced && (
            <button
              type="button"
              className="stage-button"
              aria-label={playing ? copy.stage.pause : copy.stage.play}
              onClick={() => setPlaying((p) => !p)}
            >
              <span aria-hidden="true">{playing ? "❚❚" : "▶"}</span>
            </button>
          )}
        </div>
      </section>
    </div>
  );
}

function Composition({ slide, first }: { slide: StageSlide; first: boolean }) {
  const [main, ...rest] = slide.screens;
  const img = (screen: StageSlide["screens"][number], sizes: string, priority = false) => (
    <Image
      src={screen.src}
      alt={screen.alt}
      width={screen.width}
      height={screen.height}
      sizes={sizes}
      priority={priority}
      draggable={false}
    />
  );
  if (slide.layout === "phones")
    return (
      <div className="compose-phones">
        {rest.map((screen, i) => (
          <div key={screen.src} className={`phone-frame phone-back phone-back-${i}`}>
            {img(screen, "(max-width: 767px) 34vw, 240px")}
          </div>
        ))}
        <div className="phone-frame phone-front">{img(main, "(max-width: 767px) 42vw, 280px", first)}</div>
      </div>
    );
  if (slide.layout === "phone")
    return (
      <div className="compose-phone">
        <div className="phone-frame phone-front">{img(main, "(max-width: 767px) 46vw, 280px", first)}</div>
      </div>
    );
  if (slide.layout === "artwork")
    return <div className="compose-artwork">{img(main, "(max-width: 767px) 86vw, 760px", first)}</div>;
  return (
    <div className={`compose-${slide.layout}`}>
      <div className="desktop-frame">
        <div className="desktop-chrome" aria-hidden="true">
          <i />
          <i />
          <i />
        </div>
        {img(main, slide.layout === "bleed" ? "(max-width: 767px) 94vw, 1180px" : "(max-width: 767px) 88vw, 960px", first)}
      </div>
      {rest.map((screen) => (
        <div key={screen.src} className="phone-frame phone-side">
          {img(screen, "(max-width: 767px) 30vw, 230px")}
        </div>
      ))}
    </div>
  );
}
