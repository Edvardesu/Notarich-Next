import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroAboutUs = () => {
  return (
    <div className="w-full -mt-40 pt-48 pb-48 bg-hero-pattern rounded-bl-[200px]">
      <div className="flex flex-row w-full bg-opacity-80">
        <div className="w-3/4 flex flex-col ">
          <div className="pt-20 pl-32">
            <div className="text-white font-semibold text-7xl">
              Everyday is a Coffee Day!
            </div>
            <div className="text-white font-light text-2xl pr-96 mt-8 ">
              <p>
                Boost your productivity and build your mood with a glass of
                coffee at Notarich.
              </p>
            </div>
            <div className="flex flex-row mt-20">
              <Link href={"/booking"}>
                <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 px-8">
                  <Image
                    src="/table.png"
                    alt=""
                    height={22}
                    width={22}
                    className="mt-1"
                  />
                  <p className="ml-4">Booking Table</p>
                </button>
              </Link>
              <Link href={"/menuPage"}>
                <button className="flex flex-row text-white text-xl font-light bg-[#FF8A00] bg-opacity-50 border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-3 px-11 ml-8">
                  <Image
                    src="/bottle.png"
                    alt=""
                    width={12}
                    height={12}
                    className="mt-1"
                  />
                  <p className="ml-4">Order Online</p>
                </button>
              </Link>
            </div>
          </div>
        </div>
        <div className="w-1/2 flex flex-col">
          <div className="mt-40 border-b-2 border-[#FF8A00]">
            <Image src="/coffee.png" width={800} height={800} alt="" />
          </div>
          <div className="text-white text-2xl mt-2">
            <p>Open Hours</p>
            <p>Monday - Sunday : 10.00 AM - 10.00 PM</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroAboutUs;
