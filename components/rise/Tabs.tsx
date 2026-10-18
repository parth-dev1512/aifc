"use client";

import { useState } from "react";

export type Tab = { id: string; label: string; content: React.ReactNode };

export default function Tabs({ tabs }: { tabs: Tab[] }) {
  const [active, setActive] = useState(tabs[0].id);

  return (
    <div>
      <div
        role="tablist"
        className="inline-flex border border-navy-brand rounded-lg overflow-hidden max-w-full overflow-x-auto"
      >
        {tabs.map((t) => (
          <button
            key={t.id}
            role="tab"
            type="button"
            id={`tab-${t.id}`}
            aria-selected={active === t.id}
            aria-controls={`tabpanel-${t.id}`}
            onClick={() => setActive(t.id)}
            className={`px-6 py-3 font-label-lg text-label-lg whitespace-nowrap transition-colors ${
              active === t.id
                ? "bg-navy-brand text-white"
                : "bg-white text-navy-brand hover:bg-surface-container-low"
            }`}
          >
            {t.label}
          </button>
        ))}
      </div>
      {tabs.map((t) => (
        <div
          key={t.id}
          role="tabpanel"
          id={`tabpanel-${t.id}`}
          aria-labelledby={`tab-${t.id}`}
          hidden={active !== t.id}
          className="pt-12 fade-in"
        >
          {t.content}
        </div>
      ))}
    </div>
  );
}
