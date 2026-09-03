"use client";

import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import {
  RESEARCH_JOURNEY_STEPS,
  RESEARCH_JOURNEY_TEXT,
  RESEARCH_JOURNEY_CLOSING,
} from "@/data/research";
import {
  Code,
  Compass,
  Eye,
  AlertTriangle,
  Lightbulb,
  TrendingUp,
  MessageSquareCode,
  ShieldAlert,
  Sparkles,
  ArrowRight,
  ShieldCheck,
  Cpu,
  Layers,
} from "lucide-react";

// Subtle icon map corresponding to each narrative milestone
const STAGE_ICONS = [
  Code, // 01 - Software Developer at Heart
  Compass, // 02 - An Unexpected Beginning in Research
  Eye, // 03 - My First Research Problem
  AlertTriangle, // 04 - The Rejection
  Lightbulb, // 05 - Learning to Research Through Feedback
  TrendingUp, // 06 - Discovering That I Enjoy Research
  MessageSquareCode, // 07 - From Vision to Language Models
  ShieldAlert, // 08 - The Question of Trust
  Sparkles, // 09 - A Broader Direction: Reliable & Trustworthy AI
];

export default function ResearchJourney() {
  return (
    <SectionContainer
      id="research-journey"
      tag="Intellectual Evolution"
      title="Research Journey"
      subtitle="The personal and intellectual trajectory from software engineering to questions of reliable, trustworthy intelligence."
      className="bg-slate-50/50"
    >
      {/* Supporting narrative introduction */}
      <div className="max-w-4xl mx-auto p-6 sm:p-8 mb-12 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 mb-3 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
          <Compass className="w-4 h-4" />
          <span>The Formative Narrative</span>
        </div>
        <p className="text-base sm:text-lg text-slate-800 font-serif leading-relaxed italic">
          &ldquo;{RESEARCH_JOURNEY_TEXT}&rdquo;
        </p>
      </div>

      {/* Narrative Timeline Flow */}
      <div className="relative max-w-4xl mx-auto">
        {/* Continuous Left Vertical Guide Track (Desktop) */}
        <div className="hidden sm:block absolute left-8 top-8 bottom-8 w-0.5 bg-gradient-to-b from-slate-300 via-blue-900 to-indigo-600 opacity-60" />

        <div className="space-y-8 sm:space-y-10">
          {RESEARCH_JOURNEY_STEPS.map((step, index) => {
            const IconComponent = STAGE_ICONS[index] || Compass;
            const isRejection = step.badgeVariant === "amber";
            const isEmpiricalSuccess = step.badgeVariant === "emerald";
            const isConvergence = step.badgeVariant === "indigo";
            const isFacultyStep = step.badgeVariant === "blue";

            // Node badge styling
            const nodeStyle = isConvergence
              ? "bg-indigo-950 border-indigo-900 text-white shadow-indigo-950/20"
              : isRejection
                ? "bg-amber-50 border-amber-300 text-amber-900"
                : isEmpiricalSuccess
                  ? "bg-emerald-50 border-emerald-300 text-emerald-900"
                  : isFacultyStep
                    ? "bg-blue-50 border-blue-300 text-blue-900"
                    : "bg-white border-slate-300 text-slate-800";

            // Card border styling
            const cardStyle = isConvergence
              ? "bg-white border-indigo-200 ring-1 ring-indigo-900/10 shadow-sm"
              : isRejection
                ? "bg-white border-amber-200/90 shadow-2xs"
                : isEmpiricalSuccess
                  ? "bg-white border-emerald-200/90 shadow-2xs"
                  : "bg-white border-slate-200/90 hover:border-slate-300 shadow-2xs";

            return (
              <div
                key={step.step}
                className="relative flex flex-col sm:flex-row items-start sm:gap-6 group"
              >
                {/* Node Milestone Indicator */}
                <div className="flex items-center gap-3 sm:gap-0 shrink-0">
                  <div
                    className={`w-16 h-16 rounded-xl flex flex-col items-center justify-center border shadow-xs transition-all duration-300 z-10 shrink-0 ${nodeStyle}`}
                  >
                    <IconComponent className="w-5 h-5 mb-0.5" />
                    <span className="text-[11px] font-mono font-bold">
                      {step.stageNumber}
                    </span>
                  </div>

                  <div className="sm:hidden flex flex-col">
                    <span className="text-[10px] font-mono font-semibold uppercase text-slate-400">
                      {step.period}
                    </span>
                    <span className="text-xs font-mono font-bold text-blue-900">
                      {step.tag}
                    </span>
                  </div>
                </div>

                {/* Main Content Narrative Card */}
                <div
                  className={`mt-3 sm:mt-0 flex-1 p-5 sm:p-7 rounded-xl border transition-all duration-300 ${cardStyle}`}
                >
                  {/* Header Row */}
                  <div className="flex flex-wrap items-center justify-between gap-2 pb-3 mb-3 border-b border-slate-100">
                    <div>
                      <span className="hidden sm:block text-[11px] font-mono text-slate-400 font-medium">
                        {step.period}
                      </span>
                      <h3 className="text-base sm:text-lg font-bold text-slate-900 mt-0.5">
                        {step.title}
                      </h3>
                    </div>

                    <div className="flex items-center gap-2">
                      {step.highlightMetric && (
                        <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-md text-xs font-mono font-semibold text-emerald-800 bg-emerald-50 border border-emerald-200">
                          <TrendingUp className="w-3.5 h-3.5" />
                          <span>{step.highlightMetric}</span>
                        </span>
                      )}
                      <span className="hidden sm:inline-block px-2.5 py-0.5 rounded text-[11px] font-mono font-medium text-slate-700 bg-slate-100 border border-slate-200/80">
                        {step.tag}
                      </span>
                    </div>
                  </div>

                  {/* Core Narrative Paragraph */}
                  <p className="text-sm text-slate-700 leading-relaxed">
                    {step.narrative}
                  </p>

                  {/* Intellectual Transition Bridge */}
                  {step.bridge && (
                    <div className="mt-4 pt-3 border-t border-slate-100/80 flex items-start gap-2 text-xs font-serif text-slate-500 italic">
                      <ArrowRight className="w-3.5 h-3.5 text-blue-900 shrink-0 mt-0.5" />
                      <span>{step.bridge}</span>
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* The Central Intellectual Parallel Card */}
      <div className="max-w-4xl mx-auto mt-14 p-6 sm:p-8 rounded-2xl bg-gradient-to-br from-blue-950 via-slate-900 to-indigo-950 text-white shadow-md">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-300">
          <Layers className="w-4 h-4" />
          <span>The Unifying Intellectual Thread</span>
        </div>

        <h4 className="text-xl sm:text-2xl font-bold font-serif leading-snug mt-1 text-white">
          &ldquo;{RESEARCH_JOURNEY_CLOSING.coreQuestion}&rdquo;
        </h4>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-6 pt-6 border-t border-white/15">
          {/* Visual Domain Parallel */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-sky-300 uppercase mb-2">
              <Eye className="w-3.5 h-3.5" />
              <span>In Computer Vision (Snow Degradation)</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              The AI system must recognize critical targets when the sensory
              visual evidence is severely corrupted by physical environmental
              degradation, occlusions, and contrast loss.
            </p>
          </div>

          {/* Language Domain Parallel */}
          <div className="p-4 rounded-xl bg-white/5 border border-white/10">
            <div className="flex items-center gap-2 text-xs font-mono font-semibold text-indigo-300 uppercase mb-2">
              <ShieldAlert className="w-3.5 h-3.5" />
              <span>In RAG &amp; Language Models</span>
            </div>
            <p className="text-xs sm:text-sm text-slate-200 leading-relaxed">
              The AI system must generate accurate responses when retrieved
              textual context may be factually conflicting, manipulated, or
              deliberately injected by an adversary.
            </p>
          </div>
        </div>

        <p className="mt-5 text-xs sm:text-sm text-slate-300 leading-relaxed italic">
          {RESEARCH_JOURNEY_CLOSING.unifyingInsight}
        </p>
      </div>

      {/* Reflective Concluding Statement & Current Focus */}
      <div className="max-w-4xl mx-auto mt-8 p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-2 mb-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
          <ShieldCheck className="w-4 h-4" />
          <span>Research Commitment &amp; Graduate Focus</span>
        </div>

        <blockquote className="text-base sm:text-lg font-serif text-slate-800 leading-relaxed italic border-l-2 border-blue-900 pl-4 my-4">
          &ldquo;{RESEARCH_JOURNEY_CLOSING.quote}&rdquo;
        </blockquote>

        <div className="mt-6 pt-5 border-t border-slate-100">
          <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-3">
            Core Fields of Investigation in Reliable &amp; Trustworthy AI
          </span>
          <div className="flex flex-wrap gap-2">
            {RESEARCH_JOURNEY_CLOSING.currentFocusAreas.map((area) => (
              <span
                key={area}
                className="px-3 py-1 rounded-md text-xs font-medium bg-slate-100 text-slate-800 border border-slate-200/80 hover:bg-blue-50 hover:text-blue-950 hover:border-blue-200 transition-colors"
              >
                {area}
              </span>
            ))}
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
