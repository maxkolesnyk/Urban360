"use client";

import Link from "next/link";
import { ArrowRight, Phone, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";
import Section from "@/components/Section";

export default function CTASection() {
  return (
    <Section dark>
      <div className="relative glass-card glass-shimmer rounded-3xl p-10 md:p-16 text-center overflow-hidden">
        {/* Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-black/[0.03] rounded-full blur-[100px]" />

        <div className="relative">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Ready to Make a Confident Property Decision?
          </h2>
          <p className="text-muted leading-relaxed max-w-xl mx-auto mb-8">
            Book your inspection today and get expert insight from
            Melbourne&apos;s trusted senior building consultant. Limited daily
            availability.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all hover:scale-[1.02]"
            >
              Book Your Inspection
              <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 glass-card border border-glass-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-glass-hover transition-all"
            >
              <Phone size={18} />
              Call Us Now
            </a>
            <Link
              href="/resources"
              className="inline-flex items-center gap-2 text-black/40 px-8 py-4 rounded-xl text-base font-medium hover:text-black hover:bg-black/[0.03] transition-all"
            >
              <FileText size={18} />
              Download Sample Report
            </Link>
          </div>
        </div>
      </div>
    </Section>
  );
}
