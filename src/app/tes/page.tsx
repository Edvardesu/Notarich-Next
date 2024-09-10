import React from "react";
import { data } from "./mockData";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import Image from "next/image";

const Tes = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 500;
  };

  return (
    <div>
      <p>ASU</p>
      
      <div className="relative flex items-center">
        
        <div
          id="slider"
          className="w-full h-full overflow-x-scroll scroll whitespace-nowrap scroll-smooth scrollbar-hide"
        >
          {data.map((item) => (
            <Image
              className="w-[220px] inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300"
              key={item.id}
              width={100}
              height={100}
              src={item.img}
              alt="/"
            />
          ))}
        </div>
        
      </div>
    </div>
  );
};

export default Tes;
