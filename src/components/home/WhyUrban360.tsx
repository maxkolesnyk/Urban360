"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

const DIFFERENTIATORS = [
  "Direct access to a senior building consultant — not a call centre",
  "Risk-prioritised reporting, not generic checklists",
  "Advanced thermal and UV diagnostic technology",
  "Clear, plain-language advice for confident decisions",
];

export default function WhyUrban360() {
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
          Why Choose Us
        </motion.p>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-3xl md:text-4xl font-bold mb-4 tracking-tight"
        >
          Expert Insight When<br />It Matters Most
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.15 }}
          className="text-muted leading-relaxed mb-10"
        >
          Urban 360 is not a checklist inspector — we&apos;re your expert partner
          in uncovering property condition insights with clarity, detail, and
          confidence.
        </motion.p>
      </div>

      <div className="max-w-xl mx-auto space-y-4 mb-10">
        {DIFFERENTIATORS.map((item, i) => (
          <motion.div
            key={item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
            className="flex items-start gap-3"
          >
            <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
              <Check size={14} className="text-foreground" />
            </div>
            <p className="text-foreground leading-relaxed">{item}</p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.4, delay: 0.4 }}
        className="text-center"
      >
        <Link
          href="/why-urban-360"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
        >
          Learn more about our approach <ArrowRight size={14} />
        </Link>
      </motion.div>
    </Section>
  );
}
