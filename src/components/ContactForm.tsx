"use client";

import { useActionState } from "react";
import { ArrowRight, AlertCircle, CheckCircle } from "lucide-react";
import { submitContact } from "@/lib/actions/contact";
import type { ActionResult } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className="flex items-start gap-3 bg-green-500/10 border border-green-500/20 rounded-xl p-6">
        <CheckCircle size={20} className="text-green-500 shrink-0 mt-0.5" />
        <div>
          <p className="font-medium text-green-400">{state.message}</p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Urgency note */}
      <div className="flex items-start gap-3 bg-accent/10 border border-accent/20 rounded-xl p-4 mb-8">
        <AlertCircle size={18} className="text-accent shrink-0 mt-0.5" />
        <p className="text-sm text-muted">
          <span className="text-foreground font-medium">
            Limited daily availability.
          </span>{" "}
          To secure your preferred date, we recommend booking at least 2–3 days
          in advance.
        </p>
      </div>

      {state.message && !state.success && (
        <div className="flex items-start gap-3 bg-red-500/10 border border-red-500/20 rounded-xl p-4 mb-6">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-400">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label className="block text-sm font-medium mb-2">
              Full Name *
            </label>
            <input
              type="text"
              name="full_name"
              required
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-black/20 transition-colors"
              placeholder="Your name"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">Phone *</label>
            <input
              type="tel"
              name="phone"
              required
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-black/20 transition-colors"
              placeholder="04xx xxx xxx"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">Email *</label>
          <input
            type="email"
            name="email"
            required
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-black/20 transition-colors"
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label className="block text-sm font-medium mb-2">
            Service Required *
          </label>
          <select
            name="service_required"
            required
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/20 transition-colors"
          >
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
            name="property_address"
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-black/20 transition-colors"
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
              name="preferred_date"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/20 transition-colors"
            />
          </div>
          <div>
            <label className="block text-sm font-medium mb-2">
              How Did You Find Us?
            </label>
            <select
              name="how_found_us"
              className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-black/20 transition-colors"
            >
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
          <label className="block text-sm font-medium mb-2">Message</label>
          <textarea
            name="message"
            rows={4}
            className="w-full bg-background border border-border rounded-xl px-4 py-3 text-foreground placeholder:text-muted focus:outline-none focus:border-black/20 transition-colors resize-none"
            placeholder="Tell us about your property or inspection needs..."
          />
        </div>

        <button
          type="submit"
          disabled={pending}
          className="relative inline-flex items-center gap-2 bg-black text-white px-8 py-4 rounded-xl text-base font-semibold hover:bg-black/90 transition-all w-full sm:w-auto justify-center disabled:opacity-60 glass-shimmer"
        >
          {pending ? "Sending..." : "Send Enquiry"}{" "}
          {!pending && <ArrowRight size={18} />}
        </button>
      </form>
    </>
  );
}
