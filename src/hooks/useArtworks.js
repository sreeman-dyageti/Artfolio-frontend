import { useQuery } from "@tanstack/react-query";
import { getArtworks } from "../api/artwork";

export const useArtworks = () => {
    return useQuery({
        queryKey: ["artworks"],
        queryFn: async () => {
            const response = await getArtworks();
            return response.data;
        },
    });
};