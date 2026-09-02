"use client";

import React, { useState, useMemo } from "react";
import Link from "next/link";
import { Certificate, CertificateCategory, CERTIFICATES } from "@/data/certificates";
import CertificateCard from "./CertificateCard";
import CertificateModal from "./CertificateModal";
import CertificateFilter from "./CertificateFilter";
import { ArrowRight, Sparkles, Award } from "lucide-react";

interface CertificateWallProps {
  featuredOnly?: boolean;
  showFilter?: boolean;
  maxItems?: number;
}

export default function CertificateWall({
  featuredOnly = false,
  showFilter = true,
  maxItems,
}: CertificateWallProps) {
  const [selectedCategory, setSelectedCategory] = useState<CertificateCategory>("All");
  const [activeModalCert, setActiveModalCert] = useState<Certificate | null>(null);

  // Category counts
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = {};
    CERTIFICATES.forEach((c) => {
      counts[c.category] = (counts[c.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Filtered certificates
  const displayedCertificates = useMemo(() => {
    let list = CERTIFICATES;
    if (featuredOnly) {
      list = list.filter((c) => c.featured);
    }
    if (selectedCategory !== "All") {
      list = list.filter((c) => c.category === selectedCategory);
    }
    if (maxItems) {
      list = list.slice(0, maxItems);
    }
    return list;
  }, [featuredOnly, selectedCategory, maxItems]);

  return (
    <div className="relative">
      {/* Category Filter */}
      {showFilter && !featuredOnly && (
        <CertificateFilter
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          categoryCounts={categoryCounts}
        />
      )}

      {/* Realistic Academic Office Gallery Wall */}
      <div className="relative rounded-2xl bg-gradient-to-b from-slate-100/70 via-slate-50/50 to-slate-100/60 p-4 sm:p-8 lg:p-10 border border-slate-200/90 shadow-inner">
        {/* Wall Backing Texture lines */}
        <div className="absolute inset-0 scientific-grid opacity-50 rounded-2xl pointer-events-none" />

        {/* Gallery Wall Grid — Center Aligned */}
        <div className="relative flex flex-wrap justify-center gap-6 sm:gap-8 lg:gap-10 items-start max-w-6xl mx-auto">
          {displayedCertificates.map((cert, index) => (
            <div
              key={cert.id}
              className="w-full sm:w-[calc(50%-1.25rem)] lg:w-[calc(33.333%-1.75rem)] xl:w-[280px] max-w-[320px] flex justify-center"
            >
              <CertificateCard
                certificate={cert}
                onSelect={(c) => setActiveModalCert(c)}
                index={index}
              />
            </div>
          ))}
        </div>

        {displayedCertificates.length === 0 && (
          <div className="py-16 text-center text-slate-500">
            <Award className="w-12 h-12 text-slate-400 mx-auto mb-3" />
            <p className="text-sm font-medium">No certificates found in this category.</p>
          </div>
        )}
      </div>

      {/* Featured CTA for homepage */}
      {featuredOnly && (
        <div className="mt-8 flex justify-center">
          <Link
            href="/certificates"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg text-sm font-semibold text-slate-900 bg-white border border-slate-300 hover:bg-slate-50 hover:border-slate-400 transition-colors shadow-2xs"
          >
            <span>Explore Complete Certificate Wall</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      )}

      {/* Lightbox / Modal */}
      <CertificateModal
        certificate={activeModalCert}
        onClose={() => setActiveModalCert(null)}
      />
    </div>
  );
}
