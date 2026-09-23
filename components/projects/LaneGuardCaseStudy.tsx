import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Project } from "@/data/projects";
import {
  ExternalLink,
  Cpu,
  AlertTriangle,
  Info,
  CheckCircle2,
  Sliders,
  ShieldAlert,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface LaneGuardCaseStudyProps {
  project: Project;
}

export default function LaneGuardCaseStudy({ project }: LaneGuardCaseStudyProps) {
  const data = project.laneGuardCaseStudy;
  if (!data) return null;

  return (
    <article className="space-y-12">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              {project.category} · {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 text-emerald-900 border border-emerald-300/80">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-700" />
              <span>{project.status || "Completed Benchmark Study"}</span>
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            Monocular Perception
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-blue-900 font-mono mt-1.5">
            Classical Algorithmic Vision vs. Lightweight Deep Segmentation · TuSimple Benchmark
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-750 font-serif italic border-l-3 border-blue-900 pl-4 py-1.5 bg-blue-50/20 leading-relaxed">
            &ldquo;{project.summary}&rdquo;
          </p>
        </div>

        {/* Action Links & Source Code */}
        <div className="pt-2 border-t border-slate-100 flex flex-wrap items-center gap-3">
          <a
            href={data.githubUrl || project.repositoryUrl || "https://github.com/AskariSyed/Lane_Guard"}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-2xs"
          >
            <GithubIcon className="w-4 h-4" />
            <span>View Source on GitHub</span>
            <ExternalLink className="w-3 h-3 opacity-60" />
          </a>
          <span className="text-xs text-slate-500 font-mono">
            OpenCV · PyTorch · YOLOv8-Seg · YOLO26n-Seg · TuSimple
          </span>
        </div>

        {/* Quick Nav Anchors */}
        <div className="pt-2 flex flex-wrap items-center gap-2 text-xs font-semibold">
          <a href="#key-results" className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors">Key Results</a>
          <a href="#technical-overview" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Pipelines</a>
          <a href="#dataset" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Dataset</a>
          <a href="#models" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Learned Models</a>
          <a href="#benchmark" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Full Benchmark</a>
          <a href="#methodology" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Methodology</a>
          <a href="#qualitative" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Qualitative Visual</a>
          <a href="#failure-modes" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Failure Modes</a>
          <a href="#ldws" className="px-3 py-1.5 rounded-md bg-amber-50 text-amber-900 hover:bg-amber-100 transition-colors">LDWS Scope</a>
        </div>
      </section>

      {/* 2. Key Results Section */}
      <section id="key-results" className="scroll-mt-24 space-y-4">
        <div className="flex items-center justify-between">
          <div>
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
              Section 01 · Benchmark Summary
            </span>
            <h2 className="text-2xl font-bold text-slate-900">
              Key Results
            </h2>
          </div>
          <span className="text-xs font-mono text-slate-500 bg-slate-100 px-2.5 py-1 rounded hidden sm:inline-block">
            NVIDIA Tesla T4 · Held-Out Test
          </span>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-3.5">
          {data.keyStats.map((stat, idx) => (
            <div
              key={idx}
              className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200/90 shadow-2xs hover:border-blue-900/40 transition-all flex flex-col justify-between"
            >
              <span className="text-[11px] sm:text-xs font-mono font-semibold uppercase tracking-wider text-slate-500 mb-1 block">
                {stat.label}
              </span>
              <div className="text-2xl sm:text-3xl font-extrabold tracking-tight text-slate-900 my-1 font-mono">
                {stat.value}
              </div>
              <p className="text-[11px] text-slate-600 leading-snug">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 3. Technical Overview: Classical vs Learned Pipelines */}
      <section id="technical-overview" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 02 · System Architecture
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Technical Overview
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-6">
          <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
            {data.overview.description}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-2">
            {/* Classical Pipeline */}
            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <Sliders className="w-4 h-4 text-blue-900" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Deterministic Classical Pipeline
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Hand-crafted feature extraction and geometric modeling running sequentially on monocular video frames:
              </p>
              <ul className="space-y-1.5 pt-1">
                {data.overview.classicalPipeline.map((step, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-750">
                    <span className="text-blue-900 font-mono font-bold shrink-0">{String(idx + 1).padStart(2, "0")}.</span>
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learned Pipelines */}
            <div className="p-5 rounded-xl bg-slate-50/80 border border-slate-200 space-y-3">
              <div className="flex items-center gap-2">
                <Cpu className="w-4 h-4 text-blue-900" />
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
                  Learned Segmentation Pipelines
                </h3>
              </div>
              <p className="text-xs text-slate-600 leading-relaxed">
                Deep neural segmentation models trained on custom targets and evaluated under an identical benchmark harness:
              </p>
              <ul className="space-y-2 pt-1">
                {data.overview.learnedPipelines.map((point, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-xs text-slate-750">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-900 mt-0.5 shrink-0" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. Dataset Specification & Protocol Disclosure */}
      <section id="dataset" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 03 · Benchmark Ground Truth
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            TuSimple Dataset &amp; Target Derivation
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-5">
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Resolution</span>
              <span className="text-sm font-bold text-slate-900 font-mono block mt-0.5">1280 × 720</span>
              <span className="text-[10px] text-slate-500">Forward highway</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Annotated Frames</span>
              <span className="text-sm font-bold text-slate-900 font-mono block mt-0.5">3,626</span>
              <span className="text-[10px] text-slate-500">Project dataset source</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Train / Val Split</span>
              <span className="text-sm font-bold text-slate-900 font-mono block mt-0.5">600 / 150</span>
              <span className="text-[10px] text-slate-500">Frame-level subsets</span>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Held-Out Test</span>
              <span className="text-sm font-bold text-blue-950 font-mono block mt-0.5">2,782</span>
              <span className="text-[10px] text-slate-500">Official test set</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            The project benchmarks monocular perception on imagery from the <strong>TuSimple Lane Detection Benchmark</strong>, consisting of 1280 × 720 forward-facing highway scenes under clear/dry daytime driving conditions.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
            {/* Derived corridor note */}
            <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200 text-xs text-amber-950 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider font-mono text-[11px] text-amber-900">
                <AlertTriangle className="w-3.5 h-3.5 text-amber-700 shrink-0" />
                <span>Derived Corridor Target Disclosure</span>
              </div>
              <p className="leading-relaxed">
                {data.dataset.derivedCorridorNote}
              </p>
            </div>

            {/* Split limitation note */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-700 space-y-1.5">
              <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider font-mono text-[11px] text-slate-650">
                <Info className="w-3.5 h-3.5 text-slate-500 shrink-0" />
                <span>Temporal Split Limitation</span>
              </div>
              <p className="leading-relaxed">
                {data.dataset.splitLimitationNote}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Learned Segmentation Models */}
      <section id="models" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 04 · Neural Backbones
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Learned Segmentation Models
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {data.models.map((model, idx) => (
            <div
              key={idx}
              className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-slate-900 font-mono">
                    {model.name}
                  </h3>
                  <span className="text-xs font-mono font-semibold px-2 py-0.5 rounded bg-blue-50 text-blue-900 border border-blue-200">
                    640 × 640 input
                  </span>
                </div>
                <p className="text-xs text-slate-600 mb-4">
                  {model.notes}
                </p>

                <div className="grid grid-cols-2 gap-2.5 text-xs">
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-500 block font-mono">Fused Parameters</span>
                    <span className="font-bold text-slate-900 font-mono text-sm">{model.fusedParams}</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-500 block font-mono">Compute (GFLOPs)</span>
                    <span className="font-bold text-slate-900 font-mono text-sm">{model.gflops}</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-500 block font-mono">Training Schedule</span>
                    <span className="font-semibold text-slate-800">{model.epochs} epochs · batch {model.batchSize}</span>
                  </div>
                  <div className="p-2.5 rounded bg-slate-50 border border-slate-200">
                    <span className="text-[10px] uppercase text-slate-500 block font-mono">Evaluation Hardware</span>
                    <span className="font-semibold text-slate-800">NVIDIA Tesla T4</span>
                  </div>
                </div>
              </div>

              <div className="text-[11px] text-slate-500 pt-2 border-t border-slate-100 font-mono">
                Input: {model.inputResolution} · Hardware: {model.hardware}
              </div>
            </div>
          ))}
        </div>

        {/* Efficiency discussion */}
        <div className="p-4 rounded-xl bg-blue-50/50 border border-blue-200 text-xs sm:text-sm text-blue-950 leading-relaxed">
          <strong>Efficiency Comparison:</strong> {data.modelEfficiencyNote}
        </div>
      </section>

      {/* 6. Full Held-Out Evaluation Table */}
      <section id="benchmark" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 05 · Quantitative Benchmark
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Full Held-Out Evaluation
          </h2>
        </div>

        <div className="rounded-xl border border-slate-200 bg-white overflow-hidden shadow-2xs">
          <div className="p-4 sm:p-5 bg-slate-50/80 border-b border-slate-200">
            <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
              Both learned models were evaluated using the official TuSimple <code className="px-1.5 py-0.5 bg-white border border-slate-300 rounded font-mono text-xs text-slate-800">test_label.json</code> evaluation set with <strong>2,782 frames</strong> and a standardized evaluation manifest.
            </p>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-100/80 border-b border-slate-200 text-slate-700 font-mono text-[11px] sm:text-xs uppercase tracking-wider">
                <tr>
                  <th scope="col" className="py-3 px-4 sm:px-6">Metric</th>
                  <th scope="col" className="py-3 px-4 sm:px-6 text-right">YOLOv8n-seg</th>
                  <th scope="col" className="py-3 px-4 sm:px-6 text-right">YOLO26n-seg</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-mono">
                {data.benchmarkTable.map((row, idx) => (
                  <tr
                    key={idx}
                    className={
                      row.metric.includes("Latency") || row.metric.includes("Throughput")
                        ? "bg-blue-50/30 hover:bg-blue-50/50 transition-colors"
                        : "hover:bg-slate-50/60 transition-colors"
                    }
                  >
                    <td className="py-2.5 px-4 sm:px-6 font-sans font-medium text-slate-900">
                      {row.metric}
                    </td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-semibold text-slate-900">
                      {row.yolov8}
                    </td>
                    <td className="py-2.5 px-4 sm:px-6 text-right font-semibold text-slate-700">
                      {row.yolo26}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="p-4 bg-slate-50/60 border-t border-slate-200 text-xs text-slate-600 leading-relaxed">
            <span className="font-semibold text-slate-700">Benchmark Protocol Note:</span> {data.benchmarkProtocolNote}
          </div>
        </div>
      </section>

      {/* 7. Evaluation Methodology */}
      <section id="methodology" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 06 · Protocol &amp; Geometry
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Evaluation Methodology
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5 pb-2">
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Evaluation Scanline</span>
              <span className="text-sm font-bold text-slate-900 font-mono">y = {data.methodology.scanlineY} px</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Horizontal cut across 720p image coordinates</p>
            </div>
            <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200">
              <span className="text-[10px] font-mono uppercase text-slate-500 block">Vehicle / Image Center</span>
              <span className="text-sm font-bold text-slate-900 font-mono">x = {data.methodology.imageCenterX} px</span>
              <p className="text-[11px] text-slate-500 mt-0.5">Nominal ego-vehicle center axis in 1280w frame</p>
            </div>
          </div>

          <ul className="space-y-2.5">
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
              <span>{data.methodology.boundaryExtraction}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
              <span>{data.methodology.laneCenterCalculation}</span>
            </li>
            <li className="flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-blue-900 mt-0.5 shrink-0" />
              <span>{data.methodology.fallbackRule}</span>
            </li>
          </ul>

          <div className="p-3.5 rounded-lg bg-slate-100/70 border border-slate-200 text-xs text-slate-650">
            <span className="font-semibold text-slate-800">Composite Error Characterization:</span>{" "}
            {data.methodology.compositeMetricNote}
          </div>
        </div>
      </section>

      {/* 8. Qualitative Visual Comparison */}
      <section id="qualitative" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 07 · Visual Analysis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Qualitative Comparison
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            {data.qualitativeVisual.description}
          </p>

          <div className="rounded-lg overflow-hidden border border-slate-200 bg-slate-950">
            <Image
              src={data.qualitativeVisual.imagePath}
              alt="LaneGuard Qualitative Comparison Visual"
              width={1600}
              height={1200}
              className="w-full h-auto object-contain"
              priority
            />
          </div>

          <p className="text-xs text-slate-500 italic text-center">
            {data.qualitativeVisual.caption}
          </p>
        </div>
      </section>

      {/* 9. Observed Failure Modes */}
      <section id="failure-modes" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 08 · Empirical Analysis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Observed Failure Modes
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Classical Failures */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Classical CV Failure Modes
            </h3>
            <p className="text-xs text-slate-600">
              Deterministic geometry exhibits predictable breakdowns when visual edge cues or road geometry diverge:
            </p>
            <ul className="space-y-2 pt-1">
              {data.failureModes.classical.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-750">
                  <span className="text-amber-700 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Learned Failures */}
          <div className="p-5 sm:p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900">
              Learned Segmentation Failure Modes
            </h3>
            <p className="text-xs text-slate-600">
              Neural segmentation errors propagate downstream into heuristic extraction and fallback mechanisms:
            </p>
            <ul className="space-y-2 pt-1">
              {data.failureModes.learned.map((item, idx) => (
                <li key={idx} className="flex items-start gap-2 text-xs text-slate-750">
                  <span className="text-blue-900 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 text-center">
          Neither classical CV nor lightweight learned segmentation universally solves the monocular lane perception challenge; each paradigm presents distinct architectural and operational trade-offs.
        </div>
      </section>

      {/* 10. Heuristic Lane Departure Warning & Limitations */}
      <section id="ldws" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 block mb-1">
            Section 09 · Scope &amp; Safety Boundary
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Heuristic Lane Departure Warning (LDWS)
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-amber-50/50 border border-amber-200/90 shadow-2xs space-y-4">
          <p className="text-xs sm:text-sm text-amber-950 leading-relaxed">
            {data.ldws.description}
          </p>

          <div className="p-4 rounded-lg bg-white/90 border border-amber-200 space-y-2">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
              <ShieldAlert className="w-4 h-4 text-amber-700 shrink-0" />
              <span>Critical Engineering Limitations</span>
            </div>
            <ul className="space-y-1.5 text-xs text-amber-950/90 pt-1">
              {data.ldws.limitations.map((lim, idx) => (
                <li key={idx} className="flex items-start gap-2">
                  <span className="text-amber-700 font-bold shrink-0">✕</span>
                  <span>{lim}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* 11. Portfolio Role & Technologies */}
      <section className="space-y-4">
        <div className="p-6 rounded-xl bg-blue-50/40 border border-blue-200/80 shadow-2xs space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <Info className="w-4 h-4 text-blue-700 shrink-0" />
            <span>Portfolio Positioning</span>
          </div>
          <p className="text-xs sm:text-sm text-blue-950/90 leading-relaxed font-serif italic">
            &ldquo;{data.portfolioRole}&rdquo;
          </p>
        </div>

        {/* Technologies */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            Technologies &amp; Toolchain Employed
          </h3>
          <div className="flex flex-wrap gap-2">
            {project.technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 rounded-md text-xs font-semibold bg-slate-50 text-slate-800 border border-slate-200"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Navigation */}
      <div className="pt-6 border-t border-slate-200 flex items-center justify-between">
        <Link
          href="/projects"
          className="text-xs font-semibold text-slate-600 hover:text-slate-900"
        >
          ← All Projects
        </Link>
        <a
          href={data.githubUrl || "https://github.com/AskariSyed/Lane_Guard"}
          target="_blank"
          rel="noopener noreferrer"
          className="text-xs font-semibold text-blue-900 hover:underline inline-flex items-center gap-1"
        >
          <span>View LaneGuard Repository</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </article>
  );
}
