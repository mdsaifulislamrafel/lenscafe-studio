import { useRef, useState } from "react";
import WorkCard from "./WorkCard";
import { ChevronLeft, ChevronRight } from "lucide-react";

const categories = [
  "All",
  "Product Photoshoot",
  "Video Photoshoot",
  "Podcast",
  "Graphics Design",
  "Web Design & Development",
  "App Development",
  "Product Photoshoot",
  "Video Photoshoot",
  "Podcast",
  "Graphics Design",
  "Web Design & Development",
  "App Development",
];

const projectsData = [
  {
    title: "Agency Website Design",
    category: "Web Design & Development",
    image: "/images/web_development.png",
  },
  {
    title: "Agency Website Design",
    category: "Web Design & Development",
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
    category: "Video Photoshoot",
    image: "/images/video_editing.png",
  },
  {
    title: "Music song Video",
    category: "Podcast",
    image: "/images/video_editing.png",
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
    title: "Timing Application",
    category: "Product Photoshoot",
    image: "/images/app_development.png",
  },
];

const OurWork = () => {
  const [activeCategory, setActiveCategory] = useState("All");
  const [worksData, setWorksData] = useState(projectsData);
  const scrollContainerRef = useRef(null);

  const scroll = (direction) => {
    if (scrollContainerRef.current) {
      const scrollAmount = 400;
      const newScrollPosition =
        scrollContainerRef.current.scrollLeft +
        (direction === "left" ? -scrollAmount : scrollAmount);

      scrollContainerRef.current.scrollTo({
        left: newScrollPosition,
        behavior: "smooth",
      });
    }
  };

  const handleFilterByCategory = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setWorksData(projectsData);
    } else {
      const filterData = projectsData.filter(
        (item) => item.category === category
      );
      setWorksData(filterData);
    }
  };

  return (
    <section className="py-16 px-4">
      <div className="container mx-auto space-y-14">
        <div className="flex gap-4 items-center">
          <button
            onClick={() => scroll("left")}
            className="p-2 md:px-4 md:py-2 rounded-md bg-white shadow-md hover:bg-black hover:text-white duration-500"
            aria-label="Scroll left"
          >
            <ChevronLeft size={28} />
          </button>

          <div
            ref={scrollContainerRef}
            className="overflow-auto scrollbar-hide w-full"
          >
            <div className="flex gap-4 py-4 min-w-max">
              {categories.map((item, idx) => (
                <div
                  key={idx}
                  onClick={() => handleFilterByCategory(item)}
                  className="flex items-center rounded-md button_gradeint p-[1px] overflow-hidden"
                >
                  <button
                    className={`${
                      activeCategory === item
                        ? "button_gradeint text-white"
                        : "bg-[#f1f0ee]"
                    } hover:button_gradeint duration-500 w-full h-full hover:text-white font-semibold rounded-md p-2 md:px-4 md:py-2`}
                  >
                    {item}
                  </button>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={() => scroll("right")}
            className="p-2 md:px-4 md:py-2 rounded-md bg-white shadow-md hover:bg-black hover:text-white duration-500"
            aria-label="Scroll right"
          >
            <ChevronRight size={28} />
          </button>
        </div>

        {/* card section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {worksData.map((work, idx) => (
            <WorkCard key={idx} work={work} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurWork;
