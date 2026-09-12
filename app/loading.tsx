import React from "react";

export default function Loading() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 md:py-20 space-y-10 animate-pulse">
      {/* Header Skeleton */}
      <div className="space-y-4 max-w-2xl">
        <div className="h-6 w-36 bg-slate-200 rounded-full" />
        <div className="h-10 w-3/4 bg-slate-200 rounded-lg" />
        <div className="h-5 w-full bg-slate-200/80 rounded" />
        <div className="h-5 w-2/3 bg-slate-200/80 rounded" />
      </div>

      {/* Metric Cards Skeleton */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
        {[1, 2, 3, 4].map((i) => (
          <div key={i} className="p-4 rounded-xl border border-slate-200 bg-white space-y-2">
            <div className="h-3 w-16 bg-slate-200 rounded" />
            <div className="h-7 w-24 bg-slate-200 rounded" />
          </div>
        ))}
      </div>

      {/* Main Content Cards Skeleton */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 pt-4">
        <div className="lg:col-span-7 space-y-4">
          <div className="h-64 rounded-2xl bg-white border border-slate-200 p-6 space-y-4">
            <div className="h-6 w-1/2 bg-slate-200 rounded" />
            <div className="h-4 w-full bg-slate-200 rounded" />
            <div className="h-4 w-5/6 bg-slate-200 rounded" />
            <div className="h-4 w-4/6 bg-slate-200 rounded" />
            <div className="h-10 w-32 bg-slate-200 rounded-lg mt-4" />
          </div>
        </div>

        <div className="lg:col-span-5 space-y-4">
          <div className="h-64 rounded-2xl bg-white border border-slate-200 p-6 space-y-3">
            <div className="h-4 w-1/3 bg-slate-200 rounded" />
            <div className="h-8 w-full bg-slate-200 rounded" />
            <div className="h-24 w-full bg-slate-100 rounded-xl" />
          </div>
        </div>
      </div>
    </div>
  );
}
