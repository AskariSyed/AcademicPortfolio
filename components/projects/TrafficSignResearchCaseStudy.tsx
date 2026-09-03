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
  Table,
  ArrowRight,
  Eye,
  ShieldCheck,
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
    <article className="space-y-14">
      {/* 1. Project Header / Hero */}
      <section className="rounded-2xl border-2 border-slate-300/80 bg-white p-6 sm:p-10 shadow-sm space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex flex-wrap items-center gap-2">
            <span className="px-3 py-1 rounded-full text-xs font-mono font-bold uppercase tracking-wider bg-slate-900 text-white">
              RESEARCH INVESTIGATION · {project.year}
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-300/80">
              <Clock className="w-3.5 h-3.5 text-amber-700" />
              <span>{project.status}</span>
            </span>
          </div>
          <span className="font-mono text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded">
            {project.shortTitle}
          </span>
        </div>

        <div>
          <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold tracking-tight text-slate-900 leading-tight">
            {project.title}
          </h1>
          <p className="text-sm sm:text-base font-semibold text-blue-900 font-mono mt-1.5">
            Computer Vision · Robust Recognition · Environmental Domain Shift · Deep Learning
          </p>
          <p className="mt-4 text-base sm:text-lg text-slate-700 font-serif italic border-l-3 border-slate-900 pl-4 py-1.5 bg-slate-50 leading-relaxed">
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

        {/* Research Tags */}
        <div className="flex flex-wrap gap-2 pt-2 border-t border-slate-100">
          {project.tags.map((tag) => (
            <span
              key={tag}
              className="text-xs font-medium bg-slate-100 text-slate-700 px-3 py-1 rounded-md border border-slate-200"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Academic Action CTAs */}
        <div className="pt-2 flex flex-wrap items-center gap-3">
          <a
            href="#research-motivation"
            className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
          >
            Research Motivation
          </a>
          <a
            href="#research-approach"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Research Approach
          </a>
          <a
            href="#evaluation-setting"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Evaluation Setting
          </a>
          <a
            href="#research-evolution"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-50 transition-colors"
          >
            Research Evolution
          </a>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-xs font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
          >
            Contact for Discussion
          </Link>
        </div>
      </section>

      {/* 2. Manuscript Status Callout */}
      <section className="p-6 rounded-xl bg-amber-50/70 border border-amber-300/80 shadow-2xs space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-amber-900">
          <ShieldAlert className="w-4 h-4 text-amber-700" />
          <span>Manuscript Status</span>
        </div>
        <div className="space-y-1">
          <h2 className="text-base font-bold text-slate-900">
            Manuscript in Preparation
          </h2>
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            The manuscript is currently being refined, including methodological and experimental analysis. The work is intended for future submission to <strong>MDPI Sensors</strong>.
          </p>
        </div>
      </section>

      {/* 3. Research Motivation */}
      <section id="research-motivation" className="scroll-mt-24 space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Problem Formulation
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Motivation
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4 text-sm sm:text-base text-slate-700 leading-relaxed">
          <p>
            Autonomous vehicles and intelligent transportation systems depend on reliable visual recognition of traffic signs. Adverse weather conditions such as snow can obscure sign regions, reduce contrast, and remove fine-grained visual cues required for accurate classification.
          </p>
          <p>
            This research investigates how recognition systems behave when environmental degradation progressively reduces the quality of visual evidence, and whether image restoration can recover information useful for downstream classification.
          </p>
        </div>
      </section>

      {/* 4. Research Question */}
      <section className="space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-blue-50/50 border border-blue-200/80 space-y-3 shadow-2xs">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <HelpCircle className="w-4 h-4 text-blue-700" />
            <span>Central Research Question</span>
          </div>

          <h2 className="text-xl sm:text-2xl md:text-3xl font-bold font-serif text-slate-900 leading-snug">
            &ldquo;How can a recognition system maintain reliable classification when environmental degradation progressively removes useful visual information?&rdquo;
          </h2>

          <p className="text-xs sm:text-sm text-slate-650 border-t border-blue-200/60 pt-3 leading-relaxed">
            Addressing this core question requires understanding the transition between clean observational distributions and progressively degraded visual evidence.
          </p>
        </div>
      </section>

      {/* 5. Research Approach — High-Level Overview */}
      <section id="research-approach" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            System Architecture
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Approach — High-Level Overview
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            The study constructs controlled snow-degraded variants of benchmark traffic-sign imagery and compares recognition behavior before degradation, after degradation, and following image restoration.
          </p>
        </div>

        {/* Clean Academic Pipeline Flow */}
        <div className="grid grid-cols-1 sm:grid-cols-5 gap-3">
          {[
            {
              step: "01",
              title: "Benchmark Traffic Sign Images",
              desc: "Standardized benchmark traffic-sign imagery establishing baseline clean distributions.",
            },
            {
              step: "02",
              title: "Controlled Snow Degradation",
              desc: "Controlled environmental synthesis across increasing visual degradation severities.",
            },
            {
              step: "03",
              title: "Image Restoration",
              desc: "Deep-learning restoration stage aimed at recovering obscured visual evidence.",
            },
            {
              step: "04",
              title: "Traffic Sign Classification",
              desc: "Deep feature categorization heads evaluated on original, degraded, and restored representations.",
            },
            {
              step: "05",
              title: "Evaluation Across Visual Conditions",
              desc: "Systematic comparative analysis of recognition behavior across visual conditions.",
            },
          ].map((stage) => (
            <div
              key={stage.step}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-1.5 flex flex-col justify-between"
            >
              <div>
                <span className="text-xs font-mono font-bold text-blue-900 block">
                  STAGE {stage.step}
                </span>
                <h3 className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                  {stage.title}
                </h3>
              </div>
              <p className="text-[11px] text-slate-600 leading-relaxed pt-1">
                {stage.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Methodology Description */}
      <section className="space-y-4">
        <h3 className="text-lg font-bold text-slate-900">
          Methodological Workflow
        </h3>
        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-3 text-xs sm:text-sm text-slate-700 leading-relaxed">
          <p>
            The research methodology follows a structured experimental protocol:
          </p>
          <ol className="list-decimal list-inside space-y-1.5 text-slate-800 font-medium pl-1">
            <li>Start with the BTSC benchmark dataset.</li>
            <li>Evaluate traffic-sign classification under the original benchmark condition.</li>
            <li>Generate controlled snow-degraded versions of the images.</li>
            <li>Consider multiple degradation severities.</li>
            <li>Apply an image restoration/denoising stage.</li>
            <li>
              Perform traffic-sign classification on:
              <ul className="list-disc list-inside pl-4 font-normal text-slate-700 space-y-0.5 mt-1">
                <li>original images</li>
                <li>snow-degraded images</li>
                <li>restored images</li>
              </ul>
            </li>
            <li>Compare recognition behavior across the different visual conditions.</li>
          </ol>
        </div>
      </section>

      {/* 7. Dataset & Evaluation Setting */}
      <section id="evaluation-setting" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Experimental Foundations
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Dataset &amp; Evaluation Setting
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-6">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            The study uses the <strong>BTSC benchmark dataset</strong> as the foundation for evaluating traffic-sign recognition under progressively degraded visual conditions.
          </p>

          {/* Degradation Conditions Concept */}
          <div className="p-5 rounded-lg bg-slate-50 border border-slate-200 space-y-3">
            <span className="text-xs font-mono font-bold uppercase text-slate-600 block">
              Controlled Degradation Continuum
            </span>
            <p className="text-xs text-slate-650 leading-relaxed">
              Controlled snow degradation is introduced to simulate increasingly challenging visual conditions and investigate how recognition performance changes as useful visual evidence becomes obscured.
            </p>

            {/* Visual Severity Flow */}
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-3 pt-2">
              <span className="px-4 py-2 rounded-lg bg-white border border-slate-300 font-mono text-xs font-semibold text-slate-800 shadow-2xs">
                Clean Benchmark
              </span>
              <span className="text-slate-400 font-mono">→</span>
              <span className="px-4 py-2 rounded-lg bg-white border border-amber-200 font-mono text-xs font-semibold text-amber-900 shadow-2xs">
                Increasing Degradation Severity
              </span>
              <span className="text-slate-400 font-mono">→</span>
              <span className="px-4 py-2 rounded-lg bg-white border border-blue-200 font-mono text-xs font-semibold text-blue-900 shadow-2xs">
                Restored Evidence
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* 8 & 9. Image Restoration & Recognition Stages */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Image Restoration */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <Sparkles className="w-4 h-4 text-blue-700" />
            <span>Intermediate Processing</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Image Restoration
          </h3>
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
            An image restoration stage is investigated as an intermediate step between environmental degradation and classification, with the goal of recovering visual evidence that may have been obscured by snow.
          </p>
        </div>

        {/* Recognition */}
        <div className="p-6 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-3">
          <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-blue-900">
            <Cpu className="w-4 h-4 text-blue-700" />
            <span>Downstream Task</span>
          </div>
          <h3 className="text-lg font-bold text-slate-900">
            Recognition
          </h3>
          <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
            Restored and degraded imagery is evaluated through a deep-learning-based traffic sign classification stage to examine whether restoration can improve the availability of discriminative visual information.
          </p>
        </div>
      </section>

      {/* 10. Experimental Comparison Table */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Comparative Protocol
          </span>
          <h3 className="text-lg font-bold text-slate-900">
            Experimental Condition Comparison
          </h3>
        </div>

        <div className="overflow-x-auto rounded-xl border border-slate-200 bg-white shadow-2xs">
          <table className="w-full text-left text-xs sm:text-sm">
            <thead className="bg-slate-50 border-b border-slate-200 text-xs font-mono font-bold uppercase text-slate-600">
              <tr>
                <th className="px-5 py-3 w-48">Visual Condition</th>
                <th className="px-5 py-3">Purpose</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200 text-slate-700">
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="px-5 py-3 font-semibold text-slate-900 font-mono">
                  Clean
                </td>
                <td className="px-5 py-3">
                  Establish benchmark recognition behavior
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="px-5 py-3 font-semibold text-amber-900 font-mono">
                  Snow-Degraded
                </td>
                <td className="px-5 py-3">
                  Measure the effect of environmental degradation
                </td>
              </tr>
              <tr className="hover:bg-slate-50/60 transition-colors">
                <td className="px-5 py-3 font-semibold text-blue-900 font-mono">
                  Restored
                </td>
                <td className="px-5 py-3">
                  Investigate whether visual restoration recovers useful evidence
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* 11. Research Status & Evaluation (No Exact Numbers) */}
      <section className="space-y-4">
        <div className="p-6 sm:p-8 rounded-2xl bg-white border-2 border-slate-300 shadow-2xs space-y-4">
          <div className="flex flex-wrap items-center justify-between gap-2">
            <div className="flex flex-wrap items-center gap-2">
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                Experimental Evaluation Ongoing
              </span>
              <span className="px-2.5 py-0.5 rounded-full text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                Manuscript in Preparation
              </span>
            </div>
            <span className="text-xs font-mono text-slate-400">
              Refinement In Progress
            </span>
          </div>

          <h2 className="text-xl sm:text-2xl font-bold text-slate-900 leading-snug">
            Research Status &amp; Evaluation
          </h2>

          <p className="text-sm sm:text-base text-slate-700 font-serif italic border-l-2 border-blue-900 pl-4 py-1.5 bg-slate-50 leading-relaxed">
            &ldquo;Experimental evaluation is ongoing. The current study examines recognition behavior across clean, snow-degraded, and restored traffic-sign imagery, with further analysis being refined as part of manuscript preparation.&rdquo;
          </p>
        </div>
      </section>

      {/* 12. Research Evolution */}
      <section id="research-evolution" className="scroll-mt-24 space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Scholarly Iteration
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Research Evolution
          </h2>
          <p className="text-xs sm:text-sm text-slate-600 mt-1">
            Demonstrating active research iteration rather than presenting a static or finalized benchmark.
          </p>
        </div>

        <div className="p-6 rounded-xl bg-slate-50 border border-slate-200 space-y-4">
          <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
            {[
              "Initial Traffic Sign Study",
              "Adverse Weather Focus",
              "Snow-Degraded Recognition",
              "Multi-Stage Restoration + Classification",
              "Task-Aware Reformulation",
              "Expanded Experimental Evaluation",
              "Manuscript Preparation",
            ].map((step, idx, arr) => (
              <React.Fragment key={step}>
                <span className="px-3 py-1.5 rounded bg-white text-slate-800 border border-slate-200 shadow-2xs">
                  {step}
                </span>
                {idx < arr.length - 1 && (
                  <span className="text-slate-400 font-mono">→</span>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </section>

      {/* 13. Connection to My Broader Research Direction */}
      <section className="space-y-6">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Unified Research Agenda
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Connection to My Broader Research Direction
          </h2>
        </div>

        <div className="p-6 sm:p-8 rounded-xl bg-white border border-slate-200 shadow-2xs space-y-4">
          <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
            This study forms part of a broader research interest in building visual intelligence systems that remain reliable when the distribution or quality of visual evidence changes.
          </p>

          {/* Research Trajectory */}
          <div className="p-4 rounded-lg bg-slate-50 border border-slate-200 space-y-2">
            <span className="text-xs font-mono font-bold text-slate-600 block uppercase">
              Robustness &amp; Domain Shift Trajectory
            </span>
            <div className="flex flex-wrap items-center gap-2 text-xs font-semibold">
              {[
                "Snow-Degraded Traffic Signs",
                "Robust Visual Recognition",
                "Environmental Domain Shift",
                "Few-Shot Adaptation",
                "Visual Reliability",
                "Multimodal AI",
              ].map((node, idx, arr) => (
                <React.Fragment key={node}>
                  <span className="px-2.5 py-1 rounded bg-white text-slate-800 border border-slate-200">
                    {node}
                  </span>
                  {idx < arr.length - 1 && (
                    <span className="text-slate-400 font-mono">→</span>
                  )}
                </React.Fragment>
              ))}
            </div>
          </div>

          <p className="text-xs text-slate-600 border-t border-slate-100 pt-3 italic leading-relaxed">
            This study connects naturally to my other research investigation in <strong>Few-Shot Adaptation for AI-Generated Image Detection under Unseen Generator Distribution Shift</strong>, exploring how models maintain reliability across physical environmental corruptions and generative distribution shifts.
          </p>
        </div>
      </section>

      {/* 14. Future Research Questions */}
      <section className="space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-900 block mb-1">
            Prospective Investigations
          </span>
          <h2 className="text-2xl font-bold text-slate-900">
            Future Research Questions
          </h2>
        </div>

        <div className="space-y-2.5">
          {[
            "How can models adapt to progressively changing environmental conditions rather than a single fixed degradation?",
            "Can degradation-aware representations improve robustness across unseen weather conditions?",
            "Can uncertainty estimation identify when visual evidence has become unreliable?",
            "Can multimodal systems compensate when visual evidence is incomplete or degraded?",
            "How can restoration and recognition be jointly optimized without introducing misleading visual information?",
          ].map((q, idx) => (
            <div
              key={idx}
              className="p-4 rounded-xl bg-white border border-slate-200 shadow-2xs flex items-start gap-3"
            >
              <span className="font-mono text-xs font-bold text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200 shrink-0">
                Q0{idx + 1}
              </span>
              <p className="text-xs sm:text-sm text-slate-800 font-medium leading-relaxed">
                {q}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* 15. Research Integrity & Privacy */}
      <section className="p-6 sm:p-8 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
        <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-slate-700">
          <ShieldCheck className="w-4 h-4 text-slate-900" />
          <span>Research Integrity</span>
        </div>
        <p className="text-xs sm:text-sm text-slate-650 leading-relaxed">
          This project is currently under manuscript preparation. Public materials intentionally provide a high-level overview of the research problem and methodology while unpublished experimental details, manuscript content, numerical results, figures, and research artifacts remain private until an appropriate publication stage.
        </p>
      </section>

      {/* 16. Academic Navigation Actions */}
      <section className="p-6 sm:p-8 rounded-2xl bg-slate-900 text-white shadow-md space-y-4">
        <div>
          <span className="text-xs font-mono font-bold uppercase tracking-wider text-blue-300 block mb-1">
            Scholarly Dialogue
          </span>
          <h3 className="text-lg sm:text-xl font-bold">
            Explore Research Agenda &amp; Academic Background
          </h3>
          <p className="mt-1 text-xs sm:text-sm text-slate-300 leading-relaxed">
            Interested in discussing environmental domain shift, robust perception, or research collaborations?
          </p>
        </div>

        <div className="pt-2 flex flex-wrap items-center gap-3">
          <Link
            href="/research"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-900 bg-white hover:bg-slate-100 transition-colors"
          >
            Explore Research Agenda
          </Link>
          <Link
            href="/experience"
            className="px-4 py-2 rounded-md text-xs font-semibold text-white bg-blue-700 hover:bg-blue-600 transition-colors"
          >
            Academic Experience
          </Link>
          <Link
            href="/cv"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Academic CV
          </Link>
          <Link
            href="/contact"
            className="px-4 py-2 rounded-md text-xs font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 border border-slate-700 transition-colors"
          >
            Contact
          </Link>
        </div>
      </section>
    </article>
  );
}
