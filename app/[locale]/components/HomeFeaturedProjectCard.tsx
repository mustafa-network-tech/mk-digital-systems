"use client";

import { useRouter } from "@/config/navigation";

type Props = {
  id: string;
  title: string;
  summary: string;
  label: string;
  stack: readonly string[];
  whatsappDemoUrl: string;
  requestDemoLabel: string;
};

export function HomeFeaturedProjectCard({
  id,
  title,
  summary,
  label,
  stack,
  whatsappDemoUrl,
  requestDemoLabel,
}: Props) {
  const router = useRouter();

  return (
    <div
      role="button"
      tabIndex={0}
      onClick={() => router.push(`/projects#${id}`)}
      onKeyDown={(e) => e.key === "Enter" && router.push(`/projects#${id}`)}
      className="project-card-glow relative w-full cursor-pointer rounded-[16px] border border-amber-500/40 bg-[#111827] p-0 text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35),0_0_0_1px_rgba(251,191,36,0.12)] transition-all duration-[0.25s] ease-out overflow-hidden"
    >
      <div className="flex items-center justify-between gap-2 border-b border-amber-500/20 bg-amber-500/5 px-[18px] py-2">
        <div className="flex items-center gap-2">
          <svg className="h-4 w-4 shrink-0 text-amber-400" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
          </svg>
          <span className="text-xs font-semibold uppercase tracking-[0.1em] text-amber-400/95">{label}</span>
        </div>
        <a
          href={whatsappDemoUrl}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="shrink-0 inline-flex items-center rounded-lg bg-[#3B82F6] px-2.5 py-1.5 text-xs font-medium text-white no-underline transition hover:bg-[#60A5FA] hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#111827]"
        >
          {requestDemoLabel}
        </a>
      </div>
      <div className="project-card-content p-[26px]">
        <h3 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{title}</h3>
        <p className="mb-[14px] text-sm leading-[1.6] text-[#9CA3AF]">{summary}</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
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
  );
}
