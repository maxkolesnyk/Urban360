"use client";

import Link from "next/link";
import { Phone, Calendar, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-xl border-t border-glass-border p-3 lg:hidden">
      <div className="flex items-center justify-around gap-2">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center gap-1 text-black/40"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call Now</span>
        </a>
        <Link
          href="/contact"
          className="relative flex items-center gap-2 bg-black text-white px-6 py-2.5 rounded-lg text-sm font-semibold glass-shimmer"
        >
          <Calendar size={16} />
          Book Inspection
        </Link>
        <Link
          href="/resources"
          className="flex flex-col items-center gap-1 text-black/40"
        >
          <FileText size={20} />
          <span className="text-[10px] font-medium">Reports</span>
        </Link>
      </div>
    </div>
  );
}
