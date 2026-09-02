import React from "react";
import Link from "next/link";
import SectionContainer from "@/components/layout/SectionContainer";
import ExperienceTimeline from "./ExperienceTimeline";
import { ArrowRight, Briefcase } from "lucide-react";

export default function HomeExperiencePreview() {
  return (
    <SectionContainer
      id="experience-preview"
      tag="Academic & Professional Roles"
      title="Academic & Professional Experience"
      subtitle="Teaching, engineering, and quality-assurance experience supporting my transition from software development toward research in AI and reliable visual intelligence."
      className="bg-slate-50/40"
    >
      <div className="space-y-8">
        <ExperienceTimeline featuredOnly={true} showFilter={false} isCompact={true} />

        <div className="flex justify-center pt-2">
          <Link
            href="/experience"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs sm:text-sm font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
          >
            <span>View Full Experience &amp; Responsibilities</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </SectionContainer>
  );
}
