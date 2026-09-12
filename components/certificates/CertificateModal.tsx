"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { Certificate } from "@/data/certificates";
import { X, ExternalLink, Award, Calendar, Building2, Tag, ShieldCheck } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

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

  return (
    <AnimatePresence>
      {certificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-slate-950/80 backdrop-blur-xs"
          onClick={onClose}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 16 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 16 }}
            transition={{ duration: 0.25, ease: [0.21, 0.47, 0.32, 0.98] }}
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

            {/* Modal Body */}
            <div className="p-6 overflow-y-auto space-y-6">
              {/* Preview Image / PDF */}
              <div className="relative w-full max-h-[460px] min-h-[260px] bg-slate-100 rounded-xl overflow-hidden border border-slate-200 flex items-center justify-center p-2">
                {certificate.type === "image" ? (
                  <div className="relative w-full h-[400px]">
                    <Image
                      src={certificate.file}
                      alt={certificate.title}
                      fill
                      className="object-contain"
                      sizes="(max-width: 1024px) 100vw, 896px"
                      priority
                    />
                  </div>
                ) : (
                  <div className="flex flex-col items-center justify-center p-8 text-center space-y-3">
                    <Award className="w-16 h-16 text-blue-900" />
                    <div>
                      <h4 className="font-bold text-slate-900 text-base">
                        {certificate.title}
                      </h4>
                      <p className="text-xs text-slate-500 font-mono mt-1">
                        Document format: PDF Credential
                      </p>
                    </div>
                  </div>
                )}
              </div>

              {/* Title and Metadata */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-blue-50 text-blue-900 border border-blue-200">
                    {certificate.category}
                  </span>
                  {certificate.featured && (
                    <span className="px-2.5 py-0.5 rounded text-xs font-mono font-semibold bg-amber-50 text-amber-900 border border-amber-200">
                      Featured Credential
                    </span>
                  )}
                  <span className="inline-flex items-center gap-1 text-xs font-mono text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>Verified</span>
                  </span>
                </div>

                <h3
                  id="modal-title"
                  className="text-xl sm:text-2xl font-bold text-slate-900"
                >
                  {certificate.title}
                </h3>
              </div>

              {/* Metadata Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 rounded-xl bg-slate-50 border border-slate-200 text-xs">
                <div className="flex items-start gap-2.5">
                  <Building2 className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-slate-400 block text-[11px]">ISSUING INSTITUTION</span>
                    <span className="font-semibold text-slate-800">{certificate.issuer}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Calendar className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-slate-400 block text-[11px]">ISSUE YEAR</span>
                    <span className="font-semibold text-slate-800">{certificate.year}</span>
                  </div>
                </div>

                <div className="flex items-start gap-2.5">
                  <Tag className="w-4 h-4 text-slate-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-mono text-slate-400 block text-[11px]">PRIMARY DOMAIN</span>
                    <span className="font-semibold text-slate-800">{certificate.category}</span>
                  </div>
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
                  className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-md font-semibold text-slate-600 bg-slate-100 border border-slate-200 hover:bg-slate-200 transition-colors"
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
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
