import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, ArrowLeft } from "lucide-react";

export async function generateMetadata(): Promise<Metadata> {
  return {
    title: `Blog | Samyut Yoga`,
    description: "Insights on yoga philosophy, pranayama, meditation and the traditional yogic path from Samyut Yoga, Mysore.",
  };
}

// Placeholder — replace with Sanity fetch when connected
const placeholderPost = {
  title: "The Science of Pranayama: Ancient Breath, Modern Research",
  date: "April 15, 2026",
  readTime: "8 min read",
  category: "Pranayama",
  image: "/images/aravind-prasad-virabhadrasana-warrior-pose-mysore.jpg",
  content: `
Pranayama — the ancient science of breath control — has been a cornerstone of yogic practice for thousands of years. The Hatha Yoga Pradipika, compiled in the 15th century, devotes an entire chapter to these techniques, describing them as the royal road to controlling the mind.

## What the Ancient Texts Say

The Yoga Sutras of Patanjali describe Pranayama as the fourth limb of Ashtanga Yoga — coming after asana and before pratyahara (withdrawal of senses). Patanjali writes: *"Tasmin sati shvasa-prashvasayor gati-vichchhedah pranayamah"* — Pranayama is the cessation of the movement of inhalation and exhalation.

## Modern Research Confirms Ancient Wisdom

Contemporary neuroscience has validated what yogis have known for millennia. Research shows that controlled breathing directly stimulates the vagus nerve — the primary nerve of the parasympathetic nervous system — activating the body's rest-and-digest response.

Studies at institutions including Stanford University have demonstrated that different breathing patterns produce measurable changes in brain activity, emotional regulation and cognitive performance.

## The Three Components of Pranayama

Traditional Pranayama is not simply deep breathing. It involves the careful regulation of three phases:

**Puraka (Inhalation)** — The conscious drawing in of prana through the nostrils, directing vital energy into the pranic body.

**Kumbhaka (Retention)** — The holding of the breath, during which prana is distributed throughout the nadis (energy channels). This is the most transformative phase.

**Rechaka (Exhalation)** — The release of spent energy, clearing the system and creating space for the next cycle.

## Practical Implications for Modern Practitioners

For yoga practitioners and teachers, understanding Pranayama as both a physical science and a mystical technology changes how we approach the practice. It is not a warm-up or cool-down tool — it is a complete practice in itself.

At Samyut Yoga, Pranayama forms a central pillar of our 200hr TTC curriculum. Students learn not just the techniques but the philosophy behind each method, grounded in traditional texts and transmitted through direct experiential learning.

*This article is based on teachings from Yogacharya Aravind Prasad's Pranayama curriculum at Samyut Yoga.*
  `.trim(),
};

export default function BlogPostPage() {
  return (
    <div className="pt-16">
      {/* Hero image */}
      <div className="relative h-72 sm:h-96">
        <Image
          src={placeholderPost.image}
          alt={placeholderPost.title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-forest/30 to-forest/70" />
        <div className="absolute inset-0 flex items-end">
          <div className="container-custom pb-10">
            <span className="bg-forest text-gold text-xs px-3 py-1.5 font-inter mb-4 inline-block">
              {placeholderPost.category}
            </span>
            <h1 className="font-cormorant text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory max-w-3xl leading-tight">
              {placeholderPost.title}
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-ivory section-padding">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            {/* Meta */}
            <div className="flex flex-wrap items-center gap-4 text-charcoal/50 text-sm font-inter mb-8 pb-6 border-b border-charcoal/10">
              <Link href="/blog" className="flex items-center gap-1.5 text-forest hover:text-gold transition-colors">
                <ArrowLeft className="w-4 h-4" /> Back to Blog
              </Link>
              <span className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5" /> {placeholderPost.date}
              </span>
              <span className="flex items-center gap-1.5">
                <Clock className="w-3.5 h-3.5" /> {placeholderPost.readTime}
              </span>
              <span className="text-xs">By Yogacharya Aravind Prasad</span>
            </div>

            {/* Content */}
            <div className="prose prose-lg max-w-none">
              {placeholderPost.content.split("\n\n").map((para, i) => {
                if (para.startsWith("## ")) {
                  return (
                    <h2 key={i} className="font-cormorant text-2xl font-semibold text-forest mt-8 mb-3">
                      {para.replace("## ", "")}
                    </h2>
                  );
                }
                if (para.startsWith("**") && para.endsWith("**")) {
                  return (
                    <h3 key={i} className="font-inter text-base font-semibold text-forest mt-5 mb-2">
                      {para.replace(/\*\*/g, "")}
                    </h3>
                  );
                }
                if (para.startsWith("*") && para.endsWith("*")) {
                  return (
                    <p key={i} className="font-inter text-sm italic text-charcoal/60 mt-4">
                      {para.replace(/\*/g, "")}
                    </p>
                  );
                }
                return (
                  <p key={i} className="font-inter text-[15px] text-charcoal/75 leading-relaxed mb-4"
                    dangerouslySetInnerHTML={{ __html: para.replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") }}
                  />
                );
              })}
            </div>

            {/* Author card */}
            <div className="mt-12 pt-8 border-t border-charcoal/10 flex items-start gap-5">
              <div className="w-14 h-14 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                <span className="font-cormorant text-xl font-bold text-gold">A</span>
              </div>
              <div>
                <p className="font-cormorant text-xl font-semibold text-forest">Yogacharya Aravind Prasad</p>
                <p className="text-charcoal/55 font-inter text-xs mt-1">E-RYT 500 · YACEP · Founder, Samyut Yoga</p>
                <p className="text-charcoal/65 font-inter text-sm mt-2 leading-relaxed">
                  Gurukulam-trained in Yoga, Veda and Vedanta with 15+ years of teaching experience. Founder of Samyut Yoga, Mysore.
                </p>
              </div>
            </div>

            {/* CTA */}
            <div className="mt-10 bg-forest p-6 rounded-sm text-center">
              <p className="font-cormorant text-xl text-ivory mb-2">Learn Pranayama Directly</p>
              <p className="text-ivory/60 font-inter text-sm mb-4">
                Pranayama is a core part of our 200hr Yoga Teacher Training curriculum in Mysore.
              </p>
              <Link href="/teacher-training" className="btn-gold text-sm">
                Explore Teacher Training
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
