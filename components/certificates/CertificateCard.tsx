"use client";

import React from "react";
import { Certificate } from "@/data/certificates";
import { Eye, Award } from "lucide-react";

interface CertificateCardProps {
  certificate: Certificate;
  onSelect: (cert: Certificate) => void;
  index: number;
}

export default function CertificateCard({
  certificate,
  onSelect,
  index,
}: CertificateCardProps) {
  const rotation = certificate.frameStyle?.rotationDeg ?? ((index % 5) - 2) * 1.1;

  // Frame border styles
  const frameBorderClass =
    certificate.frameStyle?.frameColor === "dark-oak"
      ? "border-[#2b1d0c] bg-[#1c1308]"
      : certificate.frameStyle?.frameColor === "academic-navy"
      ? "border-[#0a192f] bg-[#071120]"
      : certificate.frameStyle?.frameColor === "brushed-silver"
      ? "border-[#94a3b8] bg-[#cbd5e1]"
      : "border-[#1e293b] bg-[#0f172a]";

  const mattingClass =
    certificate.frameStyle?.matting === "cream"
      ? "bg-[#faf8f5]"
      : certificate.frameStyle?.matting === "stone"
      ? "bg-[#f4f5f7]"
      : "bg-[#ffffff]";

  return (
    <div
      className="relative pt-6 px-2 sm:px-3 pb-4 group select-none cursor-pointer focus:outline-hidden w-full max-w-[320px] mx-auto"
      onClick={() => onSelect(certificate)}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect(certificate);
        }
      }}
      role="button"
      tabIndex={0}
      aria-label={`View certificate: ${certificate.title} issued by ${certificate.issuer}`}
    >
      {/* Hanging Wire and Wall Pin (Researcher's office aesthetic) */}
      <div className="certificate-hanging-wire opacity-70 group-hover:opacity-100 transition-opacity" />

      {/* Physical Framed Container */}
      <div
        style={{ transform: `rotate(${rotation}deg)` }}
        className={`framed-card rounded-lg p-2.5 sm:p-3.5 border-4 shadow-frame transition-all duration-300 ${frameBorderClass}`}
      >
        {/* Beveled Matting Board */}
        <div
          className={`relative rounded-sm p-3 sm:p-4 frame-matting border border-slate-300/60 flex flex-col justify-between overflow-hidden ${mattingClass}`}
        >
          {/* Subtle Glare overlay */}
          <div className="absolute inset-0 frame-glass-glare opacity-40 group-hover:opacity-10 transition-opacity" />

          {/* Certificate Miniature Preview */}
          <div className="relative aspect-4/3 w-full overflow-hidden rounded-xs border border-slate-200/80 bg-white shadow-2xs flex items-center justify-center">
            {certificate.type === "image" ? (
              /* eslint-disable-next-line @next/next/no-img-element */
              <img
                src={certificate.file}
                alt={certificate.title}
                className="w-full h-full object-contain bg-white select-none"
                loading="lazy"
              />
            ) : (
              <div className="flex flex-col items-center justify-center p-4 text-center">
                <Award className="w-10 h-10 text-blue-900 mb-2" />
                <span className="text-[11px] font-bold text-slate-800">
                  {certificate.title}
                </span>
                <span className="text-[9px] font-mono text-slate-400 mt-1">
                  PDF Credential
                </span>
              </div>
            )}

            {/* Hover Inspect Prompt */}
            <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-white text-xs font-semibold backdrop-blur-2xs">
              <Eye className="w-4 h-4" />
              <span>Inspect Credential</span>
            </div>
          </div>

          {/* Plaque / Title Details under Matting */}
          <div className="mt-3 pt-2.5 border-t border-slate-200/60 text-center">
            <div className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-500 line-clamp-1">
              {certificate.issuer}
            </div>
            <h4 className="text-xs sm:text-sm font-bold text-slate-900 font-serif leading-tight mt-0.5 line-clamp-2">
              {certificate.title}
            </h4>
            <div className="mt-1 flex items-center justify-center gap-2 text-[10px] text-slate-500 font-mono">
              <span>{certificate.year}</span>
              <span>•</span>
              <span className="text-blue-950 font-medium truncate max-w-[120px]">
                {certificate.category}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
