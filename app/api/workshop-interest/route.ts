import { NextRequest, NextResponse } from "next/server";
import { createClient } from "@/lib/supabase/server";
import { sendWorkshopInterestEmail } from "@/lib/resend";

export async function POST(request: NextRequest) {
  try {
    const { firstName, email, interest } = await request.json();
    const supabase = createClient();

    const { error } = await supabase.from("workshop_interests").insert({
      first_name: firstName,
      email,
      interest,
    });

    if (error) console.error("Supabase error:", error);

    await sendWorkshopInterestEmail(
      email,
      firstName,
      interest === "all" ? "All Workshops" : interest
    ).catch(console.error);

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Workshop interest error:", err);
    return NextResponse.json({ error: "Failed to save interest" }, { status: 500 });
  }
}
