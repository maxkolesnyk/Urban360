"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

interface AreaCardProps {
  index: number;
  name: string;
  blurb: string;
  icon: React.ReactNode;
  shown: string[];
  remaining: number;
}

export default function AreaCard({
  index,
  name,
  blurb,
  icon,
  shown,
  remaining,
}: AreaCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{
        duration: 0.55,
        delay: (index % 6) * 0.07,
        ease: [0.22, 1, 0.36, 1],
      }}
      className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
    >
      <div className="flex items-start justify-between mb-5">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
          {icon}
        </div>
        <span className="text-[10px] font-semibold uppercase tracking-[0.22em] text-neutral-400">
          {String(index + 1).padStart(2, "0")}
        </span>
      </div>

      <h3 className="font-semibold text-neutral-900 text-lg tracking-tight mb-2">
        {name}
      </h3>
      <p className="text-neutral-500 text-sm leading-relaxed mb-5">{blurb}</p>

      <div className="flex flex-wrap gap-1.5">
        {shown.map((suburb) => (
          <span
            key={suburb}
            className="text-[11px] font-medium bg-neutral-50 text-neutral-600 px-2.5 py-1 rounded-full ring-1 ring-neutral-200/60"
          >
            {suburb}
          </span>
        ))}
        {remaining > 0 && (
          <Link
            href="#suburb-search"
            className="inline-flex items-center gap-1 text-[11px] font-semibold bg-neutral-900 text-white px-2.5 py-1 rounded-full hover:bg-accent hover:text-black transition-colors"
          >
            +{remaining} more
            <ArrowUpRight size={10} strokeWidth={2.25} />
          </Link>
        )}
      </div>
    </motion.div>
  );
}
