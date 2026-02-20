"use client";

import { useActionState, useCallback, useEffect, useRef, useState } from "react";
import { createBlogPost, updateBlogPost } from "@/lib/actions/blog";
import type { ActionResult, BlogPost } from "@/lib/types/database";
import { ImageIcon } from "lucide-react";
import { uploadBlogImage } from "@/lib/supabase/upload";
import ImageUpload from "./ImageUpload";

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
  const [content, setContent] = useState(post?.content ?? "");
  const [inlineUploading, setInlineUploading] = useState(false);
  const contentRef = useRef<HTMLTextAreaElement>(null);

  useEffect(() => {
    if (autoSlug) setSlug(slugify(title));
  }, [title, autoSlug]);

  const insertImageAtCursor = useCallback(
    (url: string, alt = "image") => {
      const ta = contentRef.current;
      if (!ta) {
        setContent((prev) => `${prev}\n![${alt}](${url})\n`);
        return;
      }
      const start = ta.selectionStart;
      const end = ta.selectionEnd;
      const markdown = `![${alt}](${url})`;
      const before = content.slice(0, start);
      const after = content.slice(end);
      const newContent = `${before}${markdown}${after}`;
      setContent(newContent);
      // restore cursor after React re-render
      requestAnimationFrame(() => {
        ta.selectionStart = ta.selectionEnd = start + markdown.length;
        ta.focus();
      });
    },
    [content]
  );

  const handleInlineUpload = useCallback(
    async (file: File) => {
      setInlineUploading(true);
      try {
        const url = await uploadBlogImage(file);
        insertImageAtCursor(url, file.name.replace(/\.[^.]+$/, ""));
      } catch {
        // silently ignore — the ImageUpload component handles errors for featured image
      } finally {
        setInlineUploading(false);
      }
    },
    [insertImageAtCursor]
  );

  const onContentDrop = useCallback(
    (e: React.DragEvent) => {
      const file = e.dataTransfer.files[0];
      if (file?.type.startsWith("image/")) {
        e.preventDefault();
        handleInlineUpload(file);
      }
    },
    [handleInlineUpload]
  );

  const inlineFileRef = useRef<HTMLInputElement>(null);

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
        <div className="flex items-center justify-between mb-2">
          <label className="block text-sm font-medium">
            Content (Markdown) *
          </label>
          <button
            type="button"
            disabled={inlineUploading}
            onClick={() => inlineFileRef.current?.click()}
            className="flex items-center gap-1.5 text-xs text-primary hover:underline disabled:opacity-50"
          >
            <ImageIcon className="w-3.5 h-3.5" />
            {inlineUploading ? "Uploading..." : "Insert Image"}
          </button>
        </div>
        <textarea
          ref={contentRef}
          name="content"
          required
          rows={16}
          value={content}
          onChange={(e) => setContent(e.target.value)}
          onDrop={onContentDrop}
          onDragOver={(e) => {
            if (e.dataTransfer.types.includes("Files")) e.preventDefault();
          }}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-y font-mono text-sm"
          placeholder="Write your blog post in Markdown..."
        />
        <input
          ref={inlineFileRef}
          type="file"
          accept="image/*"
          className="hidden"
          onChange={(e) => {
            const file = e.target.files?.[0];
            if (file) handleInlineUpload(file);
            e.target.value = "";
          }}
        />
      </div>

      {/* Featured Image */}
      <div>
        <label className="block text-sm font-medium mb-2">Featured Image</label>
        <ImageUpload
          name="featured_image_url"
          defaultValue={post?.featured_image_url ?? ""}
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
