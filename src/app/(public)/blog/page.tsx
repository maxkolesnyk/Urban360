import type { Metadata } from "next";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/types/database";
import BlogIndexClient from "./BlogIndexClient";

export const metadata: Metadata = {
  title: "Blog",
  description:
    "Building inspection insights, property tips, and industry education from Urban 360. Expert guidance for Melbourne home buyers, investors, and property owners.",
};

export default async function BlogPage() {
  const supabase = await createClient();
  const { data: posts } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .order("created_at", { ascending: false })
    .returns<BlogPost[]>();

  return <BlogIndexClient posts={posts ?? []} />;
}
