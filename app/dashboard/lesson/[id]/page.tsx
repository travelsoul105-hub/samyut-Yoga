import { createClient } from "@/lib/supabase/server";
import { redirect, notFound } from "next/navigation";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import MarkCompleteButton from "./MarkCompleteButton";

function getYouTubeEmbedUrl(url: string): string | null {
  // youtu.be/ID
  const short = url.match(/youtu\.be\/([a-zA-Z0-9_-]{11})/);
  if (short) return `https://www.youtube.com/embed/${short[1]}`;
  // youtube.com/watch?v=ID
  const long = url.match(/[?&]v=([a-zA-Z0-9_-]{11})/);
  if (long) return `https://www.youtube.com/embed/${long[1]}`;
  // already an embed URL
  if (url.includes("youtube.com/embed/")) return url;
  return null;
}

function formatDuration(seconds: number | null) {
  if (!seconds) return null;
  const h = Math.floor(seconds / 3600);
  const m = Math.floor((seconds % 3600) / 60);
  if (h > 0) return `${h}h ${m}m`;
  return `${m} min`;
}

export default async function LessonPage({
  params,
}: {
  params: { id: string };
}) {
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

  const { data: lesson } = await supabase
    .from("lessons")
    .select(
      "id, title, description, notes, youtube_url, duration_seconds, position, module_id, modules(title, course_id)"
    )
    .eq("id", params.id)
    .single();

  if (!lesson) notFound();

  // @ts-expect-error Supabase join typing
  const moduleTitle: string = lesson.modules?.title ?? "";

  // Siblings for prev/next navigation
  const { data: siblings } = await supabase
    .from("lessons")
    .select("id, title, position")
    .eq("module_id", lesson.module_id)
    .eq("is_published", true)
    .order("position");

  const idx = siblings?.findIndex((l) => l.id === lesson.id) ?? -1;
  const prevLesson = idx > 0 ? siblings![idx - 1] : null;
  const nextLesson =
    siblings && idx < siblings.length - 1 ? siblings[idx + 1] : null;

  // Progress
  const { data: prog } = await supabase
    .from("progress")
    .select("completed")
    .eq("student_id", student.id)
    .eq("lesson_id", lesson.id)
    .single();

  const isCompleted = prog?.completed ?? false;
  const embedUrl = lesson.youtube_url
    ? getYouTubeEmbedUrl(lesson.youtube_url)
    : null;

  return (
    <div className="max-w-4xl">
      {/* Breadcrumb */}
      <div className="px-6 lg:px-8 py-4 border-b border-forest/10 bg-white flex items-center gap-2 text-xs font-inter text-charcoal/50">
        <Link
          href="/dashboard/modules"
          className="hover:text-forest transition-colors flex items-center gap-1 flex-shrink-0"
        >
          <ChevronLeft className="w-3 h-3" /> Modules
        </Link>
        <span>/</span>
        <span className="text-charcoal/40 truncate">{moduleTitle}</span>
        <span>/</span>
        <span className="truncate">{lesson.title}</span>
      </div>

      <div className="p-6 lg:p-8">
        {/* Video */}
        <div className="bg-charcoal rounded-sm overflow-hidden aspect-video mb-6">
          {embedUrl ? (
            <iframe
              src={embedUrl}
              className="w-full h-full"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              title={lesson.title}
            />
          ) : (
            <div className="w-full h-full flex flex-col items-center justify-center text-ivory/40 gap-3">
              <svg viewBox="0 0 24 24" fill="currentColor" className="w-12 h-12 opacity-30">
                <path d="M8 5v14l11-7z" />
              </svg>
              <p className="font-inter text-sm">No video linked yet</p>
            </div>
          )}
        </div>

        <h1 className="font-cormorant text-3xl font-semibold text-forest mb-2">
          {lesson.title}
        </h1>
        <p className="text-charcoal/50 font-inter text-sm mb-6">
          {moduleTitle}
          {formatDuration(lesson.duration_seconds) &&
            ` · ${formatDuration(lesson.duration_seconds)}`}
          {" · Yogacharya Aravind Prasad"}
        </p>

        {/* Notes */}
        {(lesson.description || lesson.notes) && (
          <div className="bg-white border border-forest/10 p-6 rounded-sm mb-6">
            <h2 className="font-cormorant text-xl font-semibold text-forest mb-3">
              Lesson Notes
            </h2>
            <div className="text-charcoal/70 font-inter text-sm leading-relaxed space-y-3">
              {lesson.description && <p>{lesson.description}</p>}
              {lesson.notes && <p>{lesson.notes}</p>}
            </div>
          </div>
        )}

        {/* Navigation */}
        <div className="flex items-center justify-between gap-4">
          {prevLesson ? (
            <Link
              href={`/dashboard/lesson/${prevLesson.id}`}
              className="flex items-center gap-2 border border-forest/20 text-forest hover:bg-forest hover:text-ivory px-4 py-2 rounded text-sm font-inter font-medium transition-all"
            >
              <ChevronLeft className="w-4 h-4" /> Previous
            </Link>
          ) : (
            <div />
          )}

          <MarkCompleteButton
            lessonId={lesson.id}
            studentId={student.id}
            isCompleted={isCompleted}
          />

          {nextLesson ? (
            <Link
              href={`/dashboard/lesson/${nextLesson.id}`}
              className="flex items-center gap-2 border border-forest/20 text-forest hover:bg-forest hover:text-ivory px-4 py-2 rounded text-sm font-inter font-medium transition-all"
            >
              Next <ChevronRight className="w-4 h-4" />
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </div>
  );
}
