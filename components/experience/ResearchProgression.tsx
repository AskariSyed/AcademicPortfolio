import React from "react";
import { ArrowRight, Compass, Layers, ShieldCheck, Sparkles } from "lucide-react";

export default function ResearchProgression() {
  const progressionSteps = [
    { title: "Software Quality Assurance", detail: "Empirical verification & defect analysis" },
    { title: "Backend & Systems", detail: "API architecture & relational modeling" },
    { title: "Teaching & Academic Support", detail: "Algorithmic & pedagogical foundations" },
    { title: "AI & Pattern Recognition", detail: "Theoretical modeling & feature spaces" },
    { title: "Computer Vision Research", detail: "Domain shift & adverse weather" },
    { title: "Robust & Reliable AI", detail: "Distributional resilience & adaptation" },
  ];

  return (
    <section className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 md:p-10 shadow-sm space-y-6">
      <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
        <Compass className="w-4 h-4 text-blue-700" />
        <span>Academic Trajectory</span>
      </div>

      <div>
        <h2 className="text-xl sm:text-2xl font-bold tracking-tight text-slate-900">
          From Engineering to Research
        </h2>
        <p className="mt-3 text-sm sm:text-base text-slate-700 font-serif italic border-l-2 border-blue-900 pl-4 py-1 bg-slate-50 leading-relaxed">
          &ldquo;My experience spans software engineering, quality assurance, computer science education, and applied AI-related coursework. These experiences have progressively shaped my interest in building reliable intelligent systems, leading toward current research interests in robust computer vision, domain shift, few-shot adaptation, and multimodal AI.&rdquo;
        </p>
      </div>

      {/* Visual Continuum Flow */}
      <div className="pt-2 space-y-3">
        <span className="text-xs font-mono font-bold uppercase text-slate-500 block">
          Foundational Growth Continuum
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {progressionSteps.map((step, idx) => (
            <div
              key={step.title}
              className="p-4 rounded-xl bg-slate-50/80 border border-slate-200/90 shadow-2xs space-y-1 relative"
            >
              <div className="flex items-center justify-between">
                <span className="text-[10px] font-mono font-bold text-blue-900">
                  STAGE 0{idx + 1}
                </span>
                {idx === progressionSteps.length - 1 && (
                  <span className="text-[10px] font-mono font-semibold px-2 py-0.2 rounded bg-blue-900 text-white">
                    Current Focus
                  </span>
                )}
              </div>
              <h3 className="text-xs sm:text-sm font-bold text-slate-900">
                {step.title}
              </h3>
              <p className="text-[11px] text-slate-500 leading-snug">
                {step.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
