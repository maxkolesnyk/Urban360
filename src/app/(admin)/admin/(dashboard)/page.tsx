import { MessageSquare, FileText, BookOpen, Users } from "lucide-react";
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

export default async function AdminDashboard() {
  const supabase = await createClient();

  const [contactsRes, postsRes, resourcesRes, subscribersRes] = await Promise.all([
    supabase
      .from("contact_submissions")
      .select("id", { count: "exact", head: true }),
    supabase.from("blog_posts").select("id", { count: "exact", head: true }),
    supabase.from("resources").select("id", { count: "exact", head: true }),
    supabase
      .from("newsletter_subscribers")
      .select("id", { count: "exact", head: true }),
  ]);

  const unreadRes = await supabase
    .from("contact_submissions")
    .select("id", { count: "exact", head: true })
    .eq("is_read", false);

  const stats = [
    {
      label: "Contact Submissions",
      value: contactsRes.count ?? 0,
      sub: `${unreadRes.count ?? 0} unread`,
      icon: MessageSquare,
      href: "/admin/contacts",
    },
    {
      label: "Blog Posts",
      value: postsRes.count ?? 0,
      icon: FileText,
      href: "/admin/blog",
    },
    {
      label: "Resources",
      value: resourcesRes.count ?? 0,
      icon: BookOpen,
      href: "/admin/resources",
    },
    {
      label: "Newsletter Subscribers",
      value: subscribersRes.count ?? 0,
      icon: Users,
      href: "/admin/subscribers",
    },
  ];

  return (
    <>
      <h1 className="text-2xl font-bold mb-8">Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat) => (
          <Link
            key={stat.label}
            href={stat.href}
            className="bg-surface border border-border rounded-xl p-6 hover:border-primary/30 transition-colors"
          >
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center text-primary">
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-2xl font-bold">{stat.value}</p>
                <p className="text-sm text-muted">{stat.label}</p>
                {"sub" in stat && stat.sub && (
                  <p className="text-xs text-accent mt-0.5">{stat.sub}</p>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}
