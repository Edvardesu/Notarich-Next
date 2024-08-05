"use client";
import Footer from "@/components/Footer";
import AppOverview from "./AppOverview";
import HeroAboutUs from "./HeroAboutUs";
import { useCartStore } from "@/utils/store";
import Image from "next/image";
import React, { Fragment, useEffect } from "react";

const AboutUs = () => {
  return (
    <div>
      <Fragment>
        <div className="justify-center items-center">
          <div className="flex flex-col  font-jakarta_sans">
            <HeroAboutUs />
            <AppOverview />
          </div>
        </div>
      </Fragment>
    </div>
  );
};

export default AboutUs;
