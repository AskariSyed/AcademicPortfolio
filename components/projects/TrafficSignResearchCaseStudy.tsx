import React from "react";
import Link from "next/link";
import { Project } from "@/data/projects";
import {
  HelpCircle,
  Clock,
  ShieldAlert,
  Compass,
  FileCheck2,
  Cpu,
  Layers,
  Sparkles,
  Users,
  Building2,
  ArrowRight,
  ShieldCheck,
  BarChart3,
  AlertTriangle,
  Lightbulb,
  CheckCircle2,
} from "lucide-react";

interface TrafficSignResearchCaseStudyProps {
  project: Project;
}

export default function TrafficSignResearchCaseStudy({
  project,
}: TrafficSignResearchCaseStudyProps) {
  const data = project.trafficSignCaseStudy;
  if (!data) return null;

  return (
    <article className="space-y-12">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-blue-900 text-white">
              FLAGSHIP RESEARCH INVESTIGATION · {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>{project.status}</span>
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            Environmental Domain Shift
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-blue-900 font-mono mt-1.5">
            Computer Vision · Robust Recognition · Environmental Domain Shift · Deep Learning
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-serif italic border-l-3 border-blue-900 pl-4 py-1.5 bg-blue-50/20 leading-relaxed">
            &ldquo;{data.publicDescription}&rdquo;
          </p>
        </div>

        {/* Authors & Institutional Affiliation */}
        <div className="pt-3 border-t border-slate-100 flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-700">
          <div className="flex items-center gap-2">
            <Users className="w-4 h-4 text-blue-900" />
            <span>
              <strong>Authors:</strong>{" "}
              {data.authors ? data.authors.join(", ") : "Muhammad Hassan Askari, Muhammad Shareef, Marwa Khanam"}
            </span>
          </div>
          <div className="flex items-center gap-1.5 text-xs text-slate-600">
            <Building2 className="w-3.5 h-3.5 text-slate-500" />
            <span>{data.institution || "COMSATS University Islamabad"}</span>
          </div>
        </div>

        {/* Action Navigation Bar */}
        <div className="pt-2 flex flex-wrap items-center gap-2.5 text-xs font-semibold">
          <a href="#research-problem" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Problem</a>
          <a href="#research-question" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Question</a>
          <a href="#method" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Method</a>
          <a href="#experimental-setup" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Setup</a>
          <a href="#results" className="px-3 py-1.5 rounded-md bg-blue-50 text-blue-900 hover:bg-blue-100 transition-colors">Results</a>
          <a href="#what-i-learned" className="px-3 py-1.5 rounded-md bg-amber-50 text-amber-900 hover:bg-amber-100 transition-colors">Peer Review &amp; Revision</a>
          <a href="#limitations" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Limitations</a>
          <a href="#next-step" className="px-3 py-1.5 rounded-md bg-slate-100 text-slate-700 hover:bg-slate-200 transition-colors">Next Steps</a>
        </div>
      </section>

      {/* Explicit Status Transparency */}
      <section className="p-5 sm:p-6 rounded-xl bg-amber-50/70 border border-amber-300/80 shadow-2xs space-y-1.5">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Research Status Transparency</span>
        </div>
        <h2 className="text-base font-bold text-slate-900">
          Manuscript in Preparation · MDPI Sensors
        </h2>
        <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
          This study is an ongoing research investigation currently undergoing systematic methodological and experimental refinement. It has not yet been accepted or published. Future formal submission is planned for MDPI Sensors upon completion of remaining validation.
        </p>
      </section>

      {/* Section 1: Research Problem */}
      <section id="research-problem" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 01 · Motivation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Problem
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Autonomous vehicle perception and driver assistance systems rely on accurate traffic sign classification to ensure navigational safety. However, real-world cold-climate deployment exposes cameras to severe snow corruption, including falling flakes, surface accumulation, atmospheric scattering, and contrast attenuation.
          </p>
          <p>
            These degradations obscure distinctive edge geometries, color boundaries, and interior glyphs, inducing an acute <strong>environmental domain shift</strong> where clean-trained neural network representations fail catastrophically on degraded target evidence.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2">
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">Visual Occlusion</strong>
              <span className="text-slate-650">Falling and accumulated snow partially masks sign pictograms.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">Contrast Loss</strong>
              <span className="text-slate-650">Atmospheric scattering compresses the dynamic color range.</span>
            </div>
            <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs">
              <strong className="block text-slate-900 mb-1">Domain Divergence</strong>
              <span className="text-slate-650">Test imagery deviates fundamentally from clean benchmark distributions.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Research Question */}
      <section id="research-question" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 02 · Inquiry
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Question
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Core Hypothesis</span>
          </div>

          <h3 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">
            &ldquo;How can a visual recognition system maintain reliable classification when environmental degradation progressively removes useful visual information?&rdquo;
          </h3>

          <p className="text-xs sm:text-sm text-slate-650 border-t border-blue-200/60 pt-3 leading-relaxed">
            Specifically: Can an intermediate deep restoration stage recover discriminative boundary and feature evidence before classification heads, and how should restoration and categorization be coordinated under severe corruption?
          </p>
        </div>
      </section>

      {/* Section 3: Method */}
      <section id="method" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 03 · Architecture
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Method
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-5 text-sm text-slate-700 leading-relaxed">
          <p>
            The project designs a <strong>task-aware multi-stage framework</strong> that treats adverse weather recognition as an integrated restoration-classification task. Rather than relying on naive sequential restoration (which can introduce artifacts that mislead the classifier), the framework evaluates feature recoverability at intermediate representation layers.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { stage: "01", title: "Degraded Input", desc: "Snow occlusion & scattering" },
              { stage: "02", title: "Normalization", desc: "Spatial & dynamic alignment" },
              { stage: "03", title: "Deep Restoration", desc: "Targeted snow removal" },
              { stage: "04", title: "Feature Recovery", desc: "Edge & contour preservation" },
              { stage: "05", title: "Deep Classifier", desc: "Compound-scaled backbone" },
              { stage: "06", title: "Robust Category", desc: "Calibrated prediction" },
            ].map((s) => (
              <div key={s.stage} className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-center space-y-1">
                <span className="text-[10px] font-mono font-bold text-blue-900 block">STAGE {s.stage}</span>
                <span className="text-xs font-bold text-slate-800 block leading-tight">{s.title}</span>
                <span className="text-[10px] text-slate-500 block">{s.desc}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: Experimental Setup */}
      <section id="experimental-setup" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 04 · Protocol
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Experimental Setup
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase block">Benchmark Dataset</span>
              <p className="font-semibold text-slate-900 text-sm">Belgium Traffic Sign Classification (BTSC)</p>
              <p className="text-slate-650 text-xs">Used as the primary clean baseline distribution for traffic sign classes, spanning speed limits, prohibitions, warnings, and mandatory directions.</p>
            </div>

            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1.5">
              <span className="text-xs font-mono font-bold text-slate-500 uppercase block">Classification Backbone</span>
              <p className="font-semibold text-slate-900 text-sm">EfficientNet-B2 (Compound Scaling)</p>
              <p className="text-slate-650 text-xs">Evaluated across clean inputs, corrupted snow conditions, and restored representations to establish performance degradation and recovery trajectories.</p>
            </div>
          </div>

          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-500 uppercase block">Degradation Protocol</span>
            <p className="text-slate-650 text-xs leading-relaxed">
              Controlled synthetic snow degradation is introduced at calibrated severity levels to simulate real atmospheric scattering, flake density, and contrast attenuation. Models are evaluated across three paired conditions: (1) Clean Baseline, (2) Snow-Degraded, and (3) Post-Restoration.
            </p>
          </div>
        </div>
      </section>

      {/* Section 5: Results */}
      <section id="results" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 05 · Quantitative Evidence
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Results
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border-2 border-blue-900/30 shadow-2xs space-y-6">
          {/* Prominent Metric Banner */}
          <div className="p-5 rounded-xl bg-blue-50/70 border border-blue-200/90 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <span className="text-xs font-mono font-bold text-blue-900 uppercase tracking-wider block mb-1">
                Top-1 Classification Accuracy under Severe Snow
              </span>
              <div className="text-3xl sm:text-4xl font-black text-slate-900 tracking-tight">
                68.02% → 87.34%
              </div>
              <p className="text-xs text-slate-650 mt-1">
                Measured on EfficientNet-B2 under severe snow degradation following task-aware multi-stage recovery.
              </p>
            </div>
            <span className="px-3 py-1.5 rounded-md bg-blue-900 text-white font-mono text-xs font-bold shrink-0 text-center">
              +19.32% Gain
            </span>
          </div>

          {/* Comparative Table */}
          <div className="overflow-x-auto rounded-lg border border-slate-200">
            <table className="w-full text-left text-xs sm:text-sm">
              <thead className="bg-slate-50 border-b border-slate-200 font-mono text-slate-650 text-[11px] uppercase">
                <tr>
                  <th className="px-4 py-3">Evaluation Condition</th>
                  <th className="px-4 py-3">Backbone Model</th>
                  <th className="px-4 py-3">Observation</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="px-4 py-3 font-semibold text-slate-900">Clean Benchmark</td>
                  <td className="px-4 py-3 font-mono">EfficientNet-B2</td>
                  <td className="px-4 py-3 text-slate-650">Baseline upper-bound performance under uncorrupted lighting</td>
                </tr>
                <tr className="bg-rose-50/30">
                  <td className="px-4 py-3 font-semibold text-rose-900">Severe Snow Degradation</td>
                  <td className="px-4 py-3 font-mono text-rose-900">EfficientNet-B2 (68.02%)</td>
                  <td className="px-4 py-3 text-slate-650">Severe drop due to occlusion, contrast attenuation, and feature loss</td>
                </tr>
                <tr className="bg-blue-50/40">
                  <td className="px-4 py-3 font-semibold text-blue-950">Multi-Stage Task-Aware</td>
                  <td className="px-4 py-3 font-mono text-blue-950 font-bold">EfficientNet-B2 (87.34%)</td>
                  <td className="px-4 py-3 text-slate-650">Substantial accuracy recovery through discriminative feature recovery</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="p-3 rounded-lg bg-slate-50 border border-slate-200 text-xs text-slate-650 flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-blue-900 shrink-0 mt-0.5" />
            <span>
              Detailed confusion matrices, per-class sensitivity breakdowns, and ablation tables are cataloged internally for manuscript submission.
            </span>
          </div>
        </div>
      </section>

      {/* Section 6: What I Learned (Peer Review, Rejection & Revision) */}
      <section id="what-i-learned" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-amber-900 block mb-1">
            Section 06 · Scholarly Growth
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            What I Learned: Peer-Review Feedback &amp; Methodological Revision
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-5 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <div className="p-4 rounded-lg bg-amber-50/60 border border-amber-200 text-slate-800 space-y-2">
            <div className="flex items-center gap-2 font-bold text-amber-950 text-xs uppercase tracking-wider font-mono">
              <AlertTriangle className="w-4 h-4 text-amber-700" />
              <span>FIT 2025 Submission &amp; Rejection</span>
            </div>
            <p className="leading-relaxed">
              The earliest formulation of this project was submitted to <strong>FIT 2025</strong> and subsequently rejected. Peer reviewers raised valid, critical concerns: the experimental baselines lacked sufficient depth, the two-step sequential pipeline was insufficiently ablated, and the work needed clearer theoretical justification for why restoration would assist classification rather than introduce hallucinated artifacts.
            </p>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900">
              Systematic Methodological Overhaul
            </h3>
            <p>
              Rather than discarding the work, I used the reviewer feedback as a diagnostic roadmap. This experience taught me foundational research maturity:
            </p>
            <ul className="space-y-2 pl-2">
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>From naive cascading to task-aware feature recovery:</strong> Disentangling image enhancement from categorical classification to isolate whether restored pixels translate to restored representations.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Expanded ablation depth:</strong> Measuring intermediate feature recoverability and comparing against direct training under noise.</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                <span><strong>Appreciation for rigorous peer review:</strong> Recognizing that critique is the core mechanism through which scientific rigor is achieved.</span>
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* Section 7: Limitations */}
      <section id="limitations" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-slate-500 block mb-1">
            Section 07 · Boundary Analysis
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Limitations
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            To maintain academic honesty, the current study recognizes several experimental limitations:
          </p>
          <ul className="space-y-2 pl-2 text-slate-650">
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Synthetic Weather Models:</strong> While degradation parameters are physically grounded, synthetic snow cannot fully reproduce the micro-optical scattering, wiper streaks, and compound freezing effects of real-world blizzards.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Computational Latency:</strong> Running multi-stage image restoration before deep classification incurs computational overhead that requires optimization for real-time autonomous driving embedded platforms.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-900 font-bold">•</span>
              <span><strong>Compound Corruptions:</strong> The current evaluation focuses primarily on snow; co-occurring degradations (such as snow with nighttime glare or rain-snow slush) remain to be systematically benchmarked.</span>
            </li>
          </ul>
        </div>
      </section>

      {/* Section 8: Next Step */}
      <section id="next-step" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Section 08 · Future Agenda
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Next Scientifically Meaningful Steps
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            The next milestones for this research trajectory include:
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1">
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <strong className="text-slate-900 text-xs block">1. Real-World Data Collection</strong>
              <span className="text-slate-650 text-xs">Validating the multi-stage framework against natural, in-the-wild snow-degraded traffic imagery captured across diverse geographic regions.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <strong className="text-slate-900 text-xs block">2. Spatial Uncertainty Weighting</strong>
              <span className="text-slate-650 text-xs">Incorporating patch-level uncertainty maps to weight feature representations dynamically where degradation is most acute.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <strong className="text-slate-900 text-xs block">3. Differentiable End-to-End Tuning</strong>
              <span className="text-slate-650 text-xs">Formulating a unified objective where the restoration module receives task loss gradients from the classifier.</span>
            </div>
            <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-1">
              <strong className="text-slate-900 text-xs block">4. MDPI Sensors Submission</strong>
              <span className="text-slate-650 text-xs">Finalizing ablation benchmarks, formatting manuscript tables, and submitting for peer review.</span>
            </div>
          </div>
        </div>
      </section>

      {/* Navigation Footer */}
      <section className="p-6 rounded-xl bg-slate-900 text-white flex flex-wrap items-center justify-between gap-4">
        <div>
          <h3 className="text-sm font-bold">Next Flagship Project</h3>
          <p className="text-xs text-slate-300">Few-Shot Adaptation for AI-Generated Image Detection under Unseen Generator Distribution Shift</p>
        </div>
        <Link
          href="/projects/fewshot-aigd-shift"
          className="px-4 py-2 rounded-md text-xs font-semibold bg-white text-slate-900 hover:bg-slate-100 transition-colors flex items-center gap-1.5"
        >
          <span>Explore Case Study 02</span>
          <ArrowRight className="w-3.5 h-3.5" />
        </Link>
      </section>
    </article>
  );
}
