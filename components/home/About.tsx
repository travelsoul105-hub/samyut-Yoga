import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <section className="section-padding bg-ivory">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="relative h-[420px] sm:h-[500px] rounded-sm overflow-hidden">
              <Image
                src="https://samyutyoga.com/wp-content/uploads/2024/06/tradition-pic.jpg"
                alt="Samyut Yoga Gurukulam Mysore"
                fill
                className="object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/40 to-transparent" />
            </div>
            {/* Floating accent card */}
            <div className="absolute -bottom-6 -right-6 bg-forest text-ivory p-5 shadow-xl max-w-[180px]">
              <p className="font-cormorant text-3xl font-bold text-gold">15+</p>
              <p className="font-inter text-xs text-ivory/70 mt-1">Years of Traditional Teaching</p>
            </div>
            {/* Gold border accent */}
            <div className="absolute -top-4 -left-4 w-24 h-24 border-2 border-gold/30 rounded-sm pointer-events-none" />
          </div>

          {/* Content */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">About Us</span>
            </div>

            <h2 className="heading-lg text-forest mb-2">Samyut Yoga</h2>
            <p className="font-cormorant text-xl text-gold mb-6 italic">
              Scientific & Mystical Yoga for Universal Transformation
            </p>

            <div className="space-y-4 text-charcoal/80 font-inter leading-relaxed text-[15px]">
              <p>
                <strong className="text-forest">SAMYUT</strong> — a Sanskrit word meaning &quot;united&quot; or &quot;connected&quot; — embodies our philosophy of integrating the ancient wisdom traditions of Vedanta, Tantra, and Yoga into a unified path of transformation.
              </p>
              <p>
                Based in Mysore, Karnataka — the city where modern yoga was born — Samyut Yoga is a traditional Gurukulam that honours the unbroken lineage of yogic wisdom while making it accessible to the modern seeker.
              </p>
              <p>
                Our Gurukulam model goes beyond physical practice. Students live, breathe and immerse themselves in a complete yogic lifestyle — philosophy, pranayama, meditation, anatomy and the mystical sciences — guided directly by Yogacharya Aravind Prasad.
              </p>
            </div>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/about" className="btn-primary">
                Learn More About Us
              </Link>
              <Link href="/facilities" className="border border-forest text-forest hover:bg-forest hover:text-ivory px-6 py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                Our Facilities
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
