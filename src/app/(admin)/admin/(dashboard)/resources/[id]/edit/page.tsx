import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type { Resource } from "@/lib/types/database";
import ResourceForm from "@/components/admin/ResourceForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditResourcePage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: resource } = await supabase
    .from("resources")
    .select("*")
    .eq("id", id)
    .single<Resource>();

  if (!resource) notFound();

  return (
    <>
      <Link
        href="/admin/resources"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={14} /> Back to Resources
      </Link>
      <h1 className="text-2xl font-bold mb-8">Edit: {resource.title}</h1>
      <ResourceForm resource={resource} />
    </>
  );
}
