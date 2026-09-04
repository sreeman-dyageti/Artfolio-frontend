import { Link } from "react-router-dom";

const ArtworkCard = ({ artwork }) => {
    return (
        <article className="group">
            <Link to={`/artworks/${artwork.id}`}>
                <img
                    src={artwork.cover_image_url}
                    alt={artwork.title}
                    className="w-full rounded-xl object-cover transition-transform duration-300 group-hover:scale-[1.02]"
                />
            </Link>

            <div className="px-1 pt-3">
                <h3 className="font-medium text-gray-900">
                    {artwork.title}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                    by {artwork.display_name || artwork.username}
                </p>
            </div>
        </article>
    );
};

export default ArtworkCard;