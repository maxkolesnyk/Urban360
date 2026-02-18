import Link from "next/link";
import { Plus } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type { Resource } from "@/lib/types/database";
import ResourcesTable from "./resources-table";

export default async function AdminResourcesPage() {
  const supabase = await createClient();
  const { data: resources } = await supabase
    .from("resources")
    .select("*")
    .order("display_order", { ascending: true })
    .order("created_at", { ascending: false })
    .returns<Resource[]>();

  return (
    <>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold">Resources</h1>
        <Link
          href="/admin/resources/new"
          className="inline-flex items-center gap-2 bg-primary text-white px-4 py-2.5 rounded-xl text-sm font-semibold hover:bg-primary-dark transition-colors"
        >
          <Plus size={16} /> New Resource
        </Link>
      </div>
      <ResourcesTable resources={resources ?? []} />
    </>
  );
}
