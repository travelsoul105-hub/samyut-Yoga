import { NextRequest, NextResponse } from "next/server";
import { resend } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { name, email, subject, message } = await request.json();

    await resend.emails.send({
      from: "Samyut Yoga Website <noreply@samyutyoga.com>",
      to: "info@samyutyoga.com",
      replyTo: email,
      subject: `Contact Form: ${subject}`,
      text: `From: ${name} <${email}>\n\n${message}`,
      html: `<p><strong>From:</strong> ${name} &lt;${email}&gt;</p><p><strong>Subject:</strong> ${subject}</p><hr/><p>${message.replace(/\n/g, "<br>")}</p>`,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Contact form error:", err);
    return NextResponse.json({ error: "Failed to send message" }, { status: 500 });
  }
}
