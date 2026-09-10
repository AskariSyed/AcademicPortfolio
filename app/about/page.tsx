import React from "react";
import type { Metadata } from "next";
import AcademicBackground from "@/components/about/AcademicBackground";
import TeachingExperience from "@/components/about/TeachingExperience";
import ResearchToolkit from "@/components/about/ResearchToolkit";
import { GraduationCap, FileText, ArrowRight } from "lucide-react";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Academic Background & Education",
  description:
    "Formal academic background of Muhammad Hassan Askari: BS in Computer Science from COMSATS University Islamabad, academic record, teaching assistantships, and technical competencies.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/about",
  },
  openGraph: {
    title: "Academic Background & Education | Muhammad Hassan Askari",
    description:
      "Formal academic background of Muhammad Hassan Askari: BS in Computer Science from COMSATS University Islamabad, academic record, teaching assistantships, and technical competencies.",
    url: "https://research-with-askari.vercel.app/about",
  },
};

export default function AboutPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Curriculum &amp; Pedagogy</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Academic Background
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            Rigorous undergraduate training at COMSATS University Islamabad, multi-semester teaching assistantships in core computing courses, and research-focused software capabilities.
          </p>

          <div className="mt-6">
            <Link
              href="/cv"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
            >
              <FileText className="w-3.5 h-3.5" />
              <span>Download Formal Academic CV</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>

      <AcademicBackground />
      <TeachingExperience />
      <ResearchToolkit />
    </div>
  );
}
