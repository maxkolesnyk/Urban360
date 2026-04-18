import type { Metadata } from "next";
import ServicesIndexClient from "./ServicesIndexClient";

export const metadata: Metadata = {
  title: "Services",
  description:
    "Comprehensive building inspection and compliance services across Melbourne. Pre-purchase inspections, timber pest assessments, mould audits, thermal imaging, and more.",
};

export default function ServicesPage() {
  return <ServicesIndexClient />;
}
