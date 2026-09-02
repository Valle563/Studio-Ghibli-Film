import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
  isFavorite: boolean;
  onToggleFavorite: () => void;
};

const MovieCard = ({ movie, isFavorite, onToggleFavorite }: Props) => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
      <h3>{movie.title}</h3>
      <p>{movie.release_date}</p>
      <p>{movie.director}</p>
      <button onClick={onToggleFavorite} className="favorite-btn">
        {isFavorite ? "❤️" : "🤍"}
      </button>
    </div>
  );
};

export default MovieCard;