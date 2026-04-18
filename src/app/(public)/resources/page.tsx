import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { Resource } from "@/lib/types/database";
import ResourcesIndexClient from "./ResourcesIndexClient";

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

  return <ResourcesIndexClient resources={allResources ?? []} />;
}
