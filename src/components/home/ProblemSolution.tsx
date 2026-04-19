"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Thermometer, Eye, DollarSign } from "lucide-react";
import Section from "@/components/Section";

const PROBLEMS = [
  {
    icon: <AlertTriangle size={18} strokeWidth={1.75} />,
    title: "Structural defects",
    text: "Hidden damage can cost tens of thousands to rectify once uncovered.",
  },
  {
    icon: <Eye size={18} strokeWidth={1.75} />,
    title: "Invisible damage",
    text: "Moisture, mould, and pest activity are rarely visible to the naked eye.",
  },
  {
    icon: <DollarSign size={18} strokeWidth={1.75} />,
    title: "Surface-only decisions",
    text: "Without expert assessment you're relying on appearances, not evidence.",
  },
  {
    icon: <Thermometer size={18} strokeWidth={1.75} />,
    title: "Technology reveals more",
    text: "Thermal and UV diagnostics expose what standard inspections miss.",
  },
];

export default function ProblemSolution() {
  return (
    <Section className="bg-neutral-50">
      <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center justify-center gap-3 mb-5"
        >
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            Why It Matters
          </span>
          <span className="h-px w-8 bg-accent" />
        </motion.div>
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
          className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5"
        >
          Hidden defects cost<br />
          <span className="text-neutral-500">homeowners thousands.</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto"
        >
          Most surprises on a property aren&apos;t accidents — they&apos;re
          missed during the inspection. Here&apos;s what we look for that
          others don&apos;t.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-4xl mx-auto">
        {PROBLEMS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            className="group relative flex items-start gap-4 p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-1.5">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
