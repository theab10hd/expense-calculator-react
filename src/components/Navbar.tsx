import { Link } from "react-router-dom";
import { navLinks } from "../utils/GeneralDatas";

const Navbar = () => {
  return (
    <div className="h-full w-full flex justify-between items-center border-b border-white/10 bg-linear-to-br from-gray-800 to-black p-4 text-white">
      <span>
        <b>ExpenseCalculator</b>.io
      </span>
      <nav>
        <ul className="flex space-x-8">
          {navLinks.map((link) => (
            <Link to={link.path} key={link.name}>
              <li className="cursor-pointer text-white/70 hover:text-white">
                {link.name}
              </li>
            </Link>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
