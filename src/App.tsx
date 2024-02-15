import Header from "./components/Header";
import Movies from "./components/Movies";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950">
      <Header />
      <h1 className="text-6xl font-extrabold text-white text-center my-16">
        Whatcha feeling like?
      </h1>
      <div className="w-1/3 mx-auto">
        <input
          type="text"
          placeholder="Search for any movie"
          className="p-4 w-full rounded outline-none placeholder-slate-600 duration-300 hover:bg-neutral-100 text-lg"
        />
      </div>
      <Movies />
    </div>
  );
}

export default App;
