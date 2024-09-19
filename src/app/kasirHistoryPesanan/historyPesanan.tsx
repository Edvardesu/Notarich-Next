import React, { useState } from "react";

const BookingItem = (booking: any, onHide: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-semibold">{booking.name}</div>
      </div>
      <div className="text-xl">
        <p>Tanggal Pemesanan : {booking.date}</p>
        <p>Waktu : {booking.time}</p>
        <p>Durasi : {booking.duration}</p>
        <p>
          Total Pembayaran : Rp
          {booking.totalPayment}
        </p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onHide(booking.id)}
          className="bg-[#FF8A00] text-white px-6 py-2 rounded mr-2 hover:bg-green-600 text-lg font-semibold"
        >
          Status : Accepted
        </button>
        {/* <button
          onClick={() => onHide(booking.id)}
          className="bg-[#F0BE3F] text-white px-6 py-2 rounded hover:bg-red-600 text-lg font-semibold"
        >
          Reject
        </button> */}
      </div>
    </div>
  );
};

const OrderItem = (pesanan: any, onHide: any) => {
  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4">
      <div className="flex justify-between items-center mb-4">
        <div className="text-2xl font-semibold">{pesanan.name}</div>
      </div>
      <div className="text-xl">
        <p>The Trial : {pesanan.makan1}</p>
        <p>Strawberry Mojito : {pesanan.makan2}</p>
        <p>Chicken Wings : {pesanan.makan3}</p>
        <p>Spaghetti Carbonara : {pesanan.makan4}</p>
        <p>Total Pembayaran : Rp{pesanan.totalPayment}</p>
      </div>
      <div className="flex justify-end mt-4">
        <button
          onClick={() => onHide(pesanan.id)}
          className="bg-[#FF8A00] text-white px-6 py-2 rounded mr-2 hover:bg-green-600 text-lg font-semibold"
        >
          Status : Accepted
        </button>
        {/* <button
          onClick={() => onHide(pesanan.id)}
          className="bg-[#F0BE3F] text-white px-6 py-2 rounded hover:bg-red-600 text-lg font-semibold"
        >
          Reject
        </button> */}
      </div>
    </div>
  );
};

const HistoryPesanan = () => {
  const [orderMakanan, setOrderMakanan] = useState(false);
  const [booking, setBooking] = useState([
    {
      id: 1,
      name: "johnd",
      date: "11 July 2024",
      time: "16.00 AM",
      duration: "1 Hour 30 Minutes",
      totalPayment: 150000,
    },
  ]);

  const [pesanan, setPesanan] = useState([
    {
      id: 1,
      name: "johnd",
      date: "11 July 2024",
      makan1: "3",
      makan2: "1",
      makan3: "1",
      makan4: "2",
      totalPayment: 166000,
    },
  ]);

  const handleHide = (id: number, isBooking = true) => {
    if (isBooking) {
      setBooking(booking.filter((b) => b.id !== id));
    } else {
      setPesanan(pesanan.filter((p) => p.id !== id));
    }
  };

  return (
    <div className="p-10 ml-64">
      <div className="text-4xl text-black font-semibold mb-6">Pesanan</div>
      <div className="mb-4 space-x-3">
        <button
          onClick={() => setOrderMakanan(false)}
          className="py-1 px-6 bg-[#FF8A00] rounded-2xl text-white text-xl"
        >
          Reservasi Meja
        </button>
        <button
          onClick={() => setOrderMakanan(true)}
          className="py-1 px-6 bg-[#FF8A00] rounded-2xl text-white text-xl"
        >
          Order Makanan
        </button>
      </div>
      <div>
        {orderMakanan ? (
          <div>
            {pesanan.map((item, index) => (
              <OrderItem
                key={index}
                pesanan={item}
                onHide={() => handleHide(item.id, false)}
              />
            ))}
          </div>
        ) : (
          <div>
            {booking.map((item, index) => (
              <BookingItem
                key={index}
                booking={item}
                onHide={() => handleHide(item.id)}
              />
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default HistoryPesanan;
