import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { createAdminClient } from "@/lib/supabase/admin";

export async function POST(request: NextRequest) {
  try {
    const { firstName, lastName, email, phone, password, courseInterest } =
      await request.json();

    const supabase = createClient();

    const { data: authData, error: authError } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: { first_name: firstName, last_name: lastName },
      },
    });

    if (authError) {
      return NextResponse.json({ error: authError.message }, { status: 400 });
    }

    if (!authData.user) {
      return NextResponse.json({ error: "Signup failed" }, { status: 400 });
    }

    // Use admin client to bypass RLS and upsert the full student record.
    // The trigger may have already inserted a basic row; upsert fills in extra fields.
    const admin = createAdminClient();
    const { error: studentError } = await admin.from("students").upsert(
      {
        auth_user_id: authData.user.id,
        first_name: firstName,
        last_name: lastName,
        email,
        phone,
        course_interest: courseInterest,
        status: "pending",
      },
      { onConflict: "auth_user_id" }
    );

    if (studentError) {
      console.error("Student upsert error:", studentError);
    }

    return NextResponse.json({ success: true });
  } catch {
    return NextResponse.json({ error: "Signup failed" }, { status: 500 });
  }
}
