import type { Metadata } from "next";
import WhyUrban360PageClient from "./WhyUrban360PageClient";

export const metadata: Metadata = {
  title: "Why Choose Urban 360",
  description:
    "Urban 360 is not a marketplace, franchise, or checklist inspector. Discover what makes our building inspections different — senior consultants, AS 4349.1 grounded, risk-prioritised reporting, and advanced thermal/UV diagnostics.",
};

export default function WhyUrban360Page() {
  return <WhyUrban360PageClient />;
}
