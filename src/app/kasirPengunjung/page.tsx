"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import BookingeKasir from "./bookingeKasir";

const KasirPengunjung = () => {
  return (
    <div className="flex w-full ">
      <Fragment>
        <div className="flex flex-initial justify-center items-center font-jakarta_sans">
          <div className="flex flex-col">
            <Sidebar />
            <BookingeKasir />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default KasirPengunjung;
