export type ContactBrief = {
  name: string;
  email: string;
  message: string;
  company: string;
  phone: string;
  country: string;
  projectType: string;
  project: string;
  website: string;
  consent: boolean;
  lang: string;
  pageUrl: string;
};
const limits: Record<string, number> = {
  name: 100,
  email: 254,
  message: 5000,
  company: 150,
  phone: 50,
  country: 100,
  projectType: 30,
  project: 100,
  website: 200,
  lang: 5,
  pageUrl: 2000,
};
export function validateBrief(
  input: unknown,
): { ok: true; brief: ContactBrief } | { ok: false; error: string } {
  if (!input || typeof input !== "object" || Array.isArray(input))
    return { ok: false, error: "INVALID_BRIEF" };
  const source = input as Record<string, unknown>;
  const result: Record<string, string> = {};
  for (const [key, max] of Object.entries(limits)) {
    const raw = source[key];
    if (raw !== undefined && typeof raw !== "string")
      return { ok: false, error: "INVALID_BRIEF" };
    const value = typeof raw === "string" ? raw.trim() : "";
    if (value.length > max) return { ok: false, error: "INVALID_BRIEF" };
    result[key] = value;
  }
  if (
    result.name.length < 2 ||
    /[\r\n]/.test(result.name) ||
    !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(result.email) ||
    result.message.length < 20 ||
    source.consent !== true ||
    !["web", "custom", "business", "product", "smart", "unsure"].includes(
      result.projectType,
    ) ||
    !["tr", "en", "de", "fr"].includes(result.lang)
  )
    return { ok: false, error: "INVALID_BRIEF" };
  return { ok: true, brief: { ...result, consent: true } as ContactBrief };
}
