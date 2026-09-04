import ArtworkCard from "../components/artwork/ArtworkCard";
import { useArtworks } from "../hooks/useArtworks";

const Artworks = () => {
    const { data, isLoading, isError } = useArtworks();

    if (isLoading) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-10">
                <p className="text-gray-500">Loading artworks...</p>
            </div>
        );
    }

    if (isError) {
        return (
            <div className="mx-auto max-w-7xl px-6 py-10">
                <p className="text-red-500">
                    Failed to load artworks.
                </p>
            </div>
        );
    }

    const artworks = data?.data?.artworks ?? [];

    return (
        <section className="mx-auto max-w-7xl px-6 py-10">
            <div className="mb-8">
                <h1 className="text-3xl font-bold tracking-tight">
                    Explore
                </h1>

                <p className="mt-2 text-gray-500">
                    Discover artwork from the Artfolio community.
                </p>
            </div>

            <div className="columns-1 gap-5 sm:columns-2 lg:columns-3 xl:columns-4">
                {artworks.map((artwork) => (
                    <div
                        key={artwork.id}
                        className="mb-5 break-inside-avoid"
                    >
                        <ArtworkCard artwork={artwork} />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Artworks;