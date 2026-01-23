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

export type Submission =
  | ClassEcsEcnsSubmission
  | IcasaSubmission
  | LicenseExemptionSubmission
  | NrcsLoaSubmission
  | RadioDealerSubmission
  | SkiBoatSubmission
  | ContactSubmission;

// Service Types
export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  href: string;
  features: string[];
  pricing?: {
    amount: number;
    currency: string;
  };
}

// Blog Types
export interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: Date | string;
  readTime: number;
  category: string;
  featured: boolean;
  image?: string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  postUrl: string;
  content?: string;
  author?: string;
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
