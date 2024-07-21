"use client";
import Footer from "@/components/Footer";
import AppOverview from "@/fragments/AppOverview";
import HeroAboutUs from "@/fragments/HeroAboutUs";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";

export default function Home() {
  return (
    <div>
      <Fragment>
        <div className="justify-center items-center">
          <div className="flex flex-col font-jakarta_sans">
            <HeroAboutUs />
            {/* <div className="text-center mt-4">
              <h2 className="text-2xl font-semibold">Welcome, {username}!</h2>
            </div> */}
            <AppOverview />
            {/* <Footer /> */}
          </div>
        </div>
      </Fragment>
    </div>
  );
}
