import type { Metadata } from "next";
import { CourseJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import AshtangaContent from "./AshtangaContent";

export const metadata: Metadata = {
  title: "200hr Ashtanga Yoga Teacher Training in Mysore, India — RYT-200",
  description:
    "Authentic 200-hour Ashtanga Vinyasa Yoga Teacher Training in Mysore, India. 21-day residential immersion — Primary Series, Tristhana method, philosophy, teaching methodology. Yoga Alliance RYT-200. Led by Yogacharya Aravind Prasad (E-RYT 500).",
  keywords: [
    "ashtanga yoga teacher training mysore",
    "200 hour ashtanga ttc india",
    "ashtanga vinyasa teacher training",
    "yoga teacher training mysore 2026",
    "ryt 200 ashtanga mysore",
    "primary series teacher training",
    "mysore style ashtanga course",
  ],
  alternates: { canonical: "/teacher-training/ashtanga" },
  openGraph: {
    title: "200hr Ashtanga Yoga TTC in Mysore | Samyut Yoga",
    description:
      "Traditional Ashtanga Vinyasa TTC in Mysore — 21 days, Primary Series, Yoga Alliance RYT-200. E-RYT 500 instructor. Max 12 students.",
    url: "https://samyutyoga.com/teacher-training/ashtanga",
  },
};

export default function AshtangaTTCPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "Teacher Training", url: "https://samyutyoga.com/teacher-training" },
          { name: "Ashtanga Yoga TTC", url: "https://samyutyoga.com/teacher-training/ashtanga" },
        ]}
      />
      <CourseJsonLd
        name="200hr Ashtanga Yoga Teacher Training"
        description="Authentic 200-hour Ashtanga Vinyasa Yoga Teacher Training in Mysore, India. 21-day residential immersion covering Primary Series, Tristhana method, philosophy, anatomy and teaching methodology. Yoga Alliance RYT-200."
        url="https://samyutyoga.com/teacher-training/ashtanga"
        instances={[
          { startDate: "2026-08-01", endDate: "2026-08-21" },
          { startDate: "2026-10-01", endDate: "2026-10-21" },
          { startDate: "2026-12-01", endDate: "2026-12-21" },
        ]}
        startingPrice={899}
        currency="EUR"
      />
      <AshtangaContent />
    </>
  );
}
