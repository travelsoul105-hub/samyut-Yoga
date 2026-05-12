import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";

export const metadata: Metadata = {
  title: "Enrollment Under Review â€” Samyut Yoga",
  description: "Your Samyut Yoga enrollment is under review. We will activate your student dashboard within 24 hours.",
  robots: { index: false, follow: false },
};
import { redirect } from "next/navigation";
import Link from "next/link";
import Image from "next/image";

export default async function PendingPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  const { data: student } = await supabase
    .from("students")
    .select("status, first_name")
    .eq("auth_user_id", user.id)
    .single();

  if (student?.status === "active") redirect("/dashboard");

  return (
    <div className="min-h-screen bg-forest flex items-center justify-center px-4 py-12">
      {/* Background lotus */}
      <div className="absolute inset-0 flex items-center justify-center opacity-5 pointer-events-none">
        <svg viewBox="0 0 400 400" className="w-[500px] h-[500px]" fill="none">
          <circle cx="200" cy="200" r="190" stroke="#F7F3EC" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="140" stroke="#F7F3EC" strokeWidth="0.5" />
          <circle cx="200" cy="200" r="90" stroke="#C9A84C" strokeWidth="0.5" />
          {[0, 60, 120, 180, 240, 300].map((a) => (
            <ellipse
              key={a}
              cx="200" cy="200" rx="25" ry="70"
              stroke="#F7F3EC" strokeWidth="0.5" fill="none"
              transform={`rotate(${a} 200 200) translate(0 -70)`}
            />
          ))}
        </svg>
      </div>

      <div className="relative z-10 w-full max-w-md text-center">
        <Link href="/" className="inline-flex items-center gap-3 mb-10 justify-center">
          <Image
            src="/images/logo.png"
            alt="Samyut Yoga" width={52} height={52} className="rounded-full"
          />
          <div className="text-left">
            <p className="font-cormorant text-2xl font-semibold text-ivory">Samyut Yoga</p>
            <p className="text-ivory/40 text-xs font-inter">Student Portal</p>
          </div>
        </Link>

        <div className="bg-white/5 backdrop-blur-sm border border-ivory/10 rounded-sm px-8 py-10">
          <div className="w-16 h-16 rounded-full bg-gold/10 border border-gold/30 flex items-center justify-center mx-auto mb-6">
            <svg className="w-8 h-8 text-gold" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5}
                d="M12 6v6l4 2m6-2a10 10 0 11-20 0 10 10 0 0120 0z" />
            </svg>
          </div>

          <h1 className="font-cormorant text-3xl font-semibold text-ivory mb-3">
            Enrollment Under Review
          </h1>

          {student?.first_name && (
            <p className="text-gold font-inter text-sm mb-4">
              Namaste, {student.first_name}
            </p>
          )}

          <p className="text-ivory/60 font-inter text-sm leading-relaxed mb-6">
            Your enrollment is under review. Our team will verify your application
            and activate your account within <span className="text-ivory/90 font-medium">24 hours</span>.
            You will receive a confirmation email once approved.
          </p>

          <div className="bg-ivory/5 border border-ivory/10 rounded px-4 py-3 mb-8 text-left space-y-1.5">
            <p className="text-ivory/40 font-inter text-xs font-medium uppercase tracking-wider">
              What happens next
            </p>
            {[
              "Our team reviews your application",
              "You receive an approval email",
              "Your dashboard is unlocked",
              "Begin your yoga journey",
            ].map((step, i) => (
              <div key={i} className="flex items-center gap-2.5">
                <span className="w-5 h-5 rounded-full bg-gold/20 text-gold font-inter text-xs flex items-center justify-center flex-shrink-0">
                  {i + 1}
                </span>
                <p className="text-ivory/60 font-inter text-xs">{step}</p>
              </div>
            ))}
          </div>

          <div className="space-y-3">
            <a href="mailto:info@samyutyoga.com"
              className="block w-full border border-gold/40 text-gold hover:bg-gold/10 py-3 rounded font-inter font-medium text-sm transition-colors">
              Contact Us
            </a>
            <form action="/api/auth/logout" method="POST">
              <button type="submit"
                className="w-full text-ivory/40 hover:text-ivory/70 font-inter text-xs transition-colors py-2">
                Sign out
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

