import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { SERVICES } from "@/lib/constants";
import { SERVICE_CONTENT, SERVICE_HERO_IMAGES } from "@/lib/service-content";
import ServiceDetailClient from "./ServiceDetailClient";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return SERVICES.map((s) => ({ slug: s.slug }));
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const content = SERVICE_CONTENT.find((s) => s.slug === slug);
  if (!content) return {};
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: `/services/${slug}` },
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: `https://urban360.com.au/services/${slug}`,
      type: "website",
      images: SERVICE_HERO_IMAGES[slug] ? [{ url: SERVICE_HERO_IMAGES[slug] }] : undefined,
    },
  };
}

export default async function ServicePage({ params }: PageProps) {
  const { slug } = await params;
  const content = SERVICE_CONTENT.find((s) => s.slug === slug);

  if (!content) notFound();

  const relatedServices = SERVICES.filter((s) =>
    content.relatedServices.includes(s.slug)
  ).map((s) => ({
    slug: s.slug,
    title: s.title,
    shortDescription: s.shortDescription,
    icon: s.icon,
    heroImage: SERVICE_HERO_IMAGES[s.slug],
  }));
  const heroImage = SERVICE_HERO_IMAGES[slug];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `https://urban360.com.au/services/${slug}#service`,
    name: content.headline,
    description: content.metaDescription,
    serviceType: content.headline,
    provider: { "@id": "https://urban360.com.au/#business" },
    areaServed: [
      { "@type": "State", name: "Victoria" },
      { "@type": "City", name: "Melbourne" },
    ],
    url: `https://urban360.com.au/services/${slug}`,
    ...(heroImage ? { image: `https://urban360.com.au${heroImage}` } : {}),
  };

  const breadcrumbJsonLd = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://urban360.com.au" },
      { "@type": "ListItem", position: 2, name: "Services", item: "https://urban360.com.au/services" },
      { "@type": "ListItem", position: 3, name: content.headline, item: `https://urban360.com.au/services/${slug}` },
    ],
  };

  const serviceFaqJsonLd = content.faqs.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: content.faqs.map((q) => ({
          "@type": "Question",
          name: q.q,
          acceptedAnswer: { "@type": "Answer", text: q.a },
        })),
      }
    : null;

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceJsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbJsonLd) }}
      />
      {serviceFaqJsonLd && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(serviceFaqJsonLd) }}
        />
      )}
      <ServiceDetailClient
        content={content}
        heroImage={heroImage}
        relatedServices={relatedServices}
      />
    </>
  );
}
