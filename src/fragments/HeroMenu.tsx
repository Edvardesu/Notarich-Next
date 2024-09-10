import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroMenu = () => {
  return (
    <div className="w-full -mt-40 xs:pt-20 lg:pt-36 xs:pb-20 lg:pb-96 bg-heromenu-pattern">
      <div className="flex flex-row w-full bg-opacity-80">
        <div className="xs:w-7/8 lg:w-3/4 flex flex-col">
          <div className="pt-20 lg:pl-28 xs:px-9">
            <div className="text-black font-semibold xs:text-5xl lg:text-7xl">
              <p className="xs:hidden lg:flex">
                Begin your day with<br></br>a perfect cup of coffee
              </p>
              <p className="xs:flex lg:hidden">
                Begin your day with a perfect cup of coffee
              </p>
            </div>
            <div className="text-black xs:text-2xl lg:text-3xl mt-8">
              <p>
                Setting a positive tone with its comforting warmth and
                invigorating flavor
              </p>
            </div>
            <div className="flex xs:flex-col lg:flex-row mt-12 xs:space-y-4 lg:space-y-0">
              <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 xs:px-6 lg:px-8">
                <Image
                  src="/table.png"
                  alt=""
                  width={22}
                  height={22}
                  className="lg:mt-1 lg:w-6 xs:w-8"
                />
                <p className="ml-4">Order Online</p>
              </button>
              <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] bg-opacity-50 border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 xs:px-9 lg:px-11 lg:ml-8">
                <p className="lg:ml-4">See more menu</p>
              </button>
            </div>
          </div>
        </div>
        <div className="xs:w-1/8  lg:w-1/4 lg:flex lg:flex-col xs:mr-16 lg:mr-40 xs:hidden">
          <div className="mt-20">
            <Image
              src="/frappu-transparent.png"
              alt=""
              width={300}
              height={300}
              className=""
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroMenu;
