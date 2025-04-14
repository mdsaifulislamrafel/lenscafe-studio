import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen mt-20">
        <Outlet />
      </div>
    </div>
  );
};

export default MainLayout;
