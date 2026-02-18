import type { Metadata } from "next";
import { FileText, Download, Eye, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";

export const metadata: Metadata = {
  title: "Resources & Sample Reports",
  description:
    "Download sample building inspection reports, property guides, and educational resources from Urban 360. See the quality and detail of our reporting.",
};

const SAMPLE_REPORTS = [
  {
    title: "Sample Pre-Purchase Inspection Report",
    description:
      "See the level of detail, risk categorisation, and photography quality in a typical Urban 360 pre-purchase building inspection report.",
    type: "PDF Report",
    pages: "24 pages",
  },
  {
    title: "Sample Timber Pest Inspection Report",
    description:
      "Example timber pest report showing how we document activity, damage, conducive conditions, and risk assessment.",
    type: "PDF Report",
    pages: "16 pages",
  },
  {
    title: "Sample Dilapidation Report",
    description:
      "Pre-construction condition report example demonstrating our thorough photographic and written documentation approach.",
    type: "PDF Report",
    pages: "32 pages",
  },
];

const GUIDES = [
  {
    title: "First Home Buyer's Inspection Guide",
    description:
      "Everything a first-time buyer needs to know about building inspections — what to expect, what to ask, and how to use the report.",
    type: "Guide",
  },
  {
    title: "How to Read Your Inspection Report",
    description:
      "A plain-language guide to understanding defect categories, risk ratings, and what your report means for your property decision.",
    type: "Guide",
  },
  {
    title: "Pre-Purchase Inspection Checklist",
    description:
      "A downloadable checklist of questions to ask and things to look for when buying property in Melbourne.",
    type: "Checklist",
  },
  {
    title: "Owner Builder Requirements in Victoria",
    description:
      "A summary of key legal requirements for owner builders in Victoria, including Section 137B reporting obligations.",
    type: "Guide",
  },
  {
    title: "Understanding Termite Risk in Melbourne",
    description:
      "A guide to timber pest risk factors, prevention strategies, and inspection frequency recommendations for Melbourne properties.",
    type: "Guide",
  },
];

export default function ResourcesPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sample Reports &amp;{" "}
            <span className="text-primary">Property Guides</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            See the quality and detail of our reporting firsthand. Download
            sample reports and educational guides to help you make informed
            property decisions.
          </p>
        </div>
      </Section>

      {/* Sample Reports */}
      <Section dark>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Sample Reports</h2>
          <p className="text-muted">
            Review excerpts from real Urban 360 inspection reports.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SAMPLE_REPORTS.map((report) => (
            <div
              key={report.title}
              className="bg-background border border-border rounded-2xl p-8 hover:border-primary/30 transition-colors"
            >
              {/* Placeholder thumbnail */}
              <div className="aspect-[3/4] bg-surface-light border border-border rounded-xl mb-6 flex items-center justify-center">
                <FileText size={48} className="text-primary/30" />
              </div>
              <h3 className="font-semibold mb-2">{report.title}</h3>
              <p className="text-muted leading-relaxed mb-4">
                {report.description}
              </p>
              <div className="flex items-center gap-3 text-sm text-muted mb-4">
                <span>{report.type}</span>
                <span>&middot;</span>
                <span>{report.pages}</span>
              </div>
              <div className="flex gap-3">
                <button className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2 rounded-lg text-sm font-medium hover:bg-primary-dark transition-colors">
                  <Download size={14} /> Download
                </button>
                <button className="inline-flex items-center gap-2 border border-border text-foreground px-4 py-2 rounded-lg text-sm font-medium hover:bg-surface-light transition-colors">
                  <Eye size={14} /> Preview
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Guides */}
      <Section>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            Guides &amp; Educational Resources
          </h2>
          <p className="text-muted">
            Free resources to help you navigate the building inspection process.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {GUIDES.map((guide) => (
            <div
              key={guide.title}
              className="flex items-start gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-primary/30 transition-colors"
            >
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center text-primary shrink-0">
                <BookOpen size={24} />
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold">{guide.title}</h3>
                  <span className="text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-full">
                    {guide.type}
                  </span>
                </div>
                <p className="text-muted leading-relaxed mb-3">
                  {guide.description}
                </p>
                <button className="inline-flex items-center gap-1 text-sm text-primary font-medium hover:underline">
                  <Download size={14} /> Download Free
                </button>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See Our Work in Action?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Book an inspection and experience the Urban 360 difference
            firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all"
          >
            Book Your Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
