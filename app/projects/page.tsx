import React from "react";
import type { Metadata } from "next";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { Layers, Terminal, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Technical Projects",
  description:
    "Empirical implementations and computer vision systems developed by Muhammad Hassan Askari, focusing on domain adaptation, robustness, and visual reliability.",
};

export default function ProjectsPage() {
  const researchProjects = PROJECTS.filter((p) => p.isResearch);
  const appliedProjects = PROJECTS.filter((p) => !p.isResearch);

  return (
    <div className="py-8">
      {/* Header */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10 md:py-14 border-b border-slate-200">
        <div className="max-w-3xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-4">
            <Layers className="w-3.5 h-3.5" />
            <span>Systems &amp; Empirical Research</span>
          </div>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-slate-900">
            Research &amp; Technical Projects
          </h1>
          <p className="mt-4 text-base sm:text-lg text-slate-650 leading-relaxed">
            Hands-on machine learning architectures, few-shot adaptation pipelines, and applied software systems. Research implementations are prioritized over enterprise engineering.
          </p>
        </div>
      </section>

      {/* Primary Research Projects */}
      <SectionContainer
        tag="Core Research Implementations"
        title="Machine Learning &amp; Vision Systems"
        subtitle="Empirical projects exploring robust visual representations, domain shifts, and retrieval augmentation."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionContainer>

      {/* Applied Software Engineering (Subdued) */}
      <SectionContainer
        tag="Engineering Foundation"
        title="Applied Software Engineering"
        subtitle="Large-scale full-stack systems engineering supporting software implementation speed and architectural reliability."
        className="bg-slate-50/50"
      >
        <div className="max-w-3xl">
          {appliedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
