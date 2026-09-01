import { useQuery } from "@tanstack/react-query";
import { getArtworks } from "../api/artwork";
import ArtworkCard from "../components/artwork/ArtworkCard";

const Home = () => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ["artworks"],
        queryFn: getArtworks,
    });

    if (isLoading) {
        return <p>Loading artworks...</p>;
    }

    if (isError) {
        return <p>Failed to load artworks.</p>;
    }

    const artworks = data?.data?.artworks || [];

    return (
        <main className="home-page">
            <h1>Discover Art</h1>

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
};

export default Home;