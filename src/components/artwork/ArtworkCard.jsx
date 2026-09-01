import { Link } from "react-router-dom";

const ArtworkCard = ({ artwork }) => {
    return (
        <article className="artwork-card">
            <Link to={`/artworks/${artwork.id}`}>
                <img
                    src={artwork.cover_image_url}
                    alt={artwork.title}
                    className="artwork-card-image"
                />
            </Link>

            <div className="artwork-card-content">
                <h3>{artwork.title}</h3>

                <p>
                    by {artwork.display_name || artwork.username}
                </p>
            </div>
        </article>
    );
};

export default ArtworkCard;