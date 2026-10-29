import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import EnquiryForm from "@/components/advisory/EnquiryForm";
import { ADVISORY_EMAIL } from "../data";

export const metadata: Metadata = { title: "Submit a project enquiry | AIFC Advisory" };

const nextSteps = [
  "The directors review your enquiry against our selection criteria.",
  "If it fits, we invite you to a scoping call with an engagement lead.",
  "Scope, team and timeline are agreed in a written scoping letter.",
];

export default function Page() {
  return (
    <PageShell
      name="advisory_projects"
      className="bg-cream text-ink font-body-md antialiased overflow-x-hidden"
    >
      <main className="pt-20 min-h-screen">
        <div className="px-container-padding max-w-container-max mx-auto py-12 md:py-16">
          <Link
            href="/advisory_projects"
            className="inline-block text-sm text-navy-brand underline underline-offset-4 mb-8"
          >
            ← Back to Advisory
          </Link>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
            <aside className="lg:col-span-4 bg-navy-brand text-white p-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-brand block mb-5">
                AIFC Advisory
              </span>
              <h1 className="font-display text-4xl md:text-5xl leading-tight mb-8">
                Submit a project enquiry
              </h1>
              <div className="space-y-4 text-sm text-white/80 leading-relaxed mb-8">
                <p>Thank you for your interest in working with AIFC Advisory.</p>
                <p>
                  Please tell us a little about your organisation and the
                  question you are working on. The form has three short
                  sections and takes around five minutes to complete.
                </p>
              </div>
              <div className="border-t border-white/15 pt-6">
                <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-white/60 block mb-4">
                  What happens next
                </span>
                <ol className="space-y-3 text-sm mb-8">
                  {nextSteps.map((s, i) => (
                    <li key={s} className="flex gap-3">
                      <span className="font-mono text-gold-brand">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="text-white/90">{s}</span>
                    </li>
                  ))}
                </ol>
                <div className="flex flex-wrap gap-2 mb-8">
                  {["Pro bono", "NDA on request", "Nothing published without consent"].map(
                    (t) => (
                      <span key={t} className="border border-white/30 px-2 py-1 text-[11px]">
                        {t}
                      </span>
                    ),
                  )}
                </div>
                <p className="text-sm text-white/70">
                  Prefer email?
                  <br />
                  <a href={`mailto:${ADVISORY_EMAIL}`} className="underline">
                    {ADVISORY_EMAIL}
                  </a>
                </p>
              </div>
            </aside>
            <div className="lg:col-span-8">
              <EnquiryForm />
            </div>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
