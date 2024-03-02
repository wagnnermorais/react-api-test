import { useState } from "react";
import { Movie } from "../types/Movie";
import { Search } from "lucide-react";
import MovieModal from "../components/MovieModal";
import useGetMovies from "../hooks/useGetMovies";

const MovieList = () => {
  const movies: Movie[] = useGetMovies();
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [searchText, setSearchText] = useState<string>("");
  const filteredMovies = movies.filter((movie) =>
    movie.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const handleSelectedMovie = (movie: Movie) => {
    setSelectedMovie(movie);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div>
      <div className="relative flex items-center justify-center w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search for any movie"
          value={searchText}
          onChange={handleInputChange}
          className=" p-4 w-full rounded outline-none placeholder-slate-600 duration-300 hover:bg-neutral-100 text-lg"
        />
        <Search className="absolute right-2" opacity={"0.7"} />
      </div>
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
          />
        )}
      </div>
    </div>
  );
};

export default MovieList;
