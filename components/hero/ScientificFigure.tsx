"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { Info, Sparkles } from "lucide-react";

const STAGES = [
  {
    id: 1,
    title: "Degraded Input",
    formula: "I_deg = I * M_env + η",
    description: "Atmospheric snow, rain scattering, and irregular geometric occlusion degrade incoming optical rays.",
  },
  {
    id: 2,
    title: "Visual Uncertainty",
    formula: "U(x, y) ∈ [0, 1]",
    description: "Spatial confidence estimation mapping pixel-wise epistemic and aleatoric degradation likelihoods.",
  },
  {
    id: 3,
    title: "Reliable Evidence",
    formula: "E_rel = (1 - U) ⊙ F",
    description: "Gated feature filtering isolating verified, uncorrupted discriminative tokens prior to categorization.",
  },
  {
    id: 4,
    title: "Robust Perception",
    formula: "P(y | E_rel, θ*)",
    description: "Uncertainty-calibrated inference ensuring consistent task performance under out-of-distribution environments.",
  },
];

export default function ScientificFigure() {
  const [activeStage, setActiveStage] = useState<number | null>(null);

  return (
    <div className="w-full rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-xs hover:shadow-md transition-shadow duration-300">
      {/* Figure Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-blue-700" />
          </span>
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
            Figure 1: Conceptual Framework for Reliable Visual Intelligence
          </span>
        </div>
        <span className="hidden sm:inline-flex items-center gap-1 text-[11px] font-mono text-blue-900 bg-blue-50 px-2 py-0.5 rounded border border-blue-200/60">
          <Sparkles className="w-3 h-3 text-blue-700" />
          <span>Interactive Pipeline</span>
        </span>
      </div>

      {/* SVG Pipeline Diagram */}
      <div className="overflow-x-auto pb-2">
        <svg
          viewBox="0 0 760 210"
          className="w-full min-w-[640px] h-auto select-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <marker
              id="arrow"
              viewBox="0 0 10 10"
              refX="6"
              refY="5"
              markerWidth="6"
              markerHeight="6"
              orient="auto-start-reverse"
            >
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#1e3a8a" />
            </marker>

            <pattern
              id="degraded-noise"
              width="8"
              height="8"
              patternUnits="userSpaceOnUse"
            >
              <circle cx="2" cy="2" r="1.2" fill="#cbd5e1" />
              <circle cx="6" cy="5" r="0.8" fill="#94a3b8" />
              <line x1="0" y1="8" x2="8" y2="0" stroke="#e2e8f0" strokeWidth="0.8" />
            </pattern>

            {/* Glowing gradient for active pipeline flow */}
            <linearGradient id="flow-gradient" x1="0%" y1="0%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="#2563eb" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#38bdf8" stopOpacity="1" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0.4" />
            </linearGradient>
          </defs>

          {/* Block 1: Degraded Input */}
          <g
            transform="translate(10, 15)"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveStage(1)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <rect
              width="150"
              height="160"
              rx="8"
              fill={activeStage === 1 ? "#eff6ff" : "#f8fafc"}
              stroke={activeStage === 1 ? "#2563eb" : "#cbd5e1"}
              strokeWidth={activeStage === 1 ? "2.5" : "1.5"}
            />
            {/* Visual simulation of snow occluding a triangle traffic sign */}
            <rect
              x="15"
              y="20"
              width="120"
              height="85"
              rx="4"
              fill="#e2e8f0"
              opacity="0.6"
            />
            <polygon
              points="75,30 115,85 35,85"
              fill="none"
              stroke="#ef4444"
              strokeWidth="3.5"
            />
            <rect
              x="15"
              y="20"
              width="120"
              height="85"
              rx="4"
              fill="url(#degraded-noise)"
              opacity="0.8"
            />
            <circle cx="50" cy="45" r="12" fill="#ffffff" opacity="0.85" />
            <circle cx="95" cy="70" r="16" fill="#ffffff" opacity="0.9" />
            <text
              x="75"
              y="125"
              textAnchor="middle"
              className="text-[12px] font-sans font-bold fill-slate-800"
            >
              Degraded Input
            </text>
            <text
              x="75"
              y="142"
              textAnchor="middle"
              className="text-[10px] font-mono fill-slate-500"
            >
              I_deg = I * M_env + η
            </text>
          </g>

          {/* Connection 1 (Animated Data Flow) */}
          <line
            x1="165"
            y1="95"
            x2="195"
            y2="95"
            stroke="#cbd5e1"
            strokeWidth="3"
          />
          <line
            x1="165"
            y1="95"
            x2="195"
            y2="95"
            stroke="#2563eb"
            strokeWidth="2.5"
            className="animate-flow-dash"
            markerEnd="url(#arrow)"
          />

          {/* Block 2: Visual Uncertainty */}
          <g
            transform="translate(200, 15)"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveStage(2)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <rect
              width="150"
              height="160"
              rx="8"
              fill={activeStage === 2 ? "#eff6ff" : "#f8fafc"}
              stroke={activeStage === 2 ? "#2563eb" : "#cbd5e1"}
              strokeWidth={activeStage === 2 ? "2.5" : "1.5"}
            />
            <rect
              x="15"
              y="20"
              width="120"
              height="85"
              rx="4"
              fill="#1e293b"
            />
            {/* Heatmap simulation */}
            <circle cx="50" cy="45" r="16" fill="#f59e0b" opacity="0.75" />
            <circle cx="50" cy="45" r="8" fill="#ef4444" opacity="0.9" />
            <circle cx="95" cy="70" r="22" fill="#f59e0b" opacity="0.7" />
            <circle cx="95" cy="70" r="12" fill="#ef4444" opacity="0.85" />
            <polygon
              points="75,30 115,85 35,85"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="1.5"
              strokeDasharray="3 3"
              opacity="0.6"
            />
            <text
              x="75"
              y="125"
              textAnchor="middle"
              className="text-[12px] font-sans font-bold fill-slate-800"
            >
              Visual Uncertainty
            </text>
            <text
              x="75"
              y="142"
              textAnchor="middle"
              className="text-[10px] font-mono fill-slate-500"
            >
              U(x, y) ∈ [0, 1]
            </text>
          </g>

          {/* Connection 2 (Animated Data Flow) */}
          <line
            x1="355"
            y1="95"
            x2="385"
            y2="95"
            stroke="#cbd5e1"
            strokeWidth="3"
          />
          <line
            x1="355"
            y1="95"
            x2="385"
            y2="95"
            stroke="#2563eb"
            strokeWidth="2.5"
            className="animate-flow-dash"
            markerEnd="url(#arrow)"
          />

          {/* Block 3: Reliable Evidence */}
          <g
            transform="translate(390, 15)"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveStage(3)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <rect
              width="150"
              height="160"
              rx="8"
              fill={activeStage === 3 ? "#eff6ff" : "#f8fafc"}
              stroke={activeStage === 3 ? "#2563eb" : "#cbd5e1"}
              strokeWidth={activeStage === 3 ? "2.5" : "1.5"}
            />
            <rect
              x="15"
              y="20"
              width="120"
              height="85"
              rx="4"
              fill="#f1f5f9"
            />
            {/* Masked isolated clean features */}
            <path
              d="M 60,40 L 75,30 L 90,40"
              fill="none"
              stroke="#0f172a"
              strokeWidth="3"
            />
            <path
              d="M 40,80 L 50,85 L 75,85"
              fill="none"
              stroke="#0f172a"
              strokeWidth="3"
            />
            <circle cx="75" cy="55" r="4" fill="#0284c7" />
            <text
              x="75"
              y="74"
              textAnchor="middle"
              className="text-[9px] font-mono fill-sky-700"
            >
              E_rel = (1 - U)
            </text>
            <text
              x="75"
              y="125"
              textAnchor="middle"
              className="text-[12px] font-sans font-bold fill-slate-800"
            >
              Reliable Evidence
            </text>
            <text
              x="75"
              y="142"
              textAnchor="middle"
              className="text-[10px] font-mono fill-slate-500"
            >
              Gated Feature Tokens
            </text>
          </g>

          {/* Connection 3 (Animated Data Flow) */}
          <line
            x1="545"
            y1="95"
            x2="575"
            y2="95"
            stroke="#cbd5e1"
            strokeWidth="3"
          />
          <line
            x1="545"
            y1="95"
            x2="575"
            y2="95"
            stroke="#2563eb"
            strokeWidth="2.5"
            className="animate-flow-dash"
            markerEnd="url(#arrow)"
          />

          {/* Block 4: Robust Perception */}
          <g
            transform="translate(580, 15)"
            className="cursor-pointer transition-all duration-300"
            onMouseEnter={() => setActiveStage(4)}
            onMouseLeave={() => setActiveStage(null)}
          >
            <rect
              width="165"
              height="160"
              rx="8"
              fill={activeStage === 4 ? "#1e3a8a" : "#0f172a"}
              stroke={activeStage === 4 ? "#38bdf8" : "#1e3a8a"}
              strokeWidth={activeStage === 4 ? "2.5" : "1.5"}
            />
            <g transform="translate(20, 24)">
              <rect
                width="125"
                height="22"
                rx="4"
                fill="#1e293b"
                stroke="#334155"
              />
              <text
                x="62"
                y="15"
                textAnchor="middle"
                className="text-[9px] font-mono fill-cyan-400"
              >
                z_robust ∈ ℝ^d
              </text>
              <rect
                y="28"
                width="125"
                height="22"
                rx="4"
                fill="#1e293b"
                stroke="#334155"
              />
              <text
                x="62"
                y="43"
                textAnchor="middle"
                className="text-[9px] font-mono fill-blue-300"
              >
                Multimodal Fusion
              </text>
              <rect
                y="56"
                width="125"
                height="22"
                rx="4"
                fill="#1e3a8a"
                stroke="#3b82f6"
              />
              <text
                x="62"
                y="71"
                textAnchor="middle"
                className="text-[9px] font-mono font-bold fill-white"
              >
                P(y | E_rel, θ*)
              </text>
            </g>
            <text
              x="82"
              y="125"
              textAnchor="middle"
              className="text-[12px] font-sans font-bold fill-white"
            >
              Robust Perception
            </text>
            <text
              x="82"
              y="142"
              textAnchor="middle"
              className="text-[10px] font-mono fill-slate-300"
            >
              Calibrated Inference
            </text>
          </g>
        </svg>
      </div>

      {/* Interactive Detail Box or Default Progression */}
      <div className="mt-4 pt-3 border-t border-slate-100 min-h-[44px] flex items-center justify-between text-xs text-slate-600 transition-all duration-200">
        {activeStage ? (
          <div className="flex items-center gap-2.5 animate-fade-in w-full">
            <span className="px-2 py-0.5 rounded font-mono font-bold text-xs bg-blue-900 text-white shrink-0">
              Stage 0{activeStage}: {STAGES[activeStage - 1].title}
            </span>
            <span className="font-mono text-blue-900 font-semibold hidden md:inline shrink-0">
              [{STAGES[activeStage - 1].formula}]
            </span>
            <span className="text-slate-600 truncate">
              {STAGES[activeStage - 1].description}
            </span>
          </div>
        ) : (
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-1 w-full">
            <span className="flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-blue-600 animate-signal-pulse" />
              <span>Hover any stage to inspect mathematical formulation &amp; processing mechanics</span>
            </span>
            <span className="font-mono text-[11px] text-slate-400">
              CV · Domain Shift · Multimodal
            </span>
          </div>
        )}
      </div>
    </div>
  );
}
