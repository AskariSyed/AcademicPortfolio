"use client";

import React, { useEffect } from "react";
import { Certificate } from "@/data/certificates";
import { X, ExternalLink, Award, Calendar, Building2, Tag, ShieldCheck } from "lucide-react";

interface CertificateModalProps {
  certificate: Certificate | null;
  onClose: () => void;
}

export default function CertificateModal({
  certificate,
  onClose,
}: CertificateModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    if (certificate) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }

    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [certificate, onClose]);

  if (!certificate) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      <div
        className="relative w-full max-w-4xl max-h-[92vh] flex flex-col bg-white rounded-2xl shadow-2xl border border-slate-200 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Bar */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-slate-200 bg-slate-50/80">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-blue-900" />
            <span className="text-xs font-mono font-semibold uppercase tracking-wider text-slate-700">
              Verified Academic Credential
            </span>
          </div>

          <button
            onClick={onClose}
            className="p-1.5 rounded-md text-slate-500 hover:text-slate-900 hover:bg-slate-200/80 transition-colors focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900"
            aria-label="Close modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Scrollable Body */}
        <div className="flex-1 overflow-y-auto p-6 sm:p-8 space-y-6">
          {/* Certificate Document Display */}
          <div className="relative rounded-xl border border-slate-300/80 bg-slate-100 p-2 sm:p-4 shadow-inner flex items-center justify-center">
            {certificate.type === "pdf" ? (
              <div className="w-full min-h-[420px] flex flex-col items-center justify-center p-8 bg-white rounded-lg border border-slate-200 text-center">
                <Award className="w-16 h-16 text-blue-900 mb-3" />
                <h4 className="text-lg font-bold text-slate-900">
                  {certificate.title}
                </h4>
                <p className="text-sm text-slate-500 mt-1">
                  PDF Document Format
                </p>
                <a
                  href={certificate.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-5 inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 rounded-md transition-colors"
                >
                  <span>Open Full PDF Document</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            ) : (
              <div className="w-full max-w-3xl overflow-hidden rounded-lg bg-white shadow-sm border border-slate-200">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={certificate.file}
                  alt={certificate.title}
                  className="w-full h-auto object-contain max-h-[60vh] select-none"
                  loading="lazy"
                />
              </div>
            )}
          </div>

          {/* Metadata Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
            <div>
              <span className="text-slate-400 font-mono block">ISSUING BODY</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1.5 mt-0.5">
                <Building2 className="w-3.5 h-3.5 text-blue-900" />
                <span>{certificate.issuer}</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 font-mono block">YEAR</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1.5 mt-0.5">
                <Calendar className="w-3.5 h-3.5 text-blue-900" />
                <span>{certificate.year}</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 font-mono block">CATEGORY</span>
              <span className="font-semibold text-slate-800 text-sm flex items-center gap-1.5 mt-0.5">
                <Tag className="w-3.5 h-3.5 text-blue-900" />
                <span>{certificate.category}</span>
              </span>
            </div>

            <div>
              <span className="text-slate-400 font-mono block">INTEGRITY</span>
              <span className="font-semibold text-emerald-800 text-sm flex items-center gap-1.5 mt-0.5">
                <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                <span>Verified Credential</span>
              </span>
            </div>
          </div>

          {/* Description */}
          {certificate.description && (
            <div className="space-y-1.5">
              <h4 className="text-xs font-bold font-mono uppercase tracking-wider text-slate-500">
                Credential Description &amp; Rigor
              </h4>
              <p className="text-sm text-slate-700 leading-relaxed bg-white p-4 rounded-lg border border-slate-200">
                {certificate.description}
              </p>
            </div>
          )}
        </div>

        {/* Modal Footer */}
        <div className="px-6 py-4 border-t border-slate-200 bg-slate-50 flex items-center justify-between text-xs">
          <span className="text-slate-500 hidden sm:inline">
            Press <kbd className="px-1.5 py-0.5 font-mono bg-white border border-slate-300 rounded text-[10px]">ESC</kbd> or click outside to close
          </span>

          <div className="flex flex-wrap items-center gap-2.5 w-full sm:w-auto justify-end">
            {certificate.verificationUrl && (
              <a
                href={certificate.verificationUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md font-semibold text-blue-900 bg-blue-50 border border-blue-200 hover:bg-blue-100 transition-colors"
              >
                <span>Verify Online</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            {certificate.pdfUrl && (
              <a
                href={certificate.pdfUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md font-semibold text-slate-800 bg-white border border-slate-300 hover:bg-slate-100 transition-colors"
              >
                <span>View Original PDF</span>
                <ExternalLink className="w-3 h-3" />
              </a>
            )}
            <a
              href={certificate.file}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-3 py-2 rounded-md font-semibold text-slate-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
            >
              <span>Full-Size Image</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 rounded-md font-semibold text-white bg-slate-900 hover:bg-blue-950 transition-colors"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
