"use client";
import React, { Fragment, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Bookinge from "./Bookinge";

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
            kursis: [{ title: "1_1", lantai: "1" }],
            tanggalWaktu: new Date().toISOString(),
            durasi: 120,
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
    <div className="flex w-full">
      <Fragment>
        <div className="flex flex-initial justify-center items-center font-jakarta_sans">
          <div className="flex flex-col">
            <div className="flex flex-row items-center w-full -mt-32 mb-60 pt-48 bg-heromenu-pattern">
              <div className="flex flex-col mx-20 -mb-64">
                <div className="w-full text-left mb-20 ml-12">
                  <p className="text-7xl font-normal text-black px-12">
                    Reserve your table today!
                  </p>
                  <button
                    onClick={handleCheckout}
                    className="bg-orange-400 px-2 py-1"
                  >
                    Confirm Reservation
                  </button>
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
