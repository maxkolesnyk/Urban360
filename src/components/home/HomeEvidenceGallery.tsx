"use client";

import Section from "@/components/Section";
import EvidenceGallery from "@/components/EvidenceGallery";

const GALLERY_ITEMS = [
  {
    src: "/images/thermal-cold-spot.webp",
    alt: "Thermal imaging detecting insulation gaps",
    caption: "Insulation gaps detected via thermal imaging",
  },
  {
    src: "/images/thermal-leak-ceiling.webp",
    alt: "Infrared scan detecting hidden ceiling leak",
    caption: "Hidden ceiling leak identified before damage spread",
  },
  {
    src: "/images/mould-uv.webp",
    alt: "UV light revealing hidden mould contamination",
    caption: "UV light revealing hidden mould colonies",
  },
  {
    src: "/images/mould-uv-door.webp",
    alt: "Mould contamination detected around door frame",
    caption: "Mould contamination around a door frame",
  },
  {
    src: "/images/termite-damage.webp",
    alt: "Severe termite damage to structural timber",
    caption: "Severe termite damage to structural timber",
  },
  {
    src: "/images/termite-colony.webp",
    alt: "Active termite colony discovered during inspection",
    caption: "Active termite colony discovered on-site",
  },
  {
    src: "/images/thermal-appliance.webp",
    alt: "Thermal scan of building systems",
    caption: "Building system assessment via thermal scan",
  },
];

export default function HomeEvidenceGallery() {
  return (
    <Section variant="dark" className="dark-section overflow-hidden">
      <EvidenceGallery
        items={GALLERY_ITEMS}
        heading="See What Our Inspections Reveal"
        subheading="Real Evidence From Real Inspections"
      />
    </Section>
  );
}
