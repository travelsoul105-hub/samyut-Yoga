import type { Metadata } from "next";
import { BreadcrumbJsonLd } from "@/components/JsonLd";
import RegisterContent from "./RegisterContent";

export const metadata: Metadata = {
  title: "Register for Yoga Teacher Training — Apply Now",
  description:
    "Apply for the 200hr Ashtanga or Hatha Yoga Teacher Training at Samyut Yoga, Mysore. Residential 21-day programme. Maximum 12 students per batch. Yoga Alliance RYT-200.",
  keywords: [
    "apply yoga teacher training mysore",
    "register yoga teacher training india",
    "yoga ttc application",
  ],
  alternates: { canonical: "/register" },
  openGraph: {
    title: "Register for Yoga TTC | Samyut Yoga Mysore",
    description:
      "Apply for the 200hr Ashtanga or Hatha TTC at Samyut Yoga, Mysore. Only 12 seats per batch.",
    url: "https://samyutyoga.com/register",
  },
};

export default function RegisterPage() {
  return (
    <>
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://samyutyoga.com" },
          { name: "Register", url: "https://samyutyoga.com/register" },
        ]}
      />
      <RegisterContent />
    </>
  );
}
