"use client";
import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";
import { speakers, panelists } from "../data/speakers.data";

const Speakers = () => {
  return (
    <div className=" relative bg-[#0B1237] mb-[80px] sm:mb-[120px] ">
      <div className="absolute w-[25%] sm:w-[19%]  right-[10px] sm:right-[40px] ">
        <Image
          className=""
          src="/Vector.svg"
          alt="svg"
          width={200}
          height={200}
        />
      </div>
      <div className="absolute top-[12%] ">
        <Image
          className="w-[100%]"
          src="/Vector1.svg"
          alt="svg"
          width={1000}
          height={1000}
        />
      </div>
      <div className="absolute bottom-0 ">
        <Image
          className="w-[100%]"
          src="/Vector2.svg"
          alt="svg"
          width={1000}
          height={1000}
        />
      </div>
      <div className="container  sm:mx-auto">
        <div className=" flex flex-col px-[17px] sm:px-[100px]  ">
          <div className=" sm:mt-[173px] mt-[80px] ">
            <ImageSlider images={speakers} spePan="Our Speakers" />
          </div>
          <div className=" mt-[80px] sm:mb-[170px] mb-[80px]">
            <ImageSlider images={panelists} spePan="Meet the Panelists" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
