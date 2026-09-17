import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { validateBrief } from "@/lib/contact-validation";
const MAIL_TO = process.env.MAIL_TO || "mkdigitalsystems@hotmail.com";
const RATE_LIMIT_MS = 60_000;
// Per-instance abuse guard. Use a shared rate limiter for multi-instance production traffic.
const rateLimitMap = new Map<string, number>();
export async function POST(req: NextRequest) {
  const contentLength = Number(req.headers.get("content-length") || 0);
  if (contentLength > 16384)
    return NextResponse.json({ error: "BRIEF_TOO_LARGE" }, { status: 413 });
  let input: unknown;
  try {
    const raw = await req.text();
    if (raw.length > 16384)
      return NextResponse.json({ error: "BRIEF_TOO_LARGE" }, { status: 413 });
    input = JSON.parse(raw);
  } catch {
    return NextResponse.json({ error: "INVALID_BRIEF" }, { status: 400 });
  }
  const validation = validateBrief(input);
  if (!validation.ok)
    return NextResponse.json({ error: validation.error }, { status: 400 });
  const brief = validation.brief;
  if (brief.website) return NextResponse.json({ ok: true });
  const ip =
    req.headers.get("x-forwarded-for")?.split(",")[0]?.trim() ||
    req.headers.get("x-real-ip") ||
    "unknown";
  const now = Date.now();
  for (const [key, timestamp] of rateLimitMap)
    if (now - timestamp >= RATE_LIMIT_MS) rateLimitMap.delete(key);
  if (rateLimitMap.has(ip))
    return NextResponse.json(
      { error: "RATE_LIMITED" },
      { status: 429, headers: { "Retry-After": "60" } },
    );
  if (rateLimitMap.size >= 10000)
    return NextResponse.json({ error: "RATE_LIMITED" }, { status: 429 });
  rateLimitMap.set(ip, now);
  const host = process.env.SMTP_HOST,
    user = process.env.SMTP_USER,
    pass = process.env.SMTP_PASS;
  if (!host || !user || !pass)
    return NextResponse.json(
      { error: "DELIVERY_UNAVAILABLE" },
      { status: 503 },
    );
  const port = Number(process.env.SMTP_PORT) || 587;
  const transporter = nodemailer.createTransport({
    host,
    port,
    secure: port === 465,
    auth: { user, pass },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });
  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || user,
      to: MAIL_TO,
      replyTo: brief.email,
      subject: `MK Digital Systems — ${brief.name}`,
      text: [
        `Name / Ad: ${brief.name}`,
        `Email: ${brief.email}`,
        `Company / İşletme: ${brief.company}`,
        `Phone: ${brief.phone}`,
        `Country: ${brief.country}`,
        `Project type: ${brief.projectType}`,
        `Related project: ${brief.project}`,
        "",
        brief.message,
        "",
        `Language: ${brief.lang}`,
        `Page: ${brief.pageUrl}`,
        "Privacy consent: true",
        `Timestamp: ${new Date().toISOString()}`,
      ].join("\n"),
    });
    return NextResponse.json({ ok: true });
  } catch {
    console.error("Contact delivery failed");
    return NextResponse.json({ error: "DELIVERY_FAILED" }, { status: 502 });
  } finally {
    transporter.close();
  }
}
