export interface Review {
  name: string;
  rating: number;
  date: string;
  text?: string;
  service?: string;
  localGuide?: boolean;
}

export const GOOGLE_REVIEWS: Review[] = [
  {
    name: "Adrian Miller",
    rating: 5,
    date: "February 2026",
    text: "Mark was fantastic!! Very personable guy who knows his stuff and was very professional in identifying all the defects in the unit I was looking to buy. I had no idea those issues were there in the bathroom and roof, and it's helped me make a much more informed decision.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "David James",
    rating: 5,
    date: "February 2026",
    text: "From our initial enquiry about Urban 360's services, right through to the delivery of the inspection report, the service and communication was all best in class. Mark was always available and in touch with updates. Following the site visit, the report was thorough, detailed and delivered promptly.",
    service: "Building Inspection",
  },
  {
    name: "Sarah & Scott Moore",
    rating: 5,
    date: "February 2026",
    text: "We appreciated Mark's clear, comprehensive and prompt service and advice. We'll definitely use his services again when required.",
    service: "Building Inspection",
  },
  {
    name: "Alexander Pritchard",
    rating: 5,
    date: "January 2026",
    text: "Urban 360 provided a fantastic service. Mark was friendly, knowledgeable, responsive and thorough. I would 100% recommend and utilise their services again.",
    service: "Building Inspection",
  },
  {
    name: "Lee C",
    rating: 5,
    date: "December 2025",
    text: "10/10 experience. Mark went above and beyond on very short notice over the weekend. He is incredibly knowledgeable and identified critical issues that needed attention. Highly recommend Urban 360 for anyone needing a building inspection.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "Jack Stephens",
    rating: 5,
    date: "December 2025",
    text: "Very thorough and prompt! A joy to deal with.",
    service: "Building Inspection",
  },
  {
    name: "Elango Ganesan",
    rating: 5,
    date: "November 2025",
    text: "Great people, timely help — forever grateful for making yourselves available on short notice to help us with the inspections. The report gave us confidence in our buying decision ahead of the auction.",
    service: "Pre-Purchase Inspection",
    localGuide: true,
  },
  {
    name: "Linhe Dao",
    rating: 5,
    date: "November 2025",
    text: "I needed a comprehensive inspection done the day before an auction, and Mark was incredibly flexible and managed to fit us in at short notice. He was professional, thorough, and did a wonderful job in such a limited timeframe. He also provided helpful recommendations and follow-up advice.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "May Graham",
    rating: 5,
    date: "November 2025",
    text: "I had my townhouse building and pest inspection completed by Mark. He was prompt and efficient, friendly and communicated really well. He explained the process and took the time to give feedback and answer all my questions after he'd completed the inspection. I wouldn't hesitate to recommend Mark.",
    service: "Building & Pest Inspection",
  },
  {
    name: "Sherry Michaels",
    rating: 5,
    date: "November 2025",
    text: "Mark came at a last minute request for a building inspection. He was very helpful, friendly and informative and we really appreciated the fast turnaround. Thanks for great service, Mark.",
    service: "Building Inspection",
  },
  {
    name: "Kate Kelleher",
    rating: 5,
    date: "November 2025",
    text: "I was provided Mark's details by a friend and I am so glad! Mark was an amazing support and provided a really comprehensive report at the last minute when I asked him to squeeze in an inspection the following day. He called me immediately to discuss the findings and gave me the clarity I needed before the auction.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "Evgueni Grinevitch",
    rating: 5,
    date: "November 2025",
    text: "I recently engaged Urban 360 Building Inspections for a pre-purchase inspection and was very impressed with their professionalism and attention to detail. The inspector was punctual, knowledgeable, and explained everything clearly. The report was comprehensive and delivered promptly.",
    service: "Pre-Purchase Inspection",
  },
  {
    name: "Udara Gamage",
    rating: 5,
    date: "November 2025",
    text: "Highly Recommended! I recently used Urban 360 Building Inspection, and I couldn't be happier with the level of service. The inspection process was thorough and the detailed report gave me clarity and confidence in my decision. Transparent, easy-to-understand information on every job.",
    service: "Building Inspection",
  },
  {
    name: "Darren Gorelick",
    rating: 5,
    date: "November 2025",
    text: "Mark was great to deal with, did a great job identifying issues and got us the report early morning the next day.",
    service: "Building Inspection",
  },
  {
    name: "Max CM",
    rating: 5,
    date: "October 2025",
    text: "Mark was fantastic to deal with from start to finish. He was punctual, professional, and extremely thorough with his inspection. He took the time to explain everything clearly and gave honest, practical advice that helped us make informed decisions.",
    service: "Building Inspection",
  },
  {
    name: "Maya de la Lande",
    rating: 5,
    date: "October 2025",
    text: "Mark was brilliant! He kept me informed and went above and beyond with the building and pest inspection. He communicated clearly, did a really thorough inspection and was highly professional and efficient. I would strongly recommend using him for a reliable, honest and helpful building and pest inspection.",
    service: "Building & Pest Inspection",
  },
  {
    name: "Elaine Yin",
    rating: 5,
    date: "October 2025",
    text: "I had a great experience with Urban 360 Building Inspections, especially working with Mark. He was extremely professional, detail-oriented, and thorough during the inspection. Mark quickly identified several key issues that I would have otherwise missed. His ongoing support after the inspection was invaluable.",
    service: "Building Inspection",
  },
  {
    name: "Brad Laird",
    rating: 5,
    date: "October 2025",
    text: "Mark was very helpful and provided clear and detailed explanations, very happy with his service.",
    service: "Building Inspection",
  },
  {
    name: "Tyler G",
    rating: 5,
    date: "September 2025",
    text: "Mark was extremely detailed and a great communicator. I couldn't recommend him more highly!",
    service: "Building Inspection",
  },
  {
    name: "Joe De Losa",
    rating: 5,
    date: "October 2025",
    service: "Building Inspection",
  },
];

export const REVIEW_STATS = {
  total: 25,
  average: 5.0,
  fiveStarCount: 25,
  source: "Google Reviews",
} as const;
