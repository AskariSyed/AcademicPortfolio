import React from "react";
import type { Metadata } from "next";
import SectionContainer from "@/components/layout/SectionContainer";
import PublicationCard from "@/components/publications/PublicationCard";
import { PUBLICATIONS } from "@/data/publications";
import { RESEARCH_DIRECTIONS } from "@/data/research";
import { FileText, Lightbulb, Clock, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Publications",
  description:
    "Peer-reviewed manuscripts and conceptual research directions in computer vision and domain shift by Muhammad Hassan Askari.",
};

export default function PublicationsPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <FileText className="w-3.5 h-3.5" />
            <span>Academic Works</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Research &amp; Publications
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            Formal manuscripts under peer review alongside early-stage conceptual research directions in robust visual perception.
          </p>
        </div>
      </section>

      {/* Manuscripts Section */}
      <SectionContainer
        tag="Current Manuscripts"
        title="Scholarly Manuscripts"
        subtitle="Completed research contributions currently under formal peer review."
        className="bg-white"
      >
        <div className="space-y-6 max-w-4xl">
          {PUBLICATIONS.map((paper) => (
            <PublicationCard
              key={paper.slug}
              publication={paper}
              showAbstract={true}
            />
          ))}
        </div>

        <div className="mt-8 p-4 rounded-lg bg-slate-50 border border-slate-200 max-w-4xl text-xs text-slate-500 flex items-center gap-2.5">
          <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
          <span>
            Strict Academic Integrity Policy: Citation counts, acceptance venues, and volume/issue numbers will only be presented upon formal publication.
          </span>
        </div>
      </SectionContainer>

      {/* Conceptual Research Directions (Clearly labeled) */}
      <SectionContainer
        tag="Active Hypotheses"
        title="Research Directions"
        subtitle="Early-stage conceptual inquiries and theoretical investigations. These represent prospective research vectors for graduate study, not published literature."
        className="bg-slate-50/50"
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

                <div className="mt-4 p-3 rounded-md bg-slate-50 border border-slate-100 text-xs text-slate-600">
                  <strong className="text-slate-800 block mb-1">Motivation:</strong>
                  {dir.motivation}
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-slate-100">
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
      </SectionContainer>
    </div>
  );
}
