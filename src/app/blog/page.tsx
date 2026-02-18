import type { Metadata } from "next";
import { Calendar, Clock, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Building inspection insights, property tips, and industry education from Urban 360. Expert guidance for Melbourne home buyers, investors, and property owners.",
};

const PLACEHOLDER_POSTS = [
  {
    slug: "how-to-read-a-building-inspection-report",
    title: "How to Read a Building Inspection Report",
    excerpt:
      "Understanding the difference between major defects, minor defects, and safety hazards — and what they mean for your property decision.",
    category: "Education",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    slug: "common-defects-in-melbourne-homes",
    title: "Common Defects in Melbourne Homes",
    excerpt:
      "From cracked brickwork to subfloor moisture — the most common issues we find during pre-purchase inspections across Melbourne's suburbs.",
    category: "Insights",
    date: "Coming Soon",
    readTime: "7 min read",
  },
  {
    slug: "how-inspections-help-price-negotiation",
    title: "How Building Inspections Help with Price Negotiation",
    excerpt:
      "Your inspection report is more than a condition assessment — it's a powerful negotiation tool. Here's how to use it effectively.",
    category: "Tips",
    date: "Coming Soon",
    readTime: "4 min read",
  },
  {
    slug: "termite-risk-in-victoria",
    title: "Termite and Timber Pest Risk in Victoria",
    excerpt:
      "Why annual timber pest inspections matter, what conducive conditions look like, and how to protect your property from infestation.",
    category: "Education",
    date: "Coming Soon",
    readTime: "6 min read",
  },
  {
    slug: "owner-builder-section-137b-explained",
    title: "Owner Builder Section 137B Reports Explained",
    excerpt:
      "Selling an owner-built property in Victoria? Here's everything you need to know about the Section 137B defect report requirement.",
    category: "Legal",
    date: "Coming Soon",
    readTime: "5 min read",
  },
  {
    slug: "major-vs-minor-defects",
    title: "Major vs Minor Defects: What's the Difference?",
    excerpt:
      "Understanding defect categorisation and what it means for safety, cost, and your property purchase decision.",
    category: "Education",
    date: "Coming Soon",
    readTime: "4 min read",
  },
];

export default function BlogPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Blog & Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Property Knowledge,{" "}
            <span className="text-primary">Expert Insight</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Educational content, industry insights, and practical guidance from
            Melbourne&apos;s trusted building inspection experts. Empowering you
            to make informed property decisions.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {PLACEHOLDER_POSTS.map((post) => (
            <article
              key={post.slug}
              className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-primary/30 transition-colors"
            >
              {/* Placeholder image */}
              <div className="aspect-[16/9] bg-surface-light flex items-center justify-center">
                <span className="text-xs text-muted">Featured Image</span>
              </div>

              <div className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2.5 py-0.5 rounded-full">
                    {post.category}
                  </span>
                </div>
                <h2 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
                  {post.title}
                </h2>
                <p className="text-muted leading-relaxed mb-4">
                  {post.excerpt}
                </p>
                <div className="flex items-center gap-4 text-sm text-muted">
                  <span className="flex items-center gap-1">
                    <Calendar size={12} /> {post.date}
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock size={12} /> {post.readTime}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Want to Stay Informed?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest building inspection
            insights, industry updates, and property tips.
          </p>
          <div className="max-w-md mx-auto flex gap-3">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
            />
            <button className="bg-primary text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors shrink-0">
              Subscribe
            </button>
          </div>
        </div>
      </Section>
    </>
  );
}
