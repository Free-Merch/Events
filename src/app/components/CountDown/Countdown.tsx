"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Confetti from "react-confetti";
import { Timer } from "./Timer";
import { CalenderIcon, LocationIcon } from "../Icons/Custom";

interface CountdownProps {
  eventTargetDate: Date;
  eventEndDate: Date;
}

const Countdown: React.FC<CountdownProps> = ({
  eventTargetDate,
  eventEndDate,
}) => {
  const [elementWidth, setElementWidth] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      const width = document.getElementById("myElement")?.offsetWidth || 0;
      setElementWidth(width);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  const [elementHeight, setElementHeight] = useState(0);

  useEffect(() => {
    const handleResizeH = () => {
      const height = document.getElementById("myElement")?.offsetHeight || 0;
      setElementHeight(height);
    };
    handleResizeH();
    window.addEventListener("resize", handleResizeH);

    return () => {
      window.removeEventListener("resize", handleResizeH);
    };
  }, []);

  // i Started here
  const [currentDay, setCurrentDay] = useState<number>(1);

  function updateTimeLeft() {
    const now = Date.now();

    const diff = currentDay - now;

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    const timeLeftUPdate = { days, hours, minutes, seconds };
    return timeLeftUPdate;
  }

  const [timeLeft, setTimeLeft] = useState(updateTimeLeft);

  const url = `https://freemerch-a8b7d-default-rtdb.firebaseio.com/countdown_day.json`;

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        console.log("FireBase Successfully Fetched Success:", data);
        const targetDate = new Date(data);
        const targetTimeInMilliseconds = targetDate.getTime();
        setCurrentDay(targetTimeInMilliseconds);
      })
      .catch((error) => console.error("Error:", error));
  }, []);

  // update countdown
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(updateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [updateTimeLeft]);

  //   const addLeadingZero = (value: number) => {
  //     return value < 10 ? `0${value}` : value;
  //   };

  // Fix Hydration Warning
  const [isClient, setIsClient] = useState(false);
  useEffect(() => {
    setIsClient(true);
  }, []);

  const NewNoticeStyles =
    "uppercase font-satoshi font-medium text-xs tablet:text-base text-white";

  return (
    isClient && (
      <div>
        {+new Date() > +new Date(eventEndDate) ? (
          <div>
            <div>
              <div className="flex items-center justify-center mb-[20px]">
                <div
                  id="myElement"
                  className="border-[1px] border-b-[10px] border-b-[#2AB160]   mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]"
                >
                  <Confetti
                    width={elementWidth}
                    height={elementHeight}
                    numberOfPieces={50}
                    recycle={true}
                    run={true}
                  />
                  <Web3Image />
                  <h1 className="uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]">
                    Event
                  </h1>
                  <div className="text-center text-[#FFFFFF]">
                    <div className=" flex mx-auto w-[100%] text-center sm:w-[55%] items-center space-x-4 font-ppneue justify-evenly pb-[46px]">
                      <div className="sm:font-[800] text-[#2AB160] font-[700] text-[24px] sm:text-[32px] ">
                        Ended
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex   justify-center mb-[20px]">
            <div className="border-[1px]  border-b-[10px] border-b-[#2AB160]  mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]">
              <Web3Image />
              <h1 className="uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]">
                {timeLeft.days > 0 ? "Countdown to Event" : "Event Day"}
              </h1>
              <div className="text-center text-[#FFFFFF]">
                {currentDay === 1 ? (
                  <h1 className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] my-4">
                    Loading
                  </h1>
                ) : (
                  <Timer timeLeft={timeLeft} />
                )}
                <div className=" flex flex-col tablet:flex-row justify-between items-center max-w-[570px] mx-auto mb-3 tablet:mb-6">
                  <p className=" flex gap-3 items-center">
                    <CalenderIcon />
                    <span className={NewNoticeStyles}>
                      Date: April 4-6, 2024
                    </span>
                  </p>
                  <p className=" flex gap-3 items-center">
                    <LocationIcon />
                    <span className={NewNoticeStyles}>
                      Venue: ODUDUWA HALL, OAU, IFE.
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    )
  );
};

export default Countdown;

const Web3Image = () => {
  return (
    <div className="absolute left-[-3%] top-[-10%]">
      <Image
        className="md:w-[50%] w-[50%]"
        src="/Frame25.svg"
        alt="web3"
        width={180}
        height={10}
      />
    </div>
  );
};
