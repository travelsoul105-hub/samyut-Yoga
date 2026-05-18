import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center bg-forest overflow-hidden">
      {/* Hero background image */}
      <Image
        src="/images/IMG_0823.JPEG"
        alt="Yogacharya Aravind Prasad leading Yoga Nidra session — Samyut Yoga Mysore"
        fill
        className="object-cover object-center opacity-40"
        priority
      />
      {/* SVG Lotus Mandala watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.07]">
        <svg viewBox="0 0 400 400" className="w-[600px] h-[600px]" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="200" cy="200" r="190" stroke="#F7F3EC" strokeWidth="0.5"/>
          <circle cx="200" cy="200" r="150" stroke="#F7F3EC" strokeWidth="0.5"/>
          <circle cx="200" cy="200" r="110" stroke="#F7F3EC" strokeWidth="0.5"/>
          <circle cx="200" cy="200" r="70" stroke="#F7F3EC" strokeWidth="0.5"/>
          <circle cx="200" cy="200" r="30" stroke="#F7F3EC" strokeWidth="1"/>
          {/* Lotus petals */}
          {[0, 45, 90, 135, 180, 225, 270, 315].map((angle) => (
            <ellipse
              key={angle}
              cx="200"
              cy="200"
              rx="30"
              ry="80"
              stroke="#F7F3EC"
              strokeWidth="0.5"
              fill="none"
              transform={`rotate(${angle} 200 200) translate(0 -80)`}
            />
          ))}
          {/* Inner petals */}
          {[0, 60, 120, 180, 240, 300].map((angle) => (
            <ellipse
              key={`inner-${angle}`}
              cx="200"
              cy="200"
              rx="20"
              ry="50"
              stroke="#F7F3EC"
              strokeWidth="0.5"
              fill="none"
              transform={`rotate(${angle} 200 200) translate(0 -50)`}
            />
          ))}
          {/* Decorative rings */}
          {[170, 130, 90].map((r) => (
            <circle key={r} cx="200" cy="200" r={r} stroke="#C9A84C" strokeWidth="0.3" strokeDasharray="4 6"/>
          ))}
        </svg>
      </div>

      {/* Background texture */}
      <div className="absolute inset-0 bg-gradient-to-b from-forest-dark/50 via-transparent to-forest-dark/30 pointer-events-none" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 sm:px-6 max-w-5xl mx-auto pt-20">
        {/* Accent line */}
        <div className="flex items-center justify-center gap-3 mb-8">
          <div className="h-px w-12 bg-gold/60" />
          <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Mysore · India</span>
          <div className="h-px w-12 bg-gold/60" />
        </div>

        <h1 className="font-cormorant text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-semibold text-ivory leading-tight mb-6">
          Where Mystical Science
          <br />
          <span className="text-gold">Meets The Modern Mind</span>
        </h1>

        <p className="font-inter text-ivory/75 text-lg sm:text-xl max-w-2xl mx-auto mb-4 leading-relaxed">
          The Traditional Yoga School in Mysore
        </p>
        <p className="font-inter text-ivory/55 text-base max-w-xl mx-auto mb-10">
          An authentic space for Vedanta, Tantra and Yoga
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/teacher-training"
            className="w-full sm:w-auto bg-terracotta hover:bg-terracotta/90 text-white px-8 py-3.5 rounded font-inter font-medium text-base transition-all duration-200 hover:shadow-lg hover:shadow-terracotta/30"
          >
            Explore Teacher Training
          </Link>
          <Link
            href="/register"
            className="w-full sm:w-auto border-2 border-ivory/60 text-ivory hover:bg-ivory hover:text-forest px-8 py-3.5 rounded font-inter font-medium text-base transition-all duration-200"
          >
            Register Now
          </Link>
        </div>

        {/* Scroll indicator */}
        <div className="mt-16 flex flex-col items-center gap-2 text-ivory/30">
          <div className="w-px h-12 bg-gradient-to-b from-transparent to-gold/50 animate-pulse" />
          <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        </div>
      </div>
    </section>
  );
}
