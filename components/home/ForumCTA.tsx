import Link from "next/link";
import { CheckCircle2 } from "lucide-react";

const benefits = [
  "Lifetime VIP Membership FREE with any TTC enrollment",
  "Connect with fellow students and graduates globally",
  "Access exclusive study resources and recorded sessions",
  "Participate in live Q&A with Yogacharya Aravind Prasad",
  "Module-specific discussion threads and peer learning",
  "Early access to new Beyond Asana workshop announcements",
  "VIP graduate badge and exclusive alumni privileges",
];

export default function ForumCTA() {
  return (
    <section className="section-padding bg-forest">
      <div className="container-custom">
        <div className="max-w-3xl mx-auto">
          <div className="relative border border-gold/30 p-8 sm:p-12">
            {/* Corner ornaments */}
            <div className="absolute top-3 left-3 w-6 h-6 border-t-2 border-l-2 border-gold/50" />
            <div className="absolute top-3 right-3 w-6 h-6 border-t-2 border-r-2 border-gold/50" />
            <div className="absolute bottom-3 left-3 w-6 h-6 border-b-2 border-l-2 border-gold/50" />
            <div className="absolute bottom-3 right-3 w-6 h-6 border-b-2 border-r-2 border-gold/50" />

            <div className="text-center mb-8">
              <div className="flex items-center justify-center gap-3 mb-4">
                <div className="h-px w-10 bg-gold/40" />
                <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Community</span>
                <div className="h-px w-10 bg-gold/40" />
              </div>
              <h2 className="heading-lg text-ivory mb-3">Samyut Yoga Forum</h2>
              <p className="text-gold font-cormorant text-xl italic">
                Where Yogis Connect, Grow and Transform Together
              </p>
            </div>

            <ul className="space-y-3 mb-8">
              {benefits.map((b, i) => (
                <li key={i} className="flex items-start gap-3">
                  <CheckCircle2 className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                  <span className="text-ivory/80 font-inter text-sm">{b}</span>
                </li>
              ))}
            </ul>

            <div className="text-center">
              <Link
                href="/dashboard/forum"
                className="inline-flex items-center gap-2 bg-gold hover:bg-gold-dark text-forest px-8 py-3.5 rounded font-inter font-semibold text-sm transition-all duration-200 hover:shadow-lg hover:shadow-gold/20"
              >
                Join Samyut Yoga Forum
              </Link>
              <p className="text-ivory/40 font-inter text-xs mt-3">
                Free with TTC · Premium community membership
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
