"use client";
import { Fragment, useState, useEffect, useRef } from "react";
import Sidebar from "../../components/Sidebar";
import MenuneKasir from "./menuneKasir";

const KasirMenu = () => {
  return (
    <div className="flex w-full ">
      <Fragment>
        <div className="flex flex-initial justify-center items-center font-jakarta_sans">
          <div className="flex flex-col">
            <Sidebar />
            <MenuneKasir />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default KasirMenu;
