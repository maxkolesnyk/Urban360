"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Phone } from "lucide-react";
import { NAV_LINKS, SITE } from "@/lib/constants";
import { cn } from "@/lib/utils";
import Logo from "@/components/Logo";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHome = pathname === "/";

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // On homepage: transparent until scrolled, then solid dark
  // On other pages: always solid light
  const isDark = isHome && !scrolled;

  return (
    <header className="fixed top-3 left-0 right-0 z-50 mx-auto max-w-7xl px-4">
      <div
        className={cn(
          "rounded-2xl transition-all duration-300",
          isDark
            ? "bg-white/5 backdrop-blur-md border border-white/10"
            : "bg-background/90 backdrop-blur-xl border border-black/[0.06] shadow-sm"
        )}
      >
        <div className="flex items-center justify-between px-3 md:px-6 py-2.5">
          {/* Logo */}
          <Link
            href="/"
            className={cn(
              "group transition-opacity hover:opacity-80 flex items-center -ml-1 md:ml-0",
              isDark && "brightness-0 invert"
            )}
          >
            <Logo className="h-8 md:h-12 w-auto" />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={cn(
                  "px-3 py-2 text-sm rounded-md transition-all",
                  isDark
                    ? pathname === link.href
                      ? "text-white bg-white/10"
                      : "text-white/70 hover:text-white hover:bg-white/10"
                    : pathname === link.href
                      ? "text-foreground bg-black/5"
                      : "text-muted hover:text-black hover:bg-black/[0.03]"
                )}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* CTA + Mobile Toggle */}
          <div className="flex items-center gap-2">
            <a
              href={`tel:${SITE.phone}`}
              className={cn(
                "relative flex items-center gap-2 px-3 py-2 rounded-lg text-sm font-semibold transition-colors",
                isDark
                  ? "bg-accent text-black hover:bg-accent/90"
                  : "bg-black text-white hover:bg-black/90"
              )}
            >
              <Phone size={15} />
              <span className="hidden md:inline">{SITE.phone}</span>
            </a>
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className={cn(
                "lg:hidden p-2",
                isDark ? "text-white" : "text-foreground"
              )}
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
              className={cn(
                "lg:hidden overflow-hidden border-t rounded-b-2xl",
                isDark
                  ? "border-white/10 bg-neutral-950/95 backdrop-blur-xl"
                  : "border-black/[0.06] bg-background/95 backdrop-blur-xl"
              )}
            >
              <nav className="flex flex-col px-6 py-4 gap-1">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileOpen(false)}
                    className={cn(
                      "px-4 py-3 rounded-lg text-sm transition-colors",
                      isDark
                        ? pathname === link.href
                          ? "text-white bg-white/10"
                          : "text-white/70 hover:text-white hover:bg-white/10"
                        : pathname === link.href
                          ? "text-foreground bg-black/5"
                          : "text-muted hover:text-black hover:bg-black/[0.03]"
                    )}
                  >
                    {link.label}
                  </Link>
                ))}
              </nav>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
