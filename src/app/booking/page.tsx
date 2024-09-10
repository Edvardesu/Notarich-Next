"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Bookinge from "./bookinge";

const BookingPage = () => {
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    } else if (status === "authenticated" && session?.user?.isAdmin) {
      router.push("/");
    }
  }, [status, session, router]);

  const handleCheckout = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kursis: [{ title: "2_1", lantai: "1" }],
            tanggalWaktu: new Date().toISOString(),
            durasi: 200,
            statusBooking: "waiting",
            userEmail: session.user.email,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to create booking");
        }

        const data = await res.json();
        console.log("Booking created:", data);
        router.push(`/menu/all`);
      } catch (err) {
        console.error(err);
      }
    }
  };

  return (
    <>
      <div className="flex flex-row items-center -mt-32 xs:mb-10 lg:mb-60 xs:pt-32 lg:pt-48 bg-heromenu-pattern xs:rounded-bl-[60px]">
        <div className="flex flex-col lg:mx-20 lg:-mb-64 xs:relative items-center">
          <div className="w-full text-left mb-20 xs:pl-8 lg:pl-0 lg:ml-12 ">
            <p className="xs:text-4xl lg:text-7xl xs:font-bold lg:font-normal text-black lg:px-12 ">
              Reserve your table today!
            </p>
            {/* <button
              onClick={handleCheckout}
              className="bg-orange-400 px-2 py-1"
            >
              Confirm Reservation
            </button> */}
          </div>
        </div>
      </div>
      <div className="flex flex-row lg:ml-6 xs:font-semibold lg:font-semibold mb-10 xs:text-3xl justify-center lg:text-5xl">
        <p className=" text-black">How to make a&nbsp;</p>
        <p className=" text-[#FF8A00] underline underline-offset-4">
          Reservation
        </p>
      </div>
      <div className="grid grid-cols-4 xs:px-8 lg:px-12 lg:gap-12 xs:gap-96 lg:space-x-0 lg:overflow-hidden whitespace-normal xs:w-full xs:h-full xs:overflow-x-scroll xs:scroll xs:scroll-smooth xs:scrollbar-hide xs:mb-12">
        <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-80 xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 items-center text-center">
          <div className="bg-[#212121] rounded-xl p-4">
            <Image
              src="/booking.png"
              alt="Booking"
              height={300}
              width={300}
              className="h-48"
            />
          </div>
          <p className="text-2xl mt-4 lg:px-20">
            Pilih meja yang ingin Anda pesan
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-80 xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 items-center text-center">
          <div className="bg-[#212121] rounded-xl p-4">
            <Image
              src="/pesen.png"
              alt="Pesen"
              height={300}
              width={300}
              className="h-48"
            />
          </div>
          <p className="text-2xl mt-4 lg:px-20">
            Anda juga dapat sekaligus memesan menu
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-80 xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 items-center text-center">
          <div className="bg-[#212121] rounded-xl p-4">
            <Image
              src="/payonline.png"
              alt="Pay Online"
              height={300}
              width={300}
              className="h-48"
            />
          </div>
          <p className="text-2xl mt-4 lg:px-20">
            Bayar dengan dompet digital kesayangan Anda
          </p>
        </div>
        <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-80 xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300 items-center text-center">
          <div className="bg-[#212121] rounded-xl p-4">
            <Image
              src="/servis.png"
              alt="Service"
              height={300}
              width={300}
              className="h-48"
            />
          </div>
          <p className="text-2xl mt-4 lg:px-20">Enjoy your service!</p>
        </div>
      </div>
      <Bookinge />
    </>
  );
};

export default BookingPage;
