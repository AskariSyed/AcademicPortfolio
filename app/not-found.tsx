import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass, FileText, Layers, BookOpen, Mail, ArrowRight } from "lucide-react";

export const metadata = {
  title: "404 - Archive Entry Not Found | Muhammad Hassan Askari",
  description: "The requested academic page, paper, or research case study could not be located in this repository.",
};

const QUICK_LINKS = [
  { href: "/research", label: "Research Agenda & Trajectory", icon: Compass, desc: "Theoretical formulations & domain shift themes" },
  { href: "/publications", label: "Research Output & Manuscripts", icon: BookOpen, desc: "Preprints, papers & investigations" },
  { href: "/projects", label: "Projects & Case Studies", icon: Layers, desc: "Traffic sign classification & few-shot AIGD" },
  { href: "/cv", label: "Academic Curriculum Vitae", icon: FileText, desc: "Education, IELTS, TA records & toolkit" },
  { href: "/contact", label: "Contact & Academic Inquiry", icon: Mail, desc: "Direct correspondence & collaboration" },
];

export default function NotFound() {
  return (
    <div className="min-h-[75vh] flex items-center justify-center px-4 py-16 sm:py-20">
      <div className="max-w-xl w-full text-center space-y-8">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 mx-auto flex items-center justify-center shadow-xs">
          <Compass className="w-8 h-8 animate-subtle-pulse" />
        </div>

        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200 mb-3">
            <span>HTTP Error 404 · Unresolved Citation</span>
          </div>
          <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-slate-900">
            Archive Entry Not Found
          </h1>
          <p className="mt-3 text-sm sm:text-base text-slate-650 leading-relaxed max-w-lg mx-auto">
            The requested publication, case study, or resource could not be found. It may have been renamed, integrated into an expanded manuscript, or archived.
          </p>
        </div>

        {/* Quick Navigation Cards */}
        <div className="text-left space-y-2 pt-2">
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-400 block px-1">
            Navigate to Key Sections
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
            {QUICK_LINKS.map((item) => {
              const Icon = item.icon;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group p-3 rounded-xl border border-slate-200 bg-white hover:bg-slate-50 hover:border-blue-300 transition-all shadow-2xs flex items-start gap-3"
                >
                  <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 mt-0.5 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon className="w-4 h-4" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-xs font-bold text-slate-900 group-hover:text-blue-900 transition-colors block truncate">
                      {item.label}
                    </span>
                    <span className="text-[11px] text-slate-500 line-clamp-1">
                      {item.desc}
                    </span>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-blue-900 group-hover:translate-x-0.5 transition-all mt-1" />
                </Link>
              );
            })}
          </div>
        </div>

        <div className="pt-4 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-all shadow-xs active:scale-95"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Portfolio Homepage</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
