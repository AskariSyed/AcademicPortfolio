import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  HelpCircle,
  Lightbulb,
  Cpu,
  Database,
  Layers,
  Sparkles,
  CheckCircle2,
  Clock,
  ShieldCheck,
  FileCode2,
  TrendingUp,
  Lock,
  ArrowRight,
  GitBranch,
  FileSpreadsheet,
  AlertCircle,
  Compass,
} from "lucide-react";

interface FewShotAigdCaseStudyProps {
  project: Project;
}

export default function FewShotAigdCaseStudy({ project }: FewShotAigdCaseStudyProps) {
  const data = project.researchCaseStudy;
  if (!data) return null;

  return (
    <article className="space-y-16">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-blue-900/20 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-900 text-white">
              RESEARCH CASE STUDY · {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
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
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-serif italic border-l-3 border-blue-900 pl-4 py-1 bg-blue-50/25">
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

        {/* Academic Action CTAs (No public repo links) */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#research-question"
            className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
          >
            Research Overview
          </a>
          <a
            href="#experimental-results"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            View Preliminary Results
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100/70 transition-colors"
          >
            Contact for Research Discussion
          </Link>
        </div>
      </section>

      {/* 2. Research Question */}
      <section id="research-question" className="scroll-mt-24">
        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/60 border border-blue-200/80 space-y-4 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Central Research Question</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">
            &ldquo;{data.researchQuestion}&rdquo;
          </h2>

          <p className="text-sm sm:text-base text-slate-700 leading-relaxed border-t border-blue-200/60 pt-3">
            {data.questionContext}
          </p>
        </div>
      </section>

      {/* 3. Research Motivation & Conceptual Diagram */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Significance
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Why This Problem Matters
          </h2>
        </div>

        <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
          {data.motivation}
        </p>

        {/* Conceptual Visual Flow */}
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
          <div className="flex items-center justify-between mb-4 border-b border-slate-200 pb-2">
            <span className="text-xs font-mono font-bold text-slate-700 uppercase">
              Generator Distribution Shift &amp; Adaptation Pipeline
            </span>
            <span className="text-[11px] font-mono text-slate-400">
              Methodological Workflow
            </span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-2.5 text-center">
            {[
              { title: "Known Generators", role: "Training Sources" },
              { title: "Model Training", role: "Base Empirical Optimization" },
              { title: "Pretrained Detector", role: "Fixed Representation" },
              { title: "Unseen Generator", role: "Distribution Shift" },
              { title: "Few-Shot Support", role: "K-shot Labeled Examples" },
              { title: "Model Adaptation", role: "Target Alignment" },
              { title: "Improved Detection", role: "Reliable Inference" },
            ].map((step, idx) => (
              <div
                key={step.title}
                className="p-3 rounded-lg bg-white border border-slate-200 shadow-2xs flex flex-col justify-between"
              >
                <div>
                  <span className="text-[10px] font-mono font-bold text-blue-900 block mb-0.5">
                    0{idx + 1}
                  </span>
                  <span className="text-xs font-bold text-slate-900 block leading-tight">
                    {step.title}
                  </span>
                </div>
                <span className="text-[10px] text-slate-500 font-mono mt-1">
                  {step.role}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Detection Backbone */}
      <section className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
        <div className="flex items-center gap-3 mb-3">
          <div className="w-9 h-9 rounded-lg bg-blue-900 text-white flex items-center justify-center">
            <Cpu className="w-5 h-5" />
          </div>
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
              Core Architecture
            </span>
            <h3 className="text-lg font-bold text-slate-900">
              Detection Backbone: {data.backbone.name}
            </h3>
          </div>
        </div>
        <p className="text-sm text-slate-700 leading-relaxed">
          {data.backbone.description}
        </p>
      </section>

      {/* 5. Research Dataset */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Data Architecture
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Dataset ({data.dataset.total.toLocaleString()} Images)
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            Curated evaluation archive balancing natural photographic distribution with multi-generator synthetic artifacts.
          </p>
        </div>

        {/* Dataset Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-600">
              <tr>
                <th className="px-5 py-3">Source</th>
                <th className="px-5 py-3">Type</th>
                <th className="px-5 py-3">Experimental Role</th>
                <th className="px-5 py-3 text-right">Image Count</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              {data.dataset.sources.map((s) => (
                <tr key={s.source} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3 font-semibold text-slate-900">
                    {s.source}
                  </td>
                  <td className="px-5 py-3">
                    <span
                      className={`inline-block px-2 py-0.5 rounded text-xs font-medium ${
                        s.type === "Natural Images"
                          ? "bg-emerald-50 text-emerald-900 border border-emerald-200"
                          : "bg-blue-50 text-blue-900 border border-blue-200"
                      }`}
                    >
                      {s.type}
                    </span>
                  </td>
                  <td className="px-5 py-3 text-xs font-mono text-slate-600">
                    {s.role}
                  </td>
                  <td className="px-5 py-3 text-right font-mono font-semibold text-slate-900">
                    {s.images.toLocaleString()}
                  </td>
                </tr>
              ))}
              <tr className="bg-slate-50/80 font-bold border-t-2 border-slate-300">
                <td className="px-5 py-3 text-slate-900" colSpan={3}>
                  Total Curated Dataset Size
                </td>
                <td className="px-5 py-3 text-right font-mono text-blue-950 text-base">
                  {data.dataset.total.toLocaleString()}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 6. Leave-Generator-Out Protocol */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Experimental Rigor
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Leave-Generator-Out Evaluation Protocol
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.leaveGeneratorOut.description}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block mb-2">
              Training Distribution (In-Distribution)
            </span>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.leaveGeneratorOut.trainingGenerators.map((gen) => (
                <span
                  key={gen}
                  className="px-2.5 py-1 rounded bg-white text-slate-800 text-xs font-medium border border-slate-200"
                >
                  {gen}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-600 leading-relaxed">
              Model learns representations strictly over these six generators. Neither Midjourney nor Wukong appears in any parameter update step.
            </p>
          </div>

          <div className="p-6 rounded-xl bg-blue-50/50 border border-blue-200">
            <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block mb-2">
              Unseen Target Distribution (Out-of-Distribution Shift)
            </span>
            <div className="flex flex-wrap gap-2 mb-3">
              {data.leaveGeneratorOut.unseenGenerators.map((gen) => (
                <span
                  key={gen}
                  className="px-3 py-1 rounded bg-blue-900 text-white text-xs font-bold shadow-2xs"
                >
                  {gen}
                </span>
              ))}
            </div>
            <p className="text-xs text-slate-700 leading-relaxed">
              Exclusively held out for zero-shot testing and few-shot adaptation benchmarking. Tests authentic generalization to unknown synthesis pipelines.
            </p>
          </div>
        </div>
      </section>

      {/* 7. Experimental Data Split */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Experimental Data Split Allocation
        </h3>
        <p className="text-xs sm:text-sm text-slate-650">
          {data.dataSplit.description}
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3">
          {[
            { label: "Training Split", count: data.dataSplit.training, desc: "Base detector training" },
            { label: "Validation Split", count: data.dataSplit.validation, desc: "In-domain early stopping" },
            { label: "Unseen-Gen Test", count: data.dataSplit.unseenTest, desc: "Target shift evaluation" },
            { label: "Real Test", count: data.dataSplit.realTest, desc: "Natural baseline audit" },
            { label: "Adaptation Support", count: data.dataSplit.adaptationSupport, desc: "Pool for few-shot draws" },
          ].map((split) => (
            <div
              key={split.label}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs text-center"
            >
              <span className="text-xs font-bold text-slate-800 block mb-1">
                {split.label}
              </span>
              <span className="text-xl font-black font-mono text-blue-900">
                {split.count.toLocaleString()}
              </span>
              <span className="text-[10px] text-slate-500 block mt-1">
                {split.desc}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* 8. Few-Shot Experiment: 50 Conditions */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Experimental Matrix
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Few-Shot Adaptation Matrix (50 Experimental Conditions)
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.fewShotConditions.description}
          </p>
        </div>

        {/* Visual Equation Card */}
        <div className="p-6 rounded-xl bg-slate-900 text-white shadow-sm flex flex-col sm:flex-row items-center justify-around gap-4 text-center">
          <div>
            <span className="text-2xl sm:text-3xl font-black font-mono text-blue-300">2</span>
            <span className="text-xs text-slate-300 block">Unseen Generators</span>
          </div>
          <span className="text-xl text-slate-500 font-mono">×</span>
          <div>
            <span className="text-2xl sm:text-3xl font-black font-mono text-blue-300">5</span>
            <span className="text-xs text-slate-300 block">Shot Levels (1, 5, 10, 25, 50)</span>
          </div>
          <span className="text-xl text-slate-500 font-mono">×</span>
          <div>
            <span className="text-2xl sm:text-3xl font-black font-mono text-blue-300">5</span>
            <span className="text-xs text-slate-300 block">Seeds (100, 200, 300, 400, 500)</span>
          </div>
          <span className="text-xl text-slate-500 font-mono">=</span>
          <div className="bg-blue-800/80 px-4 py-2 rounded-lg border border-blue-600">
            <span className="text-2xl sm:text-3xl font-black font-mono text-white">50</span>
            <span className="text-xs text-blue-200 block font-semibold">Total Experimental Runs</span>
          </div>
        </div>
      </section>

      {/* 9. Adaptation Strategies */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Methodological Comparison
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Adaptation Strategies Under Investigation
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {data.adaptationStrategies.map((strat, i) => (
            <div
              key={strat.id}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-2">
                  <span className="text-xs font-mono font-bold text-blue-900">
                    STRATEGY {i === 0 ? "A" : "B"}
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-100 text-slate-600">
                    Comparative Ablation
                  </span>
                </div>
                <h3 className="text-lg font-bold text-slate-900">
                  {strat.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed mt-2">
                  {strat.description}
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100 text-xs font-mono text-blue-950 font-semibold bg-slate-50 p-2.5 rounded">
                Pipeline: {strat.visual}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 10. Evaluation Metrics */}
      <section className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
        <h3 className="text-base font-bold text-slate-900">
          Evaluation Metrics &amp; Statistical Assessment
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs">
          <div>
            <span className="font-mono font-bold uppercase text-slate-500 block mb-2">
              Primary Metrics
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.evaluationMetrics.primary.map((m) => (
                <span
                  key={m}
                  className="px-2.5 py-1 rounded bg-white text-slate-800 font-medium border border-slate-200"
                >
                  {m}
                </span>
              ))}
            </div>
          </div>

          <div>
            <span className="font-mono font-bold uppercase text-slate-500 block mb-2">
              Statistical Analyses
            </span>
            <div className="flex flex-wrap gap-1.5">
              {data.evaluationMetrics.statistical.map((s) => (
                <span
                  key={s}
                  className="px-2.5 py-1 rounded bg-white text-slate-800 font-medium border border-slate-200"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 11. Preliminary Experimental Results (Verified numbers only) */}
      <section id="experimental-results" className="scroll-mt-24 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
                Empirical Observations
              </span>
              <span className="px-2 py-0.2 rounded text-[10px] font-mono font-bold bg-amber-50 text-amber-900 border border-amber-200">
                {data.preliminaryResults.badge}
              </span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mt-1">
              Preliminary Experimental Results ({data.preliminaryResults.metric})
            </h2>
          </div>
        </div>

        {/* Results Table */}
        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-600">
              <tr>
                <th className="px-5 py-3">Unseen Generator</th>
                {data.preliminaryResults.columns.map((col) => (
                  <th key={col} className="px-5 py-3 text-right">
                    {col}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 font-mono text-xs sm:text-sm">
              {data.preliminaryResults.rows.map((row) => (
                <tr key={row.generator} className="hover:bg-slate-50/60 transition-colors">
                  <td className="px-5 py-3 font-sans font-bold text-slate-900">
                    {row.generator}
                  </td>
                  {row.scores.map((score, idx) => (
                    <td key={idx} className="px-5 py-3 text-right text-slate-800 font-semibold">
                      {score.toFixed(4)}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Responsive Scientific Chart */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-2">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
              Mean ROC-AUC Across Few-Shot Conditions
            </span>
            <div className="flex items-center gap-4 text-xs font-mono">
              <span className="flex items-center gap-1.5 text-blue-900 font-semibold">
                <span className="w-3 h-0.5 bg-blue-900 inline-block" />
                <span>Midjourney</span>
              </span>
              <span className="flex items-center gap-1.5 text-slate-700 font-semibold">
                <span className="w-3 h-0.5 bg-slate-700 border-t border-dashed inline-block" />
                <span>Wukong</span>
              </span>
            </div>
          </div>

          {/* SVG Line Plot */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox="0 0 700 240"
              className="w-full min-w-[540px] h-auto select-none"
              xmlns="http://www.w3.org/2000/svg"
            >
              {/* Axes and Grid */}
              <line x1="60" y1="20" x2="60" y2="190" stroke="#cbd5e1" strokeWidth="1" />
              <line x1="60" y1="190" x2="660" y2="190" stroke="#cbd5e1" strokeWidth="1" />

              {/* Y Grid lines (0.90 to 0.98) */}
              {[0.90, 0.92, 0.94, 0.96, 0.98].map((val) => {
                // Map 0.90 -> 180, 0.98 -> 30
                const y = 180 - ((val - 0.90) / 0.08) * 150;
                return (
                  <g key={val}>
                    <line x1="60" y1={y} x2="660" y2={y} stroke="#f1f5f9" strokeWidth="1" />
                    <text x="50" y={y + 4} textAnchor="end" className="text-[10px] font-mono fill-slate-400">
                      {val.toFixed(2)}
                    </text>
                  </g>
                );
              })}

              {/* X points mapping: 1-shot (100), 5-shot (220), 10-shot (360), 25-shot (500), 50-shot (640) */}
              {/* Coordinates for Midjourney: 0.9064, 0.9459, 0.9571, 0.9588, 0.9624 */}
              {/* Coordinates for Wukong:     0.9090, 0.9509, 0.9542, 0.9610, 0.9620 */}
              <polyline
                fill="none"
                stroke="#1e3a8a"
                strokeWidth="2.5"
                points="100,168 220,94 360,73 500,70 640,63"
              />
              {/* Midjourney points */}
              {[[100, 168], [220, 94], [360, 73], [500, 70], [640, 63]].map(([x, y], i) => (
                <circle key={i} cx={x} cy={y} r="4" fill="#1e3a8a" stroke="#ffffff" strokeWidth="1.5" />
              ))}

              <polyline
                fill="none"
                stroke="#475569"
                strokeWidth="2"
                strokeDasharray="4 3"
                points="100,163 220,84 360,78 500,66 640,64"
              />
              {/* Wukong points */}
              {[[100, 163], [220, 84], [360, 78], [500, 66], [640, 64]].map(([x, y], i) => (
                <rect key={i} x={x - 3} y={y - 3} width="6" height="6" fill="#475569" stroke="#ffffff" strokeWidth="1" />
              ))}

              {/* X Axis Labels */}
              {[
                { shot: "1-shot", x: 100 },
                { shot: "5-shot", x: 220 },
                { shot: "10-shot", x: 360 },
                { shot: "25-shot", x: 500 },
                { shot: "50-shot", x: 640 },
              ].map((s) => (
                <text
                  key={s.shot}
                  x={s.x}
                  y="210"
                  textAnchor="middle"
                  className="text-[11px] font-mono font-medium fill-slate-600"
                >
                  {s.shot}
                </text>
              ))}

              <text x="370" y="232" textAnchor="middle" className="text-[10px] font-mono fill-slate-400">
                Number of Support Examples (Shot Level)
              </text>
            </svg>
          </div>

          <p className="text-xs text-slate-600 italic bg-slate-50 p-3 rounded-lg border border-slate-100">
            {data.preliminaryResults.chartNote}
          </p>
        </div>
      </section>

      {/* 12. Data Integrity & Leakage Validation */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-800 block mb-1">
            Methodological Integrity
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Data Integrity &amp; Leakage Validation
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.dataIntegrity.auditNote}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
              Duplicate Paths Audit
            </span>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Total Rows Audited:</span>
                <span className="font-mono font-bold text-slate-900">
                  {data.dataIntegrity.duplicatePaths.total.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Unique Paths:</span>
                <span className="font-mono font-bold text-slate-900">
                  {data.dataIntegrity.duplicatePaths.unique.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1 text-emerald-700 font-semibold">
                <span>Duplicated Paths:</span>
                <span className="font-mono">{data.dataIntegrity.duplicatePaths.duplicated}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
              Train/Test Exact Path Overlap
            </span>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Training Paths:</span>
                <span className="font-mono font-bold text-slate-900">
                  {data.dataIntegrity.trainTestOverlap.train.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-slate-500">Testing Paths:</span>
                <span className="font-mono font-bold text-slate-900">
                  {data.dataIntegrity.trainTestOverlap.test.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1 text-emerald-700 font-semibold">
                <span>Exact Path Overlap:</span>
                <span className="font-mono">{data.dataIntegrity.trainTestOverlap.overlap}</span>
              </div>
            </div>
          </div>

          <div className="p-5 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-2">
              Sampled Path Existence
            </span>
            <div className="space-y-1 text-xs">
              <div className="flex justify-between">
                <span className="text-slate-500">Paths Sample-Checked:</span>
                <span className="font-mono font-bold text-slate-900">
                  {data.dataIntegrity.sampledPathExistence.checked.toLocaleString()}
                </span>
              </div>
              <div className="flex justify-between border-t border-slate-100 pt-1 text-emerald-700 font-semibold">
                <span>Verified Existing:</span>
                <span className="font-mono">
                  {data.dataIntegrity.sampledPathExistence.existing.toLocaleString()} /{" "}
                  {data.dataIntegrity.sampledPathExistence.checked.toLocaleString()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 13. Research Validation Status */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Milestone Tracking
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Validation Status
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            Transparent breakdown of completed research checkpoints and actively progressing statistical evaluations.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-emerald-700 mb-3 flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-emerald-600" />
              <span>Completed Checkpoints ({data.validationTimeline.completed.length})</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {data.validationTimeline.completed.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-emerald-600 font-bold shrink-0">✓</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="p-6 rounded-xl bg-slate-50 border border-slate-200">
            <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-amber-800 mb-3 flex items-center gap-1.5">
              <Clock className="w-4 h-4 text-amber-600" />
              <span>Actively In Progress ({data.validationTimeline.inProgress.length})</span>
            </h3>
            <ul className="space-y-2 text-xs text-slate-700">
              {data.validationTimeline.inProgress.map((item, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-amber-600 font-bold shrink-0">○</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 14. Experimental Artifacts (Internal only, no private links) */}
      <section className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4">
        <div className="flex items-center justify-between border-b border-slate-100 pb-3">
          <div className="flex items-center gap-2">
            <FileSpreadsheet className="w-4 h-4 text-blue-900" />
            <h3 className="text-base font-bold text-slate-900">
              Cataloged Experimental Artifacts
            </h3>
          </div>
          <span className="text-[11px] font-mono text-slate-400">
            Internal Validation Schema
          </span>
        </div>

        <p className="text-xs text-slate-600">
          {data.experimentalArtifacts.note}
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
          {data.experimentalArtifacts.sampleInternalFilenames.map((fname) => (
            <div
              key={fname}
              className="p-2.5 rounded bg-slate-50 border border-slate-200/80 font-mono text-xs text-slate-700 flex items-center gap-2"
            >
              <FileCode2 className="w-3.5 h-3.5 text-slate-400 shrink-0" />
              <span className="truncate">{fname}</span>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Research Interpretation */}
      <section className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
        <h3 className="text-base font-bold text-slate-900">
          What the Experiments Are Exploring
        </h3>
        <p className="text-xs text-slate-650">
          Empirical evaluation addresses these specific hypotheses without claiming prematurely unvalidated causal conclusions:
        </p>
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-2 text-xs text-slate-700">
          {data.researchInterpretation.map((point, idx) => (
            <li key={idx} className="flex items-start gap-2 p-2.5 rounded bg-slate-50 border border-slate-100">
              <span className="text-blue-900 font-bold shrink-0">•</span>
              <span>{point}</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 16. Connection to Broader Research */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Intellectual Synthesis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            How This Research Fits My Broader Interests
          </h2>
          <p className="text-sm text-slate-650 mt-1">
            {data.broaderConnection.narrative}
          </p>
        </div>

        <div className="p-6 rounded-xl bg-blue-50/40 border border-blue-200 space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs sm:text-sm">
            <div className="p-4 rounded-lg bg-white border border-blue-200">
              <strong className="text-slate-900 block mb-1">
                Traffic Sign Project (Environmental Shift)
              </strong>
              <span className="text-slate-650">{data.broaderConnection.environmentalShift}</span>
            </div>
            <div className="p-4 rounded-lg bg-white border border-blue-200">
              <strong className="text-slate-900 block mb-1">
                FewShot-AIGD-Shift (Generator Shift)
              </strong>
              <span className="text-slate-650">{data.broaderConnection.generatorShift}</span>
            </div>
          </div>

          <div className="pt-2">
            <span className="text-xs font-mono font-bold text-blue-950 uppercase block mb-2">
              Unifying Research Trajectory:
            </span>
            <div className="flex flex-wrap items-center gap-2">
              {data.broaderConnection.trajectory.map((item, idx) => (
                <React.Fragment key={item}>
                  <span className="px-2.5 py-1 rounded bg-white text-slate-800 text-xs font-semibold border border-blue-200 shadow-2xs">
                    {item}
                  </span>
                  {idx < data.broaderConnection.trajectory.length - 1 && (
                    <span className="text-blue-900 font-mono text-xs">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 17. Future Research Questions */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Future Research Questions (Prospective Inquiries)
        </h3>
        <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
          {data.futureResearchQuestions.map((q, idx) => (
            <li
              key={idx}
              className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs flex items-start gap-2.5 font-serif italic"
            >
              <Compass className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
              <span>&ldquo;{q}&rdquo;</span>
            </li>
          ))}
        </ul>
      </section>

      {/* 18. Supervisor Relevance & Academic CTAs */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block mb-1">
            Advising Synergy
          </span>
          <h3 className="text-xl font-bold">
            Why This Project Matters for My Graduate Research
          </h3>
          <p className="mt-2 text-xs sm:text-sm text-slate-300 leading-relaxed">
            &ldquo;{data.supervisorRelevance.statement}&rdquo;
          </p>
        </div>

        <div className="flex flex-wrap gap-1.5">
          {data.supervisorRelevance.connectedFields.map((field) => (
            <span
              key={field}
              className="text-[11px] font-mono px-2.5 py-1 rounded bg-slate-800 text-slate-200 border border-slate-700"
            >
              {field}
            </span>
          ))}
        </div>

        {/* Private Repo Status Notification */}
        <div className="p-4 rounded-lg bg-slate-800/80 border border-slate-700 text-xs text-slate-300 flex items-start gap-2.5">
          <Lock className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
          <div>
            <strong className="text-white block mb-0.5">Source Code Confidentiality:</strong>
            The experimental codebase is currently maintained in a private repository while validation and manuscript preparation are ongoing.
          </div>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/research"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
          >
            Explore My Research
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
