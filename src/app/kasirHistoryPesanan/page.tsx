"use client";
import Sidebar from "../../components/Sidebar";
import HistoryPesanan from "./historyPesanan";

const KasirHistoryPesanan = () => {
  return (
    <div className="flex w-full min-h-screen">
      <Sidebar />
      <div className="flex-grow">
        <HistoryPesanan />
      </div>
    </div>
  );
};

export default KasirHistoryPesanan;
