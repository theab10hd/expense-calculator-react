import { useState } from "react";
import SidebarMenu from "../utils/SidebarMenu.json";
import { Link } from "react-router-dom";

const Sidebar = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [selectedMenuItem, setSelectedMenuItem] = useState<number | null>(null);

  const handleMenuItemClick = (id: number) => {
    setSelectedMenuItem(id);
    setIsSidebarOpen(false);
  };

  return (
    <div
      className={`bg-gray-900 h-full border-r border-white/10 ${
        isSidebarOpen ? "w-64" : "w-14"
      } text-gray-800 relative transition-all duration-300 ease-in-out`}
    >
      <nav>
        <ul>
          {SidebarMenu.menuItems.map((item) => (
            <Link to={item.link} key={item.id}>
              <li
                className={`border-b ${
                  selectedMenuItem == item.id && "bg-gray-700! text-white"
                } border-white/10 flex items-center ps-4 h-14 cursor-pointer  hover:bg-gray-600! text-white`}
                onClick={() => handleMenuItemClick(item.id)}
              >
                <button className="flex justify-center items-center cursor-pointer gap-4">
                  <i className={`${item.icon} w-5 text-lg aspect-square  `}></i>
                  <p
                    className={`transition-opacity duration-500  ease-in-out overflow-hidden whitespace-nowrap ${
                      isSidebarOpen
                        ? "opacity-100 max-w-full"
                        : "opacity-0 max-w-0"
                    }`}
                  >
                    {item.label}
                  </p>
                </button>
              </li>
            </Link>
          ))}
        </ul>
      </nav>
      <button
        onClick={() => {
          setIsSidebarOpen(!isSidebarOpen);
        }}
        className="absolute bottom-32 right-0 p-5 bg-gray-300 cursor-pointer rounded-l-lg hover:bg-gray-400 hover:text-white"
      >
        <i
          className={`fa-solid ${
            isSidebarOpen ? "fa-arrow-left" : "fa-arrow-right"
          }`}
        ></i>
      </button>
    </div>
  );
};

export default Sidebar;
