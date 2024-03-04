import { useState } from "react";
import { Movie } from "../types/Movie";
import { MovieProps } from "../types/MovieProps";
import MovieModal from "./MovieModal";
import useGetMovies from "../hooks/useGetMovies";
import useDeleteMovie from "../hooks/useDeleteMovie";

const Movies = ({ searchText }: MovieProps) => {
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [movies, setMovies] = useState<Movie[]>([]);
  const allMovies: Movie[] = useGetMovies(12);
  const deleteMovie = useDeleteMovie();
  const filteredMovies = allMovies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectedMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleDeleteMovie = (movieId: string) => {
    deleteMovie(movieId, () => {
      setMovies(movies.filter((movie) => movie._id !== movieId));
    });
  };

  return (
    <div className="grid grid-cols-4 gap-4 w-[80%] my-12 mx-auto">
      {filteredMovies.map((movie) => (
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
          onDelete={handleDeleteMovie}
        />
      )}
    </div>
  );
};

export default Movies;
