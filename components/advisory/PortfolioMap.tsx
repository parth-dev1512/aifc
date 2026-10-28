"use client";

import Link from "next/link";
import { useState } from "react";
import type { Capital, Engagement, Side } from "@/app/advisory_projects/data";

type Filter = "all" | Side;

const filters: { id: Filter; label: string }[] = [
  { id: "all", label: "All engagements" },
  { id: "sell", label: "Sell side" },
  { id: "buy", label: "Buy side" },
];

const quadrants: { side: Side; capital: Capital }[] = [
  { side: "buy", capital: "impact" },
  { side: "sell", capital: "impact" },
  { side: "buy", capital: "innovative" },
  { side: "sell", capital: "innovative" },
];

// Two-by-two map of engagements (buy/sell side × impact investing/innovative
// finance). Selecting a point shows its detail in the dark panel alongside.
export default function PortfolioMap({
  engagements,
  scoping,
}: {
  engagements: Engagement[];
  /** Names shown as "Being scoped" under the map. */
  scoping: string[];
}) {
  const mapped = engagements.filter((e) => e.map);
  const [filter, setFilter] = useState<Filter>("all");
  const [selected, setSelected] = useState(mapped[0].code);
  const current = mapped.find((e) => e.code === selected) ?? mapped[0];

  function choose(f: Filter) {
    setFilter(f);
    if (f !== "all" && current.map?.side !== f) {
      const first = mapped.find((e) => e.map?.side === f);
      if (first) setSelected(first.code);
    }
  }

  return (
    <div>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-6">
        <p className="text-sm text-on-surface-variant">
          Select any engagement on the map to see the problem we were asked to
          solve and the frameworks we applied.
        </p>
        <div
          role="group"
          aria-label="Filter engagements"
          className="inline-flex self-start bg-white border border-outline-variant p-1"
        >
          {filters.map((f) => (
            <button
              key={f.id}
              type="button"
              aria-pressed={filter === f.id}
              onClick={() => choose(f.id)}
              className={`px-4 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                filter === f.id
                  ? "bg-navy-brand text-white"
                  : "text-ink hover:bg-cream"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
        <div className="lg:col-span-8 bg-white border border-outline-variant p-4 md:p-6 flex flex-col">
          <div className="flex justify-between font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-3">
            <span>← Buy side<span className="hidden md:inline"> · allocating resources</span></span>
            <span className="text-right">Sell side<span className="hidden md:inline"> · raising capital</span> →</span>
          </div>
          <div className="flex-1 grid grid-cols-2 grid-rows-2 border border-outline-variant bg-cream/60">
            {quadrants.map((q) => {
              const items = mapped.filter(
                (e) => e.map!.side === q.side && e.map!.capital === q.capital,
              );
              const dim = filter !== "all" && filter !== q.side;
              return (
                <div
                  key={`${q.side}-${q.capital}`}
                  className={`relative min-h-[200px] md:min-h-[230px] border-outline-variant transition-opacity ${
                    q.side === "buy" ? "border-r" : ""
                  } ${q.capital === "impact" ? "border-b" : ""} ${
                    dim ? "opacity-30" : ""
                  }`}
                >
                  {q.side === "buy" && (
                    <span
                      className={`absolute left-3 font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant ${
                        q.capital === "impact" ? "top-3" : "bottom-3"
                      }`}
                    >
                      {q.capital === "impact"
                        ? "Impact investing"
                        : "Innovative finance"}
                    </span>
                  )}
                  {q.side === "buy" && q.capital === "impact" && (
                    <div className="absolute inset-x-3 md:inset-x-8 top-9 md:top-1/2 md:-translate-y-1/2 border border-dashed border-gold-deep/70 bg-[#fbf6ea] p-3 md:p-4">
                      <span className="adv-eyebrow text-[9px] md:text-[10px] block mb-1">
                        Welcoming new engagements
                      </span>
                      <span className="font-display text-xs md:text-sm text-ink leading-snug block">
                        Corporate impact strategy and CSR portfolio allocation
                      </span>
                    </div>
                  )}
                  {items.map((e) => {
                    const active = e.code === current.code;
                    return (
                      <button
                        key={e.code}
                        type="button"
                        disabled={dim}
                        onClick={() => setSelected(e.code)}
                        aria-pressed={active}
                        style={{ left: `${e.map!.x}%`, top: `${e.map!.y}%` }}
                        className={`absolute -translate-x-1/2 -translate-y-1/2 flex items-center gap-2 max-w-[85%] text-left font-display text-[11px] md:text-sm text-ink hover:underline ${
                          e.map!.side === "sell" ? "flex-row-reverse" : ""
                        } ${active ? "font-bold" : ""}`}
                      >
                        <span
                          aria-hidden="true"
                          className={`shrink-0 w-3 h-3 rounded-full border-2 border-navy-brand ${
                            e.map!.reusable ? "bg-navy-brand" : "bg-white"
                          } ${active ? "ring-4 ring-gold-brand/50" : ""}`}
                        />
                        <span>{e.name}</span>
                      </button>
                    );
                  })}
                </div>
              );
            })}
          </div>
          <div className="flex flex-wrap items-center gap-x-6 gap-y-2 mt-4 text-xs text-on-surface-variant">
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-navy-brand" />
              Produced a reusable framework or model
            </span>
            <span className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full border-2 border-navy-brand" />
              Tailored to a single client
            </span>
            {scoping.length > 0 && (
              <span className="md:ml-auto">
                Being scoped: {scoping.join(", ")}
              </span>
            )}
          </div>
        </div>

        <aside
          aria-live="polite"
          className="lg:col-span-4 bg-ink text-white p-6 md:p-8 flex flex-col"
        >
          <div className="flex items-center justify-between gap-4 mb-5">
            <span className="bg-white/10 px-2 py-1 text-[11px]">
              {current.practice}
            </span>
            <span className="bg-white/10 px-2 py-1 text-[11px]">
              {current.status}
            </span>
          </div>
          <h3 className="font-display text-3xl leading-tight mb-4">
            {current.name}
          </h3>
          <p className="text-sm text-white/75 leading-relaxed mb-6">
            {current.detail}
          </p>
          <dl className="grid grid-cols-2 gap-4 border-t border-white/15 pt-5 mb-6">
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                Position
              </dt>
              <dd className="text-sm">
                {current.map!.side === "sell" ? "Sell side" : "Buy side"}
              </dd>
            </div>
            <div>
              <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                Type of capital
              </dt>
              <dd className="text-sm">{current.capitalLabel}</dd>
            </div>
          </dl>
          <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 mb-3">
            Frameworks and analysis
          </span>
          <ul className="space-y-2 text-sm text-white/85 mb-8">
            {current.frameworks?.map((f) => (
              <li key={f} className="flex gap-2">
                <span className="text-white/40">·</span>
                {f}
              </li>
            ))}
          </ul>
          {current.caseStudy && (
            <Link
              href={current.caseStudy}
              className="mt-auto flex items-center justify-between bg-gold-brand text-ink px-5 py-3 text-sm font-semibold hover:brightness-95 transition"
            >
              Read the case study <span aria-hidden="true">→</span>
            </Link>
          )}
        </aside>
      </div>
    </div>
  );
}
