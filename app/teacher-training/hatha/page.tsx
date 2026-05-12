import type { Metadata } from "next";
import { CourseJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import HathaContent from "./HathaContent";

export const metadata: Metadata = {
  title: "200hr Hatha Yoga Teacher Training in Mysore, India — RYT-200",
  description:
    "Classical 200-hour Hatha Yoga Teacher Training in Mysore, India. 21-day residential immersion — Hatha Yoga Pradipika, pranayama, meditation, philosophy, teaching methodology. Yoga Alliance RYT-200. Led by Yogacharya Aravind Prasad (E-RYT 500).",
  keywords: [
    "hatha yoga teacher training mysore",
    "200 hour hatha ttc india",
    "classical hatha yoga teacher training",
    "yoga teacher training mysore 2026",
    "ryt 200 hatha mysore",
    "hatha yoga pradipika course",
    "residential yoga teacher training india",
  ],
  alternates: { canonical: "/teacher-training/hatha" },
  openGraph: {
    title: "200hr Hatha Yoga TTC in Mysore | Samyut Yoga",
    description:
      "Classical Hatha Yoga TTC in Mysore — 21 days, Hatha Yoga Pradipika, pranayama, Yoga Alliance RYT-200. E-RYT 500 instructor. Max 12 students.",
    url: "https://samyutyoga.com/teacher-training/hatha",
  },
};

export default function HathaTTCPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "Teacher Training", url: "https://samyutyoga.com/teacher-training" },
          { name: "Hatha Yoga TTC", url: "https://samyutyoga.com/teacher-training/hatha" },
        ]}
      />
      <CourseJsonLd
        name="200hr Hatha Yoga Teacher Training"
        description="Classical 200-hour Hatha Yoga Teacher Training in Mysore, India. 21-day residential immersion covering Hatha Yoga Pradipika, pranayama, meditation, philosophy, anatomy and teaching methodology. Yoga Alliance RYT-200."
        url="https://samyutyoga.com/teacher-training/hatha"
        instances={[
          { startDate: "2026-07-01", endDate: "2026-07-21" },
          { startDate: "2026-09-01", endDate: "2026-09-21" },
          { startDate: "2026-11-01", endDate: "2026-11-21" },
        ]}
        startingPrice={899}
        currency="EUR"
      />
      <HathaContent />
    </>
  );
}
