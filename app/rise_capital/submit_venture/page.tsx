import type { Metadata } from "next";
import FormPage from "@/components/rise/FormPage";
import RiseForm from "@/components/rise/RiseForm";

export const metadata: Metadata = { title: "Submit a venture | RISE Capital" };

export default function Page() {
  return (
    <FormPage
      eyebrow="For founders"
      title="Submit a venture"
      intro="RISE Capital evaluates climate ventures at pre-seed and seed stage that are built in India. Ventures that pass its process are evaluated alongside leading Indian venture capital and impact funds, and recommended to them."
      tags={["Climate", "Pre-seed and seed", "Built in India"]}
      steps={[
        "The analyst team screens the venture against the fund's thesis.",
        "If it is advanced, a deal team arranges a call and requests further materials.",
        "Diligence and the Investment Committee follow, and the outcome is communicated in writing.",
      ]}
      note="Material you submit is seen only by the RISE team and, with your consent, by the partner fund evaluating the venture."
      formTitle="Leave your email"
      formIntro="Share an email address and the RISE team will reach out to take it from there."
    >
      <RiseForm
        fields={[
          {
            name: "email",
            label: "Email",
            type: "email",
            placeholder: "founder@yourcompany.com",
            required: true,
          },
        ]}
        submitLabel="Submit"
        doneLabel="Received"
      />
    </FormPage>
  );
}
