"use client";

import { useState } from "react";
import Link from "next/link";
import {
  ChevronDown, Check, Plane, Home, Utensils, BookOpen, Award, Users,
  Heart, Shield, Star, Leaf, Zap, Brain, Sparkles, GraduationCap, Percent, MessageCircle,
} from "lucide-react";

const batches = [
  { date: "June 1–21, 2026", seats: 0, status: "closed" },
  { date: "August 1–21, 2026", seats: 8, status: "urgent" },
  { date: "October 1–21, 2026", seats: 10, status: "open" },
  { date: "December 1–21, 2026", seats: 10, status: "open" },
];

const gains = [
  { icon: BookOpen, title: "Traditional Knowledge" },
  { icon: Shield, title: "Authentic Lineage" },
  { icon: Star, title: "Yogic Techniques" },
  { icon: Sparkles, title: "Tantric Techniques" },
  { icon: Leaf, title: "Physical Detoxification" },
  { icon: Zap, title: "Vital Stability" },
  { icon: Brain, title: "Mental Clarity" },
  { icon: Heart, title: "Spiritual Transformation" },
  { icon: Award, title: "Certification" },
  { icon: Users, title: "Lifetime SYF Membership" },
  { icon: Percent, title: "Discounts" },
  { icon: MessageCircle, title: "Personal Mentoring" },
];

const included = [
  { icon: Plane, label: "Transportation" },
  { icon: Home, label: "Accommodation" },
  { icon: Utensils, label: "All Meals & Drinks" },
  { icon: Star, label: "Yoga T-Shirt" },
  { icon: Leaf, label: "Neti Pot" },
  { icon: BookOpen, label: "Course Manual" },
  { icon: Heart, label: "Notebook & Pen" },
  { icon: Users, label: "All Yoga Sessions" },
  { icon: Shield, label: "Lifetime SYF Membership" },
  { icon: Award, label: "Yoga Alliance Certificate" },
];

const timetable = [
  { time: "05:30 AM", activity: "Morning Routines", detail: "Wake up, Jala Neti, morning sadhana begins" },
  { time: "06:00–08:00", activity: "Asana / Pranayama / Meditation", detail: "Ashtanga Primary Series led class" },
  { time: "08:00–09:00", activity: "Break & Breakfast", detail: "Yogic breakfast with herbal drinks" },
  { time: "09:00–10:30", activity: "Philosophy / Ethics / History", detail: "" },
  { time: "10:30–10:45", activity: "Break", detail: "" },
  { time: "10:45–12:15", activity: "Teaching Methodology", detail: "Alignments, adjustments, Sanskrit counts" },
  { time: "12:15–01:00", activity: "Practicum", detail: "Teach co-participants" },
  { time: "01:00–03:00", activity: "Lunch Break", detail: "Experience the tastes of Yogic India" },
  { time: "03:00–03:30", activity: "Professional Development", detail: "" },
  { time: "03:30–05:30", activity: "Asana / Pranayama", detail: "Hatha & Vinyasa flow, theme-based" },
  { time: "05:30–06:00", activity: "Snack Break", detail: "Healthy Indian snacks and herbal drinks" },
  { time: "06:00–07:30", activity: "Anatomy & Yoga Philosophy", detail: "" },
  { time: "07:30–08:00", activity: "Kirtans & Closings", detail: "" },
  { time: "08:00–09:00", activity: "Dinner", detail: "Socialise with co-participants" },
  { time: "09:00–09:30", activity: "Rest / Self Study", detail: "" },
  { time: "09:30 PM", activity: "Sleep", detail: "" },
];

const curriculum = [
  {
    title: "Authentic Tristhana Yoga Practice",
    items: [
      "Primary Series (Yoga Chikitsa) — complete traditional sequence",
      "Traditional Sanskrit count method",
      "Drishti (gazing points) for each posture",
      "Bandha (energy locks) — Mula, Uddiyana, Jalandhara",
      "Mysore style self-practice guidance",
      "Shat Kriyas — yogic cleansing practices",
      "Mudras — hand and body gestures",
      "Pranayama — traditional breathwork methods",
      "Dhyana — meditation practices",
    ],
  },
  {
    title: "Science of Yoga Anatomy & Teaching Methodology",
    items: [
      "Musculo-skeletal system in the context of asana",
      "Pranic body and energetic anatomy",
      "Hands-on adjustments and assists — safe methodology",
      "Structural alignment principles",
      "Vinyasa count and sequencing logic",
      "Teaching skills — cueing, demonstration, observation",
      "Class management and student care",
      "Injury prevention and contraindications",
    ],
  },
  {
    title: "Captivating Yoga Philosophy",
    items: [
      "Yoga Sutras of Patanjali — complete study",
      "Hatha Yoga Pradipika — traditional text",
      "Gheranda Samhita — classical Hatha text",
      "Vijnana Bhairava Tantra — 112 meditation techniques",
      "Bhagavad Gita — yoga of action and wisdom",
      "Lineage wisdom — Yoga Korunta to Krishnamacharya to Pattabhi Jois",
      "Ethics (Yama & Niyama) in daily life",
      "Vedanta philosophy for yoga teachers",
    ],
  },
];

type Currency = "INR" | "EUR";
type Tier = "early" | "regular";

const pricing = {
  INR: {
    early: [
      { room: "Triple Sharing", application: 25000, course: 40000, total: 65000 },
      { room: "Twin Sharing", application: 25000, course: 50000, total: 75000 },
      { room: "Private Room", application: 25000, course: 60000, total: 85000 },
    ],
    regular: [
      { room: "Triple Sharing", application: 25000, course: 54900, total: 79900 },
      { room: "Twin Sharing", application: 25000, course: 64900, total: 89900 },
      { room: "Private Room", application: 25000, course: 74900, total: 99900 },
    ],
  },
  EUR: {
    early: [
      { room: "Triple Sharing", application: 349, course: 550, total: 899 },
      { room: "Twin Sharing", application: 349, course: 750, total: 1099 },
      { room: "Private Room", application: 349, course: 950, total: 1299 },
    ],
    regular: [
      { room: "Triple Sharing", application: 349, course: 750, total: 1099 },
      { room: "Twin Sharing", application: 349, course: 950, total: 1299 },
      { room: "Private Room", application: 349, course: 1150, total: 1499 },
    ],
  },
};

function fmt(n: number, currency: Currency) {
  if (currency === "INR") return `₹${n.toLocaleString("en-IN")}`;
  return `€${n.toLocaleString()}`;
}

export default function AshtangaContent() {
  const [openSection, setOpenSection] = useState<number | null>(0);
  const [currency, setCurrency] = useState<Currency>("EUR");
  const [tier, setTier] = useState<Tier>("early");

  return (
    <div className="pt-16">
      <section className="relative bg-forest py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        <div className="container-custom relative z-10">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold/50" />
              <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Yoga Alliance RYT-200</span>
            </div>
            <h1 className="heading-xl text-ivory mb-4">200hrs Ashtanga Yoga Teacher Training</h1>
            <p className="font-cormorant text-2xl text-gold italic mb-4">
              Mysore, India — An authentic space for Vedanta, Tantra and Yoga
            </p>
            <p className="text-ivory/70 font-inter text-base leading-relaxed mb-8 max-w-xl">
              The traditional Ashtanga Vinyasa system as transmitted through the unbroken lineage of Krishnamacharya and Sri K. Pattabhi Jois — in the city where it was born.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/register" className="btn-primary">Register Now</Link>
              <Link href="/contact" className="btn-secondary">Ask a Question</Link>
            </div>
          </div>
        </div>
      </section>

      <div className="sticky top-16 z-40 bg-white border-b border-forest/10 shadow-sm">
        <div className="container-custom overflow-x-auto">
          <div className="flex gap-1 py-3 min-w-max">
            {["Tradition", "What You Gain", "Curriculum", "Timetable", "Included", "Fee", "Register", "Certification"].map((tab) => (
              <a key={tab} href={`#${tab.toLowerCase().replace(/\s+/g, "-")}`}
                className="px-4 py-2 text-xs font-inter font-medium text-charcoal/60 hover:text-forest hover:bg-forest/5 rounded transition-colors whitespace-nowrap">
                {tab}
              </a>
            ))}
          </div>
        </div>
      </div>

      <section className="section-padding bg-ivory" id="tradition">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start mb-16">
            <div>
              <h2 className="heading-md text-forest mb-3">Upcoming Batches</h2>
              <p className="text-charcoal/60 font-inter text-sm mb-6">All batches run from the 1st to 21st of the month. 3 weeks, full immersion.</p>
              <div className="space-y-3">
                {batches.map((b) => (
                  <div key={b.date} className={`flex items-center justify-between p-4 border rounded-sm ${b.status === "closed" ? "border-red-200 bg-red-50/50" : b.status === "urgent" ? "border-terracotta/40 bg-terracotta/5" : "border-forest/20 bg-forest/5"}`}>
                    <span className="font-inter text-sm text-charcoal/80">{b.date}</span>
                    <div className="flex items-center gap-3">
                      {b.status === "closed" ? (
                        <span className="text-red-500 text-xs font-semibold font-inter">Booking Closed</span>
                      ) : (
                        <>
                          <span className={`text-xs font-inter ${b.status === "urgent" ? "text-terracotta font-semibold" : "text-forest"}`}>
                            {b.seats} Seats Left
                          </span>
                          <Link href="/register" className={`text-xs px-3 py-1.5 rounded font-inter font-medium ${b.status === "urgent" ? "bg-terracotta text-white" : "bg-forest text-ivory"}`}>
                            Book Now
                          </Link>
                        </>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h2 className="heading-md text-forest mb-4">The Ashtanga Tradition</h2>
              <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-4">
                The Ashtanga Vinyasa system has its roots in the ancient text <strong>Yoga Korunta</strong> — discovered by Sri T. Krishnamacharya in the Calcutta University Library, transmitted to him by his guru Ramamohan Brahmachari in the caves of the Himalayas.
              </p>
              <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-4">
                Krishnamacharya passed this knowledge to his student <strong>Sri K. Pattabhi Jois</strong>, who established the Ashtanga Yoga Research Institute in Mysore in 1948 — the very city where Samyut Yoga stands today.
              </p>
              <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-4">
                Yogacharya Aravind Prasad received this lineage through traditional study, ensuring the unbroken transmission of this powerful system — the Vinyasa (breath-movement synchronisation), Tristhana (posture, breath and gaze) and the complete Primary Series.
              </p>
              <div className="flex gap-3 text-xs font-inter items-center text-charcoal/50 mt-4">
                <span className="border border-forest/30 px-2 py-1 text-forest">Yoga Korunta</span>
                <span>→</span>
                <span className="border border-forest/30 px-2 py-1 text-forest">Krishnamacharya</span>
                <span>→</span>
                <span className="border border-forest/30 px-2 py-1 text-forest">Pattabhi Jois</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest" id="what-you-gain">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-ivory mb-3">What You Gain</h2>
            <p className="text-ivory/60 font-inter text-sm">12 transformative benefits included in your TTC journey</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
            {gains.map(({ icon: Icon, title }) => (
              <div key={title} className="border border-gold/20 p-5 text-center hover:border-gold/50 transition-colors group">
                <Icon className="w-6 h-6 text-gold mx-auto mb-3 group-hover:scale-110 transition-transform" />
                <p className="text-ivory/80 font-inter text-sm font-medium">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" id="curriculum">
        <div className="container-custom max-w-3xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-forest mb-3">Curriculum</h2>
            <p className="text-charcoal/60 font-inter text-sm">Three pillars of complete yogic education</p>
          </div>
          <div className="space-y-3">
            {curriculum.map((section, i) => (
              <div key={i} className="border border-forest/15 rounded-sm overflow-hidden">
                <button onClick={() => setOpenSection(openSection === i ? null : i)}
                  className="w-full flex items-center justify-between px-6 py-4 bg-white hover:bg-forest/5 transition-colors text-left">
                  <span className="font-cormorant text-lg font-semibold text-forest">{section.title}</span>
                  <ChevronDown className={`w-5 h-5 text-forest/60 transition-transform duration-200 flex-shrink-0 ml-4 ${openSection === i ? "rotate-180" : ""}`} />
                </button>
                {openSection === i && (
                  <div className="px-6 py-4 bg-forest/5 border-t border-forest/10">
                    <ul className="space-y-2">
                      {section.items.map((item) => (
                        <li key={item} className="flex items-start gap-2 text-sm text-charcoal/70 font-inter">
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          {item}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest-dark" id="timetable">
        <div className="container-custom max-w-2xl">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-ivory mb-3">Daily Timetable</h2>
            <p className="text-ivory/50 font-inter text-sm">A full day in the life of a Samyut Yoga student</p>
          </div>
          <div className="space-y-0">
            {timetable.map((item, i) => (
              <div key={i} className={`flex gap-4 py-4 ${i < timetable.length - 1 ? "border-b border-gold/10" : ""}`}>
                <div className="w-28 flex-shrink-0">
                  <span className="text-gold font-inter text-xs font-semibold">{item.time}</span>
                </div>
                <div>
                  <p className="text-ivory font-inter text-sm font-medium">{item.activity}</p>
                  {item.detail && <p className="text-ivory/45 font-inter text-xs mt-0.5">{item.detail}</p>}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory" id="included">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-forest mb-3">What&apos;s Included</h2>
            <p className="text-charcoal/60 font-inter text-sm">Everything you need — from the airport to your certificate</p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4">
            {included.map(({ icon: Icon, label }) => (
              <div key={label} className="bg-white border border-forest/10 p-4 text-center rounded-sm hover:border-gold/40 transition-colors">
                <Icon className="w-5 h-5 text-gold mx-auto mb-2.5" />
                <p className="text-charcoal/70 font-inter text-xs font-medium">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section-padding bg-ivory-dark" id="fee">
        <div className="container-custom">
          <div className="text-center mb-10">
            <h2 className="heading-lg text-forest mb-3">Course Fee</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-6">
              <div className="flex border border-forest/20 rounded overflow-hidden">
                <button onClick={() => setCurrency("EUR")} className={`px-4 py-2 text-sm font-inter font-medium transition-colors ${currency === "EUR" ? "bg-forest text-ivory" : "text-forest hover:bg-forest/5"}`}>Foreign (€)</button>
                <button onClick={() => setCurrency("INR")} className={`px-4 py-2 text-sm font-inter font-medium transition-colors ${currency === "INR" ? "bg-forest text-ivory" : "text-forest hover:bg-forest/5"}`}>Indian (₹)</button>
              </div>
              <div className="flex border border-forest/20 rounded overflow-hidden">
                <button onClick={() => setTier("early")} className={`px-4 py-2 text-sm font-inter font-medium transition-colors ${tier === "early" ? "bg-gold text-forest" : "text-charcoal/70 hover:bg-gold/10"}`}>Early Bird</button>
                <button onClick={() => setTier("regular")} className={`px-4 py-2 text-sm font-inter font-medium transition-colors ${tier === "regular" ? "bg-gold text-forest" : "text-charcoal/70 hover:bg-gold/10"}`}>Regular</button>
              </div>
            </div>
          </div>
          <div className="max-w-3xl mx-auto">
            <div className="overflow-hidden rounded-sm border border-forest/15">
              <table className="w-full">
                <thead>
                  <tr className="bg-forest text-ivory">
                    <th className="text-left px-4 py-3 font-inter text-sm font-medium">Accommodation</th>
                    <th className="text-center px-4 py-3 font-inter text-sm font-medium">Application Fee</th>
                    <th className="text-center px-4 py-3 font-inter text-sm font-medium">Registration Fee</th>
                    <th className="text-center px-4 py-3 font-inter text-sm font-bold bg-gold/20">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {pricing[currency][tier].map((row, i) => (
                    <tr key={i} className={`${i % 2 === 0 ? "bg-white" : "bg-forest/5"} border-b border-forest/10 last:border-0`}>
                      <td className="px-4 py-3.5 font-inter text-sm font-medium text-charcoal">{row.room}</td>
                      <td className="px-4 py-3.5 font-inter text-sm text-center text-charcoal/70">{fmt(row.application, currency)}</td>
                      <td className="px-4 py-3.5 font-inter text-sm text-center text-charcoal/70">{fmt(row.course, currency)}</td>
                      <td className="px-4 py-3.5 font-inter text-sm text-center font-bold text-forest bg-gold/10">{fmt(row.total, currency)}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-charcoal/50 font-inter text-xs mt-3 text-center">
              Application fee is non-refundable and secures your seat. Balance due 30 days before course start.
            </p>
          </div>
        </div>
      </section>

      <section className="section-padding bg-forest text-center" id="register">
        <div className="container-custom max-w-xl">
          <h2 className="heading-lg text-ivory mb-4">Ready to Begin?</h2>
          <p className="text-ivory/65 font-inter text-base mb-8">
            Complete the registration form to secure your place. Seats fill quickly — only 12 students per batch.
          </p>
          <Link href="/register?course=ashtanga" className="btn-gold inline-flex items-center gap-2 text-base px-10 py-4">
            Register for Ashtanga TTC
          </Link>
          <p className="text-ivory/40 font-inter text-xs mt-4">
            Questions? <a href="https://wa.me/918073239301" className="text-gold underline">Chat on WhatsApp</a> or{" "}
            <a href="mailto:info@samyutyoga.com" className="text-gold underline">email us</a>
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory" id="certification">
        <div className="container-custom max-w-2xl text-center">
          <h2 className="heading-lg text-forest mb-3">Book a Free Consultation</h2>
          <p className="text-charcoal/60 font-inter text-sm mb-6">
            Speak directly with Yogacharya Aravind Prasad before you register. Ask about the programme, your practice level, or anything on your mind.
          </p>
          <div className="bg-forest/5 border border-forest/15 rounded-sm p-10 mb-10">
            <p className="text-charcoal/50 font-inter text-sm mb-4">Cal.com Booking Widget</p>
            <a href="https://cal.com" target="_blank" rel="noopener noreferrer" className="btn-primary">
              Book Free Consultation
            </a>
          </div>

          <h2 className="heading-md text-forest mb-4">Certification</h2>
          <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-4">
            Upon successful completion of all programme requirements, you will receive a <strong>Yoga Alliance RYT-200 Certificate</strong> from Samyut Yoga, enabling you to register with Yoga Alliance and legally teach yoga internationally.
          </p>
          <div className="bg-forest/5 border border-forest/15 rounded-sm p-8">
            <GraduationCap className="w-10 h-10 text-gold mx-auto mb-4" />
            <p className="font-cormorant text-xl font-semibold text-forest mb-2">Yoga Alliance RYT-200</p>
            <p className="text-charcoal/60 font-inter text-xs">
              Register your certificate with Yoga Alliance at yogaalliance.org to receive your RYT-200 designation and list yourself in the global teacher directory.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
