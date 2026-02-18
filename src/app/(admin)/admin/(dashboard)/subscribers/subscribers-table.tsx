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

  return (
    <div className="overflow-x-auto">
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
          {subscribers.length === 0 && (
            <tr>
              <td colSpan={3} className="py-12 text-center text-muted">
                No subscribers yet.
              </td>
            </tr>
          )}
        </tbody>
      </table>
      <p className="text-sm text-muted mt-4">
        Total: {subscribers.length} subscriber
        {subscribers.length !== 1 ? "s" : ""}
      </p>
    </div>
  );
}
