import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import Movies from "./components/Movies";

function App() {
  const [searchText, setSearchText] = useState<string>("");
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  return (
    <div className="min-h-screen bg-zinc-950">
      <h1 className="text-6xl font-extrabold text-white text-center my-16">
        Whatcha feeling like?
      </h1>
      <div className="relative flex items-center justify-center w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search for any movie"
          value={searchText}
          onChange={handleInputChange}
          className=" p-4 w-full rounded outline-none placeholder-slate-600 duration-300 hover:bg-neutral-100 text-lg"
        />
        <Search className="absolute right-2" opacity={"0.7"} />
      </div>
      <Movies searchText={searchText} />
      <div className="flex justify-center mb-12">
        <Link to={"/movies"}>
          <button className="text-center w-[300px] py-3 px-4 border-2 border-purple-700 text-white rounded bg-zinc-950 font-bold duration-300 hover:bg-zinc-900">
            See all movies
          </button>
        </Link>
      </div>
    </div>
  );
}

export default App;
