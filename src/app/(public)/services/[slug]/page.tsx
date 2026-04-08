import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  ArrowLeft,
  Check,
  ChevronDown,
  Phone,
  Clock,
  Users,
  AlertTriangle,
} from "lucide-react";
import { SERVICES, SITE } from "@/lib/constants";
import { SERVICE_CONTENT, SERVICE_HERO_IMAGES } from "@/lib/service-content";
import Section from "@/components/Section";
import EvidenceGallery from "@/components/EvidenceGallery";

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
  const heroImage = SERVICE_HERO_IMAGES[slug];

  return (
    <>
      {/* ── 1. Hero with Image (Split Panel) ── */}
      <Section>
        <Link
          href="/services"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-black transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All Services
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          <div>
            <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              {content.headline}
            </h1>
            <p className="text-lg text-muted leading-relaxed mb-8">
              {content.intro}
            </p>

            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-accent text-black px-7 py-3.5 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all"
              >
                Book This Inspection <ArrowRight size={16} />
              </Link>
              <a
                href={`tel:${SITE.phone}`}
                className="inline-flex items-center justify-center gap-2 border border-border text-foreground px-7 py-3.5 rounded-xl text-base font-medium hover:bg-surface transition-all"
              >
                <Phone size={16} /> Call {SITE.phone}
              </a>
            </div>

            {/* Ideal For */}
            <div className="flex items-start gap-4 p-5 bg-surface border border-border rounded-xl">
              <Users size={18} className="text-muted shrink-0 mt-0.5" />
              <div>
                <p className="text-sm font-semibold mb-2">Ideal For</p>
                <ul className="space-y-1">
                  {content.idealFor.map((item) => (
                    <li key={item} className="text-muted text-sm flex items-start gap-2">
                      <span className="text-foreground mt-0.5">&#8250;</span> {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Hero image */}
          {heroImage && (
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden hidden lg:block">
              <Image
                src={heroImage}
                alt={content.headline}
                fill
                className="object-cover"
                sizes="50vw"
              />
            </div>
          )}
        </div>
      </Section>

      {/* ── 2. Evidence Gallery (if images exist) ── */}
      {content.images && content.images.length > 0 && (
        <Section variant="dark" className="dark-section overflow-hidden">
          <EvidenceGallery
            items={content.images.map((img) => ({
              src: img.src,
              alt: img.alt,
              caption: img.alt,
            }))}
          />
        </Section>
      )}

      {/* ── 3. What Is It + What's Inspected ── */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">What Is It?</h2>
            <p className="text-muted leading-relaxed">{content.whatIsIt}</p>
          </div>
          <div className="border-t-4 border-accent rounded-xl bg-surface p-6">
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              What&apos;s Inspected
            </h2>
            <ul className="space-y-2">
              {content.whatsInspected.map((item) => (
                <li key={item} className="flex items-start gap-2.5 text-sm">
                  <Check size={15} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-muted">{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      {/* ── 4. Why It Matters + How We Do It Differently (MERGED) ── */}
      <Section variant="dark" className="dark-section">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">Why It Matters</h2>
            <p className="text-white/60 leading-relaxed mb-6">
              {content.whyItMatters}
            </p>
            <div className="space-y-3">
              {content.whyItMattersPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-white/70 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
          <div>
            <h2 className="text-2xl font-bold mb-4 tracking-tight">
              How We Do It Differently
            </h2>
            <p className="text-white/60 leading-relaxed mb-6">
              {content.howWeDoDifferently}
            </p>
            <div className="space-y-3">
              {content.differentiatorPoints.map((point) => (
                <div key={point} className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-accent/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check size={12} className="text-accent" />
                  </div>
                  <span className="text-white/80 text-sm">{point}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* ── Risk Categories (Pre-Purchase only) ── */}
      {content.riskCategories && (
        <Section>
          <div className="max-w-4xl">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle size={24} className="text-accent" />
              <h2 className="text-2xl font-bold tracking-tight">
                Risk Categories Explained
              </h2>
            </div>
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

      {/* ── 5. Our Process (Timeline) ── */}
      <Section>
        <h2 className="text-2xl font-bold mb-10 tracking-tight">Our Process</h2>
        <div className="max-w-3xl relative pl-10 md:pl-14">
          {/* Vertical line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-neutral-200" />
          <div className="space-y-12">
            {content.process.map((step, i) => (
              <div key={step.step} className="relative">
                <div className="absolute -left-10 md:-left-14 top-0 w-8 h-8 md:w-10 md:h-10 rounded-full bg-black text-white text-sm md:text-base font-bold flex items-center justify-center z-10">
                  {i + 1}
                </div>
                <h3 className="text-lg font-semibold mb-2">{step.step}</h3>
                <p className="text-muted leading-relaxed">{step.description}</p>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 6. What You Receive + Turnaround (MERGED) ── */}
      <Section variant="dark" className="dark-section">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">What You Receive</h2>
            <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {content.whatYouGet.map((item) => (
                <li key={item} className="flex items-start gap-3">
                  <Check size={16} className="text-accent mt-0.5 shrink-0" />
                  <span className="text-white/80 text-sm">{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white/5 border border-white/10 rounded-xl p-6">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={18} className="text-accent" />
              <h3 className="font-semibold">Report Turnaround</h3>
            </div>
            <p className="text-white/60 leading-relaxed text-sm">
              {content.turnaround}
            </p>
          </div>
        </div>
      </Section>

      {/* ── 7. FAQs ── */}
      <Section>
        <div className="max-w-3xl">
          <h2 className="text-2xl font-bold mb-8 tracking-tight">
            Frequently Asked Questions
          </h2>
          <div className="space-y-3">
            {content.faqs.map((faq) => (
              <details
                key={faq.q}
                className="group border border-border rounded-xl open:border-accent/30 transition-colors"
              >
                <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-foreground font-medium">
                  {faq.q}
                  <ChevronDown
                    size={18}
                    className="text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                  />
                </summary>
                <div className="px-6 pb-5 text-muted leading-relaxed text-sm">
                  {faq.a}
                </div>
              </details>
            ))}
          </div>
        </div>
      </Section>

      {/* ── 8. Related Services + CTA (MERGED) ── */}
      <Section variant="dark" className="dark-section">
        {relatedServices.length > 0 && (
          <div className="mb-12">
            <h2 className="text-lg font-semibold mb-4 text-white/50 uppercase tracking-widest">
              Related Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedServices.map((service) => (
                <Link
                  key={service.slug}
                  href={`/services/${service.slug}`}
                  className="group bg-white/5 border border-white/10 rounded-xl p-5 hover:border-accent/30 transition-all"
                >
                  <h3 className="font-semibold mb-1 text-white group-hover:text-accent transition-colors">
                    {service.title}
                  </h3>
                  <span className="inline-flex items-center gap-1 text-sm text-white/50 font-medium">
                    Learn more <ArrowRight size={12} />
                  </span>
                </Link>
              ))}
            </div>
          </div>
        )}

        <div className="text-center pt-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 tracking-tight">
            Ready to Book This Inspection?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch with our team to discuss your property and
            schedule your inspection. Limited daily availability.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
            >
              Book Your Inspection <ArrowRight size={18} />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center gap-2 bg-white/10 border border-white/20 text-white px-8 py-4 rounded-xl text-base font-medium hover:bg-white/15 transition-all"
            >
              <Phone size={18} />
              Call Us Now
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
