import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import EngagementGrid from "@/components/advisory/EngagementGrid";
import PortfolioMap from "@/components/advisory/PortfolioMap";
import {
  ADVISORY_EMAIL,
  engagements,
  faqs,
  practiceAreas,
  process,
  standards,
} from "./data";

export const metadata: Metadata = { title: "AIFC Advisory" };

const pillars = [
  {
    n: "01",
    title: "Client Engagements",
    body: "Scoped consulting engagements across investment readiness, capital structuring, portfolio strategy, impact measurement, and implementation and scale.",
    cta: "Our engagements",
    href: "#engagements",
  },
  {
    n: "02",
    title: "Frameworks and Methods",
    body: "Recognised standards in impact finance, including the GIIN's IRIS+ metrics, the five dimensions of impact, Theory of Change, SROI and blended capital structuring.",
    cta: "Methods library",
    href: "/advisory_projects/methods",
  },
  {
    n: "03",
    title: "Our Analysts",
    body: "Ashokans selected through a competitive process and trained in impact measurement and financial modelling before they join a client team.",
    cta: "Meet the team",
    href: "/members",
  },
];

// Decorative version of the portfolio map for the hero.
function HeroMap() {
  const dots = [
    { x: 145, y: 45, open: true },
    { x: 118, y: 75 },
    { x: 140, y: 125 },
    { x: 50, y: 160 },
    { x: 110, y: 155, open: true },
    { x: 155, y: 180 },
  ];
  return (
    <svg
      viewBox="0 0 200 210"
      className="w-full max-w-sm text-white/30"
      aria-hidden="true"
    >
      <rect x="0.5" y="0.5" width="199" height="209" fill="none" stroke="currentColor" />
      <line x1="100" y1="0" x2="100" y2="210" stroke="currentColor" />
      <line x1="0" y1="105" x2="200" y2="105" stroke="currentColor" />
      <g fill="currentColor" fontFamily="monospace" fontSize="5" letterSpacing="0.6">
        <text x="5" y="10">IMPACT INVESTING</text>
        <text x="5" y="102">← BUY SIDE</text>
        <text x="160" y="102">SELL SIDE →</text>
        <text x="5" y="204">INNOVATIVE FINANCE</text>
      </g>
      {dots.map((d) => (
        <circle
          key={`${d.x}-${d.y}`}
          cx={d.x}
          cy={d.y}
          r={d.open ? 4 : 3}
          className={d.open ? "fill-none stroke-gold-brand" : "fill-gold-brand"}
          strokeWidth="1.2"
        />
      ))}
    </svg>
  );
}

export default function Page() {
  const scoping = engagements.filter((e) => !e.map).map((e) => e.name);

  return (
    <PageShell
      name="advisory_projects"
      className="bg-cream text-ink font-body-md antialiased overflow-x-hidden selection:bg-navy-brand selection:text-white"
    >
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy-brand text-white">
          <div className="px-container-padding max-w-container-max mx-auto py-20 md:py-28 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-brand block mb-6">
                Ashoka Impact Finance Club
              </span>
              <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-8">
                AIFC Advisory
              </h1>
              <p className="font-display text-xl md:text-2xl leading-snug text-white/90 max-w-2xl mb-6">
                Pro bono impact finance consulting for social enterprises,
                foundations and mission-led organisations.
              </p>
              <p className="text-white/75 leading-relaxed max-w-2xl mb-10">
                We help organisations prepare for investment, structure their
                funding, measure their impact and plan how their programmes can
                grow, through engagements delivered by AIFC analysts at Ashoka
                University.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/advisory_projects/enquiry" className="adv-btn-gold">
                  Submit a project enquiry <span aria-hidden="true">→</span>
                </Link>
                <a href="#portfolio" className="adv-btn-outline border-white/40">
                  View our engagements
                </a>
              </div>
            </div>
            <div className="hidden lg:flex lg:col-span-4 justify-end">
              <HeroMap />
            </div>
          </div>
        </section>

        {/* About */}
        <section className="px-container-padding max-w-container-max mx-auto py-20 md:py-24">
          <span className="adv-eyebrow block mb-4">About AIFC Advisory</span>
          <h2 className="adv-heading text-3xl md:text-5xl max-w-3xl mb-8">
            The consulting arm of the Ashoka Impact Finance Club.
          </h2>
          <div className="space-y-5 max-w-3xl text-on-surface-variant leading-relaxed">
            <p>
              AIFC Advisory works with organisations on the financial questions
              that stand between their work and the capital it needs. Some of
              our clients are preparing to raise investment and need an impact
              thesis, a financial model and a clear view of which investors to
              approach. Others need to show funders that their programmes
              deliver measurable outcomes, decide how to allocate their own
              resources, or plan how a successful pilot can be taken to new
              sites.
            </p>
            <p>
              Every engagement is pro bono. Each one is scoped in writing with
              the client, delivered by a team of AIFC analysts, and reviewed by
              our Advisory directors before any work is shared. We select
              engagements deliberately, so that each one adds a new financing
              question, instrument or client type to our portfolio.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-14">
            {pillars.map((p) => (
              <div
                key={p.n}
                className="bg-white border border-outline-variant p-6 flex flex-col reveal-on-scroll"
              >
                <span className="font-mono text-xs text-gold-deep mb-3">{p.n}</span>
                <h3 className="font-display text-xl text-ink mb-3">{p.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {p.body}
                </p>
                <Link
                  href={p.href}
                  className="mt-auto self-start border border-navy-brand text-navy-brand px-4 py-2 text-sm font-semibold hover:bg-navy-brand hover:text-white transition-colors"
                >
                  {p.cta}
                </Link>
              </div>
            ))}
          </div>
        </section>

        {/* Practice areas */}
        <section className="px-container-padding max-w-container-max mx-auto pb-20 md:pb-24">
          <span className="adv-eyebrow block mb-4">Practice areas</span>
          <h2 className="adv-heading text-3xl md:text-5xl mb-6">
            What we help organisations with
          </h2>
          <p className="max-w-3xl text-on-surface-variant leading-relaxed mb-12">
            Our work is organised into five practice areas. Each engagement is
            staffed to one of them, so that the models and frameworks built for
            one client strengthen the work we do for the next.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {practiceAreas.map((a) => (
              <div
                key={a.n}
                className="bg-white border border-outline-variant p-6 flex flex-col reveal-on-scroll"
              >
                <div className="flex items-start gap-3 mb-4">
                  <span className="material-symbols-outlined text-navy-brand bg-cream w-10 h-10 flex items-center justify-center shrink-0">
                    {a.icon}
                  </span>
                  <div>
                    <span className="font-mono text-[11px] text-gold-deep block">
                      {a.n} · {a.side}
                    </span>
                    <h3 className="font-display text-xl text-ink">{a.title}</h3>
                  </div>
                </div>
                <p className="text-sm text-on-surface-variant leading-relaxed mb-6">
                  {a.body}
                </p>
                <div className="mt-auto border-t border-outline-variant pt-4">
                  <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant block mb-2">
                    Frameworks applied
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {a.tags.map((t) => (
                      <span
                        key={t}
                        className="bg-cream border border-outline-variant px-2 py-1 text-[11px] text-ink"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Portfolio map */}
        <section
          id="portfolio"
          className="scroll-mt-24 px-container-padding max-w-container-max mx-auto pb-20 md:pb-24"
        >
          <span className="adv-eyebrow block mb-4">Our engagement portfolio</span>
          <h2 className="adv-heading text-3xl md:text-5xl mb-6">
            How our engagements fit together
          </h2>
          <p className="max-w-3xl text-on-surface-variant leading-relaxed mb-10">
            We place every engagement along two dimensions. The first is the
            client&apos;s position in the transaction: on the sell side, we
            support organisations preparing to raise capital; on the buy side,
            we support organisations deciding how to allocate their own
            resources across initiatives. The second is the type of capital
            involved, from impact investing, where investors expect a financial
            return alongside measured impact, to innovative finance, which
            covers blended, concessional and outcomes-based funding.
          </p>
          <PortfolioMap engagements={engagements} scoping={scoping} />
          <div className="mt-4 bg-secondary-fixed/40 border border-outline-variant px-6 py-4 flex flex-col md:flex-row md:items-center md:justify-between gap-4 text-sm">
            <p className="text-on-surface-variant max-w-3xl">
              AIFC Advisory works exclusively with organisations and firms.
              Investment funds interested in working with AIFC can learn more
              about RISE Capital, the club&apos;s undergraduate-led impact
              investment fund.
            </p>
            <Link
              href="/rise_capital"
              className="font-semibold text-navy-brand underline underline-offset-4 whitespace-nowrap"
            >
              Visit RISE Capital →
            </Link>
          </div>
        </section>

        {/* Engagements */}
        <section
          id="engagements"
          className="scroll-mt-24 px-container-padding max-w-container-max mx-auto pb-20 md:pb-24"
        >
          <div className="border-t border-outline-variant pt-16">
            <EngagementGrid engagements={engagements} />
          </div>
        </section>

        {/* Frameworks */}
        <section className="px-container-padding max-w-container-max mx-auto pb-20 md:pb-24">
          <span className="adv-eyebrow block mb-4">Frameworks and methods</span>
          <h2 className="adv-heading text-3xl md:text-5xl mb-6">
            The standards behind our work
          </h2>
          <p className="max-w-3xl text-on-surface-variant leading-relaxed mb-12">
            We apply frameworks that impact investors, funders and development
            institutions already use, so that the work we deliver can be read
            and relied on by the people our clients need to persuade.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {standards.map((s) => (
              <div
                key={s.title}
                className="bg-white border border-outline-variant border-t-4 border-t-navy-brand p-5"
              >
                <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
                <span className="font-mono text-[10px] uppercase tracking-[0.15em] text-gold-deep block mb-3">
                  {s.source}
                </span>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
        </section>

        {/* Process */}
        <section className="px-container-padding max-w-container-max mx-auto pb-20 md:pb-24">
          <span className="adv-eyebrow block mb-4">How an engagement works</span>
          <h2 className="adv-heading text-3xl md:text-5xl max-w-2xl mb-12">
            From first conversation to final presentation
          </h2>
          <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {process.map((s, i) => (
              <li key={s.title} className="bg-white border border-outline-variant p-5">
                <span className="w-8 h-8 rounded-full bg-navy-brand text-white text-sm flex items-center justify-center mb-4">
                  {i + 1}
                </span>
                <h3 className="font-display text-lg text-ink mb-2">{s.title}</h3>
                <p className="text-sm text-on-surface-variant leading-relaxed">
                  {s.body}
                </p>
              </li>
            ))}
          </ol>
        </section>

        {/* FAQ */}
        <section className="px-container-padding max-w-container-max mx-auto pb-16 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-4">
            <span className="adv-eyebrow block mb-4">Frequently asked questions</span>
            <h2 className="adv-heading text-3xl md:text-5xl mb-6">Working with us</h2>
            <p className="text-sm text-on-surface-variant leading-relaxed max-w-xs">
              If your question is not answered here, please{" "}
              <a href={`mailto:${ADVISORY_EMAIL}`} className="underline">
                write to us
              </a>{" "}
              and a member of the team will respond.
            </p>
          </div>
          <div className="md:col-span-8 border-t border-ink">
            {faqs.map((f, i) => (
              <details
                key={f.id}
                open={i === 0}
                className="group border-b border-outline-variant"
              >
                <summary className="flex items-center justify-between gap-6 py-5 cursor-pointer list-none [&::-webkit-details-marker]:hidden">
                  <span className="font-display text-lg text-ink">{f.title}</span>
                  <span className="text-gold-deep text-xl leading-none group-open:hidden" aria-hidden="true">
                    +
                  </span>
                  <span className="text-gold-deep text-xl leading-none hidden group-open:inline" aria-hidden="true">
                    −
                  </span>
                </summary>
                <p className="pb-6 text-sm text-on-surface-variant leading-relaxed max-w-2xl">
                  {f.body}
                </p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="px-container-padding max-w-container-max mx-auto pb-24">
          <p className="text-sm text-on-surface-variant leading-relaxed max-w-4xl mb-8">
            Before joining a client team, analysts are trained in impact
            measurement, financial modelling and the frameworks used across our
            practice. Every team is led by an engagement lead and supervised by
            the Advisory directors, who review all work before it is shared with
            a client.
          </p>
          <div className="bg-navy-brand text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8">
              <span className="font-mono text-[11px] uppercase tracking-[0.2em] text-gold-brand block mb-4">
                Work with us
              </span>
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-5">
                Interested in working with AIFC Advisory?
              </h2>
              <p className="text-white/75 text-sm leading-relaxed max-w-xl">
                If your organisation is preparing to raise capital, rethinking
                how it is funded, looking to measure its impact or planning how
                a programme can grow, we would be glad to hear from you. Please
                share a few details through our project enquiry form and a
                member of our Advisory team will be in touch.
              </p>
            </div>
            <div className="md:col-span-4 flex flex-col gap-3 md:items-end">
              <Link href="/advisory_projects/enquiry" className="adv-btn-gold justify-center">
                Submit a project enquiry <span aria-hidden="true">→</span>
              </Link>
              <a
                href={`mailto:${ADVISORY_EMAIL}`}
                className="adv-btn-outline border-white/40 justify-center"
              >
                Email the Advisory team
              </a>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
