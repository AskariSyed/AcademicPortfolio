import React from "react";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { PUBLICATIONS } from "@/data/publications";
import {
  ArrowLeft,
  Calendar,
  Users,
  Clock,
  Layers,
  HelpCircle,
  AlertTriangle,
  Cpu,
  FileCheck2,
  FileText,
} from "lucide-react";

interface PublicationPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  return PUBLICATIONS.map((p) => ({
    slug: p.slug,
  }));
}

export async function generateMetadata({
  params,
}: PublicationPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const paper = PUBLICATIONS.find((p) => p.slug === resolvedParams.slug);
  if (!paper) {
    return {
      title: "Publication Not Found",
    };
  }

  return {
    title: `${paper.title}`,
    description: paper.problem,
    openGraph: {
      title: paper.title,
      description: paper.problem,
      type: "article",
    },
  };
}

export default async function PublicationDetailPage({
  params,
}: PublicationPageProps) {
  const resolvedParams = await params;
  const paper = PUBLICATIONS.find((p) => p.slug === resolvedParams.slug);

  if (!paper) {
    notFound();
  }

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb / Back button */}
        <div className="mb-8">
          <Link
            href="/publications"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Publications &amp; Manuscripts</span>
          </Link>
        </div>

        {/* Article Meta Bar */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="font-mono text-xs font-bold text-slate-600 bg-slate-100 px-2.5 py-0.5 rounded">
            {paper.year}
          </span>
          <span className="inline-flex items-center gap-1 px-3 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200">
            <Clock className="w-3 h-3 text-amber-700" />
            <span>{paper.status}</span>
          </span>
        </div>

        <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
          {paper.title}
        </h1>

        {/* Authors */}
        <div className="mt-4 pt-4 border-t border-slate-200 flex flex-wrap items-center gap-4 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-900" />
            <span>
              <strong>Authors:</strong>{" "}
              {paper.authors.map((author, i) => (
                <span key={author}>
                  <span
                    className={
                      author.includes("Muhammad Hassan Askari")
                        ? "font-bold text-slate-900"
                        : "text-slate-700"
                    }
                  >
                    {author}
                  </span>
                  {i < paper.authors.length - 1 ? ", " : ""}
                </span>
              ))}
            </span>
          </div>
        </div>

        {/* High-Level Research Overview (Abstract protected) */}
        <div className="mt-8 p-6 rounded-xl bg-slate-50 border border-slate-200/90 space-y-2">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
            <FileText className="w-3.5 h-3.5 text-blue-900" />
            <span>High-Level Research Overview</span>
          </div>
          <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed">
            &ldquo;An ongoing study of robust traffic sign classification under snow-degraded visual conditions. The research investigates a task-aware multi-stage framework that combines image enhancement and deep-learning-based classification to improve recognition when snow obscures or degrades visual information.&rdquo;
          </p>
          <div className="pt-2">
            <Link
              href="/projects/task-aware-traffic-sign-classification"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 font-mono"
            >
              <span>Explore Dedicated Project Case Study →</span>
            </Link>
          </div>
        </div>

        {/* Methodology Flow Pipeline */}
        <div className="mt-10">
          <div className="flex items-center justify-between mb-3 border-b border-slate-200 pb-2">
            <h3 className="text-sm font-bold uppercase tracking-wider text-slate-800 flex items-center gap-2">
              <Layers className="w-4 h-4 text-blue-900" />
              <span>Multi-Stage Methodological Framework</span>
            </h3>
            <span className="text-xs font-mono text-slate-400">Pipeline Flow</span>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {paper.methodologyPipeline.map((stage, idx) => (
              <div
                key={stage}
                className="p-3.5 rounded-lg bg-white border border-slate-200 shadow-2xs text-center"
              >
                <span className="text-[10px] font-mono font-bold text-blue-900 block mb-1">
                  STAGE 0{idx + 1}
                </span>
                <span className="text-xs font-semibold text-slate-800">
                  {stage}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Detailed Breakdown */}
        <div className="mt-10 space-y-6">
          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-rose-800 mb-2">
              <AlertTriangle className="w-4 h-4 text-rose-600" />
              <span>The Problem Formulation</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {paper.problem}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-900 mb-2">
              <HelpCircle className="w-4 h-4 text-blue-700" />
              <span>Investigated Research Question</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 font-serif italic leading-relaxed">
              &ldquo;{paper.researchQuestion}&rdquo;
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-blue-900 mb-2">
              <Cpu className="w-4 h-4 text-blue-700" />
              <span>Methodological Approach</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {paper.approach}
            </p>
          </div>

          <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
            <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase text-emerald-800 mb-2">
              <FileCheck2 className="w-4 h-4 text-emerald-700" />
              <span>Empirical Results &amp; Evaluation</span>
            </div>
            <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
              {paper.resultsNote}
            </p>
          </div>
        </div>

        {/* Action CTA */}
        <div className="mt-10 pt-6 border-t border-slate-200 flex items-center justify-between">
          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
          >
            <FileText className="w-3.5 h-3.5" />
            <span>Download Academic CV</span>
          </Link>

          <Link
            href="/contact"
            className="text-xs font-semibold text-blue-900 hover:underline"
          >
            Inquire about this research →
          </Link>
        </div>
      </div>
    </div>
  );
}
