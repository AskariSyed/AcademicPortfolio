"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Clock, FileCheck2, ShieldCheck, Layers } from "lucide-react";
import { FadeIn, AnimatedNumber, HoverLift } from "@/components/ui/motion";

export default function FlagshipResearch() {
  return (
    <section id="flagship-research" className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <FadeIn direction="up" distance={20} className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-3">
            <Layers className="w-3.5 h-3.5 text-blue-800" />
            <span>Core Empirical Investigations</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Flagship Research Projects
          </h2>
          <p className="mt-3 text-base text-slate-650 leading-relaxed">
            Empirical investigations focused on visual recognition under environmental degradation and adaptation under generator distribution shift, complemented by formal algorithmic systems optimization.
          </p>
        </FadeIn>

        {/* Primary Computer Vision Trajectory (Projects 01 & 02) */}
        <div className="space-y-8">
          {/* Project 01: Environmental Domain Shift (Flagship CV) */}
          <FadeIn direction="up" delay={0.1} distance={24}>
            <div className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-lg hover:border-blue-900/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-900 text-white">
                    01 · Environmental Domain Shift
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Manuscript in Preparation · Target: MDPI Sensors</span>
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Flagship Computer Vision Project
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    <Link
                      href="/projects/task-aware-traffic-sign-classification"
                      className="hover:text-blue-900 transition-colors"
                    >
                      Task-Aware Multi-Stage Framework for Traffic Sign Classification under Snow-Degraded Conditions
                    </Link>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Investigates how visual perception systems maintain reliable classification when adverse weather obscures visual evidence. Severe snow introduces atmospheric scattering, contrast attenuation, and uneven geometric occlusions. The work examines a task-aware coordination between deep image restoration and classification heads to recover discriminative evidence prior to categorization.
                  </p>

                  {/* Narrative of FIT 2025 review & revision */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <span>Research Evolution &amp; Peer-Review Response</span>
                    </div>
                    <p className="text-slate-650 leading-relaxed">
                      Originally submitted to <strong>FIT 2025</strong> and rejected with incisive feedback regarding baseline depth and stage disentanglement. Rather than abandoning the investigation, I systematically revised the methodology—transitioning from a naive two-step sequence to a task-aware formulation with expanded ablations and feature-recovery analysis.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/projects/task-aware-traffic-sign-classification"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-all duration-200 shadow-xs active:scale-95"
                    >
                      <span>Explore Evidence-Driven Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Quantitative Evidence Cards */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-5 rounded-xl bg-blue-50/50 border border-blue-200/80 hover:bg-blue-50/80 transition-colors">
                    <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block mb-1">
                      Primary Benchmark Metric
                    </span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight font-mono">
                        <AnimatedNumber value={68.02} decimals={2} suffix="%" /> →{" "}
                        <AnimatedNumber value={87.34} decimals={2} suffix="%" className="text-blue-900" />
                      </span>
                    </div>
                    <p className="text-xs text-slate-650 mt-1.5">
                      Top-1 Accuracy on EfficientNet-B2 under severe snow degradation following task-aware multi-stage feature recovery.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <HoverLift lift={-2} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-slate-400 font-mono block text-[11px]">BENCHMARK</span>
                      <span className="font-bold text-slate-800 text-sm">BTSC Dataset</span>
                      <span className="text-slate-500 block text-[11px] mt-0.5">Controlled snow modeling</span>
                    </HoverLift>
                    <HoverLift lift={-2} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-slate-400 font-mono block text-[11px]">BACKBONE</span>
                      <span className="font-bold text-slate-800 text-sm">EfficientNet-B2</span>
                      <span className="text-slate-500 block text-[11px] mt-0.5">Compound scaling</span>
                    </HoverLift>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-650 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
                    <span>
                      Unpublished ablation configurations and private manuscript assets preserved for MDPI Sensors submission.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>

          {/* Project 02: Generator Distribution Shift (Few-Shot AIGD) */}
          <FadeIn direction="up" delay={0.15} distance={24}>
            <div className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-8 lg:p-10 shadow-xs hover:shadow-lg hover:border-blue-900/60 transition-all duration-300">
              <div className="flex flex-wrap items-center justify-between gap-3 mb-5">
                <div className="flex flex-wrap items-center gap-2.5">
                  <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
                    02 · Generator Distribution Shift
                  </span>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
                    <Clock className="w-3.5 h-3.5 text-amber-700" />
                    <span>Experimental Validation Ongoing · Preliminary Results</span>
                  </span>
                </div>
                <span className="text-xs font-mono text-slate-500">
                  Major Research Project
                </span>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                <div className="lg:col-span-7 space-y-4">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-extrabold tracking-tight text-slate-900 leading-tight">
                    <Link
                      href="/projects/fewshot-aigd-shift"
                      className="hover:text-blue-900 transition-colors"
                    >
                      Few-Shot Adaptation for AI-Generated Image Detection under Unseen Generator Distribution Shift
                    </Link>
                  </h3>

                  <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                    Deep detectors trained on specific generative architectures fail when exposed to images synthesized by previously unobserved generators. This project formulates detection under unseen generators as a distribution-shift challenge and investigates whether few-shot adaptation mechanisms can adapt representations with minimal target-domain supervision.
                  </p>

                  {/* Experimental Protocol Summary */}
                  <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-700 space-y-1.5">
                    <div className="font-semibold text-slate-900 flex items-center gap-1.5">
                      <span>Leave-Generator-Out Protocol &amp; Integrity Audit</span>
                    </div>
                    <p className="text-slate-650 leading-relaxed">
                      Evaluated under a strict leave-generator-out setup: <strong>Midjourney</strong> and <strong>Wukong</strong> are completely excluded from training and validation. Audited 11,000 images for zero duplicate paths and zero train/test overlap before running 50 experimental conditions across 5 shot levels (1, 5, 10, 25, 50) and 5 random seeds.
                    </p>
                  </div>

                  <div className="pt-2">
                    <Link
                      href="/projects/fewshot-aigd-shift"
                      className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-all duration-200 shadow-xs active:scale-95"
                    >
                      <span>Explore Evidence-Driven Case Study</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                  </div>
                </div>

                {/* Right Column: Quantitative Evidence Cards */}
                <div className="lg:col-span-5 space-y-3">
                  <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 hover:bg-slate-100/70 transition-colors">
                    <span className="text-xs font-mono font-bold text-slate-700 uppercase tracking-wider block mb-1">
                      Preliminary Mean ROC-AUC (Few-Shot)
                    </span>
                    <div className="space-y-1.5 text-xs sm:text-sm">
                      <div className="flex items-center justify-between font-mono py-1 border-b border-slate-200/70">
                        <span className="font-medium text-slate-700">Midjourney:</span>
                        <span className="font-bold text-slate-900">0.9064 (1-shot) → 0.9624 (50-shot)</span>
                      </div>
                      <div className="flex items-center justify-between font-mono py-1">
                        <span className="font-medium text-slate-700">Wukong:</span>
                        <span className="font-bold text-slate-900">0.9090 (1-shot) → 0.9620 (50-shot)</span>
                      </div>
                    </div>
                    <p className="text-[11px] text-slate-500 mt-2 italic">
                      *Results remain preliminary pending multi-seed baseline comparisons and paired statistical tests.
                    </p>
                  </div>

                  <div className="grid grid-cols-2 gap-3 text-xs">
                    <HoverLift lift={-2} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-slate-400 font-mono block text-[11px]">DATASET AUDIT</span>
                      <span className="font-bold text-slate-800 text-sm font-mono">
                        <AnimatedNumber value={11000} suffix=" Images" />
                      </span>
                      <span className="text-slate-500 block text-[11px] mt-0.5">0 duplicate / 0 overlap</span>
                    </HoverLift>
                    <HoverLift lift={-2} className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs">
                      <span className="text-slate-400 font-mono block text-[11px]">CONDITIONS</span>
                      <span className="font-bold text-slate-800 text-sm font-mono">
                        <AnimatedNumber value={50} suffix=" Runs" />
                      </span>
                      <span className="text-slate-500 block text-[11px] mt-0.5">5 shot levels × 5 seeds</span>
                    </HoverLift>
                  </div>

                  <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-650 flex items-start gap-2">
                    <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>
                      Maintained in private repository; claims calibrated strictly to verified preliminary evidence.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>

        {/* Visual Separation for Algorithmic Systems / Optimization Project */}
        <FadeIn direction="up" delay={0.2} distance={20} className="mt-14 pt-10 border-t-2 border-dashed border-slate-200">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-2">
            <div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block">
                Algorithmic Systems &amp; Optimization
              </span>
              <p className="text-xs text-slate-500 mt-0.5">
                Complementary research in discrete optimization and concurrency-aware systems modeling (visually separated from the visual AI trajectory).
              </p>
            </div>
            <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-slate-100 text-slate-700 border border-slate-200">
              Discrete Optimization
            </span>
          </div>

          {/* Project 03: Decentralized Greedy Interview Scheduling */}
          <div className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6 sm:p-8 hover:bg-white hover:border-slate-300 hover:shadow-md transition-all duration-300">
            <div className="flex flex-wrap items-center justify-between gap-3 mb-4">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-800 text-white">
                  03 · Algorithmic Systems / Optimization
                </span>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                  <FileCheck2 className="w-3.5 h-3.5 text-blue-700" />
                  <span>Submitted Manuscript · HITE 2026</span>
                </span>
              </div>
              <span className="text-xs font-mono text-slate-500">
                COMSATS University Islamabad
              </span>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
              <div className="lg:col-span-8 space-y-3">
                <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-slate-900 leading-tight">
                  <Link
                    href="/projects/decentralized-greedy-interview-scheduling"
                    className="hover:text-blue-900 transition-colors"
                  >
                    Decentralized Greedy Scheduling for Interview Allocation at Job Fairs
                  </Link>
                </h3>

                <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
                  Formulates interview allocation as a constrained two-sided temporal scheduling problem where each assignment consumes availability simultaneously from both candidate and company queues. Evaluates greedy allocation strategies, conflict-handling mechanisms, and database-level validation to prevent scheduling collisions under concurrent requests.
                </p>

                <div className="p-3.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 space-y-1">
                  <span className="font-semibold text-slate-900 block">
                    Origin &amp; Clarification of Research vs. Deployed Software:
                  </span>
                  <p className="text-slate-650 leading-relaxed">
                    This research originated from operational challenges encountered while deploying the <strong>CUI Wah Job Fair Portal</strong> (which is deployed in production). The research manuscript evaluates the heuristic scheduling algorithm under controlled experimental workloads, rather than claiming the heuristic itself is production-ready.
                  </p>
                </div>

                <div className="pt-2">
                  <Link
                    href="/projects/decentralized-greedy-interview-scheduling"
                    className="group inline-flex items-center gap-2 text-xs font-semibold text-blue-900 hover:underline"
                  >
                    <span>View Algorithmic Systems Case Study</span>
                    <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>

              <div className="lg:col-span-4 space-y-3 text-xs">
                <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-2 shadow-2xs">
                  <span className="font-mono text-slate-400 font-bold block text-[11px]">CORE MECHANICS</span>
                  <ul className="space-y-1 text-slate-650">
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Coupled two-sided availability constraints</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Greedy allocation with conflict pruning</span>
                    </li>
                    <li className="flex items-start gap-1.5">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>Relational concurrency validation</span>
                    </li>
                  </ul>
                </div>

                <div className="p-3 rounded-lg bg-white border border-slate-200 text-[11px] text-slate-500 shadow-2xs">
                  <span className="font-semibold text-slate-700 block mb-0.5">Authors:</span>
                  <span>M. H. Askari, S. Huma, S. Zafar, A. Ahmed, Dr. K. Iqbal, Dr. M. Bilal</span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
