"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BookOpen,
  CheckSquare,
  Download,
  FileText,
  PlayCircle,
  Phone,
} from "lucide-react";
import Section from "@/components/Section";
import NewsletterForm from "@/components/NewsletterForm";
import { SITE } from "@/lib/constants";
import type { Resource } from "@/lib/types/database";

interface Props {
  resources: Resource[];
}

function iconFor(resource: Resource) {
  const type = (resource.resource_type || "").toLowerCase();
  if (type.includes("checklist")) {
    return <CheckSquare size={18} strokeWidth={1.75} />;
  }
  if (type.includes("video") || type.includes("webinar")) {
    return <PlayCircle size={18} strokeWidth={1.75} />;
  }
  if (type.includes("report")) {
    return <FileText size={18} strokeWidth={1.75} />;
  }
  return <BookOpen size={18} strokeWidth={1.75} />;
}

function actionLabelFor(resource: Resource) {
  const type = (resource.resource_type || "").toLowerCase();
  if (type.includes("video") || type.includes("webinar")) return "Watch";
  if (resource.file_url) return "Download";
  return "Read";
}

export default function ResourcesIndexClient({ resources }: Props) {
  const guides = resources.filter((r) => r.category === "guide");
  const reports = resources.filter((r) => r.category === "report");

  return (
    <div className="pt-[72px]">
      {/* ── 1. Page hero ── */}
      <Section>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Resources
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
          >
            Guides, checklists,<br />
            <span className="text-neutral-500">and tools.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl"
          >
            Free downloads and educational material to help you navigate the
            building inspection process, understand what to look for, and make
            confident property decisions.
          </motion.p>
        </div>
      </Section>

      {/* ── 2. Guides grid ── */}
      <Section className="bg-neutral-50">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Guides &amp; Checklists
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
              Practical material,<br />
              <span className="text-neutral-500">free to download.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mt-6 max-w-xl">
              Everything you need to understand the process — from what an
              inspection covers, to what to check on walkthroughs, to how to
              read a condition report.
            </p>
          </div>
          <Link
            href="/contact"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
          >
            Have a question? Talk to us
            <ArrowUpRight
              size={16}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </Link>
        </div>

        {guides.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {guides.map((guide, i) => {
              const hasThumb = !!guide.thumbnail_url;
              const href = guide.file_url ?? "#";
              const isExternal = !!guide.file_url;
              const CardInner = (
                <>
                  {hasThumb && (
                    <div className="relative aspect-[16/10] w-full overflow-hidden">
                      <Image
                        src={guide.thumbnail_url as string}
                        alt={guide.title}
                        fill
                        className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                      <span className="absolute top-3 left-3 flex items-center gap-1.5 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1">
                        {iconFor(guide)}
                        {guide.resource_type}
                      </span>
                    </div>
                  )}
                  <div className="flex flex-col flex-1 p-5 md:p-6">
                    {!hasThumb && (
                      <div className="flex items-center gap-3 mb-5">
                        <span className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                          {iconFor(guide)}
                        </span>
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                          {guide.resource_type}
                        </span>
                      </div>
                    )}
                    <h3 className="font-semibold text-neutral-900 text-[15px] md:text-base leading-snug tracking-tight mb-2 line-clamp-2">
                      {guide.title}
                    </h3>
                    <p className="text-[13px] md:text-sm text-neutral-500 leading-relaxed line-clamp-3 mb-4">
                      {guide.description}
                    </p>
                    <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                      {guide.page_count ? (
                        <span className="text-[11px] text-neutral-500">
                          {guide.page_count}
                        </span>
                      ) : (
                        <span />
                      )}
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900">
                        {actionLabelFor(guide)}
                        <ArrowUpRight
                          size={13}
                          className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                        />
                      </span>
                    </div>
                  </div>
                </>
              );

              return (
                <motion.div
                  key={guide.id}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{
                    duration: 0.55,
                    delay: i * 0.05,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                >
                  {isExternal ? (
                    <a
                      href={href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                    >
                      {CardInner}
                    </a>
                  ) : (
                    <div className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 transition-all duration-300 hover:-translate-y-1 hover:ring-neutral-900/40 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]">
                      {CardInner}
                    </div>
                  )}
                </motion.div>
              );
            })}
          </div>
        ) : (
          <div className="max-w-xl mx-auto text-center py-12">
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
              Guides are on the way — subscribe below and we&apos;ll notify you
              when they&apos;re live.
            </p>
          </div>
        )}
      </Section>

      {/* ── 3. Reports (if any) ── */}
      {reports.length > 0 && (
        <Section>
          <div className="max-w-2xl mb-12 md:mb-14">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Sample Reports
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
              See what you&apos;ll<br />
              <span className="text-neutral-500">actually get.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed mt-6 max-w-xl">
              Redacted sample reports so you can see the structure, photography,
              and level of detail we deliver on every inspection.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {reports.map((report, i) => (
              <motion.a
                key={report.id}
                href={report.file_url || "#"}
                target={report.file_url ? "_blank" : undefined}
                rel={report.file_url ? "noopener noreferrer" : undefined}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: i * 0.05,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="group relative flex items-start gap-5 p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
              >
                <div className="flex items-center justify-center w-11 h-11 rounded-xl bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                  {iconFor(report)}
                </div>
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1.5">
                    <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                      {report.resource_type}
                    </span>
                    {report.page_count && (
                      <>
                        <span className="h-1 w-1 rounded-full bg-neutral-300" />
                        <span className="text-[10px] font-semibold uppercase tracking-[0.18em] text-neutral-500">
                          {report.page_count}
                        </span>
                      </>
                    )}
                  </div>
                  <h3 className="font-semibold text-neutral-900 text-[15px] md:text-base tracking-tight mb-2">
                    {report.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-neutral-500 leading-relaxed mb-4">
                    {report.description}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-xs font-semibold text-neutral-900">
                    <Download size={13} />
                    {actionLabelFor(report)}
                    <ArrowUpRight
                      size={13}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </span>
                </div>
              </motion.a>
            ))}
          </div>
        </Section>
      )}

      {/* ── 4. Newsletter ── */}
      <Section className="bg-neutral-50">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Get New Resources
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
            New guides,<br />
            <span className="text-neutral-500">straight to your inbox.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto"
          >
            Subscribe and we&apos;ll send you new checklists and field notes
            when they&apos;re published. No spam, unsubscribe any time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </Section>

      {/* ── 5. Closing CTA ── */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Ready For The Real Thing?
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5">
            Beyond the reading —<br />
            <span className="text-neutral-500">book a real inspection.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Guides help you prepare. A senior consultant on-site is what
            actually answers the question: is this property a good buy?
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book an inspection
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              <Phone size={16} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
