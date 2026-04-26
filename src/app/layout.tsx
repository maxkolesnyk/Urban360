import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SITE } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://urban360.com.au"),
  title: {
    default: "Urban 360 Building Inspections | Melbourne Building Surveyors",
    template: "%s | Urban 360 Building Inspections",
  },
  description:
    "Independent building inspections across Melbourne and Victoria. Senior consultants on every job, risk-prioritised reports, plain-language advice. AS 4349.1 compliant.",
  keywords: [
    "building inspection Melbourne",
    "pre-purchase building inspection Melbourne",
    "building surveyor Melbourne",
    "dilapidation report Melbourne",
    "owner builder defect report Victoria",
    "timber pest inspection Melbourne",
    "AS 4349.1 building inspection",
    "Section 137B defect report Melbourne",
  ],
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Urban 360 Building Inspections | Melbourne Building Surveyors",
    description:
      "Independent building inspections across Melbourne and Victoria. Senior consultants on every job. Inspect to Protect.",
    url: "https://urban360.com.au",
    siteName: "Urban 360 Building Inspections",
    locale: "en_AU",
    type: "website",
    images: [
      {
        url: "/images/urban360-logo-v3.webp",
        width: 1200,
        height: 190,
        alt: "Urban 360 Building Inspections",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Urban 360 Building Inspections | Melbourne Building Surveyors",
    description:
      "Independent building inspections across Melbourne and Victoria. Senior consultants on every job.",
    images: ["/images/urban360-logo-v3.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

const ORG_JSONLD = {
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "ProfessionalService"],
  "@id": "https://urban360.com.au/#business",
  name: "Urban 360 Building Inspections",
  alternateName: "Urban 360",
  description:
    "Independent building inspections across Melbourne and Victoria. Pre-purchase, timber pest, dilapidation, owner-builder Section 137B, rental minimum standards, new construction stage, mould, and thermal assessments.",
  url: "https://urban360.com.au",
  logo: "https://urban360.com.au/images/urban360-logo-v3.webp",
  image: "https://urban360.com.au/images/urban360-logo-v3.webp",
  telephone: SITE.phone,
  email: SITE.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Melbourne",
    addressRegion: "VIC",
    addressCountry: "AU",
  },
  areaServed: [
    { "@type": "State", name: "Victoria" },
    { "@type": "City", name: "Melbourne" },
  ],
  founder: {
    "@type": "Person",
    name: SITE.founder,
    jobTitle: SITE.founderTitle,
  },
  knowsAbout: [
    "Pre-Purchase Building Inspections",
    "Timber Pest Inspections",
    "Dilapidation Reports",
    "Owner-Builder Defect Reports",
    "Section 137B Reports",
    "Rental Minimum Standards Assessments",
    "New Construction Stage Inspections",
    "Mould Audits",
    "Thermal Imaging Assessments",
    "AS 4349.1",
    "AS 3660.2",
    "National Construction Code",
  ],
  sameAs: [],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(ORG_JSONLD) }}
        />
        {children}
      </body>
    </html>
  );
}
