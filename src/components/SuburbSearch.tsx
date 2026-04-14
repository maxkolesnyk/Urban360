"use client";

import { useState } from "react";
import { Search, CheckCircle, MapPin } from "lucide-react";

interface SuburbSearchProps {
  suburbs: { name: string; region: string }[];
}

export default function SuburbSearch({ suburbs }: SuburbSearchProps) {
  const [query, setQuery] = useState("");

  const normalised = query.trim().toLowerCase();
  const match = normalised.length >= 2
    ? suburbs.find((s) => s.name.toLowerCase() === normalised)
    : null;
  const suggestions = normalised.length >= 2 && !match
    ? suburbs.filter((s) => s.name.toLowerCase().includes(normalised)).slice(0, 5)
    : [];

  return (
    <div id="suburb-search" className="max-w-xl mx-auto scroll-mt-28">
      <div className="relative">
        <Search size={20} className="absolute left-4 top-1/2 -translate-y-1/2 text-muted" />
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Type your suburb..."
          className="w-full pl-12 pr-4 py-4 rounded-xl border border-border bg-white text-foreground placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/50 focus:border-accent transition-all text-base"
        />
      </div>

      {match && (
        <div className="mt-4 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
          <CheckCircle size={22} className="text-green-600 shrink-0" />
          <div>
            <p className="font-semibold text-green-900">
              Yes, we serve {match.name}!
            </p>
            <p className="text-sm text-green-700">
              {match.region} region — book your inspection today.
            </p>
          </div>
        </div>
      )}

      {suggestions.length > 0 && (
        <div className="mt-2 bg-white border border-border rounded-xl overflow-hidden shadow-sm">
          {suggestions.map((s) => (
            <button
              key={`${s.region}-${s.name}`}
              onClick={() => setQuery(s.name)}
              className="w-full flex items-center gap-3 px-4 py-3 text-left hover:bg-surface transition-colors text-sm border-b border-border/50 last:border-0"
            >
              <MapPin size={14} className="text-muted shrink-0" />
              <span className="text-foreground">{s.name}</span>
              <span className="text-muted ml-auto text-xs">{s.region}</span>
            </button>
          ))}
        </div>
      )}

      {normalised.length >= 2 && !match && suggestions.length === 0 && (
        <div className="mt-4 flex items-center gap-3 bg-green-50 border border-green-200 rounded-xl px-5 py-4">
          <CheckCircle size={22} className="text-green-600 shrink-0" />
          <div>
            <p className="font-semibold text-green-900">
              We cover all of Victoria
            </p>
            <p className="text-sm text-green-700">
              Even if your suburb isn&apos;t listed, we service it. Get in touch to book.
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
