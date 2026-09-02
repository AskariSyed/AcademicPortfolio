import React from "react";
import { cn } from "@/lib/utils";

interface SectionContainerProps {
  id?: string;
  className?: string;
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
  tag?: string;
  centerHeader?: boolean;
}

export default function SectionContainer({
  id,
  className,
  children,
  title,
  subtitle,
  tag,
  centerHeader = false,
}: SectionContainerProps) {
  return (
    <section
      id={id}
      className={cn("py-16 md:py-24 border-b border-slate-200/70", className)}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {(title || tag || subtitle) && (
          <div
            className={cn(
              "mb-12 md:mb-16",
              centerHeader ? "text-center max-w-3xl mx-auto" : "max-w-3xl"
            )}
          >
            {tag && (
              <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold tracking-wider uppercase text-blue-900 bg-blue-50 border border-blue-200/60 mb-3">
                {tag}
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-slate-900">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="mt-3 text-base sm:text-lg text-slate-600 leading-relaxed">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
