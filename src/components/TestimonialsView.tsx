"use client";

import { useMemo, useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  Star,
  Quote,
  ArrowUpRight,
  ExternalLink,
  Calendar,
  BadgeCheck,
} from "lucide-react";
import Section from "@/components/Section";
import { GOOGLE_REVIEWS, REVIEW_STATS } from "@/lib/reviews";

const FEATURED = GOOGLE_REVIEWS[0];

// All reviews except the featured one
const REST = GOOGLE_REVIEWS.slice(1);

function getServiceGroups() {
  const counts = new Map<string, number>();
  for (const r of GOOGLE_REVIEWS) {
    if (r.service) counts.set(r.service, (counts.get(r.service) ?? 0) + 1);
  }
  return Array.from(counts.entries())
    .sort((a, b) => b[1] - a[1])
    .map(([name, count]) => ({ name, count }));
}

export default function TestimonialsView() {
  const [filter, setFilter] = useState<string | null>(null);
  const services = useMemo(() => getServiceGroups(), []);

  const filtered = useMemo(
    () => (filter ? REST.filter((r) => r.service === filter) : REST),
    [filter]
  );

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-end">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Testimonials
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
              What Melbourne&apos;s<br />
              <span className="text-neutral-500">saying about us.</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl">
              {REVIEW_STATS.total} verified five-star Google reviews from
              buyers, sellers, and investors across metropolitan Melbourne.
              Every one of them reflects how we work — senior-consultant
              attention, thorough reporting, and advice you can act on.
            </p>
          </div>

          {/* Stat panel */}
          <div className="lg:col-span-5">
            <div className="relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80">
              <div className="flex items-start justify-between gap-4 mb-6">
                <div>
                  <div className="flex items-baseline gap-2 mb-1">
                    <span className="text-5xl md:text-6xl font-semibold tracking-[-0.025em] text-neutral-900 leading-none">
                      {REVIEW_STATS.average.toFixed(1)}
                    </span>
                    <span className="text-lg font-semibold text-neutral-400">
                      / 5.0
                    </span>
                  </div>
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        size={16}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                </div>
                <svg viewBox="0 0 24 24" className="w-10 h-10" aria-hidden>
                  <path
                    d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                    fill="#4285F4"
                  />
                  <path
                    d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                    fill="#34A853"
                  />
                  <path
                    d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                    fill="#FBBC05"
                  />
                  <path
                    d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                    fill="#EA4335"
                  />
                </svg>
              </div>
              <div className="h-px w-full bg-neutral-100 mb-5" />
              <div className="grid grid-cols-3 gap-4">
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {REVIEW_STATS.total}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">
                    Total reviews
                  </p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                    {REVIEW_STATS.fiveStarCount}
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">Five-star</p>
                </div>
                <div>
                  <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                    100%
                  </p>
                  <p className="text-xs text-neutral-500 mt-0.5">Verified</p>
                </div>
              </div>
              <div className="mt-5 inline-flex items-center gap-1.5 text-xs font-semibold tracking-tight text-neutral-900">
                <BadgeCheck size={14} className="text-accent" />
                Sourced from Google
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Featured review — editorial pullquote */}
      <Section variant="dark" className="dark-section">
        <div className="max-w-5xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="flex items-center gap-3 mb-8">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
                Featured review
              </span>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-12 items-start">
              <div className="md:col-span-2">
                <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-accent text-black">
                  <Quote size={22} strokeWidth={2} />
                </div>
              </div>
              <div className="md:col-span-10">
                <blockquote className="text-[1.75rem] md:text-[2.25rem] lg:text-[2.5rem] font-semibold tracking-[-0.02em] leading-[1.15] text-white mb-8">
                  &ldquo;{FEATURED.text}&rdquo;
                </blockquote>
                <div className="flex flex-wrap items-center gap-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: FEATURED.rating }).map((_, i) => (
                      <Star
                        key={i}
                        size={15}
                        className="fill-amber-400 text-amber-400"
                      />
                    ))}
                  </div>
                  <span className="h-4 w-px bg-white/20" />
                  <p className="text-sm font-semibold tracking-tight text-white">
                    {FEATURED.name}
                  </p>
                  {FEATURED.service && (
                    <>
                      <span className="h-4 w-px bg-white/20" />
                      <p className="text-sm text-white/60">{FEATURED.service}</p>
                    </>
                  )}
                  {FEATURED.date && (
                    <>
                      <span className="h-4 w-px bg-white/20" />
                      <p className="text-sm text-white/60 inline-flex items-center gap-1.5">
                        <Calendar size={12} /> {FEATURED.date}
                      </p>
                    </>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Filters + grid */}
      <Section>
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10 md:mb-14">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Every review
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
              Read them all —<br />
              <span className="text-neutral-500">filter by service.</span>
            </h2>
          </div>
          <a
            href="https://www.google.com/search?q=urban+360+building+inspections#lrd=0x2322d91bf85dfccf:0xf96a1cc65aed04db,1"
            target="_blank"
            rel="noopener noreferrer"
            className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
          >
            <ExternalLink size={14} />
            View on Google
            <ArrowUpRight
              size={15}
              className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            />
          </a>
        </div>

        {/* Filter pills */}
        <div className="flex flex-wrap gap-2 mb-10 md:mb-12">
          <button
            type="button"
            onClick={() => setFilter(null)}
            className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${
              filter === null
                ? "bg-neutral-900 text-white ring-1 ring-neutral-900"
                : "bg-white ring-1 ring-neutral-200 text-neutral-900 hover:ring-neutral-900 hover:-translate-y-0.5"
            }`}
          >
            All reviews
            <span
              className={
                filter === null ? "text-white/60" : "text-neutral-400"
              }
            >
              {REST.length}
            </span>
          </button>
          {services.map((s) => (
            <button
              key={s.name}
              type="button"
              onClick={() => setFilter(s.name)}
              className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold tracking-tight transition-all ${
                filter === s.name
                  ? "bg-neutral-900 text-white ring-1 ring-neutral-900"
                  : "bg-white ring-1 ring-neutral-200 text-neutral-900 hover:ring-neutral-900 hover:-translate-y-0.5"
              }`}
            >
              {s.name}
              <span
                className={
                  filter === s.name ? "text-white/60" : "text-neutral-400"
                }
              >
                {s.count}
              </span>
            </button>
          ))}
        </div>

        {/* Masonry-ish grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {filtered.map((review, i) => (
            <motion.article
              key={`${review.name}-${i}`}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{
                duration: 0.55,
                delay: (i % 6) * 0.06,
                ease: [0.22, 1, 0.36, 1],
              }}
              className="group relative flex flex-col p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
            >
              <div className="flex items-center justify-between mb-5">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                  <Quote size={16} strokeWidth={2} />
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: review.rating }).map((_, j) => (
                    <Star
                      key={j}
                      size={13}
                      className="fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {review.text ? (
                <p className="text-[15px] text-neutral-700 leading-relaxed mb-6 flex-1">
                  {review.text}
                </p>
              ) : (
                <p className="text-[15px] text-neutral-400 italic leading-relaxed mb-6 flex-1">
                  Five-star rating (no written review).
                </p>
              )}

              <div className="pt-5 border-t border-neutral-100">
                <p className="font-semibold tracking-tight text-neutral-900 text-[15px]">
                  {review.name}
                  {review.localGuide && (
                    <span className="ml-2 inline-flex items-center gap-1 text-[10px] font-semibold uppercase tracking-[0.18em] text-accent">
                      <BadgeCheck size={11} />
                      Local guide
                    </span>
                  )}
                </p>
                <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 mt-1.5">
                  {review.service && <span>{review.service}</span>}
                  {review.service && review.date && (
                    <span className="text-neutral-300">·</span>
                  )}
                  {review.date && (
                    <span className="inline-flex items-center gap-1">
                      <Calendar size={10} /> {review.date}
                    </span>
                  )}
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </Section>

      {/* Bottom CTA */}
      <Section className="bg-neutral-50">
        <div className="max-w-4xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Your turn
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5">
            Book the same<br />
            <span className="text-neutral-500">expert inspection.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto mb-10">
            Every review above came from an inspection booked in under a
            minute. Tell us about your property and we&apos;ll confirm scope
            and scheduling today.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book your inspection
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href="https://www.google.com/search?q=urban+360+building+inspections#lrd=0x2322d91bf85dfccf:0xf96a1cc65aed04db,1"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              <ExternalLink size={14} />
              View all on Google
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
