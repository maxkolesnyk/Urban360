import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { createClient } from "@/lib/supabase/server";
import type { BlogPost } from "@/lib/types/database";
import BlogPostForm from "@/components/admin/BlogPostForm";

interface PageProps {
  params: Promise<{ id: string }>;
}

export default async function EditBlogPostPage({ params }: PageProps) {
  const { id } = await params;
  const supabase = await createClient();
  const { data: post } = await supabase
    .from("blog_posts")
    .select("*")
    .eq("id", id)
    .single<BlogPost>();

  if (!post) notFound();

  return (
    <>
      <Link
        href="/admin/blog"
        className="inline-flex items-center gap-1 text-sm text-muted hover:text-primary transition-colors mb-6"
      >
        <ArrowLeft size={14} /> Back to Posts
      </Link>
      <h1 className="text-2xl font-bold mb-8">Edit: {post.title}</h1>
      <BlogPostForm post={post} />
    </>
  );
}
