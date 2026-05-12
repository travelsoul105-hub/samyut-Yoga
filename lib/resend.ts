import { Resend } from "resend";

export const resend = new Resend(process.env.RESEND_API_KEY ?? "placeholder_key");

export async function sendConfirmationEmail(to: string, firstName: string, course: string, date: string) {
  return resend.emails.send({
    from: "Samyut Yoga <info@samyutyoga.com>",
    to,
    subject: `Application Received — ${course}`,
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto; color: #2C2C2C;">
        <div style="background: #1C0E05; padding: 40px 30px; text-align: center;">
          <h1 style="color: #F7F3EC; font-size: 28px; margin: 0;">Samyut Yoga</h1>
          <p style="color: #C9A84C; margin: 8px 0 0; font-size: 14px;">The Traditional Yoga School in Mysore</p>
        </div>
        <div style="padding: 40px 30px; background: #FAFAFA;">
          <p style="font-size: 20px; color: #1C0E05;">Namaste, ${firstName} 🙏</p>
          <p style="font-size: 15px; line-height: 1.7; color: #555;">
            Thank you for applying to <strong>${course}</strong> at Samyut Yoga, Mysore.<br>
            We have received your application for the <strong>${date}</strong> batch.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #555;">
            Our team will review your application and reach out within 48 hours with next steps, including payment details to secure your seat.
          </p>
          <div style="background: #1C0E05; padding: 20px; margin: 30px 0; text-align: center; border-radius: 4px;">
            <p style="color: #C9A84C; margin: 0; font-size: 14px;">Questions? We are here.</p>
            <p style="color: #F7F3EC; margin: 8px 0 0; font-size: 14px;">
              WhatsApp: +91 81477 62621 | info@samyutyoga.com
            </p>
          </div>
          <p style="font-size: 14px; color: #888; text-align: center;">
            © Samyut Yoga · Mysore, Karnataka, India
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendWorkshopInterestEmail(to: string, firstName: string, interest: string) {
  return resend.emails.send({
    from: "Samyut Yoga <info@samyutyoga.com>",
    to,
    subject: "You're on the Samyut Yoga Beyond Asana List",
    html: `
      <div style="font-family: Georgia, serif; max-width: 600px; margin: 0 auto;">
        <div style="background: #8B5E3C; padding: 40px 30px; text-align: center;">
          <h1 style="color: #F7F3EC; font-size: 28px; margin: 0;">Samyut Yoga</h1>
          <p style="color: #C9A84C; margin: 8px 0 0; font-size: 14px;">Beyond Asana Workshops</p>
        </div>
        <div style="padding: 40px 30px; background: #FAFAFA;">
          <p style="font-size: 20px; color: #5C3D2E;">Namaste, ${firstName} 🙏</p>
          <p style="font-size: 15px; line-height: 1.7; color: #555;">
            You have been added to our <strong>${interest}</strong> workshop notifications list.
          </p>
          <p style="font-size: 15px; line-height: 1.7; color: #555;">
            You will be among the first to know when new Beyond Asana workshops are announced — before they are made public.
          </p>
          <p style="font-size: 14px; color: #888; text-align: center; margin-top: 30px;">
            © Samyut Yoga · Mysore, India
          </p>
        </div>
      </div>
    `,
  });
}

export async function sendAdminNotification(subject: string, body: string) {
  return resend.emails.send({
    from: "Samyut Yoga System <noreply@samyutyoga.com>",
    to: "info@samyutyoga.com",
    subject,
    text: body,
  });
}
