import React from "react";
import type { Metadata } from "next";
import ContactSection from "@/components/contact/ContactSection";
import { Mail, Sparkles } from "lucide-react";
import { RESEARCH_IDENTITY } from "@/data/research";

export const metadata: Metadata = {
  title: "Contact & Research Inquiries",
  description:
    "Direct academic contact details for Muhammad Hassan Askari. Inquiries regarding graduate study opportunities, research collaborations, and academic projects.",
};

export default function ContactPage() {
  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <Mail className="w-3.5 h-3.5" />
            <span>Academic Correspondence</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Let&apos;s Discuss Research
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            I am actively interested in discussing research opportunities, laboratory openings, potential collaborations, and graduate study for 2027.
          </p>
        </div>
      </section>

      <ContactSection />
    </div>
  );
}
