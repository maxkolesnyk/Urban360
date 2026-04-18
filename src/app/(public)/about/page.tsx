import type { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "About",
  description:
    "Urban 360 Building Inspections — a team of qualified professionals delivering technically rigorous property assessments across Melbourne and Victoria.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
