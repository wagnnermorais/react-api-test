import { MovieProps } from "../types/MovieProps";
import useGetMovies from "../hooks/useGetMovies";

const Movies = ({ searchText }: MovieProps) => {
  const movies = useGetMovies();
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );
  return (
    <div className="grid grid-cols-4 gap-4 w-[80%] my-12 mx-auto">
      {filteredMovies.map((movie) => (
        <div key={movie._id} className="border">
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

export default Movies;
