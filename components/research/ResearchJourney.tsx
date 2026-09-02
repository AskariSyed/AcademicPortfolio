import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_JOURNEY_STEPS, RESEARCH_JOURNEY_TEXT } from "@/data/research";
import { ArrowDown, GitCommit } from "lucide-react";

export default function ResearchJourney() {
  return (
    <SectionContainer
      id="research-journey"
      tag="Intellectual Evolution"
      title="Research Journey"
      subtitle="From a practical recognition challenge under snow to foundational questions in multimodal visual uncertainty and domain shift."
      className="bg-slate-50/50"
    >
      {/* Supporting narrative callout */}
      <div className="max-w-4xl p-5 sm:p-6 mb-12 rounded-xl bg-white border border-slate-200/90 shadow-2xs">
        <p className="text-base sm:text-lg text-slate-700 font-serif italic leading-relaxed">
          &ldquo;{RESEARCH_JOURNEY_TEXT}&rdquo;
        </p>
      </div>

      {/* Evolution timeline flow */}
      <div className="relative max-w-4xl mx-auto">
        {/* Desktop Vertical Guide Line */}
        <div className="hidden sm:block absolute left-8 top-6 bottom-6 w-0.5 bg-gradient-to-b from-blue-900 via-blue-700 to-slate-400" />

        <div className="space-y-6 sm:space-y-8">
          {RESEARCH_JOURNEY_STEPS.map((step, index) => {
            const isLast = index === RESEARCH_JOURNEY_STEPS.length - 1;
            return (
              <div key={step.step} className="relative flex flex-col sm:flex-row items-start sm:gap-6 group">
                {/* Node icon / number */}
                <div className="flex items-center gap-3 sm:gap-0">
                  <div
                    className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border shadow-xs transition-all duration-300 z-10 shrink-0 ${
                      isLast
                        ? "bg-blue-950 border-blue-900 text-white shadow-blue-950/20"
                        : "bg-white border-slate-300 text-slate-800 group-hover:border-blue-900 group-hover:bg-blue-50/50"
                    }`}
                  >
                    <span className="text-[10px] font-mono uppercase tracking-wider font-semibold opacity-70">
                      Step
                    </span>
                    <span className="text-lg font-bold font-mono">
                      0{step.step}
                    </span>
                  </div>

                  <span className="sm:hidden text-xs font-mono font-semibold text-blue-900 uppercase">
                    {step.tag}
                  </span>
                </div>

                {/* Content Box */}
                <div
                  className={`mt-2 sm:mt-0 flex-1 p-5 sm:p-6 rounded-xl border transition-all duration-300 ${
                    isLast
                      ? "bg-white border-blue-900/40 shadow-sm ring-1 ring-blue-900/10"
                      : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs"
                  }`}
                >
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-1.5">
                    <h3 className="text-base sm:text-lg font-bold text-slate-900">
                      {step.title}
                    </h3>
                    <span className="hidden sm:inline-block px-2 py-0.5 rounded text-[11px] font-mono font-medium text-blue-900 bg-blue-50 border border-blue-200/60">
                      {step.tag}
                    </span>
                  </div>
                  <p className="text-sm text-slate-650 leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionContainer>
  );
}
