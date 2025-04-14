import { CircleX } from "lucide-react";
import { useLocation, Link } from "react-router-dom";

const MobileNavigation = ({ setOpenMobileNav, openMobileNav, navigation }) => {
  const location = useLocation();

  return (
    <>
      {/* Fullscreen black overlay when menu is open */}
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-500 z-40 ${
          openMobileNav ? "opacity-80 visible" : "opacity-0 invisible"
        }`}
        onClick={() => setOpenMobileNav(false)}
      ></div>

      {/* Sidebar navigation */}
      <div
        className={`fixed md:hidden z-50 duration-500 top-0 bottom-0 w-[250px] bg-[#1B1A19] ${
          openMobileNav ? "right-0" : "-right-[250px]"
        }`}
      >
        <div className="text-white p-4 flex justify-between">
          <CircleX
            className="cursor-pointer"
            onClick={() => setOpenMobileNav(false)}
          />
          <img src="/logo.svg" alt="logo" width={70} height={70} />
        </div>

        <ul className="flex flex-col gap-6 mt-4 text-center">
          {navigation.map((item, idx) => (
            <Link
              key={idx}
              to={item.href}
              onClick={() => setOpenMobileNav(false)}
              className={`py-3 ${
                location.pathname === item.href
                  ? "bg-white text-black font-semibold"
                  : "text-[#B4AFAC] hover:text-white"
              }`}
            >
              <li>{item.name}</li>
            </Link>
          ))}
          <Link to="/contact-us" onClick={() => setOpenMobileNav(false)}>
            <div className="flex items-center rounded-md transition-all p-[1px] duration-300 overflow-hidden">
              <button className="hover:button_gradeint duration-500 w-full h-full text-white rounded-md px-4 py-2">
                Contact Us
              </button>
            </div>
          </Link>
        </ul>
      </div>
    </>
  );
};

export default MobileNavigation;
