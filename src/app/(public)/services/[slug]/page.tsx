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

  return (
    <ServiceDetailClient
      content={content}
      heroImage={heroImage}
      relatedServices={relatedServices}
    />
  );
}
