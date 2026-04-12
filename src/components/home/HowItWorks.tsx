"use client";

import Section from "@/components/Section";
import Timeline from "@/components/Timeline";

const STEPS = [
  {
    title: "Book Your Inspection",
    description:
      "Get in touch with your property details. We'll confirm availability, scope, and schedule your inspection promptly.",
  },
  {
    title: "Detailed Inspection & Report",
    description:
      "Our senior consultant conducts a thorough on-site assessment using advanced diagnostic tools. You receive a comprehensive, risk-prioritised report with clear photography and findings.",
  },
  {
    title: "Expert Advice & Guidance",
    description:
      "We walk you through the report, explain key findings, and provide actionable advice to support your negotiation and decision-making.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="mb-12">
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Book &rarr; Inspect &rarr; Advise
        </h2>
      </div>
      <div className="max-w-3xl">
        <Timeline steps={STEPS} />
      </div>
    </Section>
  );
}
