import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Facilities — Samyut Yoga Gurukulam, Mysore",
  description:
    "Our facilities at Samyut Yoga — yoga shala, accommodation, dining, and the environment for authentic yoga practice in Mysore.",
};

const facilities = [
  {
    title: "Yoga Shala",
    desc: "Spacious, ventilated practice hall with natural light, hardwood floors, quality props and a peaceful atmosphere. Designed for focused, authentic practice.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/DSL7102-1-scaled.jpg",
  },
  {
    title: "Accommodation",
    desc: "Clean, comfortable rooms in triple sharing, twin sharing and private options. All rooms have natural ventilation, hot water and a calm environment conducive to study and rest.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/accomodation-scaled.jpg",
  },
  {
    title: "Dining Hall",
    desc: "Nutritious yogic meals three times daily plus morning and evening snacks. Traditional Indian vegetarian cuisine with herbal drinks — food as medicine in the yogic tradition.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/food1.jpg",
  },
  {
    title: "Study & Library",
    desc: "Quiet study space with a curated collection of yoga texts — Hatha Yoga Pradipika, Yoga Sutras, Gheranda Samhita, Vijnana Bhairava Tantra and other traditional sources.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/DSL7063-scaled.jpg",
  },
  {
    title: "Mysore Location",
    desc: "Set in Mysore — the world capital of yoga and the spiritual heart of South India. Morning bird song, fresh air and the ancient energy of this sacred city enhance every practice.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/DSL7036-scaled.jpg",
  },
  {
    title: "Community Spaces",
    desc: "Shared spaces for kirtan, group discussions, evening gatherings and the social life of the Gurukulam — where the teaching continues beyond the formal sessions.",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/DSL7073-1-scaled.jpg",
  },
];

export default function FacilitiesPage() {
  return (
    <div className="pt-16">
      <section className="bg-forest py-20">
        <div className="container-custom text-center">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">The Space</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h1 className="heading-xl text-ivory mb-4">Our Facilities</h1>
          <p className="text-ivory/65 font-inter text-base max-w-xl mx-auto">
            A complete yogic environment in Mysore — designed for total immersion and authentic transformation.
          </p>
        </div>
      </section>

      <section className="section-padding bg-ivory">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
            {facilities.map((f) => (
              <div key={f.title} className="bg-white rounded-sm overflow-hidden card-shadow group">
                <div className="relative h-52">
                  <Image src={f.image} alt={f.title} fill className="object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
                </div>
                <div className="p-5">
                  <h3 className="font-cormorant text-xl font-semibold text-forest mb-2">{f.title}</h3>
                  <p className="text-charcoal/65 font-inter text-sm leading-relaxed">{f.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-14 bg-forest text-center">
        <div className="container-custom max-w-lg">
          <h2 className="heading-md text-ivory mb-4">Experience It for Yourself</h2>
          <p className="text-ivory/65 font-inter text-sm mb-6">The best way to understand Samyut Yoga is to be here. Register for a TTC batch and experience our Gurukulam.</p>
          <Link href="/register" className="btn-gold">Register Now</Link>
        </div>
      </section>
    </div>
  );
}
