"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Compass, ShieldAlert, GitMerge } from "lucide-react";
import { motion } from "framer-motion";
import { RESEARCH_IDENTITY } from "@/data/research";
import { FadeIn, StaggerContainer, StaggerItem, HoverLift } from "@/components/ui/motion";

export default function ResearchTrajectorySummary() {
  return (
    <section className="py-14 sm:py-18 bg-slate-50/60 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn direction="up" distance={20} className="max-w-3xl mb-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-3">
            <Compass className="w-3.5 h-3.5 text-blue-800" />
            <span>Intellectual Development</span>
          </div>
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
            Research Trajectory &amp; Narrative
          </h2>
          <p className="mt-3 text-base text-slate-650 leading-relaxed">
            Transitioning from software engineering foundations to empirical computer vision, methodological peer-review revision, and learning under distribution shift.
          </p>
        </FadeIn>

        {/* Trajectory Linear Stepper (Compact & Clean) */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-2xs space-y-6">
          <div className="flex items-center justify-between">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Progression Flow
            </span>
            <span className="text-xs text-slate-400 font-mono">
              2022 — Present
            </span>
          </div>

          {/* Animated Connecting Timeline Bar */}
          <div className="relative">
            <motion.div
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, ease: [0.21, 0.47, 0.32, 0.98] }}
              style={{ originX: 0 }}
              className="hidden lg:block absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-blue-900 via-blue-600 to-sky-400 -mt-2 z-0"
            />

            <StaggerContainer
              delayChildren={0.1}
              staggerChildren={0.06}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 relative z-10"
            >
              {RESEARCH_IDENTITY.trajectory.map((stage, idx) => (
                <StaggerItem key={stage}>
                  <HoverLift
                    lift={-3}
                    className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex flex-col justify-between hover:bg-blue-50/50 hover:border-blue-300 hover:shadow-xs transition-all duration-200 h-full cursor-default"
                  >
                    <span className="text-[10px] font-mono font-bold text-blue-900 mb-1">
                      0{idx + 1}
                    </span>
                    <span className="text-xs font-semibold text-slate-800 leading-snug">
                      {stage}
                    </span>
                  </HoverLift>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>

          {/* Intellectual Bridge: Environmental Corruption vs Generator Distribution Shift */}
          <FadeIn direction="up" delay={0.2} distance={16} className="mt-6 pt-6 border-t border-slate-100 grid grid-cols-1 md:grid-cols-2 gap-6 items-start">
            <HoverLift lift={-2} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2 hover:bg-white hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase">
                <ShieldAlert className="w-4 h-4 text-blue-900" />
                <span>Environmental Domain Shift</span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed">
                Adverse weather like snow severely degrades optical signals through scattering and occlusion. The research question is whether task-aware restoration can recover discriminative evidence prior to classification.
              </p>
            </HoverLift>

            <HoverLift lift={-2} className="p-5 rounded-xl bg-slate-50/70 border border-slate-200 space-y-2 hover:bg-white hover:border-slate-300 transition-all">
              <div className="flex items-center gap-2 text-xs font-mono font-bold text-slate-700 uppercase">
                <GitMerge className="w-4 h-4 text-blue-900" />
                <span>Generator Distribution Shift</span>
              </div>
              <p className="text-xs text-slate-650 leading-relaxed">
                Detectors encounter synthetic images produced by unseen generative models. The research question is whether parameter-efficient few-shot adaptation can adjust representations to unseen generators.
              </p>
            </HoverLift>
          </FadeIn>

          {/* Unifying Question (Carefully worded, not forcing identical mechanisms) */}
          <FadeIn direction="up" delay={0.25} distance={12} className="p-4 rounded-xl bg-blue-50/40 border border-blue-200/80 text-xs sm:text-sm text-slate-800 leading-relaxed">
            <p className="font-serif italic">
              &ldquo;While physical weather corruption and synthetic artifact shifts involve distinct technical mechanisms, both demonstrate that models degrade when operational distributions diverge from training distributions. My research direction studies how visual AI models can evaluate degraded evidence and adapt reliably.&rdquo;
            </p>
          </FadeIn>

          <div className="flex justify-end pt-2">
            <Link
              href="/research"
              className="group inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 hover:underline"
            >
              <span>Read Full Research Agenda &amp; Questions</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
