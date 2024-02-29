import { Movie } from "../types/Movie";
import useGetMovies from "../hooks/useGetMovies";

const MovieList = () => {
  const movies: Movie[] = useGetMovies();
  return (
    <div className="grid grid-cols-4 gap-4 w-[80%] my-12 mx-auto">
      {movies.map((movie) => (
        <div key={movie._id} className="border cursor-pointer">
          <img
            src={movie.poster}
            alt={movie.title}
            className="w-full h-full object-cover"
          />
        </div>
      ))}
    </div>
  );
};

export default MovieList;
