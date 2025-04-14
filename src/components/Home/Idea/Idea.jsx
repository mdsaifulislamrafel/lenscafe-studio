/* eslint-disable no-irregular-whitespace */
import { ArrowRight } from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Idea = () => {
  const location = useLocation();
  const path = location.pathname;

  return (
    <section className="py-16 md:py-[100px] idea_section_bg px-4">
      <div className="container mx-auto space-y-10">
        <h1 className="text-[#1B1A19] font-bold text-2xl md:text-3xl lg:text-4xl xl:text-[48px] text-center md:text-start xl:leading-[60px]">
          We Provide Brilliant Idea to Grow Business With Sharing Your Brand
        </h1>
        <div
          className={`flex flex-col md:flex-row gap-20 ${
            path === "/about-us" ? "" : "items-center"
          }`}
        >
          <div className="md:w-[500px] *:text-center *:md:text-start">
            <h1 className="text-[#FF2525] font-bold text-5xl lg:text-[80px]">
              25M
            </h1>
            <p className="font-bold py-3">
              Wa helped to get companies with S25M+ funding
            </p>
          </div>
          <div className="space-y-6 *:text-center *:md:text-start">
            <p className="text-[#524E4C]">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book.
            </p>
            <Link to="/about-us" className="inline-block">
              <button
                className={`button_style mx-auto md:mx-0 ${
                  path === "/about-us" ? "hidden" : ""
                }`}
              >
                Explore More Us{" "}
                <div className="button_icon size-[20px] button_icon rounded-full bg-white text-black flex justify-center items-center duration-500">
                  <ArrowRight size={15} />
                </div>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Idea;
