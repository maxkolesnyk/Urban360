"use client";

import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";

interface SplitPanelProps {
  image: string;
  imageAlt: string;
  imagePosition?: "left" | "right";
  aspectRatio?: string;
  children: React.ReactNode;
  className?: string;
}

export default function SplitPanel({
  image,
  imageAlt,
  imagePosition = "right",
  aspectRatio = "aspect-[4/5]",
  children,
  className,
}: SplitPanelProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const imageBlock = (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={isInView ? { opacity: 1, scale: 1 } : {}}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className={cn("relative rounded-2xl overflow-hidden", aspectRatio)}
    >
      <Image
        src={image}
        alt={imageAlt}
        fill
        className="object-cover"
        sizes="(max-width: 1024px) 100vw, 50vw"
      />
    </motion.div>
  );

  const textBlock = (
    <motion.div
      initial={{ opacity: 0, x: imagePosition === "right" ? -30 : 30 }}
      animate={isInView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
      className="flex flex-col justify-center"
    >
      {children}
    </motion.div>
  );

  return (
    <div
      ref={ref}
      className={cn(
        "grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center",
        className
      )}
    >
      {imagePosition === "left" ? (
        <>
          {imageBlock}
          {textBlock}
        </>
      ) : (
        <>
          {textBlock}
          {imageBlock}
        </>
      )}
    </div>
  );
}
