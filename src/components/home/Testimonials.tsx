"use client";

import { motion } from "framer-motion";
import { Star, Calendar, ArrowRight } from "lucide-react";
import Section from "@/components/Section";
import Link from "next/link";
import { GOOGLE_REVIEWS, REVIEW_STATS } from "@/lib/reviews";

// Show 3 featured reviews on the home page
const FEATURED_REVIEWS = [
  GOOGLE_REVIEWS[0],  // Adrian Miller
  GOOGLE_REVIEWS[4],  // Lee C
  GOOGLE_REVIEWS[7],  // May Graham
];

export default function Testimonials() {
  return (
    <Section>
      <div className="text-center mb-14">
        <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
          Google Reviews
        </p>
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
          {REVIEW_STATS.average} Stars from {REVIEW_STATS.total} Reviews
        </h2>
        <div className="flex items-center justify-center gap-2 mb-2">
          <div className="flex gap-0.5">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star
                key={i}
                size={18}
                className="text-amber-500 fill-amber-500"
              />
            ))}
          </div>
          <span className="text-sm text-muted">on Google</span>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {FEATURED_REVIEWS.map((review, i) => (
          <motion.div
            key={review.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: i * 0.1 }}
            className="glass-card rounded-2xl p-8 transition-transform hover:scale-[1.01]"
          >
            {/* Stars */}
            <div className="flex gap-0.5 mb-4">
              {Array.from({ length: review.rating }).map((_, j) => (
                <Star
                  key={j}
                  size={15}
                  className="text-amber-500 fill-amber-500"
                />
              ))}
            </div>

            <p className="text-foreground leading-relaxed mb-6">
              &ldquo;{review.text}&rdquo;
            </p>

            <div className="border-t border-border pt-4">
              <p className="font-semibold">{review.name}</p>
              <div className="flex items-center gap-3 text-sm text-muted mt-1">
                {review.service && <span>{review.service}</span>}
                {review.service && <span>&middot;</span>}
                <span className="flex items-center gap-1">
                  <Calendar size={11} /> {review.date}
                </span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="text-center mt-10">
        <Link
          href="/testimonials"
          className="inline-flex items-center gap-2 text-primary font-semibold hover:underline"
        >
          Read All {REVIEW_STATS.total} Reviews <ArrowRight size={16} />
        </Link>
      </div>
    </Section>
  );
}
