import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import Marquee from "react-fast-marquee";

// type

const banner_slider_data = [
  {
    name: "podcast",
    image: "/images/podcast.png",
  },
  {
    name: "design",
    image: "/images/graphics.png",
  },
  {
    name: "marketing",
    image: "/images/marketing.png",
  },
  {
    name: "photoSoot",
    image: "/images/photoSoot.png",
  },
  {
    name: "podcast",
    image: "/images/podcast.png",
  },
  {
    name: "design",
    image: "/images/graphics.png",
  },
  {
    name: "marketing",
    image: "/images/marketing.png",
  },
  {
    name: "photoSoot",
    image: "/images/photoSoot.png",
  },
];

const Banner = () => {
  return (
    <section className="banner px-4 overflow-hidden pt-28">
      <div className="lg:w-[60%] mx-auto text-center space-y-5 pt-4 lg:pt-2">
        <h1 className="text-2xl md:text-3xl xl:text-5xl 2xl:text-[80px] text-white font-bold">
          Your Ideas Realized for The Real World.
        </h1>
        <p className="text-white text-xs md:text-sm xl:text-[18px]">
          Design & Development Web/Apps/Branding/Illustrations/3DHelping brands
          to stand out in the digital era. Together we will set the new status
          quo. No nonsense,always on the cutting edge.
        </p>
        <Link to="/contact-us" className="inline-block">
          <button className="button_style mx-auto">
            Hire Us{" "}
            <div className="button_icon size-[20px] button_icon rounded-full bg-white text-black flex justify-center items-center duration-500">
              <ArrowRight size={15} />
            </div>
          </button>
        </Link>
      </div>
      {/* image section and slider */}
      <div className="py-6 flex justify-center items-center">
        <Marquee>
          {banner_slider_data?.map((item, idx) => {
            return (
              <div
                key={idx}
                className="size-[90px] md:size-[200px] relative rounded-3xl overflow-hidden m-2 xl:m-4"
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover"
                />
              </div>
            );
          })}
        </Marquee>
      </div>
    </section>
  );
};

export default Banner;
