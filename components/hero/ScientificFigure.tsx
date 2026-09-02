import React from "react";

export default function ScientificFigure() {
  return (
    <div className="w-full rounded-xl border border-slate-200/90 bg-white p-5 sm:p-6 shadow-sm">
      {/* Figure Top Header */}
      <div className="flex items-center justify-between border-b border-slate-100 pb-3 mb-5">
        <div className="flex items-center gap-2">
          <span className="w-2.5 h-2.5 rounded-full bg-blue-700" />
          <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
            Figure 1: Conceptual Framework for Reliable Visual Intelligence
          </span>
        </div>
        <span className="text-[11px] font-mono text-slate-400">
          Domain Shift Formulation
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
              <path d="M 0 1 L 8 5 L 0 9 z" fill="#475569" />
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
          </defs>

          {/* Block 1: Degraded Input */}
          <g transform="translate(10, 15)">
            <rect
              width="150"
              height="160"
              rx="8"
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1.5"
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

          {/* Connection 1 */}
          <line
            x1="165"
            y1="95"
            x2="195"
            y2="95"
            stroke="#64748b"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Block 2: Visual Uncertainty */}
          <g transform="translate(200, 15)">
            <rect
              width="150"
              height="160"
              rx="8"
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1.5"
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

          {/* Connection 2 */}
          <line
            x1="355"
            y1="95"
            x2="385"
            y2="95"
            stroke="#64748b"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Block 3: Reliable Evidence */}
          <g transform="translate(390, 15)">
            <rect
              width="150"
              height="160"
              rx="8"
              fill="#f8fafc"
              stroke="#cbd5e1"
              strokeWidth="1.5"
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

          {/* Connection 3 */}
          <line
            x1="545"
            y1="95"
            x2="575"
            y2="95"
            stroke="#64748b"
            strokeWidth="1.5"
            markerEnd="url(#arrow)"
          />

          {/* Block 4: Robust Perception */}
          <g transform="translate(580, 15)">
            <rect
              width="165"
              height="160"
              rx="8"
              fill="#0f172a"
              stroke="#1e3a8a"
              strokeWidth="1.5"
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

      <div className="mt-4 pt-3 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between text-xs text-slate-500 gap-1">
        <span>
          Progression: Environmental degradation → Visual uncertainty → Reliable evidence → Robust perception
        </span>
        <span className="font-mono text-[11px] text-slate-400">
          CV · Domain Shift · Multimodal
        </span>
      </div>
    </div>
  );
}
