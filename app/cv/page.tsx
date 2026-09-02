import React from "react";
import type { Metadata } from "next";
import { Download, ExternalLink, FileText, CheckCircle2, GraduationCap, Award, BookOpen } from "lucide-react";
import { RESEARCH_IDENTITY } from "@/data/research";
import { EDUCATION, IELTS_RECORD, TEACHING_EXPERIENCE, RESEARCH_TOOLKIT } from "@/data/academic";
import { PUBLICATIONS } from "@/data/publications";

export const metadata: Metadata = {
  title: "Academic Curriculum Vitae (CV)",
  description:
    "Download and inspect the formal Academic Curriculum Vitae of Muhammad Hassan Askari, candidate for 2027 Master's research programs.",
};

export default function CVPage() {
  const cvPath = "/cv/Muhammad-Hassan-Askari-Academic-CV.pdf";

  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
              <FileText className="w-3.5 h-3.5" />
              <span>Academic Curriculum Vitae</span>
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
              Curriculum Vitae
            </h1>
            <p className="mt-3 text-base sm:text-lg text-slate-650 leading-relaxed">
              Comprehensive academic record, research publications, teaching assistantships, and technical proficiencies formatted for university admissions and research laboratory reviews.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3 shrink-0">
            <a
              href={cvPath}
              download="Muhammad-Hassan-Askari-Academic-CV.pdf"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-sm font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-colors shadow-xs"
            >
              <Download className="w-4 h-4" />
              <span>Download Academic CV (PDF)</span>
            </a>

            <a
              href={cvPath}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-sm font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors shadow-2xs"
            >
              <ExternalLink className="w-4 h-4" />
              <span>Open in New Tab</span>
            </a>
          </div>
        </div>
      </section>

      {/* Main Content: Embedded Viewer + Academic CV Outline */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Embedded PDF Viewer */}
          <div className="lg:col-span-8">
            <div className="rounded-xl border border-slate-200 bg-slate-100 p-2 sm:p-3 shadow-xs">
              <div className="flex items-center justify-between px-3 py-2 border-b border-slate-200 bg-white rounded-t-lg text-xs font-mono text-slate-600 mb-2">
                <span>Document: Muhammad-Hassan-Askari-Academic-CV.pdf</span>
                <span className="text-emerald-700 font-semibold">Verified</span>
              </div>
              <div className="w-full h-[800px] bg-white rounded-b-lg overflow-hidden border border-slate-200">
                <iframe
                  src={`${cvPath}#toolbar=0&navpanes=0`}
                  title="Muhammad Hassan Askari Academic CV"
                  className="w-full h-full border-none"
                />
              </div>
            </div>
          </div>

          {/* Right Column: Key Sections Summary for Fast Professor Review */}
          <div className="lg:col-span-4 space-y-6">
            {/* Quick Facts Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs space-y-4">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Academic Snapshot
              </h3>

              <div className="space-y-3 text-sm">
                <div>
                  <span className="text-xs text-slate-400 font-mono block">DEGREE</span>
                  <span className="font-semibold text-slate-900">{EDUCATION.degree}</span>
                  <span className="text-xs text-slate-500 block">{EDUCATION.institution} (2022–2026)</span>
                </div>

                <div className="grid grid-cols-2 gap-2 pt-2 border-t border-slate-100">
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">CGPA</span>
                    <span className="font-bold text-blue-900 text-base">{EDUCATION.cgpa} / 4.00</span>
                  </div>
                  <div>
                    <span className="text-xs text-slate-400 font-mono block">IELTS</span>
                    <span className="font-bold text-slate-900 text-base">{IELTS_RECORD.overallScore} (C1)</span>
                  </div>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-mono block">RESEARCH FOCUS</span>
                  <span className="text-xs font-medium text-slate-700 leading-snug block mt-0.5">
                    {RESEARCH_IDENTITY.primaryStatement}
                  </span>
                </div>

                <div className="pt-2 border-t border-slate-100">
                  <span className="text-xs text-slate-400 font-mono block">TARGET TIMELINE</span>
                  <span className="text-xs font-medium text-slate-700 block mt-0.5">
                    {RESEARCH_IDENTITY.currentObjective}
                  </span>
                </div>
              </div>
            </div>

            {/* Current Manuscript Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Active Research Manuscript
              </h3>
              <h4 className="text-sm font-bold text-slate-900 leading-snug">
                {PUBLICATIONS[0].title}
              </h4>
              <p className="text-xs text-slate-600">
                Authors: {PUBLICATIONS[0].authors.join(", ")}
              </p>
              <div className="inline-block px-2.5 py-0.5 rounded text-[11px] font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                {PUBLICATIONS[0].status}
              </div>
            </div>

            {/* Teaching Experience Card */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs space-y-3">
              <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400">
                Academic Support &amp; Assessment
              </h3>
              <ul className="space-y-2 text-xs text-slate-700">
                {TEACHING_EXPERIENCE.map((ta, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-blue-900 font-bold">•</span>
                    <div>
                      <strong className="text-slate-900">{ta.course}</strong>: {ta.duration} ({ta.role})
                    </div>
                  </li>
                ))}
              </ul>
            </div>

            {/* Direct Contact */}
            <div className="rounded-xl border border-blue-200 bg-blue-50/50 p-5 text-center space-y-2">
              <span className="text-xs font-bold text-blue-950 block">
                Have questions or need additional documents?
              </span>
              <a
                href={`mailto:${RESEARCH_IDENTITY.email}?subject=CV%20Inquiry%20-%20Muhammad%20Hassan%20Askari`}
                className="inline-block text-xs font-semibold text-blue-900 underline hover:text-blue-950"
              >
                Contact via Email ({RESEARCH_IDENTITY.email})
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
