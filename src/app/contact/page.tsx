import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  ArrowRight,
  AlertCircle,
} from "lucide-react";
import Section from "@/components/Section";
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
          <p className="text-sm font-semibold text-primary uppercase tracking-widest mb-3">
            Contact Us
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Book Your{" "}
            <span className="text-primary">Inspection</span>
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

            {/* Urgency note */}
            <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
              <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
              <p className="text-sm text-muted">
                <span className="text-foreground font-medium">
                  Limited daily availability.
                </span>{" "}
                To secure your preferred date, we recommend booking at least 2–3
                days in advance.
              </p>
            </div>

            <form className="space-y-5">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Phone *
                  </label>
                  <input
                    type="tel"
                    required
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                    placeholder="04xx xxx xxx"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Email *
                </label>
                <input
                  type="email"
                  required
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Service Required *
                </label>
                <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                  <option value="">Select a service</option>
                  <option>Pre-Purchase Building Inspection</option>
                  <option>Timber Pest Inspection</option>
                  <option>Combined Building &amp; Pest Inspection</option>
                  <option>Dilapidation Report</option>
                  <option>Owner-Builder Defect Report (Section 137B)</option>
                  <option>Rental Minimum Standards Assessment</option>
                  <option>New Construction Stage Inspection</option>
                  <option>Other / Not Sure</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Property Address
                </label>
                <input
                  type="text"
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors"
                  placeholder="Property address (if known)"
                />
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label className="block text-sm font-medium mb-2">
                    Preferred Date
                  </label>
                  <input
                    type="date"
                    className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium mb-2">
                    How Did You Find Us?
                  </label>
                  <select className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors">
                    <option value="">Select</option>
                    <option>Google Search</option>
                    <option>Referral</option>
                    <option>Real Estate Agent</option>
                    <option>Conveyancer / Solicitor</option>
                    <option>Social Media</option>
                    <option>Other</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium mb-2">
                  Message
                </label>
                <textarea
                  rows={4}
                  className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-primary transition-colors resize-none"
                  placeholder="Tell us about your property or inspection needs..."
                />
              </div>

              <button
                type="submit"
                className="inline-flex items-center gap-2 bg-primary text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-primary-dark transition-all w-full sm:w-auto justify-center"
              >
                Send Enquiry <ArrowRight size={18} />
              </button>
            </form>
          </div>

          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2">
            <h2 className="text-2xl font-bold mb-6">Contact Details</h2>

            <div className="space-y-6">
              <a
                href={`tel:${SITE.phone}`}
                className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Phone size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Call Us</p>
                  <p className="text-primary font-semibold">{SITE.phone}</p>
                </div>
              </a>

              <a
                href={`mailto:${SITE.email}`}
                className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl hover:border-primary/30 transition-colors"
              >
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
                  <Mail size={20} />
                </div>
                <div>
                  <p className="text-sm font-medium mb-1">Email</p>
                  <p className="text-primary font-semibold">{SITE.email}</p>
                </div>
              </a>

              <div className="flex items-start gap-4 p-5 bg-background border border-border rounded-xl">
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
                <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center text-primary shrink-0">
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
            <div className="mt-8 p-5 bg-primary/5 border border-primary/20 rounded-xl">
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
