import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import ContactContent from "./ContactContent";

export const metadata: Metadata = {
  title: "Contact Samyut Yoga — Traditional Yoga School in Mysore",
  description:
    "Get in touch with Samyut Yoga, Mysore. Email info@samyutyoga.com, call +91 9538015757, or WhatsApp +91 80732 39301. Enquiries about Ashtanga and Hatha Yoga Teacher Training welcomed.",
  keywords: [
    "contact samyut yoga",
    "yoga school mysore contact",
    "yoga teacher training enquiry",
  ],
  alternates: { canonical: "/contact" },
  openGraph: {
    title: "Contact Us | Samyut Yoga Mysore",
    description:
      "Reach the Samyut Yoga team in Mysore, India. Email, phone, WhatsApp or contact form — we respond within 24 hours.",
    url: "https://samyutyoga.com/contact",
  },
};

export default function ContactPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "Contact", url: "https://samyutyoga.com/contact" },
        ]}
      />
      <ContactContent />
    </>
  );
}
