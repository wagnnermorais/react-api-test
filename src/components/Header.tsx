const Header = () => {
  return (
    <header className="flex justify-between items-center px-4 py-8 bg-zinc-100 border-b-1 border-slate-200">
      <h1 className="text-4xl font-extrabold">
        M<span className="text-orange-400 tracking-wider">Flix</span>
      </h1>
      <menu>
        <ul className="flex gap-4">
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">Register</a>
          </li>
        </ul>
      </menu>
    </header>
  );
};

export default Header;
