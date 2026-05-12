import type { Metadata } from "next";
import { FAQJsonLd, BreadcrumbJsonLd } from "@/components/JsonLd";
import { allFaqs } from "./data";
import FAQsContent from "./FAQsContent";

export const metadata: Metadata = {
  title: "FAQs — Yoga Teacher Training in Mysore",
  description:
    "Frequently asked questions about Samyut Yoga's TTC programmes in Mysore. Learn about course requirements, fees, accommodation, travel to India, daily schedule, RYT-200 certification and life at the Gurukulam.",
  keywords: [
    "yoga teacher training faq",
    "mysore yoga school faq",
    "200 hour ttc requirements",
    "yoga teacher training cost india",
    "ryt 200 certification mysore",
  ],
  alternates: { canonical: "/faqs" },
  openGraph: {
    title: "FAQs — Yoga Teacher Training Mysore | Samyut Yoga",
    description:
      "All your questions about studying at Samyut Yoga answered — requirements, fees, accommodation, travel, schedule and certification.",
    url: "https://samyutyoga.com/faqs",
  },
};

export default function FAQsPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "FAQs", url: "https://samyutyoga.com/faqs" },
        ]}
      />
      <FAQJsonLd faqs={allFaqs} />
      <FAQsContent />
    </>
  );
}
