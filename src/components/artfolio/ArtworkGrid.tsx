import { ArrowUpRight, Heart } from "lucide-react";
import type { Artwork } from "../../types/artwork";

interface ArtworkGridProps {
  artworks: Artwork[];
  saved: number[];
  onSelect: (artwork: Artwork) => void;
  onToggleSaved: (id: number) => void;
}

export default function ArtworkGrid({
  artworks,
  saved,
  onSelect,
  onToggleSaved,
}: ArtworkGridProps) {
  return (
    <div className="artwork-grid">
      {artworks.map((work, index) => {
        const isSaved = saved.includes(work.id);

        return (
          <article
            className={`artwork-card ${
              index % 3 === 1 ? "card-offset" : ""
            }`}
            key={work.id}
          >
            <button
              className="artwork-image-button"
              onClick={() => onSelect(work)}
              aria-label={`View ${work.title} by ${work.artist}`}
            >
              <img
                src={work.image}
                alt={`${work.title}, an original ${work.genre.toLowerCase()} artwork by ${work.artist}`}
                loading={index > 3 ? "lazy" : "eager"}
              />

              <span className="image-open">
                <ArrowUpRight size={17} />
              </span>

              <span className="image-edition">
                ORIGINAL · {work.year}
              </span>
            </button>

            <div className="artwork-info">
              <div className="artwork-copy">
                <button
                  className="artwork-title"
                  onClick={() => onSelect(work)}
                >
                  {work.title}
                </button>

                <span>
                  {work.artist}{" "}
                  <span className="artist-dot">·</span>{" "}
                  {work.location}
                </span>
              </div>

              <button
                className={`save-button ${isSaved ? "is-saved" : ""}`}
                onClick={() => onToggleSaved(work.id)}
                aria-label={
                  isSaved
                    ? `Remove ${work.title} from saved works`
                    : `Save ${work.title}`
                }
              >
                <Heart
                  size={17}
                  fill={isSaved ? "currentColor" : "none"}
                />
              </button>
            </div>

            <div className="artwork-meta">
              <span>{work.medium}</span>
              <strong>{work.price}</strong>
            </div>
          </article>
        );
      })}
    </div>
  );
}