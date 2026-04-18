"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, Calendar, Clock } from "lucide-react";
import Section from "@/components/Section";
import NewsletterForm from "@/components/NewsletterForm";
import type { BlogPost } from "@/lib/types/database";

interface Props {
  posts: BlogPost[];
}

const ALL = "All";

function formatDate(dateStr: string) {
  return new Date(dateStr).toLocaleDateString("en-AU", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
}

export default function BlogIndexClient({ posts }: Props) {
  const categories = useMemo(() => {
    const set = new Set<string>();
    posts.forEach((p) => {
      if (p.category) set.add(p.category);
    });
    return [ALL, ...Array.from(set).sort()];
  }, [posts]);

  const [activeCategory, setActiveCategory] = useState<string>(ALL);

  const filtered = useMemo(() => {
    if (activeCategory === ALL) return posts;
    return posts.filter((p) => p.category === activeCategory);
  }, [posts, activeCategory]);

  const [featured, ...rest] = filtered;

  return (
    <div className="pt-[72px]">
      {/* ── 1. Page hero ── */}
      <Section>
        <div className="max-w-3xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Insights
            </span>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-5xl md:text-6xl lg:text-[4rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-6"
          >
            Field notes on<br />
            <span className="text-neutral-500">property condition.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.18 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed max-w-2xl"
          >
            Educational reads, observations from the field, and practical
            guidance for Melbourne home buyers, investors, and property owners —
            written by the consultants doing the work.
          </motion.p>
        </div>

        {/* Category filter */}
        {categories.length > 2 && (
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.28 }}
            className="mt-10 flex flex-wrap gap-2"
          >
            {categories.map((cat) => {
              const active = cat === activeCategory;
              return (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={
                    active
                      ? "text-xs font-semibold uppercase tracking-[0.18em] px-4 py-2 rounded-full bg-neutral-900 text-white transition-all"
                      : "text-xs font-semibold uppercase tracking-[0.18em] px-4 py-2 rounded-full bg-white text-neutral-700 ring-1 ring-neutral-200 hover:ring-neutral-900 hover:text-neutral-900 transition-all"
                  }
                >
                  {cat}
                </button>
              );
            })}
          </motion.div>
        )}
      </Section>

      {/* ── 2. Featured + grid ── */}
      {filtered.length === 0 ? (
        <Section className="bg-neutral-50">
          <div className="max-w-xl mx-auto text-center py-14">
            <div className="flex items-center justify-center gap-3 mb-5">
              <span className="h-px w-8 bg-accent" />
              <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                Coming Soon
              </span>
              <span className="h-px w-8 bg-accent" />
            </div>
            <h2 className="text-3xl md:text-4xl font-semibold tracking-[-0.025em] leading-[1.1] text-neutral-900 mb-4">
              New articles are on the way.
            </h2>
            <p className="text-base md:text-lg text-neutral-500 leading-relaxed">
              Subscribe below and we&apos;ll let you know when the next piece
              drops.
            </p>
          </div>
        </Section>
      ) : (
        <Section className="bg-neutral-50">
          {/* Featured editorial card */}
          {featured && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
              className="mb-14 md:mb-20"
            >
              <div className="flex items-center gap-3 mb-6">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  Featured
                </span>
              </div>
              <Link
                href={`/blog/${featured.slug}`}
                className="group grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center bg-white rounded-2xl ring-1 ring-neutral-200/80 overflow-hidden hover:ring-neutral-900/40 transition-all duration-300 hover:shadow-[0_24px_70px_-24px_rgba(0,0,0,0.25)]"
              >
                <div className="relative lg:col-span-7 aspect-[16/10] lg:aspect-[4/3] overflow-hidden">
                  <Image
                    src={
                      featured.featured_image_url || "/images/blog-default.webp"
                    }
                    alt={featured.title}
                    fill
                    priority
                    className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.04]"
                    sizes="(max-width: 1024px) 100vw, 60vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <span className="absolute top-4 left-4 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 bg-black/50 backdrop-blur-md rounded-full px-3 py-1.5">
                    {featured.category}
                  </span>
                </div>
                <div className="lg:col-span-5 p-6 md:p-10 lg:pr-10 lg:pl-2">
                  <div className="flex items-center gap-4 text-xs text-neutral-500 mb-4">
                    <span className="inline-flex items-center gap-1.5">
                      <Calendar size={12} />
                      {formatDate(featured.created_at)}
                    </span>
                    <span className="inline-flex items-center gap-1.5">
                      <Clock size={12} />
                      {featured.read_time}
                    </span>
                  </div>
                  <h2 className="text-3xl md:text-4xl lg:text-[2.5rem] font-semibold tracking-[-0.02em] leading-[1.1] text-neutral-900 mb-5 group-hover:text-neutral-900">
                    {featured.title}
                  </h2>
                  <p className="text-base md:text-lg text-neutral-500 leading-relaxed mb-6 line-clamp-3">
                    {featured.excerpt}
                  </p>
                  <span className="inline-flex items-center gap-1.5 text-sm font-semibold text-neutral-900">
                    Read article
                    <ArrowUpRight
                      size={15}
                      className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:text-accent"
                    />
                  </span>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Remaining post grid */}
          {rest.length > 0 && (
            <>
              <div className="flex items-center gap-3 mb-8">
                <span className="h-px w-8 bg-accent" />
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
                  {activeCategory === ALL ? "More Articles" : activeCategory}
                </span>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-5">
                {rest.map((post, i) => (
                  <motion.div
                    key={post.slug}
                    initial={{ opacity: 0, y: 16 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-60px" }}
                    transition={{
                      duration: 0.55,
                      delay: i * 0.05,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={`/blog/${post.slug}`}
                      className="group relative flex h-full flex-col overflow-hidden rounded-2xl bg-white ring-1 ring-neutral-200/80 hover:ring-neutral-900/40 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_60px_-20px_rgba(0,0,0,0.25)]"
                    >
                      <div className="relative aspect-[16/10] w-full overflow-hidden">
                        <Image
                          src={
                            post.featured_image_url ||
                            "/images/blog-default.webp"
                          }
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-[900ms] ease-out group-hover:scale-[1.06]"
                          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        <span className="absolute top-3 left-3 text-[10px] font-semibold uppercase tracking-[0.18em] text-white/95 bg-black/40 backdrop-blur-md rounded-full px-2.5 py-1">
                          {post.category}
                        </span>
                      </div>
                      <div className="flex flex-col flex-1 p-5 md:p-6">
                        <h3 className="font-semibold text-neutral-900 text-[15px] md:text-base leading-snug tracking-tight mb-2 line-clamp-2">
                          {post.title}
                        </h3>
                        <p className="text-[13px] md:text-sm text-neutral-500 line-clamp-2 mb-4">
                          {post.excerpt}
                        </p>
                        <div className="mt-auto flex items-center justify-between gap-3 pt-3 border-t border-neutral-100">
                          <div className="flex items-center gap-3 text-[11px] text-neutral-500">
                            <span className="inline-flex items-center gap-1">
                              <Calendar size={11} />
                              {formatDate(post.created_at)}
                            </span>
                            <span className="inline-flex items-center gap-1">
                              <Clock size={11} />
                              {post.read_time}
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
                  </motion.div>
                ))}
              </div>
            </>
          )}
        </Section>
      )}

      {/* ── 3. Newsletter ── */}
      <Section>
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="flex items-center justify-center gap-3 mb-5"
          >
            <span className="h-px w-8 bg-accent" />
            <span className="text-xs font-semibold uppercase tracking-[0.22em] text-neutral-500">
              Stay Informed
            </span>
            <span className="h-px w-8 bg-accent" />
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.22, 1, 0.36, 1] }}
            className="text-4xl md:text-5xl lg:text-[3.25rem] font-semibold tracking-[-0.025em] leading-[1.05] text-neutral-900 mb-5"
          >
            New insights,<br />
            <span className="text-neutral-500">once a month.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.15 }}
            className="text-base md:text-lg text-neutral-500 leading-relaxed mb-8 max-w-xl mx-auto"
          >
            One short email with our latest field notes, inspection tips, and
            property updates. No spam, unsubscribe any time.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={{ duration: 0.5, delay: 0.22 }}
          >
            <NewsletterForm />
          </motion.div>
        </div>
      </Section>
    </div>
  );
}
