import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import BeyondAsanaContent from "./BeyondAsanaContent";

export const metadata: Metadata = {
  title: "Beyond Asana — Yoga Philosophy, Pranayama & Meditation Workshops",
  description:
    "Explore the deeper dimensions of Yoga at Samyut Yoga Mysore. Workshops on Yoga Sutras of Patanjali, Bhagavad Gita, Vedanta, Pranayama, and Tantric Meditation — taught by Yogacharya Aravind Prasad.",
  keywords: [
    "yoga philosophy workshop mysore",
    "pranayama workshop india",
    "vedanta workshop",
    "yoga sutras of patanjali course",
    "meditation workshop mysore",
    "tantric meditation workshop",
  ],
  alternates: { canonical: "/beyond-asana" },
  openGraph: {
    title: "Beyond Asana — Yoga Philosophy & Meditation Workshops | Samyut Yoga",
    description:
      "Philosophy, Pranayama and Meditation workshops by Yogacharya Aravind Prasad. Vedanta, Yoga Sutras, Vijnana Bhairava Tantra. Mysore, India.",
    url: "https://samyutyoga.com/beyond-asana",
  },
};

export default function BeyondAsanaPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "Beyond Asana", url: "https://samyutyoga.com/beyond-asana" },
        ]}
      />
      <BeyondAsanaContent />
    </>
  );
}
