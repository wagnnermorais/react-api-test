const Header = () => {
  return (
    <header className="flex justify-between items-center px-20 py-8 bg-zinc-100 border-b-1 border-slate-200">
      <h1 className="text-4xl font-extrabold">
        &lt;M<span className="text-orange-400 tracking-wider">Flix /&gt;</span>
      </h1>
      <menu>
        <ul className="flex gap-4">
          <li>
            <a
              href="#"
              className="font-semibold text-lg tracking-wide duration-300 hover:text-orange-700"
            >
              Home
            </a>
          </li>
          <li>
            <a
              href="#"
              className="font-semibold text-lg tracking-wide duration-300 hover:text-orange-700"
            >
              Register
            </a>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
