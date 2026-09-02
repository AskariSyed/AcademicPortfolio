import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import { ArrowUpRight, Lock, Sparkles, Clock } from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectCardProps {
  project: Project;
}

export default function ProjectCard({ project }: ProjectCardProps) {
  const isPrivateRepo = project.repositoryVisibility === "private";
  const hasPublicRepo = project.repositoryVisibility === "public" && project.repositoryUrl;

  return (
    <article
      className={`rounded-xl border transition-all duration-200 flex flex-col justify-between ${
        project.isResearch
          ? "p-6 sm:p-7 bg-white border-slate-200/90 hover:border-blue-900/40 hover:shadow-md"
          : "p-5 bg-slate-50/50 border-slate-200/70 opacity-90 hover:opacity-100 hover:bg-white"
      }`}
    >
      <div>
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <div className="flex items-center gap-2">
            <span
              className={`px-2.5 py-0.5 rounded text-xs font-semibold uppercase tracking-wider font-mono ${
                project.category === "Primary Research"
                  ? "bg-blue-900 text-white"
                  : project.isResearch
                  ? "bg-blue-50 text-blue-900 border border-blue-200"
                  : "bg-slate-200 text-slate-700"
              }`}
            >
              {project.category}
            </span>
            {project.status && (
              <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-medium text-amber-900 bg-amber-50 border border-amber-200/70 px-2 py-0.2 rounded">
                <Clock className="w-3 h-3 text-amber-700" />
                <span>{project.status}</span>
              </span>
            )}
          </div>
          <span className="font-mono text-xs text-slate-400">{project.date}</span>
        </div>

        <h3
          className={`font-bold tracking-tight text-slate-900 leading-snug ${
            project.isResearch ? "text-lg sm:text-xl" : "text-base sm:text-lg"
          }`}
        >
          <Link
            href={`/projects/${project.slug}`}
            className="hover:text-blue-900 transition-colors"
          >
            {project.title}
          </Link>
        </h3>

        <p className="mt-2.5 text-xs sm:text-sm text-slate-650 leading-relaxed">
          {project.summary}
        </p>

        {project.isResearch && project.keyContributions.length > 0 && (
          <div className="mt-4 pt-3 border-t border-slate-100">
            <span className="text-[11px] font-bold text-slate-700 uppercase tracking-wider block mb-1.5">
              Core Technical Contributions:
            </span>
            <ul className="space-y-1 text-xs text-slate-600">
              {project.keyContributions.slice(0, 2).map((item, idx) => (
                <li key={idx} className="flex items-start gap-1.5">
                  <span className="text-blue-900 font-bold shrink-0">•</span>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-[11px] font-medium bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200/60"
            >
              {tag}
            </span>
          ))}
        </div>

        <div className="flex items-center justify-between gap-3 text-xs">
          <Link
            href={`/projects/${project.slug}`}
            className="inline-flex items-center gap-1 font-semibold text-blue-900 hover:text-blue-950 hover:underline"
          >
            <span>{project.isResearch ? "Explore Research" : "Project Details"}</span>
            <ArrowUpRight className="w-3 h-3" />
          </Link>

          {hasPublicRepo ? (
            <a
              href={project.repositoryUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 font-medium text-slate-600 hover:text-slate-900 transition-colors"
            >
              <GithubIcon className="w-3.5 h-3.5" />
              <span>View Source Code</span>
            </a>
          ) : isPrivateRepo ? (
            <span className="inline-flex items-center gap-1 text-[11px] text-slate-400 font-mono">
              <Lock className="w-3 h-3 text-slate-400" />
              <span>Private Repository</span>
            </span>
          ) : null}
        </div>
      </div>
    </article>
  );
}
