"use client";

import React, { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ArrowRight, Download, Mail, BookOpen } from "lucide-react";

export default function StickyMobileCTA() {
  const pathname = usePathname();
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Show sticky CTA after scrolling past initial hero (180px)
      setVisible(window.scrollY > 180);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Don't clutter if already on the contact page
  if (pathname === "/contact" || !visible) return null;

  return (
    <aside
      aria-label="Quick Actions"
      className="md:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 backdrop-blur-md border-t border-slate-200/90 px-3 py-2.5 shadow-lg animate-fade-in"
    >
      <div className="max-w-md mx-auto flex items-center gap-2">
        <Link
          href="/research"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 active:scale-98 transition-all shadow-xs"
        >
          <BookOpen className="w-3.5 h-3.5 text-blue-300" />
          <span>Research</span>
        </Link>

        <Link
          href="/cv"
          className="flex-1 inline-flex items-center justify-center gap-1.5 py-2.5 px-3 rounded-lg text-xs font-semibold text-slate-800 bg-slate-100 hover:bg-slate-200 border border-slate-200 active:scale-98 transition-all"
        >
          <Download className="w-3.5 h-3.5 text-slate-600" />
          <span>Academic CV</span>
        </Link>

        <Link
          href="/contact"
          className="inline-flex items-center justify-center p-2.5 rounded-lg text-blue-950 bg-blue-50 border border-blue-200 hover:bg-blue-100 active:scale-98 transition-all"
          aria-label="Direct Contact"
        >
          <Mail className="w-4 h-4" />
        </Link>
      </div>
    </aside>
  );
}
