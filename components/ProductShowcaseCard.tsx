"use client";

type Props = {
  title: string;
  summary: string;
  stack: readonly string[];
  whatsappUrl: string;
  detailsUrl: string;
  requestLabel: string;
  viewDetailsLabel: string;
};

/**
 * Ürün vitrin kartı: Talep Et (WhatsApp) + Detayları Gör (dış URL).
 * Kenar çizgisi sade; butonlar altta hizalı (mobil alt alta, masaüstü yan yana).
 */
export function ProductShowcaseCard({
  title,
  summary,
  stack,
  whatsappUrl,
  detailsUrl,
  requestLabel,
  viewDetailsLabel,
}: Props) {
  return (
    <div className="project-card-glow flex h-full min-h-0 flex-col rounded-[16px] border border-white/[0.1] bg-[#111827] text-left text-[#E6EAF0] shadow-[0_10px_30px_rgba(0,0,0,0.35)] transition-all duration-[0.25s] ease-out">
      <div className="project-card-content flex min-h-0 flex-1 flex-col p-[22px] sm:p-[26px]">
        <h3 className="mb-2 text-lg font-semibold text-[#E6EAF0]">{title}</h3>
        <p className="mb-3 text-sm leading-relaxed text-[#9CA3AF] sm:mb-4">{summary}</p>
        <div className="mb-4 flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span
              key={tech}
              className="inline-flex items-center rounded-full bg-[rgba(255,255,255,0.08)] px-2.5 py-1 text-xs text-[rgba(255,255,255,0.75)]"
            >
              {tech}
            </span>
          ))}
        </div>
        <div className="mt-auto flex flex-col gap-2.5 pt-1 sm:flex-row sm:items-center sm:justify-stretch sm:gap-3">
          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full flex-1 items-center justify-center rounded-[10px] bg-gradient-to-r from-[#2563eb] to-[#3b82f6] px-4 py-2.5 text-center text-sm font-semibold text-white shadow-[0_4px_20px_rgba(37,99,235,0.35)] no-underline transition hover:brightness-110 hover:shadow-[0_6px_24px_rgba(59,130,246,0.4)] focus:outline-none focus:ring-2 focus:ring-[#60A5FA] focus:ring-offset-2 focus:ring-offset-[#111827] sm:min-w-0 sm:py-2.5"
          >
            {requestLabel}
          </a>
          <a
            href={detailsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex w-full flex-1 items-center justify-center rounded-[10px] border border-white/[0.14] bg-transparent px-4 py-2.5 text-center text-sm font-medium text-[#E6EAF0]/90 no-underline transition hover:border-white/[0.22] hover:bg-white/[0.05] focus:outline-none focus:ring-2 focus:ring-white/20 focus:ring-offset-2 focus:ring-offset-[#111827] sm:min-w-0 sm:py-2.5"
          >
            {viewDetailsLabel}
          </a>
        </div>
      </div>
    </div>
  );
}
