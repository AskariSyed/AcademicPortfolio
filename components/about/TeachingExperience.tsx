import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { TEACHING_EXPERIENCE } from "@/data/academic";
import { GraduationCap, Users, BookOpen, Clock } from "lucide-react";

export default function TeachingExperience() {
  return (
    <SectionContainer
      id="teaching-experience"
      tag="Academic Service"
      title="Teaching & Academic Experience"
      subtitle="Teaching Assistant across four undergraduate Computer Science courses, supporting instructors with assessment, student academic assistance, viva examinations, and course administration across Spring 2025–Spring 2026."
      className="bg-slate-50/50"
    >
      {/* Prominent Highlight Banner */}
      <div className="mb-10 p-5 rounded-xl bg-blue-900 text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 shadow-sm">
        <div className="flex items-center gap-3.5">
          <div className="w-12 h-12 rounded-lg bg-blue-800 border border-blue-700 flex items-center justify-center shrink-0">
            <GraduationCap className="w-6 h-6 text-blue-200" />
          </div>
          <div>
            <h3 className="text-lg font-bold">
              Teaching Assistant · Spring 2025 – Spring 2026
            </h3>
            <p className="text-xs sm:text-sm text-blue-200">
              Department of Computer Science, COMSATS University Islamabad — Wah Campus
            </p>
          </div>
        </div>

        <div className="px-3.5 py-1.5 rounded-full bg-blue-800/80 border border-blue-700 text-xs font-mono font-semibold shrink-0">
          Academic Support &amp; Assessment
        </div>
      </div>

      {/* Teaching Positions Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {TEACHING_EXPERIENCE.map((item, index) => (
          <div
            key={index}
            className="p-6 rounded-xl border border-slate-200/90 bg-white shadow-2xs hover:border-slate-300 transition-all"
          >
            <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
              <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2.5 py-0.5 rounded border border-blue-200/60">
                {item.role}
              </span>
              <span className="text-xs font-mono text-slate-500 flex items-center gap-1">
                <Clock className="w-3 h-3 text-slate-400" />
                <span>{item.duration}</span>
              </span>
            </div>

            <h4 className="text-base sm:text-lg font-bold text-slate-900 mt-2">
              {item.course}
            </h4>

            <div className="text-xs text-slate-500 font-medium mt-0.5">
              {item.institution}
            </div>

            <p className="mt-3.5 text-xs sm:text-sm text-slate-650 leading-relaxed border-t border-slate-100 pt-3">
              {item.description}
            </p>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
