import { AlignJustify } from "lucide-react";
import { useState, useEffect, useContext } from "react";
import MobileNavigation from "../Mobile-navigation";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About us", href: "/about-us" },
  { name: "Services", href: "/services" },
  { name: "Works", href: "/work" },
  { name: "Gallery", href: "/gallery" },
];

const Navbar = () => {
  const [openMobileNav, setOpenMobileNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();
  const { user } = useContext(AuthContext);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed z-10 top-0 left-0 right-0 transition-all duration-500 ${
        isScrolled
          ? "bg-[#1B1A19] bg-opacity-60 backdrop-blur-sm"
          : "bg-[#381B19]"
      }`}
    >
      <nav className="flex justify-between items-center container mx-auto px-4 h-20">
        {/* Logo */}
        <Link to="/" className="flex items-center">
          <img
            src="/logo.svg"
            alt="logo"
            className="w-[90px] h-[90px]"
          />
        </Link>

        {/* Navigation Links */}
        <div className="hidden md:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={`${
                location.pathname === item.href
                  ? "text-white font-semibold"
                  : "text-[#B4AFAC]"
              }`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        {/* Contact or Dashboard button */}
        <div className="hidden md:flex items-center">
          {user ? (
            <Link to="/dashboard">
              <button className="bg-[#2C202F] transition-all hover:button_gradeint duration-500 text-white rounded-md px-4 py-2">
                Dashboard
              </button>
            </Link>
          ) : (
            <Link to="/contact-us">
              <button className="bg-[#2C202F] transition-all hover:button_gradeint duration-500 text-white rounded-md px-4 py-2">
                Contact Us
              </button>
            </Link>
          )}
        </div>

        {/* Mobile Menu Toggle */}
        <div
          onClick={() => setOpenMobileNav(!openMobileNav)}
          className="block md:hidden text-white cursor-pointer"
        >
          <AlignJustify />
        </div>

        {/* Mobile Navigation Component */}
        <MobileNavigation
          setOpenMobileNav={setOpenMobileNav}
          openMobileNav={openMobileNav}
          navigation={navigation}
        />
      </nav>
    </header>
  );
};

export default Navbar;
