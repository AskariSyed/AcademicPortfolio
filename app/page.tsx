import React from "react";
import Link from "next/link";
import HeroSection from "@/components/hero/HeroSection";
import ResearchFocus from "@/components/research/ResearchFocus";
import ResearchJourney from "@/components/research/ResearchJourney";
import FeaturedResearch from "@/components/research/FeaturedResearch";
import ResearchQuestions from "@/components/research/ResearchQuestions";
import ResearchDirections from "@/components/research/ResearchDirections";
import AcademicBackground from "@/components/about/AcademicBackground";
import TeachingExperience from "@/components/about/TeachingExperience";
import ResearchToolkit from "@/components/about/ResearchToolkit";
import ContactSection from "@/components/contact/ContactSection";
import CertificateWall from "@/components/certificates/CertificateWall";
import PublicationCard from "@/components/publications/PublicationCard";
import ProjectCard from "@/components/projects/ProjectCard";
import HomeExperiencePreview from "@/components/experience/HomeExperiencePreview";
import SectionContainer from "@/components/layout/SectionContainer";
import { PUBLICATIONS } from "@/data/publications";
import { PROJECTS } from "@/data/projects";
import { ArrowRight, BookOpen, Layers } from "lucide-react";

export default function HomePage() {
  const featuredProjects = PROJECTS.filter((p) => p.isResearch).slice(0, 3);

  return (
    <>
      {/* 1. Hero */}
      <HeroSection />

      {/* 2. Research Focus */}
      <ResearchFocus />

      {/* 3. Research Journey */}
      <ResearchJourney />

      {/* 4. Featured Research */}
      <FeaturedResearch />

      {/* 5. Current Research Questions */}
      <ResearchQuestions />

      {/* 6. Research Directions */}
      <ResearchDirections />

      {/* 7. Selected Publications */}
      <SectionContainer
        id="publications"
        tag="Scholarly Output"
        title="Selected Publications &amp; Manuscripts"
        subtitle="Current peer-reviewed manuscripts and technical investigations in environmental domain shift."
        className="bg-slate-50/50"
      >
        <div className="space-y-6 max-w-4xl mx-auto">
          {PUBLICATIONS.map((paper) => (
            <PublicationCard
              key={paper.slug}
              publication={paper}
              showAbstract={true}
            />
          ))}
        </div>

        <div className="mt-8 flex justify-center">
          <Link
            href="/publications"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <span>View All Research Manuscripts &amp; Conceptual Directions</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </SectionContainer>

      {/* 8. Research Projects */}
      <SectionContainer
        id="projects"
        tag="Empirical Systems"
        title="Research &amp; Technical Projects"
        subtitle="Empirical implementations exploring few-shot adaptation, retrieval grounding, and adverse weather vision."
        className="bg-white"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.slug} project={project} />
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Link
            href="/projects"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors shadow-2xs"
          >
            <span>View All Research &amp; Engineering Projects</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>
      </SectionContainer>

      {/* 9. Academic & Professional Experience */}
      <HomeExperiencePreview />

      {/* 11. Academic Background */}
      <AcademicBackground />

      {/* 11. Teaching Experience */}
      <TeachingExperience />

      {/* Toolkit (Research-dominant) */}
      <ResearchToolkit />

      {/* 12. Selected Credentials (Certificate Wall Preview) */}
      <SectionContainer
        id="credentials"
        tag="Accreditation"
        title="Selected Credentials"
        subtitle="A preview of framed academic awards, technical certifications, and university distinctions."
        className="bg-white"
      >
        <CertificateWall featuredOnly={true} showFilter={false} maxItems={4} />
      </SectionContainer>

      {/* 13. Contact */}
      <ContactSection />
    </>
  );
}
