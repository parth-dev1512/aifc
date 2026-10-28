import type { Metadata } from "next";
import Link from "next/link";
import PageShell from "@/components/PageShell";

export const metadata: Metadata = { title: "Himalayan Eco Tourism | AIFC Advisory" };

const facts = [
  { label: "Client", value: "Community-based eco-tourism enterprise" },
  { label: "Position", value: "Sell side" },
  { label: "Type of capital", value: "Impact investing, equity" },
  { label: "Target raise", value: "₹4 crore" },
  { label: "SDG targets", value: "8.9 · 12.b · 15.1" },
];

const workstreams = [
  { title: "Theory of Change", body: "Setting out how hosted stays and local partnerships lead to income, employment and conservation outcomes." },
  { title: "Impact thesis", body: "Structuring the impact case on the five dimensions of impact, the format impact investors use to assess it." },
  { title: "Indicator set", body: "Selecting IRIS+ metrics and linking each to a specific SDG target, with a plan for how the data is collected." },
  { title: "Financial model", body: "A five-year, driver-based model with downside, base and upside scenarios." },
  { title: "Investor mapping", body: "Screening impact investors on mandate, stage and ticket size to focus outreach." },
];

const toc = [
  { stage: "Inputs", items: ["Equity capital of ₹4 crore", "Partnerships with host households", "Local guides and suppliers"] },
  { stage: "Activities", items: ["Community-hosted stays and experiences", "Training for hosts and guides", "Conservation and waste practices"] },
  { stage: "Outputs", items: ["Guest nights hosted", "Hosts and guides trained", "Payments made to host households"] },
  { stage: "Outcomes", items: ["Higher and more stable household income", "Local employment outside agriculture", "Reduced pressure on the landscape"] },
  { stage: "Impact", items: ["Resilient mountain livelihoods", "Conserved Himalayan ecosystems"] },
];

const assumptions = [
  "Visitor demand holds across seasons",
  "A fixed share of guest spend reaches host households",
  "Growth in visitor numbers stays within the landscape's carrying capacity",
];

const dimensions = [
  { d: "What", q: "Which outcomes occur, and how important are they to the people who experience them?", a: "Higher and more reliable income for host households, local employment outside agriculture, and conservation of the landscape the enterprise operates in." },
  { d: "Who", q: "Who experiences the outcome, and how underserved are they?", a: "Host households, guides and local suppliers in the enterprise's Himalayan operating areas, where income is largely seasonal and alternatives are limited." },
  { d: "How much", q: "How many people are reached, how deep is the change, and how long does it last?", a: "Measured through the number of households and staff reached, the change in household income, and whether income is earned year-round or only in season." },
  { d: "Contribution", q: "Would this have happened anyway?", a: "Assessed against what host households would likely earn without the enterprise, so that only the additional income is attributed to it." },
  { d: "Risk", q: "What is the risk that impact differs from what is expected?", a: "Seasonality and climate events affecting visitor numbers, and the risk that growth outpaces the landscape's carrying capacity. Each risk is paired with a mitigation in the thesis." },
];

const indicators = [
  { theme: "Local employment", indicator: "Local people employed by the enterprise, full-time and seasonal", unit: "Count", reporting: "Quarterly", sdg: "8.9" },
  { theme: "Local employment", indicator: "Share of employees from host villages", unit: "%", reporting: "Annually", sdg: "8.9" },
  { theme: "Community income", indicator: "Payments to host households and local suppliers", unit: "₹ per year", reporting: "Quarterly", sdg: "8.9" },
  { theme: "Community income", indicator: "Share of guest spend retained in host villages", unit: "%", reporting: "Annually", sdg: "12.b" },
  { theme: "Land stewardship", indicator: "Area under conservation or sustainable management", unit: "Hectares", reporting: "Annually", sdg: "15.1" },
  { theme: "Visitor footprint", indicator: "Waste diverted from landfill per guest night", unit: "kg", reporting: "Quarterly", sdg: "12.b" },
];

const sdgs = [
  { t: "8.9", body: "Promote sustainable tourism that creates jobs and promotes local culture and products." },
  { t: "12.b", body: "Monitor the sustainable development impacts of tourism." },
  { t: "15.1", body: "Conserve and sustainably use terrestrial and mountain ecosystems." },
];

const modelBlocks = [
  { title: "Drivers", items: ["Occupancy by season", "Average daily rate", "Experience and activity revenue per guest", "Number of operating properties"] },
  { title: "Cost base", items: ["Payments to host households and local suppliers", "Staff and operations", "Marketing and distribution", "Capital expenditure on new properties"] },
  { title: "Outputs", items: ["Revenue and EBITDA, years 1 to 5", "Cash flow and runway", "Use of the ₹4 crore raise", "Returns to investors under each scenario"], dark: true },
];

const assumptionsTable = [
  "Average occupancy, peak and off-peak",
  "Average daily rate",
  "Experience revenue per guest",
  "New properties opened, years 1 to 5",
];

type Fit = "High" | "Medium";
const investors: { category: string; mandate: Fit; stage: Fit; ticket: Fit; priority: string }[] = [
  { category: "Impact venture funds focused on livelihoods and sustainable consumption", mandate: "High", stage: "High", ticket: "Medium", priority: "First wave" },
  { category: "Angel networks with an impact focus", mandate: "Medium", stage: "High", ticket: "High", priority: "First wave" },
  { category: "Climate and nature-focused funds", mandate: "Medium", stage: "Medium", ticket: "Medium", priority: "Second wave" },
  { category: "Family offices with impact allocations", mandate: "Medium", stage: "Medium", ticket: "High", priority: "Second wave" },
  { category: "Concessional and blended lenders, as a debt alternative", mandate: "High", stage: "Medium", ticket: "Medium", priority: "Contingent" },
];

const fitStyle: Record<Fit, string> = {
  High: "bg-[#e3efe0] text-forest-brand",
  Medium: "bg-[#f7e7c6] text-gold-deep",
};

// TODO: fill in the engagement lead and analyst names.
const team = [
  { label: "Engagement lead", value: "[Name]" },
  { label: "Analysts", value: "[Names]" },
  { label: "Reviewed by", value: "Advisory directors" },
];

const th = "font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant font-normal text-left py-3 pr-4";

function Exhibit({
  id,
  n,
  title,
  intro,
  children,
}: {
  id: string;
  n: number;
  title: string;
  intro: string;
  children: React.ReactNode;
}) {
  return (
    <section id={id} className="scroll-mt-24 px-container-padding max-w-container-max mx-auto pb-20">
      <h2 className="flex items-baseline gap-4 mb-3">
        <span className="adv-eyebrow">Exhibit {n}</span>
        <span className="adv-heading text-2xl md:text-3xl">{title}</span>
      </h2>
      <p className="text-sm text-on-surface-variant leading-relaxed max-w-2xl mb-8">
        {intro}
      </p>
      {children}
    </section>
  );
}

export default function Page() {
  return (
    <PageShell
      name="advisory_projects"
      className="bg-cream text-ink font-body-md antialiased overflow-x-hidden selection:bg-navy-brand selection:text-white"
    >
      <main className="pt-20">
        {/* Hero */}
        <section className="bg-navy-brand text-white">
          <div className="px-container-padding max-w-container-max mx-auto py-14 md:py-20">
            <nav aria-label="Breadcrumb" className="text-xs text-white/70 mb-8">
              <Link href="/advisory_projects" className="underline">Advisory</Link>
              {" / "}
              <Link href="/advisory_projects#engagements" className="underline">Engagements</Link>
              {" / "}
              <span>Himalayan Eco Tourism</span>
            </nav>
            <div className="flex flex-wrap gap-2 mb-6 text-[11px]">
              <span className="bg-white/15 px-2 py-1">Ongoing</span>
              <span className="border border-white/40 px-2 py-1">Investment Readiness</span>
              <span className="border border-white/40 px-2 py-1">Community tourism</span>
            </div>
            <h1 className="font-display text-5xl md:text-7xl leading-[1.05] tracking-tight mb-6">
              Himalayan Eco Tourism
            </h1>
            <p className="font-display text-xl md:text-2xl text-white/90 leading-snug max-w-3xl mb-12">
              Preparing a community-based eco-tourism enterprise in the
              Himalayas for a ₹4 crore equity raise from impact investors.
            </p>
            <dl className="grid grid-cols-2 md:grid-cols-5 border border-white/20">
              {facts.map((f) => (
                <div key={f.label} className="p-4 border-white/20 border-b md:border-b-0 md:border-r last:border-r-0">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-white/50 mb-1">
                    {f.label}
                  </dt>
                  <dd className="text-sm">{f.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* Challenge and approach */}
        <section className="px-container-padding max-w-container-max mx-auto py-20 grid grid-cols-1 md:grid-cols-12 gap-6 gap-y-16">
          <span className="adv-eyebrow md:col-span-3 pt-3">The challenge</span>
          <div className="md:col-span-9">
            <h2 className="adv-heading text-3xl md:text-4xl mb-6">
              Showing investors both the return and the impact
            </h2>
            <div className="space-y-4 text-on-surface-variant leading-relaxed">
              <p>
                Himalayan Eco Tourism operates a community-based tourism model
                in which local households and suppliers share in the income
                generated by visitors, and the enterprise has a direct interest
                in protecting the landscape it depends on. To grow, it is
                seeking ₹4 crore in equity from impact investors.
              </p>
              <p>
                Impact investors assess an opportunity like this on two fronts
                at once. They need a credible path to financial returns in a
                seasonal, asset-light business, and they need evidence that
                growth will translate into measurable benefits for host
                communities and the environment. The enterprise asked AIFC
                Advisory to prepare the materials that address both.
              </p>
            </div>
          </div>
          <span className="adv-eyebrow md:col-span-3 pt-3">Our approach</span>
          <div className="md:col-span-9">
            <h2 className="adv-heading text-3xl md:text-4xl mb-6">
              Five workstreams, built in sequence
            </h2>
            <p className="text-on-surface-variant leading-relaxed">
              Each workstream builds on the one before it. The impact thesis
              depends on the Theory of Change, the indicators depend on the
              thesis, and investor outreach is planned only once the model and
              the evidence are in place.
            </p>
          </div>
        </section>
        <ol className="px-container-padding max-w-container-max mx-auto pb-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {workstreams.map((w, i) => (
            <li key={w.title} className="bg-white border border-outline-variant p-5 flex flex-col">
              <span className="w-8 h-8 rounded-full bg-navy-brand text-white text-sm flex items-center justify-center mb-4">
                {i + 1}
              </span>
              <h3 className="font-display text-lg text-ink mb-2">{w.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed mb-6">{w.body}</p>
              <a href={`#exhibit-${i + 1}`} className="mt-auto text-sm font-semibold text-navy-brand underline underline-offset-4">
                See exhibit {i + 1} ↓
              </a>
            </li>
          ))}
        </ol>

        <Exhibit
          id="exhibit-1"
          n={1}
          title="Theory of Change"
          intro="How the enterprise's activities are expected to lead to outcomes for host communities and the landscape, with the assumptions that must hold at each step."
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-3">
            {toc.map((c, i) => (
              <div key={c.stage}>
                <div
                  className={`flex items-center justify-between px-3 py-2 font-mono text-[10px] uppercase tracking-[0.15em] text-white mb-3 ${
                    i === toc.length - 1 ? "bg-gold-deep" : "bg-navy-brand"
                  }`}
                >
                  {c.stage}
                  {i < toc.length - 1 && <span aria-hidden="true">→</span>}
                </div>
                <ul className="space-y-3">
                  {c.items.map((it) => (
                    <li key={it} className="bg-white border border-outline-variant p-3 text-sm">
                      {it}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-6 border border-dashed border-gold-deep/70 bg-[#fbf6ea] px-4 py-3 text-sm flex flex-wrap gap-x-8 gap-y-1">
            <span className="adv-eyebrow">Key assumptions</span>
            {assumptions.map((a) => (
              <span key={a}>{a}</span>
            ))}
          </div>
        </Exhibit>

        <Exhibit
          id="exhibit-2"
          n={2}
          title="Impact thesis on the five dimensions of impact"
          intro="The five dimensions developed by the Impact Management Project give investors a common structure for judging an impact claim. Each dimension below is answered with evidence the enterprise can collect and report."
        >
          <div className="bg-white border border-outline-variant px-5 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className={th}>Dimension</th>
                  <th className={th}>The question investors ask</th>
                  <th className={th}>How the thesis answers it</th>
                </tr>
              </thead>
              <tbody>
                {dimensions.map((d) => (
                  <tr key={d.d} className="border-b border-outline-variant last:border-0 align-top text-sm">
                    <td className="py-4 pr-4 font-display text-lg w-1/6">{d.d}</td>
                    <td className="py-4 pr-4 text-on-surface-variant w-1/3">{d.q}</td>
                    <td className="py-4">{d.a}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Exhibit>

        <Exhibit
          id="exhibit-3"
          n={3}
          title="Impact indicator set"
          intro="Indicators are drawn from the GIIN's IRIS+ catalogue where a standard metric exists, so that results can be compared with other investments in an impact investor's portfolio, and each is linked to a specific SDG target. The set shown is representative; the final selection is agreed with the client."
        >
          <div className="bg-white border border-outline-variant px-5 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className={th}>Impact theme</th>
                  <th className={th}>Indicator</th>
                  <th className={th}>Unit</th>
                  <th className={th}>Reporting</th>
                  <th className={th}>SDG target</th>
                </tr>
              </thead>
              <tbody>
                {indicators.map((r) => (
                  <tr key={r.indicator} className="border-b border-outline-variant last:border-0 text-sm">
                    <td className="py-3 pr-4 font-semibold">{r.theme}</td>
                    <td className="py-3 pr-4">{r.indicator}</td>
                    <td className="py-3 pr-4">{r.unit}</td>
                    <td className="py-3 pr-4">{r.reporting}</td>
                    <td className="py-3">
                      <span className="font-mono text-xs bg-secondary-fixed/60 px-2 py-0.5">{r.sdg}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mt-3">
            {sdgs.map((s) => (
              <p key={s.t} className="bg-white border border-outline-variant p-4 text-sm flex gap-3">
                <span className="font-mono text-gold-deep">{s.t}</span>
                {s.body}
              </p>
            ))}
          </div>
        </Exhibit>

        <Exhibit
          id="exhibit-4"
          n={4}
          title="Five-year financial model"
          intro="The model is built around the operating drivers of a seasonal tourism business, so that an investor can change any assumption and see its effect on revenue, margins and cash. Client figures are withheld."
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-3">
            {modelBlocks.map((b) => (
              <div
                key={b.title}
                className={`p-5 border ${b.dark ? "bg-navy-brand text-white border-navy-brand" : "bg-white border-outline-variant"}`}
              >
                <span className={`font-mono text-[10px] uppercase tracking-[0.15em] block mb-3 ${b.dark ? "text-gold-brand" : "text-gold-deep"}`}>
                  {b.title}
                </span>
                <ul className="space-y-1.5 text-sm">
                  {b.items.map((it) => (
                    <li key={it}>{it}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="bg-white border border-outline-variant px-5 overflow-x-auto">
            <table className="w-full min-w-[560px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className={th}>Assumption</th>
                  <th className={th}>Downside</th>
                  <th className={th}>Base</th>
                  <th className={th}>Upside</th>
                </tr>
              </thead>
              <tbody>
                {assumptionsTable.map((a) => (
                  <tr key={a} className="border-b border-outline-variant last:border-0 text-sm">
                    <td className="py-3 pr-4 font-semibold">{a}</td>
                    {[0, 1, 2].map((k) => (
                      <td key={k} className="py-3 pr-4 font-mono text-xs text-on-surface-variant">
                        [ withheld ]
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Exhibit>

        <Exhibit
          id="exhibit-5"
          n={5}
          title="Investor mapping"
          intro="Investors are screened on whether their mandate covers community tourism or rural livelihoods, whether they invest at this stage, and whether a ₹4 crore round fits their ticket size. Individual investor names are withheld."
        >
          <div className="bg-white border border-outline-variant px-5 overflow-x-auto">
            <table className="w-full min-w-[640px]">
              <thead>
                <tr className="border-b border-outline-variant">
                  <th className={th}>Investor category</th>
                  <th className={th}>Mandate fit</th>
                  <th className={th}>Stage fit</th>
                  <th className={th}>Ticket fit</th>
                  <th className={th}>Outreach priority</th>
                </tr>
              </thead>
              <tbody>
                {investors.map((r) => (
                  <tr key={r.category} className="border-b border-outline-variant last:border-0 text-sm">
                    <td className="py-3 pr-4 font-semibold">{r.category}</td>
                    {[r.mandate, r.stage, r.ticket].map((f, k) => (
                      <td key={k} className="py-3 pr-4">
                        <span className={`px-2 py-0.5 text-xs ${fitStyle[f]}`}>{f}</span>
                      </td>
                    ))}
                    <td className="py-3 font-semibold text-navy-brand">{r.priority}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-on-surface-variant mt-3">
            Fit ratings are illustrative of the screening method.
          </p>
        </Exhibit>

        {/* Status */}
        <section className="px-container-padding max-w-container-max mx-auto pb-20 grid grid-cols-1 md:grid-cols-12 gap-6">
          <span className="adv-eyebrow md:col-span-3 pt-1">Where the engagement stands</span>
          <div className="md:col-span-9">
            <p className="leading-relaxed mb-6">
              The engagement is ongoing. The Theory of Change and impact thesis
              form the basis of the investor materials, and the financial model
              and investor map are being finalised with the client ahead of
              outreach.
            </p>
            <dl className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {team.map((t) => (
                <div key={t.label} className="bg-white border border-outline-variant p-4">
                  <dt className="font-mono text-[10px] uppercase tracking-[0.15em] text-on-surface-variant mb-1">
                    {t.label}
                  </dt>
                  <dd className="text-sm">{t.value}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        {/* CTA */}
        <section className="px-container-padding max-w-container-max mx-auto pb-24">
          <div className="bg-navy-brand text-white p-8 md:p-12 grid grid-cols-1 md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-7">
              <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
                Preparing for an investment raise of your own?
              </h2>
              <p className="text-white/75 text-sm leading-relaxed">
                We would be glad to hear about your organisation and the
                questions you are working through.
              </p>
            </div>
            <div className="md:col-span-5 flex flex-wrap gap-3 md:justify-end">
              <Link href="/advisory_projects/enquiry" className="adv-btn-gold">
                Submit a project enquiry <span aria-hidden="true">→</span>
              </Link>
              <Link href="/advisory_projects#engagements" className="adv-btn-outline border-white/40">
                All engagements
              </Link>
            </div>
          </div>
        </section>
      </main>
    </PageShell>
  );
}
