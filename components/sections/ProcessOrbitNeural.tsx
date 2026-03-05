"use client";

import { useState, useMemo } from "react";
import { PROCESS_STEPS, type ProcessStepId } from "@/content/processOrbitNeural";

const STEP_IDS: ProcessStepId[] = [
  "request",
  "analysis",
  "design",
  "build",
  "launch",
  "support",
];

const ORBIT_RADIUS_PCT = 50;
const STEP_COUNT = 6;

function getOrbitPosition(index: number): { x: number; y: number } {
  const angleDeg = -90 + index * (360 / STEP_COUNT);
  const angleRad = (angleDeg * Math.PI) / 180;
  const x = 50 + ORBIT_RADIUS_PCT * Math.cos(angleRad);
  const y = 50 + ORBIT_RADIUS_PCT * Math.sin(angleRad);
  return { x, y };
}

const NODE_POSITIONS = Array.from({ length: STEP_COUNT }, (_, i) => getOrbitPosition(i));

type Props = { locale: "tr" | "en" };

export function ProcessOrbitNeural({ locale }: Props) {
  const [activeId, setActiveId] = useState<ProcessStepId | null>(null);
  const [hoverId, setHoverId] = useState<ProcessStepId | null>(null);
  const isTr = locale === "tr";

  const steps = useMemo(
    () =>
      STEP_IDS.map((id) => {
        const step = PROCESS_STEPS.find((s) => s.id === id)!;
        return {
          id: step.id,
          nodeTitle: isTr ? step.nodeTitleTr : step.nodeTitleEn,
          title: isTr ? step.titleTr : step.titleEn,
          desc: isTr ? step.descTr : step.descEn,
        };
      }),
    [isTr]
  );

  const activeIndex = activeId !== null ? steps.findIndex((s) => s.id === activeId) : -1;
  const highlightIndex = (activeId !== null ? steps.findIndex((s) => s.id === activeId) : -1) >= 0
    ? activeIndex
    : hoverId !== null
      ? steps.findIndex((s) => s.id === hoverId)
      : -1;
  const activeStep = activeId !== null ? steps.find((s) => s.id === activeId) ?? null : null;

  const handleNodeClick = (id: ProcessStepId) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  const handleMobileChipClick = (id: ProcessStepId) => {
    setActiveId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-16 md:px-6" aria-label="Project process">
      {/* Desktop: orbit + center (plain text only when active) */}
      <div className="hidden lg:block">
            <div
              className="relative mx-auto aspect-square w-full max-w-[560px]"
              style={{ minHeight: "460px" }}
            >
            <div className="pointer-events-none absolute inset-0 flex items-center justify-center" aria-hidden>
              <div className="process-orbit-ring h-[84%] w-[84%] rounded-full border border-white/[0.06]" />
            </div>

            <svg
              className="pointer-events-none absolute inset-0 h-full w-full"
              viewBox="0 0 100 100"
              preserveAspectRatio="xMidYMid meet"
              aria-hidden
            >
              <defs>
                <linearGradient
                  id="process-line-grad"
                  x1="0%"
                  y1="0%"
                  x2="100%"
                  y2="0%"
                >
                  <stop offset="0%" stopColor="rgba(52,211,153,0.2)" />
                  <stop offset="100%" stopColor="rgba(59,130,246,0.2)" />
                </linearGradient>
              </defs>
              {NODE_POSITIONS.map((pos, i) => {
                const next = NODE_POSITIONS[(i + 1) % STEP_COUNT];
                return (
                  <line
                    key={`neural-${i}`}
                    x1={pos.x}
                    y1={pos.y}
                    x2={next.x}
                    y2={next.y}
                    stroke="url(#process-line-grad)"
                    strokeWidth="0.15"
                    opacity={0.4}
                    className="process-neural-line"
                  />
                );
              })}
              {NODE_POSITIONS.map((pos, i) => (
                <line
                  key={`center-${i}`}
                  x1={50}
                  y1={50}
                  x2={pos.x}
                  y2={pos.y}
                  stroke="rgba(255,255,255,0.28)"
                  strokeWidth={highlightIndex === i ? 0.5 : 0.24}
                  opacity={highlightIndex === i ? 0.95 : 0.55}
                  className="process-orbit-center-line"
                  strokeLinecap="round"
                />
              ))}
            </svg>

            {/* Center: only plain text when activeId is set by click; empty when activeId is null */}
            <div className="pointer-events-none absolute left-1/2 top-1/2 z-10 w-[88%] max-w-[min(520px,58ch)] -translate-x-1/2 -translate-y-1/2">
              {activeId !== null && activeStep ? (
                <div
                  key={activeId ?? ""}
                  className="process-orbit-center-content"
                >
                  <p className="process-orbit-center-title mt-0">
                    {activeStep.title}
                  </p>
                  <p className="process-orbit-center-desc mt-3">
                    {activeStep.desc}
                  </p>
                </div>
              ) : null}
            </div>

            {NODE_POSITIONS.map((pos, i) => {
              const step = steps[i];
              const isActive = activeId === step.id;
              const isHover = hoverId === step.id;
              return (
                <button
                  key={step.id}
                  type="button"
                  aria-label={step.title}
                  aria-selected={isActive}
                  aria-current={isActive ? "step" : undefined}
                  title={step.title}
                  className={`process-orbit-node pointer-events-auto absolute z-30 flex -translate-x-1/2 -translate-y-1/2 items-center justify-center border text-center leading-tight transition-[background-color,border-color,box-shadow,transform] duration-200 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50 focus-visible:ring-offset-2 focus-visible:ring-offset-[#0B0F14] ${isActive ? "is-active" : ""}`}
                  style={{
                    left: `${pos.x}%`,
                    top: `${pos.y}%`,
                    transform: `translate(-50%, -50%) scale(${isActive ? 1.06 : 1})`,
                    backgroundColor: isActive
                      ? "rgba(255,255,255,0.14)"
                      : isHover
                        ? "rgba(255,255,255,0.08)"
                        : "rgba(255,255,255,0.05)",
                    borderColor: isActive
                      ? "rgba(52,211,153,0.5)"
                      : isHover
                        ? "rgba(255,255,255,0.2)"
                        : "rgba(255,255,255,0.1)",
                    color: isActive ? "#fff" : "rgba(255,255,255,0.85)",
                    boxShadow: isActive
                      ? "0 0 0 1px rgba(255,255,255,0.25), 0 18px 45px rgba(0,0,0,0.35)"
                      : isHover
                        ? "0 0 12px rgba(52,211,153,0.12)"
                        : undefined,
                  }}
                  onMouseEnter={() => setHoverId(step.id)}
                  onMouseLeave={() => setHoverId(null)}
                  onClick={() => handleNodeClick(step.id)}
                >
                  <span className="process-orbit-node-text">{step.nodeTitle}</span>
                </button>
              );
            })}
          </div>
        </div>

        {/* Mobile: oval chips in grid (2 cols), not single row */}
        <div className="lg:hidden block w-full">
          <div className="grid grid-cols-2 min-[480px]:grid-cols-3 gap-2">
            {steps.map((step) => (
              <button
                key={step.id}
                type="button"
                aria-current={activeId === step.id ? "step" : undefined}
                aria-selected={activeId === step.id}
                aria-label={step.title}
                onClick={() => handleMobileChipClick(step.id)}
                className="process-mobile-chip w-full rounded-full border border-white/20 bg-white/10 font-medium text-[#E6EAF0] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-400/50"
                style={{
                  backgroundColor: activeId === step.id ? "rgba(255,255,255,0.18)" : "rgba(255,255,255,0.08)",
                  borderColor: activeId === step.id ? "rgba(52,211,153,0.45)" : "rgba(255,255,255,0.2)",
                  color: activeId === step.id ? "#fff" : "rgba(255,255,255,0.9)",
                }}
              >
                <span className="line-clamp-1">{step.nodeTitle}</span>
              </button>
            ))}
          </div>
          <div className="mt-6 min-h-[80px] px-4 text-center">
            {activeId !== null && activeStep ? (
              <div
                key={activeId ?? ""}
                className="process-orbit-center-content"
              >
                <p className="process-orbit-center-title mt-0">
                  {activeStep.title}
                </p>
                <p className="process-orbit-center-desc mt-3">
                  {activeStep.desc}
                </p>
              </div>
            ) : null}
          </div>
        </div>
    </section>
  );
}
