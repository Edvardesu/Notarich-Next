import Image from "next/image";
import Link from "next/link";
import React from "react";

const Sidebar = () => {
  return (
    <div className="fixed top-0 left-0 w-64 h-full bg-[#212121] shadow-lg">
      <div className="flex flex-col items-center justify-center  ">
        <div className="my-4 h-32 w-32 overflow-hidden rounded-full">
          <Image
            className="bg-white h-48 w-48 -mt-8 object-cover"
            src="/logo-notarich-transparent.png"
            height={4096}
            width={2304}
            alt="Logo"
          ></Image>
        </div>
        <div className="mb-8">
          <span className="font-bruno_ace text-white text-2xl tracking-tight">
            Notarich Cafe
          </span>
          <p className="text-white text-center mt-2">Welcome, admin123</p>
        </div>
        <div className="py-6 mb-2 bg-[#FBDE88] w-full text-center bg-opacity-30">
          <p className="text-white text-xl">Databases</p>
        </div>
      </div>
      <ul className="flex flex-col">
        <Link
          href="/kasirPengunjung"
          className="text-[#FFFFFF] text-md leading-10 mx-6 py-1 hover:bg-black cursor-pointer "
        >
          Data Pengunjung
        </Link>
        <Link
          href="/kasirMenu"
          className="text-[#FFFFFF] text-md leading-10 mx-6 py-1 hover:bg-black cursor-pointer border-y-2 border-neutral-700"
        >
          Menu
        </Link>
        <Link
          href="/kasirPesanan"
          className="text-[#FFFFFF] text-md leading-10 mx-6 py-1 hover:bg-black cursor-pointer"
        >
          Pesanan
        </Link>
        <Link
          href="/kasirHistoryPesanan"
          className="text-[#FFFFFF] text-md leading-10 mx-6 py-1 hover:bg-black cursor-pointer"
        >
          History Pesanan
        </Link>
      </ul>
    </div>
  );
};

export default Sidebar;
