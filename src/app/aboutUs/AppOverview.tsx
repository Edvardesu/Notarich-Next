import { useState } from "react";
import Image from "next/image";

const AppOverview = () => {
  const slideLeft = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft - 500;
  };

  const slideRight = () => {
    var slider = document.getElementById("slider");
    slider!.scrollLeft = slider!.scrollLeft + 500;
  };

  return (
    <div className="h-full flex flex-col justify-between xs:pt-8 lg:pt-0 lg:py-16">
      <div className="flex xs:flex-col lg:flex-row w-full lg:items-start xs:items-center">
        <div className="flex flex-row bg-[#212121] text-white py-3 px-6 mb-6 rounded-xl lg:hidden">
          <Image
            src="/jam.png"
            alt=""
            width={108}
            height={101}
            className="w-10 h-10"
          />
          <div className="flex flex-col ml-2">
            <p>Open Hours</p>
            <p>Monday - Sunday : 10.00 AM - 10.00 PM</p>
          </div>
        </div>
        <p className="lg:hidden text-4xl font-semibold">About Us</p>
        <div className="lg:w-1/2 xs:mt-6 lg:mt-20 lg:px-20 lg:max-w-max xs:items-center xs:justify-center xs:text-center ">
          <Image
            src="/cafene.jpg"
            alt=""
            height={3024}
            width={4023}
            className="object-cover xs:w-96 xs:h-64 lg:h-[393.19px] lg:w-[536px] rounded-3xl"
          />
        </div>
        <div className="lg:w-1/2 flex flex-col xs:mt-6 lg:mt-10 text-black xs:px-8 lg:pl-20 ">
          <div className="lg:flex lg:flex-row xs:justify-center xs:hidden lg:mb-10">
            <p className="xs:text-7xl lg:text-5xl font-semibold text-justify  text-black">
              About&nbsp;
            </p>
            <p className="xs:text-7xl lg:text-5xl font-semibold text-justify  xs:text-black lg:text-[#FF8A00] lg:underline xs:underline-offset-0 lg:underline-offset-4">
              Us
            </p>
          </div>
          <p className="xs:text-base lg:text-2xl lg:mb-16 text-justify font-normal">
            Notarich Coffee, berdiri sejak 2005, adalah pionir dalam industri
            kopi Indonesia yang dikenal karena komitmennya terhadap kualitas dan
            inovasi. Dengan biji kopi pilihan dari berbagai daerah di Indonesia
            dan proses roasting yang teliti, perusahaan ini menawarkan
            pengalaman minum kopi yang luar biasa. Notarich Coffee juga
            berdampak positif pada kesejahteraan petani lokal dengan memastikan
            praktik pertanian yang berkelanjutan. Produk-produk berkualitas
            tinggi mereka telah dikenal oleh pecinta kopi di dalam negeri maupun
            mancanegara.{" "}
          </p>
        </div>
      </div>
      <div className="flex flex-col w-full sm:px-6 lg:px-20 lg:mt-40 xs:pt-10 lg:pt-20 lg:pb-40 bg-try-howtomake ">
        <div className="flex flex-row xs:justify-center lg:ml-6 xs:font-medium lg:font-semibold text-justify mb-10 xs:text-2xl lg:text-5xl">
          <p className=" text-black">How to make a&nbsp;</p>
          <p className=" text-[#FF8A00] underline underline-offset-4">
            Reservation
          </p>
        </div>
        <div className="w-full xs:flex xs:flex-col lg:grid lg:grid-cols-4 lg:gap-16 lg:px-20">
          <div className="flex flex-col text-center items-center xs:mb-4 lg:mb-0">
            <div className="bg-[#212121] flex rounded-3xl xs:w-60 xs:h-40 lg:w-96 lg:h-80">
              <Image width={802} height={672} src="/booking.png" alt="" />
            </div>
            <p className="xs:text-lg lg:text-xl xs:my-4 lg:my-6 xs:w-96">
              Pilih meja yang ingin Anda pesan
            </p>
          </div>
          <div className="flex flex-col text-center items-center xs:mb-4 lg:mb-0">
            <div className="bg-[#212121] flex rounded-3xl xs:w-60 xs:h-40 lg:w-96 lg:h-80">
              <Image width={648} height={631} src="/pesen.png" alt="" />
            </div>
            <p className="xs:text-lg lg:text-xl xs:my-4 lg:my-6 xs:w-96">
              Anda juga dapat sekaligus memesan menu
            </p>
          </div>
          <div className="flex flex-col text-center items-center xs:mb-4 lg:mb-0">
            <div className="bg-[#212121] flex rounded-3xl xs:w-60 xs:h-40 lg:w-96 lg:h-80">
              <Image width={820} height={592} src="/payonline.png" alt="" />
            </div>
            <p className="xs:text-lg lg:text-xl xs:my-4 lg:my-6 xs:w-96">
              Bayar dengan dompet digital kesayangan Anda
            </p>
          </div>
          <div className="flex flex-col text-center items-center xs:mb-4 lg:mb-0">
            <div className="bg-[#212121] flex rounded-3xl xs:w-60 xs:h-40 lg:w-96 lg:h-80">
              <Image width={532} height={572} src="/servis.png" alt="" />
            </div>
            <p className="xs:text-lg lg:text-xl xs:my-4 lg:my-6 xs:w-96">
              Enjoy your service!
            </p>
          </div>
        </div>
      </div>
      <div className="harus-mid w-full bg-[#1F1F1F] lg:flex justify-center items-center px-20 pt-40 pb-40 xs:hidden">
        <div className="grid grid-cols-3 gap-16">
          <Image
            src="/gambar-kiri.jpg"
            alt=""
            width={3024}
            height={4032}
            className="rounded-2xl border-8 border-white"
          ></Image>
          <Image
            src="/gambar-tengah.jpg"
            alt=""
            width={3024}
            height={4032}
            className="rounded-2xl border-8 border-white"
          ></Image>
          <Image
            src="/gambar-kanan.jpg"
            alt=""
            width={960}
            height={1280}
            className="rounded-2xl border-8 border-white"
          ></Image>
        </div>
      </div>
      {/* REVIEW SECTION */}
      <div className="flex flex-col w-full sm:px-6 lg:px-20 xs:mt-8 lg:mt-20 xs:relative xs:flex items-center xs:px-8">
        <div className="flex flex-row lg:mt-10 lg:px-20 font-normal">
          <p className="xs:text-3xl lg:text-5xl text-center mb-10 text-black">
            Apa kata mereka?
          </p>
        </div>
        <div className="grid grid-cols-3 lg:gap-12 xs:gap-[540px] lg:overflow-hidden whitespace-normal xs:w-full xs:h-full xs:overflow-x-scroll xs:scroll xs:scroll-smooth xs:scrollbar-hide xs:mb-12">
          <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-[500px] xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300">
            <div className="xs:w-full lg:w-full">
              <p className="text-xl px-8 text-justify">
                Cocok untuk bawa anak. Selama bocil merasa nyaman, akan menjadi
                tempat rujukan acara keluarga. Moga sering ada promo dan live
                music
              </p>
            </div>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image
                  alt=""
                  src="/wisnu.png"
                  width={60}
                  height={60}
                  className=""
                />
                <p className="ml-4 mt-4 font-bold">Wisnu Issantoso</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">sebulan lalu</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-[500px] xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300">
            <p className="text-xl px-8 text-justify">
              Sudah dua kali saya menjajal tempat makan di sudut kota ini,
              makanan yang disajikan tidak kalah dengan resto di kota2 besar,
              dengan porsi yang besar dan rasa yang pas membuat resto ini
              memiliki daya tarik tersendiri, di tambah pramusaji yang ramah,
              tempat yang sangat well menurut saya
            </p>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image
                  src="/fajar.png"
                  alt=""
                  width={60}
                  height={60}
                  className=""
                />
                <p className="ml-4 mt-4 font-bold">Fajar Apit Kurniawan</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">3 bulan lalu</p>
              </div>
            </div>
          </div>
          <div className="lg:flex lg:flex-col lg:w-full xs:px-6 lg:px-10 xs:pt-8 lg:pt-20 lg:pb-8 rounded-2xl border-2 xs:w-[500px] xs:h-96 lg:h-96 xs:inline-block xs:cursor-pointer xs:hover:scale-105 xs:ease-in-out xs:duration-300">
            <p className="text-xl px-8 text-justify">
              Suasana bagus, Barista Ramah harga bersahabat, snack dan coffee
              rasanya enak
            </p>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image
                  src="/ilham.png"
                  alt=""
                  width={60}
                  height={60}
                  className=""
                />
                <p className="ml-4 mt-4 font-bold">Ilham Hamdani</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">6 bulan lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* END REVIEW SECTION */}
    </div>
  );
};

export default AppOverview;
