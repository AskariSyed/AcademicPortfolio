import React from "react";
import Link from "next/link";
import { Download, ArrowRight, Mail, GraduationCap, Award, BookOpen, ShieldCheck, Layers, Eye, Network } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { RESEARCH_IDENTITY, RESEARCH_FOCUS_CARDS } from "@/data/research";
import ScientificFigure from "./ScientificFigure";

const PRIMARY_AREAS = [
  {
    title: "Robust Computer Vision",
    subtitle: "Environmental degradation, visual robustness, recognition under corrupted inputs.",
    icon: Eye,
  },
  {
    title: "Distribution Shift & Adaptation",
    subtitle: "Domain adaptation, domain generalization, and few-shot adaptation.",
    icon: Network,
  },
  {
    title: "Reliable Multimodal AI",
    subtitle: "Future work around vision-language models, uncertainty-aware reasoning, and reliable evidence.",
    icon: Layers,
  },
];

export default function HeroSection() {
  return (
    <section className="relative pt-10 pb-12 md:pt-14 md:pb-16 overflow-hidden border-b border-slate-200/80 bg-gradient-to-b from-slate-50/70 via-white to-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Status & Academic Credentials Badge Bar */}
        <div className="flex flex-wrap items-center gap-2 sm:gap-2.5 mb-7">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 shadow-2xs">
            <span className="w-2 h-2 rounded-full bg-blue-600 animate-subtle-pulse" />
            <span>Open to Graduate Research (MRes / MPhil / PhD)</span>
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
            <span>IELTS: 7.0 (C1)</span>
          </div>
        </div>

        {/* Hero Grid: Main Research Statement & Scientific Diagram */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          {/* Left Column (Headline, statement, CTAs) */}
          <div className="lg:col-span-7 flex flex-col space-y-5">
            <div>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-slate-900 leading-[1.12]">
                {RESEARCH_IDENTITY.name}
              </h1>
              <p className="mt-2 text-base sm:text-lg font-semibold text-blue-950 font-mono">
                Computer Science Graduate | AI/ML Research
              </p>
            </div>

            <div className="pt-1">
              <span className="text-xs font-mono font-bold tracking-wider text-blue-900 uppercase block mb-1">
                Core Research Theme
              </span>
              <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900 leading-snug">
                Reliable Computer Vision Under Distribution Shift
              </h2>
            </div>

            {/* One-Sentence Research Statement */}
            <div className="p-4 sm:p-5 rounded-lg bg-blue-50/40 border-l-4 border-blue-900 border-y border-r border-slate-200/80">
              <p className="text-base sm:text-lg text-slate-850 font-serif italic leading-relaxed">
                &ldquo;{RESEARCH_IDENTITY.headline}&rdquo;
              </p>
            </div>

            {/* Action Buttons & Quick Links */}
            <div className="pt-2 flex flex-wrap items-center gap-3">
              <Link
                href="/research"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-xs"
              >
                <span>Explore Research</span>
                <ArrowRight className="w-4 h-4" />
              </Link>

              <Link
                href="/cv"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
              >
                <Download className="w-4 h-4 text-blue-900" />
                <span>Download Academic CV</span>
              </Link>

              <div className="flex items-center space-x-1 pl-2 text-slate-650 border-l border-slate-300">
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
            <div className="mt-2.5 px-1 flex items-center justify-between text-[11px] text-slate-500">
              <span className="font-mono">Distribution Shift Formulation</span>
              <Link
                href="/projects/task-aware-traffic-sign-classification"
                className="font-medium text-blue-900 hover:underline flex items-center gap-1"
              >
                <span>Flagship Case Study</span>
                <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>

        {/* 3 Primary Research Areas (Concise, immediately visible on first screen) */}
        <div className="mt-10 pt-8 border-t border-slate-200/90">
          <div className="flex items-center justify-between mb-4">
            <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500">
              Primary Research Areas
            </span>
            <Link
              href="/research"
              className="text-xs font-semibold text-blue-900 hover:underline flex items-center gap-1"
            >
              <span>View Research Agenda</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {PRIMARY_AREAS.map((area, idx) => {
              const Icon = area.icon;
              return (
                <div
                  key={area.title}
                  className="p-5 rounded-xl border border-slate-200 bg-slate-50/60 hover:bg-white hover:border-slate-300 transition-all duration-200"
                >
                  <div className="flex items-center gap-2.5 mb-2.5">
                    <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200/80 flex items-center justify-center text-blue-900 shrink-0">
                      <Icon className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-mono font-bold text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>
                  <h3 className="text-sm sm:text-base font-bold text-slate-900 mb-1">
                    {area.title}
                  </h3>
                  <p className="text-xs text-slate-650 leading-relaxed">
                    {area.subtitle}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
