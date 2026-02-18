"use client";

import { motion } from "framer-motion";
import {
  UserCheck,
  Target,
  FileText,
  Award,
  Globe,
  HeartHandshake,
} from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const DIFFERENTIATORS = [
  {
    icon: <UserCheck size={24} />,
    title: "Direct Expert Engagement",
    description:
      "Not a marketplace or franchise — you work directly with a senior building consultant who knows your property.",
  },
  {
    icon: <Target size={24} />,
    title: "Risk-Focused Reporting",
    description:
      "We prioritise findings by severity and risk, giving you clear guidance for decisions and negotiations.",
  },
  {
    icon: <FileText size={24} />,
    title: "Technical Depth, Not Checklists",
    description:
      "In-depth analysis grounded in Australian standards, construction reality, and regulatory knowledge.",
  },
  {
    icon: <Award size={24} />,
    title: "AS 4349.1 Compliant",
    description:
      "Every inspection meets or exceeds Australian Standard requirements for building inspections.",
  },
  {
    icon: <Globe size={24} />,
    title: "Global + Local Experience",
    description:
      "International construction expertise combined with deep understanding of Melbourne's building landscape.",
  },
  {
    icon: <HeartHandshake size={24} />,
    title: "Personable Service",
    description:
      "Clear communication, genuine care, and custom guidance to support your specific situation.",
  },
];

export default function WhyUrban360() {
  return (
    <Section dark>
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-black/40 uppercase tracking-widest mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Expert Insight When It Matters Most
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          Urban 360 is not a checklist inspector — it&apos;s your expert partner
          in uncovering property condition insights with clarity, detail and
          confidence.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {DIFFERENTIATORS.map((item, i) => (
          <motion.div
            key={item.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
            className="flex gap-4 p-6 rounded-xl glass-card transition-all hover:scale-[1.01]"
          >
            <div className="w-12 h-12 rounded-lg bg-black/[0.03] flex items-center justify-center text-black/50 shrink-0">
              {item.icon}
            </div>
            <div>
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-muted leading-relaxed">
                {item.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/why-urban-360"
          className="inline-flex items-center gap-2 text-black/50 font-semibold hover:text-black transition-colors"
        >
          Learn More About Our Approach <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
