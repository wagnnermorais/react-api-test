import { Movie } from "./Movie";

export interface MovieModalProps {
  movie: Movie;
  onClose: () => void;
}