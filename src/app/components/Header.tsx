"use client"
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowRight } from "react-icons/ai";
import { GiFingerPrint } from "react-icons/gi";
import Countdown from "./CountDown/Countdown";
import Link from "next/link";
import { motion } from "framer-motion";


const targetDate = new Date("2024-03-23T09:00:00.000Z");
const endTargetDate = new Date("2024-03-23T16:00:00.000Z");
const style = { color: "#2ec866", fontSize: "60px" };
const style1 = { color: "#2ec866", fontSize: "60px" };

const Header = () => {
   const [hmm, setHmmm] = useState<Record<string, User>>({});

  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/registered_users.json`;


    useEffect(() => {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          // console.log("FireBase Successfully Fetched Success:", data);
          setHmmm(data);
        })
        .catch((error) => console.error("Error:", error));
    }, []);

    // console.log("this is HMM ", hmm);
    // console.log(typeof hmm);

    // this would then be the jsx
//   {hmm &&
//     Object.entries(hmm).map(([key, value]: [string, User]) => (
//       <div className=" my-4 bg-red-500 font-semibold text-base">
//         <p>Key: {key}</p>
//         <p>Name: {value.fullname}</p>
//         <p>Email: {value.email}</p>
//         <p>Accomodation: {value.Accomodation}</p>
//         <p>Socials: {value.socials}</p>
//       </div>
//     ));}

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
        {/* <div className='border-[#000000] sm:p-[0] px-[20px]'>
                    <h1 className='text-[#000000] mt-[60px] font-[600] text-[24px] uppercase leading-[40px]'> </h1>
                </div> */}

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
          <Link
            href="/registration"
            className=" max-w-[250px] tablet:max-w-[360px] w-full min-h-[64px] mx-auto flex-grow bg-[#2EC866] p-1 rounded-xl flex gap-4 justify-between items-center relative"
          >
            <motion.button
              type="submit"
              className={` bg-[#0B1237] text-white text-base font-normal font-ppneue rounded-xl w-full py-4 flex justify-center items-center `}
              initial={{ width: "100%" }}
              animate={{ width: "100%" }}
              whileHover={{
                width: "calc(100% - 8px)",
                position: "absolute",
                left: "4px",
              }}
              transition={{ duration: 0.1 }}
            >
              Register Now
            </motion.button>
            <span className=" font-ppneue text-base text-white font-normal flex gap-1 pr-3 justify-end ">
              <span className=" font-extrabold">
                {hmm && Object.keys(hmm).length > 0 ? Object.keys(hmm).length : 0}
              </span>{" "}
              Registered
            </span>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
