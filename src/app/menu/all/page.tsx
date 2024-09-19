import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import CardMenuAll from "./CardMenuAll";
import HeroMenu from "@/fragments/HeroMenu";
import PopularMenuItems from "../PopularMenuItems";
import { prisma } from "@/utils/connect";
import { Product } from "@prisma/client";

// const getData = async () => {
//   const res = await fetch("http://localhost:3000/api/products", {
//     cache: "no-store",
//   });

//   if (!res.ok) {
//     throw new Error("Failed!");
//   }

//   return res.json();
// };

const getData = async (searchParams: any) => {
  try {
    const products = await prisma.product.findMany({
      where: {
        ...(searchParams ? { catSlug: searchParams } : {}),
      },
    });

    return products;
  } catch (err) {
    return [];
  }
};

const AllMenuPage = async ({ searchParams }: { searchParams: any }) => {
  const params = searchParams;
  const products: Product[] = await getData(params.cat);
  return (
    <>
      <HeroMenu />
      <div className="relative justify-between h-full flex flex-col mb-12">
        <div className="flex flex-col sm:px-6 lg:px-20 -mt-80 xs:mt-10 xs:ml-6 lg:-mt-80 xs:pb-10 lg:pb-40">
          <div className=" flex flex-row xs:mb-4 lg:ml-28 sm:px-20 lg:px-28 lg:mb-20 ">
            <p className="xs:text-2xl lg:text-3xl font-extrabold  lg:mb-10 text-black">
              Our Popular Menu
            </p>
            <Image
              src="/stars.png"
              alt="stars"
              width={87}
              height={87}
              className="ml-4 lg:-mt-8 lg:mb-8 xs:w-10 xs:h-10 lg:w-20 lg:h-20 "
            />
          </div>
          <div className="lg:mx-auto h-96 sm:px-6 lg:px-10 lg:bg-[#212121] rounded-3xl">
            <PopularMenuItems />
          </div>
        </div>
      </div>

      <div className="flex flex-col w-full sm:px-6 lg:px-28 lg:mb-20 justify-left ">
        <p className="xs:text-2xl lg:text-4xl text-black font-extrabold pl-6 xs:mb-4">
          Menu
        </p>
        <div className="grid grid-cols-10 xs:gap-40 lg:gap-4 lg:ml-6 lg:mt-6 lg:overflow-hidden whitespace-normal xs:w-full xs:overflow-x-scroll xs:scroll xs:scroll-smooth xs:scrollbar-hide xs:mb-4 lg:mb-12 xs:px-6">
          <Link
            href="/menu/all"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <p className="">All Menus</p>
          </Link>
          <Link
            href="/menu/coffee"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Coffee</h1>
          </Link>
          <Link
            href="/menu/tea"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Tea</h1>
          </Link>
          <Link
            href="/menu/frappe"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Frappe</h1>
          </Link>
          <Link
            href="/menu/juice"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Juice</h1>
          </Link>
          <Link
            href="/menu/milkbased"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Milk Based</h1>
          </Link>
          <Link
            href="/menu/refresher"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Refresher</h1>
          </Link>
          <Link
            href="/menu/mocktail"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Mocktail</h1>
          </Link>
          <Link
            href="/menu/maincourse"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Main Course</h1>
          </Link>
          <Link
            href="/menu/snack"
            className="xs:px-1 lg:px-8 xs:py-1 lg:py-4 rounded-3xl bg-[#FF8A00] text-white lg:w-auto xs:w-36 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 xs:text-lg lg:text-xl text-center"
          >
            <h1 className="">Snack</h1>
          </Link>
        </div>
      </div>
      <div className="w-full sm:px-6 xs:px-5 lg:px-32 grid grid-cols-1  xs:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 xs:gap-3 lg:gap-16 mb-12">
        {products.map((item) => (
          <Link
            className="justify-center items-center"
            href={`/product/${item.id}`}
            key={item.id}
          >
            <CardMenuAll key={item.id}>
              <CardMenuAll.Header image={item.img} />
              <div className="flex flex-col justify-between lg:mt-4 h-full">
                <CardMenuAll.Body
                  name={item.title}
                  description={item.desc}
                  price={item.price}
                ></CardMenuAll.Body>
                <CardMenuAll.Footer
                  price={item.price}
                  id={item.id}
                  // handleAddToCart={handleAddToCart}
                />
              </div>
            </CardMenuAll>
          </Link>
        ))}
      </div>
    </>
  );
};

export default AllMenuPage;
