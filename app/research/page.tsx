import React from "react";
import type { Metadata } from "next";
import ResearchFocus from "@/components/research/ResearchFocus";
import ResearchJourney from "@/components/research/ResearchJourney";
import ResearchQuestions from "@/components/research/ResearchQuestions";
import ResearchDirections from "@/components/research/ResearchDirections";
import FeaturedResearch from "@/components/research/FeaturedResearch";
import { RESEARCH_IDENTITY } from "@/data/research";
import { Sparkles, Eye } from "lucide-react";

export const metadata: Metadata = {
  title: "Research Explorations & Interests | Muhammad Hassan Askari",
  description:
    "Research explorations across AI/ML, computer vision, data science, software engineering, and algorithms by Muhammad Hassan Askari, a recent Computer Science graduate.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/research",
  },
  openGraph: {
    title: "Research Explorations & Interests | Muhammad Hassan Askari",
    description:
      "Research explorations across AI/ML, computer vision, data science, software engineering, and algorithms by Muhammad Hassan Askari, a recent Computer Science graduate.",
    url: "https://research-with-askari.vercel.app/research",
  },
};

export default function ResearchPage() {
  return (
    <div className="py-8">
      {/* Page Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <Eye className="w-3.5 h-3.5" />
            <span>Research Trajectory</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Research Explorations &amp; Focus
          </h1>
          <p className="mt-4 text-lg text-slate-700 font-serif leading-relaxed">
            &ldquo;An overview of my undergraduate research projects, empirical experiments, and exploratory interests across Computer Science.&rdquo;
          </p>
          <p className="mt-3 text-sm sm:text-base text-slate-650 leading-relaxed">
            My primary research experience centers on robust computer vision and distribution shift, complemented by investigations in discrete optimization, data science, and software systems.
          </p>
        </div>
      </section>

      <ResearchFocus />
      <ResearchJourney />
      <FeaturedResearch />
      <ResearchQuestions />
      <ResearchDirections />
    </div>
  );
}
