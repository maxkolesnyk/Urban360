"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { ActionResult } from "@/lib/types/database";

export async function createBlogPost(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const read_time = formData.get("read_time") as string;
  const featured_image_url =
    (formData.get("featured_image_url") as string) || null;
  const published = formData.get("published") === "on";

  if (!title || !slug || !excerpt || !content || !category || !read_time) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("blog_posts").insert({
    title,
    slug,
    excerpt,
    content,
    category,
    read_time,
    featured_image_url,
    published,
  });

  if (error) {
    if (error.code === "23505") {
      return { success: false, message: "A post with this slug already exists." };
    }
    return { success: false, message: "Failed to create post. Please try again." };
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");

  return { success: true, message: "Post created successfully." };
}

export async function updateBlogPost(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const slug = formData.get("slug") as string;
  const excerpt = formData.get("excerpt") as string;
  const content = formData.get("content") as string;
  const category = formData.get("category") as string;
  const read_time = formData.get("read_time") as string;
  const featured_image_url =
    (formData.get("featured_image_url") as string) || null;
  const published = formData.get("published") === "on";

  if (
    !id ||
    !title ||
    !slug ||
    !excerpt ||
    !content ||
    !category ||
    !read_time
  ) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("blog_posts")
    .update({
      title,
      slug,
      excerpt,
      content,
      category,
      read_time,
      featured_image_url,
      published,
    })
    .eq("id", id);

  if (error) {
    if (error.code === "23505") {
      return { success: false, message: "A post with this slug already exists." };
    }
    return { success: false, message: "Failed to update post. Please try again." };
  }

  revalidatePath("/blog");
  revalidatePath(`/blog/${slug}`);
  revalidatePath("/admin/blog");

  return { success: true, message: "Post updated successfully." };
}

export async function deleteBlogPost(id: string): Promise<ActionResult> {
  const supabase = await createClient();

  const { error } = await supabase.from("blog_posts").delete().eq("id", id);

  if (error) {
    return { success: false, message: "Failed to delete post." };
  }

  revalidatePath("/blog");
  revalidatePath("/admin/blog");

  return { success: true, message: "Post deleted." };
}
