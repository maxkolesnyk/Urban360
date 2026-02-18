import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { MELBOURNE_AREAS } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Urban 360 Building Inspections serves all of Melbourne and regional Victoria. Find building inspection services in your suburb.",
};

const SUBURB_EXAMPLES: Record<string, string[]> = {
  "Melbourne CBD": [
    "Melbourne",
    "Southbank",
    "Docklands",
    "West Melbourne",
    "East Melbourne",
  ],
  "Inner North": [
    "Carlton",
    "Fitzroy",
    "Collingwood",
    "Brunswick",
    "Northcote",
    "Thornbury",
    "Preston",
  ],
  "Inner South": [
    "South Yarra",
    "Prahran",
    "Windsor",
    "St Kilda",
    "Albert Park",
    "South Melbourne",
  ],
  "Inner East": [
    "Richmond",
    "Hawthorn",
    "Kew",
    "Camberwell",
    "Balwyn",
    "Surrey Hills",
  ],
  "Inner West": [
    "Footscray",
    "Seddon",
    "Yarraville",
    "Williamstown",
    "Newport",
    "Spotswood",
  ],
  "Northern Suburbs": [
    "Reservoir",
    "Heidelberg",
    "Ivanhoe",
    "Bundoora",
    "Mill Park",
    "South Morang",
  ],
  "Southern Suburbs": [
    "Moorabbin",
    "Bentleigh",
    "Oakleigh",
    "Carnegie",
    "Caulfield",
    "Elsternwick",
  ],
  "Eastern Suburbs": [
    "Box Hill",
    "Glen Waverley",
    "Doncaster",
    "Templestowe",
    "Ringwood",
    "Blackburn",
  ],
  "Western Suburbs": [
    "Sunshine",
    "Caroline Springs",
    "Werribee",
    "Point Cook",
    "Tarneit",
    "Melton",
  ],
  "South East": [
    "Dandenong",
    "Cranbourne",
    "Berwick",
    "Narre Warren",
    "Pakenham",
    "Officer",
  ],
  "Mornington Peninsula": [
    "Mornington",
    "Frankston",
    "Mount Martha",
    "Rosebud",
    "Dromana",
    "Sorrento",
  ],
  "Yarra Ranges": [
    "Lilydale",
    "Healesville",
    "Mount Evelyn",
    "Belgrave",
    "Olinda",
    "Monbulk",
  ],
  Bayside: [
    "Brighton",
    "Hampton",
    "Sandringham",
    "Black Rock",
    "Beaumaris",
    "Cheltenham",
  ],
  "Greater Geelong": [
    "Geelong",
    "Belmont",
    "Newtown",
    "Corio",
    "Lara",
    "Ocean Grove",
  ],
};

export default function AreasPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Serving All of{" "}
            <span className="text-white">Melbourne &amp; Victoria</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Urban 360 provides building inspection services across metropolitan
            Melbourne and regional Victoria. Licensed to operate throughout the
            state, we cover all suburbs and regions listed below.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MELBOURNE_AREAS.map((area) => (
            <div
              key={area}
              className="bg-background border border-border rounded-2xl p-6 hover:border-black/8 transition-colors"
            >
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={20} className="text-white" />
                <h3 className="text-lg font-semibold">{area}</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {(SUBURB_EXAMPLES[area] || []).map((suburb) => (
                  <span
                    key={suburb}
                    className="text-sm bg-surface-light text-muted px-3 py-1 rounded-full"
                  >
                    {suburb}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Don&apos;t See Your Suburb?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            We cover all of Victoria. Get in touch and we&apos;ll confirm
            availability for your area.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
