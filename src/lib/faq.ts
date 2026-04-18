export interface FAQItem {
  q: string;
  a: string;
}

export interface FAQCategory {
  category: string;
  slug: string;
  title: string;
  subtitle?: string;
  description: string;
  questions: FAQItem[];
}

export const FAQ_CATEGORIES: FAQCategory[] = [
  {
    category: "Our inspections",
    slug: "our-inspections",
    title: "What a proper",
    subtitle: "inspection looks like.",
    description:
      "The scope, the process, and who actually shows up at your property. No checklist-only walkthroughs, no rushed reports.",
    questions: [
      {
        q: "What does a building inspection include?",
        a: "Our standard building inspection is a comprehensive visual assessment of a property's accessible areas in accordance with AS 4349.1. This includes structural elements, interior and exterior cladding, roofing, subfloor (where accessible), wet areas, site drainage, and more. We identify defects, assess their severity, and provide clear guidance on implications.",
      },
      {
        q: "How long does an inspection take?",
        a: "Typically 1.5 to 3 hours depending on property size, age, and complexity. We never rush an inspection — thoroughness and accuracy are our top priorities.",
      },
      {
        q: "Can I attend the inspection?",
        a: "Absolutely. We encourage clients to attend so we can point out findings in person and answer questions on the spot. If you can't make it, we'll arrange a phone or video consultation once the report is delivered.",
      },
      {
        q: "What's the difference between a building inspection and a building survey?",
        a: "A building inspection (per AS 4349.1) is a visual assessment focused on identifying defects and assessing property condition. A building survey typically involves more detailed measurements, planning assessments, and regulatory compliance evaluation. We offer both services — we'll recommend the right fit for your situation.",
      },
    ],
  },
  {
    category: "Reports & turnaround",
    slug: "reports-turnaround",
    title: "Reports built for",
    subtitle: "decisions, not drawers.",
    description:
      "Risk-prioritised, photographed, and delivered fast. Read them yourself, share them with your solicitor, or bring them to the negotiating table.",
    questions: [
      {
        q: "When will I receive my report?",
        a: "Most reports are delivered same-day or within 24 hours of the inspection. For more complex properties or combined inspections, allow up to 48 hours.",
      },
      {
        q: "What format is the report in?",
        a: "Professional PDF documents with clear sections, risk categorisation, high-resolution photography, and written analysis — designed to be easy to read and share with your solicitor, conveyancer, or real estate agent.",
      },
      {
        q: "How do I use the report for negotiation?",
        a: "Risk-prioritised reports categorise findings as major defects, minor defects, or safety hazards — giving you and your legal representative clear evidence to support price negotiations. We'll also walk you through rectification approaches during the post-inspection consultation.",
      },
    ],
  },
  {
    category: "Booking & pricing",
    slug: "booking-pricing",
    title: "Booking, pricing,",
    subtitle: "and coverage.",
    description:
      "Transparent pricing, prompt turnaround, and coverage across Melbourne and regional Victoria. Here's how we work with you from first enquiry to report delivery.",
    questions: [
      {
        q: "How do I book an inspection?",
        a: "Book via our contact page, call us directly, or email your property details. We'll confirm availability, scope, and schedule your inspection promptly — often within 24 to 48 hours.",
      },
      {
        q: "How much does an inspection cost?",
        a: "Pricing depends on the type of inspection, property size, and location. Contact us for a quote tailored to your property. We're transparent about pricing — no hidden fees, no surprises on the invoice.",
      },
      {
        q: "Do you offer combined building and pest inspections?",
        a: "Yes. A combined building and timber pest inspection is our most popular package for pre-purchase clients — it provides comprehensive coverage in a single visit and a single consolidated report.",
      },
      {
        q: "What areas do you service?",
        a: "All of metropolitan Melbourne and regional Victoria. Check our Areas We Serve page for a full list of regions and suburbs, or contact us to confirm availability for your location.",
      },
    ],
  },
  {
    category: "Standards & compliance",
    slug: "standards-compliance",
    title: "Standards, licensing,",
    subtitle: "and compliance.",
    description:
      "Every report is backed by the right credentials, the right insurance, and the relevant Australian Standards. Here's what sits behind the paperwork.",
    questions: [
      {
        q: "What is AS 4349.1?",
        a: "AS 4349.1 is the Australian Standard for Inspection of Buildings — Pre-Purchase. It defines the scope, methodology, and reporting requirements for building inspections. All Urban 360 pre-purchase inspections comply with this standard.",
      },
      {
        q: "Are you licensed and insured?",
        a: "Yes. Urban 360 is a fully licensed building practitioner operating in Victoria, with comprehensive professional indemnity insurance on every inspection we perform.",
      },
      {
        q: "What is a Section 137B report?",
        a: "Under Section 137B of the Victorian Building Act, a defect report from a registered building practitioner is required when selling a property built or renovated under an owner-builder permit within 6.5 years of completion. We produce these reports for sellers regularly.",
      },
    ],
  },
];
