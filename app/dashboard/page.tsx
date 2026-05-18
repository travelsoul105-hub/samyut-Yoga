import Link from "next/link";
import { redirect } from "next/navigation";
import { createClient } from "@/lib/supabase/server";
import { BookOpen, FileText, MessageSquare, ChevronRight, Award, Video } from "lucide-react";

export default async function DashboardPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) redirect("/login");

  // Fetch student profile
  const { data: student } = await supabase
    .from("students")
    .select("first_name, last_name")
    .eq("auth_user_id", user.id)
    .single();

  // Fetch enrolment + course name
  const { data: enrolment } = await supabase
    .from("enrolments")
    .select("id, course_id, courses(title)")
    .eq("student_id", (
      await supabase
        .from("students")
        .select("id")
        .eq("auth_user_id", user.id)
        .single()
    ).data?.id)
    .order("enrolment_date", { ascending: false })
    .limit(1)
    .single();

  // Fetch progress: completed lessons vs total published lessons in enrolled course
  let progressPct = 0;
  let completedCount = 0;
  let totalLessons = 0;

  if (enrolment?.course_id) {
    const { data: studentRow } = await supabase
      .from("students")
      .select("id")
      .eq("auth_user_id", user.id)
      .single();

    if (studentRow) {
      const { count: total } = await supabase
        .from("lessons")
        .select("id", { count: "exact", head: true })
        .eq("is_published", true)
        .in(
          "module_id",
          (
            await supabase
              .from("modules")
              .select("id")
              .eq("course_id", enrolment.course_id)
              .eq("is_published", true)
          ).data?.map((m) => m.id) ?? []
        );

      const { count: done } = await supabase
        .from("progress")
        .select("id", { count: "exact", head: true })
        .eq("student_id", studentRow.id)
        .eq("completed", true);

      totalLessons = total ?? 0;
      completedCount = done ?? 0;
      progressPct = totalLessons > 0 ? Math.round((completedCount / totalLessons) * 100) : 0;
    }
  }

  const circumference = 2 * Math.PI * 40;
  const strokeDashoffset = circumference - (progressPct / 100) * circumference;

  // @ts-expect-error Supabase join typing
  const courseName = enrolment?.courses?.title ?? null;
  const firstName = student?.first_name ?? "Student";
  const remaining = 100 - progressPct;

  const quickLinks = [
    { icon: Video, label: "Continue Learning", href: "/dashboard/modules", color: "bg-forest" },
    { icon: FileText, label: "Assignments", href: "/dashboard/assignments", color: "bg-terracotta" },
    { icon: MessageSquare, label: "Community Forum", href: "/dashboard/forum", color: "bg-gold" },
    { icon: BookOpen, label: "Resources", href: "/dashboard/resources", color: "bg-amber-700" },
  ];

  return (
    <div className="p-6 lg:p-8 max-w-5xl">
      {/* Greeting */}
      <div className="mb-8">
        <h1 className="font-heading text-4xl font-semibold text-forest mb-1">
          Namaste, {firstName} 🙏
        </h1>
        {courseName ? (
          <p className="text-charcoal/55 font-body text-sm">{courseName}</p>
        ) : (
          <p className="text-charcoal/40 font-body text-sm italic">No active enrolment yet</p>
        )}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-8">
        {/* Progress ring */}
        <div className="bg-white border border-forest/10 p-6 rounded-sm flex flex-col items-center justify-center gap-3">
          <div className="relative">
            <svg width="100" height="100" viewBox="0 0 100 100" className="rotate-[-90deg]">
              <circle cx="50" cy="50" r="40" fill="none" stroke="#EDE8DF" strokeWidth="8" />
              <circle
                cx="50" cy="50" r="40" fill="none" stroke="#8B5E3C" strokeWidth="8"
                strokeDasharray={circumference} strokeDashoffset={strokeDashoffset}
                strokeLinecap="round"
                style={{ transition: "stroke-dashoffset 0.5s ease" }}
              />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
              <p className="font-heading text-2xl font-bold text-forest">{progressPct}%</p>
            </div>
          </div>
          <div className="text-center">
            <p className="font-body text-sm font-medium text-charcoal/70">Course Progress</p>
            <p className="font-body text-xs text-charcoal/40 mt-0.5">
              {totalLessons > 0
                ? `${completedCount} of ${totalLessons} lessons complete`
                : "No lessons published yet"}
            </p>
          </div>
        </div>

        {/* Quick links */}
        <div className="lg:col-span-2 grid grid-cols-2 gap-4">
          {quickLinks.map(({ icon: Icon, label, href, color }) => (
            <Link key={label} href={href}
              className="bg-white border border-forest/10 p-5 rounded-sm hover:border-gold/40 hover:shadow-md transition-all group flex items-center gap-4">
              <div className={`w-10 h-10 rounded-sm ${color} flex items-center justify-center flex-shrink-0`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="font-body text-sm font-semibold text-forest">{label}</p>
              </div>
              <ChevronRight className="w-4 h-4 text-forest/30 group-hover:text-gold transition-colors flex-shrink-0" />
            </Link>
          ))}
        </div>
      </div>

      {/* Certificate progress banner — only shown if enrolled */}
      {courseName && (
        <div className="bg-forest text-ivory p-5 rounded-sm flex items-center gap-4">
          <Award className="w-8 h-8 text-gold flex-shrink-0" />
          <div className="flex-1">
            {progressPct === 100 ? (
              <>
                <p className="font-heading text-xl font-semibold">
                  Congratulations — You have completed the course!
                </p>
                <p className="text-ivory/60 font-body text-xs mt-0.5">
                  Your certificate is ready to download.
                </p>
              </>
            ) : (
              <>
                <p className="font-heading text-xl font-semibold">
                  {remaining}% More to Your Certificate
                </p>
                <p className="text-ivory/60 font-body text-xs mt-0.5">
                  Complete all modules, assignments and quizzes to unlock your certificate.
                </p>
              </>
            )}
          </div>
          <Link
            href={progressPct === 100 ? "/dashboard/certificate" : "/dashboard/modules"}
            className="flex-shrink-0 bg-gold hover:bg-gold/90 text-forest px-4 py-2 rounded text-xs font-body font-semibold transition-colors ml-auto"
          >
            {progressPct === 100 ? "Download" : "Continue"}
          </Link>
        </div>
      )}
    </div>
  );
}
