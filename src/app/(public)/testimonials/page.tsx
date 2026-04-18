import type { Metadata } from "next";
import TestimonialsView from "@/components/TestimonialsView";

export const metadata: Metadata = {
  title: "Client Testimonials",
  description:
    "Real feedback from Melbourne homeowners, investors, and buyers who've trusted Urban 360 with their building inspections.",
};

export default function TestimonialsPage() {
  return <TestimonialsView />;
}
