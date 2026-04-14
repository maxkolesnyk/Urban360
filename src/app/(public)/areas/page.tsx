import type { Metadata } from "next";
import { MapPin, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import SuburbSearch from "@/components/SuburbSearch";
import { MELBOURNE_AREAS } from "@/lib/constants";

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

export default function AreasPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Service Areas
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Serving All of{" "}
            <span className="text-muted">Melbourne &amp; Victoria</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Urban 360 provides building inspection services across metropolitan
            Melbourne and regional Victoria. Licensed to operate throughout the
            state, we cover all suburbs and regions listed below.
          </p>
        </div>
        <div className="mt-10">
          <SuburbSearch
            suburbs={Object.entries(SUBURB_DATA).flatMap(([region, suburbs]) =>
              suburbs.map((name) => ({ name, region }))
            )}
          />
        </div>
      </Section>

      <Section>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {MELBOURNE_AREAS.map((area) => {
            const all = SUBURB_DATA[area] || [];
            const shown = all.slice(0, 5);
            const remaining = all.length - shown.length;
            return (
              <div
                key={area}
                className="bg-white border border-border rounded-2xl p-6 hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="flex items-center gap-3 mb-4">
                  <MapPin size={20} className="text-foreground" />
                  <h3 className="text-lg font-semibold">{area}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {shown.map((suburb) => (
                    <span
                      key={suburb}
                      className="text-sm bg-surface text-muted px-3 py-1 rounded-full"
                    >
                      {suburb}
                    </span>
                  ))}
                  {remaining > 0 && (
                    <a
                      href="#suburb-search"
                      className="text-sm bg-accent/10 text-foreground font-medium px-3 py-1 rounded-full hover:bg-accent/20 transition-colors"
                    >
                      +{remaining} more
                    </a>
                  )}
                </div>
              </div>
            );
          })}
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
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Get in Touch <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
