import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <div className="w-full flex flex-col bg-hero-pattern rounded-tl-[200px] pt-12 pb-4">
      <div className="flex flex-row mb-10">
        <div className="w-1/2 flex flex-col pl-20 mt-16 items-center">
          <div className="mb-4 h-40 w-40 overflow-hidden rounded-full">
            <Image
              // className="bg-white h-64 w-64 -mt-12 object-cover"
              src="/logo-notarich-transparent.png"
              alt=""
              width={64}
              height={64}
            />
          </div>
          <span className="text-white text-3xl font-bruno_ace ">
            Notarich Cafe
          </span>
        </div>
        <div className="w-1/2 flex flex-col mx-8">
          <div className="text-xl">
            <div className="flex flex-row">
              <Image
                src="/sun.png"
                alt=""
                width={12}
                height={12}
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
                width={12}
                height={12}
              />
              <div className="flex flex-col ml-10 mr-48 justify-center">
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
                width={12}
                height={12}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-6 justify-center">
                <p className=" text-white ">088221738878</p>
              </div>
            </div>
            <div className="flex flex-row mt-8">
              <Image
                src="/ig.png"
                alt=""
                width={12}
                height={12}
                className="w-12 h-12"
              />
              <div className="flex flex-col ml-6  justify-center">
                <p className=" text-white ">@notarich.co</p>
              </div>
            </div>
          </div>
        </div>

        <div className="flex flex-col w-1/2 text-3xl text-[#FF8A00]">
          <a className="mb-6 text-justify" href="/">
            About us
          </a>
          <a className="mb-6 text-justify" href="/menuPage">
            Menu
          </a>
          <a className="mb-6 text-justify" href="/bookingPage">
            Booking
          </a>
        </div>
      </div>
      <div className="w-full text-white text-center text-lg font-light">
        <p>2024 | Notarich Cafe. All right reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
