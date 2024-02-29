import { useState } from "react";
import { Movie } from "../types/Movie";
import MovieModal from "../components/MovieModal";
import useGetMovies from "../hooks/useGetMovies";

const MovieList = () => {
  const movies: Movie[] = useGetMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);

  const handleSelectedMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };
  return (
    <div className="grid grid-cols-4 gap-4 w-[80%] my-12 mx-auto">
      {movies.map((movie) => (
        <div
          key={movie._id}
          className="border cursor-pointer"
          onClick={() => handleSelectedMovie(movie)}
        >
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
      {selectedMovie && (
        <MovieModal
          movie={selectedMovie}
          onClose={() => setSelectedMovie(null)}
        />
      )}
    </div>
  );
};

export default MovieList;
