import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";
import History from "./History";

const Navbar = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const user = false;

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  return (
    <nav className="flex flex-row z-10 w-full h-32 items-center p-6 sticky top-0 transition-colors duration-300">
      <div className="w-1/2 items-center flex flex-row">
        <Image
          className="h-28 w-28 object-cover"
          src="/logo-notarich-transparent.png"
          width={4096}
          height={2304}
          alt=""
        />
        <span className="font-bruno_ace lg:text-3xl lg:tracking-tight">
          Notarich Cafe
        </span>
      </div>
      <div className="w-1/2 flex justify-end items-center relative">
        {/* Dropdown Button for small screens */}
        <button
          className="block lg:hidden text-2xl font-normal"
          onClick={toggleDropdown}
        >
          ☰
        </button>

        {/* Links for larger screens */}
        <div className="hidden lg:flex text-2xl font-normal text-end gap-20">
          <Link href="/" className="hover:text-yellow-300">
            About us
          </Link>
          <Link href="/menu/all" className="hover:text-yellow-300">
            Menu
          </Link>
          <Link href="/booking" className="hover:text-yellow-300">
            Booking
          </Link>
          <UserLinks />
          <CartIcon />
          <History />
        </div>

        {/* Dropdown menu for small screens */}
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 w-full h-screen text-center text-white bg-[#212121] shadow-lg lg:hidden bg-try-howtomake">
            <Link
              href="/"
              className="block px-4 py-2 text-2xl hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              About us
            </Link>
            <Link
              href="/menu/all"
              className="block px-4 py-2 text-2xl hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Menu
            </Link>
            <Link
              href="/booking"
              className="block px-4 py-2 text-2xl hover:bg-gray-200"
              onClick={toggleDropdown}
            >
              Booking
            </Link>
            <UserLinks />
            <CartIcon />
            <History />
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
