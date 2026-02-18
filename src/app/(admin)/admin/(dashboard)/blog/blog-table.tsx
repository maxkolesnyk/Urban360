"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import { deleteBlogPost } from "@/lib/actions/blog";
import type { BlogPost } from "@/lib/types/database";

export default function BlogTable({
  posts: initialPosts,
}: {
  posts: BlogPost[];
}) {
  const [posts, setPosts] = useState(initialPosts);

  async function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return;
    const result = await deleteBlogPost(id);
    if (result.success) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  if (posts.length === 0) {
    return (
      <p className="text-center text-muted py-12">
        No blog posts yet. Create your first post!
      </p>
    );
  }

  return (
    <>
      {/* Mobile card list */}
      <div className="lg:hidden space-y-3">
        {posts.map((post) => (
          <div
            key={post.id}
            className="bg-surface border border-border rounded-xl p-4"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-medium leading-snug">{post.title}</p>
              <span
                className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                  post.published
                    ? "bg-green-500/10 text-green-400"
                    : "bg-surface-light text-muted"
                }`}
              >
                {post.published ? "Published" : "Draft"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted mb-3">
              <span>{post.category}</span>
              <span>&middot;</span>
              <span>
                {new Date(post.created_at).toLocaleDateString("en-AU")}
              </span>
            </div>
            <div className="flex items-center gap-2">
              {post.published && (
                <Link
                  href={`/blog/${post.slug}`}
                  target="_blank"
                  className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light text-sm text-muted hover:text-foreground transition-colors"
                >
                  <ExternalLink size={14} /> View
                </Link>
              )}
              <Link
                href={`/admin/blog/${post.id}/edit`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light text-sm text-muted hover:text-foreground transition-colors"
              >
                <Edit size={14} /> Edit
              </Link>
              <button
                onClick={() => handleDelete(post.id)}
                className="ml-auto p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-3 font-medium text-muted">Title</th>
              <th className="pb-3 font-medium text-muted">Category</th>
              <th className="pb-3 font-medium text-muted">Status</th>
              <th className="pb-3 font-medium text-muted">Created</th>
              <th className="pb-3 font-medium text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id} className="border-b border-border/50">
                <td className="py-3 font-medium">{post.title}</td>
                <td className="py-3 text-muted">{post.category}</td>
                <td className="py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      post.published
                        ? "bg-green-500/10 text-green-400"
                        : "bg-surface-light text-muted"
                    }`}
                  >
                    {post.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="py-3 text-muted">
                  {new Date(post.created_at).toLocaleDateString("en-AU")}
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    {post.published && (
                      <Link
                        href={`/blog/${post.slug}`}
                        target="_blank"
                        className="p-1.5 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                      >
                        <ExternalLink size={16} />
                      </Link>
                    )}
                    <Link
                      href={`/admin/blog/${post.id}/edit`}
                      className="p-1.5 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(post.id)}
                      className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                    >
                      <Trash2 size={16} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
