"use client";

import { motion } from "framer-motion";
import { ClipboardCheck, FileSearch, MessageCircle } from "lucide-react";
import Section from "@/components/Section";

const STEPS = [
  {
    icon: <ClipboardCheck size={32} />,
    title: "Book Your Inspection",
    description:
      "Get in touch with your property details. We'll confirm availability, scope, and schedule your inspection promptly.",
  },
  {
    icon: <FileSearch size={32} />,
    title: "Detailed Inspection & Report",
    description:
      "Our senior consultant conducts a thorough on-site assessment. You receive a comprehensive, risk-prioritised report with clear photography and findings.",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Expert Advice & Guidance",
    description:
      "We walk you through the report, explain key findings, and provide actionable advice to support your negotiation and decision-making.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          How It Works
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Inspection &rarr; Report &rarr; Advice
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          A simple, transparent process from booking to clear, decisive guidance.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {STEPS.map((step, i) => (
          <motion.div
            key={step.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.15 }}
            className="relative text-center"
          >
            {/* Step number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-white text-sm font-bold flex items-center justify-center">
              {i + 1}
            </div>

            <div className="bg-surface border border-border rounded-2xl p-8 pt-10 h-full">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center text-primary mx-auto mb-5">
                {step.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
              <p className="text-muted leading-relaxed">
                {step.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
