"use client";

import { Star, Shield, Award } from "lucide-react";
import { REVIEW_STATS } from "@/lib/reviews";

export default function TrustBar() {
  return (
    <section className="bg-neutral-950 text-white border-t border-white/5">
      <div className="mx-auto max-w-7xl px-6 py-5">
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-12 text-sm">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  size={14}
                  className="fill-amber-400 text-amber-400"
                />
              ))}
            </div>
            <span className="text-white/60">
              {REVIEW_STATS.average} from {REVIEW_STATS.total} Reviews
            </span>
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Shield size={14} className="text-accent" />
            AS 4349.1 Compliant
          </div>
          <div className="flex items-center gap-2 text-white/60">
            <Award size={14} className="text-accent" />
            Licensed Victorian Building Surveyor
          </div>
        </div>
      </div>
    </section>
  );
}
