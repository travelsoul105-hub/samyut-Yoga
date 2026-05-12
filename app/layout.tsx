import type { Metadata } from "next";
import { Cormorant_Garamond, Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import WhatsAppButton from "@/components/layout/WhatsAppButton";
import { OrganizationJsonLd } from "@/components/JsonLd";

const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://samyutyoga.com"),
  title: {
    default: "Traditional Yoga Teacher Training School in Mysore | Samyut Yoga",
    template: "%s | Samyut Yoga",
  },
  description:
    "Samyut Yoga â€” The Traditional Yoga School in Mysore. 200hr Ashtanga & Hatha Yoga Teacher Training. An authentic space for Vedanta, Tantra and Yoga. E-RYT 500 certified. Founded by Yogacharya Aravind Prasad.",
  keywords: [
    "yoga teacher training mysore",
    "ashtanga yoga teacher training",
    "hatha yoga teacher training",
    "yoga school mysore india",
    "200 hour yoga teacher training",
    "samyut yoga",
    "yogacharya aravind prasad",
    "vedanta tantra yoga mysore",
    "yoga alliance ryt 200",
  ],
  authors: [{ name: "Samyut Yoga" }],
  creator: "Samyut Yoga",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://samyutyoga.com",
    siteName: "Samyut Yoga",
    title: "Traditional Yoga Teacher Training School in Mysore | Samyut Yoga",
    description:
      "The Traditional Yoga School in Mysore. 200hr Ashtanga & Hatha Yoga Teacher Training. An authentic space for Vedanta, Tantra and Yoga. E-RYT 500 certified. 15+ years, 500+ students trained.",
    images: [
      {
        url: "/images/logo.jpg",
        width: 1024,
        height: 1024,
        alt: "Samyut Yoga",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Traditional Yoga Teacher Training in Mysore | Samyut Yoga",
    description:
      "200hr Ashtanga & Hatha YTT in Mysore. Vedanta, Tantra & Yoga. E-RYT 500. 15+ years, 500+ students.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true },
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable}`}>
      <body className="font-inter antialiased bg-ivory text-charcoal">
        <OrganizationJsonLd />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}


