import HeroMenu from "@/fragments/HeroMenu";
import { MenuType } from "@/types/types";
import Link from "next/link";
import React, { Fragment, useState } from "react";
import Image from "next/image";
import ButtonComponent from "./ButtonComponent";
import Bookinge from "./Bookinge";

const getData = async () => {
  const res = await fetch("http://localhost:3000/api/categories", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

const BookingPage = async () => {
  const menu: MenuType = await getData();

  return (
    <div className="flex w-full ">
      <Fragment>
        <div className="flex flex-initial justify-center items-center font-jakarta_sans">
          <div className="flex flex-col">
            <div className="flex flex-row items-center w-full -mt-32 mb-60 pt-48 bg-heromenu-pattern">
              <div className="flex flex-col mx-20 -mb-64">
                <div className="w-full text-left mb-20 ml-12">
                  <p className="text-7xl font-normal text-black px-12">
                    Reserve your table today!
                  </p>
                </div>
                <div className="w-full grid grid-cols-4 px-12">
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#212121] rounded-xl p-4">
                      <Image
                        src="/booking.png"
                        alt="Booking"
                        height={300}
                        width={300}
                      />
                    </div>
                    <p className="text-2xl mt-4 px-20">
                      Pilih meja yang ingin Anda pesan
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#212121] rounded-xl p-4">
                      <Image
                        src="/pesen.png"
                        alt="Pesen"
                        height={300}
                        width={300}
                      />
                    </div>
                    <p className="text-2xl mt-4 px-20">
                      Anda juga dapat sekaligus memesan menu
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#212121] rounded-xl p-4">
                      <Image
                        src="/payonline.png"
                        alt="Pay Online"
                        height={300}
                        width={300}
                      />
                    </div>
                    <p className="text-2xl mt-4 px-20">
                      Bayar dengan dompet digital kesayangan Anda
                    </p>
                  </div>
                  <div className="flex flex-col items-center text-center">
                    <div className="bg-[#212121] rounded-xl p-4">
                      <Image
                        src="/servis.png"
                        alt="Service"
                        height={300}
                        width={300}
                      />
                    </div>
                    <p className="text-2xl mt-4 px-20">Enjoy your service!</p>
                  </div>
                </div>
              </div>
            </div>
            <Bookinge />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default BookingPage;
