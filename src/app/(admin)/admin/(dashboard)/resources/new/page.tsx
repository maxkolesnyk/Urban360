import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import ResourceForm from "@/components/admin/ResourceForm";

export default function NewResourcePage() {
  return (
    <>
      <Link
        href="/admin/resources"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={14} /> Back to Resources
      </Link>
      <h1 className="text-2xl font-bold mb-8">New Resource</h1>
      <ResourceForm />
    </>
  );
}
