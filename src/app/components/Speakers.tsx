"use client";
import Image from "next/image";
import React from "react";
import ImageSlider from "./ImageSlider";
import { speakers, panelists } from "../data/speakers.data";
import { DiscoverBos } from "./Icons/Custom/DiscoverBos";
import Link from "next/link";

const Speakers = () => {
  return (
    <div className="max-w-[1536px] mx-auto relative bg-[#0B1237] mb-[80px] sm:mb-[120px] ">
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
      <div className=" ">
        <div className=" flex flex-col px-[17px] sm:px-[40px] md:px-[100px]  ">
          <div className=" sm:mt-[173px] mt-[80px] ">
            <ImageSlider
              title="speaker"
              isSpeaker={true}
              images={speakers}
              spePan="Apply to be a speaker"
              applicationLink="https://docs.google.com/forms/d/e/1FAIpQLSc4EbYNVQFFUQejA6iZtn-RcCHAwWMRNFVKys8hmKxW69rLNA/viewform"
            />
          </div>
          <div className=" mt-[80px] sm:mb-[170px] mb-[80px] bg-white h-[340px] rounded-xl py-10 px-6 flex flex-col gap-6 justify-center items-center">
            <div className=" max-w-fit w-fit px-6 py-[10px] rounded-[33px] bg-[#D9F7E8] text-[#048131] text-base font-ppneue font-normal">
              Post-Event
            </div>

            {/* <DiscoverBos /> */}
            <img
              src="/images/disvcover.svg"
              alt=""
              className=" cursor-not-allowed"
              draggable={false}
            />
            <p className=" font-ppneuebold font-extrabold text-2xl tablet:text-[40px] text-[#0B1237]">
              HACKATHON
            </p>

            <Link
              href="/hackaton"
              className={`z-[999] max-w-[240px] bg-[#0B1237] hover:bg-[#00C663] text-white text-base font-normal font-ppneue rounded-xl w-full py-4 flex justify-center items-center `}
            >
              Register Now
            </Link>

            {/* <ImageSlider
            isSpeaker={false}
              title="volunteer"
              images={panelists}
              spePan="Apply to be Volunteer"
              applicationLink="https://docs.google.com/forms/d/e/1FAIpQLSdhfPRyy0Q_nAlQbmSWGmahG9SEfdJI50jdTOPof9jf852wXQ/viewform"
            /> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Speakers;
