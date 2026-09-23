import React from "react";
import type { Metadata } from "next";
import SectionContainer from "@/components/layout/SectionContainer";
import ProjectCard from "@/components/projects/ProjectCard";
import { PROJECTS } from "@/data/projects";
import { Layers, Terminal, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "Research & Technical Projects | Muhammad Hassan Askari",
  description:
    "Undergraduate research projects, empirical machine learning experiments, and software systems by Muhammad Hassan Askari, BS in Computer Science graduate.",
  alternates: {
    canonical: "https://research-with-askari.vercel.app/projects",
  },
  openGraph: {
    title: "Research & Technical Projects | Muhammad Hassan Askari",
    description:
      "Undergraduate research projects, empirical machine learning experiments, and software systems by Muhammad Hassan Askari, BS in Computer Science graduate.",
    url: "https://research-with-askari.vercel.app/projects",
  },
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
            Undergraduate research projects, machine learning experiments, and algorithmic software systems developed during my Computer Science degree.
          </p>
        </div>
      </section>

      {/* Primary Research Projects */}
      <SectionContainer
        tag="Research Projects &amp; Experiments"
        title="Machine Learning &amp; Computer Vision"
        subtitle="Undergraduate research and empirical investigations exploring robust visual representations, domain shifts, and adaptation."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {researchProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionContainer>

      {/* Applied Systems & Technical Implementations */}
      <SectionContainer
        tag="Engineering &amp; Applied Foundation"
        title="Applied Systems &amp; Technical Projects"
        subtitle="Full-stack software systems and applied computer-vision implementations demonstrating systems engineering, applied ML, and practical technical breadth."
        className="bg-slate-50/50"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {appliedProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>
      </SectionContainer>
    </div>
  );
}
