export interface ContactSubmission {
  id: string;
  full_name: string;
  phone: string;
  email: string;
  service_required: string;
  property_address: string | null;
  preferred_date: string | null;
  how_found_us: string | null;
  message: string | null;
  is_read: boolean;
  created_at: string;
}

export interface BlogPost {
  id: string;
  slug: string;
  title: string;
  excerpt: string;
  content: string;
  category: string;
  read_time: string;
  featured_image_url: string | null;
  published: boolean;
  created_at: string;
  updated_at: string;
}

export interface NewsletterSubscriber {
  id: string;
  email: string;
  subscribed_at: string;
}

export interface Resource {
  id: string;
  title: string;
  description: string;
  category: "report" | "guide";
  resource_type: string;
  page_count: string | null;
  file_url: string | null;
  thumbnail_url: string | null;
  published: boolean;
  display_order: number;
  created_at: string;
  updated_at: string;
}

export interface ActionResult {
  success: boolean;
  message: string;
}
