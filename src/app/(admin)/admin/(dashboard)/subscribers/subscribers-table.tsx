"use client";

import { useState } from "react";
import { Trash2 } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { NewsletterSubscriber } from "@/lib/types/database";

export default function SubscribersTable({
  subscribers: initialSubscribers,
}: {
  subscribers: NewsletterSubscriber[];
}) {
  const [subscribers, setSubscribers] = useState(initialSubscribers);

  async function handleDelete(id: string) {
    if (!confirm("Remove this subscriber?")) return;
    const supabase = createClient();
    await supabase.from("newsletter_subscribers").delete().eq("id", id);
    setSubscribers((prev) => prev.filter((s) => s.id !== id));
  }

  if (subscribers.length === 0) {
    return (
      <p className="text-center text-muted py-12">No subscribers yet.</p>
    );
  }

  return (
    <>
      {/* Mobile card list */}
      <div className="lg:hidden space-y-3">
        {subscribers.map((sub) => (
          <div
            key={sub.id}
            className="bg-surface border border-border rounded-xl p-4 flex items-center justify-between gap-3"
          >
            <div className="min-w-0">
              <p className="font-medium text-sm truncate">{sub.email}</p>
              <p className="text-xs text-muted">
                {new Date(sub.subscribed_at).toLocaleDateString("en-AU")}
              </p>
            </div>
            <button
              onClick={() => handleDelete(sub.id)}
              className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors shrink-0"
            >
              <Trash2 size={14} />
            </button>
          </div>
        ))}
        <p className="text-sm text-muted mt-4">
          Total: {subscribers.length} subscriber
          {subscribers.length !== 1 ? "s" : ""}
        </p>
      </div>

      {/* Desktop table */}
      <div className="hidden lg:block overflow-x-auto">
        <table className="w-full text-sm">
          <thead>
            <tr className="border-b border-border text-left">
              <th className="pb-3 font-medium text-muted">Email</th>
              <th className="pb-3 font-medium text-muted">Subscribed</th>
              <th className="pb-3 font-medium text-muted">Actions</th>
            </tr>
          </thead>
          <tbody>
            {subscribers.map((sub) => (
              <tr key={sub.id} className="border-b border-border/50">
                <td className="py-3 font-medium">{sub.email}</td>
                <td className="py-3 text-muted">
                  {new Date(sub.subscribed_at).toLocaleDateString("en-AU")}
                </td>
                <td className="py-3">
                  <button
                    onClick={() => handleDelete(sub.id)}
                    className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <p className="text-sm text-muted mt-4">
          Total: {subscribers.length} subscriber
          {subscribers.length !== 1 ? "s" : ""}
        </p>
      </div>
    </>
  );
}
