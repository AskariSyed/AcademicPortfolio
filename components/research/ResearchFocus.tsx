import React from "react";
import { Eye, Network, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_FOCUS_CARDS, RESEARCH_HIERARCHY } from "@/data/research";
import Link from "next/link";

const ICONS = {
  "robust-cv": Eye,
  "domain-adaptation": Network,
  "multimodal-ai": Layers,
  "trustworthy-vision": ShieldCheck,
};

export default function ResearchFocus() {
  return (
    <SectionContainer
      id="research-focus"
      tag="Core Interests"
      title="Research Focus"
      subtitle="I am interested in understanding how visual AI systems can remain reliable when the conditions under which they operate change."
      className="bg-white"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
        {RESEARCH_FOCUS_CARDS.map((card, idx) => {
          const Icon = ICONS[card.id as keyof typeof ICONS] || Eye;
          return (
            <div
              key={card.id}
              className="group relative flex flex-col justify-between rounded-xl border border-slate-200/90 bg-slate-50/40 p-6 sm:p-8 hover:bg-white hover:border-blue-900/40 hover:shadow-md transition-all duration-300"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-200/70 flex items-center justify-center text-blue-900 group-hover:bg-blue-900 group-hover:text-white transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className="text-xs font-mono font-semibold text-slate-400 group-hover:text-slate-600">
                    FOCUS 0{idx + 1}
                  </span>
                </div>

                <div>
                  <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-blue-950 transition-colors">
                    {card.title}
                  </h3>
                  <p className="text-xs font-medium text-slate-500 mt-1 italic">
                    {card.tagline}
                  </p>
                </div>

                <p className="text-sm sm:text-base text-slate-650 leading-relaxed">
                  &ldquo;{card.description}&rdquo;
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-slate-200/70">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="text-xs font-semibold text-slate-500 mr-1">
                    Key Topics:
                  </span>
                  {card.topics.map((topic) => (
                    <span
                      key={topic}
                      className="inline-block px-2.5 py-1 rounded-md text-xs font-medium bg-white text-slate-700 border border-slate-200/80 group-hover:border-slate-300"
                    >
                      {topic}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Structured Research Hierarchy */}
      <div className="mt-12 rounded-2xl border border-slate-200 bg-slate-50/70 p-6 sm:p-8 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Research Interest Hierarchy
          </span>
          <h3 className="text-lg sm:text-xl font-bold text-slate-900">
            Demonstrated vs. Prospective Specialization
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Organized to clearly distinguish established empirical investigation from prospective research vectors.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-4">
          {/* Primary */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border-2 border-blue-900/30 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
                Primary Interests
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-bold bg-blue-100 text-blue-900">
                Active Projects
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-semibold text-slate-900">
              {RESEARCH_HIERARCHY.primary.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-700" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Secondary */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
                Secondary Interests
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-slate-100 text-slate-600">
                Emerging Trajectory
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
              {RESEARCH_HIERARCHY.secondary.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-400" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Emerging */}
          <div className="p-4 sm:p-5 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-2.5">
            <div className="flex items-center justify-between">
              <span className="text-xs font-mono font-bold uppercase tracking-wider text-purple-700">
                Emerging Direction
              </span>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono font-medium bg-purple-50 text-purple-700 border border-purple-200">
                Prospective Vectors
              </span>
            </div>
            <ul className="space-y-1.5 text-xs sm:text-sm font-medium text-slate-700">
              {RESEARCH_HIERARCHY.emerging.map((item) => (
                <li key={item.title} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-purple-400" />
                  <span>{item.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div className="mt-8 flex justify-end">
        <Link
          href="/publications"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-950 hover:underline"
        >
          <span>Explore Research Output &amp; Manuscripts</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionContainer>
  );
}
