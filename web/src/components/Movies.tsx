import useGetMovies from "../hooks/useGetMovies";

const Movies = () => {
  const movies = useGetMovies();

  return (
    <div className="grid grid-cols-3 gap-4 w-[80%] my-12 mx-auto">
      {movies.map((movie) => (
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
