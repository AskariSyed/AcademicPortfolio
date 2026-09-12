import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { FileText, ArrowLeft, ShieldCheck, BookOpen, GitBranch, Scale, Mail } from "lucide-react";
import { RESEARCH_IDENTITY } from "@/data/research";

export const metadata: Metadata = {
  title: "Terms & Conditions | Muhammad Hassan Askari",
  description:
    "Terms of use regarding scholarly assets, open-source research code, academic citations, and intellectual property on Muhammad Hassan Askari's portfolio.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/terms",
  },
  openGraph: {
    title: "Terms & Conditions | Muhammad Hassan Askari",
    description:
      "Terms of use regarding scholarly assets, open-source research code, academic citations, and intellectual property on Muhammad Hassan Askari's portfolio.",
    url: "https://research-with-askari.vercel.app/terms",
  },
};

export default function TermsPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-3">
            <Scale className="w-3.5 h-3.5 text-blue-800" />
            <span>Academic Guidelines</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Terms &amp; Conditions
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-mono">
            Last Updated: {lastUpdated} · Effective Immediately
          </p>
        </div>

        {/* Terms Content */}
        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <FileText className="w-4 h-4 text-blue-900" />
              <span>1. Intellectual Property &amp; Scholarly Attribution</span>
            </h2>
            <p>
              The original research texts, conceptual diagrams, scientific figures (e.g., Figure 1: Conceptual Framework for Reliable Visual Intelligence), narrative formulations, and academic summaries presented on this website are the intellectual creation of <strong>Muhammad Hassan Askari</strong> and named co-authors, unless explicitly credited otherwise.
            </p>
            <p>
              You are invited to review, discuss, and evaluate these materials for prospective graduate supervision, scientific peer evaluation, academic research, and pedagogical purposes, provided proper academic attribution is maintained.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <BookOpen className="w-4 h-4 text-blue-900" />
              <span>2. Academic Citations &amp; Preprint Usage</span>
            </h2>
            <p>
              When citing investigations, empirical datasets, or case study formulations referenced on this portfolio, please cite the corresponding manuscript or preprint record:
            </p>
            <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-800 space-y-2">
              <span className="text-slate-500 font-bold block">BibTeX Reference Format:</span>
              <pre className="overflow-x-auto text-[11px] leading-relaxed">
{`@misc{askari2026reliable,
  author = {Muhammad Hassan Askari and co-authors},
  title  = {Empirical Investigations in Robust Computer Vision and Distribution Shift},
  year   = {2026},
  url    = {https://research-with-askari.vercel.app/}
}`}
              </pre>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <GitBranch className="w-4 h-4 text-blue-900" />
              <span>3. Open-Source Research Code &amp; Repositories</span>
            </h2>
            <p>
              Code repositories linked through this website (hosted on GitHub) are subject to their individual license files (e.g., MIT, Apache 2.0, or All Rights Reserved for unpublished manuscripts in peer review). Please inspect the repository-level license before reproducing, adapting, or incorporating code into external software.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <ShieldCheck className="w-4 h-4 text-blue-900" />
              <span>4. Disclaimer of Scientific Warranties</span>
            </h2>
            <p>
              Research software, baseline benchmarks, and empirical metrics represent experimental investigations conducted under specific academic laboratory conditions. While rigorous auditing protocols are observed (such as zero-leakage leave-generator-out evaluations), models are provided &ldquo;as is&rdquo; without commercial operational warranty.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>5. Inquiries &amp; Permissions</span>
            </h2>
            <p>
              For permissions regarding reproduction of figures, private manuscript draft access for conference review panels, or dataset inquiries:
            </p>
            <div className="p-3.5 rounded-lg bg-blue-50/50 border border-blue-200 text-xs font-mono text-blue-950 font-semibold">
              <a href={`mailto:${RESEARCH_IDENTITY.email}`} className="hover:underline">
                {RESEARCH_IDENTITY.email}
              </a>
            </div>
          </section>
        </div>

        {/* Back navigation */}
        <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-xs font-semibold text-blue-900 hover:underline"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Homepage</span>
          </Link>

          <Link
            href="/privacy"
            className="text-xs font-medium text-slate-500 hover:text-slate-900 underline"
          >
            Read Privacy Policy
          </Link>
        </div>
      </div>
    </div>
  );
}
