"use client";

import { AlertTriangle, Thermometer, Eye, DollarSign } from "lucide-react";
import Section from "@/components/Section";
import SplitPanel from "@/components/SplitPanel";

const PROBLEMS = [
  {
    icon: <AlertTriangle size={18} />,
    text: "Hidden structural defects can cost tens of thousands to rectify",
  },
  {
    icon: <Eye size={18} />,
    text: "Moisture, mould, and pest damage are often invisible to the naked eye",
  },
  {
    icon: <DollarSign size={18} />,
    text: "Without expert assessment, you're making decisions based on surface appearances",
  },
  {
    icon: <Thermometer size={18} />,
    text: "Our thermal and UV technology reveals what visual inspections cannot",
  },
];

export default function ProblemSolution() {
  return (
    <Section>
      <SplitPanel
        image="/images/thermal-leak-detection.webp"
        imageAlt="Thermal imaging revealing a hidden ceiling leak — infrared camera view with temperature readings"
        aspectRatio="aspect-[3/4]"
      >
        <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
          Why It Matters
        </p>
        <h2 className="text-3xl md:text-4xl font-bold mb-6 tracking-tight">
          Hidden Defects Cost<br />Homeowners Thousands
        </h2>
        <div className="space-y-4">
          {PROBLEMS.map((item) => (
            <div key={item.text} className="flex items-start gap-3">
              <div className="w-8 h-8 rounded-lg bg-accent/10 flex items-center justify-center shrink-0 mt-0.5">
                {item.icon}
              </div>
              <p className="text-muted leading-relaxed">{item.text}</p>
            </div>
          ))}
        </div>
      </SplitPanel>
    </Section>
  );
}
