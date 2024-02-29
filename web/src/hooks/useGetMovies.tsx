import { useEffect, useState } from "react";
import { Movie } from "../types/Movie";
import axios from "axios";

const useGetMovies = (limit?: number) => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const url = "http://localhost:3000/api/movie";

  useEffect(() => {
    const getMovies = async () => {
      try {
        const response = await axios.get<Movie[]>(url);
        const renderLimit = limit
          ? response.data.slice(0, limit)
          : response.data;
        setMovies(renderLimit);
      } catch (error) {
        console.log(`Não foi possível realizar a operação!`);
      }
    };

    getMovies();
  }, [url, limit]);

  return movies;
};

export default useGetMovies;
