import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Users, Award, ChevronRight } from "lucide-react";

export const metadata: Metadata = {
  title: "200hr Yoga Teacher Training Mysore — Ashtanga & Hatha | Samyut Yoga",
  description:
    "Yoga Alliance accredited 200hr Ashtanga and Hatha Yoga Teacher Training in Mysore, India. An authentic space for Vedanta, Tantra and Yoga. E-RYT 500 faculty. Small groups, authentic lineage.",
};

export default function TeacherTrainingPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-forest py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Yoga Alliance Accredited</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h1 className="heading-xl text-ivory mb-4">Yoga Teacher Training</h1>
          <p className="font-cormorant text-2xl text-gold italic mb-6">
            200-Hour Certification Programmes in Mysore, India
          </p>
          <p className="text-ivory/70 font-inter text-base max-w-2xl mx-auto leading-relaxed">
            Immerse yourself in an authentic Gurukulam experience. Two specialisations — Ashtanga Vinyasa and Classical Hatha — with the same depth, lineage and transformative power.
          </p>
        </div>
      </section>

      {/* Course Cards */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            {/* Ashtanga */}
            <div className="bg-white rounded-sm overflow-hidden card-shadow">
              <div className="relative h-64">
                <Image
                  src="https://samyutyoga.com/wp-content/uploads/2024/07/HEROSECTIONTTC-1-scaled.jpg"
                  alt="200hr Ashtanga Yoga TTC Mysore"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-terracotta text-white text-xs px-3 py-1.5 font-inter font-semibold rounded-sm">
                  Only 8 Seats Left
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="border border-gold/60 text-gold text-xs px-2 py-1 font-inter">Yoga Alliance RYT-200</span>
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-cormorant text-3xl font-semibold text-forest mb-2">200hrs Ashtanga Yoga TTC</h2>
                <p className="text-charcoal/60 font-inter text-sm mb-5 leading-relaxed">
                  Master the traditional Ashtanga Vinyasa system — Primary Series, Mysore style, Tristhana method and the philosophy behind the practice. The lineage of Krishnamacharya and Pattabhi Jois, transmitted authentically.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                    Next: Oct 1–21, 2026
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    6:30am – 7:30pm
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Users className="w-4 h-4 text-gold flex-shrink-0" />
                    Max 12 students
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Award className="w-4 h-4 text-gold flex-shrink-0" />
                    E-RYT 500 faculty
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/teacher-training/ashtanga" className="flex-1 text-center bg-forest hover:bg-forest-light text-ivory py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Full Details
                  </Link>
                  <Link href="/register" className="flex-1 text-center bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>

            {/* Hatha */}
            <div className="bg-white rounded-sm overflow-hidden card-shadow">
              <div className="relative h-64">
                <Image
                  src="https://samyutyoga.com/wp-content/uploads/2024/06/hatha-yog-teacher-training-hero.jpg"
                  alt="200hr Hatha Yoga TTC Mysore"
                  fill
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/70 to-transparent" />
                <div className="absolute top-4 right-4 bg-gold text-forest text-xs px-3 py-1.5 font-inter font-semibold rounded-sm">
                  Limited Seats
                </div>
                <div className="absolute bottom-4 left-4">
                  <span className="border border-gold/60 text-gold text-xs px-2 py-1 font-inter">Yoga Alliance RYT-200</span>
                </div>
              </div>
              <div className="p-7">
                <h2 className="font-cormorant text-3xl font-semibold text-forest mb-2">200hrs Hatha Yoga TTC</h2>
                <p className="text-charcoal/60 font-inter text-sm mb-5 leading-relaxed">
                  A comprehensive classical Hatha Yoga immersion — asanas, pranayama, meditation, anatomy and Vedanta philosophy. The complete science of self-transformation through traditional Hatha practices.
                </p>
                <div className="grid grid-cols-2 gap-3 mb-5 text-sm">
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Calendar className="w-4 h-4 text-gold flex-shrink-0" />
                    Next: Nov 1–21, 2026
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Clock className="w-4 h-4 text-gold flex-shrink-0" />
                    6:30am – 7:30pm
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Users className="w-4 h-4 text-gold flex-shrink-0" />
                    Max 12 students
                  </div>
                  <div className="flex items-center gap-2 text-charcoal/60 font-inter">
                    <Award className="w-4 h-4 text-gold flex-shrink-0" />
                    E-RYT 500 faculty
                  </div>
                </div>
                <div className="flex gap-3">
                  <Link href="/teacher-training/hatha" className="flex-1 text-center bg-forest hover:bg-forest-light text-ivory py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Full Details
                  </Link>
                  <Link href="/register" className="flex-1 text-center bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Register Now
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Why Samyut */}
      <section className="section-padding bg-forest">
        <div className="container-custom">
          <div className="text-center mb-12">
            <h2 className="heading-lg text-ivory mb-3">Why Train at Samyut Yoga?</h2>
            <p className="text-ivory/60 font-inter text-base max-w-xl mx-auto">
              Not all 200hr programmes are equal. Here is what makes Samyut Yoga different.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { title: "Authentic Lineage", desc: "Direct transmission from the Krishnamacharya–Pattabhi Jois lineage. Not a commercialised adaptation." },
              { title: "Small Intimate Groups", desc: "Maximum 12 students per batch ensures personal attention and genuine mentoring." },
              { title: "Mysore Location", desc: "The birthplace of modern yoga — the city where legends taught and tradition runs deep." },
              { title: "Total Immersion", desc: "Live the Gurukulam life — practice, philosophy, meals and community all day, every day for 21 days." },
              { title: "Yoga Alliance Certified", desc: "Earn your RYT-200 credential registered with Yoga Alliance to teach internationally." },
              { title: "E-RYT 500 Faculty", desc: "Taught exclusively by Yogacharya Aravind Prasad — 15+ years, 2000+ students trained." },
            ].map((item) => (
              <div key={item.title} className="border border-gold/20 p-6 hover:border-gold/50 transition-colors duration-300">
                <div className="w-1 h-8 bg-gold mb-4" />
                <h3 className="font-cormorant text-xl font-semibold text-ivory mb-2">{item.title}</h3>
                <p className="text-ivory/60 font-inter text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Quick CTA */}
      <section className="py-16 bg-ivory text-center">
        <div className="container-custom max-w-2xl">
          <h2 className="heading-md text-forest mb-4">Ready to Become a Certified Yoga Teacher?</h2>
          <p className="text-charcoal/65 font-inter text-base mb-8">
            Select your programme below to see full curriculum, batch dates, fees and registration.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/teacher-training/ashtanga" className="flex items-center justify-center gap-2 bg-forest hover:bg-forest-light text-ivory px-6 py-3.5 rounded font-inter font-medium text-sm transition-all duration-200">
              Ashtanga TTC <ChevronRight className="w-4 h-4" />
            </Link>
            <Link href="/teacher-training/hatha" className="flex items-center justify-center gap-2 border-2 border-forest text-forest hover:bg-forest hover:text-ivory px-6 py-3.5 rounded font-inter font-medium text-sm transition-all duration-200">
              Hatha TTC <ChevronRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
