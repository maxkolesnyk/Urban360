import type { Metadata } from "next";
import {
  Award,
  Globe,
  BookOpen,
  Shield,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description:
    "Urban 360 Building Inspections — a team of qualified professionals delivering technically rigorous property assessments across Melbourne and Victoria.",
};

const QUALIFICATIONS = [
  {
    icon: <Globe size={24} />,
    title: "Global Experience",
    text: "Our team brings international construction expertise across diverse markets, giving us a broad perspective on Melbourne's building landscape.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Continuous Development",
    text: "We invest in ongoing professional development and advanced qualifications — staying at the forefront of industry standards and practice.",
  },
  {
    icon: <Shield size={24} />,
    title: "Regulatory Expertise",
    text: "Deep understanding of the NCC, AS 4349.1, Victorian building regulations, and compliance frameworks across our inspection team.",
  },
  {
    icon: <Award size={24} />,
    title: "Licensed & Insured",
    text: "Fully licensed and operating in Victoria with comprehensive professional indemnity insurance covering every inspection we deliver.",
  },
  {
    icon: <UserCheck size={24} />,
    title: "Independent & Unbiased",
    text: "No ties to real estate agents, builders, or developers. Every inspection and recommendation is completely impartial.",
  },
];

export default function AboutPage() {
  return (
    <>
      {/* Hero */}
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            About Urban 360
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Expert Insight.{" "}
            <span className="text-muted">Technical Clarity.</span>
          </h1>
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

      {/* Our Team */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo */}
          <div className="aspect-[4/5] max-w-md rounded-2xl overflow-hidden border border-border relative">
            <Image
              src="/images/about-inspector.webp"
              alt="Urban 360 Building Inspections — Melbourne"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 500px"
            />
          </div>

          <div>
            <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
              Our Team
            </p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Qualified Professionals. Real Experience.
            </h2>
            <div className="space-y-4 text-muted leading-relaxed">
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
          </div>
        </div>
      </Section>

      {/* Qualifications & Values */}
      <Section>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Qualifications & Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Why Clients Trust Urban 360
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALIFICATIONS.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl border border-border bg-surface hover:border-black/8 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-black/[0.03] flex items-center justify-center text-icon shrink-0">
                {item.icon}
              </div>
              <div>
                <h3 className="font-semibold mb-1">{item.title}</h3>
                <p className="text-muted leading-relaxed">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Work With Our Team?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch to discuss your property inspection needs with our
            qualified professionals.
          </p>
          <Link
            href="/contact"
            className="relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all glass-shimmer"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
