import React from "react";
import Link from "next/link";
import { Publication } from "@/data/publications";
import { FileText, ArrowUpRight, Users, Clock, Tag } from "lucide-react";

interface PublicationCardProps {
  publication: Publication;
  showAbstract?: boolean;
}

export default function PublicationCard({
  publication,
  showAbstract = false,
}: PublicationCardProps) {
  return (
    <article className="rounded-xl border border-slate-200/90 bg-white p-6 sm:p-7 hover:border-slate-300 hover:shadow-xs transition-all duration-200">
      <div className="flex flex-wrap items-center gap-2 mb-3">
        <span className="font-mono text-xs font-bold text-slate-500 bg-slate-100 px-2 py-0.5 rounded">
          {publication.year}
        </span>
        <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-xs font-semibold bg-amber-50 text-amber-900 border border-amber-200/80">
          <Clock className="w-3 h-3 text-amber-700" />
          <span>{publication.status}</span>
        </span>
      </div>

      <h3 className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 leading-snug">
        <Link
          href={`/publications/${publication.slug}`}
          className="hover:text-blue-900 transition-colors"
        >
          {publication.title}
        </Link>
      </h3>

      <div className="mt-3 flex items-center gap-2 text-sm text-slate-650">
        <Users className="w-4 h-4 text-slate-400 shrink-0" />
        <span>
          {publication.authors.map((author, idx) => (
            <span key={author}>
              <span
                className={
                  author.includes("Muhammad Hassan Askari")
                    ? "font-semibold text-slate-900 underline decoration-slate-300"
                    : "text-slate-600"
                }
              >
                {author}
              </span>
              {idx < publication.authors.length - 1 ? ", " : ""}
            </span>
          ))}
        </span>
      </div>

      <div className="mt-3 flex flex-wrap gap-1.5">
        {publication.researchAreas.map((tag) => (
          <span
            key={tag}
            className="inline-flex items-center gap-1 text-[11px] font-medium text-slate-600 bg-slate-50 border border-slate-200/80 px-2 py-0.5 rounded"
          >
            <Tag className="w-2.5 h-2.5 text-slate-400" />
            <span>{tag}</span>
          </span>
        ))}
      </div>

      <div className="mt-4 pt-4 border-t border-slate-100 text-xs sm:text-sm text-slate-650 leading-relaxed">
        <p className="font-serif italic">&ldquo;{publication.problem}&rdquo;</p>
      </div>

      <div className="mt-5 pt-4 border-t border-slate-100 flex flex-wrap items-center justify-between gap-3 text-xs">
        <div className="text-slate-500 font-mono text-[11px]">
          Manuscript in Preparation · Target: MDPI Sensors
        </div>

        <Link
          href={`/projects/task-aware-traffic-sign-classification`}
          className="inline-flex items-center gap-1 font-semibold text-blue-900 hover:text-blue-950 hover:underline"
        >
          <span>Explore Research Overview</span>
          <ArrowUpRight className="w-3.5 h-3.5" />
        </Link>
      </div>
    </article>
  );
}
