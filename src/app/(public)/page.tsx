import type { Metadata } from "next";
import Hero from "@/components/home/Hero";
import ServicesSnapshot from "@/components/home/ServicesSnapshot";
import ProblemSolution from "@/components/home/ProblemSolution";
import HomeEvidenceGallery from "@/components/home/HomeEvidenceGallery";
import HowItWorks from "@/components/home/HowItWorks";
import WhyUrban360 from "@/components/home/WhyUrban360";
import Testimonials from "@/components/home/Testimonials";
import CTASection from "@/components/home/CTASection";

export const metadata: Metadata = {
  title: "Building Inspections Melbourne | Senior Consultants, Risk-Prioritised Reports",
  description:
    "Independent building inspections across Melbourne and Victoria. Pre-purchase, timber pest, dilapidation, owner-builder Section 137B, stage inspections. Senior consultants on every job, AS 4349.1 compliant, plain-language advice.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Building Inspections Melbourne | Urban 360",
    description:
      "Independent building inspections across Melbourne and Victoria. Senior consultants on every job. Inspect to Protect.",
    url: "https://urban360.com.au",
    type: "website",
  },
};

const WEBSITE_JSONLD = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://urban360.com.au/#website",
  url: "https://urban360.com.au",
  name: "Urban 360 Building Inspections",
  publisher: { "@id": "https://urban360.com.au/#business" },
  inLanguage: "en-AU",
};

export default function HomePage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(WEBSITE_JSONLD) }}
      />
      <Hero />
      <ServicesSnapshot />
      <ProblemSolution />
      <HomeEvidenceGallery />
      <HowItWorks />
      <WhyUrban360 />
      <Testimonials />
      <CTASection />
    </>
  );
}
