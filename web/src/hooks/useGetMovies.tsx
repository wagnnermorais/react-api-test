import { useEffect, useState } from "react";
import axios from "axios";

interface Movie {
  _id: string;
  title: string;
  rating: number;
  description: string;
  director: string;
  stars: string[];
  poster: string;
}

const useGetMovies = () => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const url = "http://localhost:3000/api/movie";

  const getMovies = async () => {
    try {
      const response = await axios.get<Movie[]>(url);
      setMovies(response.data);
    } catch (error) {
      console.log(`Não foi possível realizar a operação!`);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);

  return movies;
};

export default useGetMovies;
