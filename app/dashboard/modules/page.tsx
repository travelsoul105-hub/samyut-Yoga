import { createClient } from "@/lib/supabase/server";
import { redirect } from "next/navigation";
import Link from "next/link";
import { Play, CheckCircle, ChevronRight } from "lucide-react";

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m} min`;
}

export default async function ModulesPage() {
  const supabase = createClient();
  const {
    data: { user },
  } = await supabase.auth.getUser();
  if (!user) redirect("/login");

  const { data: student } = await supabase
    .from("students")
    .select("id")
    .eq("auth_user_id", user.id)
    .single();

  if (!student) redirect("/login");

  const { data: enrolments } = await supabase
    .from("enrolments")
    .select("course_id")
    .eq("student_id", student.id)
    .order("enrolment_date", { ascending: false })
    .limit(1);

  const enrolment = enrolments?.[0] ?? null;

  const { data: courseRow } = enrolment?.course_id
    ? await supabase
        .from("courses")
        .select("title")
        .eq("id", enrolment.course_id)
        .single()
    : { data: null };

  if (!enrolment) {
    return (
      <div className="p-6 lg:p-8">
        <h1 className="font-heading text-4xl font-semibold text-forest mb-4">Course Modules</h1>
        <p className="text-charcoal/50 font-body text-sm">
          You are not enrolled in any course yet. Please contact{" "}
          <a href="mailto:info@samyutyoga.com" className="text-forest underline">
            info@samyutyoga.com
          </a>
          .
        </p>
      </div>
    );
  }

  const { data: modules } = await supabase
    .from("modules")
    .select("id, title, description, position")
    .eq("course_id", enrolment.course_id)
    .eq("is_published", true)
    .order("position");

  const moduleIds = (modules ?? []).map((m) => m.id);

  const { data: lessons } = moduleIds.length
    ? await supabase
        .from("lessons")
        .select("id, module_id, title, duration_seconds, position")
        .in("module_id", moduleIds)
        .eq("is_published", true)
        .order("position")
    : { data: [] };

  const { data: progressRows } = await supabase
    .from("progress")
    .select("lesson_id, completed")
    .eq("student_id", student.id);

  const completedSet = new Set(
    (progressRows ?? []).filter((p) => p.completed).map((p) => p.lesson_id)
  );

  type Lesson = NonNullable<typeof lessons>[number];

  const lessonsByModule = (lessons ?? []).reduce<Record<string, Lesson[]>>(
    (acc, lesson) => {
      if (!lesson) return acc;
      if (!acc[lesson.module_id]) acc[lesson.module_id] = [];
      acc[lesson.module_id]!.push(lesson);
      return acc;
    },
    {}
  );

  const courseTitle = courseRow?.title ?? "Your Course";
  const totalLessons = lessons?.length ?? 0;
  const completedCount = (lessons ?? []).filter((l) => l && completedSet.has(l.id)).length;

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-semibold text-forest mb-2">
        Course Modules
      </h1>
      <p className="text-charcoal/55 font-body text-sm mb-8">
        {courseTitle} · {modules?.length ?? 0} modules · {totalLessons} lessons ·{" "}
        {completedCount} completed
      </p>

      {(!modules || modules.length === 0) && (
        <p className="text-charcoal/40 font-body text-sm italic">
          No modules have been published yet. Check back soon.
        </p>
      )}

      <div className="space-y-5">
        {(modules ?? []).map((mod) => {
          const modLessons = lessonsByModule[mod.id] ?? [];
          const modCompleted = modLessons.filter((l) => l && completedSet.has(l.id)).length;

          return (
            <div
              key={mod.id}
              className="border border-forest/15 bg-white rounded-sm overflow-hidden"
            >
              <div className="px-5 py-4">
                <h2 className="font-heading text-lg font-semibold text-forest">
                  {mod.title}
                </h2>
                {mod.description && (
                  <p className="font-body text-xs text-charcoal/50 mt-0.5">
                    {mod.description}
                  </p>
                )}
                <p className="font-body text-xs text-charcoal/40 mt-1">
                  {modCompleted}/{modLessons.length} lessons completed
                </p>
              </div>

              {modLessons.length > 0 ? (
                <div className="border-t border-forest/10">
                  {modLessons.map((lesson) => {
                    if (!lesson) return null;
                    const done = completedSet.has(lesson.id);
                    return (
                      <Link
                        key={lesson.id}
                        href={`/dashboard/lesson/${lesson.id}`}
                        className="flex items-center gap-4 px-5 py-3.5 hover:bg-forest/5 transition-colors border-b border-forest/5 last:border-0 group"
                      >
                        <div className="flex-shrink-0">
                          {done ? (
                            <CheckCircle className="w-5 h-5 text-forest" />
                          ) : (
                            <div className="w-5 h-5 rounded-full border-2 border-forest/30 flex items-center justify-center">
                              <Play className="w-2.5 h-2.5 text-forest/40" />
                            </div>
                          )}
                        </div>
                        <div className="flex-1 min-w-0">
                          <p
                            className={`font-body text-sm transition-colors ${
                              done
                                ? "text-charcoal/40 line-through"
                                : "text-charcoal/80 group-hover:text-forest"
                            }`}
                          >
                            {lesson.title}
                          </p>
                          {lesson.duration_seconds && (
                            <p className="font-body text-xs text-charcoal/35">
                              {formatDuration(lesson.duration_seconds)}
                            </p>
                          )}
                        </div>
                        <ChevronRight className="w-4 h-4 text-forest/20 group-hover:text-gold transition-colors flex-shrink-0" />
                      </Link>
                    );
                  })}
                </div>
              ) : (
                <div className="border-t border-forest/10 px-5 py-4">
                  <p className="text-charcoal/35 font-body text-sm italic">
                    No lessons published yet
                  </p>
                </div>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}
