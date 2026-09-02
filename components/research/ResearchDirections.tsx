import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import {
  FUTURE_PIPELINE,
  FUTURE_DIRECTION_SUMMARY,
  RESEARCH_DIRECTIONS,
} from "@/data/research";
import { ArrowRight, Compass, ShieldAlert, Sparkles, Sliders } from "lucide-react";

export default function ResearchDirections() {
  return (
    <SectionContainer
      id="research-directions"
      tag="Future Trajectory"
      title="Where I Want to Go Next"
      subtitle="Proposed methodological pipelines and long-term directions for Master's research."
      className="bg-white"
    >
      {/* Narrative block */}
      <div className="p-6 rounded-xl bg-blue-50/50 border border-blue-200/80 mb-12">
        <div className="flex items-start gap-3">
          <Compass className="w-5 h-5 text-blue-900 mt-1 shrink-0" />
          <div>
            <h3 className="text-base font-bold text-blue-950">
              Reliable Visual Intelligence Under Environmental Domain Shift
            </h3>
            <p className="mt-1 text-sm sm:text-base text-slate-700 leading-relaxed">
              &ldquo;{FUTURE_DIRECTION_SUMMARY}&rdquo;
            </p>
          </div>
        </div>
      </div>

      {/* Conceptual Pipeline Visualization */}
      <div className="mb-16">
        <div className="flex items-center justify-between mb-4">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
            Conceptual Visual Reliability Pipeline
          </span>
          <span className="text-[11px] font-mono text-slate-400">
            7-Stage Adaptation Flow
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-7 gap-3">
          {FUTURE_PIPELINE.map((stage, idx) => (
            <div
              key={stage.id}
              className="relative p-4 rounded-lg bg-slate-50 border border-slate-200 flex flex-col justify-between"
            >
              <div>
                <span className="text-[10px] font-mono font-bold text-blue-900 block mb-1">
                  STAGE 0{idx + 1}
                </span>
                <h4 className="text-xs font-bold text-slate-900 leading-tight mb-2">
                  {stage.title}
                </h4>
                <p className="text-[11px] text-slate-600 leading-normal">
                  {stage.description}
                </p>
              </div>

              {idx < FUTURE_PIPELINE.length - 1 && (
                <div className="hidden lg:block absolute -right-2.5 top-1/2 -translate-y-1/2 z-10 text-slate-400 font-mono text-xs">
                  →
                </div>
              )}
            </div>
          ))}
        </div>
      </div>

      {/* 3 Research Directions (Explicitly marked Concept / Work in Progress) */}
      <div>
        <div className="mb-6 flex flex-wrap items-center justify-between gap-2 border-b border-slate-200 pb-3">
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Active Conceptual Directions
          </h3>
          <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            Concept / Work in Progress
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {RESEARCH_DIRECTIONS.map((dir, idx) => (
            <div
              key={dir.id}
              className="flex flex-col justify-between p-6 rounded-xl border border-slate-200 bg-white hover:border-slate-300 shadow-2xs"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    DIRECTION 0{idx + 1}
                  </span>
                  <span className="text-[10px] uppercase font-mono font-bold px-2 py-0.5 rounded bg-amber-50 text-amber-800 border border-amber-200">
                    {dir.label}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900 leading-snug">
                  {dir.title}
                </h4>

                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  {dir.summary}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
                <span className="text-[11px] font-semibold text-slate-700 block mb-1.5">
                  Core Inquiries:
                </span>
                <ul className="space-y-1 text-xs text-slate-600">
                  {dir.keyQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionContainer>
  );
}
