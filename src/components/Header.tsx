"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const pathname = usePathname();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="mx-auto max-w-7xl flex items-center justify-between px-6 py-4">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="w-10 h-10 rounded-lg bg-primary flex items-center justify-center text-white font-bold text-lg transition-transform group-hover:scale-105">
            U3
          </div>
          <div className="hidden sm:block">
            <span className="text-lg font-bold tracking-tight text-foreground">
              Urban <span className="text-primary">360</span>
            </span>
            <p className="text-xs text-muted leading-none">
              Building Inspections
            </p>
          </div>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden lg:flex items-center gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "px-3 py-2 text-sm rounded-md transition-colors",
                pathname === link.href
                  ? "text-primary bg-primary/10"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              )}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href={`tel:${SITE.phone}`}
            className="flex items-center gap-2 bg-primary text-white p-2 md:px-4 md:py-2 rounded-lg text-sm font-semibold hover:bg-primary-dark transition-colors"
          >
            <Phone size={16} />
            <span className="hidden md:inline">{SITE.phone}</span>
          </a>
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden overflow-hidden border-t border-border bg-background"
          >
            <nav className="flex flex-col px-6 py-4 gap-1">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm transition-colors",
                    pathname === link.href
                      ? "text-primary bg-primary/10"
                      : "text-muted hover:text-foreground hover:bg-surface-light"
                  )}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={`tel:${SITE.phone}`}
                className="mt-3 flex items-center justify-center gap-2 bg-primary text-white px-4 py-3 rounded-lg text-sm font-semibold"
              >
                <Phone size={16} />
                {SITE.phone}
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
