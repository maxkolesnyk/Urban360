"use client";

import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTASection() {
  return (
    <section className="relative bg-neutral-950 text-white overflow-hidden">
      {/* Background image */}
      <Image
        src="/images/construction-workers.webp"
        alt=""
        fill
        className="object-cover opacity-20"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-neutral-950/90 to-neutral-950/70" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
          Ready to Make a Confident Property Decision?
        </h2>
        <p className="text-white/60 leading-relaxed max-w-xl mx-auto mb-8">
          Book your inspection today and get expert insight from
          Melbourne&apos;s trusted building inspection team. Limited daily
          availability.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Book Your Inspection
            <ArrowRight size={18} />
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/15 transition-all"
          >
            <Phone size={18} />
            Call Us Now
          </a>
        </div>
      </div>
    </section>
  );
}
