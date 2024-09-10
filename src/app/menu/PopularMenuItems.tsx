import Image from "next/image";
import React from "react";

const PopularMenuItems = () => {
  return (
    <div className="grid grid-cols-3 xs:gap-80 lg:space-x-0 lg:gap-20 lg:-mt-16 lg:overflow-hidden whitespace-normal xs:w-full xs:overflow-x-scroll xs:scroll xs:scroll-smooth xs:scrollbar-hide">
      <div className="lg:flex lg:flex-col lg:w-full border-2 xs:w-72 xs:h-full xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 rounded-3xl shadow-xl overflow-hidden xs:px-4 lg:px-6 xs:py-6 lg:pt-8 bg-white">
        <Image
          className="w-full h-32 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col mt-4 h-full">
          <div>
            <div className="flex flex-row w-full xs:text-2xl lg:text-3xl xs:font-bold lg:font-normal">
              <h2 className="w-3/4">Caffe Latte</h2>
              <p className="w-1/4 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 xs:text-lg lg:text-xl xs:mt-4 lg:mt-0 xs:w-full lg:w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="xs:mt-12 lg:mt-28 bg-white">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 xs:px-2 lg:px-4 rounded-[40px] xs:text-lg lg:text-xl">
              <p>Masukkan ke Keranjang</p>
              <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:w-full border-2 xs:w-72 xs:h-full xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 rounded-3xl shadow-xl overflow-hidden xs:px-4 lg:px-6 xs:py-6 lg:pt-8 bg-white ">
        <Image
          className="w-full h-32 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col mt-4 h-full">
          <div>
            <div className="flex flex-row w-full xs:text-2xl lg:text-3xl xs:font-bold lg:font-normal">
              <h2 className="w-3/4">Caffe Latte</h2>
              <p className="w-1/4 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 xs:text-lg lg:text-xl xs:mt-4 lg:mt-0 xs:w-full lg:w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="xs:mt-12 lg:mt-28 bg-white">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 xs:px-2 lg:px-4 rounded-[40px] xs:text-lg lg:text-xl">
              <p>Masukkan ke Keranjang</p>
              <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="lg:flex lg:flex-col lg:w-full border-2 xs:w-72 xs:h-full xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 rounded-3xl shadow-xl overflow-hidden xs:px-4 lg:px-6 xs:py-6 lg:pt-8 bg-white ">
        <Image
          className="w-full h-32 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col mt-4 h-full">
          <div>
            <div className="flex flex-row w-full xs:text-2xl lg:text-3xl xs:font-bold lg:font-normal">
              <h2 className="w-3/4">Caffe Latte</h2>
              <p className="w-1/4 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 xs:text-lg lg:text-xl xs:mt-4 lg:mt-0 xs:w-full lg:w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="xs:mt-12 lg:mt-28 bg-white">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 xs:px-2 lg:px-4 rounded-[40px] xs:text-lg lg:text-xl">
              <p>Masukkan ke Keranjang</p>
              <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMenuItems;
