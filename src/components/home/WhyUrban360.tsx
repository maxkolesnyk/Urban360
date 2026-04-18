"use client";

import { motion } from "framer-motion";
import { UserCog, Target, Radar, MessageCircle, ArrowUpRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

const DIFFERENTIATORS = [
  {
    icon: <UserCog size={18} strokeWidth={1.75} />,
    title: "Senior consultant, always",
    text: "Direct access to an experienced building consultant — never a call centre or junior tech.",
  },
  {
    icon: <Target size={18} strokeWidth={1.75} />,
    title: "Risk-prioritised reporting",
    text: "Reports built around what actually matters — structural, safety, and cost-critical issues first.",
  },
  {
    icon: <Radar size={18} strokeWidth={1.75} />,
    title: "Advanced diagnostics",
    text: "Thermal imaging and UV tools reveal moisture, pest activity, and electrical faults standard checks miss.",
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.75} />,
    title: "Plain-language advice",
    text: "Clear, actionable guidance you can use to negotiate, plan works, or walk away with confidence.",
  },
];

export default function WhyUrban360() {
  return (
    <Section className="bg-neutral-50">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
        <div className="lg:col-span-5 lg:sticky lg:top-28">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Why Choose Us
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
          >
            Expert insight<br />
            when it matters most.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8"
          >
            Urban 360 isn&apos;t a checklist inspector. We&apos;re your expert
            partner in uncovering property condition with clarity, detail, and
            confidence.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-wrap gap-3"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book an inspection
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/why-urban-360"
              className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-6 py-3 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              Our approach
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>

        <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                {item.icon}
              </div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-2">
                {item.title}
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                {item.text}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
