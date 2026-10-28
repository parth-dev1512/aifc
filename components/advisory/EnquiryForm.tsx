"use client";

import { useRef, useState } from "react";

type Field = {
  name: string;
  label: string;
  type?: "text" | "email" | "tel" | "url" | "select" | "textarea";
  placeholder?: string;
  defaultValue?: string;
  required?: boolean;
  options?: string[];
  wide?: boolean;
};

type Step = { title: string; heading: string; intro?: string; fields: Field[] };

const steps: Step[] = [
  {
    title: "Organisation",
    heading: "Your organisation",
    intro:
      "AIFC Advisory works with organisations and firms. If you represent an investment fund, please get in touch with RISE Capital, the club's impact investment fund.",
    fields: [
      { name: "organisation", label: "Organisation name", required: true },
      { name: "website", label: "Website", type: "url", defaultValue: "https://" },
      {
        name: "orgType",
        label: "Organisation type",
        type: "select",
        required: true,
        options: [
          "Social enterprise",
          "Non-profit or NGO",
          "Foundation or trust",
          "Company or CSR team",
          "Civic institution",
          "Other",
        ],
      },
      {
        name: "sector",
        label: "Sector",
        type: "select",
        required: true,
        options: [
          "Agriculture and food",
          "Climate and environment",
          "Circular economy",
          "Education",
          "Health",
          "Livelihoods",
          "Tourism",
          "Technology",
          "Other",
        ],
      },
      {
        name: "revenue",
        label: "Annual revenue or budget",
        type: "select",
        options: [
          "Pre-revenue",
          "Under ₹1 crore",
          "₹1 to 10 crore",
          "₹10 to 50 crore",
          "Above ₹50 crore",
        ],
      },
      { name: "location", label: "Where you operate", placeholder: "City, state or region" },
    ],
  },
  {
    title: "Question",
    heading: "Your question",
    intro: "Tell us what you are working on. A few sentences is enough.",
    fields: [
      {
        name: "practice",
        label: "Which area is closest to your question?",
        type: "select",
        required: true,
        wide: true,
        options: [
          "Investment Readiness",
          "Capital Structuring",
          "Portfolio Strategy",
          "Impact Measurement",
          "Implementation and Scale",
          "Not sure",
        ],
      },
      {
        name: "question",
        label: "What question do you need help with?",
        type: "textarea",
        required: true,
        wide: true,
      },
      {
        name: "outcome",
        label: "What would you like to have at the end of the engagement?",
        type: "textarea",
        wide: true,
      },
      {
        name: "timing",
        label: "When do you need it?",
        type: "select",
        options: ["Within 2 months", "2 to 4 months", "4 to 6 months", "Flexible"],
      },
    ],
  },
  {
    title: "Details",
    heading: "Your details",
    intro: "Who should we contact about this enquiry?",
    fields: [
      { name: "name", label: "Full name", required: true },
      { name: "role", label: "Role" },
      { name: "email", label: "Email", type: "email", required: true },
      { name: "phone", label: "Phone", type: "tel" },
      { name: "source", label: "How did you hear about us?", wide: true },
    ],
  },
];

const inputClass =
  "w-full border border-outline-variant bg-white px-3 py-2.5 text-sm focus:border-navy-brand focus:ring-0";

// Front-end-only for now, like the other forms on the site: it walks through
// the three steps and shows a confirmation, but does not send anything yet.
export default function EnquiryForm() {
  const formRef = useRef<HTMLFormElement>(null);
  const [step, setStep] = useState(0);
  const [done, setDone] = useState(false);
  const last = step === steps.length - 1;

  function next(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (last) setDone(true);
    else setStep(step + 1);
  }

  if (done) {
    return (
      <div className="bg-white border border-outline-variant p-8 md:p-12">
        <span className="material-symbols-outlined text-4xl text-forest-brand mb-4 block">
          check_circle
        </span>
        <h2 className="font-display text-3xl text-ink mb-4">
          Thank you. We have your enquiry.
        </h2>
        <p className="text-on-surface-variant leading-relaxed max-w-xl">
          The Advisory directors will review it against our selection criteria.
          If it fits, a member of the team will be in touch to arrange a
          scoping call.
        </p>
      </div>
    );
  }

  return (
    <form
      ref={formRef}
      onSubmit={next}
      className="bg-white border border-outline-variant"
    >
      <ol className="grid grid-cols-3 gap-3 px-6 md:px-8 pt-6">
        {steps.map((s, i) => (
          <li
            key={s.title}
            className={`border-t-4 pt-2 text-xs ${
              i <= step
                ? "border-navy-brand text-ink font-semibold"
                : "border-outline-variant text-on-surface-variant"
            }`}
          >
            {String(i + 1).padStart(2, "0")} {s.title}
          </li>
        ))}
      </ol>

      {steps.map((s, i) => (
        // Every step stays mounted so earlier answers are kept; only the
        // current one is shown and validated.
        <fieldset
          key={s.title}
          hidden={i !== step}
          disabled={i !== step}
          className="px-6 md:px-8 py-6"
        >
          <legend className="font-display text-3xl text-ink mb-3 float-left w-full">
            {s.heading}
          </legend>
          {s.intro && (
            <p className="clear-both text-xs text-on-surface-variant leading-relaxed mb-6">
              {s.intro}
            </p>
          )}
          <div className="clear-both grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-5">
            {s.fields.map((f) => (
              <div
                key={f.name}
                className={f.wide || f.type === "textarea" ? "md:col-span-3" : ""}
              >
                <label htmlFor={f.name} className="block text-sm font-semibold text-ink mb-1.5">
                  {f.label}
                  {f.required && " *"}
                </label>
                {f.type === "select" ? (
                  <select
                    id={f.name}
                    name={f.name}
                    required={f.required}
                    defaultValue=""
                    className={inputClass}
                  >
                    <option value="" disabled>
                      Select
                    </option>
                    {f.options?.map((o) => (
                      <option key={o}>{o}</option>
                    ))}
                  </select>
                ) : f.type === "textarea" ? (
                  <textarea
                    id={f.name}
                    name={f.name}
                    required={f.required}
                    rows={4}
                    className={inputClass}
                  />
                ) : (
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type ?? "text"}
                    required={f.required}
                    placeholder={f.placeholder}
                    defaultValue={f.defaultValue}
                    className={inputClass}
                  />
                )}
              </div>
            ))}
          </div>
        </fieldset>
      ))}

      <div className="border-t border-outline-variant px-6 md:px-8 py-5 flex items-center justify-between gap-4">
        <span className="text-xs text-on-surface-variant">
          Step {step + 1} of {steps.length}
        </span>
        <div className="flex gap-3">
          {step > 0 && (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="border border-navy-brand text-navy-brand px-5 py-3 text-sm font-semibold"
            >
              ← Back
            </button>
          )}
          <button
            type="submit"
            className="bg-navy-brand text-white px-6 py-3 text-sm font-semibold hover:bg-ink transition-colors"
          >
            {last ? "Submit enquiry" : "Continue →"}
          </button>
        </div>
      </div>
    </form>
  );
}
