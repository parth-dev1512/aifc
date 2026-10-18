"use client";

import { useState } from "react";

export type AccordionItem = {
  id: string;
  marker: string;
  title: string;
  body: React.ReactNode;
};

type Props = {
  items: AccordionItem[];
  /** "split": title left, body right (same row). "stack": body drops below the title. */
  layout?: "split" | "stack";
  /** Open a row on pointer hover as well as on click/focus (touch and keyboard still use click). */
  openOnHover?: boolean;
  defaultOpen?: string | null;
  /** Colours for use on the navy sections. */
  dark?: boolean;
};

export default function Accordion({
  items,
  layout = "split",
  openOnHover = false,
  defaultOpen = null,
  dark = false,
}: Props) {
  const [open, setOpen] = useState<string | null>(defaultOpen);

  const canHover = () =>
    typeof window !== "undefined" &&
    window.matchMedia("(hover: hover)").matches;

  const border = dark ? "border-white/15" : "border-outline-variant";
  const title = dark ? "text-white" : "text-navy-brand";
  const marker = dark ? "text-tertiary-fixed-dim" : "text-forest-brand";
  const body = dark ? "text-white/80" : "text-on-surface-variant";

  return (
    <div className={`border-t ${border}`}>
      {items.map((item) => {
        const isOpen = open === item.id;
        const panelId = `acc-${item.id}`;
        return (
          <div
            key={item.id}
            className={`border-b ${border} ${
              layout === "split" ? "md:grid md:grid-cols-12 md:gap-gutter" : ""
            }`}
            onMouseEnter={() => {
              if (openOnHover && canHover()) setOpen(item.id);
            }}
          >
            <button
              type="button"
              aria-expanded={isOpen}
              aria-controls={panelId}
              onClick={() =>
                setOpen(isOpen && !(openOnHover && canHover()) ? null : item.id)
              }
              className={`group w-full flex items-center gap-6 text-left py-8 ${
                layout === "split" ? "md:col-span-5" : ""
              }`}
            >
              <span
                className={`font-headline-sm text-headline-sm font-bold tracking-wider min-w-[3rem] ${marker}`}
              >
                {item.marker}
              </span>
              <span
                className={`flex-1 text-title-lg font-semibold leading-snug ${title}`}
              >
                {item.title}
              </span>
              <span
                className={`material-symbols-outlined transition-transform duration-300 ${
                  isOpen ? "rotate-180" : ""
                } ${dark ? "text-white/70" : "text-on-surface-variant"}`}
                aria-hidden="true"
              >
                expand_more
              </span>
            </button>
            <div
              id={panelId}
              role="region"
              className={`grid transition-[grid-template-rows,opacity] duration-500 ease-out ${
                isOpen ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
              } ${layout === "split" ? "md:col-span-7 md:pt-8" : ""}`}
            >
              <div className="overflow-hidden">
                <div
                  className={`space-y-4 pb-8 font-body-md text-body-md leading-relaxed ${body} ${
                    layout === "stack" ? "pl-[4.5rem] max-w-2xl" : ""
                  }`}
                >
                  {item.body}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
