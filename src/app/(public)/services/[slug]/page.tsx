import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Phone,
  Clock,
  FileText,
  Users,
  AlertTriangle,
} from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_CONTENT } from "@/lib/service-content";
import Section from "@/components/Section";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT.find((s) => s.slug === slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const content = SERVICE_CONTENT.find((s) => s.slug === slug);

  if (!content) notFound();

  const relatedServices = SERVICES.filter((s) =>
    content.relatedServices.includes(s.slug)
  );

  return (
    <>
      {/* ── Hero ── */}
      <Section>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All Services
        </Link>

        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {content.headline}
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-8">
            {content.intro}
          </p>

          {/* Quick CTAs */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center justify-center gap-2 bg-black text-white px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-black/90 transition-all glass-shimmer"
            >
              Book This Inspection <ArrowRight size={16} />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl text-base font-medium hover:bg-surface-light transition-all"
            >
              <Phone size={16} /> Call {SITE.phone}
            </a>
          </div>
        </div>

        {/* Ideal For badge row */}
        <div className="mt-12 flex items-start gap-4 p-5 bg-surface border border-border rounded-xl">
          <Users size={20} className="text-white shrink-0 mt-0.5" />
          <div>
            <p className="text-sm font-semibold mb-2">Ideal For</p>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-1">
              {content.idealFor.map((item) => (
                <li
                  key={item}
                  className="text-muted flex items-start gap-2"
                >
                  <span className="text-white mt-1">&#8250;</span> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── What Is It + What's Inspected ── */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4">What Is It?</h2>
            <p className="text-muted leading-relaxed">{content.whatIsIt}</p>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4">
              What&apos;s Inspected
            </h2>
            <ul className="space-y-2">
              {content.whatsInspected.map((item) => (
                <li key={item} className="flex items-start gap-2.5">
                  <Check
                    size={16}
                    className="text-white mt-0.5 shrink-0"
                  />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Why It Matters ── */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">Why It Matters</h2>
          <p className="text-muted leading-relaxed mb-8">
            {content.whyItMatters}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.whyItMattersPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 bg-surface border border-border rounded-xl p-4"
              >
                <Check size={18} className="text-white mt-0.5 shrink-0" />
                <span className="text-muted">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── How We Do It Differently ── */}
      <Section dark>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-4">
            How Urban 360 Does It Differently
          </h2>
          <p className="text-muted leading-relaxed mb-8">
            {content.howWeDoDifferently}
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {content.differentiatorPoints.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 p-4 bg-background border border-border rounded-xl"
              >
                <div className="w-6 h-6 rounded-full bg-black/[0.03] flex items-center justify-center shrink-0 mt-0.5">
                  <Check size={14} className="text-white" />
                </div>
                <span className="text-foreground">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Risk Categories (Pre-Purchase only) ── */}
      {content.riskCategories && (
        <Section>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-accent" />
              <h2 className="text-2xl font-bold">
                Risk Categories Explained
              </h2>
            </div>
            <p className="text-muted leading-relaxed mb-8">
              Every finding in your report is categorised by severity, so you
              know exactly what needs urgent attention, what can wait, and
              what&apos;s a safety concern.
            </p>
            <div className="space-y-4">
              {content.riskCategories.map((cat) => (
                <div
                  key={cat.level}
                  className="bg-surface border border-border rounded-xl p-6"
                >
                  <h3 className={`text-lg font-bold mb-2 ${cat.color}`}>
                    {cat.level}
                  </h3>
                  <p className="text-muted leading-relaxed">
                    {cat.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Section>
      )}

      {/* ── Our Process ── */}
      <Section dark={!content.riskCategories}>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-8">Our Process</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.process.map((step, i) => (
              <div
                key={step.step}
                className="relative bg-background border border-border rounded-xl p-6"
              >
                <div className="absolute -top-3 left-5 w-7 h-7 rounded-full bg-black text-white text-xs font-bold flex items-center justify-center">
                  {i + 1}
                </div>
                <h3 className="font-semibold mb-2 mt-1">{step.step}</h3>
                <p className="text-muted leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── What You Receive ── */}
      <Section>
        <div className="max-w-4xl">
          <h2 className="text-2xl font-bold mb-6">What You Receive</h2>
          <div className="bg-surface border border-border rounded-2xl p-8">
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {content.whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check
                    size={18}
                    className="text-white mt-0.5 shrink-0"
                  />
                  <span className="text-foreground">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── Turnaround + Sample Report ── */}
      <Section dark>
        <div className="max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={20} className="text-white" />
              <h3 className="font-semibold">Report Turnaround</h3>
            </div>
            <p className="text-muted leading-relaxed">
              {content.turnaround}
            </p>
          </div>
          <div className="bg-background border border-border rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <FileText size={20} className="text-white" />
              <h3 className="font-semibold">Sample Report</h3>
            </div>
            <p className="text-muted leading-relaxed mb-4">
              {content.sampleReportNote}
            </p>
            <Link
              href="/resources"
              className="inline-flex items-center gap-1 text-sm text-white font-medium hover:underline"
            >
              View Sample Reports <ArrowRight size={14} />
            </Link>
          </div>
        </div>
      </Section>

      {/* ── FAQs ── */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-8">Frequently Asked Questions</h2>
          <div className="space-y-3">
            {content.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group bg-surface border border-border rounded-xl"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-foreground font-medium">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-5 text-muted leading-relaxed">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── Related Services ── */}
      {relatedServices.length > 0 && (
        <Section dark>
          <h2 className="text-2xl font-bold mb-6">Related Services</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {relatedServices.map((service) => (
              <Link
                key={service.slug}
                href={`/services/${service.slug}`}
                className="group bg-background border border-border rounded-xl p-6 hover:border-black/10 transition-all"
              >
                <h3 className="font-semibold mb-2 group-hover:text-black transition-colors">
                  {service.title}
                </h3>
                <p className="text-muted leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-white font-medium">
                  Learn more <ArrowRight size={14} />
                </span>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ── CTA ── */}
      <Section>
        <div className="relative bg-gradient-to-br from-primary/10 via-surface to-accent/5 border border-black/[0.06] rounded-3xl p-10 md:p-16 text-center overflow-hidden">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-black/[0.04] rounded-full blur-[100px]" />
          <div className="relative">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Book This Inspection?
            </h2>
            <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
              Get in touch with {SITE.founder} to discuss your property and
              schedule your inspection. Limited daily availability.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact"
                className="relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all hover:scale-[1.02] glass-shimmer"
              >
                Book Your Inspection <ArrowRight size={18} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-surface-light transition-all"
              >
                <Phone size={18} />
                Call Us Now
              </a>
              <Link
                href="/resources"
                className="inline-flex items-center gap-2 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-black/[0.02] transition-all"
              >
                <FileText size={18} />
                Download Sample Report
              </Link>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
