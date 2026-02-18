"use server";

import { createClient } from "@/lib/supabase/server";
import type { ActionResult } from "@/lib/types/database";

export async function submitContact(
  _prev: ActionResult,
  formData: FormData
): Promise<ActionResult> {
  const full_name = formData.get("full_name") as string;
  const phone = formData.get("phone") as string;
  const email = formData.get("email") as string;
  const service_required = formData.get("service_required") as string;
  const property_address = (formData.get("property_address") as string) || null;
  const preferred_date = (formData.get("preferred_date") as string) || null;
  const how_found_us = (formData.get("how_found_us") as string) || null;
  const message = (formData.get("message") as string) || null;

  if (!full_name || !phone || !email || !service_required) {
    return { success: false, message: "Please fill in all required fields." };
  }

  const supabase = await createClient();

  const { error } = await supabase.from("contact_submissions").insert({
    full_name,
    phone,
    email,
    service_required,
    property_address,
    preferred_date,
    how_found_us,
    message,
  });

  if (error) {
    return {
      success: false,
      message: "Something went wrong. Please try again or call us directly.",
    };
  }

  return {
    success: true,
    message:
      "Thank you! Your enquiry has been submitted. We'll be in touch within 2 business hours.",
  };
}
