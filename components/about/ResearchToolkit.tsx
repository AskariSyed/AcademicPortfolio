import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_TOOLKIT } from "@/data/academic";
import { Terminal, Cpu } from "lucide-react";

export default function ResearchToolkit() {
  return (
    <SectionContainer
      id="research-toolkit"
      tag="Technical Competencies"
      title="Technical &amp; Research Stack"
      subtitle="Strictly categorized into research machine learning tooling and production software engineering foundations."
      className="bg-white"
    >
      <div className="space-y-8">
        {/* Two Strict Categories: Research/ML vs Engineering */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* 1. Research / ML Stack */}
          <div className="rounded-2xl border-2 border-blue-900/30 bg-gradient-to-br from-blue-50/50 via-white to-slate-50 p-6 sm:p-8 shadow-sm space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center">
                  <Cpu className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Research / ML Stack
                  </h3>
                  <span className="text-xs text-blue-900 font-semibold uppercase tracking-wider font-mono">
                    Model Development &amp; Experimentation
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-bold bg-blue-900 text-white">
                Primary
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
              Core toolchain used for empirical deep learning, image degradation modeling, feature extraction, and multi-seed adaptation protocols.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {RESEARCH_TOOLKIT.researchML.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-semibold bg-white text-slate-900 border border-blue-200/90 shadow-2xs hover:border-blue-700 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* 2. Engineering Stack */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 shadow-2xs space-y-4">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2.5">
                <div className="w-9 h-9 rounded-lg bg-slate-800 text-white flex items-center justify-center">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900">
                    Engineering Stack
                  </h3>
                  <span className="text-xs text-slate-500 font-semibold uppercase tracking-wider font-mono">
                    Systems, Backend &amp; Architecture
                  </span>
                </div>
              </div>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-medium bg-slate-200 text-slate-700">
                Foundations
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
              Software engineering stack used to design production backends, real-time database concurrency, containerization, and deployed interactive systems.
            </p>

            <div className="flex flex-wrap gap-2 pt-2">
              {RESEARCH_TOOLKIT.engineering.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg text-xs sm:text-sm font-medium bg-white text-slate-700 border border-slate-200 shadow-2xs hover:border-slate-400 transition-colors"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
