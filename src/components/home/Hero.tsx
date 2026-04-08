"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight, Phone, Star } from "lucide-react";
import { SITE } from "@/lib/constants";
import { REVIEW_STATS } from "@/lib/reviews";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const pillRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(pillRef.current, {
        opacity: 0,
        y: -20,
        duration: 0.6,
      })
        .from(
          headlineRef.current,
          {
            opacity: 0,
            y: 60,
            duration: 0.8,
          },
          "-=0.3"
        )
        .from(
          subtextRef.current,
          {
            opacity: 0,
            y: 40,
            duration: 0.6,
          },
          "-=0.4"
        )
        .from(
          ctaRef.current,
          {
            opacity: 0,
            y: 30,
            duration: 0.6,
          },
          "-=0.3"
        );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-end overflow-hidden bg-neutral-950"
    >
      {/* Background image */}
      <Image
        src="/images/services-hero.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        quality={90}
      />
      {/* Gradient overlays */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />

      <div className="relative mx-auto max-w-7xl px-6 pb-16 md:pb-24 pt-40 w-full">
        <div className="max-w-3xl">
          {/* Reviews pill */}
          <div
            ref={pillRef}
            className="inline-flex items-center gap-3 bg-white/10 backdrop-blur-md rounded-full px-5 py-2.5 mb-8 border border-white/15"
          >
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-sm font-medium text-white">
              {REVIEW_STATS.average} from {REVIEW_STATS.total} Google Reviews
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.1] mb-6 text-white"
          >
            Inspect to{" "}
            <span className="text-accent">Protect</span>
          </h1>

          {/* Subtext */}
          <div ref={subtextRef} className="mb-10">
            <p className="text-base md:text-lg text-white/70 max-w-2xl leading-relaxed">
              Our inspections give you a clear, accurate summary of the
              property&apos;s condition — identifying defects, structural issues,
              and safety concerns, with straightforward advice on the repairs and
              maintenance you need to prioritise and plan.
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-3">
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
            >
              Book Your Inspection
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/15 transition-all"
            >
              View Services
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 text-white/60 px-6 py-4 rounded-xl text-base font-medium hover:text-white hover:bg-white/5 transition-all"
            >
              <Phone size={18} />
              {SITE.phone}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
