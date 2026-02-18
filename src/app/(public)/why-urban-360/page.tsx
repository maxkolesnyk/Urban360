import type { Metadata } from "next";
import {
  UserCheck,
  Target,
  FileText,
  Award,
  Globe,
  HeartHandshake,
  ShieldCheck,
  TrendingUp,
  ArrowRight,
  X,
  Check,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Why Choose Urban 360",
  description:
    "Urban 360 is not a marketplace, franchise, or checklist inspector. Discover what makes our building inspections different — direct expert engagement, risk-focused reporting, and technical depth.",
};

const COMPARISON = [
  {
    feature: "Direct access to senior consultant",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
  {
    feature: "Risk-prioritised reporting",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
  {
    feature: "Negotiation & decision guidance",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
  {
    feature: "AS 4349.1 compliant inspections",
    urban360: true,
    marketplace: true,
    franchise: true,
  },
  {
    feature: "In-depth technical analysis",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
  {
    feature: "Personalised post-inspection support",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
  {
    feature: "Independent & unbiased",
    urban360: true,
    marketplace: false,
    franchise: true,
  },
  {
    feature: "Future risk assessment included",
    urban360: true,
    marketplace: false,
    franchise: false,
  },
];

const PILLARS = [
  {
    icon: <UserCheck size={28} />,
    title: "Direct Expert Engagement",
    description:
      "You're not assigned a random inspector from a pool. You work directly with Mark Rozin — a senior building consultant who personally conducts and delivers every inspection.",
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
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Why Choose Urban 360
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
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
      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.title}
              className="bg-background border border-border rounded-2xl p-8 hover:border-black/8 transition-colors"
            >
              <div className="w-14 h-14 rounded-xl bg-black/[0.03] flex items-center justify-center text-foreground mb-5">
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

      {/* Comparison Table */}
      <Section>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            How We Compare
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Urban 360 vs. The Alternatives
          </h2>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-border">
                <th className="text-left py-4 px-4 text-muted font-medium">
                  Feature
                </th>
                <th className="py-4 px-4 text-foreground font-semibold">
                  Urban 360
                </th>
                <th className="py-4 px-4 text-muted font-medium">
                  Marketplace
                </th>
                <th className="py-4 px-4 text-muted font-medium">
                  Franchise
                </th>
              </tr>
            </thead>
            <tbody>
              {COMPARISON.map((row) => (
                <tr key={row.feature} className="border-b border-border/50">
                  <td className="py-4 px-4 text-foreground">{row.feature}</td>
                  <td className="py-4 px-4 text-center">
                    {row.urban360 ? (
                      <Check size={18} className="text-foreground mx-auto" />
                    ) : (
                      <X size={18} className="text-muted mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.marketplace ? (
                      <Check size={18} className="text-muted mx-auto" />
                    ) : (
                      <X size={18} className="text-muted mx-auto" />
                    )}
                  </td>
                  <td className="py-4 px-4 text-center">
                    {row.franchise ? (
                      <Check size={18} className="text-muted mx-auto" />
                    ) : (
                      <X size={18} className="text-muted mx-auto" />
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Experience the Difference
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Book with Urban 360 and see why Melbourne property owners trust us
            for clear, expert-led building inspections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all glass-shimmer"
            >
              Book Your Inspection <ArrowRight size={18} />
            </Link>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-surface-light transition-all"
            >
              View Our Services
            </Link>
          </div>
        </div>
      </Section>
    </>
  );
}
