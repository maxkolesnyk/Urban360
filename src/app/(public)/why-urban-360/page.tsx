import type { Metadata } from "next";
import {
  UserCheck,
  Target,
  FileText,
  Globe,
  HeartHandshake,
  TrendingUp,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Why Choose Urban 360",
  description:
    "Urban 360 is not a marketplace, franchise, or checklist inspector. Discover what makes our building inspections different — direct expert engagement, risk-focused reporting, and technical depth.",
};

const PILLARS = [
  {
    icon: <UserCheck size={28} />,
    title: "Direct Expert Engagement",
    description:
      "You're not assigned a random inspector from a pool. You work directly with a senior building consultant who personally conducts and delivers every inspection — and is available before, during, and after.",
  },
  {
    icon: <Target size={28} />,
    title: "Risk-Focused Reporting",
    description:
      "Our reports don't just list defects. We categorise and prioritise findings by severity, explain their implications, and give you clear, actionable advice for negotiation and decision-making.",
  },
  {
    icon: <FileText size={28} />,
    title: "Technical Depth, Not Checklists",
    description:
      "Every inspection is grounded in Australian standards, NCC requirements, and real-world construction knowledge — not a generic tick-box exercise.",
  },
  {
    icon: <Globe size={28} />,
    title: "Global + Local Perspective",
    description:
      "International construction experience combined with deep understanding of Melbourne's building typologies, common defects, and regulatory landscape.",
  },
  {
    icon: <HeartHandshake size={28} />,
    title: "Genuine Client Care",
    description:
      "We take the time to walk you through findings, answer every question, and ensure you leave with clarity and confidence — not confusion.",
  },
  {
    icon: <TrendingUp size={28} />,
    title: "Future Risk Assessment",
    description:
      "Beyond current conditions, we assess and communicate potential future risks — helping you understand not just what's there, but what's coming.",
  },
];

export default function WhyUrban360Page() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Why Choose Urban 360
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Technical Clarity,{" "}
            <span className="text-muted">Not Checklists</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Urban 360 is not a checklist inspector — it&apos;s your expert
            partner in uncovering property condition insights with clarity,
            detail and confidence. Here&apos;s what sets us apart from
            marketplace platforms, franchise operations, and generic inspection
            services.
          </p>
        </div>
      </Section>

      {/* Pillars */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-white border border-border rounded-2xl p-8 hover:border-accent/30 hover:shadow-sm transition-all"
            >
              <div className="w-14 h-14 rounded-xl bg-accent/10 flex items-center justify-center text-foreground mb-5">
                {pillar.icon}
              </div>
              <h3 className="text-lg font-semibold mb-3">{pillar.title}</h3>
              <p className="text-muted leading-relaxed">
                {pillar.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark" className="dark-section">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 text-white tracking-tight">
            Experience the Difference
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
            Book with Urban 360 and see why Melbourne property owners trust us
            for clear, expert-led building inspections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
            >
              Book Your Inspection <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/15 transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
