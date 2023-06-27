"use client";
import Image from "next/image";
import React from "react";

const PastEvent = (props: {image: string, name: string,  summary: string, sponsors: string[]}) => {
    const {image, name, summary, sponsors} = props;
  return (
    // <div className='container mx-auto sm:mb-[90px] mb-[50px]'>
    <div className="w-[100%] gap-[48px] md:flex-nowrap flex-wrap flex  h-auto px-[20px] justify-center md:justify-between shrink-0">
      <div className="md:w-[33%] mt-[13px] w-[100%]">
        <div>
          <Image
            className="object-cover bloc h-ful"
            src={image}
            alt="rect"
            width={450}
            height={450}
          />
        </div>
      </div>
      <div className="grow md:w-[60%] w-[100%]">
        <div>
          <h1 className="font-[800] text-[20px] text-left font-ppneue">
            {name}
          </h1>
          <p className="font-[500] whitespace-pre-line text-[16px] leading-[27px] font-satoshi tracking-[0.32px]">
            {summary}
          </p>
        </div>
        <div className="mt-[48px]">
          {
            sponsors?.length !== 0 &&  <h1 className="text-left font-ppneue font-[800] text-[16px]">
                Sponsors & Partners
                </h1>
          }
          <div className="flex flex-col sm:w-[100%] justify-between py-[10px] ]">
            <div className="flex gap-1 w-full sm:w-[60%] mb-[20px]">
              {sponsors.map((sponsor) => (
                <Image
                  className="w-[20%] block"
                  src={sponsor} 
                  alt="vector"
                  width={100}
                  height={18}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PastEvent;
