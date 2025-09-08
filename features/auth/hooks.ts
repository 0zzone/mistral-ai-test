import { useQuery } from "@tanstack/react-query";
import { getMe } from "./services";

export const useMe = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () => {
            const response = await getMe();
            return response.data || null;
        },
    });
};