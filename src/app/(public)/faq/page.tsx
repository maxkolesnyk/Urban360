import type { Metadata } from "next";
import { ChevronDown, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "FAQ",
  description:
    "Frequently asked questions about building inspections in Melbourne. Learn about the inspection process, reports, pricing, and more from Urban 360.",
};

const FAQ_CATEGORIES = [
  {
    category: "About Our Inspections",
    questions: [
      {
        q: "What does a building inspection include?",
        a: "Our standard building inspection is a comprehensive visual assessment of a property's accessible areas in accordance with AS 4349.1. This includes structural elements, interior and exterior cladding, roofing, subfloor (where accessible), wet areas, site drainage, and more. We identify defects, assess their severity, and provide clear guidance on implications.",
      },
      {
        q: "How long does an inspection take?",
        a: "Typically 1.5 to 3 hours depending on property size, age, and complexity. We never rush an inspection — thoroughness and accuracy are our top priorities.",
      },
      {
        q: "Can I attend the inspection?",
        a: "Absolutely. We encourage clients to attend so we can point out findings in person and answer questions on the spot. If you can't make it, we'll arrange a phone or video consultation once the report is delivered.",
      },
      {
        q: "What's the difference between a building inspection and a building survey?",
        a: "A building inspection (as per AS 4349.1) is a visual assessment focused on identifying defects and assessing property condition. A building survey typically involves more detailed measurements, planning assessments, and regulatory compliance evaluation. We offer both types of services.",
      },
    ],
  },
  {
    category: "Reports & Turnaround",
    questions: [
      {
        q: "When will I receive my report?",
        a: "Most reports are delivered same-day or within 24 hours of the inspection. For more complex properties or combined inspections, it may take up to 48 hours.",
      },
      {
        q: "What format is the report in?",
        a: "Reports are delivered as professional PDF documents with clear sections, risk categorisation, high-resolution photography, and written analysis. They're designed to be easy to read and share with your solicitor, conveyancer, or real estate agent.",
      },
      {
        q: "Can I see a sample report?",
        a: "Yes. Visit our Resources page to view sample report excerpts and understand the quality and detail you can expect from Urban 360.",
      },
      {
        q: "How do I use the report for negotiation?",
        a: "Our risk-prioritised reports clearly categorise findings as major defects, minor defects, or safety hazards. This gives you and your legal representative clear evidence to support price negotiations. We also provide guidance on estimated rectification approaches during our post-inspection consultation.",
      },
    ],
  },
  {
    category: "Booking & Pricing",
    questions: [
      {
        q: "How do I book an inspection?",
        a: "You can book via our contact page, by calling us directly, or by emailing your property details. We'll confirm availability, scope, and schedule your inspection promptly.",
      },
      {
        q: "How much does an inspection cost?",
        a: "Pricing depends on the type of inspection, property size, and location. Contact us for a quote tailored to your specific needs. We're transparent about pricing — no hidden fees.",
      },
      {
        q: "Do you offer combined building and pest inspections?",
        a: "Yes. A combined building and timber pest inspection is our most popular package for pre-purchase clients. It provides comprehensive coverage in a single visit and report.",
      },
      {
        q: "What areas do you service?",
        a: "We service all of metropolitan Melbourne and regional Victoria. Check our Areas We Serve page for a full list of regions and suburbs, or contact us to confirm availability for your location.",
      },
    ],
  },
  {
    category: "Standards & Compliance",
    questions: [
      {
        q: "What is AS 4349.1?",
        a: "AS 4349.1 is the Australian Standard for Inspection of Buildings — Pre-Purchase. It defines the scope, methodology, and reporting requirements for building inspections. All Urban 360 pre-purchase inspections comply with this standard.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Urban 360 is a fully licensed building surveyor operating in Victoria with comprehensive professional indemnity insurance.",
      },
      {
        q: "What is a Section 137B report?",
        a: "Under Section 137B of the Victorian Building Act, a defect report from a registered building practitioner is required when selling a property built or renovated under an owner-builder permit within 6.5 years of completion.",
      },
    ],
  },
];

export default function FAQPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
            FAQ
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Frequently Asked{" "}
            <span className="text-white">Questions</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Everything you need to know about our building inspection services.
            Can&apos;t find what you&apos;re looking for? Get in touch — we&apos;re happy
            to help.
          </p>
        </div>
      </Section>

      {FAQ_CATEGORIES.map((cat, i) => (
        <Section key={cat.category} dark={i % 2 === 0}>
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold mb-6">{cat.category}</h2>
            <div className="space-y-3">
              {cat.questions.map((faq) => (
                <details
                  key={faq.q}
                  className="group bg-background border border-border rounded-xl"
                >
                  <summary className="flex items-center justify-between cursor-pointer px-6 py-4 text-foreground font-medium">
                    {faq.q}
                    <ChevronDown
                      size={18}
                      className="text-muted group-open:rotate-180 transition-transform shrink-0 ml-4"
                    />
                  </summary>
                  <div className="px-6 pb-4 text-muted leading-relaxed">
                    {faq.a}
                  </div>
                </details>
              ))}
            </div>
          </div>
        </Section>
      ))}

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Still Have Questions?</h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            We&apos;re happy to answer any questions about our services, process,
            or your specific property needs.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/90 transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
