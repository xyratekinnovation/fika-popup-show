import { apiRequest } from "./client";
import type { ApiResult, ContactSubmission, PartnerSubmission } from "@/types/api";

/**
 * Future contact enquiry helper.
 * Currently unused — contact section uses mailto / social links.
 */
export async function submitContact(payload: ContactSubmission): Promise<ApiResult<{ id: string }>> {
  return apiRequest<{ id: string }>("/contact", {
    method: "POST",
    body: payload,
  });
}

/**
 * Future partnership application helper.
 * Currently unused — partnership CTAs open Google Forms instead.
 */
export async function submitPartner(payload: PartnerSubmission): Promise<ApiResult<{ id: string }>> {
  return apiRequest<{ id: string }>("/partnerships", {
    method: "POST",
    body: payload,
  });
}
