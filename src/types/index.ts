
// Generic/Helper Types
export type Json = string | number | boolean | null | { [key: string]: Json } | Json[];

// Database-aligned Models

// From 'services' table
export interface PricingPlan {
  name: string;
  price: string;
  features: string[];
  description?: string;
}

export interface ProcessStep {
  step: number;
  title: string;
  description: string;
}

export interface SuccessStory {
  title: string;
  content: string;
  image?: string;
}

export interface Service {
  id: string; // uuid
  title: string; // text
  slug: string; // text
  href: string; // text
  category?: string; // text
  description?: string; // text
  short_description?: string; // text
  icon?: string; // text
  order_index?: number; // integer
  content?: string; // text
  features?: string[]; // ARRAY
  requirements?: string[]; // ARRAY
  includes?: string[]; // ARRAY
  published: boolean;
  featured: boolean;
  created_at: string; // timestamp with time zone
  updated_at?: string; // timestamp with time zone
  processing_time?: string; // text
  pricing?: number; // numeric
  image?: string; // text
  thumbnail?: string; // text
  seo_title?: string; // text
  seo_description?: string; // text
  seo_keywords?: string; // text
  pricing_plans?: Json; // jsonb
  process_steps?: Json; // jsonb
  success_story?: Json; // jsonb
}

// From 'blog_posts' table
export interface BlogPost {
  id: string; // character varying
  title: string; // character varying
  slug: string; // character varying
  excerpt?: string; // text
  content: string; // text
  category?: string; // character varying
  tags?: string; // character varying
  read_time?: string; // character varying
  seo_title?: string; // character varying
  seo_description?: string; // character varying
  seo_keywords?: string; // character varying
  featured_image?: string; // character varying
  thumbnail?: string; // character varying
  published: boolean;
  published_at?: string; // timestamp without time zone
  featured: boolean;
  author_id?: string; // uuid
  author_name?: string; // character varying
  views_count: number;
  created_at: string; // timestamp without time zone
  updated_at: string; // timestamp without time zone
}

// From 'form_submissions' table
export const FORM_TYPES = [
  'service-inquiry',
  'contact',
  'class-ecs-ecns',
  'icasa-type-approvals',
  'license-exemptions',
  'nrcs-loa',
  'radio-dealer',
  'ski-boat-vhf',
] as const;
export type FormType = (typeof FORM_TYPES)[number];

export const SUBMISSION_STATUSES = [
  'pending',
  'in-progress',
  'completed',
  'rejected',
  'archived',
] as const;
export type SubmissionStatus = (typeof SUBMISSION_STATUSES)[number];

export interface FormSubmission {
  id: string; // uuid
  form_type: FormType;
  status: SubmissionStatus;
  service_id?: string; // uuid
  service_name?: string; // character varying
  full_name: string; // character varying
  email: string; // character varying
  phone?: string; // character varying
  company?: string; // character varying
  industry?: string; // character varying
  details?: Json; // jsonb
  internal_notes?: string; // text
  assigned_to?: string; // uuid
  created_at: string; // timestamp without time zone
  updated_at: string; // timestamp without time zone
  completed_at?: string; // timestamp without time zone
}

// From 'contacts' table
export interface Contact {
  id: string; // uuid
  email: string; // text
  name?: string; // text
  phone?: string; // text
  service?: string; // text
  message?: string; // text
  submitted_at: string; // timestamp with time zone
}

// From 'users' table
export const USER_ROLES = ['admin', 'editor', 'user'] as const;
export type UserRole = (typeof USER_ROLES)[number];

export interface User {
  id: string; // uuid
  email: string; // character varying
  first_name?: string; // character varying
  last_name?: string; // character varying
  role: UserRole;
  phone?: string; // character varying
  company?: string; // character varying
  profile_image?: string; // character varying
  bio?: string; // text
  is_active: boolean;
  created_at: string; // timestamp without time zone
  updated_at: string; // timestamp without time zone
  created_by?: string; // uuid
  updated_by?: string; // uuid
}

// From 'testimonials' table
export interface Testimonial {
  id: string; // uuid
  post_url: string; // text
  created_at: string; // timestamp with time zone
}

// Types for client-side components and hooks

export interface FormSubmissionPayload {
  formType: FormType | string;
  serviceId?: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  details?: any;
  message?: string; // Kept for contact form compatibility
}

export interface FormSubmissionResponse {
  success: boolean;
  message: string;
  submissionId?: string;
  error?: string;
}
