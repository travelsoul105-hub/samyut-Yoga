"use client";

import { useState } from "react";
import Link from "next/link";
import { BookOpen, Wind, Eye, Users, Clock, GraduationCap, Video } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Philosophy & Vedanta Workshops",
    color: "#8B5E3C",
    bg: "from-amber/10 to-gold/5",
    description:
      "Explore the philosophical foundations of Indic wisdom. Dive into Yoga Sutras of Patanjali, Bhagavad Gita, Vedanta, and the interconnections between these three great schools of Indic philosophy.",
    past: "Past programme: Patanjali Yoga-Sutra Mastery Course (10 weeks)",
    topics: [
      "Yoga Sutras of Patanjali — complete commentary",
      "Bhagavad Gita — yoga of wisdom and devotion",
      "Vedantic psychology — Who am I?",
      "Three great schools of Indic philosophy",
      "Practical application of philosophical wisdom",
    ],
  },
  {
    icon: Wind,
    title: "Pranayama & Breathwork Workshops",
    color: "#C9A84C",
    bg: "from-gold/15 to-amber/5",
    description:
      "Decode the science of breath through traditional yogic and tantric techniques. Understand the psychosomatic impact of Pranayama on body, prana and mind.",
    past: "Past programmes: Anatomy of Pranayama (2 days), Overcome Stress & Anxiety workshop",
    topics: [
      "Traditional Pranayama techniques from classical texts",
      "Tantric breathwork methods",
      "Psychosomatic impact on nervous system",
      "Pranic body and energy channels (nadis)",
      "Therapeutic breathwork for stress and anxiety",
    ],
  },
  {
    icon: Eye,
    title: "Meditation & Tantra Workshops",
    color: "#C9A84C",
    bg: "from-gold/10 to-amber/10",
    description:
      "Discover secret meditation techniques from Vijnana Bhairava Tantra and other Tantric traditions. Explore Dharana, Dhyana and the mystical dimensions of consciousness.",
    past: "Past programme: Conscious Awakening 2-day retreat",
    topics: [
      "Vijnana Bhairava Tantra — 112 consciousness techniques",
      "Dharana — concentration practices",
      "Dhyana — meditation methods",
      "Mystical dimensions of yoga consciousness",
      "Tantric approach to awakening",
    ],
  },
];

const howItWorks = [
  { icon: Video, title: "Format", detail: "Online and offline | Small intimate groups" },
  { icon: Clock, title: "Duration", detail: "1-day to multi-week | Weekend and weekday options" },
  { icon: Users, title: "Faculty", detail: "Taught directly by Yogacharya Aravind Prasad" },
  { icon: GraduationCap, title: "Certificate", detail: "Certificate of participation for all completed workshops" },
];

export default function BeyondAsanaContent() {
  const [formData, setFormData] = useState({
    firstName: "",
    email: "",
    interest: "all",
  });
  const [submitted, setSubmitted] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    try {
      await fetch("/api/workshop-interest", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      setSubmitted(true);
    } catch {
      setSubmitted(true);
    }
  }

  return (
    <div className="pt-16">
      {/* Hero */}
      <section
        className="relative py-24 overflow-hidden"
        style={{ background: "linear-gradient(135deg, #FDF5E6 0%, #F5E8CC 50%, #EDD9A3 100%)" }}
      >
        <div className="absolute top-10 right-10 w-40 h-40 border border-gold/20 rounded-full pointer-events-none" />
        <div className="absolute top-20 right-20 w-24 h-24 border border-amber/20 rounded-full pointer-events-none" />
        <div className="absolute bottom-10 left-10 w-32 h-32 border border-gold/20 rounded-full pointer-events-none" />

        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <div className="h-px w-12 bg-amber/40" />
            <span className="text-amber text-xs font-inter tracking-[0.3em] uppercase">Deepen Your Yoga</span>
            <div className="h-px w-12 bg-amber/40" />
          </div>
          <h1 className="heading-xl mb-5" style={{ color: "#5C3D2E" }}>
            Yoga Beyond Asana
          </h1>
          <p className="font-cormorant text-2xl italic mb-6" style={{ color: "#8B5E3C" }}>
            Ancient wisdom for the modern seeker
          </p>
          <p className="font-inter text-base leading-relaxed max-w-2xl mx-auto" style={{ color: "#5C3D2E", opacity: 0.8 }}>
            Explore the deeper dimensions of Yoga through Philosophy, Breathwork and Meditation — the vast universe of yogic wisdom that exists beyond the physical posture.
          </p>
        </div>
      </section>

      {/* Intro strip */}
      <section className="py-10 bg-amber/10 border-y border-amber/20">
        <div className="container-custom text-center">
          <p className="font-cormorant text-xl italic max-w-3xl mx-auto" style={{ color: "#5C3D2E" }}>
            &quot;The asana is the doorway. The Vedanta is the house. The Tantra is the light within.&quot;
          </p>
          <p className="font-inter text-xs mt-2 text-amber">— Yogacharya Aravind Prasad</p>
        </div>
      </section>

      {/* Workshop Categories */}
      <section className="section-padding" style={{ background: "linear-gradient(180deg, #FDF8EF 0%, #F7F3EC 100%)" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-amber/40" />
              <span className="text-amber text-xs font-inter tracking-[0.3em] uppercase">Workshop Categories</span>
              <div className="h-px w-10 bg-amber/40" />
            </div>
            <h2 className="heading-lg mb-3" style={{ color: "#5C3D2E" }}>
              Three Dimensions of Yogic Wisdom
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
            {categories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className={`bg-gradient-to-br ${cat.bg} border border-amber/20 p-7 rounded-sm hover:shadow-lg transition-all duration-300`}
                >
                  <div className="w-12 h-12 rounded-sm border border-amber/30 flex items-center justify-center mb-5" style={{ background: "rgba(201,168,76,0.1)" }}>
                    <Icon className="w-5 h-5" style={{ color: cat.color }} />
                  </div>
                  <h3 className="font-cormorant text-xl font-semibold mb-3" style={{ color: "#5C3D2E" }}>
                    {cat.title}
                  </h3>
                  <p className="font-inter text-sm leading-relaxed mb-4" style={{ color: "#5C3D2E", opacity: 0.75 }}>
                    {cat.description}
                  </p>
                  <ul className="space-y-1.5 mb-4">
                    {cat.topics.map((topic) => (
                      <li key={topic} className="flex items-start gap-2 text-xs font-inter" style={{ color: "#8B5E3C" }}>
                        <span className="mt-0.5 flex-shrink-0">✦</span>
                        {topic}
                      </li>
                    ))}
                  </ul>
                  <p className="text-xs font-inter italic mt-3 pt-3 border-t border-amber/20" style={{ color: "#8B5E3C" }}>
                    {cat.past}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #5C3D2E 0%, #3D2A1E 100%)" }}>
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-ivory mb-3">How It Works</h2>
            <p className="text-ivory/60 font-inter text-sm">Flexible formats designed around your life</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {howItWorks.map(({ icon: Icon, title, detail }) => (
              <div key={title} className="border border-gold/20 p-6 text-center hover:border-gold/50 transition-colors">
                <Icon className="w-6 h-6 text-gold mx-auto mb-4" />
                <h3 className="font-cormorant text-lg font-semibold text-ivory mb-2">{title}</h3>
                <p className="text-ivory/60 font-inter text-xs leading-relaxed">{detail}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Announcement Signup */}
      <section className="section-padding" style={{ background: "linear-gradient(135deg, #FDF5E6 0%, #F5E8CC 100%)" }}>
        <div className="container-custom max-w-xl">
          <div className="text-center mb-8">
            <h2 className="heading-lg mb-3" style={{ color: "#5C3D2E" }}>Be the First to Know</h2>
            <p className="font-inter text-sm" style={{ color: "#8B5E3C" }}>
              New Beyond Asana workshops are announced to our community first. Join the list to be notified.
            </p>
          </div>

          {submitted ? (
            <div className="text-center p-8 border border-amber/30 rounded-sm bg-white/60">
              <div className="text-3xl mb-3">🙏</div>
              <p className="font-cormorant text-xl font-semibold mb-2" style={{ color: "#5C3D2E" }}>Namaste!</p>
              <p className="text-sm font-inter" style={{ color: "#8B5E3C" }}>
                Thank you for joining. We will notify you when new workshops are announced.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-inter font-medium mb-1.5" style={{ color: "#5C3D2E" }}>
                    First Name *
                  </label>
                  <input
                    required
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                    className="w-full border border-amber/30 rounded-sm px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-amber bg-white/70"
                    placeholder="Your first name"
                  />
                </div>
                <div>
                  <label className="block text-xs font-inter font-medium mb-1.5" style={{ color: "#5C3D2E" }}>
                    Email *
                  </label>
                  <input
                    required
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full border border-amber/30 rounded-sm px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-amber bg-white/70"
                    placeholder="your@email.com"
                  />
                </div>
              </div>
              <div>
                <label className="block text-xs font-inter font-medium mb-1.5" style={{ color: "#5C3D2E" }}>
                  Workshop Interest
                </label>
                <select
                  value={formData.interest}
                  onChange={(e) => setFormData({ ...formData, interest: e.target.value })}
                  className="w-full border border-amber/30 rounded-sm px-3 py-2.5 text-sm font-inter focus:outline-none focus:border-amber bg-white/70"
                >
                  <option value="all">All workshops</option>
                  <option value="philosophy">Philosophy & Vedanta</option>
                  <option value="pranayama">Pranayama & Breathwork</option>
                  <option value="meditation">Meditation & Tantra</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full py-3.5 font-inter font-semibold text-sm text-white rounded-sm transition-all duration-200 hover:shadow-lg"
                style={{ background: "linear-gradient(135deg, #C9A84C, #8B5E3C)" }}
              >
                Notify Me of Upcoming Workshops
              </button>
            </form>
          )}
        </div>
      </section>

      {/* CTA to Forum */}
      <section className="py-14 bg-forest text-center">
        <div className="container-custom max-w-xl">
          <p className="text-ivory/60 font-inter text-sm mb-3">Want more than just notifications?</p>
          <h2 className="heading-md text-ivory mb-4">Join the Samyut Yoga Community</h2>
          <p className="text-ivory/60 font-inter text-sm mb-6">
            Connect with students, access resources and get early access to all workshop announcements.
          </p>
          <Link href="/dashboard/forum" className="btn-gold">
            Join Samyut Yoga Forum
          </Link>
        </div>
      </section>
    </div>
  );
}
