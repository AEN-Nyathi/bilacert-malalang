
export interface PricingPlan {
  title: string;
  description: string;
  features: string[];
  price: string;
  popular: boolean;
}

export interface ProcessStep {
  step: string;
  title: string;
  description: string;
}

export interface SuccessStory {
  scenario: string;
  challenge: string;
  solution: string;
  result: string;
}

// Database Models
export interface BaseSubmission {
  id?: string;
  name: string;
  email: string;
  phone: string;
  timestamp: Date | { seconds: number; nanoseconds: number };
  status?: 'new' | 'in-progress' | 'completed' | 'archived';
  notes?: string;
}

export interface ClassEcsEcnsSubmission extends BaseSubmission {
  company: string;
  licenseType: string;
  message: string;
}

export interface IcasaSubmission extends BaseSubmission {
  company: string;
  productName: string;
  productDescription: string;
  approvalType: string;
  message: string;
}

export interface LicenseExemptionSubmission extends BaseSubmission {
  company: string;
  deviceDescription: string;
  message: string;
}

export interface NrcsLoaSubmission extends BaseSubmission {
  company: string;
  productName: string;
  productDescription: string;
  message: string;
}

export interface RadioDealerSubmission extends BaseSubmission {
  company: string;
  message: string;
}

export interface SkiBoatSubmission extends BaseSubmission {
  boatName: string;
  boatRegistration: string;
  message: string;
}

export interface ContactSubmission extends BaseSubmission {
  service: string;
  message: string;
}

export type SubmissionType = 
  | ClassEcsEcnsSubmission
  | IcasaSubmission
  | LicenseExemptionSubmission
  | NrcsLoaSubmission
  | RadioDealerSubmission
  | SkiBoatSubmission
  | ContactSubmission;

export interface Submission {
  id?: string;
  formType: string;
  status: 'pending' | 'in-progress' | 'completed' | 'rejected' | 'archived';
  serviceId?: string;
  serviceName?: string;
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  industry?: string;
  details?: any; // jsonb
  internalNotes?: string;
  assignedTo?: string;
  createdAt: string; // timestamp
  updatedAt: string; // timestamp
  completedAt?: string; // timestamp
}

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  shortDescription?: string;
  slug: string;
  icon?: string;
  href: string;
  category: string;
  orderIndex?: number;
  content?: string;
  features?: string[];
  requirements?: string[];
  includes?: string[];
  published: boolean;
  featured: boolean;
  createdAt: string;
  processingTime?: string;
  pricing?: number;
  image?: string;
  thumbnail?: string;
  seoTitle?: string;
  seoDescription?: string;
  seoKeywords?: string;
  pricingPlans?: PricingPlan[];
  processSteps?: ProcessStep[];
  successStory?: SuccessStory;
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  slug: string;
  excerpt?: string;
  content?: string;
  category?: string;
  published: boolean;
  createdAt: string;
  image?: string;
  author_name?: string;
  readTime?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  postUrl: string;
  createdAt: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  phone?: string;
  company?: string;
  message?: string;
}

// User/Auth Types
export interface User {
  id: string;
  authId: string;
  email: string;
  role: 'admin' | 'editor' | 'viewer';
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// Form Types
export interface FormSubmissionPayload {
  formType: string;
  serviceId?: string;
  fullName: string;
  email: string;
  phone?: string;
  message: string;
  [key: string]: any;
}

export interface FormSubmissionResponse {
  id: string;
  success: boolean;
  message: string;
  timestamp: string;
}

// Hook Return Types
export interface UseFormSubmissionState {
  isLoading: boolean;
  error: string | null;
  isSuccess: boolean;
}

export interface UseRealtimeSubmissionsState {
  submissions: Submission[];
  loading: boolean;
  error: string | null;
}
