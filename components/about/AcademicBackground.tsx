import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { EDUCATION, IELTS_RECORD, SELECTED_COURSEWORK } from "@/data/academic";
import { GraduationCap, Award, BookOpen, CheckCircle, School } from "lucide-react";

export default function AcademicBackground() {
  return (
    <SectionContainer
      id="academic-background"
      tag="Academic History"
      title="Academic Background"
      subtitle="Undergraduate foundation in Computer Science with a strong analytical focus on artificial intelligence, algorithmic foundations, and computer vision."
      className="bg-white"
    >
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
                <span className="text-slate-400 text-xs font-mono block">CGPA</span>
                <span className="text-xl font-extrabold text-blue-900">
                  {EDUCATION.cgpa}
                </span>
                <span className="text-xs text-slate-500 ml-1">
                  / {EDUCATION.totalCgpa}
                </span>
              </div>

              <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-400 text-xs font-mono block">COMPLETED</span>
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

        {/* Right Column: Selected Core Academic Coursework */}
        <div className="lg:col-span-7">
          <div className="rounded-xl border border-slate-200 bg-white p-6 sm:p-7 shadow-2xs">
            <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
              <h3 className="text-base font-bold text-slate-900">
                Selected Academic Disciplines
              </h3>
              <span className="text-xs font-mono text-slate-400">
                Key Curriculum Milestones
              </span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {SELECTED_COURSEWORK.map((course) => (
                <div
                  key={course.code}
                  className="p-3.5 rounded-lg bg-slate-50/60 border border-slate-200/80 hover:bg-white hover:border-slate-300 transition-colors"
                >
                  <div className="flex items-center justify-between gap-1 mb-1">
                    <span className="text-xs font-bold text-slate-900 leading-snug">
                      {course.name}
                    </span>
                    <span className="text-[10px] font-mono font-medium px-1.5 py-0.2 rounded bg-white text-slate-600 border border-slate-200">
                      {course.category}
                    </span>
                  </div>
                  <p className="text-[11px] text-slate-600 leading-normal">
                    {course.description}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-5 text-[11px] text-slate-500 italic text-right">
              Official academic transcript and semester-wise grade sheets available upon formal request.
            </p>
          </div>
        </div>
      </div>
    </SectionContainer>
  );
}
