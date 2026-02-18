import type { Metadata } from "next";
import { Calendar, Clock } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import Section from "@/components/Section";
import NewsletterForm from "@/components/NewsletterForm";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/types/database";

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

  return (
    <>
      <Section>
        <div className="max-w-3xl">
          <p className="text-sm font-semibold text-muted uppercase tracking-widest mb-3">
            Blog & Insights
          </p>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            Property Knowledge,{" "}
            <span className="text-muted">Expert Insight</span>
          </h1>
          <p className="text-lg text-muted leading-relaxed">
            Educational content, industry insights, and practical guidance from
            Melbourne&apos;s trusted building inspection experts. Empowering you
            to make informed property decisions.
          </p>
        </div>
      </Section>

      <Section dark>
        {posts && posts.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group bg-background border border-border rounded-2xl overflow-hidden hover:border-black/8 transition-colors"
              >
                <div className="aspect-[16/9] bg-surface-light relative">
                  <Image
                    src={post.featured_image_url || "/images/blog-default.webp"}
                    alt={post.title}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                </div>

                <div className="p-6">
                  <div className="flex items-center gap-3 mb-3">
                    <span className="text-xs font-medium text-foreground bg-black/[0.05] px-2.5 py-0.5 rounded-full">
                      {post.category}
                    </span>
                  </div>
                  <h2 className="text-lg font-semibold mb-2 group-hover:text-black transition-colors">
                    {post.title}
                  </h2>
                  <p className="text-muted leading-relaxed mb-4">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted">
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />{" "}
                      {new Date(post.created_at).toLocaleDateString("en-AU", {
                        day: "numeric",
                        month: "short",
                        year: "numeric",
                      })}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={12} /> {post.read_time}
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <p className="text-muted text-lg">
              Blog posts are coming soon. Subscribe below to be notified!
            </p>
          </div>
        )}
      </Section>

      <Section>
        <div className="text-center">
          <h2 className="text-3xl font-bold mb-4">Want to Stay Informed?</h2>
          <p className="text-muted leading-relaxed mb-8 max-w-lg mx-auto">
            Subscribe to our newsletter for the latest building inspection
            insights, industry updates, and property tips.
          </p>
          <NewsletterForm />
        </div>
      </Section>
    </>
  );
}
