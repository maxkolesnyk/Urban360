"use client";

import {
  Award,
  Globe,
  BookOpen,
  Shield,
  UserCheck,
  ArrowUpRight,
  Compass,
  Scale,
  MessageSquareText,
  Microscope,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import Section from "@/components/Section";
import { SITE } from "@/lib/constants";

const QUALIFICATIONS = [
  {
    icon: <Globe size={18} strokeWidth={1.75} />,
    title: "Global Experience",
    text: "International construction expertise across diverse markets — informing a broader perspective on Melbourne's building landscape.",
  },
  {
    icon: <BookOpen size={18} strokeWidth={1.75} />,
    title: "Continuous Development",
    text: "Ongoing professional development and advanced qualifications keep us at the leading edge of industry standards.",
  },
  {
    icon: <Shield size={18} strokeWidth={1.75} />,
    title: "Regulatory Expertise",
    text: "Deep knowledge of the NCC, AS 4349.1, Victorian building regulations, and the compliance frameworks that matter.",
  },
  {
    icon: <Award size={18} strokeWidth={1.75} />,
    title: "Licensed & Insured",
    text: "Fully licensed in Victoria with comprehensive professional indemnity insurance covering every inspection.",
  },
  {
    icon: <UserCheck size={18} strokeWidth={1.75} />,
    title: "Independent & Unbiased",
    text: "No ties to real estate agents, builders, or developers. Every recommendation is completely impartial.",
  },
  {
    icon: <Microscope size={18} strokeWidth={1.75} />,
    title: "Diagnostic Toolkit",
    text: "Thermal, UV, and moisture diagnostics on every inspection — surfacing what the naked eye misses.",
  },
];

const VALUES = [
  {
    icon: <Scale size={18} strokeWidth={1.75} />,
    title: "Technical rigour",
    text: "Every finding is grounded in standards and evidence — no guesswork, no vague opinions.",
  },
  {
    icon: <Compass size={18} strokeWidth={1.75} />,
    title: "Genuine independence",
    text: "We're engaged by you. Not referral partners, not agents, not developers — nobody else.",
  },
  {
    icon: <MessageSquareText size={18} strokeWidth={1.75} />,
    title: "Plain-language advice",
    text: "We translate engineering detail into clear, confident guidance you can actually use.",
  },
  {
    icon: <UserCheck size={18} strokeWidth={1.75} />,
    title: "Senior consultants only",
    text: "The consultant who inspects your property is the one who writes your report and takes your call.",
  },
];

const MOTION_VIEWPORT = { once: true, margin: "-60px" } as const;
const EASE = [0.22, 1, 0.36, 1] as const;

export default function AboutPageClient() {
  return (
    <>
      {/* Hero — editorial dark */}
      <section className="relative min-h-[65vh] md:min-h-[72vh] flex items-end overflow-hidden bg-neutral-950">
        <Image
          src="/images/construction-aerial.webp"
          alt="Aerial view of construction site — Urban 360 inspection scope"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/55 to-black/20" />
        <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-32 w-full">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, ease: EASE }}
            className="flex items-center gap-3 mb-6"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/70">
              About Urban 360 Group
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.08, ease: EASE }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.035em] leading-[1.05] text-white max-w-4xl"
          >
            Expert insight.<br />
            <span className="text-white/55">Technical clarity.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2, ease: EASE }}
            className="mt-8 text-base md:text-lg text-white/70 leading-relaxed max-w-2xl"
          >
            Urban 360 is a team of qualified building experts delivering
            comprehensive, professional property assessments across Melbourne
            and Victoria — built on technical expertise with a personal touch,
            for real people making real decisions.
          </motion.p>
        </div>
      </section>

      {/* Our Story */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Our Story
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
            >
              Founded on a<br />
              <span className="text-neutral-500">simple principle.</span>
            </motion.h2>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.12, ease: EASE }}
            className="lg:col-span-7 space-y-5 text-base md:text-lg text-neutral-500 leading-relaxed"
          >
            <p>
              Urban 360 Building Inspections was founded on solid principles
              — and backed by the expertise to match.
            </p>
            <p>
              With 28 years of global construction experience, Mark combines
              deep market knowledge, building surveying, and property
              development insight to deliver the critical intelligence you
              need for confident property decisions.
            </p>
            <p>
              We work independently of agents, builders, and developers. Our
              commitment is to you — our client — always. This transparent
              approach is the foundation of our trust and credibility.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Founder / Team card */}
      <Section className="bg-neutral-50">
        <div className="max-w-2xl mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              The Team
            </span>
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
          >
            Qualified professionals.<br />
            <span className="text-neutral-500">Real experience.</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.6, ease: EASE }}
            className="lg:col-span-5"
          >
            <div className="relative h-full min-h-[480px] rounded-2xl overflow-hidden ring-1 ring-neutral-200/80">
              <Image
                src="/images/about-inspector.webp"
                alt={`${SITE.founder}, ${SITE.founderTitle}`}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 42vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/20 to-transparent" />
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <span className="inline-flex items-center gap-2 text-[10px] font-semibold uppercase tracking-[0.22em] text-white/80 bg-white/10 backdrop-blur-md rounded-full px-3 py-1.5 ring-1 ring-white/15 mb-4">
                  <span className="h-1.5 w-1.5 rounded-full bg-accent" />
                  Founder
                </span>
                <div className="text-white text-xl md:text-2xl font-semibold tracking-tight">
                  {SITE.founder}
                </div>
                <div className="text-white/70 text-sm mt-1">
                  {SITE.founderTitle}
                </div>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.6, delay: 0.1, ease: EASE }}
            className="lg:col-span-7 flex flex-col justify-center space-y-5 text-base md:text-lg text-neutral-500 leading-relaxed"
          >
            <p>
              Our inspection team brings years of experience spanning
              international construction projects and the Australian building
              industry — a rare breadth of knowledge that informs every
              assessment we deliver.
            </p>
            <p>
              We invest in continuous professional development, advancing
              formal qualifications and staying current with building
              standards, construction methodologies, and regulatory
              requirements.
            </p>
            <p>
              Our approach is defined by technical precision, transparent
              communication, and a commitment to helping clients understand
              not just what we find — but why it matters and what to do next.
            </p>
            <div className="pt-2 flex flex-wrap gap-3">
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
              >
                Talk to our team
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
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Values */}
      <Section>
        <div className="max-w-3xl mx-auto text-center mb-14 md:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.5, ease: EASE }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              What We Stand For
            </span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5"
          >
            Four principles<br />
            <span className="text-neutral-500">behind every inspection.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl mx-auto"
          >
            They&apos;re not bullet points on a pitch deck — they shape how
            each job is scoped, inspected, written, and explained.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-4 max-w-5xl mx-auto">
          {VALUES.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.5, delay: i * 0.07, ease: EASE }}
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
      </Section>

      {/* Qualifications grid */}
      <Section className="bg-neutral-50">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Qualifications
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900"
            >
              Why clients trust<br />
              <span className="text-neutral-500">Urban 360.</span>
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="max-w-md"
          >
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
              Credentials matter — but so does how they&apos;re used. Here&apos;s
              what sits behind every Urban 360 inspection.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 md:gap-4">
          {QUALIFICATIONS.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.5, delay: i * 0.06, ease: EASE }}
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

      {/* Closing CTA — dark editorial */}
      <Section variant="dark" className="dark-section">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <motion.div
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.5, ease: EASE }}
              className="flex items-center gap-3 mb-5"
            >
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Ready When You Are
              </span>
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={MOTION_VIEWPORT}
              transition={{ duration: 0.55, delay: 0.08, ease: EASE }}
              className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-white"
            >
              Book an inspection.
            </motion.h2>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={MOTION_VIEWPORT}
            transition={{ duration: 0.55, delay: 0.18, ease: EASE }}
            className="lg:col-span-5 flex flex-col sm:flex-row lg:flex-col xl:flex-row gap-3 lg:items-start"
          >
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-accent text-black px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white hover:text-black transition-all"
            >
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center justify-center gap-2 bg-white/10 ring-1 ring-white/15 backdrop-blur-sm text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-white/15 hover:ring-white/30 transition-all"
            >
              Explore services
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </motion.div>
        </div>
      </Section>
    </>
  );
}
