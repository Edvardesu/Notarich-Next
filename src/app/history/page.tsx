"use client";
import React, { useEffect, useState } from "react";

// Define the interfaces
interface Order {
  id: number;
  name: string;
  products: {
    title: string;
    price: number;
    quantity: number;
  }[];
}

interface Booking {
  id: number;
  name: string;
  durasi: string;
  kursis: { kursi: string; lantai: string }[]; // Adjust this according to your API
  tanggalWaktu: string;
}

// Fetch orders function
const getOrders = async () => {
  const res = await fetch("/api/orders", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

// Fetch bookings function
const getBooking = async () => {
  const res = await fetch("/api/bookings", {
    cache: "no-store",
  });

  if (!res.ok) {
    throw new Error("Failed!");
  }

  return res.json();
};

// OrderItem Component
const OrderItem = ({ order, onHide }: { order: Order; onHide: () => void }) => {
  const totalPayment = order.products.reduce(
    (total, product) => total + product.price * product.quantity,
    0
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:scale-105 duration-500">
      <div className="text-2xl font-semibold">{order.name}</div>
      <div className="text-xl">
        {order.products.map((product, index) => (
          <div key={index} className="mb-2">
            <p className="font-semibold">Menu: {product.title}</p>
            <p>Jumlah: {product.quantity}</p>
            <p>Harga: Rp{product.price}.000</p>
          </div>
        ))}
        <p className="font-bold">Total Pembayaran: Rp{totalPayment}.000</p>
      </div>
    </div>
  );
};

// BookingItem Component
const BookingItem = ({
  booking,
  onHide,
}: {
  booking: Booking;
  onHide: () => void;
}) => {
  const formattedDate = new Date(booking.tanggalWaktu).toLocaleDateString(
    "en-GB",
    {
      day: "2-digit",
      month: "long",
      year: "numeric",
    }
  );

  const formattedTime = new Date(booking.tanggalWaktu).toLocaleTimeString(
    "en-US",
    {
      hour: "2-digit",
      minute: "2-digit",
    }
  );

  return (
    <div className="bg-white shadow-md rounded-lg p-4 mb-4 hover:scale-105 duration-500">
      <div className="text-2xl font-semibold">{booking.name}</div>
      <div className="text-xl">
        <p className="font-semibold">Tanggal Pemesanan: {formattedDate}</p>
        <p>Waktu: {formattedTime}</p>
        <p>Durasi: {booking.durasi} menit</p>
        <p className="font-semibold">Kursi:</p>
        {Array.isArray(booking.kursis) && booking.kursis.length > 0 ? (
          booking.kursis.map((kursi, index) => (
            <div key={index}>
              <p>
                - Kursi: {kursi.kursi} (Lantai: {kursi.lantai})
              </p>
            </div>
          ))
        ) : (
          <p>No kursi data available</p>
        )}
      </div>
    </div>
  );
};

// Main Component
const PesananUser = () => {
  const [orderMakanan, setOrderMakanan] = useState(false);
  const [booking, setBooking] = useState<Booking[]>([]); // Define as Booking array
  const [order, setOrder] = useState<Order[]>([]); // Define as Order array

  useEffect(() => {
    const fetchOrders = async () => {
      try {
        const orderData = await getOrders();
        setOrder(orderData);
      } catch (error) {
        console.error(error);
      }
    };

    const fetchBookings = async () => {
      try {
        const bookingData = await getBooking();
        setBooking(bookingData);
      } catch (error) {
        console.error(error);
      }
    };

    fetchOrders();
    fetchBookings();
  }, []);

  const handleHide = (id: number, isBooking = true) => {
    if (isBooking) {
      setBooking((prevBookings) => prevBookings.filter((b) => b.id !== id));
    } else {
      setOrder((prevOrders) => prevOrders.filter((o) => o.id !== id));
    }
  };

  return (
    <div className="min-h-screen flex flex-col w-full px-20">
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
            {order.map((item, index) => (
              <OrderItem
                key={index}
                order={item}
                onHide={() => handleHide(item.id, false)}
              />
            ))}
          </div>
        ) : (
          <div>
            {booking.length > 0 ? (
              booking.map((item, index) => (
                <BookingItem
                  key={index}
                  booking={item}
                  onHide={() => handleHide(item.id)}
                />
              ))
            ) : (
              <p>No bookings available</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default PesananUser;
