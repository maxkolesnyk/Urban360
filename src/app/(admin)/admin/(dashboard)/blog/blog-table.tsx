"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Edit, Trash2, ExternalLink } from "lucide-react";
import { deleteBlogPost } from "@/lib/actions/blog";
import type { BlogPost } from "@/lib/types/database";

export default function BlogTable({
  posts: initialPosts,
}: {
  posts: BlogPost[];
}) {
  const [posts, setPosts] = useState(initialPosts);
  const router = useRouter();

  async function handleDelete(id: string) {
    if (!confirm("Delete this post?")) return;
    const result = await deleteBlogPost(id);
    if (result.success) {
      setPosts((prev) => prev.filter((p) => p.id !== id));
    }
  }

  return (
    <div className="overflow-x-auto">
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
          {posts.length === 0 && (
            <tr>
              <td colSpan={5} className="py-12 text-center text-muted">
                No blog posts yet. Create your first post!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
