import type { MetadataRoute } from "next";
import { SERVICES } from "@/lib/constants";
import { createClient } from "@/lib/supabase/server";

const SITE_URL = "https://urban360.com.au";

const STATIC_ROUTES: Array<{
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]["changeFrequency"];
}> = [
  { path: "/", priority: 1.0, changeFrequency: "weekly" },
  { path: "/about", priority: 0.7, changeFrequency: "monthly" },
  { path: "/services", priority: 0.9, changeFrequency: "monthly" },
  { path: "/why-urban-360", priority: 0.8, changeFrequency: "monthly" },
  { path: "/areas", priority: 0.7, changeFrequency: "monthly" },
  { path: "/testimonials", priority: 0.6, changeFrequency: "weekly" },
  { path: "/faq", priority: 0.6, changeFrequency: "monthly" },
  { path: "/blog", priority: 0.7, changeFrequency: "weekly" },
  { path: "/resources", priority: 0.6, changeFrequency: "monthly" },
  { path: "/contact", priority: 0.8, changeFrequency: "yearly" },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const now = new Date();

  const staticEntries: MetadataRoute.Sitemap = STATIC_ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));

  const serviceEntries: MetadataRoute.Sitemap = SERVICES.map((s) => ({
    url: `${SITE_URL}/services/${s.slug}`,
    lastModified: now,
    changeFrequency: "monthly",
    priority: 0.8,
  }));

  let blogEntries: MetadataRoute.Sitemap = [];
  try {
    const supabase = await createClient();
    const { data: posts } = await supabase
      .from("blog_posts")
      .select("slug, updated_at, created_at")
      .eq("published", true);

    if (posts) {
      blogEntries = posts.map((p: { slug: string; updated_at?: string | null; created_at?: string | null }) => ({
        url: `${SITE_URL}/blog/${p.slug}`,
        lastModified: p.updated_at
          ? new Date(p.updated_at)
          : p.created_at
            ? new Date(p.created_at)
            : now,
        changeFrequency: "monthly" as const,
        priority: 0.6,
      }));
    }
  } catch {
    // Supabase unreachable at build time — return sitemap without blog posts
  }

  return [...staticEntries, ...serviceEntries, ...blogEntries];
}
