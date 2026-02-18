import type { Metadata } from "next";
import {
  Award,
  Globe,
  BookOpen,
  Shield,
  UserCheck,
  ArrowRight,
} from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About",
  description: `Meet ${SITE.founder}, Senior Building Consultant at Urban 360. Global construction experience, deep regulatory knowledge, and a commitment to technical clarity.`,
};

const QUALIFICATIONS = [
  {
    icon: <Globe size={24} />,
    title: "Global Experience",
    text: "International construction expertise across diverse markets, bringing a broad perspective to Melbourne's building landscape.",
  },
  {
    icon: <BookOpen size={24} />,
    title: "Ongoing Education",
    text: "Currently pursuing advanced building surveying studies — committed to staying at the forefront of industry standards and practice.",
  },
  {
    icon: <Shield size={24} />,
    title: "Regulatory Knowledge",
    text: "Deep understanding of the NCC, AS 4349.1, Victorian building regulations, and compliance frameworks.",
  },
  {
    icon: <Award size={24} />,
    title: "Licensed & Insured",
    text: "Fully licensed building surveyor operating in Victoria with comprehensive professional indemnity insurance.",
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            About Urban 360
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Expert Insight.{" "}
            <span className="text-primary">Technical Clarity.</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed mb-4">
            Urban 360 Building Inspections was founded on a simple principle:
            property owners and buyers deserve more than a checklist. They
            deserve expert-led, technically rigorous assessments delivered with
            clarity and genuine care.
          </p>
          <p className="text-lg text-muted leading-relaxed">
            Led by Senior Building Consultant{" "}
            <span className="text-foreground font-medium">{SITE.founder}</span>,
            Urban 360 combines global construction experience with deep local
            knowledge of Melbourne&apos;s building landscape — providing the
            insight you need to make confident property decisions.
          </p>
        </div>
      </Section>

      {/* Mark Rozin */}
      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Photo placeholder */}
          <div className="aspect-[4/5] max-w-md bg-surface-light border border-border rounded-2xl flex items-center justify-center">
            <div className="text-center text-muted">
              <UserCheck size={48} className="mx-auto mb-3 text-primary/40" />
              <p className="text-sm">Professional Photo</p>
              <p className="text-xs">{SITE.founder}</p>
            </div>
          </div>

          <div>
            <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
              Meet Your Consultant
            </p>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
              {SITE.founder}
            </h2>
            <p className="text-sm text-primary font-medium mb-4">
              {SITE.founderTitle}
            </p>
            <div className="space-y-4 text-muted leading-relaxed">
              <p>
                With years of experience spanning international construction
                projects and the Australian building industry, Mark brings a
                unique breadth and depth of knowledge to every inspection.
              </p>
              <p>
                Currently advancing his formal building surveying qualifications,
                Mark is committed to continuous professional development and
                staying at the cutting edge of building standards, construction
                methodologies, and regulatory requirements.
              </p>
              <p>
                His approach is defined by technical precision, transparent
                communication, and a genuine commitment to helping clients
                understand not just what he finds — but why it matters and what
                to do about it.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Qualifications & Values */}
      <Section>
        <div className="text-center mb-14">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Qualifications & Values
          </p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            Why Clients Trust Urban 360
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUALIFICATIONS.map((item) => (
            <div
              key={item.title}
              className="flex gap-4 p-6 rounded-xl border border-border bg-surface hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
            Ready to Work With an Expert?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Get in touch to discuss your property inspection needs with{" "}
            {SITE.founder}.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
