import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import About from "@/components/home/About";
import ThreePillars from "@/components/home/ThreePillars";
import TTCSection from "@/components/home/TTCSection";
import BeyondAsanaSection from "@/components/home/BeyondAsanaSection";
import IdentityPillars from "@/components/home/IdentityPillars";
import ForumCTA from "@/components/home/ForumCTA";
import FounderSection from "@/components/home/FounderSection";
import BlogPreview from "@/components/home/BlogPreview";

export const metadata: Metadata = {
  title: "Traditional Yoga Teacher Training School in Mysore | Samyut Yoga",
  description:
    "Samyut Yoga — The Traditional Yoga School in Mysore. An authentic space for Vedanta, Tantra and Yoga. 200hr Ashtanga & Hatha Yoga Teacher Training. Yoga Alliance E-RYT 500. Founded by Yogacharya Aravind Prasad.",
};

export default function HomePage() {
  return (
    <>
      <Hero />
      <TrustBar />
      <About />
      <ThreePillars />
      <TTCSection />
      <BeyondAsanaSection />
      <IdentityPillars />
      <ForumCTA />
      <FounderSection />
      <BlogPreview />
    </>
  );
}
