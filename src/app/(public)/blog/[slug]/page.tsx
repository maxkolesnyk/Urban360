import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Section from "@/components/Section";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/types/database";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("title, excerpt")
    .eq("slug", slug)
    .eq("published", true)
    .single<Pick<BlogPost, "title" | "excerpt">>();

  if (!post) return {};
  return { title: post.title, description: post.excerpt };
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("slug", slug)
    .eq("published", true)
    .single<BlogPost>();

  if (!post) notFound();

  return (
    <>
      <Section>
        <Link
          href="/blog"
          className="inline-flex items-center gap-1 text-sm text-muted hover:text-white transition-colors mb-8"
        >
          <ArrowLeft size={14} /> All Posts
        </Link>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-4">
            <span className="text-xs font-medium text-white bg-white/5 px-2.5 py-0.5 rounded-full">
              {post.category}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted">
              <Calendar size={12} />{" "}
              {new Date(post.created_at).toLocaleDateString("en-AU", {
                day: "numeric",
                month: "long",
                year: "numeric",
              })}
            </span>
            <span className="flex items-center gap-1 text-sm text-muted">
              <Clock size={12} /> {post.read_time}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg text-muted leading-relaxed">{post.excerpt}</p>
        </div>

        <div className="relative aspect-[21/9] max-w-4xl rounded-2xl overflow-hidden border border-border mt-10">
          <Image
            src={post.featured_image_url || "/images/blog-default.webp"}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1024px) 100vw, 900px"
          />
        </div>
      </Section>

      <Section dark>
        <article className="max-w-3xl mx-auto">
          <Markdown
            remarkPlugins={[remarkGfm]}
            components={{
              h1: ({ children }) => (
                <h1 className="text-3xl font-bold mt-10 mb-4">{children}</h1>
              ),
              h2: ({ children }) => (
                <h2 className="text-2xl font-bold mt-8 mb-3">{children}</h2>
              ),
              h3: ({ children }) => (
                <h3 className="text-xl font-semibold mt-6 mb-2">{children}</h3>
              ),
              p: ({ children }) => (
                <p className="text-muted leading-relaxed mb-4">{children}</p>
              ),
              ul: ({ children }) => (
                <ul className="list-disc list-inside space-y-1 text-muted mb-4 ml-4">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="list-decimal list-inside space-y-1 text-muted mb-4 ml-4">
                  {children}
                </ol>
              ),
              li: ({ children }) => (
                <li className="text-muted leading-relaxed">{children}</li>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-4 border-white/20 pl-4 my-4 italic text-muted">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-white hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {children}
                </a>
              ),
              code: ({ children, className }) => {
                const isBlock = className?.includes("language-");
                if (isBlock) {
                  return (
                    <code className="block bg-background border border-border rounded-xl p-4 text-sm overflow-x-auto mb-4">
                      {children}
                    </code>
                  );
                }
                return (
                  <code className="bg-surface-light px-1.5 py-0.5 rounded text-sm">
                    {children}
                  </code>
                );
              },
              pre: ({ children }) => <pre className="mb-4">{children}</pre>,
              hr: () => <hr className="border-border my-8" />,
              img: ({ src, alt }) => (
                <img
                  src={src}
                  alt={alt || ""}
                  className="rounded-xl my-6 max-w-full"
                />
              ),
              table: ({ children }) => (
                <div className="overflow-x-auto mb-4">
                  <table className="w-full border-collapse border border-border">
                    {children}
                  </table>
                </div>
              ),
              th: ({ children }) => (
                <th className="border border-border px-4 py-2 bg-surface text-left font-semibold">
                  {children}
                </th>
              ),
              td: ({ children }) => (
                <td className="border border-border px-4 py-2 text-muted">
                  {children}
                </td>
              ),
            }}
          >
            {post.content}
          </Markdown>
        </article>
      </Section>
    </>
  );
}
