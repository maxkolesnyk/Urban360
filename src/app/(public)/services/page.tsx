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
  Search: <Search size={22} />,
  Bug: <Bug size={22} />,
  ClipboardList: <ClipboardList size={22} />,
  Wrench: <Wrench size={22} />,
  ShieldCheck: <ShieldCheck size={22} />,
  HardHat: <HardHat size={22} />,
  Droplets: <Droplets size={22} />,
  Thermometer: <Thermometer size={22} />,
};

const FEATURED_SLUGS = ["pre-purchase-inspections", "timber-pest-inspections"];

export default function ServicesPage() {
  const featured = SERVICES.filter((s) => FEATURED_SLUGS.includes(s.slug));
  const rest = SERVICES.filter((s) => !FEATURED_SLUGS.includes(s.slug));

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
          <p className="text-sm font-semibold text-white/50 uppercase tracking-widest mb-3">
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

      {/* Featured services — large image cards */}
      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {featured.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group relative block aspect-[16/10] rounded-2xl overflow-hidden"
            >
              <Image
                src={SERVICE_HERO_IMAGES[service.slug]}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 p-6 md:p-8">
                <h2 className="text-xl md:text-2xl font-bold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white/70 text-sm leading-relaxed max-w-md mb-3 hidden md:block">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                  Learn more <ArrowRight size={14} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </Section>

      {/* Remaining services — cards with thumbnails */}
      <Section variant="dark" className="dark-section">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {rest.map((service) => (
            <Link
              key={service.slug}
              href={`/services/${service.slug}`}
              className="group bg-white/5 border border-white/10 rounded-xl overflow-hidden hover:border-accent/30 transition-all"
            >
              {SERVICE_HERO_IMAGES[service.slug] && (
                <div className="relative h-36 w-full">
                  <Image
                    src={SERVICE_HERO_IMAGES[service.slug]}
                    alt={service.title}
                    fill
                    className="object-cover opacity-60 group-hover:opacity-80 transition-opacity"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center mb-3 text-white">
                  {ICON_MAP[service.icon]}
                </div>
                <h2 className="font-semibold text-white mb-2">
                  {service.title}
                </h2>
                <p className="text-white/50 text-sm leading-relaxed mb-3">
                  {service.shortDescription}
                </p>
                <span className="inline-flex items-center gap-1 text-sm text-accent font-medium">
                  Learn more <ArrowRight size={14} />
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
