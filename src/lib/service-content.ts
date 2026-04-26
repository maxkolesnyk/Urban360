interface FAQ {
  q: string;
  a: string;
}

interface ProcessStep {
  step: string;
  description: string;
}

interface RiskCategory {
  level: string;
  color: string;
  description: string;
}

interface ServiceImage {
  src: string;
  alt: string;
}

export const SERVICE_HERO_IMAGES: Record<string, string> = {
  "pre-purchase-inspections": "/images/property-exterior-pool.webp",
  "timber-pest-inspections": "/images/termite2.png",
  "dilapidation-reports": "/images/dilapidation.jpg",
  "owner-builder-defect-reports": "/images/construction-workers.webp",
  "rental-minimum-standards": "/images/property-interior-modern.webp",
  "new-construction-stage-inspections": "/images/construction-aerial.webp",
  "mould-audit": "/images/mould-uv.webp",
  "thermal-assessment": "/images/thermal-leak-detection.webp",
};

export interface ServiceContent {
  slug: string;
  metaTitle: string;
  metaDescription: string;
  headline: string;
  intro: string;
  images?: ServiceImage[];
  idealFor: string[];
  whatIsIt: string;
  whatsInspected: string[];
  whyItMatters: string;
  whyItMattersPoints: string[];
  howWeDoDifferently: string;
  differentiatorPoints: string[];
  process: ProcessStep[];
  whatYouGet: string[];
  riskCategories?: RiskCategory[];
  turnaround: string;
  faqs: FAQ[];
  relatedServices: string[];
}

export const SERVICE_CONTENT: ServiceContent[] = [
  {
    slug: "pre-purchase-inspections",
    metaTitle: "Pre-Purchase Building Inspections Melbourne",
    metaDescription:
      "AS 4349.1 compliant pre-purchase building inspections in Melbourne. Risk-prioritised reporting, expert guidance for negotiation, and clear property condition insights.",
    headline: "Pre-Purchase Building Inspections",
    intro:
      "Protect your biggest investment with confidence. Our pre-purchase building inspection service is designed to give you complete clarity before you commit. We deliver a thorough, independent assessment of the property's condition — so you can proceed with certainty and peace of mind.",
    idealFor: [
      "Home buyers (first-time and experienced)",
      "Property investors conducting due diligence",
      "Conveyancers and solicitors acting on behalf of buyers",
      "Buyers' advocates sourcing properties for clients",
    ],
    whatIsIt:
      "Our qualified, experienced inspectors look beyond the surface to uncover defects, structural concerns, safety hazards, termite or pest activity, and potential hidden risks. Every accessible area is carefully examined using advanced diagnostic tools, allowing us not only to identify existing issues but also highlight areas that may lead to future problems.",
    whatsInspected: [
      "Structural elements — foundations, footings, framing, load-bearing walls",
      "Exterior — cladding, brickwork, render, paintwork, fascia, guttering",
      "Roofing — roof covering, flashing, penetrations, valleys, ridge capping",
      "Interior — walls, ceilings, floors, doors, windows, joinery",
      "Wet areas — bathrooms, laundry, kitchen (moisture, waterproofing indicators)",
      "Subfloor — stumps, bearers, joists, ventilation, moisture (where accessible)",
      "Roof void — framing, insulation, ventilation, sarking (where accessible)",
      "Site drainage — surface water flow, stormwater, grading around building",
      "Garage, carport, and outbuildings",
      "Fencing, retaining walls, paths, and driveways",
    ],
    whyItMatters:
      "Hidden defects can cost tens of thousands to rectify. A thorough pre-purchase inspection protects your investment and gives you the information you need to make a confident decision.",
    whyItMattersPoints: [
      "Identify defects before they become your problem",
      "Understand the true condition beyond cosmetic presentation",
      "Gain negotiation leverage backed by expert evidence",
      "Avoid properties with major structural or safety issues",
      "Budget for future maintenance and repairs with clarity",
      "Meet due diligence requirements for finance and insurance",
    ],
    howWeDoDifferently:
      "What sets us apart is our personalised approach. We take the time to walk you through our findings, providing clear, practical insights so you fully understand the condition of the property and its implications.",
    differentiatorPoints: [
      "Risk-prioritised findings — categorised by severity, not just listed",
      "Clear explanations of what each defect means in plain language",
      "Future risk assessment — not just current condition, but what's coming",
      "Negotiation guidance tailored to your specific findings",
      "Direct access to your senior consultant — before, during, and after",
      "No call centres, no junior inspectors, no generic templates",
    ],
    process: [
      {
        step: "Book & Brief",
        description:
          "Contact us with the property details. We'll confirm scope, discuss any specific concerns you have, and schedule the inspection.",
      },
      {
        step: "On-Site Inspection",
        description:
          "Our consultant conducts a thorough 1.5–3 hour assessment of all accessible areas. You're welcome to attend — we encourage it.",
      },
      {
        step: "Report Delivery",
        description:
          "You receive a comprehensive, photographically documented report with risk-prioritised findings — typically same-day or within 24 hours.",
      },
      {
        step: "Consultation & Advice",
        description:
          "We walk you through the report, explain key findings, answer your questions, and provide guidance to support your decision and negotiation.",
      },
    ],
    whatYouGet: [
      "Comprehensive AS 4349.1 compliant inspection report",
      "Risk-prioritised findings categorised as Major, Minor, or Safety",
      "High-resolution photography of all identified defects",
      "Clear written explanations of each finding and its implications",
      "Post-inspection phone/video consultation included",
      "Negotiation guidance based on report findings",
      "Digital PDF delivered to your email",
    ],
    riskCategories: [
      {
        level: "Major Defect",
        color: "text-red-600",
        description:
          "A defect of sufficient magnitude where rectification must be carried out to avoid unsafe conditions, loss of utility, or further deterioration. Examples: significant structural cracking, failed waterproofing, major roof damage.",
      },
      {
        level: "Minor Defect",
        color: "text-amber-600",
        description:
          "A defect that is not of sufficient magnitude to warrant Major classification but requires attention. Examples: cracked tiles, minor render cracking, worn weatherstripping, aging fixtures.",
      },
      {
        level: "Safety Hazard",
        color: "text-accent",
        description:
          "A condition that presents an immediate or near-immediate risk to occupant safety. Examples: missing balustrades, unsafe electrical, non-compliant smoke detectors, trip hazards.",
      },
    ],
    turnaround:
      "Within 24 hours, you'll receive a comprehensive, easy-to-read report featuring detailed descriptions, high-quality images, and actionable recommendations — giving you the knowledge and confidence to make the right decision.",
    faqs: [
      {
        q: "How long does a pre-purchase inspection take?",
        a: "Typically 1.5 to 3 hours depending on the property size, age, and complexity. Larger or older properties take longer. We never rush — thoroughness is more important than speed.",
      },
      {
        q: "When will I receive the report?",
        a: "Most reports are delivered same-day or within 24 hours of the inspection. If you have an urgent deadline (auction, cooling-off period), let us know and we'll prioritise accordingly.",
      },
      {
        q: "Can I attend the inspection?",
        a: "Absolutely. We encourage it. Being on-site allows us to show you findings in real time, answer questions, and give you a much stronger understanding of the property's condition. If you can't attend, we'll arrange a detailed phone or video consultation after.",
      },
      {
        q: "What areas are NOT covered in a standard building inspection?",
        a: "As per AS 4349.1, the inspection is a visual assessment of reasonably accessible areas. It does not include concealed areas behind walls/ceilings, invasive testing, or specialist assessments such as timber pest, asbestos, electrical, plumbing, or structural engineering. We can arrange these as additional services.",
      },
      {
        q: "Should I get a pest inspection too?",
        a: "Yes — we strongly recommend a combined building and timber pest inspection. Termite damage is one of the most common and costly issues in Melbourne properties, and it's often not visible during a standard building inspection alone.",
      },
      {
        q: "Can the report be used for insurance or finance purposes?",
        a: "Our reports are designed to meet AS 4349.1 requirements and can support insurance and finance applications. However, specific lender or insurer requirements vary — contact us if you need a particular format.",
      },
    ],
    relatedServices: [
      "timber-pest-inspections",
      "dilapidation-reports",
      "new-construction-stage-inspections",
    ],
  },
  {
    slug: "timber-pest-inspections",
    metaTitle: "Timber Pest Inspections Melbourne",
    metaDescription:
      "Comprehensive timber pest inspections in Melbourne. Termite activity detection, damage assessment, and risk condition analysis. Protect your property investment.",
    headline: "Timber Pest Inspections",
    intro:
      "Safeguard your property from hidden threats. Our professional pest inspection service is designed to identify and assess the presence and extent of pest activity and damage within the property. By detecting early signs of termites, vermin, and other destructive insects, we help you address issues before they escalate into costly damage.",
    idealFor: [
      "Home buyers (pre-purchase pest assessment)",
      "Existing homeowners (annual inspection as per AS 3660.2)",
      "Property investors assessing portfolio risk",
      "Property managers managing landlord compliance",
    ],
    whatIsIt:
      "Our licensed pest inspectors specialise in detecting timber pests such as termites and wood borers, vermin, and other common infestations. The inspection includes a thorough review of the site, exterior, interior, and surrounding areas of the property. We check for active infestations, signs of existing damage, and environmental conditions that may attract pests in the future. We also assess any previous termite treatments and provide clear, practical advice on whether further treatment or ongoing maintenance is needed.",
    whatsInspected: [
      "Interior — skirting boards, architraves, door frames, window frames, flooring",
      "Subfloor — stumps, bearers, joists, piers, ant caps (where accessible)",
      "Roof void — framing, trusses, battens, rafters (where accessible)",
      "Exterior — cladding, weep holes, expansion joints, attached structures",
      "Wet areas — bathroom, laundry, kitchen surrounds",
      "Garden and landscaping — trees, stumps, garden beds against building",
      "Fencing — timber fences, retaining walls, posts",
      "Conducive conditions — drainage, ventilation, stored timber, soil-to-timber contact",
    ],
    whyItMatters:
      "Termites and wood-boring insects can cause significant structural damage, affecting foundations, walls, and key building elements. Our detailed pest inspections help minimise repair costs, protect the property's structural integrity, and give you confidence to protect your assets.",
    whyItMattersPoints: [
      "Termite damage can exceed $100,000+ in repair costs",
      "Structural integrity can be compromised without visible signs",
      "Insurance typically does NOT cover termite damage",
      "Melbourne and regional Victoria are high-risk termite areas",
      "Early detection saves thousands in treatment and repair",
      "Annual inspections are recommended under AS 3660.2",
    ],
    howWeDoDifferently:
      "We go beyond simply noting 'evidence found' or 'no evidence found.' Our reports explain the full risk picture — what we found, what it means, and what you should do about it.",
    differentiatorPoints: [
      "Full risk assessment, not just activity detection",
      "Conducive conditions identified and explained",
      "Clear treatment and prevention recommendations",
      "Ongoing management guidance for long-term protection",
      "Combined with building inspection for comprehensive coverage",
      "Explained in plain language, not pest control jargon",
    ],
    process: [
      {
        step: "Book & Brief",
        description:
          "Contact us with property details. We'll discuss any known history of pest activity and schedule your inspection.",
      },
      {
        step: "Thorough Assessment",
        description:
          "Our team assesses all accessible areas for evidence of timber pest activity, damage, and conditions that increase risk.",
      },
      {
        step: "Detailed Report",
        description:
          "You receive a comprehensive report with findings, risk evaluation, photography, and clear recommendations.",
      },
      {
        step: "Consultation & Guidance",
        description:
          "We walk you through findings, explain risk levels, and advise on treatment or prevention — with referrals to trusted pest management professionals if needed.",
      },
    ],
    whatYouGet: [
      "Comprehensive timber pest inspection report",
      "Identification of active termite activity, damage, and species indicators",
      "Assessment of all conditions conducive to infestation",
      "Risk evaluation for the property and immediate surroundings",
      "Photographic documentation of all findings",
      "Treatment and prevention recommendations",
      "Ongoing management guidance",
      "Post-inspection consultation",
    ],
    turnaround:
      "Same-day or within 24 hours. Combined building and pest reports are delivered together for convenience.",
    faqs: [
      {
        q: "Should I get a timber pest inspection with my building inspection?",
        a: "Strongly recommended. A combined building and timber pest inspection is our most popular pre-purchase package. Timber pest damage directly affects the structural elements assessed in the building inspection, so covering both gives you the most complete picture.",
      },
      {
        q: "What are conducive conditions?",
        a: "Environmental factors that increase termite risk — stored timber against the building, poor drainage, inadequate subfloor ventilation, garden beds against external walls, tree stumps near the property, and soil-to-timber contact. We identify and explain these in every report.",
      },
      {
        q: "How often should I get a timber pest inspection?",
        a: "Australian Standard AS 3660.2 recommends at least annual inspections for all properties. In high-risk areas (much of Melbourne and regional Victoria), this is particularly important. Regular inspections are your best long-term protection.",
      },
      {
        q: "Do you provide termite treatment?",
        a: "No. We provide independent inspections and assessment only — which means our findings are unbiased and not influenced by treatment sales. If treatment is needed, we can refer you to trusted, licensed pest management professionals.",
      },
      {
        q: "Can termites be present without visible signs?",
        a: "Absolutely. Termites often work within concealed areas — inside walls, under floors, within roof structures — and can cause significant damage before any visible signs appear externally. This is why regular professional inspections are essential.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "dilapidation-reports",
      "new-construction-stage-inspections",
    ],
  },
  {
    slug: "dilapidation-reports",
    metaTitle: "Dilapidation Reports Melbourne",
    metaDescription:
      "Professional dilapidation reports in Melbourne. Pre-construction condition assessments documenting the existing state of neighbouring properties. Protect yourself from disputes.",
    headline: "Dilapidation Reports",
    intro:
      "Planning construction near neighbouring properties? A dilapidation report documents existing conditions before work begins — providing clear, dated evidence that protects you, your neighbours, and your builder from costly disputes.",
    idealFor: [
      "Developers and builders commencing works near existing properties",
      "Property owners undertaking renovations or demolition",
      "Neighbouring property owners seeking independent protection",
      "Councils or bodies corporate requiring pre-works documentation",
    ],
    whatIsIt:
      "A comprehensive photographic and written record of a property's current condition, conducted before nearby construction, demolition, or excavation work begins. It provides a dated baseline that can be referenced if damage is alleged post-construction.",
    whatsInspected: [
      "Exterior walls — cladding, brickwork, render, paintwork, visible cracking",
      "Interior walls and ceilings — existing cracks, nail pops, plaster condition",
      "Flooring — tiles, timber, carpet condition, level changes",
      "Windows and doors — frames, glass, operation",
      "Wet areas — bathrooms, laundry, kitchen (existing water damage or staining)",
      "Driveways, paths, and paving — cracking, settlement, drainage",
      "Fencing and retaining walls — condition, lean, cracking",
      "Roof (external visual) — condition of covering, gutters, downpipes",
      "Garden landscaping — proximity to construction zone",
    ],
    whyItMatters:
      "Without a pre-construction record, any existing damage can be falsely attributed to construction works — leading to expensive disputes, delays, and legal costs.",
    whyItMattersPoints: [
      "Provides dated evidence of pre-existing conditions",
      "Protects all parties — developer, builder, and neighbours",
      "Prevents false damage claims and costly disputes",
      "Often required by councils and project managers",
      "Supports insurance claims if genuine damage occurs",
      "Demonstrates professionalism and duty of care",
    ],
    howWeDoDifferently:
      "Our dilapidation reports are exceptionally thorough. We don't just take a few photos — we systematically document every elevation, room, and surface with precise descriptions and high-resolution photography.",
    differentiatorPoints: [
      "Extensive photographic documentation — hundreds of images per property",
      "Precise written descriptions matching every photograph",
      "Interior AND exterior coverage as standard",
      "Subtle existing defects captured that others overlook",
      "Crack measurement baselines where applicable",
      "Reports formatted for dispute resolution and legal proceedings",
    ],
    process: [
      {
        step: "Book & Coordinate",
        description:
          "Contact us with project details. We'll coordinate access with neighbouring property owners and schedule the inspection to align with your construction timeline.",
      },
      {
        step: "Systematic Documentation",
        description:
          "Our consultant conducts a room-by-room, elevation-by-elevation assessment, photographing and documenting all existing conditions in detail.",
      },
      {
        step: "Report Compilation",
        description:
          "A comprehensive report is compiled with all photographs, written descriptions, and baseline measurements — formatted for professional and legal use.",
      },
      {
        step: "Distribution",
        description:
          "Reports are delivered to all relevant parties as needed — developer, builder, neighbouring owners, and project managers.",
      },
    ],
    whatYouGet: [
      "Comprehensive pre-construction condition report",
      "Extensive photographic documentation (interior & exterior)",
      "Detailed written condition descriptions for every area",
      "Crack monitoring baseline measurements where applicable",
      "Professional, dispute-ready documentation format",
      "Digital delivery (PDF) to all nominated parties",
      "Fast turnaround to meet project timelines",
    ],
    turnaround:
      "Typically 2–3 business days from inspection. Urgent turnaround available for time-critical projects — let us know your timeline.",
    faqs: [
      {
        q: "Who typically commissions a dilapidation report?",
        a: "Usually the developer, builder, or property owner undertaking construction works. However, neighbouring property owners can also commission their own report for additional, independent protection.",
      },
      {
        q: "When should the report be done?",
        a: "Before any construction, demolition, or excavation work begins. Ideally at least 1–2 weeks before works commence to ensure the report is completed, reviewed, and distributed to all parties.",
      },
      {
        q: "Do you inspect the neighbouring property or the construction site?",
        a: "We inspect the neighbouring properties that may be affected by the planned construction works, documenting their existing condition. We don't typically inspect the construction site itself.",
      },
      {
        q: "Can the neighbour refuse access for an inspection?",
        a: "Yes — access to a neighbouring property requires the owner's consent. If interior access is refused, we document all accessible exterior areas as thoroughly as possible. We recommend engaging early with neighbours to facilitate cooperation.",
      },
      {
        q: "Is a dilapidation report legally required?",
        a: "It depends on the local council and the nature of works. Many councils and project managers require them, particularly for demolition, excavation, or works near party walls. Regardless of requirements, they're strongly recommended as a risk management measure.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "new-construction-stage-inspections",
      "owner-builder-defect-reports",
    ],
  },
  {
    slug: "owner-builder-defect-reports",
    metaTitle: "Owner Builder Defect Reports (Section 137B) Melbourne",
    metaDescription:
      "Section 137B owner builder defect reports in Melbourne. Expert assessment of construction quality and compliance for owner builder properties in Victoria.",
    headline: "Owner-Builder Defect Reports",
    intro:
      "Selling a property built or renovated under an owner-builder permit in Victoria? Section 137B of the Building Act requires a defect report from a registered building practitioner before settlement. We provide thorough, compliant assessments that protect both vendor and purchaser.",
    idealFor: [
      "Owner-builders selling within 6.5 years of completion",
      "Conveyancers and solicitors managing owner-builder sales",
      "Purchasers requesting independent defect assessment",
      "Real estate agents facilitating owner-builder property sales",
    ],
    whatIsIt:
      "A statutory inspection required under Section 137B of the Victorian Building Act 1993 when selling a property where building work was carried out under an owner-builder permit within the preceding 6.5 years. The report identifies defects in the building work and is a legal requirement for settlement.",
    whatsInspected: [
      "All building work completed under the owner-builder permit",
      "Structural elements — framing, foundations, load paths",
      "Waterproofing — wet areas, external membranes, flashings",
      "Cladding and external finishes — compliance with NCC and plans",
      "Internal finishes — plastering, tiling, joinery, painting",
      "Plumbing and drainage (visual assessment)",
      "Electrical (visual assessment of accessible components)",
      "Compliance with approved plans and building permit conditions",
      "Compliance with the National Construction Code (NCC)",
    ],
    whyItMatters:
      "This report is a legal requirement — you cannot settle on the sale of an owner-built property without it. But beyond compliance, it provides crucial transparency for both parties.",
    whyItMattersPoints: [
      "Legal requirement under Victorian law — no report, no settlement",
      "Protects vendor from post-sale defect claims",
      "Gives purchaser transparency about construction quality",
      "Identifies defects that may need rectification before sale",
      "Reduces risk of post-settlement disputes",
      "Provides evidence of compliance with building permit conditions",
    ],
    howWeDoDifferently:
      "We don't just satisfy the legal minimum. Our Section 137B reports provide detailed, technically grounded assessments that go beyond basic compliance.",
    differentiatorPoints: [
      "Detailed technical assessment, not just a compliance tick-box",
      "Clear defect categorisation with severity ratings",
      "Practical rectification guidance where defects are found",
      "Explanations in plain language for vendors and purchasers",
      "Formatted for conveyancing and settlement requirements",
      "Consultation to help you understand implications and options",
    ],
    process: [
      {
        step: "Book & Review",
        description:
          "Contact us with property details and the owner-builder permit number. We'll review the scope of works and schedule the inspection.",
      },
      {
        step: "Comprehensive Assessment",
        description:
          "Our consultant inspects all building work completed under the owner-builder permit, assessing quality, compliance, and identifying any defects.",
      },
      {
        step: "Section 137B Report",
        description:
          "You receive a fully compliant Section 137B report with defect findings, severity categorisation, photographs, and rectification guidance.",
      },
      {
        step: "Consultation & Support",
        description:
          "We discuss findings with you, explain options for rectification or negotiation, and ensure the report meets your conveyancing requirements.",
      },
    ],
    whatYouGet: [
      "Section 137B compliant defect report",
      "Detailed assessment of all owner-builder works",
      "Defect categorisation with severity ratings",
      "Photographic documentation of all findings",
      "Rectification guidance for identified defects",
      "Report formatted for conveyancing and settlement",
      "Post-inspection consultation to discuss findings and options",
    ],
    turnaround:
      "Typically within 48 hours of inspection. Urgent turnaround available for settlement deadlines — contact us to discuss.",
    faqs: [
      {
        q: "When is a Section 137B report required?",
        a: "When selling a property where building work was completed under an owner-builder permit, within 6.5 years of the date the occupancy permit or certificate of final inspection was issued.",
      },
      {
        q: "Who can prepare the report?",
        a: "A registered building practitioner registered with the Victorian Building Authority — such as a building surveyor or building inspector. Urban 360 is fully registered and licensed for this purpose.",
      },
      {
        q: "What if the report identifies defects?",
        a: "Defects are common in owner-builder works and don't necessarily prevent a sale. The report provides transparency for the purchaser. You may choose to rectify defects before sale, adjust the sale price, or negotiate terms with the purchaser.",
      },
      {
        q: "Does the purchaser get a copy of the report?",
        a: "Yes. Under Victorian law, the vendor must provide the Section 137B report to the purchaser before settlement. The report forms part of the vendor's disclosure obligations.",
      },
      {
        q: "What if I'm not sure whether my works require this report?",
        a: "Contact us and we'll help you determine whether a Section 137B report is required based on your permit history, the nature of works, and the timeframe since completion.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "new-construction-stage-inspections",
      "rental-minimum-standards",
    ],
  },
  {
    slug: "rental-minimum-standards",
    metaTitle: "Rental Minimum Standards Assessment Melbourne",
    metaDescription:
      "Rental minimum standards assessments in Melbourne. Ensure your rental property meets Victorian requirements for safety, amenity, and compliance.",
    headline: "Rental Minimum Standards Assessments",
    intro:
      "Victorian rental minimum standards require all rental properties to meet specific safety, function, and amenity criteria. We assess your property against these requirements and provide a clear, actionable compliance report — protecting your tenants and your legal standing.",
    idealFor: [
      "Landlords ensuring compliance before new tenancies",
      "Property managers conducting portfolio assessments",
      "Investors purchasing tenanted properties",
      "Landlords responding to tenant compliance requests",
    ],
    whatIsIt:
      "A systematic assessment of a rental property against the Victorian Government's prescribed minimum standards, covering 14 categories of safety, amenity, and function requirements that all rental properties must meet.",
    whatsInspected: [
      "Structural soundness — no significant damp, mould, or structural issues",
      "Bathroom — functioning toilet, washbasin, bath/shower; reasonable privacy",
      "Kitchen — functioning sink, stovetop with 2+ burners, dedicated cooking space",
      "Laundry — functioning laundry tub or washing machine connection",
      "Heating — fixed heater in the main living area (not unflued gas)",
      "Hot water — functioning hot water system",
      "Window coverings — all bedrooms and living areas",
      "Locks — deadlock or equivalent on each external entry door",
      "Lighting — functioning light in each room and common area",
      "Ventilation — windows/vents in each room and wet area",
      "Electrical safety — switchboard with circuit breakers, no exposed wiring",
      "Gas safety — compliance checks where gas appliances are present",
      "Smoke alarms — compliant and functioning",
      "Window safety — restrictor devices on accessible windows (if applicable)",
    ],
    whyItMatters:
      "Non-compliance is a legal risk with real financial consequences. But more importantly, these standards exist to protect tenant safety and wellbeing.",
    whyItMattersPoints: [
      "Legal obligation — penalties for non-compliance under Victorian law",
      "Must be met before each new tenancy commences",
      "Protects landlord from disputes, compensation claims, and VCAT orders",
      "Ensures tenant safety and liveable conditions",
      "Property managers have duty-of-care obligations",
      "Demonstrates responsible property ownership",
    ],
    howWeDoDifferently:
      "We provide a practical, thorough assessment with clear guidance on what meets the standard and what doesn't — including specific, costed recommendations for achieving compliance.",
    differentiatorPoints: [
      "Every standard category assessed and clearly reported",
      "Compliant vs non-compliant status at a glance",
      "Specific, practical rectification recommendations",
      "Priority guidance — what to fix first for maximum compliance impact",
      "Property-manager-friendly report format",
      "Consultation to discuss findings, priorities, and budget",
    ],
    process: [
      {
        step: "Book & Brief",
        description:
          "Contact us with property details. We'll discuss the tenancy timeline and any known concerns.",
      },
      {
        step: "Standards Assessment",
        description:
          "Our consultant systematically assesses every applicable minimum standard category, documenting compliance status and any deficiencies.",
      },
      {
        step: "Compliance Report",
        description:
          "You receive a clear compliance report showing pass/fail status for each category, with photographs and specific recommendations for any non-compliant items.",
      },
      {
        step: "Rectification Guidance",
        description:
          "We discuss findings, prioritise rectification items, and provide practical guidance on achieving full compliance efficiently.",
      },
    ],
    whatYouGet: [
      "Comprehensive minimum standards compliance assessment",
      "Clear pass/fail status for each standard category",
      "Photographic documentation of all findings",
      "Specific rectification recommendations for non-compliant items",
      "Priority guidance for efficient compliance achievement",
      "Property-manager-friendly PDF report format",
      "Post-assessment consultation to discuss findings",
    ],
    turnaround:
      "Typically within 48 hours. Urgent turnaround available for lease commencement deadlines.",
    faqs: [
      {
        q: "What are the key areas covered by rental minimum standards?",
        a: "14 categories covering bathroom, kitchen, laundry, structural soundness, lighting, ventilation, heating, hot water, window coverings, locks, electrical safety, gas safety, smoke alarms, and window safety devices. Each has specific criteria that must be met.",
      },
      {
        q: "Who is responsible for meeting minimum standards?",
        a: "The rental provider (landlord) is legally responsible for ensuring the property meets minimum standards at the start of each new tenancy and for maintaining compliance throughout the tenancy.",
      },
      {
        q: "How often should an assessment be done?",
        a: "At minimum before each new tenancy commences. We recommend periodic assessments (annually or between tenancies) to ensure ongoing compliance, particularly for older properties where conditions may change.",
      },
      {
        q: "What happens if my property doesn't comply?",
        a: "Non-compliant items need to be rectified. Our report provides specific, practical recommendations. In most cases, achieving compliance is straightforward and affordable. We'll help you prioritise the most critical items first.",
      },
      {
        q: "Can a tenant refuse entry for an assessment?",
        a: "Landlords and their agents have a right to enter the property for inspections with proper notice under Victorian tenancy law. Standard notice periods apply.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "owner-builder-defect-reports",
      "dilapidation-reports",
    ],
  },
  {
    slug: "new-construction-stage-inspections",
    metaTitle: "New Construction Stage Inspections Melbourne",
    metaDescription:
      "Expert new construction stage inspections in Melbourne. Frame, lock-up, fixing, and handover inspections ensuring build quality and code compliance at every milestone.",
    headline: "New Construction Stage Inspections",
    intro:
      "Building a new home or undertaking major renovations? Independent stage inspections at critical construction milestones ensure build quality, code compliance, and protect you from costly defects that become hidden once work progresses to the next phase.",
    idealFor: [
      "New home buyers building with a volume or custom builder",
      "Owner-builders managing their own construction",
      "Property investors building new stock",
      "Homeowners undertaking major renovations or extensions",
    ],
    whatIsIt:
      "Independent inspections conducted at critical stages of construction — base/slab, frame, lock-up, fixing, and pre-handover (PCI). Each stage is assessed for workmanship quality, compliance with approved plans and specifications, and adherence to the NCC and relevant Australian Standards.",
    whatsInspected: [
      "Base / Slab — concrete finish, moisture barriers, set-downs, penetrations, dimensions",
      "Frame — timber/steel framing, bracing, tie-downs, truss installation, window/door openings",
      "Lock-Up — roof covering, external cladding, windows, doors, flashing, weatherproofing",
      "Fixing — internal linings, wet area waterproofing, tiling, cabinetry, fixtures",
      "Pre-Handover (PCI) — complete assessment of all finishes, fixtures, fittings, and external works",
      "Compliance with approved building plans and specifications",
      "Compliance with the National Construction Code (NCC)",
      "Workmanship quality against industry standards",
      "Completeness of work at each stage",
    ],
    whyItMatters:
      "Once a construction stage is completed and covered by the next phase of work, defects become concealed and exponentially more expensive to rectify.",
    whyItMattersPoints: [
      "Catch defects while they're accessible and affordable to fix",
      "Ensure your builder is delivering to the agreed standard",
      "Verify compliance with your approved plans and the NCC",
      "Prevent small issues from becoming major structural problems",
      "Protect your investment throughout the entire build process",
      "Have expert evidence if disputes arise with your builder",
    ],
    howWeDoDifferently:
      "Our stage reports don't just note defects — they empower you to have informed, constructive conversations with your builder, backed by expert evidence and clear guidance.",
    differentiatorPoints: [
      "Detailed, photographically documented stage reports",
      "Defects categorised by severity and urgency",
      "Specific rectification guidance — what needs to be fixed and why",
      "Assessed against your approved plans, not just general standards",
      "Professional, builder-friendly report format",
      "Ongoing consultant relationship throughout your entire build",
    ],
    process: [
      {
        step: "Engage Early",
        description:
          "Contact us before construction begins. We'll review your plans and establish an inspection schedule aligned with your build program.",
      },
      {
        step: "Stage Inspections",
        description:
          "At each milestone, Our consultant conducts a thorough assessment — documenting defects, compliance issues, and workmanship quality.",
      },
      {
        step: "Stage Reports",
        description:
          "After each inspection, you receive a detailed report with findings, photographs, and specific rectification guidance — before the next stage proceeds.",
      },
      {
        step: "Final PCI & Handover",
        description:
          "At practical completion, we conduct a comprehensive pre-handover inspection — your final quality check before you accept the keys.",
      },
    ],
    whatYouGet: [
      "Detailed inspection report at each construction stage",
      "Assessment against approved plans, specs, NCC, and Australian Standards",
      "Defect identification with severity categorisation",
      "High-resolution photographic documentation",
      "Specific rectification guidance for every finding",
      "Post-inspection consultation at each stage",
      "Comprehensive PCI (Practical Completion Inspection) report at handover",
      "Ongoing access to your consultant throughout the build",
    ],
    turnaround:
      "Stage reports delivered within 24–48 hours of inspection. PCI reports within 48 hours. We understand construction schedules — reports are never the bottleneck.",
    faqs: [
      {
        q: "What are the typical inspection stages?",
        a: "Base/slab, frame, lock-up, fixing, and pre-handover (PCI). Depending on the project, additional stages such as waterproofing, cladding, or services rough-in inspections may be recommended. We'll advise on the optimal schedule for your specific build.",
      },
      {
        q: "Can I get just a single stage inspection?",
        a: "Yes. While we recommend inspections at all key stages for maximum protection, you can book individual stage inspections. The pre-handover/PCI is the most commonly requested standalone inspection — it's your last chance to identify defects before you take possession.",
      },
      {
        q: "Will this cause conflict with my builder?",
        a: "A professional, reputable builder will welcome independent oversight — it demonstrates quality assurance and protects both parties. Our reports are delivered professionally and constructively, focused on achieving the best outcome for your build.",
      },
      {
        q: "When should I book relative to each stage?",
        a: "Ideally, notify us when your builder advises a stage is nearing completion. We'll schedule the inspection before the builder proceeds to the next phase — ensuring any defects are addressed while they're still accessible.",
      },
      {
        q: "Do you inspect the building surveyor's work?",
        a: "We provide an independent assessment in addition to your building surveyor's mandatory inspections. Our role is to be your advocate — ensuring quality and compliance from your perspective as the client, not just the minimum regulatory requirements.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "dilapidation-reports",
      "owner-builder-defect-reports",
    ],
  },
  {
    slug: "mould-audit",
    metaTitle: "Mould Audit & Detection Melbourne",
    metaDescription:
      "Professional mould audits in Melbourne using UV and diagnostic tools. Identify hidden mould, biohazard elements, and health risks in your property.",
    headline: "Mould Audit",
    intro:
      "We help to expose and highlight the areas affected by mould and biohazard elements to ensure your property is safe to occupy. Our approach identifies potential health risks, enabling you to address issues quickly and effectively.",
    images: [
      { src: "/images/mould-ceiling.webp", alt: "Severe mould growth on a ceiling above a window frame" },
      { src: "/images/mould-uv.webp", alt: "UV light revealing hidden mould contamination on a surface" },
      { src: "/images/mould-uv-door.webp", alt: "UV detection exposing mould growth around a door frame" },
    ],
    idealFor: [
      "Homeowners concerned about indoor air quality",
      "Buyers assessing properties with visible damp or musty odours",
      "Landlords ensuring rental properties are safe to occupy",
      "Property managers responding to tenant health complaints",
      "Building owners after water damage or flooding events",
    ],
    whatIsIt:
      "Using the latest technology, our licensed professionals thoroughly inspect your property to identify mould and the conditions that allow it to thrive. Hidden mould and airborne spores, often invisible to the naked eye, can pose serious health risks — including respiratory issues, allergies, and long-term complications.",
    whatsInspected: [
      "All interior surfaces — walls, ceilings, floors, behind furniture",
      "Wet areas — bathrooms, laundry, kitchen surrounds",
      "Subfloor and crawl spaces (where accessible)",
      "Roof void — condensation, leaks, inadequate ventilation",
      "Window frames and sills — condensation zones",
      "HVAC systems and ductwork (visual assessment)",
      "Areas of previous water damage or flooding",
      "UV detection of hidden mould colonies not visible to the naked eye",
    ],
    whyItMatters:
      "By identifying mould before it spreads, we help protect your family's health, maintain a safe living environment, and prevent costly property damage.",
    whyItMattersPoints: [
      "Mould can cause serious respiratory issues and allergic reactions",
      "Hidden mould behind walls can spread undetected for years",
      "Mould reduces property value and complicates sales",
      "Early detection prevents costly large-scale remediation",
      "Landlords have legal obligations for safe, habitable properties",
      "Insurance claims require documented evidence of the issue",
    ],
    howWeDoDifferently:
      "We use advanced UV detection and diagnostic tools to find mould that's invisible to the naked eye. Our reports don't just identify the problem — they explain the root cause and how to prevent recurrence.",
    differentiatorPoints: [
      "UV light detection reveals hidden mould colonies",
      "Root cause analysis — not just symptoms, but why it's growing",
      "Health risk assessment based on mould type and extent",
      "Photographic evidence including UV-lit documentation",
      "Practical remediation recommendations",
      "Prevention guidance to stop mould returning",
    ],
    process: [
      {
        step: "Book & Brief",
        description:
          "Contact us with your concerns. We'll discuss symptoms, history of dampness or water damage, and schedule your audit.",
      },
      {
        step: "Comprehensive Audit",
        description:
          "Our consultant conducts a thorough inspection using UV detection, moisture meters, and visual assessment of all accessible areas.",
      },
      {
        step: "Detailed Report",
        description:
          "You receive a comprehensive report with UV and standard photography, moisture readings, risk assessment, and clear remediation recommendations.",
      },
      {
        step: "Guidance & Next Steps",
        description:
          "We walk you through findings, explain health implications, and advise on remediation priorities — with referrals to specialist remediators if needed.",
      },
    ],
    whatYouGet: [
      "Comprehensive mould audit report",
      "UV detection photography revealing hidden mould",
      "Moisture mapping of affected areas",
      "Health risk assessment and implications",
      "Root cause analysis for each affected area",
      "Remediation recommendations and priority guidance",
      "Prevention strategies to stop recurrence",
      "Post-audit consultation to discuss findings",
    ],
    turnaround:
      "Reports delivered within 24–48 hours of inspection. Urgent turnaround available for health-critical situations.",
    faqs: [
      {
        q: "How do you detect mould that isn't visible?",
        a: "We use UV (ultraviolet) light technology that causes mould spores and colonies to fluoresce, revealing contamination that's invisible under normal lighting. Combined with moisture meters and thermal assessment, we can identify both active mould and the conditions causing it.",
      },
      {
        q: "Is mould always a health risk?",
        a: "While some moulds are more harmful than others, all mould growth in occupied spaces should be taken seriously. Prolonged exposure can cause respiratory issues, allergic reactions, and other health complications — particularly for children, the elderly, and those with existing respiratory conditions.",
      },
      {
        q: "Can you remove the mould?",
        a: "We provide independent inspection and assessment only — our findings are unbiased and not influenced by remediation sales. If professional remediation is needed, we can refer you to trusted, licensed specialists.",
      },
      {
        q: "What causes mould in the first place?",
        a: "Mould requires moisture, warmth, and organic material to grow. Common causes include poor ventilation, water leaks, rising damp, condensation, and inadequate waterproofing. Our report identifies the specific cause in your property so it can be addressed at the source.",
      },
      {
        q: "Should I get a mould audit before buying a property?",
        a: "If you notice musty odours, visible staining, or signs of dampness during your inspection, a mould audit is strongly recommended. Mould remediation can be expensive, and knowing the extent before purchase gives you negotiation leverage and clarity on costs.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "thermal-assessment",
      "rental-minimum-standards",
    ],
  },
  {
    slug: "thermal-assessment",
    metaTitle: "Thermal Assessment & Imaging Melbourne",
    metaDescription:
      "Professional thermal imaging assessments in Melbourne. Detect hidden moisture, insulation gaps, electrical hotspots, and air leaks with advanced infrared technology.",
    headline: "Thermal Assessment",
    intro:
      "A thermal assessment uses advanced imaging technology to detect hidden issues within your property. It can reveal problems such as moisture intrusion, insulation gaps, electrical hotspots, air leaks, and inadequate insulation — allowing for early identification of issues before they become costly repairs or safety risks.",
    images: [
      { src: "/images/thermal-leak-detection.webp", alt: "Thermal imaging detecting a ceiling leak — visible light inset with infrared overlay showing heat signatures" },
      { src: "/images/thermal-cold-spot.webp", alt: "Thermal scan revealing cold spots and insulation gaps in a room corner" },
      { src: "/images/thermal-appliance.webp", alt: "Infrared imaging of an appliance showing temperature differentials" },
      { src: "/images/thermal-scan.webp", alt: "Thermal camera scan of ceiling showing heat loss patterns" },
      { src: "/images/thermal-leak-wall.webp", alt: "Thermal imaging identifying moisture intrusion through a wall junction" },
      { src: "/images/thermal-leak-ceiling.webp", alt: "Infrared scan detecting a hidden ceiling leak with temperature readings" },
      { src: "/images/thermal-ceiling.webp", alt: "Thermal assessment of ceiling insulation showing cold zones" },
    ],
    idealFor: [
      "Homeowners investigating unexplained dampness or cold spots",
      "Buyers wanting a deeper assessment beyond visual inspection",
      "Landlords and property managers assessing building performance",
      "Building owners after storm, flood, or water damage events",
      "Energy-conscious owners wanting to improve efficiency",
    ],
    whatIsIt:
      "The audit helps improve energy efficiency and provides a clearer understanding of the property's condition. Using professional-grade infrared cameras, we capture temperature variations across surfaces that reveal hidden defects invisible to the naked eye. With detailed reports and expert insights, you can make informed decisions with confidence.",
    whatsInspected: [
      "Walls and ceilings — moisture intrusion, insulation voids, thermal bridging",
      "Roofing — leaks, ponding water, insulation gaps",
      "Windows and doors — air leaks, seal failures, draught paths",
      "Electrical systems — hotspots indicating overloaded circuits or faulty wiring",
      "Plumbing — hidden pipe leaks within walls and floors",
      "HVAC systems — ductwork leaks, inefficient distribution",
      "Subfloor — rising damp, moisture migration",
      "External envelope — thermal performance and weatherproofing integrity",
    ],
    whyItMatters:
      "Many property defects are hidden behind walls, under floors, or above ceilings — invisible until damage is severe. Thermal imaging reveals these issues early, when they're cheapest to fix.",
    whyItMattersPoints: [
      "Detect moisture before it causes mould or structural damage",
      "Find insulation gaps that drive up energy costs",
      "Identify electrical faults before they become fire hazards",
      "Locate hidden pipe leaks before they cause major water damage",
      "Improve energy efficiency and reduce heating/cooling bills",
      "Non-invasive — no need to open walls or floors",
    ],
    howWeDoDifferently:
      "Our thermal assessments go beyond just taking infrared images. We correlate thermal anomalies with physical inspection findings to give you a complete diagnosis — not just a heat map.",
    differentiatorPoints: [
      "Professional-grade FLIR thermal imaging equipment",
      "Side-by-side thermal and visual photography for every finding",
      "Temperature differential analysis with precise readings",
      "Correlation with moisture meter readings for confirmed diagnosis",
      "Clear explanation of what each anomaly means in plain language",
      "Actionable repair and improvement recommendations",
    ],
    process: [
      {
        step: "Book & Brief",
        description:
          "Contact us with your concerns — unexplained dampness, cold spots, high energy bills, or post-damage assessment. We'll schedule your thermal audit.",
      },
      {
        step: "Thermal Scan",
        description:
          "Our consultant conducts a systematic thermal scan of all accessible areas, capturing infrared images and correlating findings with visual inspection and moisture readings.",
      },
      {
        step: "Analysis & Report",
        description:
          "You receive a detailed report with thermal and visual images side by side, temperature readings, diagnosis of each anomaly, and repair recommendations.",
      },
      {
        step: "Consultation & Guidance",
        description:
          "We walk you through the thermal findings, explain what each anomaly means for your property, and advise on the most effective and cost-efficient repairs.",
      },
    ],
    whatYouGet: [
      "Comprehensive thermal assessment report",
      "Infrared images with temperature readings and annotations",
      "Side-by-side thermal and visual photography",
      "Moisture meter readings correlated with thermal findings",
      "Diagnosis and explanation of each thermal anomaly",
      "Repair and improvement recommendations",
      "Energy efficiency improvement guidance",
      "Post-assessment consultation to discuss findings",
    ],
    turnaround:
      "Reports delivered within 24–48 hours of assessment. Includes full thermal image library and expert analysis.",
    faqs: [
      {
        q: "What can thermal imaging actually detect?",
        a: "Thermal cameras detect temperature differences across surfaces. These differences reveal hidden moisture (cooler spots), insulation gaps (heat loss patterns), electrical hotspots (overheated components), air leaks (draught paths), and plumbing leaks (temperature trails along pipe routes). It's a powerful diagnostic tool that sees what your eyes can't.",
      },
      {
        q: "Is thermal imaging accurate?",
        a: "Professional-grade thermal cameras are highly accurate — detecting temperature differences as small as 0.05°C. However, thermal images require expert interpretation. A temperature anomaly could indicate several possible issues, which is why we correlate every thermal finding with visual inspection and moisture readings for confirmed diagnosis.",
      },
      {
        q: "Can it replace a standard building inspection?",
        a: "No — thermal imaging is a complementary diagnostic tool, not a replacement for a comprehensive building inspection. It adds a deeper layer of assessment that reveals issues invisible to standard visual inspection. For maximum coverage, we recommend combining thermal assessment with a pre-purchase building inspection.",
      },
      {
        q: "When is the best time for a thermal assessment?",
        a: "Thermal imaging works best when there's a temperature differential between inside and outside — typically early morning or evening. For moisture detection, it's effective at any time. We'll advise on optimal timing based on your specific concerns.",
      },
      {
        q: "Do I need a thermal assessment for a pre-purchase inspection?",
        a: "While not required, a thermal assessment can reveal hidden issues that a standard visual inspection cannot detect — particularly moisture intrusion, insulation deficiencies, and electrical faults. If you're buying an older property or one with a history of water issues, we strongly recommend adding thermal imaging.",
      },
    ],
    relatedServices: [
      "pre-purchase-inspections",
      "mould-audit",
      "new-construction-stage-inspections",
    ],
  },
];

export function getServiceContent(slug: string): ServiceContent | undefined {
  return SERVICE_CONTENT.find((s) => s.slug === slug);
}
