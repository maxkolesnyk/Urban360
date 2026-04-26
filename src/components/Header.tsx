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

  const [prevPathname, setPrevPathname] = useState(pathname);
  if (prevPathname !== pathname) {
    setPrevPathname(pathname);
    if (mobileOpen) setMobileOpen(false);
  }

  const isDark = isHome && !scrolled;

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
          isDark
            ? "bg-black/40 backdrop-blur-md"
            : "bg-background/95 backdrop-blur-xl border-b border-black/[0.06] shadow-sm"
        )}
      >
        <div className="flex items-center justify-between mx-auto max-w-7xl px-4 md:px-6 py-3">
          {/* Logo */}
          <Link
            href="/"
            className="group transition-opacity hover:opacity-80 flex items-center"
          >
            <Logo
              variant={isDark ? "dark" : "light"}
              className="h-5 md:h-6 w-auto transition-all"
            />
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
      </header>

      {/* Mobile Nav — separate overlay below header */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed top-[56px] left-0 right-0 z-40 lg:hidden bg-background/98 backdrop-blur-xl border-b border-black/[0.06] shadow-lg"
          >
            <nav className="flex flex-col px-6 py-4 gap-1 max-w-7xl mx-auto">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "px-4 py-3 rounded-lg text-sm transition-colors",
                    pathname === link.href
                      ? "text-foreground bg-black/5 font-medium"
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
    </>
  );
}
