const pillars = [
  {
    number: "01",
    title: "WISDOM",
    subtitle: "Philosophy of Vedanta Yoga",
    description:
      "Vedanta Yoga delves into the amalgamation of Vedanta and the yoga school of philosophy, offering a holistic approach that unites the philosophy and practice for self-transformation.",
    icon: "𝕎",
  },
  {
    number: "02",
    title: "VALUES",
    subtitle: "Psychology of Tantra Yoga",
    description:
      "The psychology of Tantra Yoga explores the mystical aspects of Vedanta, Tantra and the yoga school of philosophy to provide a comprehensive path for spiritual growth and self-realization.",
    icon: "𝕍",
  },
  {
    number: "03",
    title: "PRAXIS",
    subtitle: "Practice of Raja Yoga",
    description:
      "The practice of Raja Yoga integrates Vedanta, Tantra and the yoga school of philosophy to offer a unified path towards self transformation through health, harmony and happiness.",
    icon: "ℙ",
  },
];

export default function ThreePillars() {
  return (
    <section className="section-padding bg-forest">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-14">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-gold/50" />
            <span className="text-gold text-xs font-inter tracking-[0.3em] uppercase">Our Foundation</span>
            <div className="h-px w-10 bg-gold/50" />
          </div>
          <h2 className="heading-lg text-ivory mb-3">Three Pillars of Samyut Yoga</h2>
          <p className="text-ivory/60 font-inter text-base max-w-xl mx-auto">
            The integrated framework that guides every teaching at Samyut Yoga
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {pillars.map((pillar) => (
            <div
              key={pillar.title}
              className="relative border border-gold/20 p-8 hover:border-gold/50 transition-colors duration-300 group"
            >
              {/* Number */}
              <span className="absolute top-4 right-4 text-gold/20 text-5xl font-cormorant font-bold">
                {pillar.number}
              </span>

              {/* Gold top border on hover */}
              <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-gold opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="mb-6">
                <div className="w-12 h-12 border border-gold/40 flex items-center justify-center mb-5">
                  <span className="text-gold font-cormorant text-2xl font-bold">{pillar.title[0]}</span>
                </div>
                <h3 className="font-cormorant text-2xl font-bold text-gold mb-1 tracking-wider">
                  {pillar.title}
                </h3>
                <p className="text-ivory/80 font-inter text-sm font-medium">{pillar.subtitle}</p>
              </div>

              <div className="h-px w-10 bg-gold/30 mb-5" />

              <p className="text-ivory/65 font-inter text-sm leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
