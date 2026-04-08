"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  variant?: "default" | "dark" | "accent";
  /** @deprecated Use variant="dark" instead */
  dark?: boolean;
  noPadding?: boolean;
}

export default function Section({
  children,
  className,
  id,
  variant,
  dark,
  noPadding,
}: SectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  const resolvedVariant = variant ?? (dark ? "dark" : "default");

  return (
    <motion.section
      id={id}
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className={cn(
        !noPadding && "px-6 py-20 md:py-28",
        resolvedVariant === "dark" && "bg-neutral-950 text-white",
        resolvedVariant === "accent" && "bg-accent/5",
        className
      )}
    >
      <div className={cn("mx-auto max-w-7xl", noPadding && "px-6")}>
        {children}
      </div>
    </motion.section>
  );
}
