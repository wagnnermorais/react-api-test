import axios from "axios";

const useDeleteMovie = () => {
  const deleteMovie = async (movieId: string, onSuccess: () => void) => {
    const url = `http://localhost:3000/api/movie/${movieId}`;
    try {
      await axios.delete(url);
      onSuccess();
      console.log("Movie deleted successfully");
    } catch (error) {
      console.log("Failed to delete movie:", error);
    }
  };

  return deleteMovie;
};

export default useDeleteMovie;
