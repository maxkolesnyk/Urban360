"use client";

import { motion } from "framer-motion";
import { Star, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import { GOOGLE_REVIEWS, REVIEW_STATS } from "@/lib/reviews";

// Show 3 reviews (skip index 0 which is the featured quote)
const REVIEWS = [
  GOOGLE_REVIEWS[1], // David James
  GOOGLE_REVIEWS[4], // Lee C
  GOOGLE_REVIEWS[7], // May Graham
];

export default function Testimonials() {
  return (
    <Section>
      <div className="flex items-end justify-between mb-10 flex-wrap gap-4">
        <div className="flex items-center gap-4">
          <svg viewBox="0 0 24 24" className="w-10 h-10 shrink-0" aria-hidden="true">
            <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 0 1-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z" fill="#4285F4"/>
            <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
            <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
            <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
          </svg>
          <div>
            <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-1">
              Verified Google Reviews
            </p>
            <div className="flex items-center gap-1.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} size={16} className="text-amber-500 fill-amber-500" />
              ))}
              <span className="text-sm text-muted ml-1">{REVIEW_STATS.total} reviews</span>
            </div>
          </div>
        </div>
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
        >
          Read all reviews <ArrowRight size={14} />
        </Link>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {REVIEWS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="border-l-4 border-accent bg-surface rounded-r-xl p-6"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star
                  key={j}
                  size={14}
                  className="text-amber-500 fill-amber-500"
                />
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-5 text-sm">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="text-sm">
              <p className="font-semibold">{review.name}</p>
              <p className="text-muted text-xs mt-0.5">
                {review.service} &middot; {review.date}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
