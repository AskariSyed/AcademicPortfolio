import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import FlagshipResearch from "@/components/research/FlagshipResearch";
import ResearchTrajectorySummary from "@/components/research/ResearchTrajectorySummary";
import TeachingHomePreview from "@/components/about/TeachingHomePreview";
import CredentialsBanner from "@/components/certificates/CredentialsBanner";
import ContactSection from "@/components/contact/ContactSection";

export const metadata: Metadata = {
  title: "Muhammad Hassan Askari | AI/ML Research & Computer Vision",
  description:
    "Computer Science graduate researching robust computer vision, distribution shift, few-shot adaptation, and reliable visual AI.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/",
  },
  openGraph: {
    title: "Muhammad Hassan Askari | AI/ML Research & Computer Vision",
    description:
      "Computer Science graduate researching robust computer vision, distribution shift, few-shot adaptation, and reliable visual AI.",
    url: "https://research-with-askari.vercel.app/",
    siteName: "Muhammad Hassan Askari Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Askari | AI/ML Research & Computer Vision",
    description:
      "Computer Science graduate researching robust computer vision, distribution shift, few-shot adaptation, and reliable visual AI.",
  },
};

export default function HomePage() {
  return (
    <>
      {/* 1. Hero: Identity, Research Statement, 3 Primary Areas */}
      <HeroSection />

      {/* 2. Three Flagship Research Projects in Priority Order */}
      <FlagshipResearch />

      {/* 3. Research Trajectory: Software Engineering -> Empirical Research -> Reliability Under Shift */}
      <ResearchTrajectorySummary />

      {/* 4. Academic Background & Highlighted Teaching Assistantships */}
      <TeachingHomePreview />

      {/* 5. Subdued Credentials Reference (Supporting credentials only) */}
      <CredentialsBanner />

      {/* 6. Direct Academic Inquiries & Contact */}
      <ContactSection />
    </>
  );
}
