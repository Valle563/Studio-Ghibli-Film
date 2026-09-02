import { useState } from "react";
import { type ApiState } from "../types/movie";
import { getMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard.tsx";

type Props = {
  favoriteIds: string[];
  onToggleFavorite: (id: string) => void;
};

const Home = ({ favoriteIds, onToggleFavorite }: Props) => {
  const [apiState, setApiState] = useState<ApiState>({ status: "idle" });

  return (
    <div>
      <h2>Home - alla filmer</h2>
      <button onClick={() => getMovies(setApiState)}>Hämta filmer</button>

      <p>Status: {apiState.status}</p>
      {apiState.status === "error" && <p>{apiState.message}</p>}

      {apiState.status === "success" && (
        <div className="movie-grid">
          {[...apiState.data]
            .sort((a, b) => Number(b.release_date) - Number(a.release_date))
            .map((movie) => (
              <MovieCard
                key={movie.id}
                movie={movie}
                isFavorite={favoriteIds.includes(movie.id)}
                onToggleFavorite={() => onToggleFavorite(movie.id)}
              />
            ))}
        </div>
      )}
    </div>
  );
};

export default Home;