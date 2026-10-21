import { NextResponse } from "next/server";
import { Resend } from "resend";

const BRAND = "#2A3490";
const ACCENT = "#F97316";

// Escape user input so it can't inject HTML into the email
const esc = (v: unknown) =>
  String(v ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");

const oneLine = (v: unknown) => String(v ?? "").replace(/[\r\n]+/g, " ").trim();

const row = (label: string, value: string) => `
  <tr>
    <td style="padding:14px 0;border-bottom:1px solid #eceef6;width:130px;vertical-align:top;font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8a90b0;">${label}</td>
    <td style="padding:14px 0;border-bottom:1px solid #eceef6;vertical-align:top;font-size:15px;color:#1b1f3b;">${value}</td>
  </tr>`;

function buildHtml(d: {
  name: string;
  email: string;
  phone: string;
  company: string;
  service: string;
  message: string;
}) {
  const name = esc(d.name);
  const email = esc(d.email);
  const phone = esc(d.phone);
  const company = esc(d.company);
  const service = esc(d.service);
  const message = esc(d.message).replace(/\n/g, "<br/>");
  const initial = esc(d.name.trim().charAt(0).toUpperCase() || "?");

  return `<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta name="color-scheme" content="light" />
</head>
<body style="margin:0;padding:0;background:#f4f5fb;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',Roboto,Helvetica,Arial,sans-serif;">
  <div style="display:none;max-height:0;overflow:hidden;opacity:0;">New inquiry from ${name} about ${service || "your services"}</div>
  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background:#f4f5fb;padding:32px 12px;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellpadding="0" cellspacing="0" style="max-width:600px;width:100%;background:#ffffff;border-radius:20px;overflow:hidden;box-shadow:0 8px 30px rgba(42,52,144,0.12);">

          <!-- Header -->
          <tr>
            <td style="background:${BRAND};padding:32px 36px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:3px;text-transform:uppercase;color:#b9bff0;">Sutantra Technology</div>
              <div style="font-size:26px;font-weight:800;color:#ffffff;margin-top:10px;line-height:1.2;">New project inquiry</div>
              <div style="height:4px;width:48px;background:${ACCENT};border-radius:2px;margin-top:18px;"></div>
            </td>
          </tr>

          <!-- Sender -->
          <tr>
            <td style="padding:32px 36px 8px 36px;">
              <table role="presentation" cellpadding="0" cellspacing="0">
                <tr>
                  <td style="width:52px;height:52px;border-radius:26px;background:#eef0fb;color:${BRAND};font-size:22px;font-weight:800;text-align:center;line-height:52px;">${initial}</td>
                  <td style="padding-left:16px;">
                    <div style="font-size:18px;font-weight:700;color:#1b1f3b;">${name}</div>
                    <div style="font-size:14px;color:#6b7194;margin-top:2px;">${company || "No company provided"}</div>
                  </td>
                </tr>
              </table>
              ${
                service
                  ? `<div style="margin-top:20px;"><span style="display:inline-block;background:#fff4ec;color:#c2570c;border:1px solid #fed7b8;border-radius:999px;padding:6px 14px;font-size:12px;font-weight:700;letter-spacing:0.5px;">${service}</span></div>`
                  : ""
              }
            </td>
          </tr>

          <!-- Details -->
          <tr>
            <td style="padding:8px 36px 0 36px;">
              <table role="presentation" width="100%" cellpadding="0" cellspacing="0">
                ${row("Email", `<a href="mailto:${email}" style="color:${BRAND};text-decoration:none;font-weight:600;">${email}</a>`)}
                ${row("Phone", phone ? `<a href="tel:${phone}" style="color:${BRAND};text-decoration:none;font-weight:600;">${phone}</a>` : "—")}
                ${row("Company", company || "—")}
                ${row("Service", service || "—")}
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td style="padding:28px 36px 8px 36px;">
              <div style="font-size:11px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;color:#8a90b0;margin-bottom:12px;">Message</div>
              <div style="background:#f7f8fd;border-left:4px solid ${ACCENT};border-radius:8px;padding:18px 20px;font-size:15px;line-height:1.7;color:#1b1f3b;">${message}</div>
            </td>
          </tr>

          <!-- Reply button -->
          <tr>
            <td align="left" style="padding:28px 36px 36px 36px;">
              <a href="mailto:${email}?subject=${encodeURIComponent("Re: Your inquiry to Sutantra Technology")}" style="display:inline-block;background:${BRAND};color:#ffffff;text-decoration:none;font-size:13px;font-weight:700;letter-spacing:1.5px;text-transform:uppercase;padding:14px 32px;border-radius:999px;">Reply to ${name.split(" ")[0] || "sender"}</a>
              <div style="font-size:12px;color:#8a90b0;margin-top:14px;">Or just hit Reply in your mail app. It goes straight to ${email}.</div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background:#f7f8fd;padding:20px 36px;border-top:1px solid #eceef6;">
              <div style="font-size:12px;color:#8a90b0;line-height:1.6;">
                Sent from the contact form at <a href="https://sutantratechnology.com" style="color:${BRAND};text-decoration:none;">sutantratechnology.com</a>
              </div>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const data = {
      name: oneLine(body.name),
      email: oneLine(body.email),
      phone: oneLine(body.phone),
      company: oneLine(body.company),
      service: oneLine(body.service ?? body["service of interest"]),
      message: String(body.message ?? "").trim(),
    };

    if (!data.name || !data.email || !data.message) {
      return NextResponse.json(
        { success: false, error: "Please fill in all required fields." },
        { status: 400 }
      );
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      return NextResponse.json(
        { success: false, error: "Please enter a valid email address." },
        { status: 400 }
      );
    }

    const html = buildHtml(data);

    const text = `New inquiry from ${data.name}

Email: ${data.email}
Phone: ${data.phone || "-"}
Company: ${data.company || "-"}
Service: ${data.service || "-"}

Message:
${data.message}
`;

    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey) {
      console.error("Missing RESEND_API_KEY environment variable");
      return NextResponse.json(
        { success: false, error: "Email service is temporarily unavailable. Please try again later." },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);
    const { error } = await resend.emails.send({
      from: "Sutantra Contact <contact@sutantratechnology.com>",
      to: ["info@sutantratechnology.com"],
      replyTo: data.email,
      subject: `New inquiry from ${data.name}${data.service ? ` · ${data.service}` : ""}`,
      html,
      text,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { success: false, error: "We could not send your message right now. Please try again later." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Contact API error:", error);
    return NextResponse.json(
      { success: false, error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}