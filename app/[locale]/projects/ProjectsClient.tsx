"use client";

import { useState } from "react";
import { useLocale, useTranslations } from "next-intl";
import { getMkFieldOpsDemoWhatsAppUrl } from "@/lib/whatsapp";
import { Modal } from "@/components/Modal";

type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  stack: readonly string[];
  label?: string;
  featured?: boolean;
  subtitle?: string;
  modalStack?: readonly string[];
  externalUrl?: string;
  /** When set (e.g. enOnly projects), overrides for card and modal button */
  visitSiteLabel?: string;
  /** When set (e.g. app links), overrides with "Uygulamaya Git" / "Visit App" etc. */
  externalButtonLabel?: string;
};

export function ProjectsClient({ projects }: { projects: ProjectItem[] }) {
  const t = useTranslations("projects");
  const locale = useLocale() as "tr" | "en";
  const whatsappDemoUrl = getMkFieldOpsDemoWhatsAppUrl(locale);
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === openId);
  const badges = selected ? (selected.modalStack ?? selected.stack) : [];

  return (
    <>
      <div className="mt-10 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) =>
          p.featured ? (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(p.id)}
              onKeyDown={(e) => e.key === "Enter" && setOpenId(p.id)}
              className="project-card-glow relative w-full cursor-pointer rounded-[16px] border border-amber-500/40 bg-[#111827] p-0 text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(251,191,36,0.12)] transition-all duration-[0.25s] ease-out overflow-hidden"
            >
              {/* Öne çıkan kart: üst şerit (label + Demo butonu aynı hizada) + içerik */}
              <div className="flex items-center justify-between gap-2 border-b border-amber-500/20 bg-amber-500/5 px-[18px] py-2">
                <div className="flex items-center gap-2">
                  <svg className="h-4 w-4 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                  </svg>
                  <span className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-400/95">
                    {p.label}
                  </span>
                </div>
                <a
                  href={whatsappDemoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="shrink-0 inline-flex items-center rounded-lg bg-[#3B82F6] px-2.5 py-1.5 text-xs font-medium text-white no-underline transition hover:bg-[#60A5FA] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#111827]"
                >
                  {t("requestDemo")}
                </a>
              </div>
              <div className="project-card-content p-[26px]">
                <h2 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{p.title}</h2>
                <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : p.externalUrl ? (
            <div
              key={p.id}
              role="button"
              tabIndex={0}
              onClick={() => setOpenId(p.id)}
              onKeyDown={(e) => e.key === "Enter" && setOpenId(p.id)}
              className="project-card-glow relative w-full cursor-pointer rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111827] p-[26px] text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] ease-out"
            >
                <a
                  href={p.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => e.stopPropagation()}
                  className="absolute top-[26px] right-[26px] z-10 inline-flex items-center rounded-lg bg-[#3B82F6] px-2.5 py-1.5 text-xs font-medium text-white no-underline transition hover:bg-[#60A5FA] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#111827]"
                >
                  {p.externalButtonLabel ?? p.visitSiteLabel ?? t("visitSite")}
                </a>
              <div className="project-card-content pr-28">
                {p.label ? (
                  <span className="mb-[10px] block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                    {p.label}
                  </span>
                ) : null}
                <h2 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{p.title}</h2>
                <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ) : (
            <button
              key={p.id}
              type="button"
              onClick={() => setOpenId(p.id)}
              className="project-card-glow w-full cursor-pointer rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111827] p-[26px] text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] ease-out"
            >
              <div className="project-card-content">
                {p.label ? (
                  <span className="mb-[10px] block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                    {p.label}
                  </span>
                ) : null}
                <h2 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{p.title}</h2>
                <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{p.summary}</p>
                <div className="flex flex-wrap gap-2">
                  {p.stack.map((tech) => (
                    <span
                      key={tech}
                      className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </button>
          )
        )}
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setOpenId(null)}
        title={selected?.title ?? ""}
        headerAction={
          selected?.featured ? (
            <a
              href={whatsappDemoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center rounded-lg bg-[#3B82F6] px-2.5 py-1.5 text-xs font-medium text-white no-underline transition hover:bg-[#60A5FA] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-surface"
            >
              {t("requestDemo")}
            </a>
          ) : undefined
        }
      >
        {selected && (
          <>
            {selected.subtitle && (
              <p className="text-muted text-sm font-medium mb-2">{selected.subtitle}</p>
            )}
            <div className="text-body text-sm leading-relaxed whitespace-pre-line">
              {selected.detail}
            </div>
            <div className="mt-3 flex flex-wrap gap-1.5">
              {badges.map((tech) => (
                <span
                  key={tech}
                  className="rounded bg-[rgba(255,255,255,0.08)] px-2 py-0.5 text-xs text-[rgba(255,255,255,0.75)]"
                >
                  {tech}
                </span>
              ))}
            </div>
            {selected.externalUrl && (
              <div className="mt-4 pt-3 border-t border-[rgba(255,255,255,0.06)]">
                <a
                  href={selected.externalUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center rounded-lg bg-[#3B82F6] px-3 py-2 text-sm font-medium text-white no-underline transition hover:bg-[#60A5FA] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-surface"
                >
                  {selected.externalButtonLabel ?? selected.visitSiteLabel ?? t("visitSite")}
                </a>
              </div>
            )}
          </>
        )}
      </Modal>
    </>
  );
}
