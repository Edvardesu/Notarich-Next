import Image from "next/image";
import React from "react";

const PopularMenuItems = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-28 -mt-16">
      <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-6 h-full">
        <Image
          className="w-80 h-64 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col justify-between mt-4 h-full">
          <div>
            <div className="flex flex-row w-full text-3xl font-normal">
              <h2 className="w-1/2">Caffe Latte</h2>
              <p className="w-1/2 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 text-xl w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="mt-4">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl">
              <p>Masukkan ke Keranjang</p>
              <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-6 h-full">
        <Image
          className="w-80 h-64 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col justify-between mt-4 h-full">
          <div>
            <div className="flex flex-row w-full text-3xl font-normal">
              <h2 className="w-1/2">Caffe Latte</h2>
              <p className="w-1/2 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 text-xl w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="mt-4">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl">
              <p>Masukkan ke Keranjang</p>
              <p className="bg-yellow-300 rounded-3xl px-2 pb-1">+</p>
            </button>
          </div>
        </div>
      </div>
      <div className="flex flex-col bg-white rounded-3xl shadow-xl overflow-hidden px-6 py-6 h-full">
        <Image
          className="w-80 h-64 object-cover rounded-3xl"
          src="/menu/cafelatte.jpg"
          alt="cafelatte.jpg"
          height={3000}
          width={3000}
        />
        <div className="flex flex-col justify-between mt-4 h-full">
          <div>
            <div className="flex flex-row w-full text-3xl font-normal">
              <h2 className="w-1/2">Caffe Latte</h2>
              <p className="w-1/2 text-[#FF8A00] text-end">22K</p>
            </div>
            <p className="text-gray-600 text-xl w-64">
              Kopi espresso dengan susu panas
            </p>
          </div>
          <div className="mt-4">
            <button className="w-full flex flex-row justify-between bg-[#FF8A00] text-white py-4 px-4 rounded-[40px] text-xl">
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
