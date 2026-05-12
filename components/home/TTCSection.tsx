import Image from "next/image";
import Link from "next/link";
import { Calendar, Clock, Users, AlertCircle } from "lucide-react";

const courses = [
  {
    title: "200hrs Ashtanga Yoga TTC",
    href: "/teacher-training/ashtanga",
    image: "https://samyutyoga.com/wp-content/uploads/2024/07/HEROSECTIONTTC-1-scaled.jpg",
    dates: "October 1–21, 2026",
    duration: "3 Weeks",
    timing: "6:30am – 7:30pm",
    seats: "Only 8 Seats Left",
    badge: "urgent",
    description:
      "Master the traditional Ashtanga Vinyasa system under direct guidance of Yogacharya Aravind Prasad in the birthplace of modern yoga.",
    highlights: ["Primary Series", "Mysore Style", "Sanskrit Counts", "Yoga Alliance RYT-200"],
  },
  {
    title: "200hrs Hatha Yoga TTC",
    href: "/teacher-training/hatha",
    image: "https://samyutyoga.com/wp-content/uploads/2024/06/hatha-yog-teacher-training-hero.jpg",
    dates: "November 1–21, 2026",
    duration: "3 Weeks",
    timing: "6:30am – 7:30pm",
    seats: "Limited Seats",
    badge: "available",
    description:
      "A deep immersion into classical Hatha Yoga — asana, pranayama, meditation, philosophy and teaching methodology in authentic lineage.",
    highlights: ["Classical Hatha", "Pranayama", "Vedanta Philosophy", "Yoga Alliance RYT-200"],
  },
];

export default function TTCSection() {
  return (
    <section className="section-padding bg-ivory-dark">
      <div className="container-custom">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="h-px w-10 bg-forest/30" />
            <span className="text-forest/60 text-xs font-inter tracking-[0.3em] uppercase">Certification Programmes</span>
            <div className="h-px w-10 bg-forest/30" />
          </div>
          <h2 className="heading-lg text-forest mb-3">Yoga Teacher Training Courses</h2>
          <p className="text-charcoal/60 font-inter text-base max-w-xl mx-auto">
            Yoga Alliance accredited 200hr programmes in Mysore — the world capital of yoga.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {courses.map((course) => (
            <div
              key={course.title}
              className="bg-white rounded-sm overflow-hidden card-shadow group"
            >
              {/* Image */}
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={course.image}
                  alt={course.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-forest/60 to-transparent" />
                {/* Seat badge */}
                <div
                  className={`absolute top-4 right-4 px-3 py-1.5 text-xs font-inter font-semibold rounded-sm flex items-center gap-1.5 ${
                    course.badge === "urgent"
                      ? "bg-terracotta text-white"
                      : "bg-gold text-forest"
                  }`}
                >
                  {course.badge === "urgent" && <AlertCircle className="w-3 h-3" />}
                  {course.seats}
                </div>
                {/* YA badge */}
                <div className="absolute bottom-4 left-4 border border-gold/60 text-gold text-xs px-2 py-1 font-inter">
                  Yoga Alliance RYT-200
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <h3 className="font-cormorant text-2xl font-semibold text-forest mb-3">
                  {course.title}
                </h3>
                <p className="text-charcoal/70 font-inter text-sm leading-relaxed mb-5">
                  {course.description}
                </p>

                {/* Meta */}
                <div className="grid grid-cols-3 gap-3 mb-5">
                  <div className="flex flex-col gap-1">
                    <Calendar className="w-4 h-4 text-gold" />
                    <span className="text-xs text-charcoal/60 font-inter">{course.dates}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Clock className="w-4 h-4 text-gold" />
                    <span className="text-xs text-charcoal/60 font-inter">{course.duration}</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <Users className="w-4 h-4 text-gold" />
                    <span className="text-xs text-charcoal/60 font-inter">{course.timing}</span>
                  </div>
                </div>

                {/* Highlights */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {course.highlights.map((h) => (
                    <span key={h} className="bg-forest/5 text-forest text-xs px-2.5 py-1 rounded-sm font-inter">
                      {h}
                    </span>
                  ))}
                </div>

                <div className="flex gap-3">
                  <Link href="/register" className="flex-1 text-center bg-terracotta hover:bg-terracotta/90 text-white py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Register Now
                  </Link>
                  <Link href={course.href} className="flex-1 text-center border border-forest text-forest hover:bg-forest hover:text-ivory py-3 rounded font-inter font-medium text-sm transition-all duration-200">
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-10">
          <Link href="/teacher-training" className="text-forest font-inter text-sm font-medium underline underline-offset-2 hover:text-gold transition-colors">
            View all upcoming batches →
          </Link>
        </div>
      </div>
    </section>
  );
}
