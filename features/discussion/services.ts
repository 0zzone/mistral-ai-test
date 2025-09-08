import { apiClient } from "@/lib/front/apiClient"

export const discuss = (data: { postId: string; content: string }) => {
    return apiClient.post("/discuss", data);
}