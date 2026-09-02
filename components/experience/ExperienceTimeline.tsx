"use client";

import React, { useState, useMemo } from "react";
import { Experience, ExperienceType, EXPERIENCES } from "@/data/experience";
import ExperienceCard from "./ExperienceCard";

interface ExperienceTimelineProps {
  featuredOnly?: boolean;
  showFilter?: boolean;
  isCompact?: boolean;
}

export default function ExperienceTimeline({
  featuredOnly = false,
  showFilter = true,
  isCompact = false,
}: ExperienceTimelineProps) {
  const [filter, setFilter] = useState<"All" | ExperienceType>("All");

  const filteredExperiences = useMemo(() => {
    let list = EXPERIENCES;
    if (featuredOnly) {
      list = list.filter((e) => e.featured);
    }
    if (filter !== "All") {
      list = list.filter((e) => e.type === filter);
    }
    return list;
  }, [featuredOnly, filter]);

  const counts = useMemo(() => {
    return {
      All: EXPERIENCES.length,
      Academic: EXPERIENCES.filter((e) => e.type === "Academic").length,
      Internship: EXPERIENCES.filter((e) => e.type === "Internship").length,
    };
  }, []);

  return (
    <div className="space-y-8">
      {/* Filter Tabs */}
      {showFilter && (
        <div className="flex flex-wrap items-center justify-center gap-2">
          {(["All", "Academic", "Internship"] as const).map((tab) => {
            const isSelected = filter === tab;
            return (
              <button
                key={tab}
                onClick={() => setFilter(tab)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900 ${
                  isSelected
                    ? "bg-slate-900 text-white shadow-xs font-semibold"
                    : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
                }`}
              >
                <span>{tab}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                    isSelected
                      ? "bg-slate-800 text-slate-200"
                      : "bg-slate-100 text-slate-500"
                  }`}
                >
                  {counts[tab]}
                </span>
              </button>
            );
          })}
        </div>
      )}

      {/* Timeline List */}
      <div className="relative space-y-6 sm:space-y-8">
        {filteredExperiences.map((exp) => (
          <div
            key={exp.id}
            className="grid grid-cols-1 md:grid-cols-12 gap-3 md:gap-8 items-start"
          >
            {/* Left Column: Academic Date Year (Desktop) */}
            <div className="md:col-span-3 pt-2 md:text-right">
              <span className="font-mono text-xs sm:text-sm font-bold text-slate-900 uppercase tracking-wider block">
                {exp.period.split(" ")[exp.period.split(" ").length - 1] === "2026" &&
                exp.period.includes("2025")
                  ? "2025 — 2026"
                  : exp.period.includes("2025")
                  ? "2025"
                  : "2024"}
              </span>
              <span className="text-[11px] font-mono text-slate-400 block mt-0.5">
                {exp.type === "Academic" ? "Academic Appointment" : "Industry Internship"}
              </span>
            </div>

            {/* Right Column: Experience Card */}
            <div className="md:col-span-9">
              <ExperienceCard experience={exp} isCompact={isCompact} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
