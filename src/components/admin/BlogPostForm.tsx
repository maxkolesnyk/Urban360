"use client";

import { useActionState, useEffect, useState } from "react";
import { createBlogPost, updateBlogPost } from "@/lib/actions/blog";
import type { ActionResult, BlogPost } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

function slugify(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-|-$/g, "");
}

export default function BlogPostForm({ post }: { post?: BlogPost }) {
  const action = post ? updateBlogPost : createBlogPost;
  const [state, formAction, pending] = useActionState(action, initialState);
  const [title, setTitle] = useState(post?.title ?? "");
  const [slug, setSlug] = useState(post?.slug ?? "");
  const [autoSlug, setAutoSlug] = useState(!post);

  useEffect(() => {
    if (autoSlug) setSlug(slugify(title));
  }, [title, autoSlug]);

  return (
    <form action={formAction} className="max-w-3xl space-y-6">
      {post && <input type="hidden" name="id" value={post.id} />}

      {state.message && (
        <div
          className={`rounded-xl p-3 text-sm ${
            state.success
              ? "bg-green-500/10 border border-green-500/20 text-green-400"
              : "bg-red-500/10 border border-red-500/20 text-red-400"
          }`}
        >
          {state.message}
        </div>
      )}

      <div>
        <label className="block text-sm font-medium mb-2">Title *</label>
        <input
          type="text"
          name="title"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          placeholder="Post title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Slug *</label>
        <div className="flex items-center gap-3">
          <input
            type="text"
            name="slug"
            required
            value={slug}
            onChange={(e) => {
              setSlug(e.target.value);
              setAutoSlug(false);
            }}
            className="flex-1 bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="post-url-slug"
          />
          {!autoSlug && (
            <button
              type="button"
              onClick={() => {
                setAutoSlug(true);
                setSlug(slugify(title));
              }}
              className="text-xs text-primary hover:underline shrink-0"
            >
              Auto
            </button>
          )}
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Excerpt *</label>
        <textarea
          name="excerpt"
          required
          rows={2}
          defaultValue={post?.excerpt}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Brief description for blog listing"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">
          Content (Markdown) *
        </label>
        <textarea
          name="content"
          required
          rows={16}
          defaultValue={post?.content}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y font-mono text-sm"
          placeholder="Write your blog post in Markdown..."
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <input
            type="text"
            name="category"
            required
            defaultValue={post?.category}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="Education"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Read Time *
          </label>
          <input
            type="text"
            name="read_time"
            required
            defaultValue={post?.read_time}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="5 min read"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">
            Featured Image URL
          </label>
          <input
            type="url"
            name="featured_image_url"
            defaultValue={post?.featured_image_url ?? ""}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="https://..."
          />
        </div>
      </div>

      <div className="flex items-center gap-3">
        <input
          type="checkbox"
          name="published"
          id="published"
          defaultChecked={post?.published ?? false}
          className="w-4 h-4 rounded border-border accent-primary"
        />
        <label htmlFor="published" className="text-sm font-medium">
          Published
        </label>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {pending
          ? "Saving..."
          : post
            ? "Update Post"
            : "Create Post"}
      </button>
    </form>
  );
}
