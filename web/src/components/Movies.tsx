import movies from "./data.json";

const Movies = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-[85%] mt-12 mx-auto">
      {movies.map((movie) => (
        <div className="h-[45vh] w-full " key={movie.title}>
          <div
            className={`h-full w-full bg-[url('${movie.poster}')] bg-no-repeat bg-cover`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default Movies;
