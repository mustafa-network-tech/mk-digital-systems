"use client";
import { useRef, useState } from "react";
import { Link } from "@/config/navigation";
import type { Locale } from "@/config/i18n";
import type { SiteContent } from "@/content/site";
import { FORMSPREE_FORM_ID } from "@/lib/constants";
import { Arrow } from "./Arrow";
const typeIds = ["web", "custom", "business", "product", "smart", "unsure"];
export function ProjectBrief({
  locale,
  copy,
  initialType = "unsure",
  project = "",
}: {
  locale: Locale;
  copy: SiteContent["contact"];
  initialType?: string;
  project?: string;
}) {
  const [status, setStatus] = useState<
    "idle" | "sending" | "success" | "error"
  >("idle");
  const [invalid, setInvalid] = useState(false);
  const inFlight = useRef(false);
  const feedback = useRef<HTMLDivElement>(null);
  const submit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inFlight.current) return;
    const form = e.currentTarget;
    if (!form.reportValidity()) {
      setInvalid(true);
      return;
    }
    const data = new FormData(form);
    inFlight.current = true;
    setInvalid(false);
    setStatus("sending");
    const value = (key: string) => String(data.get(key) || "").trim();
    const payload = {
      name: value("name"),
      email: value("email"),
      message: value("message"),
      company: value("company"),
      phone: value("phone"),
      country: value("country"),
      projectType: value("projectType"),
      project,
      website: value("website"),
      consent: data.get("consent") === "on",
      lang: locale,
      pageUrl: window.location.href,
    };
    try {
      let response: Response;
      if (FORMSPREE_FORM_ID) {
        data.set("_subject", `MK Digital Systems — ${payload.name}`);
        data.set("_replyto", payload.email);
        data.set("_language", locale);
        data.set("pageUrl", payload.pageUrl);
        data.set("project", project);
        data.set("consent", "true");
        data.delete("website");
        // Formspree's supported bot field, separate from the genuine company field.
        data.set("_gotcha", payload.website);
        response = await fetch(`https://formspree.io/f/${FORMSPREE_FORM_ID}`, {
          method: "POST",
          headers: { Accept: "application/json" },
          body: data,
        });
      } else
        response = await fetch("/api/contact", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(payload),
        });
      if (!response.ok) throw new Error("Delivery failed");
      setStatus("success");
      form.reset();
    } catch {
      setStatus("error");
    } finally {
      inFlight.current = false;
      requestAnimationFrame(() => feedback.current?.focus());
    }
  };
  if (status === "success")
    return (
      <div className="form-success" ref={feedback} tabIndex={-1} role="status">
        <div className="success-symbol" aria-hidden="true">
          ↗
        </div>
        <h2>{copy.success}</h2>
        <p>{copy.successText}</p>
        <button
          className="button"
          type="button"
          onClick={() => setStatus("idle")}
        >
          {copy.retry}
          <Arrow />
        </button>
      </div>
    );
  return (
    <form
      className="brief-form"
      onSubmit={submit}
      onInvalid={() => setInvalid(true)}
      aria-busy={status === "sending"}
    >
      <h2>{copy.intro}</h2>
      <div className="form-row">
        <div className="form-field">
          <label htmlFor="name">
            {copy.name}
            <span>{copy.required}</span>
          </label>
          <input
            id="name"
            name="name"
            autoComplete="name"
            required
            minLength={2}
            maxLength={100}
            disabled={status === "sending"}
          />
        </div>
        <div className="form-field">
          <label htmlFor="email">
            {copy.email}
            <span>{copy.required}</span>
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="email"
            required
            maxLength={254}
            disabled={status === "sending"}
          />
        </div>
      </div>
      <fieldset className="project-types" disabled={status === "sending"}>
        <legend className="type-legend">{copy.type}</legend>
        <div className="type-options">
          {copy.types.map((label, i) => (
            <label key={typeIds[i]}>
              <input
                type="radio"
                name="projectType"
                value={typeIds[i]}
                defaultChecked={
                  typeIds[i] ===
                  (typeIds.includes(initialType) ? initialType : "unsure")
                }
              />
              <span>{label}</span>
            </label>
          ))}
        </div>
      </fieldset>
      <div className="form-field">
        <label htmlFor="message">
          {copy.message}
          <span>{copy.required}</span>
        </label>
        <textarea
          id="message"
          name="message"
          rows={5}
          minLength={20}
          maxLength={5000}
          required
          placeholder={copy.placeholder}
          disabled={status === "sending"}
          aria-describedby={
            status === "error" || invalid ? "form-feedback" : undefined
          }
        />
      </div>
      <details className="optional-details">
        <summary>{copy.more}</summary>
        <div className="form-field">
          <label htmlFor="company">
            {copy.company}
            <span>{copy.optional}</span>
          </label>
          <input
            id="company"
            name="company"
            autoComplete="organization"
            maxLength={150}
            disabled={status === "sending"}
          />
        </div>
        <div className="form-row">
          <div className="form-field">
            <label htmlFor="phone">
              {copy.phone}
              <span>{copy.optional}</span>
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              autoComplete="tel"
              maxLength={50}
              disabled={status === "sending"}
            />
          </div>
          <div className="form-field">
            <label htmlFor="country">
              {copy.country}
              <span>{copy.optional}</span>
            </label>
            <input
              id="country"
              name="country"
              autoComplete="country-name"
              maxLength={100}
              disabled={status === "sending"}
            />
          </div>
        </div>
      </details>
      <div className="form-honeypot" aria-hidden="true">
        <label htmlFor="website">{copy.company}</label>
        <input id="website" name="website" tabIndex={-1} autoComplete="off" />
      </div>
      <label className="consent-row">
        <input
          type="checkbox"
          name="consent"
          required
          disabled={status === "sending"}
        />
        <span>
          {copy.consent}{" "}
          <Link href="/legal/privacy" target="_blank">
            {copy.privacy}
          </Link>
          .
        </span>
      </label>
      {(status === "error" || invalid) && (
        <div
          id="form-feedback"
          className="form-error"
          role="alert"
          ref={feedback}
          tabIndex={-1}
        >
          {invalid ? copy.invalid : copy.error}
        </div>
      )}
      <button type="submit" className="button" disabled={status === "sending"}>
        {status === "sending" ? copy.sending : copy.submit}
        <Arrow diagonal />
      </button>
    </form>
  );
}
