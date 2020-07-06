const Header = ({
  menuLinks = [
    "Biology",
    "Physics",
    "Electrophysiology",
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
    <header className="container mx-auto relative px-10">
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-3 py-3">
        <div className="">
          <span>July 6th, 2020</span>
        </div>

        <div className="text-center flex justify-center items-center text-2xl">
          The Quantum Post
        </div>
        <div className="text-right">Quarantine edition</div>
      </div>
      <nav className="container mx-auto relative py-3">
        <ul className="hidden md:flex-1 md:flex md:items-center md:justify-between md:space-x-12 overflow-hidden">
          {menuLinks.map((l) => (
            <li
              key={l}
              className="inline-block text-sm whitespace-pre cursor-pointer"
            >
              {l}
            </li>
          ))}
        </ul>
      </nav>
    </header>
    <div className="bg-gray-200 text-center p-3 mt-4">
      <span className="text-black text-sm">
        New Geometric Perspective Cracks Old Problem About Rectangles
      </span>
      <span className="text-black text-sm">Read More</span>
    </div>
  </>
);

export default Header;
