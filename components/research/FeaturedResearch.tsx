import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { PUBLICATIONS } from "@/data/publications";
import { Users, FileCheck2, HelpCircle, AlertTriangle, Cpu, Layers } from "lucide-react";
import Link from "next/link";

export default function FeaturedResearch() {
  const paper = PUBLICATIONS[0];

  return (
    <SectionContainer
      id="featured-research"
      tag="Primary Research Investigation"
      title="Featured Research"
      subtitle="Undergraduate research addressing environmental domain shift and classification reliability under adverse weather conditions."
      className="bg-white"
    >
      <div className="rounded-2xl border border-slate-200 bg-slate-50/30 overflow-hidden shadow-sm">
        {/* Paper Header */}
        <div className="p-6 sm:p-8 lg:p-10 border-b border-slate-200 bg-white">
          <div className="flex flex-wrap items-center gap-2 mb-4">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
              <FileCheck2 className="w-3.5 h-3.5 text-amber-700" />
              <span>Status: {paper.status}</span>
            </span>
            <span className="px-2.5 py-1 rounded-md text-xs font-mono font-medium text-slate-600 bg-slate-100 border border-slate-200">
              Year: {paper.year}
            </span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {paper.title}
          </h3>

          <div className="mt-4 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-600">
            <div className="flex items-center gap-1.5">
              <Users className="w-4 h-4 text-blue-900" />
              <span>
                <strong>Authors:</strong> {paper.authors.join(", ")}
              </span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="font-mono text-xs text-slate-500">
                COMSATS University Islamabad
              </span>
            </div>
          </div>

          <div className="mt-4 flex flex-wrap gap-2">
            {paper.researchAreas.map((area) => (
              <span
                key={area}
                className="px-2.5 py-0.5 rounded text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200"
              >
                {area}
              </span>
            ))}
          </div>
        </div>

        {/* Scientific Methodology Flow Diagram */}
        <div className="p-6 sm:p-8 border-b border-slate-200 bg-slate-100/50">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 flex items-center gap-2">
              <Layers className="w-3.5 h-3.5 text-blue-900" />
              <span>Methodological Architecture Pipeline</span>
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Multi-Stage Framework
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {paper.methodologyPipeline.map((stage, idx) => (
              <div
                key={stage}
                className="relative flex flex-col items-center justify-center p-3 rounded-lg bg-white border border-slate-200/90 text-center shadow-2xs"
              >
                <span className="text-[10px] font-mono font-bold text-blue-900 mb-1">
                  0{idx + 1}
                </span>
                <span className="text-xs font-medium text-slate-800 leading-snug">
                  {stage}
                </span>
                {idx < paper.methodologyPipeline.length - 1 && (
                  <div className="hidden lg:block absolute -right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-mono pointer-events-none">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Structured Sections: Problem, Question, Approach, Results */}
        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-slate-200">
          {/* Left Column: Problem & Question */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-rose-800 mb-2">
                <AlertTriangle className="w-4 h-4 text-rose-600" />
                <span>The Problem</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                {paper.problem}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900 mb-2">
                <HelpCircle className="w-4 h-4 text-blue-700" />
                <span>Research Question</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                &ldquo;{paper.researchQuestion}&rdquo;
              </p>
            </div>
          </div>

          {/* Right Column: Approach & Results / Status */}
          <div className="p-6 sm:p-8 space-y-6">
            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900 mb-2">
                <Cpu className="w-4 h-4 text-blue-700" />
                <span>Approach</span>
              </div>
              <p className="text-sm sm:text-base text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                {paper.approach}
              </p>
            </div>

            <div>
              <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 mb-2">
                <FileCheck2 className="w-4 h-4 text-emerald-700" />
                <span>Results &amp; Verification</span>
              </div>
              <div className="text-sm text-slate-650 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                <p>{paper.resultsNote}</p>
                <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                  <span>Target Submission:</span>
                  <span className="font-semibold text-slate-800">
                    MDPI Sensors (In Preparation)
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Action Bar (Honest: no fabricated links!) */}
        <div className="p-4 sm:p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-xs text-slate-500 italic">
            Manuscript preprint and evaluation benchmarks will be released upon formal submission and publication.
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/projects/task-aware-traffic-sign-classification"
              className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
            >
              Explore Research Overview
            </Link>
            <Link
              href="/cv"
              className="px-4 py-2 rounded-md text-xs font-semibold text-slate-700 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
            >
              Download CV
            </Link>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
