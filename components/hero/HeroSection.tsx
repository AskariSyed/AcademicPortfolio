import React from "react";
import Link from "next/link";
import { Download, ArrowRight, Mail, GraduationCap, Award, BookOpen, Sparkles } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { RESEARCH_IDENTITY } from "@/data/research";
import ScientificFigure from "./ScientificFigure";

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-16 md:pt-16 md:pb-24 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Academic Credentials Badge Bar */}
        <div className="flex flex-wrap items-center gap-2.5 sm:gap-3 mb-8">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-subtle-pulse" />
            <span>Open to 2027 Research Opportunities</span>
          </div>

          <div className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200">
            <GraduationCap className="w-3.5 h-3.5 text-slate-600" />
            <span>BS Computer Science · COMSATS Wah (2022–2026)</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200">
            <Award className="w-3.5 h-3.5 text-amber-700" />
            <span>CGPA: 3.65 / 4.00</span>
          </div>

          <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-slate-100/90 text-slate-700 border border-slate-200">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>IELTS Academic: 7.0 (C1)</span>
          </div>
        </div>

        {/* Hero Grid: Main Research Statement & Scientific Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Left Column (Headline, statements, CTAs) */}
          <div className="lg:col-span-7 flex flex-col space-y-6">
            <div className="space-y-4">
              <div className="text-xs font-mono font-bold tracking-widest text-blue-900 uppercase">
                {RESEARCH_IDENTITY.name} · Research Agenda
              </div>
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                Reliable Visual Intelligence <br />
                <span className="text-blue-900 font-serif italic font-normal">
                  Under Environmental Domain Shift
                </span>
              </h1>
            </div>

            <p className="text-lg sm:text-xl text-slate-800 font-normal leading-relaxed border-l-3 border-blue-900 pl-4 py-1 bg-blue-50/30 rounded-r-md">
              &ldquo;{RESEARCH_IDENTITY.headline}&rdquo;
            </p>

            <p className="text-base text-slate-650 leading-relaxed">
              {RESEARCH_IDENTITY.supportingStatement}
            </p>

            {/* Academic Meta Compact Block */}
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200/90 text-xs sm:text-sm text-slate-700 space-y-2">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-200/70 pb-2">
                <span className="font-semibold text-slate-900">Academic Standing:</span>
                <span className="font-mono text-slate-600">BS in Computer Science (133 Credits Completed)</span>
              </div>
              <div className="text-xs text-slate-600 leading-normal">
                <strong>Objective:</strong> {RESEARCH_IDENTITY.currentObjective}
              </div>
            </div>

            {/* Action Buttons & Quick Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3 sm:gap-4">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-xs hover:shadow-md"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-blue-900" />
                <span>Download Academic CV</span>
              </Link>

              <div className="flex items-center space-x-1 pl-2 text-slate-600 border-l border-slate-300">
                <a
                  href={RESEARCH_IDENTITY.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="GitHub Profile"
                  title="GitHub Profile"
                >
                  <GithubIcon className="w-4 h-4" />
                </a>
                <a
                  href={RESEARCH_IDENTITY.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="LinkedIn Profile"
                  title="LinkedIn Profile"
                >
                  <LinkedinIcon className="w-4 h-4" />
                </a>
                <a
                  href={`mailto:${RESEARCH_IDENTITY.email}`}
                  className="p-2 rounded-md hover:text-slate-900 hover:bg-slate-100 transition-colors"
                  aria-label="Send Academic Email"
                  title="Send Academic Email"
                >
                  <Mail className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column (Scientific Figure) */}
          <div className="lg:col-span-5 flex flex-col justify-center">
            <ScientificFigure />
            <div className="mt-3 px-1 flex items-center justify-between text-[11px] text-slate-500">
              <span className="italic">Early-Career Research Focus</span>
              <Link
                href="/experience"
                className="font-medium text-blue-900 hover:underline flex items-center gap-1"
              >
                <span>Academic Experience</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
