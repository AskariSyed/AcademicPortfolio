import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_TOOLKIT } from "@/data/academic";
import { BrainCircuit, Wrench, Terminal, Cpu } from "lucide-react";

export default function ResearchToolkit() {
  return (
    <SectionContainer
      id="research-toolkit"
      tag="Technical Competencies"
      title="Research &amp; Technical Capabilities"
      subtitle="Structured into scientific methodologies, laboratory tooling, and enterprise engineering capabilities."
      className="bg-white"
    >
      <div className="space-y-8">
        {/* Tier 1: RESEARCH (Visually Dominant) */}
        <div className="rounded-2xl border-2 border-blue-900/40 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-6 sm:p-8 shadow-sm">
          <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
            <div className="flex items-center gap-2.5">
              <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center">
                <BrainCircuit className="w-5 h-5" />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-900">
                  Research Methodologies &amp; Theoretical Areas
                </h3>
                <span className="text-xs text-blue-950 font-semibold uppercase tracking-wider">
                  Primary Specialization (Core Competence)
                </span>
              </div>
            </div>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-900 text-white">
              Primary Focus
            </span>
          </div>

          <p className="text-xs sm:text-sm text-slate-650 mb-6 max-w-3xl leading-relaxed">
            Theoretical frameworks, mathematical formulations, and algorithmic architectures actively investigated in empirical projects and ongoing literature review.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-2.5">
            {RESEARCH_TOOLKIT.research.map((skill) => (
              <div
                key={skill}
                className="p-3 rounded-lg bg-white border border-blue-200/80 shadow-2xs hover:border-blue-900 hover:shadow-xs transition-all"
              >
                <span className="text-xs sm:text-sm font-semibold text-slate-900 leading-tight block">
                  {skill}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Tier 2 & 3: Tools & Engineering (Subdued & Balanced) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Tools */}
          <div className="p-6 rounded-xl border border-slate-200 bg-slate-50/50">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-md bg-slate-800 text-white flex items-center justify-center">
                <Cpu className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-900">
                  Research &amp; Laboratory Tools
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  Frameworks, Compute &amp; Toolchains
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {RESEARCH_TOOLKIT.tools.map((tool) => (
                <span
                  key={tool}
                  className="px-3 py-1.5 rounded-md text-xs font-semibold bg-white text-slate-800 border border-slate-200/80 shadow-2xs"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Engineering (Subdued) */}
          <div className="p-6 rounded-xl border border-slate-200/80 bg-white">
            <div className="flex items-center gap-2.5 mb-3">
              <div className="w-8 h-8 rounded-md bg-slate-200 text-slate-700 flex items-center justify-center">
                <Terminal className="w-4 h-4" />
              </div>
              <div>
                <h4 className="text-base font-bold text-slate-800">
                  Systems &amp; Software Engineering
                </h4>
                <span className="text-xs text-slate-500 font-mono">
                  Applied Implementation Infrastructure
                </span>
              </div>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {RESEARCH_TOOLKIT.engineering.map((eng) => (
                <span
                  key={eng}
                  className="px-2.5 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-700 border border-slate-200/60"
                >
                  {eng}
                </span>
              ))}
            </div>

            <p className="mt-4 text-[11px] text-slate-500 italic">
              Systems engineering provides practical implementation speed for deploying scalable research pipelines.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
