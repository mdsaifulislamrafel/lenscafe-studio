import { useState } from "react";
import { FaFacebookMessenger } from "react-icons/fa";
import { IoCallOutline, IoCloseSharp } from "react-icons/io5";
import { MdOutlineChat, MdOutlineWhatsapp } from "react-icons/md";

const ChatSystemIcon = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const pageId = "your-messenger-page-id"; // Replace with your actual page ID
  const customMessage = "Hello, I need help";
  const messengerLink = `https://m.me/${pageId}?ref=${encodeURIComponent(customMessage)}`;

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <div className="relative">
        {/* Contact options */}
        <div
          className={`mb-3 flex flex-col-reverse gap-3 transition-all duration-300 ease-in-out ${
            isExpanded ? "block translate-y-0" : "pointer-events-none hidden translate-y-10"
          }`}
        >
          {/* Call icon */}
          <div className="group relative">
            <a
              href="tel:+your-phone-number" // Replace with your actual phone number
              rel="nofollow noopener"
              className={`flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-[#0cea08] text-white transition-colors`}
            >
              <IoCallOutline size={25} />
            </a>
            <span className="absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Call
            </span>
          </div>
          {/* Messenger icon */}
          <div className="group relative">
            <a
              href={messengerLink}
              target="_blank"
              rel="noopener noreferrer"
              className={`flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-blue-500 text-white transition-colors`}
            >
              <FaFacebookMessenger size={25} />
            </a>
            <span className="absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              Facebook Messenger
            </span>
          </div>
          {/* WhatsApp icon */}
          <div className="group relative">
            <a
              href="https://wa.me/your-whatsapp-number?text=Hello%2C%20I%20need%20help" // Replace with your WhatsApp number
              target="_blank"
              className={`flex size-[50px] cursor-pointer items-center justify-center rounded-full bg-green-500 text-white transition-colors`}
              rel="noopener noreferrer"
            >
              <MdOutlineWhatsapp size={25} />
            </a>
            <span className="absolute right-full top-1/2 mr-2 -translate-y-1/2 whitespace-nowrap rounded bg-gray-800 px-2 py-1 text-sm text-white opacity-0 transition-opacity group-hover:opacity-100">
              WhatsApp
            </span>
          </div>
        </div>

        {/* Toggle button */}
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className={`flex size-[50px] items-center justify-center rounded-full  button_gradeint text-white transition-transform duration-300 ease-in-out ${
            isExpanded ? "rotate-45" : "rotate-0"
          }`}
        >
          {isExpanded ? (
            <IoCloseSharp size={25} />
          ) : (
            <MdOutlineChat size={25} />
          )}
        </button>
      </div>
    </div>
  );
};

export default ChatSystemIcon;
