"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Search,
  Bug,
  ClipboardList,
  Wrench,
  ShieldCheck,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Section from "@/components/Section";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={28} />,
  Bug: <Bug size={28} />,
  ClipboardList: <ClipboardList size={28} />,
  Wrench: <Wrench size={28} />,
  ShieldCheck: <ShieldCheck size={28} />,
  HardHat: <HardHat size={28} />,
};

export default function ServicesSnapshot() {
  return (
    <Section dark>
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          Comprehensive Inspection &amp; Compliance Services
        </h2>
        <p className="text-muted max-w-2xl mx-auto">
          From pre-purchase inspections to building permits — technically
          rigorous assessments delivered with clarity and precision.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block h-full bg-background border border-border rounded-2xl p-8 hover:border-primary/40 transition-all hover:shadow-[0_0_30px_rgba(0,194,255,0.08)]"
            >
              <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center text-primary mb-5 group-hover:bg-primary/20 transition-colors">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="text-lg font-semibold mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="text-muted leading-relaxed mb-4">
                {service.shortDescription}
              </p>
              <span className="inline-flex items-center gap-1 text-sm text-primary font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={14} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          View All Services <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
