"use client";

import { useRef, useState } from "react";

export type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "url" | "select";
  placeholder?: string;
  required?: boolean;
  options?: string[];
};

type Status = "idle" | "processing" | "done";

const inputClass =
  "w-full bg-transparent py-3 px-0 form-underline border-x-0 border-t-0 focus:ring-0 placeholder:text-outline font-body-md";

// Front-end-only placeholder, same behaviour as JoinForm: shows the submit
// micro-interaction but does not send anything anywhere yet.
export default function RiseForm({
  fields,
  submitLabel,
  doneLabel,
}: {
  fields: Field[];
  submitLabel: string;
  doneLabel: string;
}) {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<Status>("idle");

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (status !== "idle") return;
    setStatus("processing");
    setTimeout(() => {
      setStatus("done");
      setTimeout(() => {
        setStatus("idle");
        formRef.current?.reset();
      }, 3000);
    }, 1500);
  }

  return (
    <form ref={formRef} className="space-y-10" onSubmit={handleSubmit}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
        {fields.map((f) => (
          <div
            key={f.name}
            className={`space-y-2 ${f.type === "email" ? "md:col-span-2" : ""}`}
          >
            <label
              htmlFor={f.name}
              className="text-[10px] font-bold uppercase tracking-widest text-outline"
            >
              {f.label}
              {f.required && " *"}
            </label>
            {f.type === "select" ? (
              <select
                id={f.name}
                name={f.name}
                required={f.required}
                defaultValue=""
                className={`${inputClass} appearance-none cursor-pointer`}
              >
                <option value="" disabled>
                  Select
                </option>
                {f.options?.map((o) => (
                  <option key={o}>{o}</option>
                ))}
              </select>
            ) : (
              <input
                id={f.name}
                name={f.name}
                type={f.type ?? "text"}
                required={f.required}
                placeholder={f.placeholder}
                className={inputClass}
              />
            )}
          </div>
        ))}
      </div>
      <button
        type="submit"
        className={`w-full md:w-auto text-white px-12 py-4 rounded-lg font-label-lg uppercase tracking-widest transition-all active:scale-95 flex items-center justify-center gap-3 shadow-lg ${
          status === "idle" ? "bg-navy-brand hover:bg-black" : ""
        } ${status === "done" ? "bg-forest-brand" : ""} ${
          status === "processing"
            ? "bg-navy-brand opacity-70 pointer-events-none"
            : ""
        }`}
      >
        {status === "idle" && submitLabel}
        {status === "processing" && (
          <>
            <span className="material-symbols-outlined animate-spin">
              progress_activity
            </span>
            Processing...
          </>
        )}
        {status === "done" && (
          <>
            <span className="material-symbols-outlined">check_circle</span>
            {doneLabel}
          </>
        )}
      </button>
    </form>
  );
}
