import { useQuery } from "@tanstack/react-query";
import { getArtworkById } from "../api/artwork";

export const useArtwork = (id) => {
    return useQuery({
        queryKey: ["artwork", id],
        queryFn: async () => {
            const response = await getArtworkById(id);
            return response.data;
        },
        enabled: !!id,
    });
};