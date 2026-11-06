import { apiRequest } from "./client";
import type { ApiResult, BookingSubmission } from "@/types/api";

/**
 * Future stall-booking submission helper.
 * Currently unused — website CTAs open Google Forms instead.
 * Do not invent endpoints; wire path when backend exists.
 */
export async function submitBooking(payload: BookingSubmission): Promise<ApiResult<{ id: string }>> {
  return apiRequest<{ id: string }>("/bookings", {
    method: "POST",
    body: payload,
  });
}
