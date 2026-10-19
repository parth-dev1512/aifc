import type { Metadata } from "next";
import FormPage from "@/components/rise/FormPage";
import RiseForm from "@/components/rise/RiseForm";

export const metadata: Metadata = { title: "Partner with RISE | RISE Capital" };

export default function Page() {
  return (
    <FormPage
      eyebrow="For funds"
      title="Partner with RISE"
      intro="RISE works alongside leading Indian venture capital and impact funds. Partner funds work with a team that maps climate sectors completely, screens to a documented standard, and presents each venture with a written memo and a venture-level impact thesis."
      steps={[
        "The Chief Investment Officer reviews the proposal and writes to arrange a call.",
        "Scope is agreed: sectors, stages, the referral protocol and any data terms.",
        "Terms are set out in writing, including whether and how the fund is named.",
      ]}
      note="Partner funds are named publicly only with their written consent."
      formTitle="The fund"
      formIntro="Each partnership is scoped to the fund's own thesis and criteria."
    >
      <RiseForm
        fields={[
          { name: "fund", label: "Fund or firm name", required: true },
          { name: "website", label: "Website", type: "url", placeholder: "https://" },
          {
            name: "type",
            label: "Type",
            type: "select",
            required: true,
            options: [
              "Venture capital fund",
              "Impact fund",
              "Family office",
              "Other",
            ],
          },
          {
            name: "stage",
            label: "Stage focus",
            type: "select",
            options: ["Pre-seed", "Seed", "Series A", "Multi-stage"],
          },
          {
            name: "climate",
            label: "Climate focus",
            type: "select",
            options: [
              "Energy and power",
              "Industrial decarbonisation",
              "Agriculture and land use",
              "Cooling and built environment",
              "Multi-sector",
            ],
          },
          { name: "hq", label: "Headquarters", placeholder: "City" },
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "name@yourfund.com",
            required: true,
          },
        ]}
        submitLabel="Submit"
        doneLabel="Received"
      />
    </FormPage>
  );
}
