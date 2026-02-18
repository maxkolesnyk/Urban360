"use client";

import { useState } from "react";
import { Eye, Trash2, Mail, Phone, X } from "lucide-react";
import { createClient } from "@/lib/supabase/client";
import type { ContactSubmission } from "@/lib/types/database";

export default function ContactsTable({
  contacts: initialContacts,
}: {
  contacts: ContactSubmission[];
}) {
  const [contacts, setContacts] = useState(initialContacts);
  const [selected, setSelected] = useState<ContactSubmission | null>(null);

  async function markRead(id: string) {
    const supabase = createClient();
    await supabase
      .from("contact_submissions")
      .update({ is_read: true })
      .eq("id", id);
    setContacts((prev) =>
      prev.map((c) => (c.id === id ? { ...c, is_read: true } : c))
    );
  }

  async function handleDelete(id: string) {
    if (!confirm("Delete this submission?")) return;
    const supabase = createClient();
    await supabase.from("contact_submissions").delete().eq("id", id);
    setContacts((prev) => prev.filter((c) => c.id !== id));
    if (selected?.id === id) setSelected(null);
  }

  return (
    <>
      {/* Mobile card list */}
      <div className="lg:hidden space-y-3">
        {contacts.map((contact) => (
          <div
            key={contact.id}
            className={`bg-surface border border-border rounded-xl p-4 ${
              !contact.is_read ? "border-primary/30 bg-primary/5" : ""
            }`}
          >
            <div className="flex items-start justify-between mb-2">
              <div>
                <p className="font-medium">{contact.full_name}</p>
                <p className="text-xs text-muted">{contact.service_required}</p>
              </div>
              <span
                className={`text-xs px-2 py-0.5 rounded-full shrink-0 ${
                  contact.is_read
                    ? "bg-surface-light text-muted"
                    : "bg-accent/10 text-accent"
                }`}
              >
                {contact.is_read ? "Read" : "New"}
              </span>
            </div>
            <p className="text-xs text-muted mb-3">
              {new Date(contact.created_at).toLocaleDateString("en-AU")}
            </p>
            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  setSelected(contact);
                  if (!contact.is_read) markRead(contact.id);
                }}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light text-sm text-muted hover:text-foreground transition-colors"
              >
                <Eye size={14} /> View
              </button>
              <a
                href={`tel:${contact.phone}`}
                className="flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-surface-light text-sm text-muted hover:text-foreground transition-colors"
              >
                <Phone size={14} /> Call
              </a>
              <button
                onClick={() => handleDelete(contact.id)}
                className="ml-auto p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
              >
                <Trash2 size={14} />
              </button>
            </div>
          </div>
        ))}
        {contacts.length === 0 && (
          <p className="text-center text-muted py-12">No submissions yet.</p>
        )}
      </div>

      {/* Desktop table + side panel */}
      <div className="hidden lg:flex gap-6">
        <div className="flex-1 overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr className="border-b border-border text-left">
                <th className="pb-3 font-medium text-muted">Name</th>
                <th className="pb-3 font-medium text-muted">Service</th>
                <th className="pb-3 font-medium text-muted">Date</th>
                <th className="pb-3 font-medium text-muted">Status</th>
                <th className="pb-3 font-medium text-muted">Actions</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((contact) => (
                <tr
                  key={contact.id}
                  className={`border-b border-border/50 ${
                    !contact.is_read ? "bg-primary/5" : ""
                  }`}
                >
                  <td className="py-3 font-medium">{contact.full_name}</td>
                  <td className="py-3 text-muted">{contact.service_required}</td>
                  <td className="py-3 text-muted">
                    {new Date(contact.created_at).toLocaleDateString("en-AU")}
                  </td>
                  <td className="py-3">
                    <span
                      className={`text-xs px-2 py-0.5 rounded-full ${
                        contact.is_read
                          ? "bg-surface-light text-muted"
                          : "bg-accent/10 text-accent"
                      }`}
                    >
                      {contact.is_read ? "Read" : "New"}
                    </span>
                  </td>
                  <td className="py-3">
                    <div className="flex items-center gap-2">
                      <button
                        onClick={() => {
                          setSelected(contact);
                          if (!contact.is_read) markRead(contact.id);
                        }}
                        className="p-1.5 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
                      >
                        <Eye size={16} />
                      </button>
                      <button
                        onClick={() => handleDelete(contact.id)}
                        className="p-1.5 rounded-lg hover:bg-red-500/10 text-muted hover:text-red-500 transition-colors"
                      >
                        <Trash2 size={16} />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
              {contacts.length === 0 && (
                <tr>
                  <td colSpan={5} className="py-12 text-center text-muted">
                    No submissions yet.
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {selected && (
          <div className="w-80 bg-surface border border-border rounded-xl p-6 shrink-0">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">{selected.full_name}</h2>
              <button
                onClick={() => setSelected(null)}
                className="p-1 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
              >
                <X size={16} />
              </button>
            </div>
            <DetailContent selected={selected} />
          </div>
        )}
      </div>

      {/* Mobile detail overlay */}
      {selected && (
        <div className="lg:hidden fixed inset-0 z-50 flex items-end">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={() => setSelected(null)}
          />
          <div className="relative w-full bg-surface border-t border-border rounded-t-2xl p-6 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-4">
              <h2 className="font-semibold">{selected.full_name}</h2>
              <button
                onClick={() => setSelected(null)}
                className="p-1.5 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
              >
                <X size={18} />
              </button>
            </div>
            <DetailContent selected={selected} />
          </div>
        </div>
      )}
    </>
  );
}

function DetailContent({ selected }: { selected: ContactSubmission }) {
  return (
    <div className="space-y-3 text-sm">
      <div className="flex items-center gap-2 text-muted">
        <Phone size={14} />
        <a
          href={`tel:${selected.phone}`}
          className="text-primary hover:underline"
        >
          {selected.phone}
        </a>
      </div>
      <div className="flex items-center gap-2 text-muted">
        <Mail size={14} />
        <a
          href={`mailto:${selected.email}`}
          className="text-primary hover:underline"
        >
          {selected.email}
        </a>
      </div>
      <div>
        <p className="text-muted mb-1">Service</p>
        <p>{selected.service_required}</p>
      </div>
      {selected.property_address && (
        <div>
          <p className="text-muted mb-1">Property Address</p>
          <p>{selected.property_address}</p>
        </div>
      )}
      {selected.preferred_date && (
        <div>
          <p className="text-muted mb-1">Preferred Date</p>
          <p>{selected.preferred_date}</p>
        </div>
      )}
      {selected.how_found_us && (
        <div>
          <p className="text-muted mb-1">How Found Us</p>
          <p>{selected.how_found_us}</p>
        </div>
      )}
      {selected.message && (
        <div>
          <p className="text-muted mb-1">Message</p>
          <p className="whitespace-pre-wrap">{selected.message}</p>
        </div>
      )}
      <div>
        <p className="text-muted mb-1">Submitted</p>
        <p>{new Date(selected.created_at).toLocaleString("en-AU")}</p>
      </div>
    </div>
  );
}
