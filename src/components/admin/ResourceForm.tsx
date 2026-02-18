"use client";

import { useActionState } from "react";
import { createResource, updateResource } from "@/lib/actions/resources";
import type { ActionResult, Resource } from "@/lib/types/database";

const initialState: ActionResult = { success: false, message: "" };

export default function ResourceForm({ resource }: { resource?: Resource }) {
  const action = resource ? updateResource : createResource;
  const [state, formAction, pending] = useActionState(action, initialState);

  return (
    <form action={formAction} className="max-w-3xl space-y-6">
      {resource && <input type="hidden" name="id" value={resource.id} />}

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
          defaultValue={resource?.title}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          placeholder="Resource title"
        />
      </div>

      <div>
        <label className="block text-sm font-medium mb-2">Description *</label>
        <textarea
          name="description"
          required
          rows={3}
          defaultValue={resource?.description}
          className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors resize-none"
          placeholder="Brief description of this resource"
        />
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Category *</label>
          <select
            name="category"
            required
            defaultValue={resource?.category ?? "report"}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
          >
            <option value="report">Sample Report</option>
            <option value="guide">Guide</option>
          </select>
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Type Label *</label>
          <input
            type="text"
            name="resource_type"
            required
            defaultValue={resource?.resource_type}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="PDF Report / Guide / Checklist"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Page Count</label>
          <input
            type="text"
            name="page_count"
            defaultValue={resource?.page_count ?? ""}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="24 pages"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">File URL</label>
          <input
            type="url"
            name="file_url"
            defaultValue={resource?.file_url ?? ""}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="https://... (download link)"
          />
        </div>
        <div>
          <label className="block text-sm font-medium mb-2">Thumbnail URL</label>
          <input
            type="url"
            name="thumbnail_url"
            defaultValue={resource?.thumbnail_url ?? ""}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="https://... (cover image)"
          />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium mb-2">Display Order</label>
          <input
            type="number"
            name="display_order"
            defaultValue={resource?.display_order ?? 0}
            className="w-full bg-surface border border-border rounded-xl px-4 py-3 text-foreground focus:outline-none focus:border-primary transition-colors"
            placeholder="0"
          />
        </div>
        <div className="flex items-end pb-3">
          <div className="flex items-center gap-3">
            <input
              type="checkbox"
              name="published"
              id="published"
              defaultChecked={resource?.published ?? false}
              className="w-4 h-4 rounded border-border accent-primary"
            />
            <label htmlFor="published" className="text-sm font-medium">
              Published
            </label>
          </div>
        </div>
      </div>

      <button
        type="submit"
        disabled={pending}
        className="bg-primary text-white px-8 py-3 rounded-xl font-semibold hover:bg-primary-dark transition-colors disabled:opacity-60"
      >
        {pending
          ? "Saving..."
          : resource
            ? "Update Resource"
            : "Create Resource"}
      </button>
    </form>
  );
}
