import type { Metadata } from "next";
import {
  Award,
  Globe,
  BookOpen,
  Shield,
  UserCheck,
  ArrowRight,
  Check,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import SplitPanel from "@/components/SplitPanel";

export const metadata: Metadata = {
  title: "About",
  description:
    "Urban 360 Building Inspections — a team of qualified professionals delivering technically rigorous property assessments across Melbourne and Victoria.",
};

const QUALIFICATIONS = [
  {
    icon: <Globe size={20} />,
    title: "Global Experience",
    text: "International construction expertise across diverse markets, giving us a broad perspective on Melbourne's building landscape.",
  },
  {
    icon: <BookOpen size={20} />,
    title: "Continuous Development",
    text: "Ongoing professional development and advanced qualifications — staying at the forefront of industry standards.",
  },
  {
    icon: <Shield size={20} />,
    title: "Regulatory Expertise",
    text: "Deep understanding of the NCC, AS 4349.1, Victorian building regulations, and compliance frameworks.",
  },
  {
    icon: <Award size={20} />,
    title: "Licensed & Insured",
    text: "Fully licensed in Victoria with comprehensive professional indemnity insurance covering every inspection.",
  },
  {
    icon: <UserCheck size={20} />,
    title: "Independent & Unbiased",
    text: "No ties to real estate agents, builders, or developers. Every recommendation is completely impartial.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero — cinematic with drone shot */}
      <section className="relative h-[50vh] min-h-[400px] flex items-end overflow-hidden">
        <Image
          src="/images/construction-aerial.webp"
          alt="Aerial view of construction site — Urban 360 inspection scope"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
        <div className="relative mx-auto max-w-7xl px-6 pb-12 w-full">
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
            About Urban 360
          </p>
          <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
            Expert Insight.{" "}
            <span className="text-accent">Technical Clarity.</span>
          </h1>
        </div>
      </section>

      {/* Intro */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-lg text-muted leading-relaxed mb-4">
            Urban 360 Building Inspections was founded on a simple principle:
            property owners and buyers deserve more than a checklist. They
            deserve expert-led, technically rigorous assessments delivered with
            clarity and genuine care.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Our team combines global construction experience with deep local
            knowledge of Melbourne&apos;s building landscape — providing the
            insight you need to make confident property decisions.
          </p>
        </div>
      </Section>

      {/* Team — split panel */}
      <Section variant="dark" className="dark-section">
        <SplitPanel
          image="/images/property-dining.webp"
          imageAlt="Quality properties assessed by Urban 360"
          imagePosition="left"
          aspectRatio="aspect-[4/5]"
        >
          <p className="text-sm font-semibold text-white/70 uppercase tracking-widest mb-3">
            Our Team
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight text-white">
            Qualified Professionals.<br />Real Experience.
          </h2>
          <div className="space-y-4 text-white/60 leading-relaxed">
            <p>
              Our inspection team brings years of experience spanning
              international construction projects and the Australian building
              industry — a unique breadth and depth of knowledge that informs
              every assessment we deliver.
            </p>
            <p>
              We invest in continuous professional development, advancing
              formal qualifications and staying at the cutting edge of
              building standards, construction methodologies, and regulatory
              requirements.
            </p>
            <p>
              Our approach is defined by technical precision, transparent
              communication, and a genuine commitment to helping clients
              understand not just what we find — but why it matters and what
              to do about it.
            </p>
          </div>
        </SplitPanel>
      </Section>

      {/* Qualifications — styled list, not cards */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
              Qualifications & Values
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
              Why Clients Trust<br />Urban 360
            </h2>
          </div>
          <div className="space-y-6">
            {QUALIFICATIONS.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{item.title}</h3>
                  <p className="text-muted leading-relaxed text-sm">
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section variant="dark" className="dark-section">
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4 tracking-tight text-white">
            Ready to Work With Our Team?
          </h2>
          <p className="text-white/60 leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch to discuss your property inspection needs with our
            qualified professionals.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
