import { apiClient } from "@/lib/front/apiClient";

export const getMe = async () => {
    const response = await apiClient.get("/me") as { data: any };
    return response;
}