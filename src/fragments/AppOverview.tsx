import { useState } from "react";
import Image from "next/image";

const AppOverview = () => {
  return (
    <div className="h-full flex flex-col justify-between py-16 ">
      <div className="flex flex-row w-full">
        <div className="w-1/2 mt-20 px-20 max-w-max ">
          <Image
            src="/cafene.jpg"
            alt=""
            height={393.19}
            width={536}
            className="object-cover h-[393.19px] w-[536px] rounded-3xl"
          />
        </div>
        <div className="w-1/2 flex flex-col mt-10 text-black pl-20">
          <div className="flex flex-row">
            <p className="text-5xl font-semibold text-justify mb-10 text-black">
              About&nbsp;
            </p>
            <p className="text-5xl font-semibold text-justify mb-10 text-[#FF8A00] underline underline-offset-4">
              Us
            </p>
          </div>
          <p className="text-2xl mb-16 text-justify font-normal">
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
      <div className="flex flex-col w-full sm:px-6 lg:px-20 mt-40 pt-20 pb-40 bg-try-howtomake">
        <div className="flex flex-row">
          <p className="text-5xl font-semibold text-justify mb-10 text-black">
            How to make a&nbsp;
          </p>
          <p className="text-5xl font-semibold text-justify mb-10 text-[#FF8A00] underline underline-offset-4">
            Reservation
          </p>
        </div>
        <div className="w-full grid grid-cols-4 gap-16 px-40">
          <div className="flex flex-col text-center">
            <div className="bg-[#212121]  rounded-xl">
              <Image width={500} height={500} src="/booking.png" alt="" />
            </div>
            <p className="text-xl mt-4">Pilih meja yang ingin Anda pesan</p>
          </div>
          <div className="flex flex-col text-center">
            <div className="bg-[#212121] rounded-xl">
              <Image width={290} height={290} src="/pesen.png" alt="" />
            </div>
            <p className="text-xl mt-4">
              Anda juga dapat sekaligus memesan menu
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="bg-[#212121] rounded-xl">
              <Image width={500} height={500} src="/payonline.png" alt="" />
            </div>
            <p className="text-xl mt-4">
              Bayar dengan dompet digital kesayangan Anda
            </p>
          </div>
          <div className="flex flex-col text-center">
            <div className="bg-[#212121] ounded-xl">
              <Image width={260} height={260} src="/servis.png" alt="" />
            </div>
            <p className="text-xl mt-4">Enjoy your service!</p>
          </div>
        </div>
      </div>
      <div className="harus-mid w-full bg-[#1F1F1F] flex justify-center items-center px-20 pt-40 pb-40">
        <div className="grid grid-cols-3 gap-16">
          <Image
            src="/gambar-kiri.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-2xl border-8 border-white"
          ></Image>
          <Image
            src="/gambar-tengah.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-2xl border-8 border-white"
          ></Image>
          <Image
            src="/gambar-kanan.jpg"
            alt=""
            width={100}
            height={100}
            className="rounded-2xl border-8 border-white"
          ></Image>
        </div>
      </div>
      <div className="flex flex-col w-full sm:px-6 lg:px-20 mt-20 items-center">
        <div className="flex flex-row mt-10 px-20 font-normal">
          <p className="text-5xl text-center mb-10 text-black">Apa&nbsp;</p>
          <p className="text-5xl text-center mb-10 text-black">kata&nbsp;</p>
          <p className="text-5xl text-center mb-10 text-black">mereka?</p>
        </div>
        <div className="grid grid-cols-3 gap-12">
          <div className="px-10 pt-20 pb-8 rounded-2xl border-2 ">
            <p className="text-xl px-8">
              Cocok untuk bawa anak. Selama bocil merasa nyaman, akan menjadi
              tempat rujukan acara keluarga. Moga sering ada promo dan live
              music
            </p>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image
                  alt=""
                  src="/wisnu.png"
                  width={100}
                  height={100}
                  className=""
                />
                <p className="ml-4 mt-4 font-bold">Wisnu Issantoso</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">sebulan lalu</p>
              </div>
            </div>
          </div>
          <div className="px-10 pt-20 pb-8 rounded-2xl border-2">
            <p className="text-xl">
              Sudah dua kali saya menjajal tempat makan di sudut kota ini,
              makanan yang disajikan tidak kalah dengan resto di kota2 besar,
              dengan porsi yang besar dan rasa yang pas membuat resto ini
              memiliki daya tarik tersendiri, di tambah pramusaji yang ramah,
              tempat yang sangat well menurut saya
            </p>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image src="/fajar.png" alt="" width={100} height={100} className="" />
                <p className="ml-4 mt-4 font-bold">Fajar Apit Kurniawan</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">3 bulan lalu</p>
              </div>
            </div>
          </div>
          <div className="px-10 pt-20 pb-8 rounded-2xl border-2">
            <p className="text-xl">
              Suasana bagus, Barista Ramah harga bersahabat, snack dan coffee
              rasanya enak
            </p>
            <div className="w-full flex flex-row mt-12 ">
              <div className="w-3/4 flex flex-row ">
                <Image src="/ilham.png" alt="" width={100} height={100} className="" />
                <p className="ml-4 mt-4 font-bold">Ilham Hamdani</p>
              </div>
              <div className="w-1/4 text-end">
                <p className="mt-4 text-gray-400">6 bulan lalu</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppOverview;
