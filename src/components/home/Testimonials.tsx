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
        <div>
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Google Reviews
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            {REVIEW_STATS.average} Stars from {REVIEW_STATS.total} Reviews
          </h2>
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
