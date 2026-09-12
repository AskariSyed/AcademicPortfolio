"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { Cookie, ShieldCheck, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Check if user has already set preference
    const consent = localStorage.getItem("academic_cookie_consent");
    if (!consent) {
      // Small delay before showing so it doesn't jarringly pop on initial paint
      const timer = setTimeout(() => setIsVisible(true), 1200);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAccept = () => {
    localStorage.setItem("academic_cookie_consent", "accepted");
    setIsVisible(false);
  };

  const handleDecline = () => {
    localStorage.setItem("academic_cookie_consent", "essential_only");
    setIsVisible(false);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 80, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 80, opacity: 0 }}
          transition={{ duration: 0.3, ease: [0.21, 0.47, 0.32, 0.98] }}
          className="fixed bottom-4 left-4 right-4 sm:left-6 sm:right-auto sm:max-w-md z-50 pointer-events-auto"
          role="region"
          aria-label="Cookie and Privacy Preferences"
        >
          <div className="p-4 sm:p-5 rounded-2xl bg-white/95 backdrop-blur-md border border-slate-300/90 shadow-xl space-y-3">
            <div className="flex items-start justify-between gap-3">
              <div className="flex items-center gap-2 text-slate-900">
                <div className="w-8 h-8 rounded-lg bg-blue-50 text-blue-900 flex items-center justify-center shrink-0 border border-blue-200">
                  <Cookie className="w-4 h-4" />
                </div>
                <h4 className="text-xs sm:text-sm font-bold tracking-tight">
                  Privacy &amp; Cookie Notice
                </h4>
              </div>

              <button
                onClick={handleDecline}
                className="text-slate-450 hover:text-slate-700 p-1 rounded-md transition-colors"
                aria-label="Dismiss cookie notice"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-650 leading-relaxed">
              This academic portfolio uses strictly essential and privacy-preserving anonymous traffic telemetry to evaluate readership interest. No cross-site marketing trackers are utilized. Read our{" "}
              <Link
                href="/privacy"
                className="text-blue-900 underline font-medium hover:text-blue-950"
              >
                Privacy Policy
              </Link>.
            </p>

            <div className="flex items-center gap-2 pt-1">
              <button
                onClick={handleAccept}
                className="flex-1 py-2 px-3 rounded-lg text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-colors shadow-2xs"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="py-2 px-3 rounded-lg text-xs font-semibold text-slate-700 bg-slate-100 hover:bg-slate-200 border border-slate-200 transition-colors"
              >
                Essential Only
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
