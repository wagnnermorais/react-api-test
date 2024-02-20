import Input from "../components/Input";

const RegisterMovie = () => {
  return (
    <form className="mt-12 mx-auto py-6 px-12 w-[50%]">
      <div className="w-full my-6">
        <Input title="teste" type="text" name="title" placeholder="Title" />
      </div>
      <div className="w-full my-6">
        <Input title="teste" type="text" name="rating" placeholder="Rating" />
      </div>
      <div className="w-full my-6">
        <Input
          title="teste"
          type="text"
          name="description"
          placeholder="Description"
        />
      </div>
      <div className="w-full my-6">
        <Input
          title="teste"
          type="text"
          name="director"
          placeholder="Director"
        />
      </div>
      <div className="w-full my-6">
        <Input title="teste" type="text" name="stars" placeholder="Stars" />
      </div>
      <div className="w-full my-6">
        <Input title="teste" type="text" name="poster" placeholder="Poster" />
      </div>
      <div className="flex items-center justify-center">
        <input
          type="submit"
          value="Register"
          className="bg-white w-1/2 py-2 cursor-pointer"
        />
      </div>
    </form>
  );
};

export default RegisterMovie;
