import React from 'react';
import { useLocation } from 'react-router-dom'; // Using react-router-dom to get the current path

const WorkCard = ({ work }) => {
  const location = useLocation(); // Get current path

  return (
    <div>
      <div className="relative h-[350px] xl:h-[450px] rounded-xl overflow-hidden">
        <img
          src={work?.image}
          alt={work?.title}
          className="object-cover hover:scale-110 duration-700"
        />
      </div>
      <div className="space-y-3 pt-4">
        <h3
          className={`${
            location.pathname === "/" ? "text-white" : ""
          } text-xl font-semibold  mb-2`}
        >
          {work?.title}
        </h3>
        <button
          className={`border  ${
            location.pathname === "/work"
              ? "text-[#524E4C] hover:text-white"
              : "text-[#D3D0CE]"
          } border-[#474543] px-3 py-[10px] rounded-md hover:bg-[#474543] duration-500`}
        >
          {work?.category}
        </button>
      </div>
    </div>
  );
};

export default WorkCard;
