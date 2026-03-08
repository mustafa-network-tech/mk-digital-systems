"use client";

import { useState } from "react";
import { FORMSPREE_FORM_ID } from "@/lib/constants";

type Props = {
  locale: "tr" | "en";
  nameLabel: string;
  emailLabel: string;
  messageLabel: string;
  submitLabel: string;
  submitSending: string;
  successMessage: string;
  errorMessage: string;
};

const FORMSPREE_URL = "https://formspree.io/f";

export function ContactForm({
  locale,
  nameLabel,
  emailLabel,
  messageLabel,
  submitLabel,
  submitSending,
  successMessage,
  errorMessage,
}: Props) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const name = (form.elements.namedItem("name") as HTMLInputElement)?.value?.trim() ?? "";
    const email = (form.elements.namedItem("email") as HTMLInputElement)?.value?.trim() ?? "";
    const message = (form.elements.namedItem("message") as HTMLTextAreaElement)?.value?.trim() ?? "";
    const company = (form.elements.namedItem("company") as HTMLInputElement)?.value?.trim() ?? "";

    setStatus("loading");

    const useFormspree = !!FORMSPREE_FORM_ID;
    const subject =
      locale === "en"
        ? `New Contact Form Message — ${name}`
        : `Yeni İletişim Formu Mesajı — ${name}`;

    try {
      const url = useFormspree
        ? `${FORMSPREE_URL}/${FORMSPREE_FORM_ID}`
        : "/api/contact";

      let res: Response;
      if (useFormspree) {
        // Formspree works best with FormData (avoids 400/422 JSON issues)
        const formData = new FormData();
        formData.append("name", name);
        formData.append("email", email);
        formData.append("message", message);
        if (company) formData.append("company", company);
        formData.append("_replyto", email);
        formData.append("_subject", subject);
        formData.append("_language", locale);
        formData.append("pageUrl", typeof window !== "undefined" ? window.location.href : "");
        res = await fetch(url, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: formData,
        });
      } else {
        res = await fetch(url, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            name,
            email,
            message,
            lang: locale,
            pageUrl: typeof window !== "undefined" ? window.location.href : "",
            company: company || undefined,
          }),
        });
      }

      const data = await res.json().catch(() => ({}));
      if (!res.ok) {
        const msg = data.error ?? data.message ?? data.errors?.[0]?.message ?? "Request failed";
        throw new Error(typeof msg === "string" ? msg : "Request failed");
      }
      setStatus("success");
      form.reset();
      setTimeout(() => setStatus("idle"), 4000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  const toastMessage =
    status === "success" ? successMessage : status === "error" ? errorMessage : null;

  return (
    <>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="name" className="block text-sm font-medium text-body mb-1">
            {nameLabel}
          </label>
          <input
            id="name"
            name="name"
            type="text"
            required
            minLength={2}
            className="w-full rounded-button border border-[rgba(255,255,255,0.08)] bg-surface px-4 py-3 text-title placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={nameLabel}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium text-body mb-1">
            {emailLabel}
          </label>
          <input
            id="email"
            name="email"
            type="email"
            required
            className="w-full rounded-button border border-[rgba(255,255,255,0.08)] bg-surface px-4 py-3 text-title placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent"
            placeholder={emailLabel}
            disabled={status === "loading"}
          />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium text-body mb-1">
            {messageLabel}
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            required
            minLength={20}
            className="w-full rounded-button border border-[rgba(255,255,255,0.08)] bg-surface px-4 py-3 text-title placeholder-muted focus:border-accent focus:outline-none focus:ring-1 focus:ring-accent resize-none"
            placeholder={messageLabel}
            disabled={status === "loading"}
          />
        </div>
        <div className="absolute -left-[9999px] opacity-0 pointer-events-none" aria-hidden>
          <label htmlFor="company">Company</label>
          <input id="company" name="company" type="text" tabIndex={-1} autoComplete="off" />
        </div>
        <button
          type="submit"
          disabled={status === "loading"}
          className="w-full sm:w-auto inline-flex h-12 items-center justify-center rounded-xl bg-accent px-8 text-base font-medium text-[#0B0F14] transition hover:bg-accent-hover disabled:opacity-70 disabled:cursor-not-allowed"
        >
          {status === "loading" ? submitSending : submitLabel}
        </button>
      </form>

      {toastMessage && (
        <div
          role="alert"
          className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 rounded-button border border-[rgba(255,255,255,0.08)] bg-surface px-6 py-3 text-body shadow-cardHover text-sm"
        >
          {toastMessage}
        </div>
      )}
    </>
  );
}
