import HeroMenu from "@/fragments/HeroMenu";
import { MenuType } from "@/types/types";
import Link from "next/link";
import React, { Fragment } from "react";
import PopularMenuItems from "./PopularMenuItems";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const MenuPage = async () => {
  const menu: MenuType = await getData();
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
                {menu.map((category) => (
                  <Link
                    href={`/menu/${category.slug}`}
                    key={category.id}
                    className="px-8 py-2 text-xl rounded-3xl bg-[#FF8A00] text-white"
                  >
                    <h1 className="">{category.title}</h1>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default MenuPage;
  