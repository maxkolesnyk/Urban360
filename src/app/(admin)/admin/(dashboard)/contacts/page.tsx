import { createClient } from "@/lib/supabase/server";
import type { ContactSubmission } from "@/lib/types/database";
import ContactsTable from "./contacts-table";

export default async function ContactsPage() {
  const supabase = await createClient();
  const { data: contacts } = await supabase
    .from("contact_submissions")
    .select("*")
    .order("created_at", { ascending: false })
    .returns<ContactSubmission[]>();

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Contact Submissions</h1>
      <ContactsTable contacts={contacts ?? []} />
    </>
  );
}
