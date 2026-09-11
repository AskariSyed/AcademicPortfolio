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

      {/* 2. Distinction & Trajectory Context Banner */}
      <section className="rounded-2xl border border-amber-200 bg-amber-50/60 p-6 sm:p-8 space-y-4">
        <div className="flex items-center justify-between gap-3 flex-wrap">
          <div className="flex items-center gap-2.5">
            <Shield className="w-5 h-5 text-amber-700 shrink-0" />
            <h2 className="text-base sm:text-lg font-bold text-amber-950">
              Manuscript Under Review & System Scope Distinction
            </h2>
          </div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider px-2.5 py-1 rounded bg-amber-100 text-amber-900 border border-amber-300">
            Algorithmic Systems · Secondary Focus
          </span>
        </div>
        <p className="text-sm sm:text-base text-amber-900/90 leading-relaxed">
          {data.researchStatusStatement}
        </p>
        <div className="p-3.5 rounded-xl bg-white/80 border border-amber-200/80 text-xs text-amber-900 leading-relaxed">
          <strong className="font-semibold text-amber-950">Important Distinction:</strong>{" "}
          The <em>research algorithm</em> is an empirical heuristic model evaluated under controlled workloads submitted to HITE 2026 (detailed formulations and numerical metrics withheld during review). It should not be conflated with the <em>deployed software platform</em> (CUI Wah Job Fair Portal), which is the production software system handling multi-tenant concurrency and operational interview workflows.
        </div>
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs font-mono text-amber-800">
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Venue: HITE 2026
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Status: Submitted Manuscript
          </span>
          <span className="px-2.5 py-1 rounded bg-amber-100 border border-amber-200 font-semibold">
            Formulations & Numerical Metrics: Withheld During Review
          </span>
        </div>
      </section>

      {/* 01. Research Problem */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Section 01</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Research Problem
            </h2>
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

      {/* 02. Research Question */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-indigo-50 text-indigo-600">
            <Activity className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-indigo-700">Section 02</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Research Question
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-indigo-200 bg-indigo-50/40 p-6 sm:p-8 space-y-3">
          <div className="text-base sm:text-lg font-bold text-indigo-950 leading-snug">
            Can a decentralized, greedy heuristic model resolve dense two-sided interview schedules with low computational latency while preserving schedule feasibility and slot fairness under constrained recruiter-candidate windows?
          </div>
          <p className="text-xs sm:text-sm text-indigo-900/80 leading-relaxed">
            Specifically, the investigation tests whether decentralized local greedy passes can approximate centralized scheduling efficacy without requiring exponential-time exact solvers or exposing private scheduling constraints across competing recruiting firms.
          </p>
        </div>
      </section>

      {/* 03. Method */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-slate-100 text-slate-800">
            <GitFork className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">Section 03</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Method
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.approachSummary}
          </p>

          {/* 3-stage conceptual flow */}
          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Algorithmic Formulation Flow
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

          {/* Formal modeling & bounds notice */}
          <div className="grid md:grid-cols-2 gap-4 pt-2">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <Binary className="w-4 h-4 text-slate-700" />
                <h4 className="text-sm font-bold text-slate-900">Mathematical Formulation</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.formalModelingStatement}
              </p>
              <p className="text-[11px] font-mono text-slate-500 pt-1">
                {data.formalModelingNotice}
              </p>
            </div>

            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <Activity className="w-4 h-4 text-slate-700" />
                <h4 className="text-sm font-bold text-slate-900">Algorithmic Scaling</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.algorithmicAnalysisStatement}
              </p>
              <p className="text-[11px] font-mono text-slate-500 pt-1">
                Theoretical bounds and complexity guarantees detailed in submitted manuscript.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 04. Experimental Setup */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-teal-50 text-teal-600">
            <Layers className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700">Section 04</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Experimental Setup
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.evaluationStatement}
          </p>

          <div className="space-y-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Evaluation Methodology Phases
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

          <div className="grid sm:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 block">
                Workload Variations
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Controlled permutations across applicant pool sizes, recruiter interview slots, and varying conflict densities.
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-teal-700 block">
                Conflict Models
              </span>
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                Two-sided scheduling collisions: candidate multi-invitations, overlapping recruiter breaks, and rigid temporal boundaries.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 05. Results & Review Disclosure */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-amber-50 text-amber-700">
            <Shield className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-700">Section 05</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Results & Review Disclosure
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <div className="p-4 rounded-xl bg-slate-50 border border-dashed border-slate-300 text-xs sm:text-sm text-slate-700 flex items-start gap-3 font-sans">
            <AlertCircle className="w-5 h-5 text-amber-600 shrink-0 mt-0.5" />
            <div className="space-y-1.5">
              <p className="font-semibold text-slate-900">
                Peer Review Redaction Notice
              </p>
              <p className="text-slate-600 leading-relaxed">
                Because this work is currently under formal peer review at <strong>HITE 2026</strong>, numerical benchmark tables, execution time graphs, and exact comparative percentage metrics are withheld in compliance with academic publishing ethics.
              </p>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-purple-600" />
                <h4 className="text-sm font-bold text-slate-900">Fairness Consideration</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.fairnessStatement}
              </p>
            </div>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-600" />
                <h4 className="text-sm font-bold text-slate-900">Concurrency Model</h4>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                {data.concurrencyStatement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 06. What I Learned: Research Algorithm vs Deployed Software */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-emerald-50 text-emerald-600">
            <Compass className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700">Section 06</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              What I Learned: Research Algorithm vs. Deployed Software
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.realWorldNarrative}
          </p>

          <div className="grid md:grid-cols-2 gap-4 pt-1">
            <div className="p-4 rounded-xl bg-blue-50/60 border border-blue-200 space-y-2">
              <div className="flex items-center gap-2">
                <Database className="w-4 h-4 text-blue-700" />
                <h4 className="text-sm font-bold text-blue-950">Deployed Software Implementation</h4>
              </div>
              <p className="text-xs text-blue-900/80 leading-relaxed">
                The <strong>CUI Wah Job Fair Portal</strong> is a complete web system (ASP.NET Core / React / PostgreSQL) architected to manage real-time multi-tenant registrations, role permissions, and user interactions during campus recruitment. This is production software engineering.
              </p>
            </div>

            <div className="p-4 rounded-xl bg-purple-50/60 border border-purple-200 space-y-2">
              <div className="flex items-center gap-2">
                <GitFork className="w-4 h-4 text-purple-700" />
                <h4 className="text-sm font-bold text-purple-950">Research Algorithm Contribution</h4>
              </div>
              <p className="text-xs text-purple-900/80 leading-relaxed">
                The <strong>submitted manuscript</strong> studies the abstract two-sided matching heuristic itself under varying constraint densities. The algorithm is an empirical heuristic model, not claimed to be a globally optimal exact solver.
              </p>
            </div>
          </div>

          <div className="space-y-3 pt-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Project Evolution Trajectory
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

      {/* 07. Limitations */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-rose-50 text-rose-600">
            <AlertCircle className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-rose-700">Section 07</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Limitations
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            {data.scopeStatement}
          </p>
          <ul className="space-y-2 text-xs sm:text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Heuristic Optimality Gap:</strong> The greedy algorithm does not guarantee global theoretical optimality compared to exhaustive integer linear programming solvers.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Dynamic Replanning Under Cancellations:</strong> Real-time re-allocation when interviews overrun or participants drop out dynamically is currently constrained.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-rose-500 font-bold">•</span>
              <span><strong>Domain Specificity:</strong> Evaluated specifically on job fair temporal structures; generalization to generalized multi-resource scheduling requires further study.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* 08. Next Step */}
      <section className="space-y-4">
        <div className="flex items-center gap-3">
          <div className="p-2 rounded-lg bg-blue-50 text-blue-600">
            <ArrowRight className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-700">Section 08</span>
            <h2 className="text-xl sm:text-2xl font-black tracking-tight text-slate-900">
              Next Step
            </h2>
          </div>
        </div>

        <div className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-4">
          <p className="text-sm text-slate-700 leading-relaxed">
            Future research investigations for this algorithmic line:
          </p>
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

      {/* Trajectory Distinction & Navigation Footer */}
      <section className="rounded-2xl border border-slate-200 bg-slate-50/60 p-6 sm:p-8 space-y-6">
        <div className="space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <Shield className="w-4 h-4 text-slate-600" />
            <span>Research Alignment Notice</span>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
            While this work showcases algorithmic thinking and full-stack software system delivery, my primary academic research focus remains <strong>Robust Computer Vision and Distribution Shift</strong>. Algorithmic optimization and distributed systems serve as secondary technical foundations.
          </p>
        </div>

        <div className="pt-4 border-t border-slate-200 flex flex-wrap items-center justify-between gap-4">
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
              <span>Explore Research Output</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>
      </section>
    </article>
  );
}
