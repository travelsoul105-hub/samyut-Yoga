import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Award, BookOpen, Globe, Users } from "lucide-react";

export const metadata: Metadata = {
  title: "About Samyut Yoga Gurukulam & Yogacharya Aravind Prasad",
  description:
    "Learn about Samyut Yoga — The Traditional Yoga School in Mysore founded by Yogacharya Aravind Prasad (E-RYT 500). Our Gurukulam philosophy, lineage and mission.",
};

const milestones = [
  { year: "Age 7", event: "Blessed by a Yogi from Pondicherry — spiritual path begins" },
  { year: "6 Years", event: "Gurukulam studies: Yoga, Veda, Vedanta and Indic scriptures" },
  { year: "Pre-2012", event: "Head of Department for Indian Culture, Guyana, South America" },
  { year: "2012", event: "Returns to India, establishes prestigious yoga institute in Mysore" },
  { year: "15+ Years", event: "Over 2,000 international aspirants trained from 30+ countries" },
  { year: "2021–24", event: "Three years of personal sadhana and deep inner enquiry" },
  { year: "Now", event: "Shares wisdom with chosen groups of yogic aspirants globally" },
];

export default function AboutPage() {
  return (
    <div className="pt-16">
      {/* Hero */}
      <section className="relative bg-forest py-24 overflow-hidden">
        <div className="absolute inset-0 opacity-5">
          <div className="w-full h-full" style={{ backgroundImage: "radial-gradient(circle at 50% 50%, #C9A84C 1px, transparent 1px)", backgroundSize: "60px 60px" }} />
        </div>
        <div className="container-custom relative z-10 text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Our Story</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h1 className="heading-xl text-ivory mb-4">About Samyut Yoga</h1>
          <p className="font-cormorant text-2xl text-gold italic mb-6">
            Scientific & Mystical Yoga for Universal Transformation
          </p>
          <p className="text-ivory/70 font-inter text-base max-w-xl mx-auto">
            The Traditional Yoga School in Mysore — Where Ancient Wisdom Transforms Modern Lives
          </p>
        </div>
      </section>

      {/* What is SAMYUT */}
      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="heading-md text-forest mb-6">What is SAMYUT?</h2>
            <p className="text-charcoal/70 font-inter text-base leading-relaxed mb-4">
              <strong className="text-forest">SAMYUT</strong> — from Sanskrit — means &quot;united&quot;, &quot;connected&quot;, &quot;joined together&quot;. It is the vision of yoga not as isolated practice but as a complete integration of body, mind, breath, philosophy and spirit.
            </p>
            <p className="text-charcoal/70 font-inter text-base leading-relaxed mb-4">
              The acronym stands for <strong className="text-forest">Scientific &amp; Mystical Yoga for Universal Transformation</strong> — our commitment to bridging the empirical and the experiential, the ancient and the contemporary, the physical and the transcendent.
            </p>
            <p className="text-charcoal/70 font-inter text-base leading-relaxed">
              At Samyut Yoga, every teaching is rooted in authentic Indic philosophical tradition — Vedanta, Tantra and the Yoga school — unified into a coherent, transformative path for the modern seeker.
            </p>
          </div>
        </div>
      </section>

      {/* Gurukulam Philosophy */}
      <section className="section-padding bg-forest">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold/50" />
                <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Our Model</span>
              </div>
              <h2 className="heading-lg text-ivory mb-5">The Gurukulam Tradition</h2>
              <div className="space-y-4 text-ivory/70 font-inter text-[15px] leading-relaxed">
                <p>
                  The Gurukulam is an ancient Indian system where students live in the teacher&apos;s home, immersed in the total environment of learning. The word itself — <em>guru</em> (teacher) + <em>kula</em> (family/home) — captures the essence: a community of learning built on relationship, trust and shared practice.
                </p>
                <p>
                  At Samyut Yoga, this is not a metaphor. Students eat, practice, study and rest together under the guidance of Yogacharya Aravind Prasad — experiencing the full arc of a yogic day from the 5:30am wake-up to the evening Kirtans.
                </p>
                <p>
                  This total immersion accelerates transformation in ways that part-time or drop-in learning cannot replicate. The Gurukulam is why our graduates go on to teach with confidence, depth and authenticity.
                </p>
              </div>
            </div>
            <div className="relative h-[380px] rounded-sm overflow-hidden">
              <Image
                src="https://samyutyoga.com/wp-content/uploads/2024/06/tradition-pic.jpg"
                alt="Gurukulam yoga practice Mysore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
          </div>
        </div>
      </section>

      {/* Founder Section */}
      <section className="section-padding bg-ivory-dark">
        <div className="container-custom">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold/40" />
              <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">The Teacher</span>
              <div className="h-px w-10 bg-gold/40" />
            </div>
            <h2 className="heading-lg text-forest">Yogacharya Aravind Prasad</h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 items-start">
            <div className="lg:col-span-1">
              <div className="relative h-[400px] lg:h-[500px] rounded-sm overflow-hidden sticky top-24">
                <Image
                  src="https://samyutyoga.com/wp-content/uploads/2024/06/hatha-page-image.jpg"
                  alt="Yogacharya Aravind Prasad"
                  fill
                  className="object-cover object-top"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="flex flex-wrap gap-2">
                    {["E-RYT 500", "YACEP", "15+ Years", "Gurukulam Trained"].map((b) => (
                      <span key={b} className="border border-gold/60 text-gold text-xs px-2 py-0.5 font-inter bg-forest/40 backdrop-blur-sm">
                        {b}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-2">
              <div className="space-y-5 text-charcoal/75 font-inter text-[15px] leading-relaxed mb-8">
                <p>
                  Yogacharya Aravind Prasad embarked on his spiritual journey at a young age. Blessed at age seven by a Yogi from Pondicherry, his encounter with this enlightened sage set the course of his entire life toward the deepest inquiry into the nature of self and consciousness.
                </p>
                <p>
                  He completed 6 years of Indic Studies in a traditional Gurukulam — studying Yoga, Veda, Vedanta and other Indic scriptures. This foundation in primary sources — not translations or modern interpretations — gives his teaching a rare authenticity that students from across the world recognise immediately.
                </p>
                <p>
                  Before returning to yoga teaching, he served as Head of Department for Indian Culture in Guyana, South America — sharing the treasures of Indic civilisation with the diaspora communities of the Caribbean. This cross-cultural experience gave him an exceptional ability to make ancient wisdom accessible to Western and international students.
                </p>
                <p>
                  Returning to India in 2012, he established a prestigious yoga institute in Mysore that went on to train over 2,000 international aspirants over 15 years — making it one of the most prolific yoga teacher training schools in the region.
                </p>
                <p>
                  After 3 years of personal sadhana (2021–2024) — a period of deep inner retreat and spiritual consolidation — he now shares wisdom with chosen groups of yogic aspirants globally, bringing the full depth of his 15+ years of teaching experience with the refined clarity of post-sadhana insight.
                </p>
              </div>

              {/* Timeline */}
              <h3 className="font-cormorant text-xl font-semibold text-forest mb-5">Journey Timeline</h3>
              <div className="space-y-4">
                {milestones.map((m, i) => (
                  <div key={i} className="flex gap-4">
                    <div className="flex flex-col items-center">
                      <div className="w-8 h-8 rounded-full bg-forest flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-gold" />
                      </div>
                      {i < milestones.length - 1 && <div className="w-px flex-1 bg-forest/20 my-1" />}
                    </div>
                    <div className="pb-4">
                      <span className="text-gold font-inter text-xs font-semibold uppercase tracking-wider">{m.year}</span>
                      <p className="text-charcoal/70 font-inter text-sm mt-0.5">{m.event}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-forest-dark py-12">
        <div className="container-custom">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { icon: Users, value: "2000+", label: "Students Trained" },
              { icon: Globe, value: "80+", label: "Countries" },
              { icon: Award, value: "E-RYT 500", label: "Yoga Alliance" },
              { icon: BookOpen, value: "15+ Years", label: "Experience" },
            ].map(({ icon: Icon, value, label }) => (
              <div key={label} className="flex flex-col items-center gap-2">
                <Icon className="w-5 h-5 text-gold/60" />
                <p className="font-cormorant text-3xl font-bold text-gold">{value}</p>
                <p className="text-ivory/50 font-inter text-xs">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-ivory text-center">
        <div className="container-custom max-w-xl">
          <h2 className="heading-md text-forest mb-4">Begin Your Journey</h2>
          <p className="text-charcoal/65 font-inter text-base mb-8">
            Study under Yogacharya Aravind Prasad in Mysore — the city where modern yoga was born.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register" className="btn-primary">Register for TTC</Link>
            <Link href="/contact" className="border border-forest text-forest hover:bg-forest hover:text-ivory px-6 py-3 rounded font-inter font-medium text-sm transition-all duration-200">
              Ask a Question
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
