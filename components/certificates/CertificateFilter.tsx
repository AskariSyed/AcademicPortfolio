"use client";

import React from "react";
import { CertificateCategory, CERTIFICATE_CATEGORIES } from "@/data/certificates";

interface CertificateFilterProps {
  selectedCategory: CertificateCategory;
  onSelectCategory: (category: CertificateCategory) => void;
  categoryCounts: Record<string, number>;
}

export default function CertificateFilter({
  selectedCategory,
  onSelectCategory,
  categoryCounts,
}: CertificateFilterProps) {
  // Only show categories that have items or 'All'
  const visibleCategories = CERTIFICATE_CATEGORIES.filter(
    (cat) => cat === "All" || (categoryCounts[cat] && categoryCounts[cat] > 0)
  );

  return (
    <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2 mb-10 max-w-4xl mx-auto">
      {visibleCategories.map((category) => {
        const isSelected = selectedCategory === category;
        const count =
          category === "All"
            ? Object.values(categoryCounts).reduce((a, b) => a + b, 0)
            : categoryCounts[category] || 0;

        return (
          <button
            key={category}
            onClick={() => onSelectCategory(category)}
            className={`px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 flex items-center gap-1.5 focus:outline-hidden focus-visible:ring-2 focus-visible:ring-slate-900 ${
              isSelected
                ? "bg-blue-950 text-white shadow-xs font-semibold"
                : "bg-white text-slate-700 border border-slate-200 hover:border-slate-300 hover:bg-slate-50"
            }`}
          >
            <span>{category}</span>
            <span
              className={`text-[10px] px-1.5 py-0.2 rounded-full font-mono ${
                isSelected ? "bg-blue-800 text-blue-100" : "bg-slate-100 text-slate-500"
              }`}
            >
              {count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
