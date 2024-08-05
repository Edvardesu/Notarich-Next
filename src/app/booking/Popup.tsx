import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import DatePicker from "react-datepicker";
import TimePicker from "./TimePicker";
import Image from "next/image";
import "react-datepicker/dist/react-datepicker.css";

const Popup = ({ isOpen, closePopup }) => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    durasi: "",
    tableNumber: "",
  });

  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [isoDateTime, setIsoDateTime] = useState("");

  const handleTimeSelection = (time) => {
    setSelectedTime(time);
    updateIsoDateTime(selectedDate, time);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
    updateIsoDateTime(date, selectedTime);
  };

  const updateIsoDateTime = (date, time) => {
    if (date && time) {
      const [hour, minute, second] = time.split(":");
      const newDate = new Date(date);
      newDate.setHours(hour);
      newDate.setMinutes(minute);
      newDate.setSeconds(second);
      setIsoDateTime(newDate.toISOString());
    }
  };

  const [selectedDuration, setSelectedDuration] = useState("30 Minutes");
  const [confirmationVisible, setConfirmationVisible] = useState(false);
  const [reservationSuccessVisible, setReservationSuccessVisible] =
    useState(false);

  const handleConfirmReservation = async () => {
    if (!session) {
      router.push("/login");
    } else {
      try {
        const res = await fetch("/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kursis: [JSON.parse(reservationData.tableNumber)],
            tanggalWaktu: isoDateTime,
            durasi: selectedDuration,
            statusBooking: "waiting",
            userEmail: session.user.email,
          }),
        });

        if (!res.ok) {
          throw new Error("Failed to create booking");
        }

        const data = await res.json();
        console.log("Booking created:", data);

        setConfirmationVisible(true);
        setReservationSuccessVisible(true);
      } catch (err) {
        console.error(err);
      }
    }
  };

  if (!isOpen) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
        <div className="bg-white p-8 rounded-lg shadow-lg relative w-3/4 max-w-4xl">
          <button
            className="absolute top-2 right-2 text-2xl font-bold"
            onClick={closePopup}
          >
            &times;
          </button>
          <h2 className="text-xl font-semibold mb-4">Order untuk Kapan ya?</h2>

          <div className="grid grid-cols-3 gap-4">
            <div>
              <h3 className="font-semibold mb-2 text-center">
                Pilih Tanggal Pemesanan
              </h3>
              <DatePicker
                inline
                selected={selectedDate}
                onChange={handleDateChange}
                className="w-full p-2 border rounded"
              />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-center">
                Pilih Waktu Pemesanan
              </h3>
              <TimePicker onTimeSelected={handleTimeSelection} />
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-center">
                Durasi Pemesanan
              </h3>
              <div className="flex flex-col space-y-2 mx-4">
                {["30 Minutes", "1 Hour", "1 Hour 30 Minutes", "2 Hours"].map(
                  (duration) => (
                    <button
                      key={duration}
                      onClick={() => setSelectedDuration(duration)}
                      className={`w-full p-2 border rounded-lg ${
                        selectedDuration === duration
                          ? "bg-[#FF8A00] text-white"
                          : ""
                      }`}
                    >
                      {duration}
                    </button>
                  )
                )}
              </div>
            </div>
          </div>

          {confirmationVisible && (
            <div className="mt-4 bg-gray-100 p-4 rounded">
              <h3 className="font-semibold mb-2">Konfirmasi Reservasi:</h3>
              <p>
                <strong>Tanggal dan Waktu:</strong> {isoDateTime}
              </p>
            </div>
          )}

          <div className="flex justify-end space-x-2 mt-4">
            <button
              className="bg-gray-300 px-4 py-2 rounded text-black"
              onClick={closePopup}
            >
              Batalkan
            </button>
            <button
              className="bg-[#FF8A00] px-4 py-2 rounded text-white"
              onClick={handleConfirmReservation}
            >
              Konfirmasi Reservasi
            </button>
          </div>
        </div>
      </div>

      {reservationSuccessVisible && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
          <div className="bg-white shadow-lg rounded-lg px-6 pb-8 w-full mx-96 mt-10">
            <div className="flex flex-col text-center items-center mb-10">
              <div className="my-4 h-32 w-32 overflow-hidden rounded-full ">
                <Image
                  className="bg-white h-48 w-48 -mt-8 object-cover"
                  src="/logo-notarich-transparent.png"
                  alt=""
                  width={100}
                  height={100}
                />
              </div>
              <span className="font-bruno_ace text-3xl text-center tracking-tight">
                Notarich Cafe
              </span>
            </div>
            <div className="mb-6 mx-20">
              <div className="text-3xl font-semibold text-center">
                Reservation Details
              </div>
              <div className="flex flex-col my-10 text-xl">
                <div className="flex flex-row mt-4">
                  <label className="w-1/2 block text-gray-700 font-bold">
                    Nama Pemesan:
                  </label>
                  <div className="w-1/2 mt-1 text-black text-end font-normal">
                    johnd
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <label className="w-1/2 block text-gray-700 font-bold">
                    Tempat Pemesanan:
                  </label>
                  <div className="w-1/2 mt-1 text-black text-end font-normal">
                    Lantai 1
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <label className="w-1/2 block text-gray-700 font-bold">
                    Hari dan Tanggal Pemesan:
                  </label>
                  <div className="w-1/2 mt-1 text-black text-end font-normal">
                    Friday, 5 July 2024
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <label className="w-1/2 block text-gray-700 font-bold">
                    Waktu Pemesanan:
                  </label>
                  <div className="w-1/2 mt-1 text-black text-end font-normal">
                    15:00
                  </div>
                </div>
                <div className="flex flex-row mt-4">
                  <label className="w-1/2 block text-gray-700 font-bold">
                    Durasi Pemesanan:
                  </label>
                  <div className="w-1/2 mt-1 text-black text-end font-normal">
                    1 Hour 30 Minutes
                  </div>
                </div>
              </div>
            </div>
            <div className="flex gap-4">
              <button
                onClick={() => setReservationSuccessVisible(false)}
                className="w-full bg-[#D9D9D9] text-[#666666] text-lg rounded-md py-2 font-normal ml-56"
              >
                Batalkan Pesanan
              </button>
              <button
                onClick={() => setReservationSuccessVisible(false)}
                className="w-full bg-[#FF8A00] text-[#FFFFFF] text-lg rounded-md py-2 font-normal mr-56"
              >
                Lanjutkan Pembayaran
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Popup;
