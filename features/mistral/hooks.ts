import { useMutation } from "@tanstack/react-query";
import {discuss} from "./services";
import { MistralAPIResponse, APIResponse, FinalResponse } from "@/lib/types";

export const useDiscuss = () => {
    return useMutation({
        mutationFn: async (data: { message: string }): Promise<FinalResponse | null> => {
            const response = await discuss(data);
            if (response.data?.choices?.[0]?.message?.content) {
                const responseTXT = response.data.choices[0].message.content;
                
                if (responseTXT.includes('```json') || responseTXT.includes('```')) {
                    const cleaned = responseTXT
                        .replace(/^```json\s*/, '')
                        .replace(/\s*```$/, '')
                        .trim();
                    
                    try {
                        return JSON.parse(cleaned);
                    } catch (parseError) {
                        console.error("Failed to parse JSON from response:", parseError);
                        return null
                    }
                } else {
                    try {
                        return JSON.parse(responseTXT);
                    } catch {
                        return null;
                    }
                }
            }
            return null;
        }
    });
}