import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import SectionContainer from "@/components/layout/SectionContainer";
import PublicationCard from "@/components/publications/PublicationCard";
import { PUBLICATIONS } from "@/data/publications";
import { RESEARCH_DIRECTIONS } from "@/data/research";
import {
  FileText,
  ShieldCheck,
  FlaskConical,
  Clock,
  ArrowRight,
  Sparkles,
  CheckCircle2,
  AlertCircle,
  BarChart3,
  Layers,
} from "lucide-react";

export const metadata: Metadata = {
  title: "Research Output & Manuscripts | Muhammad Hassan Askari",
  description:
    "Record of original research manuscripts, in-preparation studies, ongoing empirical investigations, and prospective research directions by Muhammad Hassan Askari.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/publications",
  },
  openGraph: {
    title: "Research Output & Manuscripts | Muhammad Hassan Askari",
    description:
      "Record of original research manuscripts, in-preparation studies, ongoing empirical investigations, and prospective research directions by Muhammad Hassan Askari.",
    url: "https://research-with-askari.vercel.app/publications",
  },
};

export default function PublicationsPage() {
  const submittedManuscripts = PUBLICATIONS.filter((p) => p.stage === "submitted");
  const inPrepManuscripts = PUBLICATIONS.filter((p) => p.stage === "in_preparation");

  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Academic Works &amp; Output</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Research Output
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            Record of original research contributions organized transparently across submitted manuscripts, manuscripts in preparation, ongoing empirical research, and prospective research directions.
          </p>
          <div className="mt-4 flex flex-wrap gap-2 text-xs font-mono">
            <span className="px-2.5 py-1 rounded-md bg-blue-50 text-blue-900 border border-blue-200">
              1 Submitted Manuscript
            </span>
            <span className="px-2.5 py-1 rounded-md bg-amber-50 text-amber-900 border border-amber-200">
              1 Manuscript in Preparation
            </span>
            <span className="px-2.5 py-1 rounded-md bg-emerald-50 text-emerald-900 border border-emerald-200">
              1 Ongoing Empirical Study
            </span>
            <span className="px-2.5 py-1 rounded-md bg-purple-50 text-purple-900 border border-purple-200">
              3 Prospective Directions
            </span>
          </div>
        </div>
      </section>

      {/* Tier 1: Submitted Manuscripts */}
      <SectionContainer
        tag="Tier 01 · Under Peer Review"
        title="Submitted Manuscripts"
        subtitle="Completed research contributions undergoing formal academic conference peer review."
        className="bg-white"
      >
        <div className="space-y-6 max-w-4xl">
          {submittedManuscripts.map((paper) => (
            <PublicationCard
              key={paper.slug}
              publication={paper}
              showAbstract={true}
            />
          ))}
        </div>
      </SectionContainer>

      {/* Tier 2: Manuscripts in Preparation */}
      <SectionContainer
        tag="Tier 02 · Active Revision & Refinement"
        title="Manuscripts in Preparation"
        subtitle="Original research studies undergoing systematic experimental expansion and methodological revision targeted for journal submission."
        className="bg-slate-50/50"
      >
        <div className="space-y-6 max-w-4xl">
          {inPrepManuscripts.map((paper) => (
            <div key={paper.slug} className="space-y-4">
              <PublicationCard
                publication={paper}
                showAbstract={true}
              />
              {/* Highlight quantitative evidence */}
              <div className="p-4 rounded-xl bg-white border border-slate-200/90 shadow-2xs flex flex-wrap items-center justify-between gap-3 text-xs">
                <div className="flex items-center gap-2 text-slate-700">
                  <BarChart3 className="w-4 h-4 text-blue-600 shrink-0" />
                  <span>
                    Verified experimental recovery: <strong className="text-slate-900">68.02% → 87.34%</strong> classification accuracy under severe snow degradation.
                  </span>
                </div>
                <Link
                  href="/projects/task-aware-traffic-sign-classification"
                  className="inline-flex items-center gap-1 font-semibold text-blue-600 hover:text-blue-800"
                >
                  <span>View Full Evidence Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          ))}
        </div>
      </SectionContainer>

      {/* Tier 3: Ongoing Research */}
      <SectionContainer
        tag="Tier 03 · Empirical Validation in Progress"
        title="Ongoing Research"
        subtitle="Active empirical investigations with preliminary results currently undergoing rigorous statistical validation and multi-seed testing."
        className="bg-white"
      >
        <div className="max-w-4xl space-y-4">
          <div className="rounded-2xl border-2 border-slate-200/90 bg-slate-50/40 p-6 sm:p-8 space-y-5">
            <div className="flex flex-wrap items-center justify-between gap-3">
              <div className="flex flex-wrap items-center gap-2">
                <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-emerald-100 text-emerald-900 border border-emerald-200">
                  Preliminary Results
                </span>
                <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                  Validation in Progress
                </span>
              </div>
              <span className="font-mono text-xs font-bold text-slate-500">
                2025 – Present
              </span>
            </div>

            <div>
              <h3 className="text-xl sm:text-2xl font-black text-slate-900 tracking-tight">
                Few-Shot Adaptation for AI-Generated Image Detection Under Generator Distribution Shift
              </h3>
              <p className="mt-1 text-xs font-mono text-slate-500">
                Muhammad Hassan Askari · Independent Empirical Investigation
              </p>
            </div>

            <p className="text-sm sm:text-base text-slate-650 leading-relaxed">
              Evaluating how binary synthetic image detectors degrade when deployed on unseen image generators (e.g., Midjourney, Wukong), and investigating whether few-shot adaptation (1 to 20 target-domain samples across 5 random seeds) can efficiently recover detection accuracy without full re-training.
            </p>

            {/* Evidence Chips */}
            <div className="grid sm:grid-cols-3 gap-3 pt-1">
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-lg font-black text-slate-900">11,000</div>
                <div className="text-xs font-mono text-slate-500 uppercase">Evaluated Images</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-lg font-black text-slate-900">50</div>
                <div className="text-xs font-mono text-slate-500 uppercase">Controlled Runs</div>
              </div>
              <div className="p-3 rounded-xl bg-white border border-slate-200 text-center">
                <div className="text-lg font-black text-slate-900">5 Seeds</div>
                <div className="text-xs font-mono text-slate-500 uppercase">Multi-Seed Protocols</div>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-amber-50 border border-amber-200 text-xs text-amber-900 leading-relaxed flex items-start gap-2">
              <AlertCircle className="w-4 h-4 text-amber-700 shrink-0 mt-0.5" />
              <span>
                <strong>Preliminary Nature:</strong> Results are documented with full data-leakage audits and zero train-test overlap, but remain preliminary pending completion of full statistical significance testing and architecture generalization benchmarks.
              </span>
            </div>

            <div className="pt-2 flex flex-wrap items-center justify-between gap-3 border-t border-slate-200">
              <span className="text-xs font-mono text-slate-500">
                Research Project Code: fewshot-aigd-shift
              </span>
              <Link
                href="/projects/fewshot-aigd-shift"
                className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-semibold text-blue-600 hover:text-blue-800"
              >
                <span>Read Experimental Protocol &amp; Preliminary Tables</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </div>
      </SectionContainer>

      {/* Tier 4: Prospective Research Directions */}
      <SectionContainer
        tag="Tier 04 · Prospective Research Vectors"
        title="Research Directions"
        subtitle="Early-stage conceptual inquiries and theoretical investigations. These represent prospective research vectors for graduate study, not published literature or completed experimental claims."
        className="bg-slate-50/40"
      >
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-7xl">
          {RESEARCH_DIRECTIONS.map((dir, idx) => (
            <div
              key={dir.id}
              className="p-6 rounded-xl border border-slate-200 bg-white flex flex-col justify-between shadow-2xs"
            >
              <div>
                <div className="flex items-center justify-between gap-2 mb-3">
                  <span className="text-xs font-mono font-bold text-slate-400">
                    DIRECTION 0{idx + 1}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[10px] font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                    {dir.label}
                  </span>
                </div>

                <h3 className="text-base font-bold text-slate-900 leading-snug">
                  {dir.title}
                </h3>

                <p className="mt-3 text-xs sm:text-sm text-slate-650 leading-relaxed">
                  {dir.summary}
                </p>

                <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-200/80 text-xs text-slate-600">
                  <strong className="text-slate-800 block mb-1">Motivation:</strong>
                  {dir.motivation}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-200/80">
                <span className="text-[11px] font-bold text-slate-700 block mb-2">
                  Open Research Questions:
                </span>
                <ul className="space-y-1.5 text-xs text-slate-600">
                  {dir.keyQuestions.map((q, i) => (
                    <li key={i} className="flex items-start gap-1.5">
                      <span className="text-blue-900 font-bold">•</span>
                      <span>{q}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-white border border-slate-200 max-w-4xl text-xs text-slate-650 flex items-center gap-2.5 shadow-2xs">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            <strong>Strict Academic Integrity Disclosure:</strong> Citation counts, acceptance venues, and volume/issue numbers will only be presented upon formal publication. Manuscripts under review or in preparation do not imply accepted or published status.
          </span>
        </div>
      </SectionContainer>
    </div>
  );
}

