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
import { SERVICE_HERO_IMAGES } from "@/lib/service-content";
import Section from "@/components/Section";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Bug: <Bug size={20} />,
  ClipboardList: <ClipboardList size={20} />,
  Wrench: <Wrench size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  HardHat: <HardHat size={20} />,
  Droplets: <Droplets size={20} />,
  Thermometer: <Thermometer size={20} />,
};

export default function ServicesSnapshot() {
  return (
    <Section variant="dark" className="dark-section">
      <div className="mb-10">
        <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
          Our Services
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white">
          Inspection &amp; Compliance Services
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
        {SERVICES.map((service, i) => (
          <motion.div
            key={service.slug}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <Link
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all h-full"
            >
              <div className="relative h-36 w-full">
                <Image
                  src={SERVICE_HERO_IMAGES[service.slug]}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 text-neutral-800">
                  {ICON_MAP[service.icon]}
                </div>
                <h3 className="font-semibold text-neutral-900 mb-1.5 text-sm">
                  {service.title}
                </h3>
                <p className="text-neutral-500 text-xs leading-relaxed line-clamp-2 mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-neutral-900 font-medium group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
