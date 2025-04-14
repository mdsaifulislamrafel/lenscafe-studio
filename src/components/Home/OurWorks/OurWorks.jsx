import React from 'react';
import WorkCard from './WorkCard'; // Adjust the import path based on your project structure
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom'; // Use react-router-dom for navigation in plain React

const works = [
  {
    title: "Agency Website Design",
    category: "Web Development",
    image: "/images/web_development.png",
  },
  {
    title: "Timing Application",
    category: "App Development",
    image: "/images/app_development.png",
  },
  {
    title: "Ecommerce Bag",
    category: "Product Photography",
    image: "/images/product_photoSoot.png",
  },
  {
    title: "Illustration Art",
    category: "Graphics Design",
    image: "/images/graphics_design.png",
  },
  {
    title: "Music song Video",
    category: "Video Editing",
    image: "/images/video_editing.png",
  },
];

const OurWorks = () => {
  return (
    <section className="py-16 px-4 our-works">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-white mb-12 text-center">
          Our Works
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-12">
          {works.map((work, idx) => (
            <WorkCard key={idx} work={work} />
          ))}
          <div className="flex justify-center items-center">
            <Link to="/work">
              <button className="button_style mx-auto md:mx-0">
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

export default OurWorks;
