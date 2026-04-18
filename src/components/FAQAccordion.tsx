"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus } from "lucide-react";
import type { FAQItem } from "@/lib/faq";

export default function FAQAccordion({ items }: { items: FAQItem[] }) {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="space-y-3">
      {items.map((item, i) => {
        const isOpen = openIndex === i;
        return (
          <motion.div
            key={item.q}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{
              duration: 0.55,
              delay: i * 0.07,
              ease: [0.22, 1, 0.36, 1],
            }}
            className={`group relative bg-white rounded-2xl ring-1 transition-all duration-300 ${
              isOpen
                ? "ring-neutral-900/30 shadow-[0_12px_40px_-16px_rgba(0,0,0,0.12)]"
                : "ring-neutral-200/80 hover:ring-neutral-900/20 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
            }`}
          >
            <button
              type="button"
              onClick={() => setOpenIndex(isOpen ? null : i)}
              aria-expanded={isOpen}
              className="w-full flex items-start justify-between gap-6 text-left px-6 md:px-7 py-5 md:py-6"
            >
              <span
                className={`text-[15px] md:text-base font-semibold tracking-tight leading-snug transition-colors ${
                  isOpen ? "text-neutral-900" : "text-neutral-900"
                }`}
              >
                {item.q}
              </span>
              <span
                className={`shrink-0 flex items-center justify-center w-8 h-8 rounded-lg transition-all duration-300 ${
                  isOpen
                    ? "bg-accent text-black rotate-45"
                    : "bg-neutral-900 text-white group-hover:bg-accent group-hover:text-black"
                }`}
              >
                <Plus size={14} strokeWidth={2.25} />
              </span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.div
                  key="content"
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                  className="overflow-hidden"
                >
                  <div className="px-6 md:px-7 pb-6 md:pb-7 -mt-1">
                    <div className="h-px w-full bg-neutral-100 mb-5" />
                    <p className="text-[15px] md:text-base text-neutral-500 leading-relaxed">
                      {item.a}
                    </p>
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        );
      })}
    </div>
  );
}
