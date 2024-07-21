import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroMenu = () => {
  return (
    <div className="w-full -mt-40 pt-36 pb-96 bg-heromenu-pattern">
      <div className="flex flex-row w-full bg-opacity-80">
        <div className="w-3/4 flex flex-col">
          <div className="pt-20 pl-28">
            <div className="text-black font-semibold text-7xl">
              Begin your day with<br></br>a perfect cup of coffee
            </div>
            <div className="text-black text-3xl mt-8">
              <p>
                setting a positive tone with its comforting warmth and
                invigorating<br></br>flavor
              </p>
            </div>
            <div className="flex flex-row mt-12">
              <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 px-8">
                <img
                  src="../../../public/table.png"
                  width={22}
                  className="mt-1"
                ></img>
                <p className="ml-4">Order Online</p>
              </button>
              <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] bg-opacity-50 border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 px-11 ml-8">
                <p className="ml-4">See more menu</p>
              </button>
            </div>
          </div>
        </div>
        <div className="w-1/4 flex flex-col mr-40">
          <div className="mt-20">
            <img
              src="../../../public/frappu-transparent.png"
              className=""
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMenu;
