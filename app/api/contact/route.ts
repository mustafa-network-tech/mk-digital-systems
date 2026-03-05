import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

const MAIL_TO = process.env.MAIL_TO || "mustafa82oner@gmail.com";
const MAIL_FROM = process.env.MAIL_FROM || "noreply@mkdigitalsystems.com";

const RATE_LIMIT_MS = 60_000;
const rateLimitMap = new Map<string, number>();

function getClientIp(req: NextRequest): string {
  return (
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown"
  );
}

function isRateLimited(ip: string): boolean {
  const now = Date.now();
  const last = rateLimitMap.get(ip);
  if (last != null && now - last < RATE_LIMIT_MS) return true;
  rateLimitMap.set(ip, now);
  return false;
}

function isValidEmail(value: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value);
}

type Body = {
  name?: string;
  email?: string;
  message?: string;
  lang?: string;
  pageUrl?: string;
  company?: string;
};

function validate(body: Body): { ok: true } | { ok: false; status: number; message: string } {
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();

  if (name.length < 2)
    return { ok: false, status: 400, message: "Name must be at least 2 characters" };
  if (!isValidEmail(email))
    return { ok: false, status: 400, message: "Invalid email" };
  if (message.length < 20)
    return { ok: false, status: 400, message: "Message must be at least 20 characters" };

  return { ok: true };
}

function buildSubject(lang: string, name: string): string {
  if (lang === "en") return `New Contact Form Message — ${name}`;
  return `Yeni İletişim Formu Mesajı — ${name}`;
}

function buildTextBody(body: Body): string {
  const name = (body.name ?? "").trim();
  const email = (body.email ?? "").trim();
  const message = (body.message ?? "").trim();
  const lang = body.lang ?? "tr";
  const pageUrl = body.pageUrl ?? "";
  const timestamp = new Date().toISOString();

  return [
    "Name / Ad: " + name,
    "Email: " + email,
    "Message / Mesaj:",
    message,
    "",
    "---",
    "Lang: " + lang,
    "Page URL: " + pageUrl,
    "Timestamp: " + timestamp,
  ].join("\n");
}

export async function POST(req: NextRequest) {
  try {
    const ip = getClientIp(req);
    if (isRateLimited(ip)) {
      return NextResponse.json(
        { error: "Too many requests" },
        { status: 429 }
      );
    }

    const body: Body = await req.json();

    if (body.company?.trim()) {
      return NextResponse.json({ ok: true });
    }

    const validation = validate(body);
    if (!validation.ok) {
      return NextResponse.json(
        { error: validation.message },
        { status: validation.status }
      );
    }

    const host = process.env.SMTP_HOST;
    const port = Number(process.env.SMTP_PORT) || 587;
    const user = process.env.SMTP_USER;
    const pass = process.env.SMTP_PASS;

    if (!host || !user || !pass) {
      console.error("Missing SMTP env: SMTP_HOST, SMTP_USER, SMTP_PASS");
      return NextResponse.json(
        { error: "Server mail configuration error" },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host,
      port,
      secure: port === 465,
      auth: { user, pass },
    });

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const lang = body.lang ?? "tr";

    await transporter.sendMail({
      from: MAIL_FROM,
      to: MAIL_TO,
      replyTo: email,
      subject: buildSubject(lang, name),
      text: buildTextBody(body),
    });

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact API error:", err);
    return NextResponse.json(
      { error: "Failed to send message" },
      { status: 500 }
    );
  }
}
