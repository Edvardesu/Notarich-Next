import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import React, { useState } from "react";

const Popup = ({ isOpen, closePopup }) => {
  const { data: session, status } = useSession();
  // const router = useRouter();
  const [reservationData, setReservationData] = useState({
    name: "",
    email: "",
    date: "",
    time: "",
    durasi: "",
    tableNumber: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setReservationData({ ...reservationData, [name]: value });
  };

  const handleCheckout = async () => {
    if (!session) {
      // router.push("/login");
    } else {
      try {
        const res = await fetch("http://localhost:3000/api/bookings", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            kursis: {"title":"1_1","lantai":1},
            tanggalWaktu: "1970-01-01T00:00:00.000Z",
            durasi: 120,
            statusBooking: "waiting",
            userEmail: "user@gmail.com",
          }),
        });
        const data = await res.json()
        // router.push(`/menu/all`)
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    isOpen && (
      <div className="popup-container">
        <div className="popup-content">
          <h2>Reserve a Table</h2>
          <form>
            <label>
              Name:
              <input
                type="text"
                name="name"
                value={reservationData.name}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Email:
              <input
                type="email"
                name="email"
                value={reservationData.email}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Date:
              <input
                type="date"
                name="date"
                value={reservationData.date}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Time:
              <input
                type="time"
                name="time"
                value={reservationData.time}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Durasi:
              <input
                type="number"
                name="number"
                value={reservationData.durasi}
                onChange={handleChange}
                required
              />
            </label>
            <label>
              Table Number:
              <input
                type="text"
                name="tableNumber"
                value={reservationData.tableNumber}
                onChange={handleChange}
                required
              />
            </label>
          </form>
          <button onClick={handleCheckout} className="bg-orange-400 px-2 py-1">Confirm Reservation</button>
          <button onClick={closePopup}>Close</button>
        </div>
      </div>
    )
  );
};

export default Popup;
