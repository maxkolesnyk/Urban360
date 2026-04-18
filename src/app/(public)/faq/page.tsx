import type { Metadata } from "next";
import Link from "next/link";
import { ArrowUpRight, MessageSquareText } from "lucide-react";
import Section from "@/components/Section";
import FAQAccordion from "@/components/FAQAccordion";
import { FAQ_CATEGORIES } from "@/lib/faq";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about building inspections in Melbourne. The inspection process, reports, pricing, and how Urban 360 works.",
};

export default function FAQPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              FAQ
            </span>
          </div>
          <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
            Questions,<br />
            <span className="text-neutral-500">answered.</span>
          </h1>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl">
            Honest answers about the inspection process, our reports, pricing,
            and what to expect from Urban 360. Jump to a category or browse.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-2">
          {FAQ_CATEGORIES.map((cat) => (
            <a
              key={cat.slug}
              href={`#${cat.slug}`}
              className="inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 bg-white ring-1 ring-neutral-200 hover:ring-neutral-900 rounded-full px-4 py-2 transition"
            >
              {cat.category}
              <span className="text-neutral-400 text-xs">
                {cat.questions.length}
              </span>
            </a>
          ))}
        </div>
      </Section>

      {FAQ_CATEGORIES.map((cat, i) => (
        <Section
          key={cat.slug}
          id={cat.slug}
          className={i % 2 === 0 ? "bg-neutral-50" : ""}
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
            <div className="lg:col-span-5 lg:sticky lg:top-28">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  {cat.category}
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
                {cat.title}
                {cat.subtitle && (
                  <>
                    <br />
                    <span className="text-neutral-500">{cat.subtitle}</span>
                  </>
                )}
              </h2>
            </div>
            <div className="lg:col-span-7">
              <FAQAccordion items={cat.questions} />
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Still wondering?
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
            Can&apos;t find your<br />
            <span className="text-neutral-500">answer here?</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            A quick call with one of our senior consultants beats a hundred
            pages of FAQ. Tell us about your property and we&apos;ll guide you
            from there.
          </p>
          <div className="flex flex-wrap gap-3 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              <MessageSquareText size={15} />
              Get in touch
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <Link
              href="/services"
              className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-6 py-3 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              Explore services
              <ArrowUpRight
                size={15}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </div>
      </Section>
    </div>
  );
}
