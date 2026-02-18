"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { ActionResult } from "@/lib/types/database";

export async function createResource(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const resource_type = formData.get("resource_type") as string;
  const page_count = (formData.get("page_count") as string) || null;
  const file_url = (formData.get("file_url") as string) || null;
  const thumbnail_url = (formData.get("thumbnail_url") as string) || null;
  const published = formData.get("published") === "on";
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  if (!title || !description || !category || !resource_type) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("resources").insert({
    title,
    description,
    category,
    resource_type,
    page_count,
    file_url,
    thumbnail_url,
    published,
    display_order,
  });

  if (error) {
    return { success: false, message: "Failed to create resource. " + error.message };
  }

  revalidatePath("/resources");
  revalidatePath("/admin/resources");

  return { success: true, message: "Resource created successfully." };
}

export async function updateResource(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const id = formData.get("id") as string;
  const title = formData.get("title") as string;
  const description = formData.get("description") as string;
  const category = formData.get("category") as string;
  const resource_type = formData.get("resource_type") as string;
  const page_count = (formData.get("page_count") as string) || null;
  const file_url = (formData.get("file_url") as string) || null;
  const thumbnail_url = (formData.get("thumbnail_url") as string) || null;
  const published = formData.get("published") === "on";
  const display_order = parseInt(formData.get("display_order") as string) || 0;

  if (!id || !title || !description || !category || !resource_type) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("resources")
    .update({
      title,
      description,
      category,
      resource_type,
      page_count,
      file_url,
      thumbnail_url,
      published,
      display_order,
    })
    .eq("id", id);

  if (error) {
    return { success: false, message: "Failed to update resource. " + error.message };
  }

  revalidatePath("/resources");
  revalidatePath("/admin/resources");

  return { success: true, message: "Resource updated successfully." };
}

export async function deleteResource(id: string): Promise<ActionResult> {
  const supabase = await createClient();

  const { error } = await supabase.from("resources").delete().eq("id", id);

  if (error) {
    return { success: false, message: "Failed to delete resource." };
  }

  revalidatePath("/resources");
  revalidatePath("/admin/resources");

  return { success: true, message: "Resource deleted." };
}
