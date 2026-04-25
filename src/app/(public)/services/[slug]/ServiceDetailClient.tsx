"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Phone,
  Clock,
  Users,
  ShieldCheck,
  Search,
  Bug,
  ClipboardList,
  Wrench,
  HardHat,
  Droplets,
  Thermometer,
} from "lucide-react";
import { SITE } from "@/lib/constants";
import type { ServiceContent } from "@/lib/service-content";
import Section from "@/components/Section";
import EvidenceGallery from "@/components/EvidenceGallery";

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={18} strokeWidth={1.75} />,
  Bug: <Bug size={18} strokeWidth={1.75} />,
  ClipboardList: <ClipboardList size={18} strokeWidth={1.75} />,
  Wrench: <Wrench size={18} strokeWidth={1.75} />,
  ShieldCheck: <ShieldCheck size={18} strokeWidth={1.75} />,
  HardHat: <HardHat size={18} strokeWidth={1.75} />,
  Droplets: <Droplets size={18} strokeWidth={1.75} />,
  Thermometer: <Thermometer size={18} strokeWidth={1.75} />,
};

// Risk-level dot colours — subtle accents, not heavy borders
const RISK_DOT: Record<string, string> = {
  "text-red-600": "bg-red-500",
  "text-amber-600": "bg-amber-500",
  "text-accent": "bg-accent",
};

interface RelatedService {
  slug: string;
  title: string;
  shortDescription: string;
  icon: string;
  heroImage: string;
}

interface ServiceDetailClientProps {
  content: ServiceContent;
  heroImage?: string;
  relatedServices: RelatedService[];
}

export default function ServiceDetailClient({
  content,
  heroImage,
  relatedServices,
}: ServiceDetailClientProps) {
  return (
    <>
      {/* ── 1. Cinematic Hero ── */}
      <section className="relative min-h-[80vh] flex items-end overflow-hidden bg-neutral-950 pt-[72px]">
        {heroImage && (
          <Image
            src={heroImage}
            alt={content.headline}
            fill
            priority
            className="object-cover"
            sizes="100vw"
          />
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent" />

        <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-28 w-full">
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          >
            <Link
              href="/services"
              className="group inline-flex items-center gap-1.5 text-sm text-white/70 hover:text-white transition-colors mb-8"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              All services
            </Link>
          </motion.div>

          <div className="max-w-3xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-6"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
                Service
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.18, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-white mb-6"
            >
              {content.headline}
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mb-8"
            >
              {content.intro}
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.38 }}
              className="flex flex-col sm:flex-row gap-3"
            >
              <Link
                href="/contact"
                className="group inline-flex items-center justify-center gap-2 bg-accent text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all"
              >
                Book this inspection
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
                Call {SITE.phone}
              </a>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── 2. Overview + Ideal For (editorial split) ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                What it is
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
            >
              A proper look,<br />
              <span className="text-neutral-500">not a quick glance.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed"
            >
              {content.whatIsIt}
            </motion.p>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
          >
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
              <Users size={18} strokeWidth={1.75} />
            </div>
            <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-4">
              Ideal for
            </h3>
            <ul className="space-y-2.5">
              {content.idealFor.map((item) => (
                <li
                  key={item}
                  className="flex items-start gap-3 text-sm text-neutral-500 leading-relaxed"
                >
                  <span className="mt-1.5 h-1 w-1 rounded-full bg-accent shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </Section>

      {/* ── 3. Evidence Gallery (if images exist) ── */}
      {content.images && content.images.length > 0 && (
        <Section variant="dark" className="dark-section overflow-hidden">
          <EvidenceGallery
            items={content.images.map((img) => ({
              src: img.src,
              alt: img.alt,
              caption: img.alt,
            }))}
          />
        </Section>
      )}

      {/* ── 4. What's Inspected ── */}
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
              Scope of Inspection
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
            What we inspect,<br />
            <span className="text-neutral-500">end to end.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {content.whatsInspected.map((item, i) => (
            <motion.div
              key={item}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.04, ease: [0.22, 1, 0.36, 1] }}
              className="group relative flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Check size={15} strokeWidth={2} />
              </div>
              <p className="text-sm text-neutral-600 leading-relaxed pt-1">
                {item}
              </p>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* ── 5. Why it matters + How we do it differently (split editorial) ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16">
          {/* Why it matters */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Why It Matters
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] text-neutral-900 mb-5"
            >
              The stakes are<br />
              <span className="text-neutral-500">higher than they look.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8"
            >
              {content.whyItMatters}
            </motion.p>
            <div className="space-y-3">
              {content.whyItMattersPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-neutral-900 text-white shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-neutral-600 leading-relaxed">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          {/* How we do it differently */}
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Our Approach
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] text-neutral-900 mb-5"
            >
              How we do it<br />
              <span className="text-neutral-500">differently.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8"
            >
              {content.howWeDoDifferently}
            </motion.p>
            <div className="space-y-3">
              {content.differentiatorPoints.map((point, i) => (
                <motion.div
                  key={point}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.1 + i * 0.05 }}
                  className="flex items-start gap-3"
                >
                  <div className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent text-black shrink-0 mt-0.5">
                    <Check size={12} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-neutral-700 leading-relaxed font-medium">
                    {point}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Risk Categories (Pre-Purchase only) ── */}
      {content.riskCategories && (
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
                Risk Categories
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
              How findings<br />
              <span className="text-neutral-500">are classified.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto"
            >
              Every defect we identify is categorised so you know immediately
              what needs attention — and what can wait.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
            {content.riskCategories.map((cat, i) => {
              const dotClass = RISK_DOT[cat.color] ?? "bg-neutral-900";
              return (
                <motion.div
                  key={cat.level}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
                >
                  <div className="flex items-center gap-2.5 mb-4">
                    <span className={`h-2 w-2 rounded-full ${dotClass}`} />
                    <span className="text-[10px] font-semibold uppercase tracking-[0.2em] text-neutral-500">
                      Level {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-lg tracking-tight mb-3">
                    {cat.level}
                  </h3>
                  <p className="text-sm text-neutral-500 leading-relaxed">
                    {cat.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </Section>
      )}

      {/* ── 6. Process — numbered rail ── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Our Process
            </span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
          >
            From booking<br />
            <span className="text-neutral-500">to confident decision.</span>
          </motion.h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            aria-hidden
            className="hidden md:block absolute top-[38px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
          />

          <div
            className={`grid grid-cols-1 gap-6 md:gap-8 relative ${
              content.process.length === 4
                ? "md:grid-cols-2 lg:grid-cols-4"
                : "md:grid-cols-3"
            }`}
          >
            {content.process.map((step, i) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative"
              >
                <div className="flex items-center justify-center w-[76px] h-[76px] mx-auto mb-6 rounded-full bg-white ring-1 ring-neutral-200 text-neutral-900 relative z-10">
                  <div className="flex items-center justify-center w-[58px] h-[58px] rounded-full bg-neutral-900 text-white font-semibold tabular-nums text-lg">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="text-center px-2">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      Step {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-3">
                    {step.step}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-sm max-w-xs mx-auto">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 7. What you receive + turnaround ── */}
      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                What you receive
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
            >
              A report that&apos;s<br />
              <span className="text-neutral-500">detailed and clear.</span>
            </motion.h2>

            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl"
            >
              Comprehensive reporting delivered through a configurable client
              portal — accessible across devices, with a streamlined
              experience that puts every finding, photo, and recommendation a
              tap away.
            </motion.p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.whatYouGet.map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.45, delay: 0.05 + i * 0.04 }}
                  className="group flex items-start gap-3 p-4 bg-white rounded-xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300"
                >
                  <div className="flex items-center justify-center w-7 h-7 rounded-lg bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                    <Check size={13} strokeWidth={2.5} />
                  </div>
                  <span className="text-sm text-neutral-700 leading-relaxed pt-0.5">
                    {item}
                  </span>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 lg:sticky lg:top-28 group relative p-6 md:p-8 bg-neutral-900 text-white rounded-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-accent/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-accent text-black mb-5">
                <Clock size={18} strokeWidth={1.75} />
              </div>
              <div className="flex items-center gap-3 mb-3">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                  Report Turnaround
                </span>
              </div>
              <h3 className="text-2xl font-semibold tracking-tight mb-4">
                Fast. Thorough.<br />
                <span className="text-white/50">Decision-ready.</span>
              </h3>
              <p className="text-white/70 leading-relaxed text-sm">
                {content.turnaround}
              </p>
              <div className="mt-6 pt-6 border-t border-white/10">
                <Link
                  href="/contact"
                  className="group inline-flex items-center gap-2 text-sm font-semibold text-white hover:text-accent transition-colors"
                >
                  Request a consultation
                  <ArrowUpRight
                    size={15}
                    className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  />
                </Link>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* ── 8. FAQs ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-4 lg:sticky lg:top-28">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                FAQs
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5"
            >
              Questions,<br />
              <span className="text-neutral-500">answered.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base text-neutral-500 leading-relaxed"
            >
              Still curious? Give us a call — we&apos;re happy to walk through
              anything specific to your property.
            </motion.p>
          </div>

          <div className="lg:col-span-8 space-y-3">
            {content.faqs.map((faq, i) => (
              <motion.div
                key={faq.q}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.45, delay: i * 0.05 }}
              >
                <details className="group bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 open:ring-neutral-900/20 open:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
                  <summary className="flex items-start justify-between cursor-pointer px-6 py-5 text-neutral-900 font-semibold text-[15px] tracking-tight gap-4 list-none">
                    <span>{faq.q}</span>
                    <ChevronDown
                      size={18}
                      className="text-neutral-400 group-open:rotate-180 group-open:text-accent transition-all shrink-0 mt-0.5"
                    />
                  </summary>
                  <div className="px-6 pb-6 text-neutral-500 leading-relaxed text-sm">
                    {faq.a}
                  </div>
                </details>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 9. Related Services ── */}
      {relatedServices.length > 0 && (
        <Section className="bg-neutral-50">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Related Services
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
                Often paired<br />
                <span className="text-neutral-500">with this inspection.</span>
              </h2>
            </div>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
            >
              All services
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-5">
            {relatedServices.map((service, i) => (
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
                      src={service.heroImage}
                      alt={service.title}
                      fill
                      className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                      sizes="(max-width: 768px) 100vw, 33vw"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    <div className="absolute top-4 left-4">
                      <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/95 backdrop-blur-sm text-neutral-900 ring-1 ring-black/5 transition-colors group-hover:bg-accent group-hover:text-black">
                        {ICON_MAP[service.icon]}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-neutral-900 text-[15px] leading-snug tracking-tight mb-2">
                      {service.title}
                    </h3>
                    <p className="text-neutral-500 text-sm leading-relaxed line-clamp-2 mb-4">
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
      )}

      {/* ── 10. Closing CTA — dark cinematic ── */}
      <Section variant="dark" className="dark-section">
        <div className="max-w-3xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              Ready when you are
            </span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-white mb-5"
          >
            Book {content.headline.toLowerCase()}<br />
            <span className="text-white/50">with confidence.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-white/60 leading-relaxed mb-8 max-w-2xl mx-auto"
          >
            Limited daily availability. Get in touch to discuss your property
            and schedule your inspection — no obligation.
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
              className="group inline-flex items-center justify-center gap-2 bg-accent text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all"
            >
              Book your inspection
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
              Call {SITE.phone}
            </a>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
