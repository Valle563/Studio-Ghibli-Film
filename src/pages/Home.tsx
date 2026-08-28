import { useDebugValue, useState } from "react";
import { type ApiState } from "../types/movie";
import { getMovies } from "../api/movieApi";
import MovieCard from "../components/MovieCard";

const Home = () => {
  const [ApiState, setApiState] = useState<ApiState>({ status: "idle"})

  return (
    <div>
      <h2> Home - alla filmer </h2>
      <button onClick={() => getMovies(setApiState)}> Hämta filmer</button>

      <p> Status: {ApiState.status}</p>
      {ApiState.status === "error" && <p>{ApiState.message}</p>}

      {ApiState.status === "success" && (
        <div className="movie-grid">
          {ApiState.data.map((movie) =>(
            <MovieCard key={movie.id} movie={movie}/>
          ))}
        </div>
      )}
    </div>
  )
}

export default Home