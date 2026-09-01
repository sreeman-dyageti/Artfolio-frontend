import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";
import { getArtworkById } from "../api/artwork";

const ArtworkDetail = () => {
    const { id } = useParams();

    const { data, isLoading, isError } = useQuery({
        queryKey: ["artwork", id],
        queryFn: () => getArtworkById(id).then((response) => response.data),
    });

    if (isLoading) {
        return <p>Loading artwork...</p>;
    }

    if (isError) {
        return <p>Failed to load artwork.</p>;
    }

    const artwork = data?.data?.artwork;

    if (!artwork) {
        return <p>Artwork not found.</p>;
    }

    return (
        <main>
            <img
                src={artwork.cover_image_url}
                alt={artwork.title}
                style={{ maxWidth: "500px", width: "100%" }}
            />

            <h1>{artwork.title}</h1>

            <p>
                by {artwork.display_name || artwork.username}
            </p>

            <p>{artwork.description}</p>

            <p>
                ❤️ {artwork.like_count}{" "}
                🔖 {artwork.save_count}{" "}
                🔗 {artwork.share_count}
            </p>

            <h2>Process</h2>

            {artwork.processSteps?.map((step) => (
                <div key={step.id}>
                    <h3>Step {step.step_number}</h3>

                    {step.image_url && (
                        <img
                            src={step.image_url}
                            alt={`Step ${step.step_number}`}
                            style={{
                                maxWidth: "500px",
                                width: "100%",
                            }}
                        />
                    )}

                    {step.title && <h4>{step.title}</h4>}
                    {step.description && <p>{step.description}</p>}
                </div>
            ))}
        </main>
    );
};

export default ArtworkDetail;