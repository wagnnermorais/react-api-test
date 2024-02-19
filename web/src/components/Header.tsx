import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-8 bg-zinc-950 border-b-1 border-slate-200">
      <Link to={"/"}>
        <h1 className="text-4xl font-extrabold text-slate-100">
          &lt;M
          <span className="text-purple-700 tracking-wider">Flix /&gt;</span>
        </h1>
      </Link>
      <menu>
        <ul className="flex gap-8">
          <li className="font-semibold text-lg text-purple-700 tracking-wide duration-300 hover:text-purple-200">
            <Link to={"/"}>Home</Link>
          </li>
          <li className="font-semibold text-lg text-purple-700 tracking-wide duration-300 hover:text-purple-200">
            <Link to={"/register"}>Register</Link>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
