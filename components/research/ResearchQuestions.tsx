import React from "react";
import SectionContainer from "@/components/layout/SectionContainer";
import { RESEARCH_QUESTIONS } from "@/data/research";
import { HelpCircle, Sparkles } from "lucide-react";

export default function ResearchQuestions() {
  return (
    <SectionContainer
      id="research-questions"
      tag="Theoretical Inquiry"
      title="Questions I'm Currently Exploring"
      subtitle="Foundational research inquiries guiding my academic trajectory into graduate research."
      className="bg-slate-50/60"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {RESEARCH_QUESTIONS.map((item, index) => (
          <div
            key={item.number}
            className={`group relative flex flex-col justify-between p-6 sm:p-7 rounded-xl border border-slate-200/90 bg-white hover:border-blue-900/40 hover:shadow-md transition-all duration-300 ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="font-mono text-2xl font-black text-blue-900/30 group-hover:text-blue-900 transition-colors">
                  {item.number}
                </span>
                <HelpCircle className="w-4 h-4 text-slate-400 group-hover:text-blue-900 transition-colors" />
              </div>

              <h3 className="text-base sm:text-lg font-serif font-bold text-slate-900 leading-snug">
                &ldquo;{item.question}&rdquo;
              </h3>
            </div>

            <div className="mt-5 pt-4 border-t border-slate-100">
              <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                {item.context}
              </p>
            </div>
          </div>
        ))}
      </div>
    </SectionContainer>
  );
}
