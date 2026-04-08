"use client";

import Section from "@/components/Section";
import LargeQuote from "@/components/LargeQuote";
import { GOOGLE_REVIEWS } from "@/lib/reviews";

// Adrian Miller — most descriptive and impactful review
const FEATURED = GOOGLE_REVIEWS[0];

export default function FeaturedTestimonial() {
  return (
    <Section variant="dark" className="dark-section">
      <LargeQuote
        quote={FEATURED.text!}
        author={FEATURED.name}
        service={FEATURED.service}
        date={FEATURED.date}
        stars={FEATURED.rating}
      />
    </Section>
  );
}
