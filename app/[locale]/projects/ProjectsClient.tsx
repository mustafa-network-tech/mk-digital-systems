"use client";

import { useState } from "react";
import { Modal } from "@/components/Modal";

type ProjectItem = {
  id: string;
  title: string;
  summary: string;
  detail: string;
  stack: readonly string[];
};

export function ProjectsClient({
  projects,
  demoLabel,
}: {
  projects: ProjectItem[];
  demoLabel: string;
}) {
  const [openId, setOpenId] = useState<string | null>(null);
  const selected = projects.find((p) => p.id === openId);

  return (
    <>
      <div className="mt-10 grid w-full gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((p) => (
          <button
            key={p.id}
            type="button"
            onClick={() => setOpenId(p.id)}
            className="project-card-glow w-full cursor-pointer rounded-[16px] border border-[rgba(255,255,255,0.08)] bg-[#111827] p-[26px] text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] ease-out"
          >
            <div className="project-card-content">
              <span className="mb-[10px] block text-xs font-medium uppercase tracking-[0.08em] text-[rgba(255,255,255,0.55)]">
                {demoLabel}
              </span>
              <h2 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{p.title}</h2>
              <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{p.summary}</p>
              <div className="flex flex-wrap gap-2">
                {p.stack.map((tech) => (
                  <span key={tech} className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </button>
        ))}
      </div>

      <Modal
        isOpen={!!selected}
        onClose={() => setOpenId(null)}
        title={selected?.title ?? ""}
      >
        {selected && (
          <>
            <p className="text-body">{selected.detail}</p>
            <div className="mt-4 flex flex-wrap gap-1.5">
              {selected.stack.map((tech) => (
                <span key={tech} className="rounded bg-base px-2 py-0.5 text-xs text-muted">
                  {tech}
                </span>
              ))}
            </div>
          </>
        )}
      </Modal>
    </>
  );
}
