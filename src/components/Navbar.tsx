import React, { useState } from "react";
import Menu from "./Menu";
import Link from "next/link";
import CartIcon from "./CartIcon";
import Image from "next/image";
import UserLinks from "./UserLinks";

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
          className="h-40 w-40 object-cover"
          src="/logo-notarich-transparent.png"
          width={2304}
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
        <div className="hidden lg:flex text-2xl font-normal text-end">
          <Link href="/" className="hover:text-yellow-300 mr-20">
            About us
          </Link>
          <Link href="/menu/all" className="hover:text-yellow-300 mr-20">
            Menu
          </Link>
          <Link href="/booking" className="hover:text-yellow-300 mr-20">
            Booking
          </Link>
          <UserLinks />
          <CartIcon />
        </div>

        {/* Dropdown menu for small screens */}
        {isDropdownOpen && (
          <div className="absolute top-16 right-0 w-full bg-white shadow-lg lg:hidden">
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
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
