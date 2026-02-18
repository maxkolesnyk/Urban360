import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Search,
  Bug,
  ClipboardList,
  Wrench,
  ShieldCheck,
  HardHat,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive building inspection and compliance services across Melbourne. Pre-purchase inspections, timber pest assessments, dilapidation reports, owner-builder defect reports, and more.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={32} />,
  Bug: <Bug size={32} />,
  ClipboardList: <ClipboardList size={32} />,
  Wrench: <Wrench size={32} />,
  ShieldCheck: <ShieldCheck size={32} />,
  HardHat: <HardHat size={32} />,
};

export default function ServicesPage() {
  return (
    <>
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
              Our Services
            </p>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
              Inspection &amp; Compliance Services
            </h1>
            <p className="text-lg text-muted leading-relaxed">
              From pre-purchase inspections to construction stage assessments —
              every service is delivered with technical rigour, clear reporting,
              and expert guidance tailored to your situation.
            </p>
          </div>
          <div className="relative aspect-[5/2] rounded-2xl overflow-hidden border border-border hidden lg:block">
            <Image
              src="/images/services-hero.webp"
              alt="Melbourne property inspection"
              fill
              className="object-cover"
              sizes="500px"
            />
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-background border border-border rounded-2xl p-8 hover:border-white/15 transition-all hover:shadow-[0_0_30px_rgba(255,255,255,0.04)]"
            >
              <div className="flex items-start gap-5">
                <div className="w-16 h-16 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0 group-hover:bg-white/10 transition-colors">
                  {ICON_MAP[service.icon]}
                </div>
                <div>
                  <h2 className="text-xl font-semibold mb-3 group-hover:text-white transition-colors">
                    {service.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    {service.shortDescription}
                  </p>
                  <span className="inline-flex items-center gap-1 text-sm text-white font-medium">
                    Learn more <ArrowRight size={14} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Not Sure What You Need?</h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch for a free consultation. We&apos;ll help you determine
            the right inspection for your property and situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/90 transition-all"
          >
            Request a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
