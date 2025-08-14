import ShinyText from "/Reactbits/ShinyText/ShinyText.jsx";

const Navbar = () => {
  return (
    <div className="w-full">
      <nav className="w-full mt-5 px-3 sm:px-5 flex justify-between items-center tracking-normal">
        <nav className="logo bg-purple-500">
          <h1 className="text-1xl sm:text-2xl text-white font-bold p-2">
            Intan Noeraini
          </h1>
        </nav>
        <div className="nav-links text-white hidden sm:block">
          <ul className="flex gap-10">
            <li>
              <a href="/" className="font-bold text-sm hover:bg-purple-400 p-1">
                Home
              </a>
            </li>
            <li>
              <a
                href="/you"
                className="font-bold text-sm hover:bg-purple-400 p-1"
              >
                You
              </a>
            </li>
            <li>
              <a
                href="/we"
                className="font-bold text-sm hover:bg-purple-400 p-1"
              >
                We
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="font-bold text-sm hover:bg-purple-400 p-1"
              >
                Hope
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
