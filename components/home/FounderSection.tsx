import Image from "next/image";
import Link from "next/link";
import { Award } from "lucide-react";

export default function FounderSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-custom">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Photo */}
          <div className="relative order-2 lg:order-1">
            <div className="relative h-[480px] sm:h-[560px] rounded-sm overflow-hidden">
              <Image
                src="/images/yogacharya-aravind-prasad-samyut-yoga-mysore.jpg"
                alt="Yogacharya Aravind Prasad"
                fill
                className="object-cover object-top"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-forest/50 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6">
                <p className="font-cormorant text-2xl font-semibold text-ivory">Yogacharya Aravind Prasad</p>
                <div className="flex flex-wrap gap-2 mt-2">
                  {["E-RYT 500", "YACEP", "15+ Years"].map((b) => (
                    <span key={b} className="border border-gold/60 text-gold text-xs px-2 py-0.5 font-inter">
                      {b}
                    </span>
                  ))}
                </div>
              </div>
            </div>
            <div className="absolute -bottom-5 -right-5 w-20 h-20 border-2 border-gold/30" />
          </div>

          {/* Bio */}
          <div className="order-1 lg:order-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="h-px w-10 bg-gold" />
              <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Meet Your Teacher</span>
            </div>
            <h2 className="heading-lg text-forest mb-6">
              Yogacharya Aravind Prasad
            </h2>

            <div className="space-y-4 text-charcoal/75 font-inter text-[15px] leading-relaxed mb-6">
              <p>
                Yogacharya Aravind Prasad embarked on his spiritual journey at a young age. Blessed at age seven by a Yogi from Pondicherry, his path was set early toward deep spiritual inquiry.
              </p>
              <p>
                He completed 6 years of Indic Studies in a Gurukulam studying Yoga, Veda, Vedanta and other Indic scriptures — building a foundation of authentic traditional knowledge rare in the modern world.
              </p>
              <p>
                He served as Head of Department for Indian Culture in Guyana, South America, bringing the wisdom of India to the Caribbean. Returning to India in 2012, he established a prestigious yoga institute that trained over 2,000 international aspirants across 15 years.
              </p>
              <p>
                After 3 years of deep personal sadhana (2021–24), Yogacharya Aravind Prasad now shares his wisdom with chosen groups of yogic aspirants globally — with the intimacy and depth that only small-group teaching allows.
              </p>
            </div>

            <div className="flex flex-wrap gap-3 mb-6">
              {[
                { icon: Award, text: "E-RYT 500 Certified" },
                { icon: Award, text: "YACEP Continuing Education" },
              ].map(({ icon: Icon, text }) => (
                <div key={text} className="flex items-center gap-2 bg-forest/5 px-3 py-2 rounded">
                  <Icon className="w-4 h-4 text-gold" />
                  <span className="text-forest text-sm font-inter font-medium">{text}</span>
                </div>
              ))}
            </div>

            <Link href="/about" className="btn-primary">
              Read Full Biography
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
