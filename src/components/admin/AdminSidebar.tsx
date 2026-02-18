"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  FileText,
  BookOpen,
  Users,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { logout } from "@/lib/actions/auth";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/admin", label: "Dashboard", icon: LayoutDashboard },
  { href: "/admin/contacts", label: "Contacts", icon: MessageSquare },
  { href: "/admin/blog", label: "Blog Posts", icon: FileText },
  { href: "/admin/resources", label: "Resources", icon: BookOpen },
  { href: "/admin/subscribers", label: "Subscribers", icon: Users },
];

export default function AdminSidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const navContent = (
    <>
      <div className="p-6 border-b border-border">
        <Link
          href="/admin"
          className="flex items-center gap-3"
          onClick={() => setOpen(false)}
        >
          <div className="w-9 h-9 bg-black text-white rounded-lg text-sm font-bold flex items-center justify-center">
            U3
          </div>
          <div>
            <p className="text-sm font-semibold">Urban 360</p>
            <p className="text-xs text-muted">Admin Panel</p>
          </div>
        </Link>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {NAV_ITEMS.map((item) => {
          const isActive =
            item.href === "/admin"
              ? pathname === "/admin"
              : pathname.startsWith(item.href);
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors",
                isActive
                  ? "bg-black/5 text-foreground"
                  : "text-muted hover:text-foreground hover:bg-surface-light"
              )}
            >
              <item.icon size={18} />
              {item.label}
            </Link>
          );
        })}
      </nav>

      <div className="p-4 border-t border-border">
        <form action={logout}>
          <button
            type="submit"
            className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium text-muted hover:text-foreground hover:bg-surface-light transition-colors w-full"
          >
            <LogOut size={18} />
            Sign Out
          </button>
        </form>
      </div>
    </>
  );

  return (
    <>
      {/* Mobile top bar */}
      <div className="lg:hidden fixed top-0 left-0 right-0 z-40 bg-surface border-b border-border flex items-center justify-between px-4 h-14">
        <Link href="/admin" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-black text-white rounded-lg text-xs font-bold flex items-center justify-center">
            U3
          </div>
          <span className="text-sm font-semibold">Admin</span>
        </Link>
        <button
          onClick={() => setOpen(!open)}
          className="p-2 rounded-lg hover:bg-surface-light text-muted hover:text-foreground transition-colors"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile overlay */}
      {open && (
        <div
          className="lg:hidden fixed inset-0 z-40 bg-black/50"
          onClick={() => setOpen(false)}
        />
      )}

      {/* Mobile slide-out drawer */}
      <aside
        className={cn(
          "lg:hidden fixed top-0 left-0 z-50 w-64 bg-surface min-h-screen flex flex-col transition-transform duration-200",
          open ? "translate-x-0" : "-translate-x-full"
        )}
      >
        {navContent}
      </aside>

      {/* Desktop sidebar */}
      <aside className="hidden lg:flex w-64 bg-surface border-r border-border min-h-screen flex-col shrink-0">
        {navContent}
      </aside>
    </>
  );
}
