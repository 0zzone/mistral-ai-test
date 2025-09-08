import {ApiClientOptions} from "@/lib/types";

export class ApiClient {
  private baseURL: string;
  private defaultHeaders: Record<string, string>;

  constructor(options: ApiClientOptions = {}) {
    this.baseURL = process.env.NEXT_PUBLIC_API_URL || "http://localhost:3000/api";
    this.defaultHeaders = {
      "Content-Type": "application/json",
      ...options.headers,
    };
  }

  private async request<T>(
    endpoint: string,
    options: RequestInit = {}
  ): Promise<T> {
    const url = `${this.baseURL}${endpoint}`;

    const response = await fetch(url, {
      ...options,
      headers: {
        ...this.defaultHeaders,
        ...(options.headers || {}),
      },
    });

    if (!response.ok) {
      const errorText = await response.text();
      throw new Error(
        `Request failed: ${response.status} ${response.statusText} - ${errorText}`
      );
    }

    return (await response.json()) as T;
  }

  async get<T>(endpoint: string, params?: Record<string, string>): Promise<T> {
    let url = endpoint;

    if (params) {
      const query = new URLSearchParams(params).toString();
      url += `?${query}`;
    }

    return this.request<T>(url, { method: "GET" });
  }

  async post<T, B = unknown>(endpoint: string, body: B): Promise<T> {
    return this.request<T>(endpoint, {
      method: "POST",
      body: JSON.stringify(body),
    });
  }
}

// Export a unique instance
export const apiClient = new ApiClient();
