import React from 'react';
import { Link } from 'react-router-dom'; // Assuming you're using react-router-dom

const Footer = () => {
  return (
    <footer className="bg-[#1B1A19] text-white pt-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-5 justify-between gap-8">
          {/* Logo and Description */}
          <div className="space-y-4 md:col-span-2">
            <Link to="/" className="flex items-center">
              <img
                src="/logo.svg"
                alt="logo"
                width={40}
                height={40}
                className="w-auto h-10 mx-auto md:mx-0"
              />
            </Link>
            <p className="text-sm text-[#D3D0CE] max-w-sm leading-6 text-center md:text-start">
              Leanscafe is a separate business unite (SBU) of Comjagat
              Technologies. As your devoted digital marketing solution partner,
              Leanscafe does not just offer a suite of integrated solutions – it
              becomes the pulsating rhythm of your digital aspirations.
            </p>
            <div className="flex *:text-[#D3D0CE] items-center justify-center md:justify-start space-x-4 pt-4">
              <Link to="#" className="hover:text-white">
                <img
                  src="/icons/Linkedin.svg"
                  width={25}
                  height={25}
                  alt="linkedin icon"
                />
              </Link>
              <Link to="https://www.facebook.com/lenscafestudio1" className="hover:text-white">
                <img
                  src="/icons/Facebook.svg"
                  width={25}
                  height={25}
                  alt="facebook icon"
                />
              </Link>
              <Link to="#" className="hover:text-white">
                <img
                  src="/icons/Twitter.svg"
                  width={25}
                  height={25}
                  alt="twitter icon"
                />
              </Link>
              <Link to="https://youtube.com/@lenscafestudio?si=0eEk9DexFcPoD7oE" className="hover:text-white">
                <img
                  src="/icons/youtube.svg"
                  width={25}
                  height={25}
                  alt="youtube icon"
                />
              </Link>
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-4 md:col-span-3 text-center md:text-start">
            {/* Services */}
            <div>
              <h3 className="text-lg font-semibold mb-4">Services</h3>
              <ul className="space-y-2 *:text-[#D3D0CE]">
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Product Photoshoot
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Product Videoshoot
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Corporate Advertisement Shoot
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Podcast
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Graphic design
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Video Editing
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Digital marketing
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Website design and development
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    App Development
                  </Link>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div className="lg:ml-16">
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2 *:text-[#D3D0CE]">
                <li>
                  <Link to="/" className="hover:text-white text-sm">
                    Home
                  </Link>
                </li>
                <li>
                  <Link to="/about-us" className="hover:text-white text-sm">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link to="/services" className="hover:text-white text-sm">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/work" className="hover:text-white text-sm">
                    Works
                  </Link>
                </li>
                <li>
                  <Link to="/contact-us" className="hover:text-white text-sm">
                    Contact
                  </Link>
                </li>
                <li>
                  <Link to="#" className="hover:text-white text-sm">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Info */}
            <div className="lg:ml-10">
              <h3 className="text-lg font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 *:text-[#D3D0CE]">
                <li className="text-sm">Email: lenscafestudio@gmail.com</li>
                <li className="text-sm mt-4">Phone: 01977271306</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      {/* Copyright */}
      <div className="border-t border-gray-800 mt-12 py-6 text-center">
        <p className="text-sm text-gray-400">
          © {new Date().getFullYear()} Lenscafe. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
