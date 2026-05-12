import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Patanjali Yoga Sutra Mastery Course — Online with Yogacharya Aravind Prasad",
  description:
    "Complete video study of the 196 Yoga Sutras of Patanjali. 6 in-depth sessions covering all 4 chapters — Samadhi, Sadhana, Vibhuti and Kaivalya Padas. Online, self-paced. Certificate included. By Yogacharya Aravind Prasad.",
  keywords: [
    "yoga sutras of patanjali course online",
    "patanjali yoga sutra study",
    "yoga philosophy course",
    "yoga sutras all 196",
    "yogacharya aravind prasad",
  ],
  alternates: { canonical: "/courses/patanjali-yoga-sutra" },
  openGraph: {
    title: "Patanjali Yoga Sutra Mastery Course | Samyut Yoga",
    description:
      "Complete study of the 196 Yoga Sutras. 6 video lessons, all 4 chapters, online self-paced, certificate included.",
    url: "https://samyutyoga.com/courses/patanjali-yoga-sutra",
  },
};
import Image from "next/image";
import { BookOpen, Video, Globe, Award, CheckCircle, Play } from "lucide-react";

const lessons = [
  { position: 1, title: "Introduction to Patanjali Yoga Sutra", youtubeId: "PbE4_OU8_00" },
  { position: 2, title: "Samadhi Pada — The Nature of the Mind", youtubeId: "3tt3E_H6aP4" },
  { position: 3, title: "Sadhana Pada — The Path of Practice", youtubeId: "zSLbBTNnK2k" },
  { position: 4, title: "Vibhuti Pada — Powers & Achievements", youtubeId: "6IN5vHp99p8" },
  { position: 5, title: "Kaivalya Pada — Liberation & Freedom", youtubeId: "4GwzhpHTg5c" },
  { position: 6, title: "Integration — Living the Sutras", youtubeId: "67QRlDi3Cyw" },
];

const highlights = [
  "6 in-depth video sessions by Yogacharya Aravind Prasad",
  "Complete commentary on all 4 chapters of the Yoga Sutras",
  "Study of all 196 sutras in Sanskrit with meaning",
  "Practical application for modern yoga practitioners",
  "Lifetime access to all recordings",
  "Certificate of completion",
];

export default function PatanjaliCoursePage() {
  return (
    <main className="bg-ivory min-h-screen">
      {/* Hero */}
      <section className="bg-forest pt-32 pb-20 px-4 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5 pointer-events-none flex items-center justify-center">
          <svg viewBox="0 0 600 600" className="w-[600px] h-[600px]" fill="none">
            <circle cx="300" cy="300" r="280" stroke="#F7F3EC" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="200" stroke="#C9A84C" strokeWidth="0.5" />
            <circle cx="300" cy="300" r="120" stroke="#F7F3EC" strokeWidth="0.5" />
          </svg>
        </div>
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <span className="inline-block bg-gold/20 text-gold font-inter text-xs font-semibold px-3 py-1 rounded-full mb-5 tracking-wider uppercase">
            Online Course
          </span>
          <h1 className="font-cormorant text-5xl md:text-6xl font-semibold text-ivory mb-5 leading-tight">
            Patanjali Yoga Sutra
          </h1>
          <p className="text-ivory/65 font-inter text-lg mb-8 max-w-2xl mx-auto leading-relaxed">
            A complete video study of the 196 Yoga Sutras — the ancient scripture that defines the
            philosophy, practice and goal of yoga — taught by Yogacharya Aravind Prasad.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-6 text-ivory/50 font-inter text-sm mb-10">
            <span className="flex items-center gap-2"><Video className="w-4 h-4 text-gold" /> 6 Video Lessons</span>
            <span className="flex items-center gap-2"><Globe className="w-4 h-4 text-gold" /> Online · Self-paced</span>
            <span className="flex items-center gap-2"><BookOpen className="w-4 h-4 text-gold" /> All Levels</span>
            <span className="flex items-center gap-2"><Award className="w-4 h-4 text-gold" /> Certificate Included</span>
          </div>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded font-inter font-semibold text-sm transition-all duration-200"
            >
              Enroll Now — Access Course
            </Link>
            <a
              href={`https://www.youtube.com/watch?v=PbE4_OU8_00`}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 border border-ivory/30 text-ivory/80 hover:text-ivory hover:border-ivory/60 px-8 py-4 rounded font-inter font-semibold text-sm transition-all duration-200"
            >
              <Play className="w-4 h-4" /> Watch Preview
            </a>
          </div>
        </div>
      </section>

      {/* Instructor */}
      <section className="py-16 px-4 border-b border-forest/10">
        <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center gap-8">
          <Image
            src="https://samyutyoga.com/storage/2024/07/SVAYAMLOGOPNG-1024x1024.png"
            alt="Yogacharya Aravind Prasad"
            width={96}
            height={96}
            className="rounded-full flex-shrink-0"
          />
          <div>
            <p className="text-charcoal/40 font-inter text-xs uppercase tracking-wider mb-1">Your Instructor</p>
            <h2 className="font-cormorant text-2xl font-semibold text-forest mb-2">
              Yogacharya Aravind Prasad
            </h2>
            <p className="text-charcoal/60 font-inter text-sm leading-relaxed">
              E-RYT 500 · YACEP · 15+ years of teaching experience · Founder, Samyut Yoga Mysore.
              Aravind has dedicated over a decade to the study and teaching of classical yoga philosophy,
              with a deep focus on the Yoga Sutras of Patanjali as the foundation of authentic yoga practice.
            </p>
          </div>
        </div>
      </section>

      {/* What you will learn */}
      <section className="py-16 px-4 border-b border-forest/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-3xl font-semibold text-forest mb-8 text-center">
            What You Will Learn
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {highlights.map((item) => (
              <div key={item} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-forest flex-shrink-0 mt-0.5" />
                <p className="font-inter text-sm text-charcoal/70">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Course curriculum */}
      <section className="py-16 px-4 border-b border-forest/10">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-cormorant text-3xl font-semibold text-forest mb-2 text-center">
            Course Curriculum
          </h2>
          <p className="text-charcoal/50 font-inter text-sm text-center mb-10">
            6 lessons · Patanjali Yoga Sutra
          </p>

          <div className="space-y-3">
            {lessons.map((lesson) => (
              <div
                key={lesson.position}
                className="bg-white border border-forest/10 rounded-sm px-5 py-4 flex items-center gap-4 hover:border-gold/30 transition-colors group"
              >
                <div className="w-8 h-8 rounded-full bg-forest/5 flex items-center justify-center flex-shrink-0 group-hover:bg-gold/10 transition-colors">
                  <Play className="w-3.5 h-3.5 text-forest/40 group-hover:text-gold transition-colors" />
                </div>
                <div className="flex-1">
                  <p className="font-inter text-sm font-medium text-charcoal/80">
                    <span className="text-charcoal/35 mr-2">Lesson {lesson.position}</span>
                    {lesson.title}
                  </p>
                </div>
                <span className="text-xs font-inter text-charcoal/30 flex-shrink-0">Video</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-4 bg-forest">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-cormorant text-4xl font-semibold text-ivory mb-4">
            Begin Your Study of the Yoga Sutras
          </h2>
          <p className="text-ivory/55 font-inter text-sm mb-8 leading-relaxed">
            Enroll today and gain lifetime access to all 6 video sessions, lesson notes,
            and a certificate of completion from Samyut Yoga, Mysore.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/login"
              className="bg-terracotta hover:bg-terracotta/90 text-white px-8 py-4 rounded font-inter font-semibold text-sm transition-all duration-200"
            >
              Enroll Now
            </Link>
            <a
              href="https://wa.me/918073239301"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-ivory/30 text-ivory/80 hover:text-ivory hover:border-ivory/60 px-8 py-4 rounded font-inter font-semibold text-sm transition-all duration-200"
            >
              Ask on WhatsApp
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
