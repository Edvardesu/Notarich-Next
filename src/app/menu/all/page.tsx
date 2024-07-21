import { ProductType } from "@/types/types";
import Image from "next/image";
import Link from "next/link";
import React, { Fragment } from "react";
import CardMenuAll from "./CardMenuAll";
import HeroMenu from "@/fragments/HeroMenu";
import PopularMenuItems from "../PopularMenuItems";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/products", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const AllMenuPage = async () => {
  const products: ProductType[] = await getData();
  return (
    <div className="flex flex-col w-full">
      <Fragment>
        <div className="flex flex-initial justify-center items-center font-jakarta_sans">
          <div className="flex flex-col">
            <HeroMenu />
            <div className="relative h-full flex flex-col justify-between mb-12">
              <div className="flex flex-col w-full sm:px-6 lg:px-20 -mt-80 pb-40">
                <div className="flex flex-row mb-20 sm:px-6 lg:px-28">
                  <p className="text-3xl font-semibold text-justify mb-10 text-black">
                    Our Popular Menu
                  </p>
                </div>
                <div className="mx-auto h-96 sm:px-6 lg:px-10 bg-[#212121] rounded-3xl">
                  <PopularMenuItems />
                </div>
              </div>
            </div>

            <div className="flex flex-col w-full sm:px-6 lg:px-28 mb-20 justify-left">
              <p className="text-4xl text-black font-semibold pl-6">Menu</p>
              <div className="flex flex-row mt-6 space-x-2 ml-6">
                <Link
                  href="/menu/all"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">All Menus</h1>
                </Link>
                <Link
                  href="/menu/coffee"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Coffee</h1>
                </Link>
                <Link
                  href="/menu/tea"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Tea</h1>
                </Link>
                <Link
                  href="/menu/frappe"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Frappe</h1>
                </Link>
                <Link
                  href="/menu/juice"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Juice</h1>
                </Link>
                <Link
                  href="/menu/milkbased"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Milk Based</h1>
                </Link>
                <Link
                  href="/menu/refresher"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Refresher</h1>
                </Link>
                <Link
                  href="/menu/mocktail"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Mocktail</h1>
                </Link>
                <Link
                  href="/menu/maincourse"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Main Course</h1>
                </Link>
                <Link
                  href="/menu/snack"
                  className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                >
                  <h1 className="">Snack</h1>
                </Link>
              </div>
            </div>
            <div className="w-full sm:px-6 lg:px-32 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
              {products.map((item) => (
                <Link
                  className="justify-center items-center"
                  href={`/product/${item.id}`}
                  key={item.id}
                >
                  <CardMenuAll key={item.id}>
                    <CardMenuAll.Header image={item.img} />
                    <div className="flex flex-col justify-between mt-4 h-full">
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
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default AllMenuPage;
