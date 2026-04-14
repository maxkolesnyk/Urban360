"use client";

import { motion } from "framer-motion";
import Section from "@/components/Section";

const STEPS = [
  {
    number: "01",
    title: "Book Your Inspection",
    description:
      "Get in touch with your property details. We'll confirm availability, scope, and schedule your inspection promptly.",
  },
  {
    number: "02",
    title: "Detailed Inspection & Report",
    description:
      "Our senior consultant conducts a thorough on-site assessment using advanced diagnostic tools. You receive a comprehensive, risk-prioritised report with clear photography and findings.",
  },
  {
    number: "03",
    title: "Expert Advice & Guidance",
    description:
      "We walk you through the report, explain key findings, and provide actionable advice to support your negotiation and decision-making.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center mb-14">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-muted uppercase tracking-widest mb-3"
        >
          How It Works
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold tracking-tight"
        >
          Book &rarr; Inspect &rarr; Advise
        </motion.h2>
      </div>

      <div className="max-w-2xl mx-auto space-y-12">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.12 }}
            className="flex gap-6"
          >
            <span className="text-4xl font-bold text-accent/30 shrink-0 leading-none pt-1">
              {step.number}
            </span>
            <div>
              <h3 className="text-lg font-semibold mb-2">{step.title}</h3>
              <p className="text-muted leading-relaxed">{step.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
