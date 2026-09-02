"use client";

import React, { useState } from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import {
  EDUCATION,
  IELTS_RECORD,
  COURSE_GROUPS,
  RESEARCH_INTERESTS,
} from "@/data/academic";
import {
  BookOpen,
  School,
  Sparkles,
  Layers,
  Compass,
  CheckCircle2,
} from "lucide-react";

export default function AcademicBackground() {
  const [activeCategory, setActiveCategory] = useState(
    COURSE_GROUPS[0].category
  );

  const selectedGroup =
    COURSE_GROUPS.find((g) => g.category === activeCategory) ||
    COURSE_GROUPS[0];

  return (
    <SectionContainer
      id="academic-background"
      tag="Academic History"
      title="Academic Background"
      subtitle="Undergraduate training in Computer Science spanning artificial intelligence, algorithms, software engineering, systems, security, and distributed computing, complemented by independent research in robust computer vision and machine learning."
      className="bg-white"
    >
      <div className="space-y-12">
        {/* Top Split: Degree Metrics & Curriculum */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Formal Degree & Language Proficiency */}
          <div className="lg:col-span-5 space-y-6">
            {/* Degree Card */}
            <div className="rounded-xl border border-slate-200 bg-slate-50/50 p-6 sm:p-7 shadow-2xs">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center">
                  <School className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs font-mono font-bold text-slate-500 uppercase tracking-wider block">
                    Undergraduate Degree
                  </span>
                  <span className="text-xs text-slate-400 font-mono">
                    {EDUCATION.period}
                  </span>
                </div>
              </div>

              <h3 className="text-xl font-bold text-slate-900 leading-tight">
                {EDUCATION.degree}
              </h3>

              <div className="mt-1 text-sm font-medium text-slate-700">
                {EDUCATION.institution} — {EDUCATION.campus}
              </div>

              <div className="mt-6 pt-5 border-t border-slate-200 grid grid-cols-2 gap-4">
                <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                  <span className="text-slate-400 text-xs font-mono block">
                    CGPA
                  </span>
                  <span className="text-xl font-extrabold text-blue-900">
                    {EDUCATION.cgpa}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">
                    / {EDUCATION.totalCgpa}
                  </span>
                </div>

                <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                  <span className="text-slate-400 text-xs font-mono block">
                    COMPLETED
                  </span>
                  <span className="text-xl font-extrabold text-slate-900">
                    {EDUCATION.credits}
                  </span>
                  <span className="text-xs text-slate-500 ml-1">Credits</span>
                </div>
              </div>

              <p className="mt-4 text-xs text-slate-650 leading-relaxed">
                {EDUCATION.highlight}
              </p>
            </div>

            {/* IELTS Academic Credential */}
            <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-2xs">
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <BookOpen className="w-4 h-4 text-blue-900" />
                  <h4 className="text-sm font-bold text-slate-900">
                    Language Proficiency
                  </h4>
                </div>
                <span className="px-2 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                  CEFR {IELTS_RECORD.cefrLevel}
                </span>
              </div>

              <div className="flex items-baseline gap-3">
                <span className="text-2xl font-black text-slate-900">
                  {IELTS_RECORD.overallScore}
                </span>
                <span className="text-xs text-slate-500">
                  Overall Band Score ({IELTS_RECORD.test})
                </span>
              </div>
            </div>
          </div>

          {/* Right Column: Selected Academic Coursework (Grouped by Area) */}
          <div className="lg:col-span-7 space-y-4">
            <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs space-y-5">
              <div className="flex flex-wrap items-center justify-between gap-2 border-b border-slate-100 pb-3">
                <div>
                  <h3 className="text-base font-bold text-slate-900">
                    Selected Academic Coursework
                  </h3>
                  <p className="text-xs text-slate-500 mt-0.5">
                    Verified BS Computer Science transcript curriculum (133 Credits Completed)
                  </p>
                </div>
                <span className="text-xs font-mono text-slate-400">
                  Transcript-Verified
                </span>
              </div>

              {/* Category Filter Tabs */}
              <div className="flex flex-wrap gap-1.5">
                {COURSE_GROUPS.map((group) => {
                  const isSelected = activeCategory === group.category;
                  return (
                    <button
                      key={group.category}
                      onClick={() => setActiveCategory(group.category)}
                      className={`px-3 py-1.5 rounded-md text-xs font-medium transition-all ${
                        isSelected
                          ? "bg-slate-900 text-white font-semibold shadow-xs"
                          : "bg-slate-100 text-slate-700 hover:bg-slate-200"
                      }`}
                    >
                      {group.category}
                    </button>
                  );
                })}
              </div>

              {/* Group Description */}
              <p className="text-xs text-slate-600 italic bg-slate-50 p-2.5 rounded border border-slate-200/70">
                {selectedGroup.description}
              </p>

              {/* Courses Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {selectedGroup.courses.map((course, idx) => (
                  <div
                    key={`${course.title}-${idx}`}
                    className="p-3 rounded-lg bg-slate-50/70 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-colors flex items-center justify-between gap-2"
                  >
                    <span className="text-xs font-semibold text-slate-900 truncate">
                      {course.title}
                    </span>
                    {course.code && (
                      <span className="text-[10px] font-mono font-medium px-2 py-0.5 rounded bg-white text-slate-600 border border-slate-200 shrink-0">
                        {course.code}
                      </span>
                    )}
                  </div>
                ))}
              </div>

              <p className="text-[11px] text-slate-500 italic text-right pt-2 border-t border-slate-100">
                Official academic transcript and semester-wise grade records available upon formal request.
              </p>
            </div>
          </div>
        </div>

        {/* Distinct Research Interests Section (Separate from Coursework) */}
        <section className="rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 md:p-10 shadow-2xs space-y-6">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <Compass className="w-4 h-4 text-blue-700" />
            <span>Graduate Trajectory</span>
          </div>

          <div>
            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
              Research Interests
            </h3>
            <p className="mt-3 text-sm sm:text-base text-slate-700 font-serif italic border-l-2 border-blue-900 pl-4 py-1.5 bg-white rounded-r-md leading-relaxed">
              &ldquo;My formal undergraduate training provided a foundation in artificial intelligence, algorithms, software engineering, systems, and computing, while my subsequent research work has developed toward robust computer vision, machine learning, domain adaptation, and multimodal AI.&rdquo;
            </p>
          </div>

          {/* Research Interests Tags */}
          <div className="pt-2">
            <span className="text-xs font-mono font-bold uppercase text-slate-500 block mb-3">
              Independent Research &amp; Theoretical Focus
            </span>
            <div className="flex flex-wrap gap-2.5">
              {RESEARCH_INTERESTS.map((interest) => (
                <span
                  key={interest}
                  className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white text-slate-900 border border-slate-300/80 shadow-2xs"
                >
                  <Sparkles className="w-3.5 h-3.5 text-blue-900" />
                  <span>{interest}</span>
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </SectionContainer>
  );
}
