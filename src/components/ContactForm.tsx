"use client";

import { useActionState } from "react";
import { ArrowUpRight, AlertCircle, CheckCircle, Sparkles } from "lucide-react";
import { submitContact } from "@/lib/actions/contact";
import type { ActionResult } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

const inputClass =
  "w-full bg-white ring-1 ring-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-900 placeholder:text-neutral-400 focus:ring-neutral-900 focus:outline-none transition";
const labelClass = "text-sm font-semibold text-neutral-900 mb-2 block";

export default function ContactForm() {
  const [state, formAction, pending] = useActionState(
    submitContact,
    initialState
  );

  if (state.success && state.message) {
    return (
      <div className="flex items-start gap-4 bg-white rounded-2xl ring-1 ring-neutral-200/80 p-8">
        <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0">
          <CheckCircle size={18} strokeWidth={1.75} />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-neutral-900 tracking-tight mb-1.5">
            Enquiry received.
          </h3>
          <p className="text-sm text-neutral-500 leading-relaxed">
            {state.message}
          </p>
        </div>
      </div>
    );
  }

  return (
    <>
      {/* Urgency note */}
      <div className="flex items-start gap-3 bg-neutral-50 ring-1 ring-neutral-200/80 rounded-2xl p-5 mb-8">
        <div className="flex items-center justify-center w-9 h-9 rounded-xl bg-neutral-900 text-white shrink-0">
          <Sparkles size={15} strokeWidth={1.75} />
        </div>
        <div>
          <p className="text-sm text-neutral-900 font-semibold tracking-tight">
            Limited daily availability.
          </p>
          <p className="text-sm text-neutral-500 leading-relaxed mt-0.5">
            Book 2–3 days ahead to secure your preferred date.
          </p>
        </div>
      </div>

      {state.message && !state.success && (
        <div className="flex items-start gap-3 bg-white ring-1 ring-red-200 rounded-2xl p-5 mb-6">
          <AlertCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
          <p className="text-sm text-red-500 leading-relaxed">{state.message}</p>
        </div>
      )}

      <form action={formAction} className="space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="full_name" className={labelClass}>
              Full Name *
            </label>
            <input
              id="full_name"
              type="text"
              name="full_name"
              required
              className={inputClass}
              placeholder="Your name"
            />
          </div>
          <div>
            <label htmlFor="phone" className={labelClass}>
              Phone *
            </label>
            <input
              id="phone"
              type="tel"
              name="phone"
              required
              className={inputClass}
              placeholder="04xx xxx xxx"
            />
          </div>
        </div>

        <div>
          <label htmlFor="email" className={labelClass}>
            Email *
          </label>
          <input
            id="email"
            type="email"
            name="email"
            required
            className={inputClass}
            placeholder="your@email.com"
          />
        </div>

        <div>
          <label htmlFor="service_required" className={labelClass}>
            Service Required *
          </label>
          <select
            id="service_required"
            name="service_required"
            required
            className={inputClass}
            defaultValue=""
          >
            <option value="" disabled>
              Select a service
            </option>
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
          <label htmlFor="property_address" className={labelClass}>
            Property Address
          </label>
          <input
            id="property_address"
            type="text"
            name="property_address"
            className={inputClass}
            placeholder="Property address (if known)"
          />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
          <div>
            <label htmlFor="preferred_date" className={labelClass}>
              Preferred Date
            </label>
            <input
              id="preferred_date"
              type="date"
              name="preferred_date"
              className={inputClass}
            />
          </div>
          <div>
            <label htmlFor="how_found_us" className={labelClass}>
              How Did You Find Us?
            </label>
            <select
              id="how_found_us"
              name="how_found_us"
              className={inputClass}
              defaultValue=""
            >
              <option value="" disabled>
                Select
              </option>
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
          <label htmlFor="message" className={labelClass}>
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5}
            className={`${inputClass} resize-none`}
            placeholder="Tell us about your property or inspection needs..."
          />
        </div>

        <div className="pt-2">
          <button
            type="submit"
            disabled={pending}
            className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all w-full sm:w-auto disabled:opacity-60 disabled:hover:bg-neutral-900 disabled:hover:text-white"
          >
            {pending ? "Sending…" : "Send enquiry"}
            {!pending && (
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            )}
          </button>
          <p className="text-xs text-neutral-400 mt-4">
            We reply to every enquiry within two business hours.
          </p>
        </div>
      </form>
    </>
  );
}
