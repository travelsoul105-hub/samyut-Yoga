"use client";

import { useState } from "react";
import { CheckCircle, Clock, FileText, Upload } from "lucide-react";

const assignments = [
  { id: 1, title: "Week 1 Reflection: What Brought You to Yoga?", due: "Completed", status: "completed", feedback: "Beautiful reflection. Your honesty about your journey is exactly what makes a great teacher. Keep this authenticity." },
  { id: 2, title: "Week 2: Teaching Observation Journal", due: "Due Friday", status: "pending", feedback: null },
  { id: 3, title: "Week 3: Yoga Sutra Commentary — Choose 3 Sutras", due: "Not yet released", status: "locked", feedback: null },
];

export default function AssignmentsPage() {
  const [activeAssignment, setActiveAssignment] = useState<number | null>(2);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="font-cormorant text-4xl font-semibold text-forest mb-2">Assignments</h1>
      <p className="text-charcoal/55 font-inter text-sm mb-8">Written reflections to deepen your learning</p>

      <div className="space-y-4 mb-8">
        {assignments.map((a) => (
          <div key={a.id} className={`border rounded-sm overflow-hidden ${a.status === "locked" ? "border-charcoal/10 opacity-60" : "border-forest/15 bg-white"}`}>
            <div className="px-5 py-4 flex items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                {a.status === "completed"
                  ? <CheckCircle className="w-5 h-5 text-forest flex-shrink-0" />
                  : a.status === "pending"
                  ? <Clock className="w-5 h-5 text-terracotta flex-shrink-0" />
                  : <FileText className="w-5 h-5 text-charcoal/30 flex-shrink-0" />
                }
                <div>
                  <p className="font-inter text-sm font-medium text-charcoal">{a.title}</p>
                  <p className={`font-inter text-xs mt-0.5 ${a.due.startsWith("Due") ? "text-terracotta" : "text-charcoal/40"}`}>
                    {a.due}
                  </p>
                </div>
              </div>
              {a.status === "pending" && (
                <button onClick={() => setActiveAssignment(a.id)}
                  className="flex-shrink-0 bg-forest text-ivory px-3 py-1.5 text-xs font-inter font-medium rounded hover:bg-forest-light transition-colors">
                  Submit
                </button>
              )}
            </div>

            {a.feedback && (
              <div className="border-t border-forest/10 px-5 py-3 bg-forest/5">
                <p className="text-xs font-inter font-semibold text-forest mb-1">Feedback from Yogacharya:</p>
                <p className="text-charcoal/65 font-inter text-sm italic">{a.feedback}</p>
              </div>
            )}

            {a.id === activeAssignment && a.status === "pending" && (
              <div className="border-t border-forest/10 p-5">
                {submitted ? (
                  <div className="text-center py-4">
                    <CheckCircle className="w-8 h-8 text-forest mx-auto mb-2" />
                    <p className="font-inter text-sm font-medium text-forest">Assignment submitted!</p>
                  </div>
                ) : (
                  <div className="space-y-3">
                    <textarea value={text} onChange={(e) => setText(e.target.value)} rows={6}
                      className="w-full border border-forest/20 rounded px-4 py-3 text-sm font-inter focus:outline-none focus:border-forest resize-none"
                      placeholder="Write your reflection here..." />
                    <div className="flex gap-3">
                      <button
                        className="flex items-center gap-2 border border-forest/20 text-forest px-4 py-2 rounded text-xs font-inter hover:bg-forest/5 transition-colors">
                        <Upload className="w-3.5 h-3.5" /> Attach File
                      </button>
                      <button onClick={() => { if (text.trim()) setSubmitted(true); }}
                        className="bg-terracotta hover:bg-terracotta/90 text-white px-5 py-2 rounded text-xs font-inter font-medium transition-colors">
                        Submit Assignment
                      </button>
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
