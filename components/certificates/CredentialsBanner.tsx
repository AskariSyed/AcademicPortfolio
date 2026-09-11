import React from "react";
import Link from "next/link";
import { Award, ArrowRight, ShieldCheck } from "lucide-react";
import { CERTIFICATES } from "@/data/certificates";

export default function CredentialsBanner() {
  const verifiedCount = CERTIFICATES.length;

  return (
    <section className="py-10 bg-slate-50/70 border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-2xs">
          <div className="flex items-center gap-3.5">
            <div className="w-10 h-10 rounded-lg bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-700 shrink-0">
              <Award className="w-5 h-5 text-amber-700" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h3 className="text-sm sm:text-base font-bold text-slate-900">
                  Supporting Credentials &amp; Certifications
                </h3>
                <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                  <ShieldCheck className="w-3 h-3" />
                  <span>{verifiedCount} Verified</span>
                </span>
              </div>
              <p className="text-xs text-slate-500 mt-0.5">
                Technical specializations in deep learning, math for ML, and enterprise software engineering.
              </p>
            </div>
          </div>

          <Link
            href="/certificates"
            className="inline-flex items-center gap-1.5 px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200/80 transition-colors shrink-0"
          >
            <span>Inspect Certificate Wall</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </div>
    </section>
  );
}
