import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  HelpCircle,
  Clock,
  Cpu,
  Layers,
  Sparkles,
  ShieldAlert,
  ArrowRight,
  Database,
  GitFork,
  Activity,
  Compass,
  AlertCircle,
  Calendar,
  Lock,
  RefreshCw,
  Zap,
  Split,
  ChevronRight,
} from "lucide-react";

interface SchedulingResearchCaseStudyProps {
  project: Project;
}

export default function SchedulingResearchCaseStudy({
  project,
}: SchedulingResearchCaseStudyProps) {
  const data = project.schedulingCaseStudy;
  if (!data) return null;

  return (
    <article className="space-y-16">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              ALGORITHMIC RESEARCH · {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>{project.status}</span>
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            {project.shortTitle}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-blue-900 font-mono mt-1.5">
            {data.subtitle}
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-serif italic border-l-3 border-slate-900 pl-4 py-1 bg-slate-50">
            &ldquo;{project.summary}&rdquo;
          </p>
        </div>

        {/* Research Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Academic Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#research-question"
            className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
          >
            Research Overview
          </a>
          <a
            href="#algorithm-formulation"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Algorithm Formulation
          </a>
          <a
            href="#preliminary-evaluation"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Preliminary Evaluation
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            Contact for Research Discussion
          </Link>
        </div>
      </section>

      {/* 2. Research Status Callout (Initial Phase) */}
      <section className="p-5 sm:p-6 rounded-xl bg-amber-50/60 border border-amber-200/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Research Status — Initial Phase</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          {data.researchStatusStatement}
        </p>
      </section>

      {/* 3. Research Question */}
      <section id="research-question" className="scroll-mt-24 space-y-6">
        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Central Research Question</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">
            &ldquo;{data.researchQuestion}&rdquo;
          </h2>

          <p className="text-sm text-slate-700 border-t border-blue-200/60 pt-3">
            In job fairs and high-throughput recruitment events, allocating candidate interviews is a constrained two-sided matching problem governed by simultaneous resource availability and temporal non-overlap requirements.
          </p>
        </div>

        {/* Two-Sided Constraint Matrix */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
            Systemic Two-Sided Scheduling Constraints
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {data.twoSidedConstraints.map((item, idx) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold text-slate-900">
                    {item.title}
                  </span>
                  <span className="text-[10px] font-mono text-slate-400">
                    C0{idx + 1}
                  </span>
                </div>
                <p className="text-xs text-slate-650 leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Motivation ("Why This Problem Matters") */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Problem Formulation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Why This Problem Matters
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {data.motivation}
        </p>

        {/* Conceptual Coupling Diagram */}
        <div className="p-6 rounded-xl bg-slate-900 text-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-700 pb-2 text-xs font-mono text-slate-300">
            <span>TWO-SIDED RESOURCE ENTANGLEMENT</span>
            <span>Joint Dependency Model</span>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 py-4">
            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 text-center w-48">
              <span className="text-xs font-mono text-blue-300 block mb-1">Entity A</span>
              <strong className="text-sm text-white block">Company Recruiter</strong>
              <span className="text-[11px] text-slate-400 mt-1 block">Queue of Candidates</span>
            </div>

            <div className="flex flex-col items-center">
              <span className="text-xs font-mono font-bold text-amber-300 px-3 py-1 rounded bg-slate-800 border border-slate-700">
                Interview Session (c, s)
              </span>
              <span className="text-[11px] font-mono text-slate-400 mt-1.5">
                Mutual Slot: [t, t + d + β)
              </span>
            </div>

            <div className="p-4 rounded-lg bg-slate-800 border border-slate-700 text-center w-48">
              <span className="text-xs font-mono text-blue-300 block mb-1">Entity B</span>
              <strong className="text-sm text-white block">Graduating Student</strong>
              <span className="text-[11px] text-slate-400 mt-1 block">Multiple Acceptances</span>
            </div>
          </div>

          <p className="text-xs text-slate-300 text-center italic border-t border-slate-800 pt-3">
            A scheduling decision locks both the student and company simultaneously, creating cascading downstream blocking for subsequent requests.
          </p>
        </div>
      </section>

      {/* 5. Core Algorithm: Greedy Scheduling Approach */}
      <section id="algorithm-formulation" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Methodology
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Greedy Scheduling with Conflict-Jumping
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.greedyAlgorithm.overview}
          </p>
        </div>

        {/* Step-by-Step Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
          {data.greedyAlgorithm.pipelineSteps.map((step) => (
            <div
              key={step.step}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-blue-900 block">
                  STEP {step.step}
                </span>
                <h3 className="text-sm font-bold text-slate-900">
                  {step.title}
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed pt-1">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        {/* Priority Rule & Conflict-Jumping Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700 block">
              Priority Ordering Heuristic
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {data.greedyAlgorithm.priorityRuleNote}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50/50 border border-blue-200 space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block">
              Conflict-Jumping Search Mechanics
            </span>
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              {data.greedyAlgorithm.conflictJumpingNote}
            </p>
          </div>
        </div>
      </section>

      {/* 6. Formal Mathematical Model */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Mathematical Formulation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Formal Problem Model
          </h2>
        </div>

        {/* Mathematical Definitions */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-600">
              <tr>
                <th className="px-5 py-3 w-40">Notation</th>
                <th className="px-5 py-3">Formal Mathematical Meaning</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {data.formalModel.definitions.map((def) => (
                <tr key={def.symbol} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-2.5 font-mono font-semibold text-blue-950">
                    {def.symbol}
                  </td>
                  <td className="px-5 py-2.5">{def.meaning}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Constraints Cards */}
        <div className="space-y-3">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
            Core Feasibility Constraints
          </span>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {data.formalModel.constraints.map((c) => (
              <div
                key={c.id}
                className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-xs font-mono font-bold text-blue-900">
                      CONSTRAINT {c.id}
                    </span>
                  </div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {c.name}
                  </h3>
                  <div className="my-2.5 p-2.5 rounded bg-slate-50 border border-slate-200 font-mono text-[11px] text-slate-800 break-words leading-relaxed">
                    {c.formula}
                  </div>
                </div>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {c.explanation}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Complexity Analysis */}
      <section className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Theoretical Analysis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Algorithmic Complexity &amp; Runtime Behavior
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="p-4 rounded-lg bg-white border border-slate-200">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">
              Priority Sorting
            </span>
            <div className="text-base font-mono font-bold text-slate-900">
              O(R log R)
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Pre-ordering request batch
            </span>
          </div>

          <div className="p-4 rounded-lg bg-white border border-slate-200">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">
              Iteration Conflict Check
            </span>
            <div className="text-base font-mono font-bold text-slate-900">
              O(k_c + k_s)
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Per candidate search step
            </span>
          </div>

          <div className="p-4 rounded-lg bg-white border border-slate-200">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">
              Implemented Worst-Case
            </span>
            <div className="text-xs font-mono font-bold text-blue-900 break-all">
              O(R log R + 5000R(k_c + k_s))
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Enforced 5,000-step ceiling
            </span>
          </div>

          <div className="p-4 rounded-lg bg-white border border-slate-200">
            <span className="text-[11px] font-mono font-bold text-slate-400 uppercase block mb-1">
              Observed Empirical Scaling
            </span>
            <div className="text-base font-mono font-bold text-emerald-800">
              ~ N^1.08
            </div>
            <span className="text-[11px] text-slate-500 mt-1 block">
              Log-log regression exponent
            </span>
          </div>
        </div>

        <div className="p-4 rounded-lg bg-white border border-amber-200 text-xs text-slate-700 space-y-1">
          <strong className="text-slate-900 block font-semibold">
            Methodological Rigor Distinction:
          </strong>
          <p>{data.complexityAnalysis.distinctionNote}</p>
        </div>
      </section>

      {/* 8. Preliminary Experimental Evaluation */}
      <section id="preliminary-evaluation" className="scroll-mt-24 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
                Simulation Study
              </span>
              <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200">
                Preliminary
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Preliminary Experimental Evaluation
            </h2>
          </div>
          <span className="text-xs font-mono bg-slate-100 px-3 py-1 rounded text-slate-600 border border-slate-200">
            {data.empiricalEvaluation.scenarioType}
          </span>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed">
          {data.empiricalEvaluation.overview} Current synthetic benchmarks evaluate workloads spanning{" "}
          <strong>{data.empiricalEvaluation.testedRequestRange}</strong>.
        </p>

        {/* Evaluation Factors Grid */}
        <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
            Parameters &amp; Factors Under Investigation
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2 text-xs text-slate-700">
            {data.empiricalEvaluation.investigatedFactors.map((factor, i) => (
              <div
                key={i}
                className="p-2.5 rounded bg-slate-50 border border-slate-100 flex items-start gap-2"
              >
                <span className="text-blue-900 font-bold">•</span>
                <span>{factor}</span>
              </div>
            ))}
          </div>
        </div>

        {/* 9. Buffer Experiment */}
        <div className="space-y-4">
          <div className="flex items-center justify-between border-b border-slate-200 pb-2">
            <h3 className="text-lg font-bold text-slate-900">
              Effect of Interview Buffer Duration (β)
            </h3>
            <span className="text-xs font-mono text-slate-500">
              Range: {data.bufferExperiment.testedRange}
            </span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 items-center">
            {/* Table */}
            <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
              <table className="w-full text-left text-xs sm:text-sm">
                <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-600">
                  <tr>
                    <th className="px-4 py-3">Buffer (β)</th>
                    <th className="px-4 py-3">Duration Meaning</th>
                    <th className="px-4 py-3 text-right">Scheduling Success</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-slate-700 font-mono text-xs">
                  {data.bufferExperiment.observations.map((obs) => (
                    <tr
                      key={obs.bufferSeconds}
                      className={
                        obs.bufferSeconds === 90
                          ? "bg-blue-50/50 font-bold text-blue-950"
                          : "hover:bg-slate-50/60"
                      }
                    >
                      <td className="px-4 py-2.5">{obs.bufferSeconds}s</td>
                      <td className="px-4 py-2.5 font-sans text-slate-600">
                        {obs.bufferSeconds === 0
                          ? "Zero buffer (theoretical maximum)"
                          : obs.bufferSeconds === 90
                          ? "System baseline default (1.5 min)"
                          : obs.bufferSeconds === 600
                          ? "Maximum test buffer (10 min)"
                          : `${obs.bufferSeconds / 60} min transition`}
                      </td>
                      <td className="px-4 py-2.5 text-right font-bold text-slate-900">
                        {obs.successRate.toFixed(1)}%
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Visual Bar/Curve representation */}
            <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
              <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
                Capacity Contraction Curve (β = 0s → 600s)
              </span>
              <div className="space-y-2.5">
                {data.bufferExperiment.observations.map((obs) => (
                  <div key={obs.bufferSeconds} className="space-y-1">
                    <div className="flex justify-between text-xs font-mono">
                      <span className="text-slate-600">β = {obs.bufferSeconds}s</span>
                      <span className="font-bold text-slate-900">{obs.successRate}%</span>
                    </div>
                    <div className="w-full h-2.5 bg-slate-100 rounded-full overflow-hidden">
                      <div
                        className={`h-full transition-all ${
                          obs.bufferSeconds === 90 ? "bg-blue-900" : "bg-slate-500"
                        }`}
                        style={{ width: `${obs.successRate}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
              <p className="text-xs text-slate-650 pt-2 leading-relaxed">
                {data.bufferExperiment.analysis}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 10. Scheduling Priority & Fairness */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Fairness Dynamics
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Scheduling Priority &amp; Fairness Implications
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.fairnessAnalysis.currentRuleDescription}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Preliminary Empirical Observations
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {data.fairnessAnalysis.observations.map((obs, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold shrink-0">•</span>
                  <span>{obs}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
              Alternative Fairness Policies (Future Research)
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {data.fairnessAnalysis.futurePolicies.map((pol, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-blue-900 font-bold shrink-0">→</span>
                  <span>{pol}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Database-Level Conflict Revalidation */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Systems Concurrency
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Database-Level Conflict Revalidation
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.concurrencyModel.problemStatement}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-900 text-white shadow-sm space-y-4">
          <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs font-mono text-slate-400">
            <span>OPTIMISTIC CONCURRENCY PIPELINE</span>
            <span>ACID Transaction Verification</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 pt-2">
            {data.concurrencyModel.pipeline.map((step, idx) => (
              <div
                key={idx}
                className="p-3.5 rounded-lg bg-slate-800/90 border border-slate-700 space-y-1 text-xs"
              >
                <span className="text-[10px] font-mono text-blue-300 font-bold block">
                  PHASE 0{idx + 1}
                </span>
                <span className="text-slate-200 font-medium leading-relaxed block">
                  {step}
                </span>
              </div>
            ))}
          </div>

          <p className="text-xs text-slate-300 pt-2 border-t border-slate-800 leading-relaxed">
            {data.concurrencyModel.guaranteeNote}
          </p>
        </div>
      </section>

      {/* 12. Walk-In Interview Support */}
      <section className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          Walk-In Interview Operational Handling
        </h3>
        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
          {data.walkInSupport.description}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-1 text-xs text-slate-700">
          {data.walkInSupport.prerequisites.map((req, i) => (
            <div
              key={i}
              className="p-2.5 rounded bg-white border border-slate-200 flex items-start gap-2"
            >
              <span className="text-blue-900 font-bold">✓</span>
              <span>{req}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 13. Real-World System Connection */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            System Genesis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            From Algorithm to Real-World System
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.realWorldConnection.narrative}
          </p>
        </div>

        {/* Conceptual Evolution Chain */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
            Research Evolution Pipeline
          </span>
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            {data.realWorldConnection.evolutionSteps.map((step, idx) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded bg-slate-50 text-slate-800 border border-slate-200">
                  {step}
                </span>
                {idx < data.realWorldConnection.evolutionSteps.length - 1 && (
                  <span className="text-slate-400 font-mono">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 14. Current Limitations */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <AlertCircle className="w-5 h-5 text-amber-700" />
          <span>Current Limitations &amp; Scope Disclosures</span>
        </h3>
        <p className="text-xs text-slate-600">
          In keeping with academic research ethics, current algorithmic and empirical bounds are explicitly delineated:
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1 text-xs text-slate-700">
          {data.limitations.map((lim, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2"
            >
              <span className="text-amber-700 font-bold shrink-0">•</span>
              <span>{lim}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Future Research Directions */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-900" />
          <span>Future Research Directions (Prospective Inquiries)</span>
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs text-slate-700">
          {data.futureDirections.map((dir, idx) => (
            <div
              key={idx}
              className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2 font-serif italic"
            >
              <span className="text-blue-900 font-bold shrink-0 font-sans not-italic">
                {idx + 1}.
              </span>
              <span>&ldquo;{dir}&rdquo;</span>
            </div>
          ))}
        </div>
      </section>

      {/* 16. Supervisor Relevance & Academic CTAs */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block mb-1">
            Research Alignment
          </span>
          <h3 className="text-xl font-bold">
            Relevance for Graduate Research &amp; Laboratory Synergies
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            This investigation illustrates my interest in algorithm design, complexity bounds, and real-world system modeling under coupled constraints—complementing my empirical machine learning research with formal optimization rigor.
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {[
            "Discrete Optimization",
            "Scheduling Algorithms",
            "Intelligent Systems",
            "Distributed Software Systems",
            "Fairness in Allocation",
            "Empirical Algorithmics",
          ].map((field) => (
            <span
              key={field}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700"
            >
              {field}
            </span>
          ))}
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/research"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
          >
            Explore Research Agenda
          </Link>
          <Link
            href="/experience"
            className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600 transition-colors"
          >
            Academic Experience
          </Link>
          <Link
            href="/cv"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Academic CV
          </Link>
        </div>
      </section>
    </article>
  );
}
