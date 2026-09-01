import { useQuery } from "@tanstack/react-query";
import { getArtworks } from "../api/artwork";
import ArtworkCard from "../components/artwork/ArtworkCard";

function Artworks() {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["artworks"],
        queryFn: () => getArtworks().then((response) => response.data),
    });

    if (isLoading) {
        return <h1>Loading artworks...</h1>;
    }

    if (isError) {
        return <h1>Failed to load artworks.</h1>;
    }

    const artworks = data?.data?.artworks || [];

    return (
        <main className="home-page">
            <h1>Artworks</h1>

            <div className="artwork-grid">
                {artworks.map((artwork) => (
                    <ArtworkCard
                        key={artwork.id}
                        artwork={artwork}
                    />
                ))}
            </div>
        </main>
    );
}

export default Artworks;