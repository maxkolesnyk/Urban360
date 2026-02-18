import { createClient } from "@/lib/supabase/server";
import type { NewsletterSubscriber } from "@/lib/types/database";
import SubscribersTable from "./subscribers-table";

export default async function SubscribersPage() {
  const supabase = await createClient();
  const { data: subscribers } = await supabase
    .from("newsletter_subscribers")
    .select("*")
    .order("subscribed_at", { ascending: false })
    .returns<NewsletterSubscriber[]>();

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Newsletter Subscribers</h1>
      <SubscribersTable subscribers={subscribers ?? []} />
    </>
  );
}
