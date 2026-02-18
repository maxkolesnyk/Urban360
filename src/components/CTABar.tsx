"use client";

import Link from "next/link";
import { Phone, Calendar, FileText } from "lucide-react";
import { SITE } from "@/lib/constants";

export default function CTABar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 bg-surface/95 backdrop-blur-md border-t border-border p-3 lg:hidden">
      <div className="flex items-center justify-around gap-2">
        <a
          href={`tel:${SITE.phone}`}
          className="flex flex-col items-center gap-1 text-primary"
        >
          <Phone size={20} />
          <span className="text-[10px] font-medium">Call Now</span>
        </a>
        <Link
          href="/contact"
          className="flex items-center gap-2 bg-primary text-white px-6 py-2.5 rounded-lg text-sm font-semibold"
        >
          <Calendar size={16} />
          Book Inspection
        </Link>
        <Link
          href="/resources"
          className="flex flex-col items-center gap-1 text-primary"
        >
          <FileText size={20} />
          <span className="text-[10px] font-medium">Reports</span>
        </Link>
      </div>
    </div>
  );
}
