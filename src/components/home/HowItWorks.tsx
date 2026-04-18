"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Calendar, ScanSearch, MessageSquareText, ArrowUpRight } from "lucide-react";
import Section from "@/components/Section";

const STEPS = [
  {
    number: "01",
    icon: <Calendar size={18} strokeWidth={1.75} />,
    title: "Book your inspection",
    description:
      "Share your property details. We'll confirm scope, availability, and schedule your inspection promptly.",
  },
  {
    number: "02",
    icon: <ScanSearch size={18} strokeWidth={1.75} />,
    title: "Detailed inspection & report",
    description:
      "A senior consultant conducts an on-site assessment with thermal and UV diagnostics, delivering a risk-prioritised report with clear photography.",
  },
  {
    number: "03",
    icon: <MessageSquareText size={18} strokeWidth={1.75} />,
    title: "Expert advice & guidance",
    description:
      "We walk you through every finding and give you plain-language advice to support negotiation and decisions.",
  },
];

export default function HowItWorks() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            How It Works
          </span>
          <span className="h-px w-8 bg-accent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
        >
          Book. Inspect.<br />
          <span className="text-neutral-500">Advise.</span>
        </motion.h2>
      </div>

      <div className="relative max-w-6xl mx-auto">
        <div
          aria-hidden
          className="hidden md:block absolute top-[38px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
          {STEPS.map((step, i) => (
            <motion.div
              key={step.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-center justify-center w-[76px] h-[76px] mx-auto mb-6 rounded-full bg-white ring-1 ring-neutral-200 text-neutral-900 relative z-10">
                <div className="flex items-center justify-center w-[58px] h-[58px] rounded-full bg-neutral-900 text-white">
                  {step.icon}
                </div>
              </div>
              <div className="text-center px-2">
                <div className="inline-flex items-center gap-2 mb-3">
                  <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                  {step.title}
                </h3>
                <p className="text-neutral-500 leading-relaxed text-[15px] max-w-sm mx-auto">
                  {step.description}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 12 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-60px" }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="mt-14 md:mt-16 flex justify-center"
      >
        <Link
          href="/contact"
          className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
        >
          Start with a booking
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </motion.div>
    </Section>
  );
}
