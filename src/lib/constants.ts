export const SITE = {
  name: "Urban 360 Building Inspections",
  shortName: "Urban 360",
  tagline: "Inspect to Protect",
  headline: "Melbourne's Expert Building Inspections — Beyond the Checklist",
  description:
    "Urban 360 provides expert-led, technically rigorous building inspection services. Clear reporting, real-world risk assessment, and confident property decisions across Melbourne and Victoria.",
  phone: "0421 588 588",
  email: "inspect@urban360.com.au",
  address: "Melbourne, VIC",
  license: "Licensed Building Surveyor — Victoria",
  founder: "Mark Rozin",
  founderTitle: "Senior Building Consultant",
  googleMapsEmbed: "",
} as const;

export const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Why Urban 360", href: "/why-urban-360" },
  { label: "Areas We Serve", href: "/areas" },
  { label: "Resources", href: "/resources" },
  { label: "Blog", href: "/blog" },
  { label: "FAQ", href: "/faq" },
  { label: "Contact", href: "/contact" },
] as const;

export const SERVICES = [
  {
    slug: "pre-purchase-inspections",
    title: "Pre-Purchase Building Inspections",
    shortDescription:
      "Thorough AS 4349.1 compliant inspections before you buy — identifying defects, risks, and providing clear guidance to protect your investment.",
    icon: "Search",
  },
  {
    slug: "timber-pest-inspections",
    title: "Timber Pest Inspections",
    shortDescription:
      "Comprehensive timber pest assessments identifying termite activity, damage, and risk conditions in accordance with Australian standards.",
    icon: "Bug",
  },
  {
    slug: "dilapidation-reports",
    title: "Dilapidation Reports",
    shortDescription:
      "Pre-construction condition reports documenting the existing state of neighbouring properties to protect all parties.",
    icon: "ClipboardList",
  },
  {
    slug: "owner-builder-defect-reports",
    title: "Owner-Builder Defect Reports",
    shortDescription:
      "Section 137B defect reports for owner builders — detailed assessment of construction quality and compliance.",
    icon: "Wrench",
  },
  {
    slug: "rental-minimum-standards",
    title: "Rental Minimum Standards Assessments",
    shortDescription:
      "Assessments ensuring rental properties meet Victorian minimum standards for safety, amenity, and compliance.",
    icon: "ShieldCheck",
  },
  {
    slug: "new-construction-stage-inspections",
    title: "New Construction Stage Inspections",
    shortDescription:
      "Expert inspections at every build stage — frame, lock-up, fixing, and handover — ensuring quality and code compliance.",
    icon: "HardHat",
  },
] as const;

export const MELBOURNE_AREAS = [
  "Melbourne CBD",
  "Inner North",
  "Inner South",
  "Inner East",
  "Inner West",
  "Northern Suburbs",
  "Southern Suburbs",
  "Eastern Suburbs",
  "Western Suburbs",
  "South East",
  "Mornington Peninsula",
  "Yarra Ranges",
  "Bayside",
  "Greater Geelong",
] as const;

export const POWER_WORDS = [
  "Independent",
  "Detailed Reports",
  "Expert Consultant",
  "AS 4349.1 Compliant",
  "Senior Building Consultant",
  "Technical Inspection",
  "Risk-Focused Reporting",
  "Clear & Decisive Advice",
] as const;
