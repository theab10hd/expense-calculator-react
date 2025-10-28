import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddExpenseButton from "../components/AddExpenseButton";

const Layout = () => {
  return (
    // make this a column flex container so the main content can flex to remaining height
    <div className="w-screen h-screen fixed flex flex-col">
      <div className="h-16 w-full">
        <Navbar />
      </div>
      <div className="flex-1 flex">
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="flex-1 w-full overflow-auto relative bg-[url('/images/dashboard-cover.jpg')]  bg-cover bg-center">
          <AddExpenseButton />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
