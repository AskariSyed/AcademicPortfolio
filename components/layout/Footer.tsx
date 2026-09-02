import React from "react";
import Link from "next/link";
import { Mail, ArrowUpRight } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/SocialIcons";
import { RESEARCH_IDENTITY } from "@/data/research";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-white py-12 text-slate-600 text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-base font-bold text-slate-900 tracking-tight">
              {RESEARCH_IDENTITY.name}
            </div>
            <p className="text-xs text-slate-500 mt-0.5">
              Computer Vision · Robust ML · Domain Adaptation · Multimodal AI
            </p>
            <p className="text-xs text-slate-400 mt-2 font-mono">
              COMSATS University Islamabad (2022–2026) · CGPA 3.65 · IELTS 7.0
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-6">
            <Link
              href="/research"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Research
            </Link>
            <Link
              href="/publications"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Publications
            </Link>
            <Link
              href="/projects"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Projects
            </Link>
            <Link
              href="/experience"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Experience
            </Link>
            <Link
              href="/cv"
              className="text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              Academic CV
            </Link>
            <div className="h-4 w-px bg-slate-200 hidden sm:block" />
            <a
              href={RESEARCH_IDENTITY.github}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>GitHub</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
            </a>
            <a
              href={RESEARCH_IDENTITY.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              <LinkedinIcon className="w-3.5 h-3.5" />
              <span>LinkedIn</span>
              <ArrowUpRight className="w-2.5 h-2.5 opacity-50" />
            </a>
            <a
              href={`mailto:${RESEARCH_IDENTITY.email}`}
              className="inline-flex items-center gap-1 text-xs font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              <Mail className="w-3.5 h-3.5" />
              <span>Email</span>
            </a>
          </div>
        </div>

        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-400 gap-2">
          <div>
            © {new Date().getFullYear()} {RESEARCH_IDENTITY.name}. Built with Next.js App Router.
          </div>
          <div className="font-mono text-[11px]">
            Target Domain: research.askarisyed.com
          </div>
        </div>
      </div>
    </footer>
  );
}
