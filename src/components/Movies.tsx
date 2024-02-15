import movies from "./data.json";

const Movies = () => {
  return (
    <div className="grid grid-cols-3 gap-8 w-[85%] mt-12 mx-auto">
      {movies.map((movie) => (
        <div className="h-[45vh] w-full " key={movie.title}>
          <img
            src={movie.poster}
            alt={movie.title}
            className="h-full w-full object-cover rounded"
          />
          {/* <div className={`h-full w-full bg-[url(${movie.poster}]`}></div> */}
        </div>
      ))}
    </div>
  );
};

export default Movies;
