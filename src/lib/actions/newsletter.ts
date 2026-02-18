"use server";

import { createClient } from "@/lib/supabase/server";
import type { ActionResult } from "@/lib/types/database";

export async function subscribeNewsletter(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const email = formData.get("email") as string;

  if (!email) {
    return { success: false, message: "Please enter your email address." };
  }

  const supabase = await createClient();

  const { error } = await supabase
    .from("newsletter_subscribers")
    .insert({ email });

  if (error) {
    if (error.code === "23505") {
      return { success: true, message: "You're already subscribed!" };
    }
    return {
      success: false,
      message: "Something went wrong. Please try again.",
    };
  }

  return {
    success: true,
    message: "You're subscribed! We'll send you the latest insights.",
  };
}
