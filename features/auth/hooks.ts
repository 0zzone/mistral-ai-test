import { useQuery } from "@tanstack/react-query";
import { getMe } from "./services";
import { User } from "@/lib/types";

export const useMe = () => {
    return useQuery({
        queryKey: ["profile"],
        queryFn: async () : Promise<User> => {
            const response = await getMe();
            return response.data || null;
        },
    });
};