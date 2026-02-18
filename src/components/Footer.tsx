import Link from "next/link";
import { Phone, Mail, MapPin } from "lucide-react";
import { SITE, NAV_LINKS, SERVICES } from "@/lib/constants";

export default function Footer() {
  return (
    <footer className="bg-black/[0.015] border-t border-glass-border">
      <div className="mx-auto max-w-7xl px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-lg bg-black flex items-center justify-center text-white font-bold text-lg">
                U3
              </div>
              <div>
                <span className="text-lg font-bold tracking-tight text-foreground">
                  Urban <span className="text-white">360</span>
                </span>
                <p className="text-xs text-muted leading-none">
                  Building Inspections
                </p>
              </div>
            </div>
            <p className="text-sm text-muted leading-relaxed mb-4">
              {SITE.description}
            </p>
            <p className="text-xs text-muted">{SITE.license}</p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm text-muted hover:text-black transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm text-muted hover:text-black transition-colors"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-sm font-semibold text-foreground mb-4 uppercase tracking-wider">
              Contact
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={`tel:${SITE.phone}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-black transition-colors"
                >
                  <Phone size={16} className="text-black/30 shrink-0" />
                  {SITE.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SITE.email}`}
                  className="flex items-center gap-3 text-sm text-muted hover:text-black transition-colors"
                >
                  <Mail size={16} className="text-black/30 shrink-0" />
                  {SITE.email}
                </a>
              </li>
              <li>
                <div className="flex items-center gap-3 text-sm text-muted">
                  <MapPin size={16} className="text-black/30 shrink-0" />
                  {SITE.address}
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 pt-8 border-t border-glass-border flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-muted">
            &copy; {new Date().getFullYear()} {SITE.name}. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-xs text-muted hover:text-black transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms"
              className="text-xs text-muted hover:text-black transition-colors"
            >
              Terms of Service
            </Link>
            <Link
              href="/admin"
              className="text-xs text-muted hover:text-black transition-colors"
            >
              Admin
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
