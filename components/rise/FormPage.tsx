import Link from "next/link";
import PageShell from "@/components/PageShell";

type Props = {
  eyebrow: string;
  title: string;
  intro: string;
  tags?: string[];
  steps: string[];
  note: string;
  formTitle: string;
  formIntro: string;
  children: React.ReactNode;
};

// Shared layout for the two RISE Capital intake pages: navy brief on the left,
// form card on the right.
export default function FormPage({
  eyebrow,
  title,
  intro,
  tags,
  steps,
  note,
  formTitle,
  formIntro,
  children,
}: Props) {
  return (
    <PageShell
      name="rise_capital"
      className="bg-white text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-white"
    >
      <main className="pt-20 bg-surface-container-low min-h-screen">
        <div className="px-container-padding max-w-container-max mx-auto py-16">
          <Link
            href="/rise_capital"
            className="inline-flex items-center gap-2 font-label-lg text-label-lg text-navy-brand mb-10 hover:underline"
          >
            <span className="material-symbols-outlined text-base">
              arrow_back
            </span>
            Back to RISE Capital
          </Link>
          <div className="grid grid-cols-1 md:grid-cols-12 gap-gutter items-start">
            <aside className="md:col-span-5 bg-navy-brand text-white p-10 md:p-12 rounded-xl">
              <span className="font-label-lg text-[11px] uppercase tracking-[0.3em] text-tertiary-fixed-dim block mb-6">
                {eyebrow}
              </span>
              <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">
                {title}
              </h1>
              <p className="font-body-md text-body-md text-white/80 leading-relaxed mb-8">
                {intro}
              </p>
              {tags && (
                <div className="flex flex-wrap gap-2 mb-10">
                  {tags.map((t) => (
                    <span
                      key={t}
                      className="border border-white/30 px-3 py-1 rounded-sm font-label-lg text-[11px]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              )}
              <div className="border-t border-white/15 pt-8">
                <span className="font-label-lg text-[10px] uppercase tracking-[0.3em] text-white/60 block mb-6">
                  What happens next
                </span>
                <ol className="space-y-5">
                  {steps.map((s, i) => (
                    <li key={s} className="flex gap-4 text-white/90">
                      <span className="font-label-lg text-tertiary-fixed-dim">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span>{s}</span>
                    </li>
                  ))}
                </ol>
                <p className="text-sm text-white/60 mt-8 leading-relaxed">
                  {note}
                </p>
              </div>
            </aside>
            <section className="md:col-span-7 bg-white border border-outline-variant rounded-xl p-10 md:p-12">
              <h2 className="text-headline-md font-semibold text-navy-brand mb-3">
                {formTitle}
              </h2>
              <p className="text-on-surface-variant mb-10">{formIntro}</p>
              {children}
            </section>
          </div>
        </div>
      </main>
    </PageShell>
  );
}
