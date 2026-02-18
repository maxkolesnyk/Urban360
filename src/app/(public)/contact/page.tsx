import type { Metadata } from "next";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book an Inspection",
  description:
    "Book a building inspection with Urban 360 in Melbourne. Contact Mark Rozin directly for pre-purchase inspections, building permits, and more. Limited daily availability.",
};

export default function ContactPage() {
  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Book Your{" "}
            <span className="text-muted">Inspection</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Get in touch with {SITE.founder} to discuss your inspection needs
            and schedule an appointment. We respond to all enquiries within 2
            business hours.
          </p>
        </div>
      </Section>

      <Section dark>
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Contact Form */}
          <div className="lg:col-span-3">
            <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
            <ContactForm />
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

            <div className="space-y-6">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:border-black/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Call Us</p>
                  <p className="text-foreground font-semibold">{SITE.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:border-black/8 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Email</p>
                  <p className="text-foreground font-semibold">{SITE.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Service Area</p>
                  <p className="text-muted text-sm">
                    Melbourne &amp; All of Victoria
                  </p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-black/[0.03] flex items-center justify-center text-foreground shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Availability</p>
                  <p className="text-muted text-sm">
                    Monday – Saturday
                    <br />
                    7:00 AM – 6:00 PM
                  </p>
                </div>
              </div>
            </div>

            {/* Trust badge */}
            <div className="mt-8 p-5 bg-black/[0.02] border border-black/[0.06] rounded-xl">
              <p className="text-sm font-medium mb-2">
                Why Book With Urban 360?
              </p>
              <ul className="space-y-2 text-muted">
                <li>&#10003; Direct access to senior consultant</li>
                <li>&#10003; Same-day or next-day reports</li>
                <li>&#10003; AS 4349.1 compliant inspections</li>
                <li>&#10003; Post-inspection consultation included</li>
                <li>&#10003; Licensed &amp; insured in Victoria</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </>
  );
}
