import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  Clock,
  ArrowRight,
  Database,
  GitFork,
  Activity,
  Compass,
  AlertCircle,
  FileCheck2,
  Users,
  Shield,
  Layers,
  Sparkles,
  ArrowUpRight,
  Binary,
  CheckCircle2,
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
    <article className="space-y-14">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              ALGORITHMIC RESEARCH · {project.year || 2026}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>{project.status || "Submitted Manuscript"}</span>
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
              <FileCheck2 className="w-3.5 h-3.5 text-blue-700" />
              <span>Submitted to HITE 2026</span>
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            {project.shortTitle || "Greedy Interview Scheduling"}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-black tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="mt-2 text-base sm:text-lg font-medium text-slate-600">
            {data.subtitle}
          </p>
        </div>

        {/* Authors Bar */}
        {data.authors && data.authors.length > 0 && (
          <div className="rounded-xl border border-slate-200 bg-slate-50/70 p-4">
            <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-slate-500 mb-2">
              <Users className="w-4 h-4 text-slate-600" />
              <span>Authors</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-2 gap-y-1.5 text-sm text-slate-800">
              {data.authors.map((author, idx) => (
                <React.Fragment key={author}>
                  <span
                    className={
                      author === "Muhammad Hassan Askari"
                        ? "font-semibold text-blue-700 underline decoration-blue-300 underline-offset-2"
                        : "font-medium text-slate-700"
                    }
                  >
                    {author}
                  </span>
                  {idx < (data.authors?.length ?? 0) - 1 && (
                    <span className="text-slate-400 select-none">·</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        )}

        {/* High-Level Abstract */}
        <div className="p-4 sm:p-5 rounded-xl bg-slate-50 border border-slate-200 text-sm sm:text-base text-slate-700 leading-relaxed italic">
          &ldquo;{project.summary}&rdquo;
        </div>

        {/* Broad Tags */}
        <div className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium px-2.5 py-1 rounded-md bg-slate-100 text-slate-700 border border-slate-200/80"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Academic Action Links */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs text-slate-600">
          <div className="flex items-center gap-2 font-mono">
            <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
            <span>Manuscript Under Review (HITE 2026)</span>
          </div>
          <div className="flex items-center gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-1.5 font-medium text-blue-600 hover:text-blue-800 transition-colors"
            >
              <span>View Publication Entry</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
            <span className="text-slate-300">|</span>
            <span className="font-mono text-slate-500 inline-flex items-center gap-1">
              <Database className="w-3.5 h-3.5 text-slate-400" />
              Private Repository
            </span>
          </div>
        </div>
      </section>

      {/* 2. Research Disclosure & Manuscript Status */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50/50 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2.5">
          <Shield className="w-5 h-5 text-amber-700 shrink-0" />
          <h2 className="text-base sm:text-lg font-bold text-amber-950">
            Research Disclosure & Manuscript Status
          </h2>
        </div>
        <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed">
          {data.researchStatusStatement}
        </p>
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-amber-800">
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Venue: HITE 2026
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Status: Submitted Manuscript
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Implementation & Results: Withheld
          </span>
        </div>
      </section>

      {/* 3. Research Problem & Motivation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Research Problem & Motivation
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-0.5">
              Two-Sided Temporal Allocation
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <div className="space-y-4 text-slate-700 text-sm sm:text-base leading-relaxed">
            <p className="font-medium text-slate-900">
              {data.motivation}
            </p>
            <p>
              Job-fair interview scheduling differs substantially from traditional single-resource scheduling.
              Each interview assignment simultaneously couples multiple operational entities under rigorous real-time constraints:
            </p>
            <div className="grid sm:grid-cols-2 gap-3 pt-2">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Coupled Resource Availability</span>
                <span className="text-slate-600 text-xs sm:text-sm">
                  Simultaneously involves candidate availability and company recruiting team timeframes.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Temporal Availability Constraints</span>
                <span className="text-slate-600 text-xs sm:text-sm">
                  Constrained by operating windows, discrete session intervals, and schedule boundaries.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Competing Commitments</span>
                <span className="text-slate-600 text-xs sm:text-sm">
                  Concurrent interview opportunities across multiple recruiting firms create scheduling conflicts.
                </span>
              </div>
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-sm space-y-1">
                <span className="font-bold text-slate-900 block">Transition Requirements</span>
                <span className="text-slate-600 text-xs sm:text-sm">
                  Temporal buffer intervals and mandatory transition periods between consecutive sessions.
                </span>
              </div>
            </div>
            <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-100 text-blue-950 text-sm">
              <p className="font-semibold text-xs uppercase tracking-wider text-blue-700 mb-1">
                Core Investigation
              </p>
              <p>{data.problemSummary}</p>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Research Approach */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Research Approach
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-0.5">
              Methodological Framework
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.approachSummary}
          </p>

          {/* 3-stage conceptual flow */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Conceptual Flow
            </span>
            <div className="grid sm:grid-cols-3 gap-3">
              {data.approachStages.map((stage, idx) => (
                <div
                  key={stage}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-7 h-7 rounded-full bg-slate-900 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block">Stage {idx + 1}</span>
                    <span className="font-bold text-sm text-slate-900">{stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 block">
                Priority Policy Investigation
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.priorityPolicyNote}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-600 block">
                Search Efficiency Strategies
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {data.searchStrategyNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Formal Modeling & Algorithmic Analysis */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Formal Modeling */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Binary className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-900">Formal Modeling</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                Problem Formulation
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.formalModelingStatement}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-dashed border-slate-300 text-xs font-mono text-slate-500 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
            <span>{data.formalModelingNotice}</span>
          </div>
        </div>

        {/* Algorithmic Analysis */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4 flex flex-col justify-between">
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-2">
              <div className="flex items-center gap-2">
                <Activity className="w-5 h-5 text-slate-700" />
                <h3 className="text-lg font-bold text-slate-900">Algorithmic Analysis</h3>
              </div>
              <span className="px-2.5 py-0.5 rounded text-[11px] font-mono font-semibold bg-slate-100 text-slate-600 border border-slate-200">
                Complexity & Scaling
              </span>
            </div>
            <p className="text-sm text-slate-600 leading-relaxed">
              {data.algorithmicAnalysisStatement}
            </p>
          </div>
          <div className="p-3 rounded-lg bg-slate-50 border border-dashed border-slate-300 text-xs font-mono text-slate-500 flex items-center gap-2">
            <AlertCircle className="w-4 h-4 text-slate-400 shrink-0" />
            <span>Detailed theoretical bounds reserved for submitted manuscript.</span>
          </div>
        </div>
      </section>

      {/* 6. Evaluation */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Evaluation
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-0.5">
              Empirical Methodology
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.evaluationStatement}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Evaluation Structure
            </span>
            <div className="grid sm:grid-cols-3 gap-3">
              {data.evaluationStages.map((stage, idx) => (
                <div
                  key={stage}
                  className="flex items-center gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200"
                >
                  <div className="w-7 h-7 rounded-full bg-teal-700 text-white font-mono text-xs font-bold flex items-center justify-center shrink-0">
                    0{idx + 1}
                  </div>
                  <div>
                    <span className="text-xs font-mono uppercase text-slate-400 block">Phase {idx + 1}</span>
                    <span className="font-bold text-sm text-slate-900">{stage}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs text-slate-500 flex items-center gap-2 font-mono">
            <Shield className="w-4 h-4 text-slate-400 shrink-0" />
            <span>
              Detailed datasets, numerical metrics, benchmark distributions, and statistical analyses remain private during review.
            </span>
          </div>
        </div>
      </section>

      {/* 7. Fairness & Concurrency Considerations */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Fairness */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Sparkles className="w-5 h-5 text-purple-600" />
            <h3 className="text-lg font-bold text-slate-900">Fairness Considerations</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {data.fairnessStatement}
          </p>
        </div>

        {/* Concurrency */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <div className="flex items-center gap-2">
            <Database className="w-5 h-5 text-blue-600" />
            <h3 className="text-lg font-bold text-slate-900">Concurrency Considerations</h3>
          </div>
          <p className="text-sm text-slate-600 leading-relaxed">
            {data.concurrencyStatement}
          </p>
          <div className="pt-1 flex items-center gap-2 text-xs font-mono text-slate-500">
            <span className="w-2 h-2 rounded-full bg-slate-400" />
            <span>Implementation maintained in Private Repository</span>
          </div>
        </div>
      </section>

      {/* 8. Operational Handling Note */}
      <section className="rounded-xl border border-slate-200 bg-slate-50/70 p-4 sm:p-5 text-xs sm:text-sm text-slate-600 flex items-center gap-3">
        <CheckCircle2 className="w-4 h-4 text-slate-500 shrink-0" />
        <span>{data.operationalStatement}</span>
      </section>

      {/* 9. From Algorithm to Real-World System & Research Evolution */}
      <section className="space-y-6">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              From Algorithm to Real-World System
            </h2>
            <p className="text-xs font-mono uppercase tracking-wider text-slate-500 mt-0.5">
              Engineering Genesis & Evolution
            </p>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.realWorldNarrative}
          </p>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Research Evolution
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs sm:text-sm font-semibold text-slate-800">
              {data.evolutionSteps.map((step, idx) => (
                <React.Fragment key={step}>
                  <div className="px-3 py-1.5 rounded-lg bg-slate-100 border border-slate-200 text-slate-800">
                    {step}
                  </div>
                  {idx < data.evolutionSteps.length - 1 && (
                    <ArrowRight className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 10. Current Scope & Future Directions */}
      <section className="grid md:grid-cols-2 gap-6">
        {/* Scope */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Current Scope</h3>
          <p className="text-sm text-slate-600 leading-relaxed">
            {data.scopeStatement}
          </p>
        </div>

        {/* Future Directions */}
        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <h3 className="text-lg font-bold text-slate-900">Future Research Directions</h3>
          <ul className="space-y-2.5 text-sm text-slate-600">
            {data.futureDirections.map((dir, idx) => (
              <li key={idx} className="flex items-start gap-2.5">
                <span className="font-mono text-xs font-bold text-blue-600 shrink-0 mt-0.5">
                  0{idx + 1}.
                </span>
                <span>{dir}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* 11. Graduate Research Alignment */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 space-y-4">
        <div className="flex items-center gap-2">
          <Compass className="w-5 h-5 text-blue-700" />
          <h3 className="text-base sm:text-lg font-bold text-slate-900">
            Graduate Research Alignment
          </h3>
        </div>
        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {data.graduateAlignmentStatement}
        </p>
        <div className="flex flex-wrap gap-2 pt-2">
          {[
            "Discrete Optimization",
            "Scheduling Algorithms",
            "Intelligent Systems",
            "Distributed Software Systems",
            "Fairness in Allocation",
            "Empirical Algorithmics",
          ].map((area) => (
            <span
              key={area}
              className="text-xs font-mono px-2.5 py-1 rounded bg-white text-slate-700 border border-slate-200 font-medium"
            >
              {area}
            </span>
          ))}
        </div>
      </section>

      {/* 12. Research Integrity & Navigation Footer */}
      <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <Shield className="w-4 h-4 text-slate-600" />
            <span>Research Integrity</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            This portfolio provides a high-level overview of the research while the manuscript is under review.
            Detailed algorithmic formulations, implementation mechanics, experimental configurations, numerical results,
            and manuscript-specific analyses are intentionally withheld until an appropriate publication stage.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 text-sm font-semibold text-slate-700 hover:text-slate-900 transition-colors"
          >
            <ArrowRight className="w-4 h-4 rotate-180" />
            <span>Back to All Projects</span>
          </Link>
          <div className="flex items-center gap-3">
            <Link
              href="/publications"
              className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-900 text-white text-xs sm:text-sm font-semibold hover:bg-slate-800 transition-colors"
            >
              <span>Explore Publications</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
