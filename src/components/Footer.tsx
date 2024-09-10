import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full  flex flex-col bg-hero-pattern xs:rounded-tl-[80px] lg:rounded-tl-[200px] pt-12 pb-10">
      <div className="w-full flex xs:flex-col lg:flex-row mb-10 ">
        <div className="xs:w-full lg:w-1/3 flex flex-col lg:pl-20 xs:mt-4 lg:mt-16 items-center">
          <div className="mb-4 h-28 w-28 overflow-hidden rounded-full">
            <Image
              className="bg-white h-48 w-48 -mt-10 object-cover"
              src="/logo-notarich-transparent.png"
              alt=""
              width={4096}
              height={2304}
            />
          </div>
          <span className="text-white text-3xl font-bruno_ace ">
            Notarich Cafe
          </span>
        </div>
        <div className="xs:w-full lg:w-1/3 lg:hidden xs:flex xs:flex-row xs:gap-4 xs:text-2xl lg:text-3xl justify-center text-[#FF8A00]">
          <a className="mb-6 text-justify" href="/">
            About us
          </a>
          <a className="mb-6 text-justify" href="/menu/all">
            Menu
          </a>
          <a className="mb-6 text-justify" href="/booking">
            Booking
          </a>
        </div>
        <div className="xs:w-full lg:w-1/3 flex flex-col lg:mx-8 xs:justify-center xs:items-center">
          <div className="flex flex-col xs:ml-16 lg:ml-10 text-xl">
            <div className="flex flex-row ">
              <Image
                src="/sun.png"
                alt=""
                width={66}
                height={66}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-6 justify-center">
                <p className=" text-white ">Monday - Sunday</p>
                <p className="-mt-1 mb-4 text-white">10.00 AM - 10.00 PM</p>
              </div>
            </div>
            <div className="flex flex-row mt-2">
              <Image
                src="/pin.png"
                alt=""
                width={57}
                height={80}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-10 xs:mr-20 lg:mr-48 text-justify">
                <p className=" text-white leading-none">
                  Jl. Mejobo Perum Kompleks Nojorono No.2c, Megawonbaru, Mlati
                  Norowito, Kec. Kota Kudus, Kabupaten Kudus, Jawa Tengah 59319
                </p>
              </div>
            </div>
            <div className="flex flex-row mt-4">
              <Image
                src="/tilpun.png"
                alt=""
                width={66}
                height={66}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-6 justify-center">
                <p className=" text-white ">088221738878</p>
              </div>
            </div>
            <div className="flex flex-row mt-8 ">
              <Image
                src="/ig.png"
                alt=""
                width={73}
                height={73}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-6  justify-center">
                <p className=" text-white ">@notarich.co</p>
              </div>
            </div>
          </div>
        </div>
        <div className="xs:w-full lg:w-1/3 xs:hidden lg:flex lg:flex-col xs:text-2xl lg:text-3xl text-[#FF8A00]">
          <a className="mb-6 text-justify" href="/">
            About us
          </a>
          <a className="mb-6 text-justify" href="/menu/all">
            Menu
          </a>
          <a className="mb-6 text-justify" href="/booking">
            Booking
          </a>
        </div>
      </div>
      <div className="w-full text-white text-center text-lg font-light ">
        <p>2024 | Notarich Cafe. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
