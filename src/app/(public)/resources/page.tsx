import type { Metadata } from "next";
import { FileText, Download, Eye, BookOpen, ArrowRight } from "lucide-react";
import Link from "next/link";
import Section from "@/components/Section";
import { createClient } from "@/lib/supabase/server";
import type { Resource } from "@/lib/types/database";

export const metadata: Metadata = {
  title: "Resources & Sample Reports",
  description:
    "Download sample building inspection reports, property guides, and educational resources from Urban 360. See the quality and detail of our reporting.",
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

  const reports = allResources?.filter((r) => r.category === "report") ?? [];
  const guides = allResources?.filter((r) => r.category === "guide") ?? [];

  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-white uppercase tracking-widest mb-3">
            Resources
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Sample Reports &amp;{" "}
            <span className="text-white">Property Guides</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            See the quality and detail of our reporting firsthand. Download
            sample reports and educational guides to help you make informed
            property decisions.
          </p>
        </div>
      </Section>

      {/* Sample Reports */}
      <Section dark>
        <div className="mb-10">
          <h2 className="text-2xl font-bold mb-2">Sample Reports</h2>
          <p className="text-muted">
            Review excerpts from real Urban 360 inspection reports.
          </p>
        </div>

        {reports.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reports.map((report) => (
              <div
                key={report.id}
                className="bg-background border border-border rounded-2xl p-8 hover:border-white/10 transition-colors"
              >
                <div className="aspect-[3/4] bg-surface-light border border-border rounded-xl mb-6 flex items-center justify-center overflow-hidden">
                  {report.thumbnail_url ? (
                    <img
                      src={report.thumbnail_url}
                      alt={report.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <FileText size={48} className="text-white/30" />
                  )}
                </div>
                <h3 className="font-semibold mb-2">{report.title}</h3>
                <p className="text-muted leading-relaxed mb-4">
                  {report.description}
                </p>
                <div className="flex items-center gap-3 text-sm text-muted mb-4">
                  <span>{report.resource_type}</span>
                  {report.page_count && (
                    <>
                      <span>&middot;</span>
                      <span>{report.page_count}</span>
                    </>
                  )}
                </div>
                {report.file_url && (
                  <div className="flex gap-3">
                    <a
                      href={report.file_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 bg-white text-black px-4 py-2 rounded-lg text-sm font-medium hover:bg-white/90 transition-colors"
                    >
                      <Download size={14} /> Download
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        ) : (
          <p className="text-muted text-center py-8">
            Sample reports are coming soon.
          </p>
        )}
      </Section>

      {/* Guides */}
      <Section>
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
                className="flex items-start gap-5 bg-surface border border-border rounded-2xl p-6 hover:border-white/10 transition-colors"
              >
                <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center text-white shrink-0">
                  <BookOpen size={24} />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="font-semibold">{guide.title}</h3>
                    <span className="text-xs font-medium text-white bg-white/5 px-2 py-0.5 rounded-full">
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
                      className="inline-flex items-center gap-1 text-sm text-white font-medium hover:underline"
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
            className="inline-flex items-center gap-2 bg-white text-black px-8 py-4 rounded-xl text-base font-semibold hover:bg-white/90 transition-all"
          >
            Book Your Inspection <ArrowRight size={18} />
          </Link>
        </div>
      </Section>
    </>
  );
}
