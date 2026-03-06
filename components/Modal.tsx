"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  headerAction?: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children, headerAction }: ModalProps) {
  const t = useTranslations("common");
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }
    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-5 sm:p-4"
      role="dialog"
      aria-modal
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative flex w-[95%] max-w-[720px] max-h-[85vh] sm:max-h-[80vh] sm:w-[90%] flex-col rounded-card border border-[rgba(255,255,255,0.08)] bg-surface shadow-cardHover">
        <div className="flex shrink-0 items-center justify-between gap-2 sm:gap-3 border-b border-[rgba(255,255,255,0.06)] px-4 sm:px-5 py-3 min-h-0">
          <h2 id="modal-title" className="text-base font-semibold text-title truncate">
            {title}
          </h2>
          <div className="flex shrink-0 items-center gap-2">
            {headerAction}
            <button
              type="button"
              onClick={onClose}
              className="text-muted hover:text-title transition p-1 rounded"
              aria-label={t("close")}
            >
              ✕
            </button>
          </div>
        </div>
        <div className="min-h-0 flex-1 overflow-y-auto overflow-x-hidden px-4 sm:px-5 py-4 text-body text-sm leading-relaxed overscroll-contain">
          {children}
        </div>
      </div>
    </div>
  );
}
