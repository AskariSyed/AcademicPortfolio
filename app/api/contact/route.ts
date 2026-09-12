import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

// Helper function to escape HTML characters in user input to prevent HTML injection in emails
function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export async function POST(request: NextRequest) {
  try {
    let body: any;
    try {
      body = await request.json();
    } catch {
      return NextResponse.json(
        { error: "Invalid request payload. Expected JSON." },
        { status: 400 }
      );
    }

    const {
      name,
      email,
      institution = "",
      topic = "General Academic Inquiry",
      message,
      hp_website = "",
    } = body;

    // 1. Bot Honeypot Check
    // If the hidden honeypot field is filled, silently return 200 without sending anything
    if (typeof hp_website === "string" && hp_website.trim().length > 0) {
      return NextResponse.json(
        { success: true, message: "Inquiry processed." },
        { status: 200 }
      );
    }

    // 2. Server-side Validation
    if (!name || typeof name !== "string" || name.trim().length < 2 || name.trim().length > 100) {
      return NextResponse.json(
        { error: "Please provide a valid name (between 2 and 100 characters)." },
        { status: 400 }
      );
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email || typeof email !== "string" || !emailRegex.test(email.trim()) || email.trim().length > 254) {
      return NextResponse.json(
        { error: "Please provide a valid academic or professional email address." },
        { status: 400 }
      );
    }

    if (institution && (typeof institution !== "string" || institution.trim().length > 150)) {
      return NextResponse.json(
        { error: "Institution name must not exceed 150 characters." },
        { status: 400 }
      );
    }

    if (!topic || typeof topic !== "string" || topic.trim().length < 2 || topic.trim().length > 100) {
      return NextResponse.json(
        { error: "Please select or provide a valid inquiry focus topic." },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 15 || message.trim().length > 5000) {
      return NextResponse.json(
        { error: "Message must be between 15 and 5,000 characters." },
        { status: 400 }
      );
    }

    // 3. Check for Resend API Key
    const apiKey = process.env.RESEND_API_KEY;
    if (!apiKey || apiKey.trim() === "") {
      console.error("[Contact API] Missing RESEND_API_KEY environment variable on server.");
      return NextResponse.json(
        {
          error:
            "Email service is currently awaiting configuration. Please contact Muhammad Hassan Askari directly at askari.syed04@gmail.com.",
        },
        { status: 503 }
      );
    }

    const recipientEmail =
      process.env.CONTACT_RECIPIENT_EMAIL?.trim() || "askari.syed04@gmail.com";

    // Resend free tier/unverified domain requires using onboarding@resend.dev as sender.
    // When a custom domain is verified on Resend, configure CONTACT_SENDER_EMAIL in env.
    const senderEmail =
      process.env.CONTACT_SENDER_EMAIL?.trim() ||
      "Portfolio Contact <onboarding@resend.dev>";

    const cleanName = name.trim();
    const cleanEmail = email.trim();
    const cleanInstitution = institution ? institution.trim() : "";
    const cleanTopic = topic.trim();
    const cleanMessage = message.trim();

    // 4. Construct Plain-Text and HTML Content
    const submissionDate = new Date().toUTCString();

    const plainTextContent = `New Academic Portfolio Inquiry
==================================================

From: ${cleanName} <${cleanEmail}>
${cleanInstitution ? `Institution / Lab: ${cleanInstitution}\n` : ""}Focus Topic: ${cleanTopic}
Date (UTC): ${submissionDate}

Message Content:
--------------------------------------------------
${cleanMessage}
--------------------------------------------------

Recipient: ${recipientEmail}
Note: You can directly reply to this email to respond to ${cleanName} (${cleanEmail}).
`;

    const safeName = escapeHtml(cleanName);
    const safeEmail = escapeHtml(cleanEmail);
    const safeInstitution = cleanInstitution ? escapeHtml(cleanInstitution) : "Not specified";
    const safeTopic = escapeHtml(cleanTopic);
    const safeMessage = escapeHtml(cleanMessage).replace(/\n/g, "<br />");

    const htmlContent = `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8" />
  <title>New Academic Inquiry</title>
</head>
<body style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; background-color: #f8fafc; color: #1e293b; margin: 0; padding: 24px;">
  <div style="max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
    <div style="background-color: #0f172a; color: #ffffff; padding: 20px 24px;">
      <h2 style="margin: 0; font-size: 18px; font-weight: 700; letter-spacing: -0.02em;">
        New Academic Portfolio Inquiry
      </h2>
      <p style="margin: 4px 0 0 0; font-size: 13px; color: #94a3b8; font-family: monospace;">
        Topic: ${safeTopic}
      </p>
    </div>

    <div style="padding: 24px;">
      <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px; font-size: 13px;">
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 8px 0; font-weight: 600; color: #64748b; width: 130px;">Sender Name:</td>
          <td style="padding: 8px 0; color: #0f172a; font-weight: 600;">${safeName}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Sender Email:</td>
          <td style="padding: 8px 0; color: #1d4ed8;"><a href="mailto:${safeEmail}" style="color: #1d4ed8; text-decoration: none;">${safeEmail}</a></td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Institution / Lab:</td>
          <td style="padding: 8px 0; color: #0f172a;">${safeInstitution}</td>
        </tr>
        <tr style="border-bottom: 1px solid #f1f5f9;">
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Inquiry Focus:</td>
          <td style="padding: 8px 0; color: #0f172a;">${safeTopic}</td>
        </tr>
        <tr>
          <td style="padding: 8px 0; font-weight: 600; color: #64748b;">Received:</td>
          <td style="padding: 8px 0; color: #64748b; font-family: monospace; font-size: 12px;">${submissionDate}</td>
        </tr>
      </table>

      <div style="margin-top: 16px;">
        <div style="font-size: 12px; font-weight: 700; text-transform: uppercase; color: #64748b; letter-spacing: 0.05em; margin-bottom: 8px;">
          Message:
        </div>
        <div style="background-color: #f8fafc; border: 1px solid #e2e8f0; border-radius: 8px; padding: 16px; font-size: 14px; line-height: 1.6; color: #334155;">
          ${safeMessage}
        </div>
      </div>

      <div style="margin-top: 24px; padding: 12px 16px; background-color: #eff6ff; border: 1px solid #bfdbfe; border-radius: 8px; font-size: 12px; color: #1e40af;">
        💡 <strong>Quick Reply:</strong> Hitting <em>Reply</em> in your email client will respond directly to <strong>${safeName}</strong> at <code>${safeEmail}</code>.
      </div>
    </div>
  </div>
</body>
</html>
`;

    // 5. Send via Resend SDK
    const resend = new Resend(apiKey);

    const { data, error } = await resend.emails.send({
      from: senderEmail,
      to: [recipientEmail],
      replyTo: cleanEmail,
      subject: `[Academic Inquiry] ${cleanTopic} - ${cleanName}${cleanInstitution ? ` (${cleanInstitution})` : ""}`,
      text: plainTextContent,
      html: htmlContent,
    });

    if (error) {
      console.error("[Contact API] Resend email dispatch failed:", error);
      return NextResponse.json(
        {
          error:
            "Email provider was unable to deliver your message. Please try again in a few moments, or reach out directly.",
        },
        { status: 502 }
      );
    }

    return NextResponse.json(
      {
        success: true,
        messageId: data?.id,
      },
      { status: 200 }
    );
  } catch (err: any) {
    console.error("[Contact API] Unexpected handler error:", err);
    return NextResponse.json(
      {
        error: "An unexpected server error occurred while processing your inquiry.",
      },
      { status: 500 }
    );
  }
}
