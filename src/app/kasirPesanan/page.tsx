"use client";
import Sidebar from "../../components/Sidebar";
import Pesanan from "./Pesanan";

const KasirPesanan = () => {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar /> {/* Assuming Sidebar is fixed or has a set width */}
      <div className="flex-grow">
        {" "}
        {/* This ensures that the following div takes all available space */}
        <Pesanan />
      </div>
    </div>
  );
};

export default KasirPesanan;
