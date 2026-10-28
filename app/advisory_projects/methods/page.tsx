import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import { engagements, methodGroups } from "../data";

export const metadata: Metadata = { title: "Methods Library | AIFC Advisory" };

const th = "font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-normal text-left py-3 pr-4";

export default function Page() {
  const names = Object.fromEntries(engagements.map((e) => [e.code, e.name]));

  return (
    <PageShell
      name="advisory_projects"
      className="bg-cream text-ink font-body-md antialiased overflow-x-hidden selection:bg-navy-brand selection:text-white"
    >
      <main className="pt-20">
        <div className="px-container-padding max-w-container-max mx-auto">
          <div className="flex items-center justify-between py-5 border-b border-outline-variant text-sm">
            <Link href="/advisory_projects" className="text-navy-brand">
              ← Advisory Practice
            </Link>
            <span className="font-mono text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">
              Methods library
            </span>
          </div>

          <header className="py-16 md:py-20">
            <span className="adv-eyebrow block mb-4">The practice&apos;s instruments</span>
            <h1 className="adv-heading text-5xl md:text-7xl mb-8">Methods Library</h1>
            <p className="font-display text-lg md:text-xl leading-relaxed max-w-2xl">
              Each entry states the question a method answers, when the
              practice applies it and where it has been used. Bespoke work
              lives in the dossiers. What can be used again is kept here.
            </p>
          </header>

          {methodGroups.map((g) => (
            <section key={g.numeral} className="border-t-2 border-ink pt-8 pb-16">
              <h2 className="flex items-baseline gap-4 mb-6">
                <span className="font-mono text-sm text-gold-deep">{g.numeral}</span>
                <span className="adv-heading text-3xl md:text-4xl">{g.title}</span>
              </h2>
              <div className="overflow-x-auto">
                <table className="w-full min-w-[760px]">
                  <thead>
                    <tr className="border-b border-ink">
                      <th className={`${th} w-[22%]`}>Method</th>
                      <th className={`${th} w-[33%]`}>Question it answers</th>
                      <th className={`${th} w-[30%]`}>When it is applied</th>
                      <th className={th}>Used in</th>
                    </tr>
                  </thead>
                  <tbody>
                    {g.methods.map((m) => (
                      <tr key={m.name} className="border-b border-outline-variant align-top">
                        <td className="py-4 pr-4">
                          <span className="font-display text-lg block leading-snug">{m.name}</span>
                          <span className="text-[11px] text-on-surface-variant">{m.source}</span>
                        </td>
                        <td className="py-4 pr-4 font-display italic text-sm leading-relaxed">
                          {m.question}
                        </td>
                        <td className="py-4 pr-4 text-sm text-on-surface-variant leading-relaxed">
                          {m.when}
                        </td>
                        <td className="py-4 font-mono text-xs text-navy-brand whitespace-nowrap">
                          {m.used.map((c, i) => (
                            <span key={c}>
                              {i > 0 && " · "}
                              <abbr title={names[c]} className="no-underline">
                                {c}
                              </abbr>
                            </span>
                          ))}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <p className="text-xs text-on-surface-variant pb-20">
            {engagements
              .filter((e) => e.map)
              .map((e) => `${e.code}: ${e.name}`)
              .join(" · ")}
          </p>
        </div>
      </main>
    </PageShell>
  );
}
