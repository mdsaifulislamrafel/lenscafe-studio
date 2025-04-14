import { Outlet } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Footer from "../components/Footer/Footer";
import ChatSystemIcon from "../components/social-media-icon/social-media-icon";

const MainLayout = () => {
  return (
    <div className="">
      <Navbar />
      <div className="min-h-screen mt-20">
        <Outlet />
      </div>
      <Footer/>
      <ChatSystemIcon/>
    </div>
  );
};

export default MainLayout;
