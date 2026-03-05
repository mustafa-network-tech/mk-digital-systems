"use client";

import { useEffect } from "react";
import { useTranslations } from "next-intl";

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
};

export function Modal({ isOpen, onClose, title, children }: ModalProps) {
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
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      role="dialog"
      aria-modal
      aria-labelledby="modal-title"
    >
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
        aria-hidden
      />
      <div className="relative w-full max-w-lg rounded-card border border-[rgba(255,255,255,0.08)] bg-surface p-6 shadow-cardHover">
        <div className="flex items-center justify-between mb-4">
          <h2 id="modal-title" className="text-xl font-semibold text-title">
            {title}
          </h2>
          <button
            type="button"
            onClick={onClose}
            className="text-muted hover:text-title transition p-1 rounded"
            aria-label={t("close")}
          >
            ✕
          </button>
        </div>
        <div className="text-body text-sm leading-relaxed">{children}</div>
      </div>
    </div>
  );
}
