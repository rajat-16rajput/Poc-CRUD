import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="nav-container flex justify-between bg-orange-300 p-4  ">
      <h2 className="text-black text-lg font-semibold">Hotel Vaishali</h2>
      <ul className="tabs flex space-x-4">
        <Link to="/">
          <li className="bg-orange-300 hover:bg-orange-400 mx-4 text-sm font-bold px-3 py-2 border 1 px border-black rounded-md cursor-pointer ">
            Menu
          </li>
        </Link>
        <Link to="/info">
          <li className="bg-orange-300 hover:bg-orange-400 mx-4 text-sm font-bold px-3 py-2 border 1 px border-black rounded-md cursor-pointer">
            Info
          </li>
        </Link>
      </ul>
    </div>
  );
};

export default Navbar;