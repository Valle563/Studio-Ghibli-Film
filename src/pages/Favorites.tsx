import { useState, useEffect } from "react";
import { type ApiState } from "../types/movie";
import { getMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

type Props = {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
};

const Favorites = ({ favoriteIds, onToggleFavorite }: Props) => {
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });

  useEffect(() => {
    getMovies(setApiState);
  }, []);

  console.log("favoriteIds:", favoriteIds);
  return (
    <div>
      <h2>Mina favoriter</h2>

      <p>Status: {apiState.status}</p>
      {apiState.status === "error" && <p>{apiState.message}</p>}

      {apiState.status === "success" && (
        <div className="movie-grid">
          {apiState.data
            .filter((movie) => favoriteIds.includes(movie.id))
            .map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={true}
                onToggleFavorite={() => onToggleFavorite(movie.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Favorites;