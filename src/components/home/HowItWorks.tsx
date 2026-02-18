"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { ClipboardCheck, FileSearch, MessageCircle } from "lucide-react";
import Section from "@/components/Section";

const STEPS = [
  {
    icon: <ClipboardCheck size={32} />,
    title: "Book Your Inspection",
    description:
      "Get in touch with your property details. We'll confirm availability, scope, and schedule your inspection promptly.",
    image: "/images/step-book.webp",
  },
  {
    icon: <FileSearch size={32} />,
    title: "Detailed Inspection & Report",
    description:
      "Our senior consultant conducts a thorough on-site assessment. You receive a comprehensive, risk-prioritised report with clear photography and findings.",
    image: "/images/step-inspect.webp",
  },
  {
    icon: <MessageCircle size={32} />,
    title: "Expert Advice & Guidance",
    description:
      "We walk you through the report, explain key findings, and provide actionable advice to support your negotiation and decision-making.",
    image: "/images/step-report.webp",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
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
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-black text-white text-sm font-bold flex items-center justify-center z-10">
              {i + 1}
            </div>

            <div className="glass-card glass-shimmer rounded-2xl overflow-hidden h-full transition-transform hover:scale-[1.01]">
              <div className="relative h-36 w-full">
                <Image
                  src={step.image}
                  alt={step.title}
                  fill
                  className="object-cover opacity-60"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-[var(--glass)]" />
              </div>
              <div className="p-8 pt-4 text-center">
                <div className="w-16 h-16 rounded-xl bg-black/[0.03] flex items-center justify-center text-black/60 mx-auto mb-5">
                  {step.icon}
                </div>
                <h3 className="text-lg font-semibold mb-3">{step.title}</h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
