/** Shared API / form types for future backend integration. No live endpoints. */

export type AsyncStatus = "idle" | "loading" | "success" | "error";

export interface ApiError {
  message: string;
  code?: string;
  status?: number;
}

export interface ApiResult<T> {
  data?: T;
  error?: ApiError;
  status: AsyncStatus;
}

/** Stall booking / exhibitor enquiry payload shape (future) */
export interface BookingSubmission {
  brandName: string;
  contactName: string;
  email: string;
  phone?: string;
  category?: string;
  message?: string;
}

/** Contact / general enquiry payload shape (future) */
export interface ContactSubmission {
  name: string;
  email: string;
  phone?: string;
  subject?: string;
  message: string;
}

/** Partnership application payload shape (future) */
export interface PartnerSubmission {
  companyName: string;
  contactName: string;
  email: string;
  phone?: string;
  message?: string;
}
