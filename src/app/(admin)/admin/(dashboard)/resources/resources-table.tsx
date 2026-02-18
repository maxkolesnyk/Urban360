"use client";

import { useState } from "react";
import Link from "next/link";
import { Edit, Trash2 } from "lucide-react";
import { deleteResource } from "@/lib/actions/resources";
import type { Resource } from "@/lib/types/database";

export default function ResourcesTable({
  resources: initialResources,
}: {
  resources: Resource[];
}) {
  const [resources, setResources] = useState(initialResources);

  async function handleDelete(id: string) {
    if (!confirm("Delete this resource?")) return;
    const result = await deleteResource(id);
    if (result.success) {
      setResources((prev) => prev.filter((r) => r.id !== id));
    }
  }

  if (resources.length === 0) {
    return (
      <p className="text-center text-muted py-12">
        No resources yet. Create your first resource!
      </p>
    );
  }

  return (
    <>
      {/* Mobile card list */}
      <div className="lg:hidden space-y-3">
        {resources.map((resource) => (
          <div
            key={resource.id}
            className="bg-surface border border-border rounded-xl p-4"
          >
            <div className="flex items-start justify-between gap-3 mb-2">
              <p className="font-medium leading-snug">{resource.title}</p>
              <span
                className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                  resource.published
                    ? "bg-green-500/10 text-green-400"
                    : "bg-surface-light text-muted"
                }`}
              >
                {resource.published ? "Published" : "Draft"}
              </span>
            </div>
            <div className="flex items-center gap-2 text-xs text-muted mb-3">
              <span className="capitalize">{resource.category}</span>
              <span>&middot;</span>
              <span>{resource.resource_type}</span>
              <span>&middot;</span>
              <span>Order: {resource.display_order}</span>
            </div>
            <div className="flex items-center gap-2">
              <Link
                href={`/admin/resources/${resource.id}/edit`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light text-sm text-muted hover:text-foreground transition-colors"
              >
                <Edit size={14} /> Edit
              </Link>
              <button
                onClick={() => handleDelete(resource.id)}
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
              <th className="pb-3 font-medium text-muted">Type</th>
              <th className="pb-3 font-medium text-muted">Order</th>
              <th className="pb-3 font-medium text-muted">Status</th>
              <th className="pb-3 font-medium text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {resources.map((resource) => (
              <tr key={resource.id} className="border-b border-border/50">
                <td className="py-3 font-medium">{resource.title}</td>
                <td className="py-3 text-muted capitalize">
                  {resource.category}
                </td>
                <td className="py-3 text-muted">{resource.resource_type}</td>
                <td className="py-3 text-muted">{resource.display_order}</td>
                <td className="py-3">
                  <span
                    className={`text-xs px-2 py-0.5 rounded-full ${
                      resource.published
                        ? "bg-green-500/10 text-green-400"
                        : "bg-surface-light text-muted"
                    }`}
                  >
                    {resource.published ? "Published" : "Draft"}
                  </span>
                </td>
                <td className="py-3">
                  <div className="flex items-center gap-2">
                    <Link
                      href={`/admin/resources/${resource.id}/edit`}
                      className="p-1.5 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                    >
                      <Edit size={16} />
                    </Link>
                    <button
                      onClick={() => handleDelete(resource.id)}
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
