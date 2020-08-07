const Header = ({
  menuLinks = [
    "Biology",
    "Sulphoraphane",
    "Drosophila's Connectome",
    "Herd Immunity",
    "COVID-19",
    "Moringa",
    "GANs",
    "All",
  ],
}) => (
  <>
    <div className="bg-black text-center p-3">
      <div className="relative container mx-auto flex justify-between flex-row-reverse px-10">
        <div class="flex items-center space-x-8">
          <a
            href="#"
            class="text-base leading-6 font-medium text-gray-500 hover:text-gray-200 focus:outline-none focus:text-gray-900 transition ease-in-out duration-150"
          >
            Get one year for 29$
          </a>
          <span class="inline-flex rounded-md shadow-sm">
            <a
              href="#"
              class="inline-flex items-center justify-center px-4 py-2 border border-transparent text-base leading-6 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:border-indigo-700 focus:shadow-outline-indigo active:bg-indigo-700 transition ease-in-out duration-150"
            >
              Sign In
            </a>
          </span>
        </div>
      </div>
    </div>
    <header className="container mx-auto relative px-10">
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 py-3">
        <div className="text-sm">
          <span>July 6th, 2020</span>
        </div>
        <div className="text-center flex justify-center items-center text-2xl">
          The Quantum Post
        </div>
        <div className="text-right text-sm uppercase">Quarantine edition</div>
      </div>
      <nav className="container mx-auto relative py-3">
        <ul className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12 overflow-hidden">
          {menuLinks.map((l) => (
            <li
              key={l}
              className="bg-white text-sm tracking-wider font-semibold uppercase text-indigo-600"
            >
              {l}
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <div className="bg-gray-200 text-center p-3 mt-4">
      <span className="text-black text-md">
        New Geometric Perspective Cracks Old Problem About Rectangles
      </span>
      <span className="text-black text-md ml-2  cursor-pointer font-bold">
        | Read More
      </span>
    </div>
  </>
);

export default Header;
