import React from "react";
import Link from "next/link";
import { ArrowLeft, Compass } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4 py-16">
      <div className="max-w-md w-full text-center space-y-6">
        <div className="w-16 h-16 rounded-2xl bg-blue-50 border border-blue-200 text-blue-900 mx-auto flex items-center justify-center">
          <Compass className="w-8 h-8" />
        </div>

        <div>
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-slate-400 block mb-1">
            Error 404
          </span>
          <h1 className="text-2xl sm:text-3xl font-bold tracking-tight text-slate-900">
            Research page not found.
          </h1>
          <p className="mt-3 text-sm text-slate-650 leading-relaxed">
            The requested publication, project, or supervisor dossier does not exist or has been relocated within the research archive.
          </p>
        </div>

        <div className="pt-2 flex justify-center">
          <Link
            href="/"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg text-xs font-semibold text-white bg-blue-950 hover:bg-slate-900 transition-colors shadow-xs"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Return to Research</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
