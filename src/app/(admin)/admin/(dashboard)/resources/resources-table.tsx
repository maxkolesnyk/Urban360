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

  return (
    <div className="overflow-x-auto">
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
              <td className="py-3 text-muted capitalize">{resource.category}</td>
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
          {resources.length === 0 && (
            <tr>
              <td colSpan={6} className="py-12 text-center text-muted">
                No resources yet. Create your first resource!
              </td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
