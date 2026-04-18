"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  UserCog,
  Target,
  Radar,
  MessageCircle,
  ShieldCheck,
  HeartHandshake,
  TrendingUp,
  Microscope,
  Scale,
  BadgeCheck,
  ArrowUpRight,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import Section from "@/components/Section";

const PHILOSOPHY = [
  {
    icon: <Microscope size={18} strokeWidth={1.75} />,
    title: "Evidence over opinion",
    text: "Every conclusion is backed by on-site observation, measurement, and diagnostic imaging — not assumption.",
  },
  {
    icon: <Scale size={18} strokeWidth={1.75} />,
    title: "Risk, not volume",
    text: "We report what matters for your decision — structural, safety, and cost-critical findings are highlighted, noise is filtered out.",
  },
  {
    icon: <MessageCircle size={18} strokeWidth={1.75} />,
    title: "Clarity over jargon",
    text: "Plain-language explanations so you can act on findings — negotiate, plan remediation, or walk away with confidence.",
  },
];

const DIFFERENTIATORS = [
  {
    icon: <UserCog size={18} strokeWidth={1.75} />,
    title: "Senior consultant, always",
    text: "You get direct access to an experienced building consultant for every inspection — never a call centre, junior tech, or marketplace stranger.",
  },
  {
    icon: <Target size={18} strokeWidth={1.75} />,
    title: "Risk-prioritised reporting",
    text: "Findings are categorised by severity with implications and recommendations — not a 50-page checklist dump you have to decode yourself.",
  },
  {
    icon: <Radar size={18} strokeWidth={1.75} />,
    title: "Advanced diagnostics",
    text: "Thermal imaging, moisture detection, and UV tools reveal issues that standard visual inspections consistently miss.",
  },
  {
    icon: <ShieldCheck size={18} strokeWidth={1.75} />,
    title: "AS 4349.1 grounded",
    text: "Every report aligns with Australian Standards and NCC requirements — defensible in negotiation, valuable for your records.",
  },
  {
    icon: <HeartHandshake size={18} strokeWidth={1.75} />,
    title: "Walk-through, every time",
    text: "We guide you through every finding with photography and context so you leave with clarity — not a PDF and a shrug.",
  },
  {
    icon: <TrendingUp size={18} strokeWidth={1.75} />,
    title: "Future-risk perspective",
    text: "Beyond current defects, we surface emerging risks — what's coming, not just what's already visible.",
  },
];

const STANDARDS = [
  {
    label: "AS 4349.1",
    title: "Residential building inspections",
    text: "Compliant scope, methodology, and reporting format for pre-purchase inspections across all property types.",
  },
  {
    label: "AS 4349.3",
    title: "Timber pest inspections",
    text: "Full adherence to the Australian Standard for termite, borer, and timber decay assessment.",
  },
  {
    label: "NCC / BCA",
    title: "National Construction Code",
    text: "Findings referenced to current Volume 1 & 2 provisions — structural, fire, plumbing, and energy efficiency.",
  },
  {
    label: "Licensed",
    title: "Victorian building surveyor",
    text: "Registered and insured in Victoria with full professional indemnity coverage.",
  },
  {
    label: "Equipment",
    title: "Thermal + UV diagnostics",
    text: "FLIR thermal imaging, moisture meters, and UV tools carried on every inspection — not sold as an upsell.",
  },
  {
    label: "Reporting",
    title: "Digital, same-week delivery",
    text: "High-resolution photography, structured risk ratings, and clear next-step recommendations.",
  },
];

const COMPARISON = [
  {
    axis: "Who inspects",
    them: "Whoever's closest on the marketplace",
    us: "Senior consultant who owns your file end-to-end",
  },
  {
    axis: "Report format",
    them: "Generic checklist, copy-paste wording",
    us: "Risk-prioritised, written to your property",
  },
  {
    axis: "Diagnostics",
    them: "Visual only, or thermal as a paid add-on",
    us: "Thermal + UV + moisture meters included",
  },
  {
    axis: "Turnaround",
    them: "Opaque queue — when it's ready",
    us: "Same week, scheduled up-front",
  },
  {
    axis: "Walk-through",
    them: "PDF delivery, good luck reading it",
    us: "Live walk-through with full context",
  },
  {
    axis: "Accountability",
    them: "Platform shields the inspector",
    us: "You have the consultant's direct line",
  },
];

export default function WhyUrban360PageClient() {
  return (
    <div className="pt-[72px]">
      {/* HERO */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-8">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Why Urban 360
              </span>
            </motion.div>
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-8"
            >
              Technical clarity,<br />
              <span className="text-neutral-500">not checklists.</span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mb-10"
            >
              Urban 360 isn&apos;t a marketplace, a franchise, or a volume
              operation. We&apos;re a small team of senior building consultants
              who treat every inspection as the high-stakes decision it is —
              for the buyer, the vendor, and the property itself.
            </motion.p>
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.28 }}
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
                href="/services"
                className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-6 py-3 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
              >
                View services
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <div className="p-6 md:p-7 bg-neutral-50 rounded-2xl ring-1 ring-neutral-200/80">
              <div className="flex items-center gap-3 mb-5">
                <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white">
                  <BadgeCheck size={18} strokeWidth={1.75} />
                </span>
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Headline
                </span>
              </div>
              <p className="text-lg font-semibold text-neutral-900 leading-snug tracking-tight mb-4">
                One senior consultant, your property from first call to final
                walk-through.
              </p>
              <p className="text-neutral-500 text-sm leading-relaxed">
                No hand-offs, no call centres, no junior techs. That&apos;s the
                whole difference.
              </p>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* OUR APPROACH */}
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
                Our approach
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
            >
              Built around<br />
              <span className="text-neutral-500">your decision.</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.15 }}
              className="text-base md:text-lg text-neutral-500 leading-relaxed"
            >
              Most inspection reports are written for the inspector, not the
              buyer. Ours are built backwards from the decision you&apos;re
              trying to make — buy, renegotiate, remediate, or walk.
            </motion.p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 gap-3 md:gap-4">
            {PHILOSOPHY.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
                className="group relative flex items-start gap-4 p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-1.5">
                    {item.title}
                  </h3>
                  <p className="text-neutral-500 text-sm leading-relaxed">
                    {item.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </Section>

      {/* DIFFERENTIATORS */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                What makes us different
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
            >
              Six reasons buyers<br />
              <span className="text-neutral-500">keep coming back.</span>
            </motion.h2>
          </div>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.18 }}
            className="text-base text-neutral-500 leading-relaxed max-w-md md:self-end"
          >
            Built over a decade of Melbourne inspections, informed by global
            construction experience, and refined by direct feedback from every
            client we&apos;ve worked with.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {DIFFERENTIATORS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
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
      </Section>

      {/* STANDARDS & CREDENTIALS */}
      <Section className="bg-neutral-50">
        <div className="max-w-3xl mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Standards &amp; credentials
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
          >
            Technical depth,<br />
            <span className="text-neutral-500">properly credentialed.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed"
          >
            Every report is grounded in current Australian Standards, licensed
            under Victorian building law, and equipped with the diagnostic tools
            needed to see what the eye can&apos;t.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {STANDARDS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
            >
              <div className="inline-flex items-center gap-2 mb-4">
                <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-accent">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-900 bg-neutral-100 rounded-full px-2.5 py-1">
                  {item.label}
                </span>
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
      </Section>

      {/* COMPARISON */}
      <Section>
        <div className="max-w-2xl mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              How we compare
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
          >
            The typical inspection<br />
            <span className="text-neutral-500">vs. Urban 360.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed"
          >
            Most building inspection services were built to scale first and
            serve second. We inverted that — here&apos;s what it looks like in
            practice.
          </motion.p>
        </div>

        <div className="rounded-2xl ring-1 ring-neutral-200/80 overflow-hidden bg-white">
          <div className="hidden md:grid grid-cols-[1fr_1fr_1fr] bg-neutral-50 border-b border-neutral-200">
            <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Dimension
            </div>
            <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-500 border-l border-neutral-200">
              Typical inspector
            </div>
            <div className="px-6 py-4 text-[11px] font-semibold uppercase tracking-[0.22em] text-neutral-900 border-l border-neutral-200 bg-neutral-900/[0.02]">
              Urban 360
            </div>
          </div>

          {COMPARISON.map((row, i) => (
            <motion.div
              key={row.axis}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05, ease: [0.22, 1, 0.36, 1] }}
              className="grid grid-cols-1 md:grid-cols-[1fr_1fr_1fr] border-b border-neutral-200 last:border-b-0"
            >
              <div className="px-6 py-5 md:py-6 font-semibold text-neutral-900 text-sm tracking-tight">
                {row.axis}
              </div>
              <div className="px-6 py-5 md:py-6 md:border-l border-neutral-200 flex items-start gap-3">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-neutral-100 text-neutral-400 shrink-0 mt-0.5">
                  <X size={13} strokeWidth={2} />
                </span>
                <span className="text-neutral-500 text-sm leading-relaxed">
                  {row.them}
                </span>
              </div>
              <div className="px-6 py-5 md:py-6 md:border-l border-neutral-200 flex items-start gap-3 bg-neutral-900/[0.02]">
                <span className="flex items-center justify-center w-6 h-6 rounded-lg bg-accent text-black shrink-0 mt-0.5">
                  <Check size={13} strokeWidth={2.5} />
                </span>
                <span className="text-neutral-900 text-sm leading-relaxed font-medium">
                  {row.us}
                </span>
              </div>
            </motion.div>
          ))}
        </div>
      </Section>

      {/* CLOSING CTA */}
      <Section className="bg-neutral-50">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Ready when you are
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
            Get a report you can<br />
            <span className="text-neutral-500">actually act on.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mb-10">
            Share your property details and we&apos;ll confirm scope and
            availability within one business day — often same day. Every
            inspection is conducted personally by a senior consultant.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book an inspection
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              Explore services
              <ArrowRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5"
              />
            </Link>
          </div>
        </motion.div>
      </Section>
    </div>
  );
}
