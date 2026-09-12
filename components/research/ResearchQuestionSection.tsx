"use client";

import React from "react";
import { HelpCircle, Sparkles, ArrowRight, ShieldCheck } from "lucide-react";
import Link from "next/link";
import { FadeIn } from "@/components/ui/motion";

export default function ResearchQuestionSection() {
  return (
    <section className="py-12 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <FadeIn
          direction="up"
          distance={20}
          className="rounded-2xl border-2 border-blue-900/20 bg-gradient-to-br from-blue-50/40 via-white to-slate-50 p-6 sm:p-8 lg:p-10 shadow-xs space-y-6"
        >
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80">
              <HelpCircle className="w-3.5 h-3.5 text-blue-800" />
              <span>Core Research Inquiry</span>
            </div>
            <span className="text-xs font-mono font-medium text-slate-500">
              Foundational Motivation
            </span>
          </div>

          <div className="max-w-4xl space-y-3">
            <span className="text-xs font-mono font-bold tracking-wider text-blue-900 uppercase block">
              Research Question
            </span>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-bold text-slate-900 leading-snug">
              &ldquo;How can intelligent systems remain reliable when the distribution or quality of the evidence they encounter changes?&rdquo;
            </h2>
            <p className="text-base sm:text-lg text-slate-700 leading-relaxed pt-2">
              This central question currently motivates my empirical work across <strong>robust computer vision</strong>, <strong>distribution shift</strong>, <strong>domain adaptation</strong>, and <strong>few-shot learning</strong>. Whether visual inputs are physically degraded by adverse environmental conditions or shifted by unobserved generative models, my focus is investigating where models fail and developing principled adaptation strategies.
            </p>
          </div>

          {/* Core Areas & Progression insight */}
          <div className="pt-4 border-t border-slate-200/80 grid grid-cols-1 md:grid-cols-12 gap-6 items-center">
            <div className="md:col-span-8 flex flex-wrap gap-2">
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-blue-950 border border-blue-200 shadow-2xs">
                Robust Computer Vision
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-blue-950 border border-blue-200 shadow-2xs">
                Distribution Shift
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-blue-950 border border-blue-200 shadow-2xs">
                Domain Adaptation
              </span>
              <span className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-blue-950 border border-blue-200 shadow-2xs">
                Few-Shot Learning
              </span>
            </div>

            <div className="md:col-span-4 flex md:justify-end">
              <Link
                href="/research"
                className="group inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 hover:underline"
              >
                <span>Explore Research Framework</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
