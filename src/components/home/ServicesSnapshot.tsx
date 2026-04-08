"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Search,
  Bug,
  ClipboardList,
  Wrench,
  ShieldCheck,
  HardHat,
  Droplets,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Section from "@/components/Section";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={22} />,
  Bug: <Bug size={22} />,
  ClipboardList: <ClipboardList size={22} />,
  Wrench: <Wrench size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  HardHat: <HardHat size={22} />,
  Droplets: <Droplets size={22} />,
  Thermometer: <Thermometer size={22} />,
};

const FEATURED_IMAGES: Record<string, string> = {
  "pre-purchase-inspections": "/images/property-exterior-pool.webp",
  "timber-pest-inspections": "/images/termite-colony.webp",
};

const FEATURED_SLUGS = ["pre-purchase-inspections", "timber-pest-inspections"];

export default function ServicesSnapshot() {
  const featured = SERVICES.filter((s) =>
    FEATURED_SLUGS.includes(s.slug)
  );
  const rest = SERVICES.filter(
    (s) => !FEATURED_SLUGS.includes(s.slug)
  );

  return (
    <Section>
      <div className="mb-10">
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
          Inspection &amp; Compliance Services
        </h2>
      </div>

      {/* Featured services — large image cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
        {featured.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group relative block aspect-[16/10] rounded-2xl overflow-hidden"
            >
              <Image
                src={FEATURED_IMAGES[service.slug]}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h3 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h3>
                <p className="text-white/70 text-sm leading-relaxed max-w-md mb-3 hidden md:block">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>

      {/* Remaining services — compact grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {rest.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block p-5 rounded-xl border border-border hover:border-accent/30 transition-all h-full"
            >
              <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 text-foreground group-hover:bg-accent/20 transition-colors">
                {ICON_MAP[service.icon]}
              </div>
              <h3 className="font-semibold text-sm mb-1 group-hover:text-foreground transition-colors">
                {service.title}
              </h3>
              <span className="text-xs text-muted flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowRight size={12} />
              </span>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
