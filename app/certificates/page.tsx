import React from "react";
import type { Metadata } from "next";
import CertificateWall from "@/components/certificates/CertificateWall";
import { Award, ShieldCheck } from "lucide-react";

export const metadata: Metadata = {
  title: "Certificates & Academic Milestones",
  description:
    "Interactive physical-feel certificate wall exhibiting verified academic distinction, machine learning specializations, and engineering credentials of Muhammad Hassan Askari.",
};

export default function CertificatesPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <Award className="w-3.5 h-3.5" />
            <span>Academic &amp; Professional Milestones</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Academic &amp; Professional Milestones
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            A collection of academic, research, technical, and professional credentials accumulated throughout my undergraduate journey.
          </p>
          <div className="mt-4 flex items-center gap-2 text-xs text-slate-500 font-mono">
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Click any framed credential to inspect full documentation &amp; verification details.</span>
          </div>
        </div>
      </section>

      {/* Main Interactive Wall */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CertificateWall featuredOnly={false} showFilter={true} />
      </section>
    </div>
  );
}
