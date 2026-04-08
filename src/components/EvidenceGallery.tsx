"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Camera } from "lucide-react";

interface GalleryItem {
  src: string;
  alt: string;
  caption: string;
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
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <div ref={ref}>
      <div className="mb-8 px-6 max-w-7xl mx-auto">
        <div className="flex items-center gap-3 mb-2">
          <Camera size={18} className="text-white/50" />
          <p className="text-sm font-semibold text-white/50 uppercase tracking-widest">
            {subheading}
          </p>
        </div>
        <h2 className="text-2xl md:text-3xl font-bold">{heading}</h2>
      </div>

      <div className="gallery-scroll flex gap-4 px-6 pb-4">
        {items.map((item, i) => (
          <motion.div
            key={item.src}
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: i * 0.08 }}
            className="w-72 md:w-80 lg:w-96"
          >
            <div className="relative aspect-[3/4] rounded-xl overflow-hidden group">
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 288px, (max-width: 1024px) 320px, 384px"
              />
            </div>
            <p className="mt-3 text-sm text-white/50 leading-relaxed">
              {item.caption}
            </p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
