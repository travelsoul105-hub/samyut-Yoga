import { Heart, BookOpen, Search, Sparkles, Layers, GraduationCap, Shield, Leaf } from "lucide-react";

const pillars = [
  { icon: Heart, title: "Wellness Oriented", desc: "Your wellbeing is the foundation of every teaching and practice" },
  { icon: BookOpen, title: "Organized Learning", desc: "Structured curriculum from foundational to advanced yogic sciences" },
  { icon: Search, title: "Research Based", desc: "Teachings grounded in ancient texts and modern understanding" },
  { icon: Sparkles, title: "Transformative Experience", desc: "Every aspect of the programme is designed to catalyze real change" },
  { icon: Layers, title: "Integrated Approach", desc: "Philosophy, practice and lifestyle woven into a unified system" },
  { icon: GraduationCap, title: "Experienced Faculty", desc: "Taught directly by Yogacharya Aravind Prasad — E-RYT 500" },
  { icon: Shield, title: "Authentic Source", desc: "Teachings from verified Indic philosophical traditions" },
  { icon: Leaf, title: "Traditional Lineage", desc: "Unbroken transmission of yogic wisdom from teacher to student" },
];

export default function IdentityPillars() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/40" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Who We Are</span>
            <div className="h-px w-10 bg-gold/40" />
          </div>
          <h2 className="heading-lg text-forest">Our Identity</h2>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-5">
          {pillars.map((pillar) => {
            const Icon = pillar.icon;
            return (
              <div
                key={pillar.title}
                className="bg-white border border-forest/10 p-5 rounded-sm hover:border-gold/40 hover:shadow-md transition-all duration-300 group text-center"
              >
                <div className="w-10 h-10 bg-forest/5 rounded-sm flex items-center justify-center mx-auto mb-4 group-hover:bg-forest group-hover:text-ivory transition-colors duration-300">
                  <Icon className="w-5 h-5 text-forest group-hover:text-ivory transition-colors" />
                </div>
                <h3 className="font-cormorant text-base font-semibold text-forest mb-2 leading-snug">
                  {pillar.title}
                </h3>
                <p className="text-charcoal/55 font-inter text-xs leading-relaxed">{pillar.desc}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
