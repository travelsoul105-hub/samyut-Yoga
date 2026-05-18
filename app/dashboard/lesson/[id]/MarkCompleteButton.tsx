"use client";

import { useState } from "react";
import { CheckCircle, Circle } from "lucide-react";

export default function MarkCompleteButton({
  lessonId,
  studentId,
  isCompleted,
}: {
  lessonId: string;
  studentId: string;
  isCompleted: boolean;
}) {
  const [completed, setCompleted] = useState(isCompleted);
  const [loading, setLoading] = useState(false);

  async function toggle() {
    setLoading(true);
    const res = await fetch("/api/progress", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ lessonId, studentId, completed: !completed }),
    });
    if (res.ok) setCompleted(!completed);
    setLoading(false);
  }

  return (
    <button
      onClick={toggle}
      disabled={loading}
      className={`flex items-center gap-2 px-6 py-2.5 rounded text-sm font-body font-medium transition-all disabled:opacity-60 ${
        completed
          ? "bg-forest/10 text-forest border border-forest/20 hover:bg-forest/20"
          : "bg-forest hover:bg-forest/90 text-ivory"
      }`}
    >
      {completed ? (
        <CheckCircle className="w-4 h-4" />
      ) : (
        <Circle className="w-4 h-4" />
      )}
      {completed ? "Completed ✓" : "Mark Complete"}
    </button>
  );
}
