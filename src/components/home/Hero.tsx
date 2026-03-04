"use client";

import { useRef, useEffect } from "react";
import Link from "next/link";
import gsap from "gsap";
import Image from "next/image";
import { ArrowRight, Phone, Shield } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLHeadingElement>(null);
  const subtextRef = useRef<HTMLDivElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

      tl.from(badgeRef.current, {
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
      className="relative min-h-screen flex items-center overflow-hidden bg-background"
    >
      {/* Background blueprint with gradient opacity mask */}
      <Image
        src="/images/hero-bg.webp"
        alt=""
        fill
        priority
        className="object-cover"
        sizes="100vw"
        style={{
          maskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.10) 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.50) 40%, rgba(0,0,0,0.50) 60%, rgba(0,0,0,0.10) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-background/80 via-background/50 to-background/30" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-background" />

      {/* Subtle glow orbs */}
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-black/[0.03] rounded-full blur-[150px]" />
      <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-black/[0.02] rounded-full blur-[150px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-32">
        <div className="max-w-4xl">
          {/* Badge */}
          <div
            ref={badgeRef}
            className="inline-flex items-center gap-2 glass-card rounded-full px-4 py-1.5 mb-8 shadow-[inset_0_1px_2px_rgba(0,0,0,0.06)] border border-black/[0.08]"
          >
            <Shield size={14} className="text-black/60" />
            <span className="text-xs font-medium text-black/60">
              AS 4349.1 Compliant &middot; Licensed Victorian Building Surveyor
            </span>
          </div>

          {/* Headline */}
          <h1
            ref={headlineRef}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-[-0.04em] leading-[1.1] mb-6"
          >
            Inspect to{" "}
            <span className="text-muted">Protect</span>
            <br />
            <span className="text-muted text-3xl sm:text-4xl md:text-5xl lg:text-5xl font-light">
              Clear Reporting. Confident Property Decisions.
            </span>
          </h1>

          {/* Subtext */}
          <div ref={subtextRef} className="mb-10">
            <p className="text-lg md:text-xl text-muted max-w-2xl leading-relaxed">
              Melbourne&apos;s expert building inspections — beyond the
              checklist. Technical clarity, risk-focused reporting, and decisive
              advice from Senior Building Consultant{" "}
              <span className="text-foreground font-medium">
                {SITE.founder}
              </span>
              .
            </p>
          </div>

          {/* CTAs */}
          <div ref={ctaRef} className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all hover:scale-[1.02] glass-shimmer"
            >
              Book Your Inspection
              <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center justify-center gap-2 glass-card border border-glass-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-glass-hover transition-all"
            >
              View Service Details
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 text-muted px-8 py-4 rounded-xl text-base font-medium hover:text-black hover:bg-black/[0.03] transition-all"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
