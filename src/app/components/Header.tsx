import Image from "next/image";
import React from "react";
import { GiFingerPrint } from "react-icons/gi";
import Countdown from "./CountDown/Countdown";
import { RegisterdParticicpant } from "./Buttons";

const targetDate = new Date("2024-03-23T09:00:00.000Z");
const endTargetDate = new Date("2024-03-23T16:00:00.000Z");
const style = { color: "#2ec866", fontSize: "60px" };
const style1 = { color: "#2ec866", fontSize: "60px" };

const Header = () => {
  return (
    <div className="relative h-[90svh] ipad:h-[90svh] grid place-items-center ">
      <div className="absolute sm:block hidden  left-0 bottom-[30%]">
        <GiFingerPrint style={style} />
      </div>
      <div className="absolute sm:block hidden right-[10%] top-[15%]">
        <GiFingerPrint style={style1} />
      </div>
      <div className="absolute  bottom-[-20px] sm:bottom-[-15px] right-0">
        <Image
          className=""
          src="/Vector-Header2.svg"
          alt="vec"
          width={1000}
          height={200}
        />
      </div>
      <div className="absolute w-[100%]  bottom-[-20px]  sm:bottom-[-15px]  sm:left-0">
        <Image
          className=" "
          src="/Vector-Header1.svg"
          alt="vec1"
          width={1500}
          height={1000}
        />
      </div>
      <div className="container relative mx-auto flex flex-col justify-between min-h-full">
        <div className="flex justify-center basis-[50%] items-center lpt-[60px] flex-grow">
          <div className="text-center  ">
            <div className="lpb-[40px] flex justify-center mx-auto items-center tablet:w-full w-[80%]">
              <div className="">
                <Image
                  src="/Buidlcon2.0.svg"
                  alt="buildIcon"
                  width={450}
                  height={100}
                />
              </div>
            </div>
            <div className=" py-4 ipad:py-10 px-4">
              <h2 className="font-[400] font-ppneue text-[20px] md:text-[32px] md:leading-[46.7px] leading-[20px] tracking-[0.48px]">
                Product, Community and Future of adoption.
              </h2>
            </div>
          </div>
        </div>

        <div className=" flex-grow">
          <Countdown
            // eventTargetDate={targetDate}
            eventEndDate={endTargetDate}
          />
        </div>

        <div>
          <RegisterdParticicpant/>
        </div>
      </div>
    </div>
  );
};

export default Header;
