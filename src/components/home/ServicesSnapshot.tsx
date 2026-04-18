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
  ArrowUpRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_HERO_IMAGES } from "@/lib/service-content";
import Section from "@/components/Section";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={16} strokeWidth={1.75} />,
  Bug: <Bug size={16} strokeWidth={1.75} />,
  ClipboardList: <ClipboardList size={16} strokeWidth={1.75} />,
  Wrench: <Wrench size={16} strokeWidth={1.75} />,
  ShieldCheck: <ShieldCheck size={16} strokeWidth={1.75} />,
  HardHat: <HardHat size={16} strokeWidth={1.75} />,
  Droplets: <Droplets size={16} strokeWidth={1.75} />,
  Thermometer: <Thermometer size={16} strokeWidth={1.75} />,
};

export default function ServicesSnapshot() {
  return (
    <Section>
      <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
        <div className="max-w-2xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Our Services
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
            Inspection &amp; compliance,<br />
            <span className="text-neutral-500">done properly.</span>
          </h2>
        </div>
        <Link
          href="/services"
          className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
        >
          View all services
          <ArrowUpRight
            size={16}
            className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
          />
        </Link>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group relative block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden">
                <Image
                  src={SERVICE_HERO_IMAGES[service.slug]}
                  alt={service.title}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute top-3 left-3 flex items-center gap-2">
                  <span className="flex items-center justify-center w-8 h-8 rounded-full bg-white/90 backdrop-blur-sm text-neutral-900 ring-1 ring-black/5">
                    {ICON_MAP[service.icon]}
                  </span>
                </div>
                <span className="absolute top-3 right-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/90 bg-black/30 backdrop-blur-md rounded-full px-2.5 py-1">
                  {String(i + 1).padStart(2, "0")}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-semibold text-neutral-900 text-[15px] leading-snug tracking-tight mb-2 group-hover:text-neutral-900">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-[13px] leading-relaxed line-clamp-2 mb-4">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
                  Learn more
                  <ArrowUpRight
                    size={13}
                    className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                  />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
