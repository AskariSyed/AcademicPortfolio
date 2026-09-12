import React, { Suspense } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle2, ArrowLeft, BookOpen, Download, Mail, Clock } from "lucide-react";

export const metadata: Metadata = {
  title: "Inquiry Received · Academic Portfolio | Muhammad Hassan Askari",
  description: "Thank you for reaching out. Your academic inquiry has been registered and received.",
  robots: {
    index: false,
    follow: false,
  },
};

function ThankYouContent() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-emerald-50 border border-emerald-200 text-emerald-700 mx-auto flex items-center justify-center shadow-xs">
          <CheckCircle2 className="w-8 h-8" />
        </div>

        <div className="space-y-3">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-emerald-50 text-emerald-900 border border-emerald-200">
            <Clock className="w-3.5 h-3.5 text-emerald-700" />
            <span>Inquiry Dispatched Successfully</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Thank You for Connecting
          </h1>
          <p className="text-sm sm:text-base text-slate-650 leading-relaxed max-w-lg mx-auto">
            Your correspondence has been received. I review academic inquiries, graduate openings, and collaboration invitations promptly and will reply within <strong>24 hours</strong>.
          </p>
        </div>

        {/* Informational Callout Card */}
        <div className="p-5 rounded-xl bg-slate-50 border border-slate-200 text-left text-xs space-y-2">
          <span className="font-mono font-bold text-slate-700 uppercase tracking-wider block">
            What Happens Next:
          </span>
          <ul className="space-y-1.5 text-slate-650">
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span>I will review your message and examine prospective alignment with my research agenda in reliable visual AI.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span>If you provided institutional details, I will prepare relevant manuscript drafts or code references ahead of our call.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span>For urgent matters, feel free to follow up on LinkedIn or directly via institutional email.</span>
            </li>
          </ul>
        </div>

        {/* Action Buttons */}
        <div className="pt-2 flex flex-wrap items-center justify-center gap-3">
          <Link
            href="/research"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-colors shadow-xs"
          >
            <BookOpen className="w-3.5 h-3.5" />
            <span>Explore Research Agenda</span>
          </Link>

          <Link
            href="/cv"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            <Download className="w-3.5 h-3.5 text-blue-900" />
            <span>Download Academic CV</span>
          </Link>

          <Link
            href="/"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-lg text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Home</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default function ThankYouPage() {
  return (
    <Suspense fallback={<div className="min-h-[60vh] flex items-center justify-center">Loading...</div>}>
      <ThankYouContent />
    </Suspense>
  );
}
