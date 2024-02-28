import { ChangeEvent, FormEvent, useState } from "react";
import useRegisterMovie from "../hooks/useRegisterMovie";
import Input from "../components/Input";

const RegisterMovie = () => {
  const { registerMovie } = useRegisterMovie();
  const [title, setTitle] = useState<string>("");
  const [rating, setRating] = useState<number>(0);
  const [description, setDescription] = useState<string>("");
  const [director, setDirector] = useState<string>("");
  const [stars, setStars] = useState<string>("");
  const [poster, setPoster] = useState<string>("");

  const handleSubmitForm = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const newMovie = {
      title,
      rating,
      description,
      director,
      stars: stars.split(","),
      poster,
    };
    await registerMovie(newMovie);
    setTitle("");
    setRating(0);
    setDescription("");
    setDirector("");
    setStars("");
    setPoster("");
  };

  return (
    <form
      className="mt-12 mx-auto py-6 px-10 w-[50%] bg-white rounded"
      onSubmit={handleSubmitForm}
    >
      <div className="my-6">
        <Input
          title="Title"
          type="text"
          name="title"
          placeholder="Title"
          value={title}
          onChange={(e: ChangeEvent<HTMLInputElement>) =>
            setTitle(e.target.value)
          }
        />
      </div>
      <div className="my-6">
        <Input
          title="Rating"
          type="text"
          name="rating"
          placeholder="Rating"
          value={rating.toString()}
          onChange={(e) => setRating(Number(e.target.value))}
        />
      </div>
      <div className="my-6">
        <Input
          title="Description"
          type="text"
          name="description"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="my-6">
        <Input
          title="Director"
          type="text"
          name="director"
          placeholder="Director"
          value={director}
          onChange={(e) => setDirector(e.target.value)}
        />
      </div>
      <div className="my-6">
        <Input
          title="Stars"
          type="text"
          name="stars"
          placeholder="Stars"
          value={stars}
          onChange={(e) => setStars(e.target.value)}
        />
      </div>
      <div className="my-6">
        <Input
          title="Poster"
          type="text"
          name="poster"
          placeholder="Poster"
          value={poster}
          onChange={(e) => setPoster(e.target.value)}
        />
      </div>
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="Register"
          className="py-3 w-1/3 text-md font-bold bg-zinc-950 text-white rounded cursor-pointer duration-300 hover:bg-opacity-90"
        />
      </div>
    </form>
  );
};

export default RegisterMovie;
