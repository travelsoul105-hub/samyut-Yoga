import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendConfirmationEmail, sendAdminNotification } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const supabase = createClient();

    const { error } = await supabase.from("applications").insert({
      first_name: body.firstName,
      last_name: body.lastName,
      email: body.email,
      date_of_birth: body.dob,
      gender: body.gender,
      state: body.state,
      country: body.country,
      phone: body.phone,
      course: body.course,
      accommodation: body.accommodation,
      course_date: body.date,
      experience: body.experience,
      referral: body.referral,
      food_preferences: body.food,
      injuries: body.injuries,
      questions: body.questions,
      status: "pending",
    });

    if (error) {
      console.error("Supabase error:", error);
    }

    // Send emails (non-blocking)
    await Promise.allSettled([
      sendConfirmationEmail(body.email, body.firstName, body.course === "ashtanga" ? "200hrs Ashtanga Yoga TTC" : "200hrs Hatha Yoga TTC", body.date),
      sendAdminNotification(
        `New TTC Application — ${body.firstName} ${body.lastName}`,
        `New application received:\n\nName: ${body.firstName} ${body.lastName}\nEmail: ${body.email}\nCourse: ${body.course}\nDate: ${body.date}\nCountry: ${body.country}\nPhone: ${body.phone}`
      ),
    ]);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Registration error:", err);
    return NextResponse.json({ error: "Failed to submit application" }, { status: 500 });
  }
}
