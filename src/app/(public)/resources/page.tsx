import type { Metadata } from "next";
import { Download, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { createClient } from "@/lib/supabase/server";
import type { Resource } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Resources & Guides",
  description:
    "Download property guides and educational resources from Urban 360 to help you make informed property decisions.",
};

export default async function ResourcesPage() {
  const supabase = await createClient();
  const { data: allResources } = await supabase
    .from("resources")
    .select("*")
    .eq("published", true)
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })
    .returns<Resource[]>();

  const guides = allResources?.filter((r) => r.category === "guide") ?? [];

  return (
    <div className="pt-[72px]">
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Property{" "}
            <span className="text-muted">Guides &amp; Resources</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Free educational resources to help you navigate the building
            inspection process and make informed property decisions.
          </p>
        </div>
      </Section>

      {/* Guides */}
      <Section dark>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">
            Guides &amp; Educational Resources
          </h2>
          <p className="text-muted">
            Free resources to help you navigate the building inspection process.
          </p>
        </div>

        {guides.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {guides.map((guide) => (
              <div
                key={guide.id}
                className="flex items-start gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-black/8 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-black/[0.03] flex items-center justify-center text-icon shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{guide.title}</h3>
                    <span className="text-xs font-medium text-foreground bg-black/[0.05] px-2 py-0.5 rounded-full">
                      {guide.resource_type}
                    </span>
                  </div>
                  <p className="text-muted leading-relaxed mb-3">
                    {guide.description}
                  </p>
                  {guide.file_url && (
                    <a
                      href={guide.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-sm text-foreground font-medium hover:underline"
                    >
                      <Download size={14} /> Download Free
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-8">
            Guides are coming soon.
          </p>
        )}
      </Section>

      {/* CTA */}
      <Section dark>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to See Our Work in Action?
          </h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Book an inspection and experience the Urban 360 difference
            firsthand.
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center gap-2 bg-accent text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-accent/90 transition-all hover:scale-[1.02]"
          >
            Book Your Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </div>
  );
}
