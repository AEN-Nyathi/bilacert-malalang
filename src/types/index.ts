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
  shortDescription?: string;
  icon: string;
  href: string;
  features: string[];
  requirements?: string[];
  pricing?: {
    amount: number;
    currency: string;
  };
  processingTime?: string;
  category?: string;
  content?: string;
  image?: string;
  createdAt?: Date | string;
  updatedAt?: Date | string;
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
  createdAt?: Date | string;
  updatedAt?: Date | string;
}

// Testimonial Types
export interface Testimonial {
  id: string;
  postUrl: string;
  content?: string;
  author?: string;
  company?: string;
  rating?: number;
  createdAt?: Date | string;
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

// Admin Dashboard Types
export interface DashboardStats {
  totalSubmissions: number;
  newSubmissions: number;
  inProgressSubmissions: number;
  completedSubmissions: number;
  submissionsByType: Record<string, number>;
  recentSubmissions: Submission[];
}
