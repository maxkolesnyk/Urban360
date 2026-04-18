import type { Metadata } from "next";
import {
  Phone,
  Mail,
  MapPin,
  Clock,
  Check,
  FileText,
  PhoneCall,
  CalendarCheck,
} from "lucide-react";
import Section from "@/components/Section";
import ContactForm from "@/components/ContactForm";
import { SITE } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Contact & Book an Inspection",
  description:
    "Book a building inspection with Urban 360 in Melbourne. Contact our team for pre-purchase inspections, building permits, and more. Limited daily availability.",
};

const CONTACT_ITEMS = [
  {
    icon: <Phone size={18} strokeWidth={1.75} />,
    label: "Call us",
    value: SITE.phone,
    href: `tel:${SITE.phone}`,
    hint: "Senior consultant, direct line.",
  },
  {
    icon: <Mail size={18} strokeWidth={1.75} />,
    label: "Email",
    value: SITE.email,
    href: `mailto:${SITE.email}`,
    hint: "Replies within 2 business hours.",
  },
  {
    icon: <MapPin size={18} strokeWidth={1.75} />,
    label: "Service area",
    value: "Melbourne & all of Victoria",
    href: "/areas",
    hint: "Licensed state-wide.",
  },
  {
    icon: <Clock size={18} strokeWidth={1.75} />,
    label: "Availability",
    value: "Mon – Sat · 7:00 AM – 6:00 PM",
    hint: "Book 2–3 days ahead for preferred dates.",
  },
];

const TRUST_POINTS = [
  "Direct access to a senior consultant — no call centres",
  "Same-day or next-day reports as standard",
  "AS 4349.1 compliant inspection methodology",
  "Post-inspection consultation included",
  "Fully licensed and insured in Victoria",
];

const NEXT_STEPS = [
  {
    number: "01",
    icon: <FileText size={18} strokeWidth={1.75} />,
    title: "You submit",
    description:
      "Tell us the property, service type, and ideal dates. Any detail you have helps us scope accurately.",
  },
  {
    number: "02",
    icon: <PhoneCall size={18} strokeWidth={1.75} />,
    title: "We call back",
    description:
      "A senior consultant phones within two business hours to confirm scope, pricing, and answer questions.",
  },
  {
    number: "03",
    icon: <CalendarCheck size={18} strokeWidth={1.75} />,
    title: "Inspection booked",
    description:
      "We lock in your date, coordinate access with the agent, and deliver the full report the following day.",
  },
];

export default function ContactPage() {
  return (
    <div className="pt-[72px]">
      {/* Hero */}
      <Section>
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-start">
          <div className="lg:col-span-7">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Contact
              </span>
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
              Ready when<br />
              <span className="text-neutral-500">you are.</span>
            </h1>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-xl mb-8">
              Tell us about the property and we&apos;ll confirm availability,
              scope, and pricing within two business hours. No phone trees, no
              sales funnels — you speak directly to a senior consultant.
            </p>

            <div className="flex flex-wrap gap-3">
              <a
                href={`tel:${SITE.phone}`}
                className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-6 py-3 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
              >
                <Phone size={15} strokeWidth={1.75} />
                {SITE.phone}
              </a>
              <a
                href={`mailto:${SITE.email}`}
                className="group inline-flex items-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-6 py-3 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
              >
                <Mail size={15} strokeWidth={1.75} />
                Email us
              </a>
            </div>
          </div>

          <div className="lg:col-span-5">
            <div className="bg-white rounded-2xl ring-1 ring-neutral-200/80 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  At a glance
                </span>
              </div>
              <ul className="space-y-3.5">
                {TRUST_POINTS.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-neutral-900 text-white shrink-0 mt-0.5">
                      <Check size={11} strokeWidth={2.75} />
                    </div>
                    <span className="text-sm text-neutral-600 leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </Section>

      {/* Form + contact rail */}
      <Section className="bg-neutral-50">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
          {/* Form card */}
          <div className="lg:col-span-7 order-2 lg:order-1">
            <div className="mb-10">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Enquiry Form
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-4">
                Send us the details.<br />
                <span className="text-neutral-500">We&apos;ll take it from here.</span>
              </h2>
            </div>
            <div className="bg-white rounded-2xl ring-1 ring-neutral-200/80 p-6 md:p-8">
              <ContactForm />
            </div>
          </div>

          {/* Contact info rail */}
          <div className="lg:col-span-5 order-1 lg:order-2 lg:sticky lg:top-28">
            <div className="flex items-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Reach Us
              </span>
            </div>
            <h3 className="text-2xl md:text-3xl font-semibold tracking-[-0.025em] leading-[1.1] text-neutral-900 mb-6">
              Prefer a different channel?
            </h3>

            <div className="space-y-3">
              {CONTACT_ITEMS.map((item) => {
                const Wrapper = ({
                  children,
                }: {
                  children: React.ReactNode;
                }) =>
                  item.href ? (
                    <a
                      href={item.href}
                      className="group relative flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl ring-1 ring-neutral-200/80 hover:ring-neutral-900/20 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-[0_12px_40px_-16px_rgba(0,0,0,0.15)]"
                    >
                      {children}
                    </a>
                  ) : (
                    <div className="group relative flex items-start gap-4 p-5 md:p-6 bg-white rounded-2xl ring-1 ring-neutral-200/80">
                      {children}
                    </div>
                  );

                return (
                  <Wrapper key={item.label}>
                    <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-neutral-900 text-white shrink-0 transition-colors duration-300 group-hover:bg-accent group-hover:text-black">
                      {item.icon}
                    </div>
                    <div className="min-w-0">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-neutral-400 mb-1">
                        {item.label}
                      </p>
                      <p className="text-neutral-900 font-semibold tracking-tight truncate">
                        {item.value}
                      </p>
                      {item.hint && (
                        <p className="text-neutral-500 text-sm mt-1 leading-relaxed">
                          {item.hint}
                        </p>
                      )}
                    </div>
                  </Wrapper>
                );
              })}
            </div>
          </div>
        </div>
      </Section>

      {/* What happens next */}
      <Section>
        <div className="max-w-2xl mx-auto text-center mb-16 md:mb-20">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              What Happens Next
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
            Enquiry to inspection,<br />
            <span className="text-neutral-500">in three steps.</span>
          </h2>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            aria-hidden
            className="hidden md:block absolute top-[38px] left-[8%] right-[8%] h-px bg-gradient-to-r from-transparent via-neutral-200 to-transparent"
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 relative">
            {NEXT_STEPS.map((step) => (
              <div key={step.number} className="relative">
                <div className="flex items-center justify-center w-[76px] h-[76px] mx-auto mb-6 rounded-full bg-white ring-1 ring-neutral-200 text-neutral-900 relative z-10">
                  <div className="flex items-center justify-center w-[58px] h-[58px] rounded-full bg-neutral-900 text-white">
                    {step.icon}
                  </div>
                </div>
                <div className="text-center px-2">
                  <div className="inline-flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold uppercase tracking-[0.22em] text-accent">
                      Step {step.number}
                    </span>
                  </div>
                  <h3 className="text-xl font-semibold text-neutral-900 tracking-tight mb-3">
                    {step.title}
                  </h3>
                  <p className="text-neutral-500 leading-relaxed text-[15px] max-w-sm mx-auto">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Section>
    </div>
  );
}
