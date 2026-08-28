import type { Movie } from "../types/movie";

type Props = {
  movie: Movie;
}

const MovieCard = ({ movie }: Props)  => {
  return (
    <div className="movie-card">
      <img src={movie.image} alt={movie.title} className="movie-poster" />
      <h3> {movie.title} </h3>
      <p> {movie.release_date} </p>
      <p> {movie.director} </p>
    </div>
  )
} 

export default MovieCard