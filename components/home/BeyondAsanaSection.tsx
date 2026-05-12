import Link from "next/link";
import { BookOpen, Wind, Eye } from "lucide-react";

const categories = [
  {
    icon: BookOpen,
    title: "Philosophy & Vedanta",
    description:
      "Yoga Sutras of Patanjali, Bhagavad Gita, Vedantic psychology and Indic wisdom for the modern seeker.",
  },
  {
    icon: Wind,
    title: "Pranayama & Breathwork",
    description:
      "Traditional yogic and tantric breathwork for physical and mental transformation. Decode the science of breath.",
  },
  {
    icon: Eye,
    title: "Meditation & Tantra",
    description:
      "Mystical meditation techniques from Vijnana Bhairava Tantra and other Tantric traditions. Explore consciousness.",
  },
];

export default function BeyondAsanaSection() {
  return (
    <section className="section-padding" style={{ background: "linear-gradient(135deg, #FDF8EF 0%, #F5EDD8 100%)" }}>
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-amber/40" />
            <span className="text-amber text-xs font-inter tracking-[0.3em] uppercase">Deepen Your Practice</span>
            <div className="h-px w-10 bg-amber/40" />
          </div>
          <h2 className="heading-lg mb-4" style={{ color: "#5C3D2E" }}>
            Yoga Beyond Asana
          </h2>
          <p className="text-charcoal/70 font-inter text-base max-w-2xl mx-auto leading-relaxed">
            Yoga is far more than physical postures. Our Beyond Asana workshops take you deeper into the ancient dimensions of yogic wisdom — philosophy, breathwork, meditation and the mystical sciences of Vedanta and Tantra.
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {categories.map((cat) => {
            const Icon = cat.icon;
            return (
              <div
                key={cat.title}
                className="bg-white/70 backdrop-blur-sm border border-amber/20 p-7 rounded-sm hover:border-gold/50 hover:shadow-lg transition-all duration-300 group"
              >
                <div className="w-12 h-12 rounded-sm bg-gradient-to-br from-gold/20 to-amber/10 flex items-center justify-center mb-5 group-hover:from-gold/30 transition-colors">
                  <Icon className="w-5 h-5 text-amber" />
                </div>
                <h3 className="font-cormorant text-xl font-semibold mb-3" style={{ color: "#5C3D2E" }}>
                  {cat.title}
                </h3>
                <p className="text-charcoal/65 font-inter text-sm leading-relaxed">
                  {cat.description}
                </p>
              </div>
            );
          })}
        </div>

        {/* Subtext + CTA */}
        <div className="text-center">
          <p className="text-charcoal/50 font-inter text-sm mb-6 italic">
            Upcoming workshops announced regularly. Join our community to be notified.
          </p>
          <Link
            href="/beyond-asana"
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded font-inter font-medium text-sm transition-all duration-200 text-white"
            style={{ background: "linear-gradient(135deg, #C9A84C, #8B5E3C)" }}
          >
            Explore Beyond Asana →
          </Link>
        </div>
      </div>
    </section>
  );
}
