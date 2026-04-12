"use client";

import { Check, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

const DIFFERENTIATORS = [
  "Direct access to a senior building consultant — not a call centre",
  "Risk-prioritised reporting, not generic checklists",
  "Advanced thermal and UV diagnostic technology",
  "Clear, plain-language advice for confident decisions",
];

export default function WhyUrban360() {
  return (
    <Section>
      <div className="max-w-2xl">
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
          Why Choose Us
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Expert Insight When<br />It Matters Most
        </h2>
        <p className="text-muted leading-relaxed mb-8">
          Urban 360 is not a checklist inspector — we&apos;re your expert partner
          in uncovering property condition insights with clarity, detail, and
          confidence.
        </p>

        <div className="space-y-3 mb-8">
          {DIFFERENTIATORS.map((item) => (
            <div key={item} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                <Check size={14} className="text-foreground" />
              </div>
              <p className="text-foreground leading-relaxed">{item}</p>
            </div>
          ))}
        </div>

        <Link
          href="/why-urban-360"
          className="inline-flex items-center gap-2 text-sm font-semibold text-foreground hover:text-accent transition-colors"
        >
          Learn more about our approach <ArrowRight size={14} />
        </Link>
      </div>
    </Section>
  );
}
