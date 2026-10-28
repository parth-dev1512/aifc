// Content for the AIFC Advisory pages. Edit text here rather than in the
// page components: the main page, case study and methods library all read it.

export type Side = "sell" | "buy";
export type Capital = "impact" | "innovative";
export type Status = "Ongoing" | "Completed" | "Newly onboarded";

export type Engagement = {
  code: string;
  name: string;
  sector: string;
  status: Status;
  summary: string;
  practice: string;
  /** Position on the portfolio map; omitted for engagements still being scoped. */
  map?: {
    side: Side;
    capital: Capital;
    /** Position inside the quadrant, as percentages. */
    x: number;
    y: number;
    /** true: produced a reusable framework or model; false: tailored to a single client. */
    reusable: boolean;
  };
  capitalLabel?: string;
  detail?: string;
  frameworks?: string[];
  /** Route of the full case study, when one is published. */
  caseStudy?: string;
};

export const engagements: Engagement[] = [
  {
    code: "HEC",
    name: "Himalayan Eco Tourism",
    sector: "Community tourism",
    status: "Ongoing",
    summary:
      "Investment readiness for a ₹4 crore equity raise, covering the impact thesis, IRIS+ indicators, a five-year financial model and investor mapping.",
    practice: "Investment Readiness",
    map: { side: "sell", capital: "impact", x: 45, y: 40, reusable: false },
    capitalLabel: "Impact investing (equity)",
    detail:
      "Himalayan Eco Tourism is preparing to raise ₹4 crore in equity from impact investors. We are building the impact thesis, financial model and investor strategy that the raise requires.",
    frameworks: [
      "Theory of Change for community-based tourism",
      "Impact thesis structured on the five dimensions of impact",
      "IRIS+ indicators for local employment, community income and land stewardship",
      "Alignment to SDG targets 8.9, 12.b and 15.1",
      "Five-year financial model with three scenarios",
      "Investor mapping by mandate, stage and ticket size",
    ],
    caseStudy: "/advisory_projects/himalayan_eco_tourism",
  },
  {
    code: "KKH",
    name: "Kkhavo",
    sector: "Agri-food",
    status: "Newly onboarded",
    summary:
      "Assessing the farmer-income impact of a direct procurement model for a GI-tagged heritage rice, and preparing the business for investment.",
    practice: "Investment Readiness",
    map: { side: "sell", capital: "impact", x: 30, y: 72, reusable: true },
    capitalLabel: "Impact investing",
    detail:
      "Kkhavo sources a GI-tagged heritage rice directly from farmers. We are assessing how much of the value reaches the producer and preparing the business for investment.",
    frameworks: [
      "Value chain analysis, farmgate to consumer",
      "Five dimensions of impact",
      "IRIS+ indicators",
      "Scenario financial model",
      "Investor mapping",
    ],
  },
  {
    code: "DLX",
    name: "Deluxe Recycling India",
    sector: "Circular economy",
    status: "Completed",
    summary:
      "Designing a blended capital stack for recovery infrastructure, including an assessment of revenue from Extended Producer Responsibility credits.",
    practice: "Capital Structuring",
    map: { side: "sell", capital: "innovative", x: 40, y: 18, reusable: true },
    capitalLabel: "Innovative finance (blended)",
    detail:
      "Deluxe Recycling India needed to finance recovery infrastructure that no single instrument could fund. We designed a blended capital stack and assessed the revenue created by Extended Producer Responsibility credits.",
    frameworks: [
      "Capital stack analysis",
      "Regulatory revenue assessment (EPR)",
      "SDG target alignment",
      "Investor mapping",
    ],
  },
  {
    code: "KUB",
    name: "Kubanda Cryotherapy",
    sector: "Cancer care",
    status: "Ongoing",
    summary:
      "An implementation and scale-up strategy for a low-cost cryotherapy training programme for early-stage breast cancer in India.",
    practice: "Implementation and Scale",
    map: { side: "sell", capital: "innovative", x: 50, y: 48, reusable: false },
    capitalLabel: "Innovative finance",
    detail:
      "Kubanda Cryotherapy trains clinicians in a low-cost treatment for early-stage breast cancer. We are building the plan that takes the programme from pilot to new sites.",
    frameworks: [
      "RE-AIM evaluation framework",
      "Kirkpatrick four levels",
      "Stakeholder influence and interest map",
      "Site selection scorecard",
      "Roadmap, RACI and risk register",
    ],
  },
  {
    code: "SSF",
    name: "Spread Smile Foundation",
    sector: "Social programmes",
    status: "Completed",
    summary:
      "An outcome measurement framework across four programme areas, built to support CSR and outcomes-linked funding applications.",
    practice: "Impact Measurement",
    map: { side: "sell", capital: "innovative", x: 45, y: 72, reusable: true },
    capitalLabel: "Innovative finance (outcomes-based)",
    detail:
      "Spread Smile Foundation needed to show funders what its programmes achieve. We built an outcome measurement framework across four programme areas to support CSR and outcomes-linked funding applications.",
    frameworks: [
      "Theory of Change",
      "Social Return on Investment",
      "SDG target alignment",
      "CSR readiness review",
    ],
  },
  {
    code: "RCB",
    name: "Rotary Club of Bombay",
    sector: "Civic institution",
    status: "Ongoing",
    summary:
      "A framework to evaluate, prioritise and allocate resources across social-impact initiatives, with donor, membership and publication strategy.",
    practice: "Portfolio Strategy",
    map: { side: "buy", capital: "innovative", x: 50, y: 30, reusable: true },
    capitalLabel: "Innovative finance (grant allocation)",
    detail:
      "The Rotary Club of Bombay funds a wide range of social-impact initiatives. We are building a transparent framework to decide which of them to fund and grow.",
    frameworks: [
      "Multi-criteria allocation framework",
      "Cost per outcome comparison",
      "Stakeholder influence and interest map",
    ],
  },
  {
    code: "SPT",
    name: "Sparsha Trust",
    sector: "To be confirmed",
    status: "Newly onboarded",
    summary: "Engagement scope is being agreed with the Trust.",
    practice: "Practice area to be confirmed",
  },
  {
    code: "CAI",
    name: "Catalyst AI",
    sector: "Technology",
    status: "Newly onboarded",
    // TODO: replace with the one-line description agreed with the client.
    summary: "[One-line description of the engagement, to be confirmed with the client.]",
    practice: "Practice area to be confirmed",
  },
];

export const practiceAreas = [
  {
    n: "01",
    side: "Sell side",
    icon: "show_chart",
    title: "Investment Readiness",
    body: "Preparing enterprises to raise capital from impact investors. We develop an impact thesis structured on the five dimensions of impact, build a financial model that investors can test against their own assumptions, and identify the investors whose mandate, stage and ticket size fit the raise.",
    tags: ["Five dimensions of impact", "IRIS+", "Financial modelling", "Investor mapping"],
  },
  {
    n: "02",
    side: "Sell side",
    icon: "stacks",
    title: "Capital Structuring",
    body: "Designing funding structures for organisations that no single instrument can finance. We assess how grant, concessional debt and equity can be combined, and how revenue streams created by regulation, such as Extended Producer Responsibility credits, affect what each layer of capital can support.",
    tags: ["Capital stack analysis", "Blended finance", "Revenue modelling"],
  },
  {
    n: "03",
    side: "Buy side",
    icon: "donut_large",
    title: "Portfolio Strategy",
    body: "Helping organisations decide which of their own initiatives to fund and grow. We develop transparent criteria for prioritisation, compare initiatives on cost per outcome, and design the systems an organisation needs to track results over time.",
    tags: ["Multi-criteria decision analysis", "Cost-effectiveness analysis"],
  },
  {
    n: "04",
    side: "Sell side",
    icon: "target",
    title: "Impact Measurement",
    body: "Building the evidence that funders need before they commit capital. We design Theories of Change and results frameworks, select indicators from the GIIN's IRIS+ catalogue, align outcomes to specific SDG targets and, where appropriate, estimate the Social Return on Investment.",
    tags: ["Theory of Change", "IRIS+", "SDG targets", "SROI"],
  },
  {
    n: "05",
    side: "Sell side",
    icon: "bar_chart",
    title: "Implementation and Scale",
    body: "Turning a proven intervention into a plan that can be funded and replicated. We map the regulatory landscape and stakeholders, select sites, build roadmaps with clear ownership, and design evaluation frameworks that show whether a pilot is ready to expand.",
    tags: ["RACI roadmaps", "Risk registers", "RE-AIM", "Kirkpatrick model"],
  },
];

export const standards = [
  {
    title: "Theory of Change",
    source: "Programme design",
    body: "Sets out how an organisation's activities lead to outcomes and long-term impact, and makes the assumptions behind each step explicit.",
  },
  {
    title: "Five Dimensions of Impact",
    source: "Impact Management Project",
    body: "Assesses what outcome occurs, who experiences it, how much change there is, the organisation's contribution, and the risk that impact differs from what is expected.",
  },
  {
    title: "IRIS+",
    source: "Global Impact Investing Network",
    body: "The most widely used catalogue of impact metrics, so that results are reported in terms impact investors recognise and can compare.",
  },
  {
    title: "SDG Target Alignment",
    source: "United Nations",
    body: "Links outcomes to specific targets within the Sustainable Development Goals, such as target 8.9 on sustainable tourism, rather than to the goals in general.",
  },
  {
    title: "Social Return on Investment",
    source: "Social Value International",
    body: "Estimates the social value created for each rupee invested, after accounting for what would have happened anyway and for the contribution of others.",
  },
  {
    title: "Capital Stack Analysis",
    source: "Blended finance",
    body: "Determines how grant, concessional and commercial capital can be combined so that each layer carries the risk it is best suited to bear.",
  },
  {
    title: "RE-AIM",
    source: "Implementation science",
    body: "Evaluates a programme's Reach, Effectiveness, Adoption, Implementation and Maintenance to judge whether it is ready to scale.",
  },
  {
    title: "Investor Mapping",
    source: "Capital raising",
    body: "Matches an enterprise to investors by mandate, sector, stage and ticket size, so that outreach is focused on investors who can realistically commit.",
  },
];

export const process = [
  {
    title: "Project enquiry",
    body: "You complete a short form telling us about your organisation and the question you are working on.",
  },
  {
    title: "Scoping conversation",
    body: "We meet your team to understand the problem in detail and confirm that it is one we can help with.",
  },
  {
    title: "Scoping letter",
    body: "The questions, deliverables, team and timeline are agreed in writing before any work begins.",
  },
  {
    title: "Analysis and review",
    body: "Our analysts carry out the work, with regular check-ins with your team and internal review by our directors.",
  },
  {
    title: "Final presentation",
    body: "We present our findings and hand over a written report with the working models and frameworks.",
  },
];

export const faqs = [
  {
    id: "fee",
    title: "Is there a fee for working with AIFC Advisory?",
    body: "No. Every engagement is pro bono. We ask that you nominate a point of contact within your organisation, share the information the work requires in good time, and allow us to describe the engagement on our website once it is complete and you have approved the text.",
  },
  {
    id: "who",
    title: "Who will work on our project?",
    body: "A team of AIFC analysts, led by an engagement lead and supervised by the Advisory directors, who review all work before it is shared with you. Analysts are selected through a competitive process and trained in impact measurement and financial modelling before they join a client team.",
  },
  {
    id: "orgs",
    title: "What kinds of organisations do you work with?",
    body: "Social enterprises, foundations, non-profits and other mission-led organisations and firms. Investment funds interested in working with AIFC can learn more about RISE Capital, the club's undergraduate-led impact investment fund.",
  },
  {
    id: "length",
    title: "How long does an engagement take?",
    // TODO: confirm the typical engagement length with the Advisory directors.
    body: "It depends on the scope. The timeline for each engagement is agreed with you in the scoping letter before any work begins.",
  },
  {
    id: "data",
    title: "How will our information be handled?",
    body: "Your information is seen only by the engagement team and the Advisory directors. We will sign an NDA on request, and nothing about your organisation is published without your consent.",
  },
  {
    id: "after",
    title: "What happens after we submit an enquiry?",
    body: "The directors review your enquiry against our selection criteria. If it fits, we invite you to a scoping call with an engagement lead. The scope, team and timeline are then agreed in a written scoping letter.",
  },
];

export const methodGroups = [
  {
    numeral: "I",
    title: "Measurement and evidence",
    methods: [
      { name: "Theory of Change", source: "Causal model of change", question: "Which links between activity and outcome are evidenced, and which are assumptions?", when: "First, in every evidence mandate, before a single indicator is chosen.", used: ["HEC", "SSF"] },
      { name: "Five dimensions of impact", source: "Impact Management Project, now Impact Frontiers", question: "What changes, for whom, by how much, would it have happened anyway, and what could go wrong?", when: "To build an impact thesis an investor can interrogate.", used: ["HEC", "KKH"] },
      { name: "IRIS+", source: "Global Impact Investing Network", question: "Which standardised metrics will an impact investor recognise and compare?", when: "When outcomes must be reported in the investor's own vocabulary.", used: ["HEC", "KKH"] },
      { name: "SDG target alignment", source: "UN Sustainable Development Goals", question: "Which specific target, not which goal, does the work advance?", when: "Mapped at target level only; goal-level claims are not made.", used: ["HEC", "DLX", "SSF", "KUB"] },
      { name: "Social Return on Investment", source: "Social Value International principles", question: "What social value is created per rupee, after deadweight, attribution and drop-off?", when: "When a funder must compare programmes on value, not activity.", used: ["SSF"] },
      { name: "RE-AIM", source: "Implementation science", question: "Will a programme that works in a pilot reach its population, be adopted and persist?", when: "Before a pilot, so that the scale-up decision has evidence waiting for it.", used: ["KUB"] },
      { name: "Kirkpatrick four levels", source: "Training evaluation", question: "Did training change competence and practice, or only satisfaction?", when: "For any programme whose output is a trained professional.", used: ["KUB"] },
    ],
  },
  {
    numeral: "II",
    title: "Capital and valuation",
    methods: [
      { name: "Capital stack analysis", source: "Blended finance", question: "Which instruments carry which layer of risk, and in what order should they enter?", when: "When no single instrument can finance the asset.", used: ["DLX"] },
      { name: "Regulatory revenue assessment", source: "EPR under the Plastic Waste Management Rules", question: "Can a revenue line created by regulation be underwritten, and what breaks it?", when: "When part of the business model depends on a compliance market.", used: ["DLX"] },
      { name: "Scenario financial model", source: "Five-year, three-case", question: "What does the enterprise look like under base, downside and upside assumptions?", when: "In every readiness mandate, built so an investor can change the assumptions.", used: ["HEC", "KKH"] },
      { name: "Investor mapping", source: "By mandate, stage and ticket size", question: "Which investors can fund this, at this stage, at this cheque size?", when: "After the thesis and model, never before.", used: ["HEC", "DLX", "KKH"] },
      { name: "Value chain analysis", source: "Farmgate to consumer", question: "Where along the chain is value captured, and how much reaches the producer?", when: "When the impact claim rests on who earns what.", used: ["KKH"] },
    ],
  },
  {
    numeral: "III",
    title: "Strategy and implementation",
    methods: [
      { name: "Multi-criteria allocation framework", source: "Weighted decision analysis", question: "How should a fixed budget be divided across competing initiatives, on stated criteria?", when: "For organisations deciding which of their own programmes to fund and grow.", used: ["RCB"] },
      { name: "Cost per outcome comparison", source: "Cost-effectiveness analysis", question: "Which initiative delivers the outcome at the lowest cost per unit?", when: "When initiatives with different activities share an outcome.", used: ["RCB"] },
      { name: "Stakeholder influence and interest map", source: "Stakeholder analysis", question: "Whose decision can stop the work, and whose support makes it last?", when: "At the start of any multi-institution mandate.", used: ["RCB", "KUB"] },
      { name: "Site selection scorecard", source: "Weighted criteria", question: "Which site gives a pilot the highest chance of producing usable evidence?", when: "Before any partner agreement is signed.", used: ["KUB"] },
      { name: "Roadmap, RACI and risk register", source: "Programme management", question: "Who owns each task, what depends on it, and what is most likely to fail?", when: "When a plan must be credible to a funder, not only to the client.", used: ["KUB"] },
      { name: "CSR readiness review", source: "Schedule VII, Companies Act, 2013", question: "Does the programme qualify for CSR capital, and can it report as CSR funders require?", when: "For foundations seeking corporate funding in India.", used: ["SSF"] },
    ],
  },
];

export const ADVISORY_EMAIL = "impactfinance@ashoka.edu.in";
