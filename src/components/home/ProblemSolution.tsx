"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Thermometer, Eye, DollarSign } from "lucide-react";
import Section from "@/components/Section";

const PROBLEMS = [
  {
    icon: <AlertTriangle size={20} />,
    text: "Hidden structural defects can cost tens of thousands to rectify",
  },
  {
    icon: <Eye size={20} />,
    text: "Moisture, mould, and pest damage are often invisible to the naked eye",
  },
  {
    icon: <DollarSign size={20} />,
    text: "Without expert assessment, you're making decisions based on surface appearances",
  },
  {
    icon: <Thermometer size={20} />,
    text: "Our thermal and UV technology reveals what visual inspections cannot",
  },
];

export default function ProblemSolution() {
  return (
    <Section>
      <div className="max-w-2xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-sm font-semibold text-muted uppercase tracking-widest mb-3"
        >
          Why It Matters
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-12 tracking-tight"
        >
          Hidden Defects Cost<br />Homeowners Thousands
        </motion.h2>
      </div>

      <div className="max-w-xl mx-auto space-y-6">
        {PROBLEMS.map((item, i) => (
          <motion.div
            key={item.text}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-4"
          >
            <div className="w-10 h-10 rounded-xl bg-accent/10 flex items-center justify-center shrink-0">
              {item.icon}
            </div>
            <p className="text-muted leading-relaxed pt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
