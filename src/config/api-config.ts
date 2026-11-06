/**
 * API configuration for future backend integration.
 * No live endpoints are defined — do not invent API routes.
 */
export const API_CONFIG = {
  /** Base URL from env; empty until a backend is provided */
  baseUrl: (import.meta.env.VITE_API_BASE_URL as string | undefined) ?? "",
  timeoutMs: 15_000,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
  },
} as const;

export function isApiConfigured(): boolean {
  return Boolean(API_CONFIG.baseUrl?.trim());
}
