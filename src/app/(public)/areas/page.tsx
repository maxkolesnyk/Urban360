import type { Metadata } from "next";
import Link from "next/link";
import {
  MapPin,
  Building2,
  Trees,
  Landmark,
  Waves,
  Compass,
  ArrowUpRight,
  ShieldCheck,
  Clock,
} from "lucide-react";
import Section from "@/components/Section";
import SuburbSearch from "@/components/SuburbSearch";
import { MELBOURNE_AREAS, SITE } from "@/lib/constants";
import AreaCard from "@/components/areas/AreaCard";

export const metadata: Metadata = {
  title: "Areas We Serve",
  description:
    "Urban 360 Building Inspections serves all of Melbourne and regional Victoria. Find building inspection services in your suburb.",
};

const SUBURB_DATA: Record<string, string[]> = {
  "Melbourne CBD": [
    "Melbourne", "Southbank", "Docklands", "West Melbourne", "East Melbourne",
    "Carlton", "North Melbourne", "Parkville", "Flemington", "Kensington",
  ],
  "Inner North": [
    "Fitzroy", "Collingwood", "Abbotsford", "Clifton Hill", "Northcote",
    "Thornbury", "Preston", "Brunswick", "Brunswick East", "Brunswick West",
    "Coburg", "Coburg North", "Pascoe Vale", "Pascoe Vale South", "Fairfield",
    "Alphington", "Fitzroy North", "Edinburgh Gardens",
  ],
  "Inner South": [
    "South Yarra", "Prahran", "Windsor", "St Kilda", "St Kilda East",
    "St Kilda West", "Albert Park", "South Melbourne", "Middle Park",
    "Port Melbourne", "Elwood", "Ripponlea", "Balaclava", "Armadale", "Toorak",
  ],
  "Inner East": [
    "Richmond", "Cremorne", "Burnley", "Hawthorn", "Hawthorn East", "Kew",
    "Kew East", "Camberwell", "Balwyn", "Balwyn North", "Surrey Hills",
    "Mont Albert", "Mont Albert North", "Canterbury", "Deepdene", "Studley Park",
  ],
  "Inner West": [
    "Footscray", "Seddon", "Yarraville", "Williamstown", "Newport", "Spotswood",
    "Kingsville", "West Footscray", "Maidstone", "Braybrook", "Maribyrnong",
    "Altona", "Altona North", "Seaholme", "Williamstown North",
  ],
  "Northern Suburbs": [
    "Reservoir", "Heidelberg", "Heidelberg Heights", "Heidelberg West",
    "Ivanhoe", "Ivanhoe East", "Eaglemont", "Rosanna", "Viewbank",
    "Bundoora", "Mill Park", "South Morang", "Epping", "Wollert",
    "Lalor", "Thomastown", "Kingsbury", "Macleod", "Greensborough",
    "Briar Hill", "Montmorency", "Eltham", "Eltham North", "Diamond Creek",
    "Doreen", "Mernda", "Whittlesea", "Hurstbridge", "Plenty",
    "Yarrambat", "Watsonia", "Watsonia North", "Bellfield",
  ],
  "Southern Suburbs": [
    "Moorabbin", "Bentleigh", "Bentleigh East", "Oakleigh", "Oakleigh East",
    "Oakleigh South", "Carnegie", "Murrumbeena", "Caulfield", "Caulfield East",
    "Caulfield North", "Caulfield South", "Elsternwick", "Ormond", "McKinnon",
    "Glenhuntly", "Glen Eira", "Hughesdale", "Huntingdale", "Clayton",
    "Clayton South", "Springvale", "Springvale South", "Noble Park",
    "Noble Park North", "Keysborough",
  ],
  "Eastern Suburbs": [
    "Box Hill", "Box Hill North", "Box Hill South", "Glen Waverley",
    "Mount Waverley", "Doncaster", "Doncaster East", "Templestowe",
    "Templestowe Lower", "Ringwood", "Ringwood East", "Ringwood North",
    "Blackburn", "Blackburn North", "Blackburn South", "Nunawading",
    "Mitcham", "Forest Hill", "Vermont", "Vermont South", "Wantirna",
    "Wantirna South", "Boronia", "Bayswater", "Bayswater North",
    "Croydon", "Croydon Hills", "Croydon North", "Croydon South",
    "Mooroolbark", "Kilsyth", "Montrose", "Warranwood", "Heathmont",
    "Donvale", "Park Orchards", "Warrandyte", "Bulleen", "Burwood",
    "Burwood East", "Glen Iris", "Ashwood", "Chadstone",
  ],
  "Western Suburbs": [
    "Sunshine", "Sunshine North", "Sunshine West", "St Albans",
    "Caroline Springs", "Deer Park", "Derrimut", "Ravenhall",
    "Werribee", "Point Cook", "Tarneit", "Truganina", "Williams Landing",
    "Melton", "Melton South", "Melton West", "Bacchus Marsh",
    "Hoppers Crossing", "Wyndham Vale", "Manor Lakes", "Lara",
    "Laverton", "Laverton North", "Altona Meadows", "Sydenham",
    "Taylors Lakes", "Taylors Hill", "Hillside", "Rockbank", "Plumpton",
    "Aintree", "Fraser Rise", "Burnside", "Burnside Heights",
  ],
  "South East": [
    "Dandenong", "Dandenong North", "Dandenong South", "Cranbourne",
    "Cranbourne East", "Cranbourne North", "Cranbourne South", "Cranbourne West",
    "Berwick", "Narre Warren", "Narre Warren North", "Narre Warren South",
    "Pakenham", "Officer", "Beaconsfield", "Clyde", "Clyde North",
    "Hallam", "Endeavour Hills", "Lynbrook", "Lyndhurst", "Hampton Park",
    "Doveton", "Eumemmerring", "Fountain Gate", "Nar Nar Goon",
  ],
  "Mornington Peninsula": [
    "Mornington", "Frankston", "Frankston North", "Frankston South",
    "Mount Martha", "Mount Eliza", "Rosebud", "Rosebud West", "Dromana",
    "Sorrento", "Portsea", "Rye", "Blairgowrie", "Tootgarook",
    "Safety Beach", "McCrae", "Red Hill", "Red Hill South", "Hastings",
    "Somerville", "Baxter", "Langwarrin", "Langwarrin South", "Seaford",
    "Carrum Downs", "Skye", "Bittern", "Balnarring", "Somers", "Tyabb",
    "Karingal", "Sandhurst",
  ],
  "Yarra Ranges": [
    "Lilydale", "Healesville", "Mount Evelyn", "Belgrave", "Belgrave Heights",
    "Belgrave South", "Olinda", "Monbulk", "Sassafras", "Ferntree Gully",
    "Upper Ferntree Gully", "Upwey", "Tecoma", "Kallista", "The Patch",
    "Emerald", "Cockatoo", "Gembrook", "Yarra Glen", "Wandin North",
    "Seville", "Seville East", "Silvan", "Mount Dandenong", "Kalorama",
    "Chirnside Park", "Mooroolbark", "Kilsyth South", "Woori Yallock",
    "Launching Place", "Warburton", "Yarra Junction",
  ],
  Bayside: [
    "Brighton", "Brighton East", "Hampton", "Hampton East", "Sandringham",
    "Black Rock", "Beaumaris", "Cheltenham", "Highett", "Mentone",
    "Parkdale", "Mordialloc", "Aspendale", "Aspendale Gardens", "Edithvale",
    "Chelsea", "Chelsea Heights", "Bonbeach", "Carrum", "Patterson Lakes",
  ],
  "Greater Geelong": [
    "Geelong", "Geelong West", "Newtown", "Belmont", "Highton",
    "Corio", "Norlane", "Bell Park", "Bell Post Hill", "Lara",
    "Ocean Grove", "Barwon Heads", "Torquay", "Jan Juc", "Grovedale",
    "Waurn Ponds", "Armstrong Creek", "Clifton Springs", "Drysdale",
    "Leopold", "Lovely Banks", "Point Lonsdale", "Queenscliff",
    "Portarlington", "Indented Head", "St Leonards",
  ],
};

const REGION_META: Record<
  string,
  { icon: "cbd" | "inner" | "outer" | "bay" | "country"; blurb: string }
> = {
  "Melbourne CBD": {
    icon: "cbd",
    blurb: "High-density apartments, heritage conversions, and warehouse builds.",
  },
  "Inner North": {
    icon: "inner",
    blurb: "Terrace homes, Victorian-era stock, and modern infill developments.",
  },
  "Inner South": {
    icon: "inner",
    blurb: "Period homes through to premium new builds across the south.",
  },
  "Inner East": {
    icon: "inner",
    blurb: "Prestige family homes, renovations, and established residences.",
  },
  "Inner West": {
    icon: "inner",
    blurb: "Worker-cottage heritage stock alongside contemporary townhouses.",
  },
  "Northern Suburbs": {
    icon: "outer",
    blurb: "Family homes, new estates, and established residential pockets.",
  },
  "Southern Suburbs": {
    icon: "outer",
    blurb: "Suburban family homes and period-era properties across the south.",
  },
  "Eastern Suburbs": {
    icon: "outer",
    blurb: "Detached homes, unit developments, and mature residential streets.",
  },
  "Western Suburbs": {
    icon: "outer",
    blurb: "Greenfield estates, new builds, and growth-corridor properties.",
  },
  "South East": {
    icon: "outer",
    blurb: "Growth-corridor housing, new estates, and established suburbs.",
  },
  "Mornington Peninsula": {
    icon: "bay",
    blurb: "Coastal homes, holiday properties, and lifestyle acreage.",
  },
  "Yarra Ranges": {
    icon: "country",
    blurb: "Hills homes, rural properties, and bushland residences.",
  },
  Bayside: {
    icon: "bay",
    blurb: "Waterfront properties, bay-side heritage, and premium residences.",
  },
  "Greater Geelong": {
    icon: "country",
    blurb: "Regional homes, coastal properties, and growth-area builds.",
  },
};

const ICON_FOR_REGION: Record<string, React.ReactNode> = {
  cbd: <Building2 size={18} strokeWidth={1.75} />,
  inner: <Landmark size={18} strokeWidth={1.75} />,
  outer: <Compass size={18} strokeWidth={1.75} />,
  bay: <Waves size={18} strokeWidth={1.75} />,
  country: <Trees size={18} strokeWidth={1.75} />,
};

export default function AreasPage() {
  const totalSuburbs = Object.values(SUBURB_DATA).reduce(
    (acc, list) => acc + list.length,
    0
  );

  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Areas We Serve
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
              Melbourne and beyond,<br />
              <span className="text-neutral-500">covered.</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl">
              Urban 360 inspects properties across metropolitan Melbourne,
              regional Victoria, and the coastal peninsulas. Licensed
              state-wide, on the ground where it matters.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              <Link
                href="#suburb-search"
                className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
              >
                Check your suburb
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
              <Link
                href="/contact"
                className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-6 py-3 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
              >
                Book an inspection
                <ArrowUpRight
                  size={15}
                  className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                />
              </Link>
            </div>
          </div>

          <div className="lg:col-span-5 lg:pt-2">
            <div className="grid grid-cols-2 gap-3">
              <div className="p-5 bg-white rounded-2xl ring-1 ring-neutral-200/80">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-4">
                  <MapPin size={16} strokeWidth={1.75} />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {MELBOURNE_AREAS.length}
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Regions covered
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl ring-1 ring-neutral-200/80">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-4">
                  <Compass size={16} strokeWidth={1.75} />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                  {totalSuburbs}+
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Suburbs inspected
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl ring-1 ring-neutral-200/80">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-4">
                  <ShieldCheck size={16} strokeWidth={1.75} />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                  VIC
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  State-wide licensed
                </p>
              </div>
              <div className="p-5 bg-white rounded-2xl ring-1 ring-neutral-200/80">
                <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-4">
                  <Clock size={16} strokeWidth={1.75} />
                </div>
                <p className="text-2xl font-semibold tracking-tight text-neutral-900">
                  2 hr
                </p>
                <p className="text-xs text-neutral-500 mt-1">
                  Enquiry response
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 md:mt-20">
          <div className="max-w-3xl mx-auto text-center mb-8">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Suburb Check
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] text-neutral-900">
              Do we cover your street?
            </h2>
          </div>
          <SuburbSearch
            suburbs={Object.entries(SUBURB_DATA).flatMap(([region, suburbs]) =>
              suburbs.map((name) => ({ name, region }))
            )}
          />
        </div>
      </Section>

      {/* Region grid */}
      <Section className="bg-neutral-50">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14 md:mb-16">
          <div className="max-w-2xl">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Regions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
              Fourteen regions,<br />
              <span className="text-neutral-500">one standard.</span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-sm">
            From CBD warehouse conversions to the Peninsula coast, we bring
            the same senior consultant to every inspection.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
          {MELBOURNE_AREAS.map((area, i) => {
            const all = SUBURB_DATA[area] || [];
            const shown = all.slice(0, 5);
            const remaining = all.length - shown.length;
            const meta = REGION_META[area] ?? {
              icon: "outer" as const,
              blurb: "Building inspections across the region.",
            };

            return (
              <AreaCard
                key={area}
                index={i}
                name={area}
                blurb={meta.blurb}
                icon={ICON_FOR_REGION[meta.icon]}
                shown={shown}
                remaining={remaining}
              />
            );
          })}
        </div>
      </Section>

      {/* Service radius narrative */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-5">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Service Radius
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
              State-wide reach,<br />
              <span className="text-neutral-500">local experience.</span>
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
              We&apos;re licensed to inspect throughout Victoria and regularly
              work beyond the Melbourne metropolitan line — Geelong, the
              Peninsula, the Yarra Ranges, and further on request.
            </p>
          </div>

          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-3 md:gap-4">
            <div className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Building2 size={18} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-2">
                Metropolitan Melbourne
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Same-day capacity across the inner city, inner north, inner
                south, and inner east. Standard metro travel included.
              </p>
            </div>
            <div className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Compass size={18} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-2">
                Growth corridors
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Regular inspections in the western growth corridor, south-east
                growth corridor, and greater northern suburbs.
              </p>
            </div>
            <div className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Waves size={18} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-2">
                Bay &amp; coastal
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Bayside, Mornington Peninsula, and Bellarine coast inspections
                with salt-air and exposure-specific assessment.
              </p>
            </div>
            <div className="group relative p-6 md:p-7 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white mb-5 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                <Trees size={18} strokeWidth={1.75} />
              </div>
              <h3 className="font-semibold text-neutral-900 text-[15px] tracking-tight mb-2">
                Regional Victoria
              </h3>
              <p className="text-neutral-500 text-sm leading-relaxed">
                Yarra Ranges, Greater Geelong, and regional callouts on
                request. Travel quoted transparently upfront.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* Closing CTA */}
      <Section className="bg-neutral-950 text-white">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-white/60">
              Not Sure?
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] mb-6">
            Don&apos;t see your suburb?<br />
            <span className="text-white/60">Ask us.</span>
          </h2>
          <p className="text-base md:text-lg text-white/70 leading-relaxed max-w-2xl mx-auto mb-10">
            Our listed regions aren&apos;t exhaustive — they&apos;re the areas
            we inspect most often. If your property is elsewhere in Victoria,
            we likely still cover it. Send through a quick enquiry and
            we&apos;ll confirm availability.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-accent text-black px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-white transition-all"
            >
              Enquire about your suburb
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="group inline-flex items-center gap-2 bg-white/5 ring-1 ring-white/15 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-white/10 hover:ring-white/30 transition-all"
            >
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
