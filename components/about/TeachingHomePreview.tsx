import React from "react";
import Link from "next/link";
import { GraduationCap, ArrowRight, Award, School, BookOpen } from "lucide-react";
import { TEACHING_EXPERIENCE, EDUCATION } from "@/data/academic";

export default function TeachingHomePreview() {
  return (
    <section className="py-14 sm:py-18 bg-white border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-4 mb-10">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-50 text-blue-900 border border-blue-200/80 mb-3">
              <GraduationCap className="w-3.5 h-3.5 text-blue-800" />
              <span>Academic Preparation</span>
            </div>
            <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-slate-900">
              Academic Background &amp; Teaching Service
            </h2>
            <p className="mt-3 text-base text-slate-650 leading-relaxed">
              Undergraduate foundation in Computer Science with multiple semesters of Teaching Assistant service across four core courses.
            </p>
          </div>

          <Link
            href="/about"
            className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-900 hover:underline shrink-0"
          >
            <span>View Full Academic Profile</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Degree Snapshot Card */}
          <div className="lg:col-span-4 p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-blue-900 text-white flex items-center justify-center shrink-0">
                <School className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono font-bold text-slate-400 block">UNDERGRADUATE DEGREE</span>
                <span className="text-xs text-slate-500 font-mono">2022–2026</span>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-slate-900">
                {EDUCATION.degree}
              </h3>
              <p className="text-xs text-slate-600 mt-0.5 font-medium">
                {EDUCATION.institution} — {EDUCATION.campus}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-200 grid grid-cols-2 gap-3">
              <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-400 text-[11px] font-mono block">CGPA</span>
                <span className="text-lg font-extrabold text-blue-900">{EDUCATION.cgpa}</span>
                <span className="text-xs text-slate-500"> / {EDUCATION.totalCgpa}</span>
              </div>
              <div className="p-3 bg-white rounded-lg border border-slate-200/80">
                <span className="text-slate-400 text-[11px] font-mono block">CREDITS</span>
                <span className="text-lg font-extrabold text-slate-900">{EDUCATION.credits}</span>
                <span className="text-xs text-slate-500"> Completed</span>
              </div>
            </div>

            <div className="pt-2 text-xs text-slate-600 flex items-center justify-between border-t border-slate-200/70">
              <span className="font-semibold text-slate-700">Language:</span>
              <span className="font-mono text-slate-900 font-semibold">IELTS 7.0 Overall (C1)</span>
            </div>
          </div>

          {/* 4 Highlighted TA Courses */}
          <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {TEACHING_EXPERIENCE.map((ta) => (
              <div
                key={ta.course}
                className="p-5 rounded-xl border border-slate-200 bg-white hover:border-slate-300 transition-all space-y-2 shadow-2xs"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-mono font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
                    {ta.role}
                  </span>
                  <span className="text-[11px] font-mono text-slate-500">
                    {ta.duration}
                  </span>
                </div>

                <h4 className="text-base font-bold text-slate-900">
                  {ta.course}
                </h4>

                <p className="text-xs text-slate-650 leading-relaxed">
                  {ta.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
