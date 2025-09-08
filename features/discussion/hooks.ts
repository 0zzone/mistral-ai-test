import { useMutation } from "@tanstack/react-query";
import {discuss} from "./services";

export const useDiscuss = () => {
    return useMutation({
        mutationFn: async (data: { postId: string; content: string }) => {
            return discuss(data);
        }
    });
}