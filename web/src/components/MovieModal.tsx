import { MovieModalProps } from "../types/MovieModalProps";
import { X } from "lucide-react";

const MovieModal = ({ movie, onClose }: MovieModalProps) => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center z-50">
      <div className="bg-black bg-opacity-70 absolute inset-0"></div>
      <div className="relative bg-black text-white w-[60%] h-[80%] overflow-auto">
        <button onClick={onClose} className="absolute top-0 right-0 m-4">
          <X size={36} />
        </button>
        <div className="flex h-full">
          <div className="w-1/2">
            <img
              src={movie.poster}
              alt={movie.title}
              className="w-full h-full"
            />
          </div>
          <div className="w-1/2 py-8 px-8">
            <h2 className="text-4xl font-bold my-6">{movie.title}</h2>
            <div className="my-4">
              <p className="text-2xl font-bold">Description:</p>
              <p className="text-xl text-justify mt-2">{movie.description}</p>
            </div>
            <div className="my-4">
              <p className="text-2xl font-bold">Rating:</p>
              <p className="text-xl mt-2">{movie.rating}</p>
            </div>
            <div className="my-4">
              <p className="text-2xl font-bold">Director:</p>
              <p className="text-xl mt-2">{movie.director}</p>
            </div>
            <div className="my-4">
              <p className="text-2xl font-bold">Stars:</p>
              <p className="text-xl mt-2">{movie.stars.join(", ")}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
