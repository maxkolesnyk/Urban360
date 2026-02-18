import type { Metadata } from "next";
import { Star, ArrowRight, Calendar, ExternalLink } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { GOOGLE_REVIEWS, REVIEW_STATS } from "@/lib/reviews";

export const metadata: Metadata = {
  title: "Testimonials",
  description:
    "Read what Melbourne property owners say about Urban 360 Building Inspections. 20 five-star Google reviews from real clients across Melbourne.",
};

export default function TestimonialsPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
            Google Reviews
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {REVIEW_STATS.total} Five-Star Reviews on{" "}
            <span className="text-white">Google</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Real, verified reviews from Melbourne property owners. Every review
            reflects our commitment to technical clarity, genuine care, and
            expert guidance.
          </p>
        </div>

        {/* Stats bar */}
        <div className="mt-10 flex flex-wrap gap-6 items-center">
          <div className="flex items-center gap-2">
            <span className="text-4xl font-bold text-white">
              {REVIEW_STATS.average}
            </span>
            <div>
              <div className="flex gap-0.5">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star
                    key={i}
                    size={16}
                    className="text-amber-500 fill-amber-500"
                  />
                ))}
              </div>
              <p className="text-sm text-muted mt-0.5">
                {REVIEW_STATS.total} reviews
              </p>
            </div>
          </div>
          <div className="h-8 w-px bg-border" />
          <div className="flex items-center gap-2 text-sm text-muted">
            <svg viewBox="0 0 24 24" className="w-5 h-5" fill="none">
              <path
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92a5.06 5.06 0 01-2.2 3.32v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.1z"
                fill="#4285F4"
              />
              <path
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                fill="#34A853"
              />
              <path
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                fill="#FBBC05"
              />
              <path
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                fill="#EA4335"
              />
            </svg>
            Verified Google Reviews
          </div>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {GOOGLE_REVIEWS.map((review, i) => (
            <div
              key={i}
              className="bg-background border border-border rounded-2xl p-7 hover:border-black/[0.06] transition-colors flex flex-col"
            >
              {/* Stars */}
              <div className="flex gap-0.5 mb-4">
                {Array.from({ length: review.rating }).map((_, j) => (
                  <Star
                    key={j}
                    size={15}
                    className="text-amber-500 fill-amber-500"
                  />
                ))}
              </div>

              {/* Review text */}
              {review.text ? (
                <p className="text-foreground leading-relaxed mb-5 flex-1">
                  &ldquo;{review.text}&rdquo;
                </p>
              ) : (
                <div className="flex-1" />
              )}

              {/* Author */}
              <div className="border-t border-border pt-4">
                <p className="font-semibold">{review.name}</p>
                <div className="flex items-center gap-3 text-sm text-muted mt-1">
                  {review.service && <span>{review.service}</span>}
                  {review.service && <span>&middot;</span>}
                  <span className="flex items-center gap-1">
                    <Calendar size={11} /> {review.date}
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Experience the Difference?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Join Melbourne property owners who trust Urban 360 for clear,
            expert-led building inspections.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contact"
              className="relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all glass-shimmer"
            >
              Book Your Inspection <ArrowRight size={18} />
            </Link>
            <a
              href="https://www.google.com/search?q=urban+360+building+inspections#lrd=0x2322d91bf85dfccf:0xf96a1cc65aed04db,1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 border border-border text-foreground px-8 py-4 rounded-xl text-base font-medium hover:bg-surface-light transition-all"
            >
              <ExternalLink size={16} />
              View on Google
            </a>
          </div>
        </div>
      </Section>
    </>
  );
}
