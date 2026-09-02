import React from "react";
import type { Metadata } from "next";
import { notFound, redirect } from "next/navigation";
import Link from "next/link";
import { PROJECTS } from "@/data/projects";
import FewShotAigdCaseStudy from "@/components/projects/FewShotAigdCaseStudy";
import SchedulingResearchCaseStudy from "@/components/projects/SchedulingResearchCaseStudy";
import TrafficSignResearchCaseStudy from "@/components/projects/TrafficSignResearchCaseStudy";
import {
  ArrowLeft,
  Calendar,
  Layers,
  CheckCircle,
  Terminal,
  ExternalLink,
  Code2,
  Lock,
} from "lucide-react";
import { GithubIcon } from "@/components/ui/SocialIcons";

interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const slugs = PROJECTS.map((p) => ({
    slug: p.slug,
  }));
  slugs.push({ slug: "snow-degraded-traffic-signs" });
  return slugs;
}

export async function generateMetadata({
  params,
}: ProjectPageProps): Promise<Metadata> {
  const resolvedParams = await params;
  if (resolvedParams.slug === "snow-degraded-traffic-signs" || resolvedParams.slug === "task-aware-traffic-sign-classification") {
    return {
      title: "Task-Aware Traffic Sign Classification | Muhammad H. Askari",
      description:
        "Research by Muhammad Hassan Askari on robust traffic sign classification under snow-degraded visual conditions and environmental domain shift.",
      openGraph: {
        title: "Task-Aware Traffic Sign Classification | Muhammad H. Askari",
        description:
          "Research by Muhammad Hassan Askari on robust traffic sign classification under snow-degraded visual conditions and environmental domain shift.",
      },
    };
  }

  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);
  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} | Muhammad H. Askari`,
    description: project.summary,
    openGraph: {
      title: project.title,
      description: project.summary,
    },
  };
}

export default async function ProjectDetailPage({ params }: ProjectPageProps) {
  const resolvedParams = await params;

  // Handle legacy slug redirect
  if (resolvedParams.slug === "snow-degraded-traffic-signs") {
    redirect("/projects/task-aware-traffic-sign-classification");
  }

  const project = PROJECTS.find((p) => p.slug === resolvedParams.slug);

  if (!project) {
    notFound();
  }

  const isPublicRepo = project.repositoryVisibility === "public" && project.repositoryUrl;
  const isPrivateRepo = project.repositoryVisibility === "private";

  return (
    <div className="py-10 md:py-16">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumbs */}
        <div className="mb-8">
          <Link
            href="/projects"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-slate-600 hover:text-slate-900 transition-colors"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to All Projects</span>
          </Link>
        </div>

        {/* If this project has a specialized Research Case Study, render it */}
        {project.trafficSignCaseStudy ? (
          <TrafficSignResearchCaseStudy project={project} />
        ) : project.researchCaseStudy ? (
          <FewShotAigdCaseStudy project={project} />
        ) : project.schedulingCaseStudy ? (
          <SchedulingResearchCaseStudy project={project} />
        ) : (
          /* Standard Project Detail Presentation */
          <>
            {/* Metadata Header */}
            <div className="flex flex-wrap items-center gap-2 mb-3">
              <span
                className={`px-2.5 py-0.5 rounded text-xs font-mono font-bold uppercase tracking-wider ${
                  project.category === "Primary Research"
                    ? "bg-blue-900 text-white"
                    : "bg-slate-200 text-slate-700"
                }`}
              >
                {project.category}
              </span>
              <span className="font-mono text-xs text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
                {project.date}
              </span>
            </div>

            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
              {project.title}
            </h1>

            <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed font-serif italic border-l-3 border-blue-900 pl-4 bg-blue-50/20 py-1">
              &ldquo;{project.summary}&rdquo;
            </p>

            {/* Action Links */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {isPublicRepo && (
                <a
                  href={project.repositoryUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors shadow-2xs"
                >
                  <GithubIcon className="w-4 h-4" />
                  <span>View Source Code</span>
                  <ExternalLink className="w-3 h-3 opacity-60" />
                </a>
              )}
              {isPrivateRepo && (
                <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-md text-xs font-mono text-slate-600 bg-slate-100 border border-slate-200">
                  <Lock className="w-3.5 h-3.5 text-slate-500" />
                  <span>Private Research Repository</span>
                </div>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
                >
                  <span>View Deployment</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              )}
            </div>

            {/* In-depth Narrative */}
            <div className="mt-10 space-y-6">
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <h2 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-2">
                  System &amp; Research Overview
                </h2>
                <p className="text-sm sm:text-base text-slate-700 leading-relaxed">
                  {project.description}
                </p>
              </div>

              {/* Key Contributions */}
              <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs">
                <h3 className="text-sm font-bold uppercase tracking-wider text-slate-900 mb-3">
                  Key Methodological &amp; Technical Contributions
                </h3>
                <ul className="space-y-2.5">
                  {project.keyContributions.map((item, i) => (
                    <li key={i} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Technical Stack */}
              <div className="p-6 rounded-xl bg-slate-50 border border-slate-200/90">
                <h3 className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 mb-3">
                  Technologies &amp; Toolchain Employed
                </h3>
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-md text-xs font-semibold bg-white text-slate-800 border border-slate-200 shadow-2xs"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Footer Navigation */}
            <div className="mt-12 pt-6 border-t border-slate-200 flex items-center justify-between">
              <Link
                href="/projects"
                className="text-xs font-semibold text-slate-600 hover:text-slate-900"
              >
                ← All Projects
              </Link>
              <Link
                href="/research"
                className="text-xs font-semibold text-blue-900 hover:underline"
              >
                Explore Related Research Focus →
              </Link>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
