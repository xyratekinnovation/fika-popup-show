import { API_CONFIG, isApiConfigured } from "@/config/api-config";
import type { ApiError, ApiResult } from "@/types/api";

export class ApiNotConfiguredError extends Error {
  constructor() {
    super("API base URL is not configured. Set VITE_API_BASE_URL when a backend is available.");
    this.name = "ApiNotConfiguredError";
  }
}

type RequestOptions = Omit<RequestInit, "body"> & {
  body?: unknown;
  timeoutMs?: number;
};

/**
 * Thin fetch wrapper for future API calls.
 * Throws if no base URL is configured — do not call from UI until a backend exists.
 */
export async function apiRequest<T>(path: string, options: RequestOptions = {}): Promise<ApiResult<T>> {
  if (!isApiConfigured()) {
    return {
      status: "error",
      error: { message: new ApiNotConfiguredError().message, code: "API_NOT_CONFIGURED" },
    };
  }

  const { body, timeoutMs = API_CONFIG.timeoutMs, headers, ...rest } = options;
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);

  try {
    const response = await fetch(`${API_CONFIG.baseUrl.replace(/\/$/, "")}/${path.replace(/^\//, "")}`, {
      ...rest,
      signal: controller.signal,
      headers: {
        ...API_CONFIG.headers,
        ...headers,
      },
      body: body === undefined ? undefined : JSON.stringify(body),
    });

    if (!response.ok) {
      const error: ApiError = {
        message: `Request failed with status ${response.status}`,
        status: response.status,
      };
      return { status: "error", error };
    }

    const data = (await response.json()) as T;
    return { status: "success", data };
  } catch (err) {
    const message = err instanceof Error ? err.message : "Unknown request error";
    return { status: "error", error: { message } };
  } finally {
    clearTimeout(timer);
  }
}
