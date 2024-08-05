"use client";
// Bookinge.js
import { useState } from "react";
import Popup from "./Popup.tsx"; // Make sure the path matches where your Popup component is saved
import ButtonComponent from "./ButtonComponent"; // Ensure this path is correct

const Bookinge = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [selectedFloor, setSelectedFloor] = useState("Lantai 1"); // Default to Lantai 1

  const openPopup = () => {
    setIsPopupOpen(true);
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  return (
    <div className="h-full flex flex-col justify-between py-16">
      <div className="flex flex-col w-full sm:px-6 lg:px-20 pt-20">
        <div className="flex flex-row justify-center">
          <p className="text-6xl font-normal text-justify mb-10 text-black">
            Jumlah Pengunjung Hari Ini
          </p>
        </div>
        <div className="w-full px-40">
          <div className="flex flex-col items-center">
            <div className="w-fit bg-[#F5F2E9] rounded-xl text-black font-normal px-14 py-4 shadow-md shadow-neutral-400">
              <p className="text-3xl">1 Pengunjung</p>
            </div>
          </div>
        </div>
      </div>

      {/* Floor Layout Section */}
      <div className="flex flex-col w-full sm:px-6 lg:px-28 mt-40 pb-40">
        <div className="flex flex-col justify-start">
          <p className="text-3xl font-semibold text-justify mb-8 text-black ml-8">
            Pilih Meja Anda
          </p>
          <form className="ml-4 mb-8">
            <label className="px-4">
              <input
                type="radio"
                name="floor"
                value="1"
                checked={selectedFloor === "Lantai 1"}
                onChange={() => setSelectedFloor("Lantai 1")}
                className="checked:bg-[#FF8A00] "
              />{" "}
              Lantai 1
            </label>
            <label className="px-4">
              <input
                type="radio"
                name="floor"
                value="2"
                checked={selectedFloor === "Lantai 2"}
                onChange={() => setSelectedFloor("Lantai 2")}
                className="checked:bg-[#FF8A00]"
              />{" "}
              Lantai 2
            </label>
          </form>
        </div>

        <Popup isOpen={isPopupOpen} closePopup={closePopup} />

        <div className="w-full bg-[#F5F2E9] rounded-3xl ">
          {selectedFloor === "Lantai 1" ? (
            <>
              <div className="flex flex-row px-40 py-28">
                {/* LANTAI 1 SECTION KIRI */}
                <div className="w-1/2 flex flex-col">
                  <div className="flex flex-row">
                    <div className=" bg-[#D9D9D9] px-44 py-2">Tangga</div>
                  </div>
                  <div className="flex flex-row mt-6">
                    <div className=" bg-[#D9D9D9] px-20 py-4">Toilet</div>
                  </div>
                  <div className="flex flex-row mt-10">
                    <div className="flex flex-col justify-center items-center mx-4">
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="1_1"
                          className="w-8 h-20 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">1</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="1_2"
                          className="w-12 h-20 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">2</p>
                        </ButtonComponent>
                        <div className="flex flex-col items-center gap-4">
                          <ButtonComponent
                            id="1_3"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">3</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="1_4"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">4</p>
                          </ButtonComponent>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="1_5"
                          className="w-8 h-20 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">5</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="1_6"
                          className="w-12 h-20 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">6</p>
                        </ButtonComponent>
                        <div className="flex flex-col items-center gap-4">
                          <ButtonComponent
                            id="1_7"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">7</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="1_8"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">8</p>
                          </ButtonComponent>
                        </div>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="1_9"
                          className="w-8 h-20 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">9</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="1_10"
                          className="w-12 h-20 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">10</p>
                        </ButtonComponent>
                        <div className="flex flex-col items-center gap-4">
                          <ButtonComponent
                            id="1_11"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">11</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="1_12"
                            className="w-8 h-8 bg-yellow-500"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">12</p>
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col justify-center items-center mx-4">
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="btn13"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">13</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn14"
                          className="w-12 h-12 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">14</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn15"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">15</p>
                        </ButtonComponent>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="btn16"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">16</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn17"
                          className="w-12 h-12 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">17</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn18"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">18</p>
                        </ButtonComponent>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="btn19"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">19</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn20"
                          className="w-12 h-12 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">20</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn21"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">21</p>
                        </ButtonComponent>
                      </div>
                      <div className="grid grid-cols-3 gap-2 my-2">
                        <ButtonComponent
                          id="btn22"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">22</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn23"
                          className="w-12 h-12 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">23</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn24"
                          className="w-8 h-8 bg-yellow-500 mt-2"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">24</p>
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                  {/* Popup Component */}

                  {/* SECTION BAWAH KIRI */}
                  <div className="flex flex-row mt-10">
                    <div className="flex flex-col gap-2 my-2">
                      <div className="grid grid-cols-6 gap-7">
                        <ButtonComponent
                          id="btn25"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">25</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn26"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">26</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn27"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">27</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn28"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">28</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn29"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">29</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn30"
                          className="w-8 h-8 bg-yellow-500 mx-1"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">30</p>
                        </ButtonComponent>
                      </div>
                      <div className="flex flex-row items-center">
                        <ButtonComponent
                          id="btn31"
                          className="w-96 h-12 bg-gray-800"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-white">31</p>
                        </ButtonComponent>
                      </div>
                      <div className="flex flex-row items-center">
                        <ButtonComponent
                          id="btn32"
                          className="w-96 h-8 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">32</p>
                        </ButtonComponent>
                      </div>
                    </div>
                  </div>
                </div>

                {/* SECTION KANAN */}
                <div className="w-1/2 flex flex-col items-end">
                  <div className="flex flex-row">
                    <div className="px-44 py-2 bg-[#D9D9D9]">Tangga</div>
                  </div>
                  <div className="flex flex-row mt-6 mb-2">
                    <div className="flex flex-col mx-2 gap-16">
                      <ButtonComponent
                        id="btn33"
                        className="w-8 h-8 bg-yellow-500 mx-1"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">33</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn34"
                        className="w-8 h-8 bg-yellow-500 mx-1"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">34</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn35"
                        className="w-8 h-8 bg-yellow-500 mx-1"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">35</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn36"
                        className="w-8 h-8 bg-yellow-500 mx-1"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">36</p>
                      </ButtonComponent>
                    </div>
                    <div className="flex flex-row">
                      <ButtonComponent
                        id="btn37"
                        className="w-10 h-80 bg-[#444243]"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-white">37</p>
                      </ButtonComponent>
                    </div>
                    <div className="flex flex-col items-end">
                      <div className="px-28 py-32 bg-[#D9D9D9]">Kitchen</div>
                      <div className="flex flex-row">
                        <div className="flex flex-col">
                          <ButtonComponent
                            id="btn38"
                            className="w-32 h-10 bg-[#444243]"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">38</p>
                          </ButtonComponent>
                          <div className="flex flex-row gap-8 mt-4">
                            <ButtonComponent
                              id="btn39"
                              className="w-8 h-8 bg-yellow-500 mx-1"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">39</p>
                            </ButtonComponent>
                            <ButtonComponent
                              id="btn40"
                              className="w-8 h-8 bg-yellow-500 mx-1"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">40</p>
                            </ButtonComponent>
                          </div>
                        </div>
                        <div className="px-16 py-32 bg-[#D9D9D9]">Bar</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="flex flex-row justify-between mt-12 px-40">
                <div className="flex justify-center flex-grow">
                  <div className="bg-[#DBAA61] text-center items-center px-24 py-3 ml-52">
                    Pintu
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-center py-3 mx-4">Non Smoking</div>
                  <div className="text-center py-3 mx-4">Full AC</div>
                </div>
              </div>
              <hr className=" bg-[#D9D9D9] border-0 dark:bg-gray-700 h-1 mx-40"></hr>

              <div className="flex flex-col justify-center mt-4 px-40 pb-28">
                <div className="text-center items-center px-24 py-3">
                  Keterangan
                </div>
                <div className="text-center items-center px-24 py-3">
                  <div className="flex flex-row items-center justify-center gap-40">
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#444243] mr-2"></div>
                      <p>Meja Tersedia</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#D02323] mr-2"></div>
                      <p>Meja Tidak Tersedia</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#B17A28] mr-2"></div>
                      <p>Kursi/Sofa</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#FF8A00] mr-2"></div>
                      <p>Pilihanmu</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="w-full h-12 bg-[#444243] rounded-t-3xl"></div>
              <div className="flex flex-row">
                <div className="w-1/2">
                  <div className="flex flex-row">
                    <div className="w-12 h-56 bg-[#444243] mr-10"></div>
                    {/* LANTAI 2 SECTION 1 KIRI */}
                    <div className="flex flex-row mt-6 gap-24 ">
                      <div className="flex flex-col gap-8">
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">1</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500 mt-4"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">2</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">3</p>
                        </ButtonComponent>
                      </div>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">4</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">5</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">6</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">7</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">8</p>
                      </ButtonComponent>
                    </div>
                    {/* END LANTAI 2 SECTION 1 KIRI */}
                  </div>
                </div>
                <div className="w-1/2">
                  <div className="flex flex-row pl-20">
                    {/* LANTAI 2 SECTION 1 KANAN */}
                    <div className="flex flex-row mt-6 gap-24 mr-10">
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">9</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">10</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">11</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">12</p>
                      </ButtonComponent>
                      <ButtonComponent
                        id="btn41"
                        className="w-8 h-8 bg-yellow-500"
                        onClick={openPopup}
                      >
                        <p className="font-bold text-black">13</p>
                      </ButtonComponent>
                      <div className="flex flex-col gap-8">
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">14</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500 mt-4"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">15</p>
                        </ButtonComponent>
                        <ButtonComponent
                          id="btn41"
                          className="w-8 h-8 bg-yellow-500"
                          onClick={openPopup}
                        >
                          <p className="font-bold text-black">16</p>
                        </ButtonComponent>
                      </div>
                    </div>
                    {/* END LANTAI 2 SECTION 1 KANAN */}
                    <div className="w-12 h-56 bg-[#444243]"></div>
                  </div>
                </div>
              </div>

              {/* SECTION 2 */}
              <div className="flex flex-row w-full -mt-10 px-40 border-b-2 border-neutral-400">
                {/* SECTION 2 KIRI */}
                <div className="w-1/3 flex flex-col ">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row gap-8 justify-center items-center">
                      <div className="flex flex-col">
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">17</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-row gap-2 my-2">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">18</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn14"
                            className="w-12 h-12 bg-gray-800"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">19</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn15"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">20</p>
                          </ButtonComponent>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">21</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-row gap-2 my-2">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">22</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn14"
                            className="w-12 h-12 bg-gray-800"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">23</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn15"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">24</p>
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END SECTION 2 KIRI */}

                {/* SECTION 2 TENGAH */}
                <div className="w-1/3 flex flex-col  items-center text-center">
                  <div
                    className="w-52 h-8 mt-20 bg-yellow-500 rounded-lg"
                    onClick={openPopup}
                  >
                    Pintu
                  </div>
                </div>
                {/* END SECTION 2 TENGAH */}

                {/* SECTION 2 KANAN */}
                <div className="w-1/3 flex flex-col ">
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-row gap-8 justify-center items-center">
                      <div className="flex flex-col">
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">25</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-row gap-2 my-2">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">26</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn14"
                            className="w-12 h-12 bg-gray-800"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">27</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn15"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">28</p>
                          </ButtonComponent>
                        </div>
                      </div>
                      <div className="flex flex-col">
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">29</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-row gap-2 my-2">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">30</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn14"
                            className="w-12 h-12 bg-gray-800"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">31</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn15"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">32</p>
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END SECTION 2 KANAN */}
              </div>
              {/* END SECTION 2 */}

              {/* SECTION 3 */}
              <div className="flex flex-row w-full pl-32 border-neutral-400">
                {/* SECTION 3 KIRI */}
                <div className="w-1/3 flex flex-col ">
                  <div className="flex flex-row items-center justify-center my-8">
                    <div className="flex flex-row justify-center items-center">
                      <div className="flex flex-col">
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-60 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">33</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-row gap-2 my-2">
                          <ButtonComponent
                            id="btn13"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">34</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn14"
                            className="w-60 h-12 bg-gray-800"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-white">35</p>
                          </ButtonComponent>
                          <ButtonComponent
                            id="btn15"
                            className="w-8 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">36</p>
                          </ButtonComponent>
                        </div>
                        <div className="text-center">
                          <ButtonComponent
                            id="btn13"
                            className="w-60 h-8 bg-yellow-500 mt-2"
                            onClick={openPopup}
                          >
                            <p className="font-bold text-black">37</p>
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-row items-center justify-center">
                    <div className="flex flex-col gap-8 mt-8">
                      <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">38</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">39</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">40</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">41</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">42</p>
                            </ButtonComponent>
                          </div>
                        </div>
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">43</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">44</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">45</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">46</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">47</p>
                            </ButtonComponent>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">48</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">49</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">50</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">51</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">52</p>
                            </ButtonComponent>
                          </div>
                        </div>
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">53</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">54</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">55</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">56</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">57</p>
                            </ButtonComponent>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">58</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">59</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">60</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">61</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">62</p>
                            </ButtonComponent>
                          </div>
                        </div>
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">63</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">64</p>
                            </ButtonComponent>
                            <div className="flex flex-col items-center">
                              <ButtonComponent
                                id="btn14"
                                className="w-12 h-12 bg-gray-800"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-white">65</p>
                              </ButtonComponent>
                              <ButtonComponent
                                id="btn15"
                                className="w-8 h-8 bg-yellow-500 mt-2"
                                onClick={openPopup}
                              >
                                <p className="font-bold text-black">66</p>
                              </ButtonComponent>
                            </div>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">67</p>
                            </ButtonComponent>
                          </div>
                        </div>
                      </div>
                      <div className="flex flex-row justify-center items-center">
                        <div className="flex flex-col mx-20">
                          <div className="text-center">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-8 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">68</p>
                            </ButtonComponent>
                          </div>
                          <div className="flex flex-row gap-2">
                            <ButtonComponent
                              id="btn13"
                              className="w-8 h-32 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">69</p>
                            </ButtonComponent>
                            <ButtonComponent
                              id="btn14"
                              className="w-12 h-36 bg-gray-800"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-white">70</p>
                            </ButtonComponent>
                            <ButtonComponent
                              id="btn15"
                              className="w-8 h-32 bg-yellow-500 mt-2"
                              onClick={openPopup}
                            >
                              <p className="font-bold text-black">71</p>
                            </ButtonComponent>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END SECTION 3 KIRI */}

                {/* SECTION 3 TENGAH */}
                <div className="w-1/3 flex flex-col gap-y-20 items-end text-center">
                  <div className="flex flex-col items-end">
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">72</p>
                    </ButtonComponent>
                    <div className="flex flex-row">
                      <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-4 mr-2">
                        <p className="font-bold text-black">73</p>
                      </ButtonComponent>
                      <ButtonComponent className="w-12 h-12 bg-gray-800 mt-2">
                        <p className="font-bold text-white">74</p>
                      </ButtonComponent>
                    </div>
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">75</p>
                    </ButtonComponent>
                  </div>
                  <div className="flex flex-col items-end">
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">76</p>
                    </ButtonComponent>
                    <div className="flex flex-row">
                      <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-4 mr-2">
                        <p className="font-bold text-black">77</p>
                      </ButtonComponent>
                      <ButtonComponent className="w-12 h-12 bg-gray-800 mt-2">
                        <p className="font-bold text-white">78</p>
                      </ButtonComponent>
                    </div>
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">79</p>
                    </ButtonComponent>
                  </div>
                  <div className="flex flex-col items-end">
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">80</p>
                    </ButtonComponent>
                    <div className="flex flex-row">
                      <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-4 mr-2">
                        <p className="font-bold text-black">81</p>
                      </ButtonComponent>
                      <ButtonComponent className="w-12 h-12 bg-gray-800 mt-2">
                        <p className="font-bold text-white">82</p>
                      </ButtonComponent>
                    </div>
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">83</p>
                    </ButtonComponent>
                  </div>
                  <div className="flex flex-col items-end">
                    <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">84</p>
                    </ButtonComponent>
                    <div className="flex flex-row">
                      <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-4 mr-2">
                        <p className="font-bold text-black">85</p>
                      </ButtonComponent>
                      <ButtonComponent className="w-12 h-12 bg-gray-800 mt-2">
                        <p className="font-bold text-white">86</p>
                      </ButtonComponent>
                    </div>
                    <div className="w-8 h-8 bg-yellow-500 mt-2 mr-2">
                      <p className="font-bold text-black">87</p>
                    </div>
                  </div>
                </div>
                {/* END SECTION 3 TENGAH */}

                {/* SECTION 3 KANAN */}
                <div className="w-1/3 flex flex-col border-l-2 border-neutral-400">
                  <div className="flex flex-row justify-center">
                    <div className="flex flex-row bg-[#D9D9D9] w-40 h-8 text-black text-lg justify-center">
                      Screen
                    </div>
                  </div>
                  <div className="flex flex-row justify-end">
                    <div className="flex flex-col mt-20">
                      <div className="flex flex-row text-black text-lg font-semibold">
                        MEETING ROOM
                      </div>
                      <div className="flex flex-row gap-2 mr-24 mt-20">
                        <div className="flex flex-col gap-12 my-2">
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">88</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">89</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">90</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">91</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">92</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">93</p>
                          </ButtonComponent>
                        </div>
                        <div className="flex flex-col">
                          <div className="flex flex-col w-28 h-32 bg-gray-800"></div>
                          <div className="flex flex-col w-28 h-80 bg-gray-800"></div>
                        </div>
                        <div className="flex flex-col gap-12 my-2">
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">94</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">95</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">96</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">97</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">98</p>
                          </ButtonComponent>
                          <ButtonComponent className="w-8 h-8 bg-yellow-500">
                            <p className="font-bold text-black">99</p>
                          </ButtonComponent>
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-row">
                      <div className="flex flex-col gap-12 my-2 mx-3">
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">100</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">101</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">102</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">103</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500 mt-20">
                          <p className="font-bold text-black">104</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">105</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">106</p>
                        </ButtonComponent>
                        <ButtonComponent className="w-8 h-8 bg-yellow-500">
                          <p className="font-bold text-black">107</p>
                        </ButtonComponent>
                      </div>
                      <div className="flex flex-col">
                        <ButtonComponent className="flex flex-col w-8 h-80 bg-gray-800"></ButtonComponent>
                        <ButtonComponent className="flex flex-col w-8 h-20 bg-gray-800"></ButtonComponent>
                        <ButtonComponent className="flex flex-col w-8 h-80 bg-gray-800"></ButtonComponent>
                      </div>
                    </div>
                  </div>
                </div>
                {/* END SECTION 3 KANAN */}
              </div>
              {/* END SECTION 3 */}

              <div className="flex flex-row justify-between mt-12 mb-4 px-40">
                <div className="flex justify-center flex-grow">
                  <div className="bg-[#D9D9D9] text-center items-center px-36 py-3 ml-52">
                    Tangga
                  </div>
                  <div className="bg-[#D9D9D9] text-center items-center px-36 py-3 ml-52">
                    Tangga
                  </div>
                </div>
                <div className="flex items-center">
                  <div className="text-center py-3 mx-4">Non Smoking</div>
                  <div className="text-center py-3 mx-4">Full AC</div>
                </div>
              </div>
              <hr className=" bg-[#D9D9D9] border-0 dark:bg-gray-700 h-1 mx-40"></hr>

              <div className="flex flex-col justify-center mt-4 px-40 pb-28">
                <div className="text-center items-center px-24 py-3">
                  Keterangan
                </div>
                <div className="text-center items-center px-24 py-3">
                  <div className="flex flex-row items-center justify-center gap-40">
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#444243] mr-2"></div>
                      <p>Meja Tersedia</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#D02323] mr-2"></div>
                      <p>Meja Tidak Tersedia</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#B17A28] mr-2"></div>
                      <p>Kursi/Sofa</p>
                    </div>
                    <div className="flex flex-row">
                      <div className="w-12 h-6 bg-[#FF8A00] mr-2"></div>
                      <p>Pilihanmu</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>

        {/* BOOKING KURSI SECTION */}
      </div>
    </div>
  );
};

export default Bookinge;
