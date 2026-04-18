import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowLeft,
  ArrowUpRight,
  Calendar,
  Clock,
  Phone,
} from "lucide-react";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Section from "@/components/Section";
import { createClient } from "@/lib/supabase/server";
import { SITE } from "@/lib/constants";
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

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
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

  // Related: same category first, fall back to latest; exclude current
  const { data: relatedSameCat } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("published", true)
    .eq("category", post.category)
    .neq("slug", post.slug)
    .order("created_at", { ascending: false })
    .limit(3)
    .returns<BlogPost[]>();

  let related: BlogPost[] = relatedSameCat ?? [];
  if (related.length < 3) {
    const excludeSlugs = [post.slug, ...related.map((p) => p.slug)];
    const { data: fillers } = await supabase
      .from("blog_posts")
      .select("*")
      .eq("published", true)
      .not("slug", "in", `(${excludeSlugs.map((s) => `"${s}"`).join(",")})`)
      .order("created_at", { ascending: false })
      .limit(3 - related.length)
      .returns<BlogPost[]>();
    if (fillers) related = [...related, ...fillers];
  }

  return (
    <div className="pt-[72px]">
      {/* ── 1. Article header ── */}
      <Section>
        <Link
          href="/blog"
          className="group inline-flex items-center gap-1.5 text-sm font-medium text-neutral-500 hover:text-neutral-900 transition-colors mb-10"
        >
          <ArrowLeft
            size={14}
            className="transition-transform group-hover:-translate-x-0.5"
          />
          All articles
        </Link>

        <div className="max-w-3xl">
          <div className="flex items-center gap-3 mb-6">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              {post.category}
            </span>
          </div>
          <h1 className="text-4xl md:text-5xl lg:text-[3.5rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6">
            {post.title}
          </h1>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl">
            {post.excerpt}
          </p>
          <div className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-neutral-500 pb-2">
            <span className="inline-flex items-center gap-1.5">
              <Calendar size={13} />
              {formatDate(post.created_at)}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Clock size={13} />
              {post.read_time}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-1 w-1 rounded-full bg-neutral-300" />
              Urban 360 Team
            </span>
          </div>
        </div>

        <div className="relative aspect-[21/10] w-full max-w-5xl mx-auto rounded-2xl overflow-hidden ring-1 ring-neutral-200/80 mt-12">
          <Image
            src={post.featured_image_url || "/images/blog-default.webp"}
            alt={post.title}
            fill
            priority
            className="object-cover"
            sizes="(max-width: 1280px) 100vw, 1100px"
          />
        </div>
      </Section>

      {/* ── 2. Article body ── */}
      <Section className="bg-neutral-50 !py-16 md:!py-20">
        <article className="mx-auto max-w-2xl">
          <div
            className="
              [&>h1]:text-4xl [&>h1]:md:text-[2.5rem] [&>h1]:font-semibold [&>h1]:tracking-[-0.02em] [&>h1]:leading-[1.1] [&>h1]:text-neutral-900 [&>h1]:mt-14 [&>h1]:mb-5
              [&>h2]:text-3xl [&>h2]:md:text-[2rem] [&>h2]:font-semibold [&>h2]:tracking-[-0.02em] [&>h2]:leading-[1.15] [&>h2]:text-neutral-900 [&>h2]:mt-12 [&>h2]:mb-4
              [&>h3]:text-xl [&>h3]:md:text-2xl [&>h3]:font-semibold [&>h3]:tracking-tight [&>h3]:text-neutral-900 [&>h3]:mt-10 [&>h3]:mb-3
              [&>h4]:text-lg [&>h4]:font-semibold [&>h4]:tracking-tight [&>h4]:text-neutral-900 [&>h4]:mt-8 [&>h4]:mb-2
              [&>p]:text-base [&>p]:md:text-lg [&>p]:text-neutral-700 [&>p]:leading-[1.75] [&>p]:mb-6
              [&>ul]:my-6 [&>ul]:space-y-2 [&>ul]:pl-6 [&>ul]:list-disc [&>ul]:marker:text-neutral-400
              [&>ol]:my-6 [&>ol]:space-y-2 [&>ol]:pl-6 [&>ol]:list-decimal [&>ol]:marker:text-neutral-400
              [&_li]:text-base [&_li]:md:text-lg [&_li]:text-neutral-700 [&_li]:leading-[1.7]
              [&>blockquote]:border-l-2 [&>blockquote]:border-accent [&>blockquote]:pl-5 [&>blockquote]:my-8 [&>blockquote]:text-lg [&>blockquote]:md:text-xl [&>blockquote]:text-neutral-900 [&>blockquote]:font-medium [&>blockquote]:italic
              [&>hr]:my-10 [&>hr]:border-neutral-200
              [&>img]:my-8 [&>img]:rounded-2xl [&>img]:ring-1 [&>img]:ring-neutral-200/80
              [&_a]:text-neutral-900 [&_a]:font-medium [&_a]:underline [&_a]:decoration-accent [&_a]:decoration-2 [&_a]:underline-offset-[3px] [&_a]:transition-colors hover:[&_a]:text-accent
              [&_strong]:text-neutral-900 [&_strong]:font-semibold
              [&_code]:bg-neutral-100 [&_code]:px-1.5 [&_code]:py-0.5 [&_code]:rounded [&_code]:text-[0.9em] [&_code]:font-mono [&_code]:text-neutral-900
              [&>pre]:bg-neutral-900 [&>pre]:text-neutral-100 [&>pre]:p-5 [&>pre]:rounded-2xl [&>pre]:overflow-x-auto [&>pre]:my-6 [&>pre]:text-sm [&>pre_code]:bg-transparent [&>pre_code]:text-neutral-100 [&>pre_code]:p-0
            "
          >
            <Markdown
              remarkPlugins={[remarkGfm]}
              components={{
                table: ({ children }) => (
                  <div className="overflow-x-auto my-8 rounded-2xl ring-1 ring-neutral-200/80">
                    <table className="w-full border-collapse">{children}</table>
                  </div>
                ),
                thead: ({ children }) => (
                  <thead className="bg-neutral-100">{children}</thead>
                ),
                th: ({ children }) => (
                  <th className="border-b border-neutral-200 px-4 py-3 text-left text-sm font-semibold text-neutral-900">
                    {children}
                  </th>
                ),
                td: ({ children }) => (
                  <td className="border-b border-neutral-100 px-4 py-3 text-sm text-neutral-700">
                    {children}
                  </td>
                ),
                a: ({ href, children }) => (
                  <a
                    href={href}
                    target={
                      href && href.startsWith("http") ? "_blank" : undefined
                    }
                    rel={
                      href && href.startsWith("http")
                        ? "noopener noreferrer"
                        : undefined
                    }
                  >
                    {children}
                  </a>
                ),
              }}
            >
              {post.content}
            </Markdown>
          </div>

          {/* Share / back to blog */}
          <div className="mt-16 pt-8 border-t border-neutral-200 flex flex-wrap items-center justify-between gap-4">
            <Link
              href="/blog"
              className="group inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors"
            >
              <ArrowLeft
                size={14}
                className="transition-transform group-hover:-translate-x-0.5"
              />
              More articles
            </Link>
            <Link
              href="/contact"
              className="group inline-flex items-center gap-2 bg-neutral-900 text-white px-5 py-2.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book an inspection
              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>
        </article>
      </Section>

      {/* ── 3. Related articles ── */}
      {related.length > 0 && (
        <Section>
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12 md:mb-14">
            <div className="max-w-2xl">
              <div className="flex items-center gap-3 mb-5">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Keep Reading
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900">
                Related articles,<br />
                <span className="text-neutral-500">same standard.</span>
              </h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-neutral-900 hover:text-accent transition-colors self-start md:self-end"
            >
              Browse all
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
            {related.map((r) => (
              <Link
                key={r.slug}
                href={`/blog/${r.slug}`}
                className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
              >
                <div className="relative aspect-[16/10] w-full overflow-hidden">
                  <Image
                    src={r.featured_image_url || "/images/blog-default.webp"}
                    alt={r.title}
                    fill
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1">
                    {r.category}
                  </span>
                </div>
                <div className="flex flex-col flex-1 p-5 md:p-6">
                  <h3 className="font-semibold text-neutral-900 text-[15px] md:text-base leading-snug tracking-tight mb-2 line-clamp-2">
                    {r.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-neutral-500 line-clamp-2 mb-4">
                    {r.excerpt}
                  </p>
                  <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                    <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                      <span className="inline-flex items-center gap-1">
                        <Clock size={11} />
                        {r.read_time}
                      </span>
                    </div>
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-neutral-900">
                      Read
                      <ArrowUpRight
                        size={13}
                        className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                      />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </Section>
      )}

      {/* ── 4. Closing CTA ── */}
      <Section className="bg-neutral-50">
        <div className="max-w-3xl mx-auto text-center">
          <div className="flex items-center justify-center gap-3 mb-5">
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Ready When You Are
            </span>
            <span className="h-px w-8 bg-accent" />
          </div>
          <h2 className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5">
            Put this into practice,<br />
            <span className="text-neutral-500">on your property.</span>
          </h2>
          <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-2xl mx-auto">
            Book one of our senior consultants for an inspection tailored to
            your property, your stage, and your concerns.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/contact"
              className="group inline-flex items-center justify-center gap-2 bg-neutral-900 text-white px-7 py-3.5 rounded-xl text-sm font-semibold hover:bg-accent hover:text-black transition-all"
            >
              Book an inspection
              <ArrowUpRight
                size={16}
                className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
              />
            </Link>
            <a
              href={`tel:${SITE.phone}`}
              className="inline-flex items-center justify-center gap-2 bg-white ring-1 ring-neutral-200 text-neutral-900 px-7 py-3.5 rounded-xl text-sm font-semibold hover:ring-neutral-900 transition-all"
            >
              <Phone size={16} />
              Call {SITE.phone}
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}
