"use client";

import Link from "next/link";
import { useState } from "react";
import type { Engagement, Status } from "@/app/advisory_projects/data";

const filters: ("All" | Status)[] = ["All", "Ongoing", "Completed", "Newly onboarded"];

const statusStyle: Record<Status, string> = {
  Ongoing: "bg-secondary-fixed text-navy-brand",
  Completed: "bg-[#e3efe0] text-forest-brand",
  "Newly onboarded": "bg-[#f7e7c6] text-gold-deep",
};

export default function EngagementGrid({
  engagements,
}: {
  engagements: Engagement[];
}) {
  const [filter, setFilter] = useState<(typeof filters)[number]>("All");
  const shown =
    filter === "All"
      ? engagements
      : engagements.filter((e) => e.status === filter);

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-8">
        <div>
          <span className="adv-eyebrow block mb-3">Our engagements</span>
          <h2 className="adv-heading text-3xl md:text-4xl">
            Organisations we have worked with
          </h2>
        </div>
        <div
          role="group"
          aria-label="Filter by status"
          className="inline-flex flex-wrap self-start md:self-auto bg-white border border-outline-variant p-1"
        >
          {filters.map((f) => (
            <button
              key={f}
              type="button"
              aria-pressed={filter === f}
              onClick={() => setFilter(f)}
              className={`px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                filter === f ? "bg-navy-brand text-white" : "text-ink hover:bg-cream"
              }`}
            >
              {f}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {shown.map((e) => (
          <article
            key={e.code}
            className="bg-white border border-outline-variant p-6 flex flex-col"
          >
            <div className="flex items-center justify-between gap-4 mb-4">
              <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant">
                {e.sector}
              </span>
              <span className={`px-2 py-0.5 text-[11px] ${statusStyle[e.status]}`}>
                {e.status}
              </span>
            </div>
            <h3 className="font-display text-2xl text-ink mb-3">{e.name}</h3>
            <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
              {e.summary}
            </p>
            <div className="mt-auto border-t border-outline-variant pt-4 flex items-center justify-between gap-4 text-xs text-on-surface-variant">
              <span>{e.practice}</span>
              {e.caseStudy && (
                <Link
                  href={e.caseStudy}
                  className="font-semibold text-navy-brand text-sm hover:underline whitespace-nowrap"
                >
                  Read the case study →
                </Link>
              )}
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
