import { useState } from "react";
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
      <div className="w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search for any movie"
          value={searchText}
          onChange={handleInputChange}
          className="p-4 w-full rounded outline-none placeholder-slate-600 duration-300 hover:bg-neutral-100 text-lg"
        />
      </div>
      <Movies searchText={searchText} />
    </div>
  );
}

export default App;
