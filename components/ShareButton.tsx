"use client";

import { useEffect, useRef, useState } from "react";

const buttonClass =
  "relative w-12 h-12 rounded-lg border border-outline-variant flex items-center justify-center hover:bg-navy-brand hover:text-white hover:border-navy-brand transition-all duration-300";

async function copyText(text: string) {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    // Fallback for browsers / contexts without the async clipboard API.
    const el = document.createElement("textarea");
    el.value = text;
    el.setAttribute("readonly", "");
    el.style.position = "fixed";
    el.style.opacity = "0";
    document.body.appendChild(el);
    el.select();
    try {
      return document.execCommand("copy");
    } catch {
      return false;
    } finally {
      document.body.removeChild(el);
    }
  }
}

// Copies the current page URL to the clipboard and confirms with a short "Link copied" tooltip.
export default function ShareButton() {
  const [copied, setCopied] = useState(false);
  const timer = useRef<ReturnType<typeof setTimeout>>(undefined);

  useEffect(() => () => clearTimeout(timer.current), []);

  async function handleClick() {
    if (!(await copyText(window.location.href))) return;
    setCopied(true);
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setCopied(false), 2000);
  }

  return (
    <button
      type="button"
      aria-label="Copy link to this page"
      title="Copy link"
      className={buttonClass}
      onClick={handleClick}
    >
      <span className="material-symbols-outlined text-xl">
        {copied ? "check" : "share"}
      </span>
      <span
        role="status"
        aria-live="polite"
        className={`pointer-events-none absolute -top-10 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md bg-navy-brand px-3 py-1.5 text-xs font-label-lg text-white shadow-lg transition-opacity duration-200 ${
          copied ? "opacity-100" : "opacity-0"
        }`}
      >
        {copied ? "Link copied" : ""}
      </span>
    </button>
  );
}
