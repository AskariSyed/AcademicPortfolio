import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 animate-pulse space-y-8">
      <div className="space-y-3 max-w-xl">
        <div className="h-4 w-28 bg-slate-200 rounded" />
        <div className="h-10 w-full bg-slate-200 rounded" />
        <div className="h-4 w-3/4 bg-slate-200 rounded" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-8">
        {[1, 2, 3, 4, 5, 6].map((i) => (
          <div
            key={i}
            className="h-48 rounded-xl bg-slate-200/70 border border-slate-200"
          />
        ))}
      </div>
    </div>
  );
}
