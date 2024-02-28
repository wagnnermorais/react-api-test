import { useState } from "react";
import { Movie } from "../types/Movie";
import axios from "axios";

const useRegisterMovie = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const url = "http://localhost:3000/api/movie";

  const registerMovie = async (newMovie: Movie) => {
    try {
      const response = await axios.post<Movie>(url, newMovie);
      console.log("Movie registered:", response.data);
      setMovies([...movies, response.data]);
    } catch (error) {
      console.log("Failed to register movie:", error);
    }
  };

  return { movies, registerMovie };
};

export default useRegisterMovie;
