import Link from "next/link";
import type { Metadata } from "next";
import { Home, ArrowUpRight, Phone } from "lucide-react";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-24">
      <div className="max-w-2xl mx-auto text-center">
        <div className="flex items-center justify-center gap-3 mb-6">
          <span className="h-px w-8 bg-accent" />
          <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
            404 — Not found
          </span>
          <span className="h-px w-8 bg-accent" />
        </div>
        <h1 className="text-5xl md:text-6xl font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
          We can&apos;t find<br />
          <span className="text-neutral-500">that page.</span>
        </h1>
        <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl mx-auto mb-10">
          The page may have moved, or the link could be out of date. Head back
          to the homepage, browse our services, or call us directly.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 justify-center">
          <Link
            href="/"
            className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
          >
            <Home size={16} />
            Back to homepage
          </Link>
          <Link
            href="/services"
            className="group inline-flex items-center justify-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
          >
            View services
            <ArrowUpRight size={15} />
          </Link>
          <a
            href={`tel:${SITE.phone}`}
            className="group inline-flex items-center justify-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
          >
            <Phone size={15} />
            {SITE.phone}
          </a>
        </div>
      </div>
    </main>
  );
}
