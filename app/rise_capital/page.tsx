import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";
import Accordion from "@/components/rise/Accordion";
import Tabs from "@/components/rise/Tabs";

export const metadata: Metadata = { title: "RISE Capital" };

const subNav = [
  { href: "#thesis", label: "Thesis" },
  { href: "#model", label: "Model" },
  { href: "#value-to-partners", label: "Value to partners" },
  { href: "#leadership", label: "Leadership" },
  { href: "#faq", label: "FAQ" },
];

const positions = [
  {
    id: "earliest",
    marker: "I",
    title: "The decisive capital is the earliest.",
    body: (
      <p>
        RISE invests in climate ventures at pre-seed and seed, while their
        market, business model and impact methodology are still being defined.
        It targets businesses whose growth is directly tied to emissions
        reduction, and deploys capital early enough to shape them.
      </p>
    ),
  },
  {
    id: "mispricing",
    marker: "II",
    title: "Hard-to-abate sectors carry the largest mispricing.",
    body: (
      <>
        <p>
          India&apos;s power, industrial, agricultural and cooling sectors are
          expected to account for a significant share of global emissions
          growth over the coming decades. Technology risk in these segments is
          high and early capital is scarce.
        </p>
        <p>
          RISE concentrates here because this is where the gap between
          perceived and underwritten risk is widest, and with it the potential
          for both financial return and emissions reduction.
        </p>
      </>
    ),
  },
  {
    id: "hub",
    marker: "III",
    title: "India is the origination hub for Global South climate capital.",
    body: (
      <>
        <p>
          Climate solutions built under India&apos;s cost constraints and at
          India&apos;s scale are affordable enough to reach the populations
          most exposed to climate risk, across Asia and the wider Global South.
        </p>
        <p>
          RISE treats India as the region&apos;s centre of origination for
          early-stage impact capital, with returns measured in emissions
          avoided and resilience built alongside financial performance.
        </p>
      </>
    ),
  },
];

const globalInstitutions = [
  {
    title: "Origination at the earliest stage",
    body: "Systematic coverage of India's pre-seed and seed climate ventures, well before they reach the scale at which global capital typically engages.",
  },
  {
    title: "Impact evidence that holds",
    body: "Venture-level impact theses aligned with the frameworks institutional allocators already report against, built before investment rather than reconstructed after it.",
  },
  {
    title: "Ground truth on India",
    body: "Analysis of Indian markets, policy and customers from a team embedded in them, for institutions building their position in Asia's climate economy.",
  },
];

const indianFunds = [
  {
    title: "Complete sector mapping",
    body: "A team that maps climate sectors completely, so partner funds see the full field of early-stage ventures rather than a sample of it.",
  },
  {
    title: "A documented screening standard",
    body: "Every venture is screened to a documented standard, with commercial, technical and impact assessment recorded at each stage.",
  },
  {
    title: "Memo and impact thesis",
    body: "Each venture is presented with a written memo and a venture-level impact thesis, scoped to the partner fund's own thesis and criteria.",
  },
];

const howItWorks = [
  { n: "01", title: "Source", body: "Thesis-led coverage of each climate sector." },
  { n: "02", title: "Screen", body: "Fit with the thesis, and impact intrinsic to the model." },
  { n: "03", title: "Diligence", body: "Commercial, technical and impact, to institutional standard." },
  { n: "04", title: "Committee", body: "Every decision tested and recorded." },
  { n: "05", title: "Recommend", body: "To partner funds, fully documented." },
];

const sourcing = [
  {
    id: "sourcing",
    marker: "01",
    title: "Sourcing and landscaping",
    body: (
      <p>
        RISE is developing agentic research workflows, run alongside its
        analysts, to map climate sectors and surface ventures before they reach
        conventional databases.
      </p>
    ),
  },
  {
    id: "impact",
    marker: "02",
    title: "Impact measurement",
    body: (
      <p>
        Its impact framework is being designed to quantify avoided emissions
        against a counterfactual baseline, in line with emerging investor
        guidance, and to test each venture&apos;s claims against comparable
        evidence.
      </p>
    ),
  },
  {
    id: "verification",
    marker: "03",
    title: "Verification",
    body: (
      <p>
        Over time, RISE intends to draw on geospatial intelligence, pairing
        satellite Earth observation with machine learning, to verify
        environmental outcomes through digital MRV.
      </p>
    ),
  },
];

// TODO: replace each "#" with the person's LinkedIn profile URL.
const leadership = [
  { name: "Anandini Agrawal", role: "Founder", linkedin: "#" },
  { name: "Krrish Goel", role: "Founder", linkedin: "#" },
  { name: "Arham Dudhoria", role: "Director", linkedin: "#" },
  { name: "Gautam Chari", role: "Director", linkedin: "#" },
];

const ways = [
  {
    eyebrow: "For founders",
    title: "Submit a venture",
    body: "Climate ventures at pre-seed or seed that are built in India can submit for evaluation against the fund's thesis.",
    cta: "Start a submission",
    href: "/rise_capital/submit_venture",
  },
  {
    eyebrow: "For funds",
    title: "Partner with RISE",
    body: "Funds can work with RISE on sourcing, sector landscaping and a screened pipeline of climate ventures at the earliest stage.",
    cta: "Propose a partnership",
    href: "/rise_capital/partner_with_rise",
  },
  {
    eyebrow: "For Ashokans",
    title: "Apply as an analyst",
    body: "Analyst recruitment takes place each Monsoon semester and is open to Ashokans across all years. The selection process is highly competitive. RISE seeks candidates with a demonstrated interest in financial markets and investing, strong analytical capability, intellectual curiosity and sound investment judgement.",
    cta: "Apply as an analyst",
    href: "/join_us",
  },
];

const faqs = [
  {
    id: "what",
    marker: "01",
    title: "What is RISE Capital?",
    body: (
      <p>
        RISE Capital is Asia&apos;s first undergraduate impact investment fund.
        It is housed within Ashoka University under the International Network
        of Students in Impact Finance (INSIF), and evaluates and recommends
        investments in early-stage climate ventures across the pre-seed and
        seed stages.
      </p>
    ),
  },
  {
    id: "who",
    marker: "02",
    title: "Which ventures can submit?",
    body: (
      <p>
        Climate ventures at pre-seed or seed stage that are built in India.
        Ventures are evaluated against the fund&apos;s thesis.
      </p>
    ),
  },
  {
    id: "after",
    marker: "03",
    title: "What happens after I submit?",
    body: (
      <p>
        The analyst team screens the venture against the fund&apos;s thesis. If
        it is advanced, a deal team arranges a call and requests further
        materials. Diligence and the Investment Committee follow, and the
        outcome is communicated in writing.
      </p>
    ),
  },
  {
    id: "invest",
    marker: "04",
    title: "Does RISE take outside investment?",
    body: (
      <p>
        No. RISE Capital does not offer securities or solicit investment from
        the public. It works alongside leading Indian venture capital and
        impact funds as it advances toward formal registration as an AIF.
      </p>
    ),
  },
  {
    id: "analyst",
    marker: "05",
    title: "How do I join as an analyst?",
    body: (
      <p>
        Analyst recruitment takes place each Monsoon semester and is open to
        Ashokans across all years. The selection process is highly
        competitive.
      </p>
    ),
  },
];

function ValueColumns({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
      {items.map((i) => (
        <div
          key={i.title}
          className="p-10 bg-surface-container-low rounded-xl border border-outline-variant hover:border-forest-brand/30 hover:shadow-xl group transition-all duration-500"
        >
          <span
            className="material-symbols-outlined text-3xl text-forest-brand mb-6 block transition-transform group-hover:translate-x-1 group-hover:-translate-y-1"
            aria-hidden="true"
          >
            north_east
          </span>
          <h3 className="text-headline-sm font-semibold text-on-surface mb-4">
            {i.title}
          </h3>
          <p className="text-on-surface-variant font-body-md leading-relaxed">
            {i.body}
          </p>
        </div>
      ))}
    </div>
  );
}

export default function Page() {
  return (
    <PageShell
      name="rise_capital"
      className="bg-white text-on-surface font-body-md antialiased overflow-x-hidden selection:bg-primary selection:text-white"
    >
      <main className="pt-20">
        {/* RISE sub-navigation */}
        <div className="sticky top-16 z-40 bg-navy-brand text-white">
          <div className="px-container-padding max-w-container-max mx-auto h-14 flex items-center justify-between gap-6">
            <span className="font-bold shrink-0">RISE Capital</span>
            <nav
              aria-label="RISE Capital sections"
              className="flex items-center gap-6 overflow-x-auto font-label-lg text-sm"
            >
              {subNav.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="whitespace-nowrap text-white/80 hover:text-white transition-colors"
                >
                  {l.label}
                </a>
              ))}
              <Link
                href="/rise_capital/submit_venture"
                className="whitespace-nowrap bg-white text-navy-brand px-4 py-2 rounded-lg font-bold hover:bg-surface-container transition-colors"
              >
                Submit a venture
              </Link>
            </nav>
          </div>
        </div>

        {/* Hero */}
        <section className="relative py-section-gap px-container-padding max-w-container-max mx-auto overflow-hidden bg-white">
          <div className="absolute -right-20 top-20 pointer-events-none opacity-[0.03] select-none">
            <span className="font-watermark text-watermark uppercase leading-none block">
              CAPITAL
            </span>
            <span className="font-watermark text-watermark uppercase leading-none block -mt-4">
              IMPACT
            </span>
          </div>
          <div className="relative z-10 grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <div className="md:col-span-9">
              <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
                The Investment Arm
              </span>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] tracking-tight text-navy-brand mb-10">
                <span className="text-forest-brand">Asia&apos;s first</span>{" "}
                undergraduate impact investment fund.
              </h1>
              <div className="space-y-5 max-w-2xl">
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  RISE Capital evaluates and recommends investments in
                  early-stage climate ventures across the pre-seed and seed
                  stages.
                </p>
                <p className="font-body-lg text-body-lg text-on-surface-variant">
                  The fund is housed within Ashoka University under the
                  International Network of Students in Impact Finance (INSIF).
                  Drawing on high-conviction deal flow and a disciplined
                  investment process, RISE Capital operates alongside leading
                  Indian venture capital funds and impact funds as it advances
                  toward formal registration as an AIF.
                </p>
              </div>
              <div className="mt-12 flex flex-wrap gap-4">
                <Link
                  href="/rise_capital/submit_venture"
                  className="bg-navy-brand text-white px-8 py-4 rounded-lg font-label-lg uppercase transition-all hover:bg-forest-brand shadow-sm inline-flex items-center gap-2"
                >
                  Submit a venture
                  <span className="material-symbols-outlined text-base">
                    north_east
                  </span>
                </Link>
                <Link
                  href="/rise_capital/partner_with_rise"
                  className="border border-navy-brand text-navy-brand px-8 py-4 rounded-lg font-label-lg uppercase transition-all hover:bg-surface-container-low"
                >
                  Partner with RISE
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* 01 Thesis */}
        <section
          id="thesis"
          className="scroll-mt-32 bg-white border-t border-outline-variant"
        >
          <div className="px-container-padding max-w-container-max mx-auto pt-section-gap pb-20">
            <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
              01 &nbsp; Thesis
            </span>
            <h2 className="text-4xl md:text-6xl font-bold leading-[1.1] tracking-tight text-navy-brand max-w-4xl">
              The climate transition is redrawing the global asset landscape. It
              will be decided at the earliest stage of capital, and engineered
              in India.
            </h2>
            <div className="w-full h-px bg-navy-brand mt-12 mb-10"></div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-gutter gap-x-16 text-on-surface-variant font-body-md leading-relaxed">
              <p>
                Climate capital has concentrated in downstream, mature
                infrastructure, where volatility is easiest to model. The
                ventures that will define the transition sit upstream, at
                pre-seed and seed, where risk is real but rarely underwritten
                with rigour. That mispricing will not correct itself, and every
                year it persists raises the premium of entry.
              </p>
              <p>
                RISE Capital works where this gap is widest. It brings
                rigorous, evidence-led analysis to climate ventures at pre-seed
                and seed, the stage where capital builds enterprise value
                rather than participating in the secondary pricing of legacy
                assets.
              </p>
            </div>
          </div>

          <div className="bg-navy-brand text-white py-20">
            <div className="px-container-padding max-w-container-max mx-auto">
              <span className="font-label-lg text-tertiary-fixed-dim uppercase mb-10 block tracking-[0.3em] text-[11px]">
                Three positions
              </span>
              <Accordion
                items={positions}
                defaultOpen="earliest"
                dark
                layout="split"
              />
            </div>
          </div>

          <div className="px-container-padding max-w-container-max mx-auto py-section-gap grid grid-cols-1 md:grid-cols-12 gap-gutter">
            <h2 className="md:col-span-4 text-4xl md:text-5xl font-bold text-navy-brand leading-tight">
              The Edge.
            </h2>
            <div className="md:col-span-8">
              <p className="text-headline-sm font-semibold text-navy-brand mb-8">
                Decarbonisation requires a multi-dimensional analytical engine
                capable of evaluating technology, economics and policy
                simultaneously.
              </p>
              <div className="space-y-5 text-on-surface-variant font-body-md leading-relaxed">
                <p>
                  True climate arbitrage cannot be captured through an isolated
                  financial lens. RISE Capital operates this engine through a
                  cross-disciplinary bench of Ashokans specialising in computer
                  science, environmental economics and public policy, ensuring
                  every early-stage opportunity is tested against the full
                  matrix of transition variables.
                </p>
                <p>
                  The fund evaluates emerging technologies and business models
                  on their technical merits and long-term viability, positioned
                  to capture the non-linear value creation of a multi-decade
                  global transition.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 02 Model */}
        <section
          id="model"
          className="scroll-mt-32 bg-surface-container-low border-y border-outline-variant py-section-gap"
        >
          <div className="px-container-padding max-w-container-max mx-auto">
            <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
              02 &nbsp; Model
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-navy-brand mb-8 max-w-3xl">
              Investment discipline before investment capital.
            </h2>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">
              RISE works alongside leading Indian venture capital and impact
              funds across deal sourcing and evaluation in early-stage climate.
              This develops investment judgement to institutional standards
              ahead of RISE deploying capital of its own.
            </p>
          </div>
        </section>

        {/* 03 Value to partners */}
        <section
          id="value-to-partners"
          className="scroll-mt-32 bg-white py-section-gap"
        >
          <div className="px-container-padding max-w-container-max mx-auto">
            <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-6">
              <div>
                <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
                  03 &nbsp; Value to partners
                </span>
                <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-navy-brand max-w-2xl">
                  Where RISE adds value to the institutions it works with.
                </h2>
              </div>
            </div>
            <div className="w-full h-px bg-navy-brand mb-12"></div>
            <Tabs
              tabs={[
                {
                  id: "global",
                  label: "Global institutions",
                  content: <ValueColumns items={globalInstitutions} />,
                },
                {
                  id: "indian",
                  label: "Indian impact and venture funds",
                  content: <ValueColumns items={indianFunds} />,
                },
              ]}
            />

            <div className="mt-24">
              <span className="font-label-lg text-on-surface-variant uppercase mb-6 block tracking-[0.3em] text-[11px]">
                How RISE works
              </span>
              <ol className="grid grid-cols-1 md:grid-cols-5 bg-navy-brand text-white rounded-xl overflow-hidden">
                {howItWorks.map((s) => (
                  <li
                    key={s.n}
                    className="p-8 border-b md:border-b-0 md:border-r border-white/15 last:border-0"
                  >
                    <span className="font-label-lg text-tertiary-fixed-dim text-[11px] block mb-4">
                      {s.n}
                    </span>
                    <h3 className="text-title-lg font-semibold mb-3">
                      {s.title}
                    </h3>
                    <p className="text-sm text-white/70 leading-relaxed">
                      {s.body}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        {/* Data-led sourcing */}
        <section className="bg-navy-brand text-white py-section-gap">
          <div className="px-container-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter gap-y-12">
            <div className="md:col-span-5">
              <span className="font-label-lg text-tertiary-fixed-dim uppercase mb-6 block tracking-[0.3em] text-[11px]">
                Sourcing · Impact · Verification
              </span>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight">
                Data-led sourcing, built with practitioners.
              </h2>
            </div>
            <div className="md:col-span-7">
              <Accordion
                items={sourcing}
                layout="stack"
                openOnHover
                defaultOpen="sourcing"
                dark
              />
              <p className="italic text-white/70 mt-10 text-sm">
                Investment judgement remains with analysts and the Investment
                Committee.
              </p>
            </div>
          </div>
        </section>

        {/* 04 Leadership */}
        <section
          id="leadership"
          className="scroll-mt-32 bg-white py-section-gap"
        >
          <div className="px-container-padding max-w-container-max mx-auto">
            <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
              04 &nbsp; Leadership
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight text-navy-brand mb-12">
              Founded and led by Ashokans.
            </h2>
            <ul className="border-t border-navy-brand">
              {leadership.map((p) => (
                <li
                  key={p.name}
                  className="flex items-center justify-between gap-6 py-8 border-b border-outline-variant"
                >
                  <span className="text-headline-md font-semibold text-navy-brand">
                    {p.name}
                  </span>
                  <div className="flex items-center gap-4 shrink-0">
                    <span className="font-label-lg text-[11px] uppercase tracking-[0.2em] text-on-surface-variant">
                      {p.role}
                    </span>
                    <a
                      href={p.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={`${p.name} on LinkedIn`}
                      className="w-12 h-12 bg-navy-brand text-tertiary-fixed-dim flex items-center justify-center rounded-lg hover:bg-forest-brand transition-colors"
                    >
                      <span className="material-symbols-outlined text-xl">
                        north_east
                      </span>
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </section>

        {/* 05 Work with RISE */}
        <section className="bg-navy-brand text-white py-section-gap">
          <div className="px-container-padding max-w-container-max mx-auto">
            <span className="font-label-lg text-tertiary-fixed-dim uppercase mb-6 block tracking-[0.3em] text-[11px]">
              05 &nbsp; Work with RISE
            </span>
            <h2 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-16 max-w-2xl">
              Three ways to work with the fund.
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {ways.map((w) => (
                <div
                  key={w.title}
                  className="border border-white/20 rounded-xl p-8 flex flex-col hover:border-white/50 transition-colors"
                >
                  <span className="font-label-lg text-tertiary-fixed-dim text-[11px] uppercase tracking-widest mb-6">
                    {w.eyebrow}
                  </span>
                  <h3 className="text-headline-sm font-semibold mb-4">
                    {w.title}
                  </h3>
                  <p className="text-white/80 font-body-md leading-relaxed mb-10">
                    {w.body}
                  </p>
                  <Link
                    href={w.href}
                    className="mt-auto font-label-lg text-tertiary-fixed-dim inline-flex items-center gap-2 hover:underline"
                  >
                    {w.cta}
                    <span className="material-symbols-outlined text-base">
                      north_east
                    </span>
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 06 FAQ */}
        <section id="faq" className="scroll-mt-32 bg-white py-section-gap">
          <div className="px-container-padding max-w-container-max mx-auto grid grid-cols-1 md:grid-cols-12 gap-gutter gap-y-10">
            <div className="md:col-span-4">
              <span className="font-label-lg text-forest-brand uppercase mb-6 block tracking-[0.3em]">
                06 &nbsp; Frequently asked questions
              </span>
            </div>
            <div className="md:col-span-8">
              <Accordion items={faqs} layout="stack" />
            </div>
          </div>
        </section>

        <p className="bg-surface-container-low border-t border-outline-variant px-container-padding py-8 text-center text-xs text-on-surface-variant">
          RISE Capital, Asia&apos;s first undergraduate impact investment fund,
          is housed at Ashoka University under INSIF. RISE Capital does not
          offer securities or solicit investment from the public.
        </p>
      </main>
    </PageShell>
  );
}
