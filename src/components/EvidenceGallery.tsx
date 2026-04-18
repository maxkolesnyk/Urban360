"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
  tag?: string;
}

interface EvidenceGalleryProps {
  items: GalleryItem[];
  heading?: string;
  subheading?: string;
}

export default function EvidenceGallery({
  items,
  heading = "What We Find",
  subheading = "From Our Inspections",
}: EvidenceGalleryProps) {
  const ref = useRef(null);
  const scrollerRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  useEffect(() => {
    const el = scrollerRef.current;
    if (!el) return;
    const update = () => {
      setCanScrollLeft(el.scrollLeft > 4);
      setCanScrollRight(el.scrollLeft + el.clientWidth < el.scrollWidth - 4);
    };
    update();
    el.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    return () => {
      el.removeEventListener("scroll", update);
      window.removeEventListener("resize", update);
    };
  }, []);

  const scroll = (dir: "left" | "right") => {
    const el = scrollerRef.current;
    if (!el) return;
    const amount = Math.round(el.clientWidth * 0.7);
    el.scrollBy({ left: dir === "left" ? -amount : amount, behavior: "smooth" });
  };

  return (
    <div ref={ref}>
      <div className="mb-10 md:mb-12">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/50">
                {subheading}
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-white">
              {heading}
            </h2>
          </div>
          <div className="hidden md:flex items-center gap-2">
            <button
              type="button"
              aria-label="Scroll left"
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="w-11 h-11 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/10 transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ArrowLeft size={18} />
            </button>
            <button
              type="button"
              aria-label="Scroll right"
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="w-11 h-11 rounded-full border border-white/15 text-white/80 hover:text-white hover:bg-white/10 transition disabled:opacity-30 disabled:cursor-not-allowed flex items-center justify-center"
            >
              <ArrowRight size={18} />
            </button>
          </div>
        </div>
      </div>

      <div className="relative">
        <div
          ref={scrollerRef}
          className="gallery-scroll flex gap-4 md:gap-5 pb-4"
        >
          {items.map((item, i) => (
            <motion.div
              key={item.src}
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.55, delay: i * 0.07, ease: [0.22, 1, 0.36, 1] }}
              className="w-72 md:w-80 lg:w-[22rem] shrink-0"
            >
              <div className="relative aspect-[3/4] rounded-2xl overflow-hidden group ring-1 ring-white/10">
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.05]"
                  sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 352px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                {item.tag && (
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white bg-white/10 backdrop-blur-md rounded-full px-2.5 py-1 ring-1 ring-white/20">
                    {item.tag}
                  </span>
                )}
                <span className="absolute top-3 right-3 text-[10px] font-semibold tabular-nums text-white/80 bg-black/40 backdrop-blur-sm rounded-full px-2.5 py-1">
                  {String(i + 1).padStart(2, "0")} / {String(items.length).padStart(2, "0")}
                </span>
              </div>
              <p className="mt-4 text-sm text-white/70 leading-relaxed">
                {item.caption}
              </p>
            </motion.div>
          ))}
          <div className="shrink-0 w-2" aria-hidden />
        </div>
        <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-neutral-950 to-transparent md:w-24" />
      </div>
    </div>
  );
}
