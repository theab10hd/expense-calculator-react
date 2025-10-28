import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import AddExpenseButton from "../components/AddExpenseButton";

const Layout = () => {
  return (
    <div className="w-screen h-screen fixed overflow-hidden">
      <div className="h-16 w-full">
        <Navbar />
      </div>
      <div className="flex h-full">
        <div className="h-full">
          <Sidebar />
        </div>
        <div className="h-full w-full overflow-auto relative bg-[url('/images/dashboard-cover.jpg')]  bg-cover bg-center">
          <AddExpenseButton />
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Layout;
