"use client";

import { useState } from "react";
import { CheckCircle, XCircle, Lock, HelpCircle } from "lucide-react";

const quizzes = [
  {
    id: 1,
    title: "Module 1 Quiz: Foundations of Ashtanga",
    status: "available",
    score: null,
    questions: [
      {
        q: "What does Tristhana mean in Ashtanga Yoga?",
        options: ["Three positions", "Three places of attention", "Three sacred texts", "Three levels of practice"],
        correct: 1,
      },
      {
        q: "Which of these is NOT one of the three Bandhas in Ashtanga?",
        options: ["Mula Bandha", "Uddiyana Bandha", "Jalandhara Bandha", "Shambhavi Bandha"],
        correct: 3,
      },
      {
        q: "In the Primary Series (Yoga Chikitsa), 'Chikitsa' means:",
        options: ["Strength", "Therapy / healing", "Primary", "Series"],
        correct: 1,
      },
    ],
  },
  {
    id: 2,
    title: "Module 2 Quiz: Yoga Philosophy",
    status: "locked",
    score: null,
    questions: [],
  },
  {
    id: 3,
    title: "Anatomy Quiz: Musculo-Skeletal System",
    status: "completed",
    score: 85,
    questions: [],
  },
];

export default function QuizzesPage() {
  const [activeQuiz, setActiveQuiz] = useState<number | null>(null);
  const [answers, setAnswers] = useState<number[]>([]);
  const [submitted, setSubmitted] = useState(false);

  const quiz = quizzes.find((q) => q.id === activeQuiz);

  function handleAnswer(qIndex: number, aIndex: number) {
    const updated = [...answers];
    updated[qIndex] = aIndex;
    setAnswers(updated);
  }

  function calcScore() {
    if (!quiz) return 0;
    const correct = quiz.questions.filter((q, i) => answers[i] === q.correct).length;
    return Math.round((correct / quiz.questions.length) * 100);
  }

  if (activeQuiz && quiz && !submitted) {
    return (
      <div className="p-6 lg:p-8 max-w-2xl">
        <button onClick={() => setActiveQuiz(null)} className="text-forest text-sm font-body mb-5 hover:underline">← Back to Quizzes</button>
        <h1 className="font-heading text-3xl font-semibold text-forest mb-6">{quiz.title}</h1>
        <div className="space-y-6">
          {quiz.questions.map((item, qi) => (
            <div key={qi} className="bg-white border border-forest/10 p-5 rounded-sm">
              <p className="font-body text-sm font-medium text-charcoal mb-3">{qi + 1}. {item.q}</p>
              <div className="space-y-2">
                {item.options.map((opt, oi) => (
                  <button key={oi} onClick={() => handleAnswer(qi, oi)}
                    className={`w-full text-left px-4 py-2.5 border rounded text-sm font-body transition-colors ${
                      answers[qi] === oi ? "border-forest bg-forest/10 text-forest font-medium" : "border-charcoal/10 hover:border-forest/30 text-charcoal/70"
                    }`}>
                    {opt}
                  </button>
                ))}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={() => setSubmitted(true)}
          disabled={answers.length < quiz.questions.length}
          className="mt-6 w-full bg-forest text-ivory py-3.5 rounded font-body font-medium text-sm transition-all disabled:opacity-50">
          Submit Quiz
        </button>
      </div>
    );
  }

  if (activeQuiz && quiz && submitted) {
    const score = calcScore();
    return (
      <div className="p-6 lg:p-8 max-w-2xl text-center">
        <div className={`text-6xl mb-4 ${score >= 70 ? "text-forest" : "text-terracotta"}`}>
          {score >= 70 ? "🎉" : "📚"}
        </div>
        <h2 className="font-heading text-4xl font-semibold text-forest mb-2">
          {score}% Score
        </h2>
        <p className="font-body text-sm text-charcoal/60 mb-6">
          {score >= 70 ? "Well done! You passed this quiz." : "Keep studying and retake after 24 hours."}
        </p>
        <div className="space-y-3 text-left mb-6">
          {quiz.questions.map((item, qi) => (
            <div key={qi} className={`p-4 border rounded-sm ${answers[qi] === item.correct ? "border-forest/20 bg-forest/5" : "border-red-200 bg-red-50"}`}>
              <p className="text-sm font-body text-charcoal/80 mb-1">{item.q}</p>
              <div className="flex items-center gap-2">
                {answers[qi] === item.correct
                  ? <CheckCircle className="w-4 h-4 text-forest" />
                  : <XCircle className="w-4 h-4 text-red-500" />
                }
                <span className="text-xs font-body text-charcoal/60">
                  Correct: {item.options[item.correct]}
                </span>
              </div>
            </div>
          ))}
        </div>
        <button onClick={() => { setActiveQuiz(null); setSubmitted(false); setAnswers([]); }}
          className="btn-primary">Back to Quizzes</button>
      </div>
    );
  }

  return (
    <div className="p-6 lg:p-8 max-w-3xl">
      <h1 className="font-heading text-4xl font-semibold text-forest mb-2">Quizzes</h1>
      <p className="text-charcoal/55 font-body text-sm mb-8">Test your knowledge · Retake available after 24h</p>
      <div className="space-y-4">
        {quizzes.map((q) => (
          <div key={q.id} className="bg-white border border-forest/10 p-5 rounded-sm flex items-center justify-between gap-4">
            <div className="flex items-center gap-4">
              {q.status === "completed"
                ? <CheckCircle className="w-6 h-6 text-forest flex-shrink-0" />
                : q.status === "locked"
                ? <Lock className="w-6 h-6 text-charcoal/30 flex-shrink-0" />
                : <HelpCircle className="w-6 h-6 text-gold flex-shrink-0" />
              }
              <div>
                <p className="font-body text-sm font-medium text-charcoal">{q.title}</p>
                {q.score && <p className="font-body text-xs text-forest mt-0.5">Score: {q.score}%</p>}
              </div>
            </div>
            {q.status === "available" && (
              <button onClick={() => { setActiveQuiz(q.id); setAnswers([]); setSubmitted(false); }}
                className="bg-forest text-ivory px-4 py-2 rounded text-xs font-body font-medium hover:bg-forest-light transition-colors flex-shrink-0">
                Start Quiz
              </button>
            )}
            {q.status === "completed" && (
              <button className="border border-forest/20 text-forest px-4 py-2 rounded text-xs font-body hover:bg-forest/5 transition-colors flex-shrink-0">
                Review
              </button>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
