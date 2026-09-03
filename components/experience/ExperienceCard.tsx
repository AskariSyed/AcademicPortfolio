"use client";

import React, { useState } from "react";
import { Experience } from "@/data/experience";
import {
  GraduationCap,
  Briefcase,
  Calendar,
  ChevronDown,
  ChevronUp,
  BookOpen,
  CheckCircle2,
  Cpu,
  Sparkles,
} from "lucide-react";

interface ExperienceCardProps {
  experience: Experience;
  isCompact?: boolean;
}

export default function ExperienceCard({
  experience,
  isCompact = false,
}: ExperienceCardProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  const isAcademic = experience.type === "Academic";

  return (
    <div
      className={`rounded-xl transition-all duration-200 ${
        isAcademic
          ? "border-2 border-slate-300 bg-white shadow-xs"
          : "border border-slate-200/90 bg-white/95 shadow-2xs hover:border-slate-300"
      }`}
    >
      <div className="p-5 sm:p-7 space-y-4">
        {/* Header Bar: Period, Badges */}
        <div className="flex flex-wrap items-center justify-between gap-2.5">
          <div className="flex flex-wrap items-center gap-2">
            <span
              className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold ${
                isAcademic
                  ? "bg-blue-900 text-white"
                  : "bg-slate-100 text-slate-700 border border-slate-200"
              }`}
            >
              {isAcademic ? (
                <GraduationCap className="w-3.5 h-3.5" />
              ) : (
                <Briefcase className="w-3.5 h-3.5" />
              )}
              <span>{experience.type}</span>
            </span>

            <span
              className={`text-[11px] font-mono font-medium px-2.5 py-0.5 rounded ${
                experience.relevanceBadge === "Strong Academic Relevance"
                  ? "bg-blue-50 text-blue-900 border border-blue-200 font-semibold"
                  : experience.relevanceBadge === "Strong Technical Relevance"
                  ? "bg-slate-100 text-slate-800 border border-slate-200"
                  : "bg-slate-50 text-slate-600 border border-slate-200"
              }`}
            >
              {experience.relevanceBadge}
            </span>
          </div>

          <div className="flex items-center gap-1.5 text-xs font-mono font-medium text-slate-500">
            <Calendar className="w-3.5 h-3.5 text-slate-400" />
            <span>{experience.period}</span>
          </div>
        </div>

        {/* Role & Organization */}
        <div>
          <h3
            className={`font-bold tracking-tight text-slate-900 ${
              isAcademic ? "text-xl sm:text-2xl" : "text-lg sm:text-xl"
            }`}
          >
            {experience.role}
          </h3>
          <p className="text-sm font-medium text-slate-700 mt-0.5">
            {experience.organization}
            {experience.department && (
              <span className="text-slate-500 font-normal">
                {" "}
                · {experience.department}
              </span>
            )}
          </p>
        </div>

        {/* Short Description */}
        {experience.description && (
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
            {experience.description}
          </p>
        )}

        {/* Tags (Courses or Technologies) */}
        <div className="flex flex-wrap gap-1.5 pt-1">
          {experience.courses &&
            experience.courses.map((course) => (
              <span
                key={course}
                className="inline-flex items-center gap-1 text-xs font-medium bg-blue-50 text-blue-900 border border-blue-200/80 px-2.5 py-0.5 rounded"
              >
                <BookOpen className="w-3 h-3 text-blue-700" />
                <span>{course}</span>
              </span>
            ))}
          {experience.technologies &&
            experience.technologies
              .filter((tech) => !experience.courses?.includes(tech))
              .map((tech) => (
                <span
                  key={tech}
                  className="text-xs font-mono bg-slate-100 text-slate-700 px-2 py-0.5 rounded border border-slate-200"
                >
                  {tech}
                </span>
              ))}
        </div>

        {/* Progressive Disclosure: Responsibilities */}
        {!isCompact && experience.bullets && experience.bullets.length > 0 && (
          <div className="pt-2 border-t border-slate-100">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              aria-expanded={isExpanded}
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:text-blue-950 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900 rounded py-1"
            >
              <span>
                {isExpanded ? "Hide responsibilities" : "View responsibilities"}
              </span>
              {isExpanded ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>

            {isExpanded && (
              <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-700 pl-1 animate-in fade-in duration-200">
                {experience.bullets.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-2">
                    <span className="text-blue-900 font-bold shrink-0 mt-0.5">•</span>
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>
            )}
          </div>
        )}

        {/* Relevance / Research Impact Callout */}
        {experience.researchRelevance && (
          <div className="p-3.5 rounded-lg bg-slate-50 border border-slate-200/80 text-xs text-slate-700 flex items-start gap-2">
            <Sparkles className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <div className="leading-relaxed">
              <strong className="font-semibold text-slate-900">
                {isAcademic ? "Academic Relevance: " : "Technical Relevance: "}
              </strong>
              <span>{experience.researchRelevance}</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
