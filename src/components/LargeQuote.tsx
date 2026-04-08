"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Star } from "lucide-react";

interface LargeQuoteProps {
  quote: string;
  author: string;
  service?: string;
  date?: string;
  stars?: number;
}

export default function LargeQuote({
  quote,
  author,
  service,
  date,
  stars = 5,
}: LargeQuoteProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref} className="max-w-4xl mx-auto text-center">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7 }}
      >
        {/* Stars */}
        <div className="flex justify-center gap-1 mb-8">
          {Array.from({ length: stars }).map((_, i) => (
            <Star
              key={i}
              size={20}
              className="fill-amber-400 text-amber-400"
            />
          ))}
        </div>

        {/* Quote */}
        <blockquote className="quote-xl text-white/90 mb-8">
          &ldquo;{quote}&rdquo;
        </blockquote>

        {/* Attribution */}
        <div className="text-white/50 text-sm">
          <span className="font-semibold text-white/70">{author}</span>
          {service && <span className="mx-2">&middot;</span>}
          {service && <span>{service}</span>}
          {date && <span className="mx-2">&middot;</span>}
          {date && <span>{date}</span>}
        </div>
      </motion.div>
    </div>
  );
}
