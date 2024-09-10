import React from "react";
import Link from "next/link";
import Image from "next/image";

const HeroAboutUs = () => {
  return (
    <div className="w-full -mt-40 xs:pt-20 lg:pt-48 xs:pb-20 lg:pb-48 bg-hero-pattern xs:rounded-bl-[100px] lg:rounded-bl-[200px]">
      <div className="flex flex-row w-full bg-opacity-80">
        <div className="xs:w-5/6 lg:w-3/4 flex flex-col ">
          <div className="pt-16 xs:pl-10 lg:pl-32">
            <div className="text-white xs:font-medium lg:font-semibold xs:text-5xl lg:text-7xl">
              Everyday is a Coffee Day!
            </div>
            <div className="text-white xs:font-light lg:font-light xs:text-lg lg:text-2xl lg:pr-96 xs:mt-4 lg:mt-8">
              <p>
                Boost your productivity and build your mood with a glass of
                coffee at Notarich.
              </p>
            </div>
            <div className="flex xs:flex-col lg:flex-row xs:mt-8 lg:mt-20">
              <Link href={"/booking"}>
                <button className="flex flex-row text-white xs:text-base lg:text-xl font-light bg-[#FF8A00] border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-2 xs:px-5 lg:px-8">
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
              <Link href={"/menu/all"}>
                <button className="flex flex-row text-white xs:text-base lg:text-xl font-light bg-[#FF8A00] bg-opacity-50 border-2 border-[#FF8A00] w-fit h-fit rounded-2xl py-2 xs:px-7 lg:px-11 xs:mt-4 lg:mt-0 lg:ml-8">
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
        <div className="w-1/2 hidden lg:block flex-col">
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
