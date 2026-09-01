import { useEffect, useState } from "react";
import { getArtworks } from "../api/artwork";

function Artworks() {
    const [artworks, setArtworks] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState("");

    useEffect(() => {
        const fetchArtworks = async () => {
            try {
                const response = await getArtworks();
                setArtworks(response.data);
            } catch (error) {
                console.error(error);
                setError("Failed to load artworks");
            } finally {
                setLoading(false);
            }
        };

        fetchArtworks();
    }, []);

    if (loading) {
        return <h1>Loading artworks...</h1>;
    }

    if (error) {
        return <h1>{error}</h1>;
    }

    return (
        <div>
            <h1>Artworks</h1>

            {artworks.length === 0 ? (
                <p>No artworks found.</p>
            ) : (
                artworks.map((artwork) => (
                    <div key={artwork.id}>
                        <h2>{artwork.title}</h2>
                        <p>{artwork.description}</p>
                    </div>
                ))
            )}
        </div>
    );
}

export default Artworks;