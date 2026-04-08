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
  Droplets,
  Thermometer,
  ArrowRight,
} from "lucide-react";
import { SERVICES } from "@/lib/constants";
import { SERVICE_HERO_IMAGES } from "@/lib/service-content";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive building inspection and compliance services across Melbourne. Pre-purchase inspections, timber pest assessments, mould audits, thermal imaging, and more.",
};

const ICON_MAP: Record<string, React.ReactNode> = {
  Search: <Search size={20} />,
  Bug: <Bug size={20} />,
  ClipboardList: <ClipboardList size={20} />,
  Wrench: <Wrench size={20} />,
  ShieldCheck: <ShieldCheck size={20} />,
  HardHat: <HardHat size={20} />,
  Droplets: <Droplets size={20} />,
  Thermometer: <Thermometer size={20} />,
};

export default function ServicesPage() {
  return (
    <>
      {/* Hero — cinematic */}
      <section className="relative h-[45vh] min-h-[350px] flex items-end overflow-hidden">
        <Image
          src="/images/services-hero.webp"
          alt="Melbourne property inspection services"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 w-full">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
            Our Services
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Inspection &amp; Compliance Services
          </h1>
          <p className="text-lg text-white/60 leading-relaxed mt-4 max-w-2xl">
            Our inspections give you a clear, accurate summary of the
            property&apos;s condition — identifying defects, structural
            issues, and safety concerns.
          </p>
        </div>
      </section>

      {/* All services — uniform white cards */}
      <Section variant="dark" className="dark-section">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {SERVICES.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group block bg-white rounded-2xl overflow-hidden hover:shadow-lg transition-all"
            >
              <div className="relative h-40 w-full">
                <Image
                  src={SERVICE_HERO_IMAGES[service.slug]}
                  alt={service.title}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-5">
                <div className="w-9 h-9 rounded-lg bg-accent/10 flex items-center justify-center mb-3 text-neutral-800">
                  {ICON_MAP[service.icon]}
                </div>
                <h2 className="font-semibold text-neutral-900 mb-1.5 text-sm">
                  {service.title}
                </h2>
                <p className="text-neutral-500 text-xs leading-relaxed line-clamp-3 mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-xs text-neutral-900 font-medium group-hover:text-accent transition-colors">
                  Learn more <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight">
            Not Sure What You Need?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch for a free consultation. We&apos;ll help you determine
            the right inspection for your property and situation.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Request a Consultation <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
