"use client";

import { useState } from "react";
import { Search, CheckCircle, MapPin } from "lucide-react";

interface SuburbSearchProps {
  suburbs: { name: string; region: string }[];
}

export default function SuburbSearch({ suburbs }: SuburbSearchProps) {
  const [query, setQuery] = useState("");

  const normalised = query.trim().toLowerCase();
  const match =
    normalised.length >= 2
      ? suburbs.find((s) => s.name.toLowerCase() === normalised)
      : null;
  const suggestions =
    normalised.length >= 2 && !match
      ? suburbs
          .filter((s) => s.name.toLowerCase().includes(normalised))
          .slice(0, 5)
      : [];

  return (
    <div id="suburb-search" className="max-w-xl mx-auto scroll-mt-28">
      <div className="relative">
        <Search
          size={18}
          strokeWidth={1.75}
          className="absolute left-4 top-1/2 -translate-y-1/2 text-neutral-400"
        />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your suburb…"
          className="w-full pl-12 pr-4 py-4 rounded-2xl ring-1 ring-neutral-200 bg-white text-neutral-900 placeholder:text-neutral-400 focus:outline-none focus:ring-neutral-900 transition text-base"
        />
      </div>

      {match && (
        <div className="mt-4 flex items-start gap-4 bg-white rounded-2xl ring-1 ring-neutral-200/80 p-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0">
            <CheckCircle size={18} strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 tracking-tight">
              Yes, we cover {match.name}.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed mt-0.5">
              {match.region} region — book your inspection below.
            </p>
          </div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-3 bg-white rounded-2xl ring-1 ring-neutral-200/80 overflow-hidden">
          {suggestions.map((s) => (
            <button
              key={`${s.region}-${s.name}`}
              onClick={() => setQuery(s.name)}
              className="w-full flex items-center gap-3 px-5 py-3.5 text-left hover:bg-neutral-50 transition-colors text-sm border-b border-neutral-100 last:border-0"
            >
              <MapPin
                size={14}
                strokeWidth={1.75}
                className="text-neutral-400 shrink-0"
              />
              <span className="text-neutral-900 font-medium">{s.name}</span>
              <span className="text-neutral-400 ml-auto text-xs font-medium uppercase tracking-wider">
                {s.region}
              </span>
            </button>
          ))}
        </div>
      )}

      {normalised.length >= 2 && !match && suggestions.length === 0 && (
        <div className="mt-4 flex items-start gap-4 bg-white rounded-2xl ring-1 ring-neutral-200/80 p-5">
          <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0">
            <CheckCircle size={18} strokeWidth={1.75} />
          </div>
          <div>
            <p className="font-semibold text-neutral-900 tracking-tight">
              We still cover your area.
            </p>
            <p className="text-sm text-neutral-500 leading-relaxed mt-0.5">
              Urban 360 services all of Victoria — get in touch and we&apos;ll
              confirm availability.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
