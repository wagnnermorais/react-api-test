import useGetMovies from "../hooks/useGetMovies";

const Movies = () => {
  const movies = useGetMovies();

  return (
    <div className="grid grid-cols-3 gap-8 w-[85%] mt-12 mx-auto">
      {movies.map((movie) => (
        <div key={movie._id} className="border p-4">
          <h2 className="text-xl font-bold">{movie.title}</h2>
        </div>
      ))}
    </div>
  );
};

export default Movies;
