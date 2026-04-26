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
  Phone,
} from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
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

export default function ServicesIndexClient() {
  return (
    <>
      {/* ── 1. Cinematic Hero ── */}
      <section className="relative min-h-[70vh] flex items-end overflow-hidden bg-neutral-950 pt-[72px]">
        <Image
          src="/images/services-hero.webp"
          alt="Melbourne property inspection services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-28 w-full">
          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Our Services
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-white mb-6"
            >
              Expert inspection. Trusted assurance.<br />
              <span className="text-white/60">Total asset protection.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8"
            >
              Our comprehensive inspection and assurance services are built to
              safeguard your property at every stage. From structural integrity
              to detailed condition reporting, Urban 360 delivers the insights
              you need to make informed decisions — and protect everything
              you&apos;ve worked hard to build.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all"
              >
                Book an inspection
                <ArrowUpRight
                  size={16}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-7 py-3.5 rounded-xl text-sm font-medium hover:bg-white/15 transition-all"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Services grid — editorial ── */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                All Services
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
              Every service.<br />
              <span className="text-neutral-500">The same high standard.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mt-6 max-w-xl">
              Pre-purchase due diligence, construction stage oversight, and
              everything in between — each inspection is led by a senior
              member of our team and held to the same exacting standard,
              delivered with the same rigour.
            </p>
          </div>
          <a
            href={`tel:${SITE.phone}`}
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
          >
            Not sure which you need? Call us
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-5">
          {SERVICES.map((service, i) => (
            <motion.div
              key={service.slug}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
            >
              <Link
                href={`/services/${service.slug}`}
                className="group relative block h-full overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={SERVICE_HERO_IMAGES[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="absolute top-4 left-4">
                    <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm text-neutral-900 ring-1 ring-black/5 transition-colors group-hover:bg-accent group-hover:text-black">
                      {ICON_MAP[service.icon]}
                    </span>
                  </div>
                  <span className="absolute top-4 right-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>
                <div className="p-6 md:p-7">
                  <h3 className="font-semibold text-neutral-900 text-[17px] leading-snug tracking-tight mb-3">
                    {service.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed line-clamp-3 mb-5">
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

      {/* ── 3. Closing CTA ── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Not sure what you need?
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
            Talk to a consultant,<br />
            <span className="text-neutral-500">not a call centre.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            A quick chat is usually all it takes to work out which inspection
            fits your property and situation. No obligation, no sales pressure.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
            className="flex flex-col sm:flex-row gap-3 justify-center"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Request a consultation
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="group inline-flex items-center justify-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              <Phone size={16} />
              Call {SITE.phone}
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
