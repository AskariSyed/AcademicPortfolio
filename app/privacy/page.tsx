import React from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { ShieldCheck, ArrowLeft, Lock, Eye, Server, Cookie, Mail } from "lucide-react";
import { RESEARCH_IDENTITY } from "@/data/research";

export const metadata: Metadata = {
  title: "Privacy Policy | Muhammad Hassan Askari",
  description:
    "Privacy policy regarding academic data collection, privacy-preserving visitor telemetry, and cookie usage on Muhammad Hassan Askari's research portfolio.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/privacy",
  },
  openGraph: {
    title: "Privacy Policy | Muhammad Hassan Askari",
    description:
      "Privacy policy regarding academic data collection, privacy-preserving visitor telemetry, and cookie usage on Muhammad Hassan Askari's research portfolio.",
    url: "https://research-with-askari.vercel.app/privacy",
  },
};

export default function PrivacyPolicyPage() {
  const lastUpdated = "September 2026";

  return (
    <div className="py-12 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="mb-10 pb-6 border-b border-slate-200">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-3">
            <ShieldCheck className="w-3.5 h-3.5 text-blue-800" />
            <span>Academic Integrity &amp; Transparency</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Privacy Policy
          </h1>
          <p className="mt-2 text-sm text-slate-500 font-mono">
            Last Updated: {lastUpdated} · Effective Immediately
          </p>
        </div>

        {/* Policy Content */}
        <div className="space-y-8 text-sm text-slate-700 leading-relaxed">
          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Eye className="w-4 h-4 text-blue-900" />
              <span>1. Overview &amp; Data Controller</span>
            </h2>
            <p>
              This website serves as the academic and research portfolio of <strong>Muhammad Hassan Askari</strong>, Computer Science graduate and researcher. I am dedicated to maintaining rigorous standards of scientific integrity, transparency, and data minimization. This policy outlines how information is handled when you browse this portfolio or submit an academic inquiry.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Server className="w-4 h-4 text-blue-900" />
              <span>2. Information Collected &amp; Purpose of Processing</span>
            </h2>
            <div className="p-4 rounded-xl bg-white border border-slate-200 space-y-3 shadow-2xs">
              <div>
                <h3 className="font-bold text-slate-900">A. Academic Inquiries (Direct Outreach)</h3>
                <p className="mt-1 text-slate-650">
                  When you voluntarily submit a message via the research contact form, you provide your name, email address, optional institution/laboratory affiliation, and your message. This data is utilized solely to review prospective graduate openings, respond to collaboration invitations, or answer questions concerning published manuscripts and code.
                </p>
              </div>

              <div className="pt-3 border-t border-slate-100">
                <h3 className="font-bold text-slate-900">B. Technical Telemetry (Privacy-Preserving Analytics)</h3>
                <p className="mt-1 text-slate-650">
                  This site utilizes privacy-friendly telemetry powered by Vercel Analytics to understand readership volume and referral sources (e.g., Google Scholar, GitHub, LinkedIn). This telemetry does <strong>not</strong> track personal identity across third-party websites, does not build advertising profiles, and does not record raw IP addresses.
                </p>
              </div>
            </div>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Cookie className="w-4 h-4 text-blue-900" />
              <span>3. Cookies and Local Storage</span>
            </h2>
            <p>
              This site uses minimal client-side storage:
            </p>
            <ul className="list-disc pl-5 space-y-1 text-slate-650">
              <li>
                <strong>Preference Cookies / LocalStorage:</strong> A simple key (<code className="font-mono text-xs bg-slate-100 px-1.5 py-0.5 rounded text-slate-800">academic_cookie_consent</code>) is stored locally in your browser to remember your dismissal of the notice banner.
              </li>
              <li>
                <strong>No Third-Party Advertising Cookies:</strong> No behavioral tracking, retargeting pixels, or commercial advertising networks are deployed on this portfolio.
              </li>
            </ul>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Lock className="w-4 h-4 text-blue-900" />
              <span>4. Data Retention and Sharing</span>
            </h2>
            <p>
              Information received via email or inquiry is retained strictly for the duration of academic correspondence. I do not sell, rent, or trade contact information to commercial brokers or third parties. Information may only be shared with institutional co-authors or committee reviewers if explicitly relevant to an agreed collaborative investigation.
            </p>
          </section>

          <section className="space-y-3">
            <h2 className="text-lg font-bold text-slate-900 flex items-center gap-2">
              <Mail className="w-4 h-4 text-blue-900" />
              <span>5. Data Rights &amp; Direct Inquiries</span>
            </h2>
            <p>
              You have the right to request a summary of any communications you have sent, or request the immediate deletion of your correspondence records. To exercise these rights, please email:
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
            href="/terms"
            className="text-xs font-medium text-slate-500 hover:text-slate-900 underline"
          >
            Read Terms &amp; Conditions
          </Link>
        </div>
      </div>
    </div>
  );
}
