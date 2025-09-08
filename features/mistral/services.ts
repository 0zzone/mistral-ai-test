import { apiClient } from "@/lib/front/apiClient"
import {APIResponse, MistralAPIResponse} from "@/lib/types"

export const discuss = (data: { message: string }): Promise<APIResponse<MistralAPIResponse>> => {
    return apiClient.post("/mistral", data);
}