"use client";

import Link from "next/link";
import { Phone, Calendar } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-glass-border p-3 lg:hidden">
      <div className="flex items-center justify-center gap-4">
        <a
          href={`tel:${SITE.phone}`}
          className="flex items-center gap-2 border border-border text-foreground px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          <Phone size={16} />
          Call Now
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-accent text-black px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          <Calendar size={16} />
          Book Inspection
        </Link>
      </div>
    </div>
  );
}
