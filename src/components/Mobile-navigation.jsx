import { CircleX } from "lucide-react";

const MobileNavigation = ({ setOpenMobileNav, openMobileNav, navigation }) => {
  const pathname = window.location.pathname;

  return (
    <div
      className={`fixed md:hidden z-50 duration-700 top-0 bottom-0 w-[250px] bg-[#1B1A19] ${
        openMobileNav ? "right-0" : "-right-[250px]"
      }`}
    >
      <div className="text-white p-4 flex justify-between">
        <CircleX onClick={() => setOpenMobileNav(!openMobileNav)} />
        <img width={70} height={70} alt="logo" src="/logo.svg" />
      </div>
      <ul className="flex flex-col gap-6 *:py-3 mt-4 *:text-center duration-100">
        {navigation.map((item, idx) => (
          <a
            key={idx}
            href={item.href}
            onClick={() => setOpenMobileNav(false)}
            className={`${
              pathname === item.href
                ? "bg-white font-semibold"
                : "text-[#B4AFAC] hover:text-white"
            }`}
          >
            <li>{item.name}</li>
          </a>
        ))}
        <a href="/contact-us">
          <div className="flex items-center rounded-md transition-all p-[1px] duration-300 overflow-hidden">
            <button className="hover:button_gradeint duration-500 w-full h-full text-white rounded-md px-4 py-2">
              Contact Us
            </button>
          </div>
        </a>
      </ul>
    </div>
  );
};

export default MobileNavigation;
