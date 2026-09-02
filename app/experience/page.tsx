import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/layout/SectionContainer";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import ResearchProgression from "@/components/experience/ResearchProgression";
import { Download, FileText, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
  title: "Experience | Muhammad Hassan Askari",
  description:
    "Academic and professional experience of Muhammad Hassan Askari, including teaching assistant experience at COMSATS University Islamabad and internships in ICT and software quality assurance.",
  openGraph: {
    title: "Experience | Muhammad Hassan Askari",
    description:
      "Academic and professional experience of Muhammad Hassan Askari, including teaching assistant experience at COMSATS University Islamabad and internships in ICT and software quality assurance.",
  },
};

export default function ExperiencePage() {
  return (
    <div className="py-12 md:py-16 space-y-16">
      {/* Page Header */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-4">
        <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
          Academic &amp; Professional Trajectory
        </span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
          Academic &amp; Professional Experience
        </h1>
        <p className="text-base sm:text-lg text-slate-600 max-w-2xl mx-auto leading-relaxed">
          Teaching and engineering experience across computer science education, backend development, software systems, and quality assurance.
        </p>

        {/* Action Bar */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/cv/Muhammad-Hassan-Askari-Academic-CV.pdf"
            target="_blank"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-2xs"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Download Academic CV</span>
          </Link>
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>View CV Online</span>
          </Link>
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            <span>Explore Research Agenda</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </section>

      {/* Career Timeline with Filter */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ExperienceTimeline showFilter={true} />
      </section>

      {/* From Engineering to Research Progression */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <ResearchProgression />
      </section>
    </div>
  );
}
