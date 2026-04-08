import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock, Check } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book an Inspection",
  description:
    "Book a building inspection with Urban 360 in Melbourne. Contact our team for pre-purchase inspections, building permits, and more. Limited daily availability.",
};

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
            Book Your Inspection
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Get in touch with our team to discuss your inspection needs
            and schedule an appointment. We respond to all enquiries within 2
            business hours.
          </p>
        </div>
      </Section>

      <Section className="bg-surface">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              Send Us a Message
            </h2>
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6 tracking-tight">
              Contact Details
            </h2>

            <div className="space-y-4">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Phone size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-0.5">Call Us</p>
                  <p className="text-foreground font-semibold">{SITE.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl hover:border-accent/30 hover:shadow-sm transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Mail size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-0.5">Email</p>
                  <p className="text-foreground font-semibold">{SITE.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <MapPin size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-0.5">Service Area</p>
                  <p className="text-foreground font-semibold">
                    Melbourne &amp; All of Victoria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-white border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center shrink-0">
                  <Clock size={18} className="text-foreground" />
                </div>
                <div>
                  <p className="text-sm text-muted mb-0.5">Availability</p>
                  <p className="text-foreground font-semibold">
                    Monday – Saturday
                  </p>
                  <p className="text-muted text-sm">7:00 AM – 6:00 PM</p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-6 p-5 bg-white border border-border rounded-xl">
              <p className="font-semibold mb-3">Why Book With Urban 360?</p>
              <ul className="space-y-2">
                {[
                  "Direct access to senior consultant",
                  "Same-day or next-day reports",
                  "AS 4349.1 compliant inspections",
                  "Post-inspection consultation included",
                  "Licensed & insured in Victoria",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm text-muted">
                    <Check size={14} className="text-accent mt-0.5 shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}
