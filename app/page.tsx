import React from "react";
import type { Metadata } from "next";
import HeroSection from "@/components/hero/HeroSection";
import FlagshipResearch from "@/components/research/FlagshipResearch";
import ResearchTrajectorySummary from "@/components/research/ResearchTrajectorySummary";
import TeachingHomePreview from "@/components/about/TeachingHomePreview";
import CredentialsBanner from "@/components/certificates/CredentialsBanner";
import dynamic from "next/dynamic";

// ContactSection is a heavy client component (form with useState, fetch, router).
// Lazy-load it so it doesn't contribute to the initial JS bundle.
const ContactSection = dynamic(() => import("@/components/contact/ContactSection"), {
  loading: () => (
    <section className="py-16 md:py-24 bg-slate-50/50 border-b border-slate-200/70">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="animate-pulse space-y-4 max-w-3xl">
          <div className="h-5 w-24 bg-slate-200 rounded-full" />
          <div className="h-9 w-64 bg-slate-200 rounded-lg" />
          <div className="h-5 w-full max-w-lg bg-slate-200 rounded" />
        </div>
      </div>
    </section>
  ),
});

export const metadata: Metadata = {
  title: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
  description:
    "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/",
  },
  openGraph: {
    title: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
    description:
      "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
    url: "https://research-with-askari.vercel.app/",
    siteName: "Muhammad Hassan Askari Portfolio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Hassan Askari | Computer Science Graduate & Aspiring Researcher",
    description:
      "Recent Computer Science graduate exploring research across AI/ML, Computer Vision, Data Science, Software Engineering, and Algorithms.",
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

      {/* 6. Direct Academic Inquiries & Contact — lazy loaded */}
      <ContactSection />
    </>
  );
}
