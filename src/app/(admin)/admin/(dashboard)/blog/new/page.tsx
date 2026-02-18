import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import BlogPostForm from "@/components/admin/BlogPostForm";

export default function NewBlogPostPage() {
  return (
    <>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={14} /> Back to Posts
      </Link>
      <h1 className="text-2xl font-bold mb-8">New Blog Post</h1>
      <BlogPostForm />
    </>
  );
}
