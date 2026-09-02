import React from "react";
import { Eye, Network, Layers, ShieldCheck, ArrowRight } from "lucide-react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_FOCUS_CARDS } from "@/data/research";
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

      <div className="mt-8 flex justify-end">
        <Link
          href="/research"
          className="inline-flex items-center gap-1.5 text-sm font-semibold text-blue-900 hover:text-blue-950 hover:underline"
        >
          <span>View Comprehensive Research Agenda</span>
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </SectionContainer>
  );
}
