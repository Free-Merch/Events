"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import pastEventsData from "../data/pastEvents.data";
import PastEvent from './PastEvent';


const PastEventsSlider: React.FC = () => {

    const [currentPastEventsIndex, setCurrentPastEventsIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentPastEventsIndex > 0) {
            setCurrentPastEventsIndex(currentPastEventsIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentPastEventsIndex < pastEventsData.length - 1) {
            setCurrentPastEventsIndex(currentPastEventsIndex + 1);
        }
    };

    return (
      <div className="container mx-auto sm:mb-[90px] mb-[50px] ">
        <div className="px-[20px] sm:flex-nowrap flex-wrap flex justify-between items-center font-[800] mb-[48px] text-left text-[32px] ">
          <h1 className="text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-ppneue font-[800] ">
            Past Event
          </h1>
          { pastEventsData.length > 1 && 
            <div className="flex  justify-between  items-center">
              <button className="" disabled={currentPastEventsIndex === 0}>
                  <BsFillArrowLeftCircleFill
                    size={30}
                    style={{ color: "black", border: "2px" }}
                    onClick={goToPreviousImage}
                    className="cursor-pointer  transform "
                  />
                </button>
                <div className="flex">
                  <RxDotFilled size={10} className="" />
                  <RxDotFilled size={10} className="" />
                  <RxDotFilled size={10} className="" />
                  <RxDotFilled size={10} className="" />
                </div>

                <button
                  className=""
                  disabled={currentPastEventsIndex === pastEventsData.length - 1}
                >
                  <BsFillArrowRightCircleFill
                    size={30}
                    onClick={goToNextImage}
                    className=" cursor-pointer  transform "
                  />
              </button>
            </div>
          }
        </div>
        <div className=" overflow-x-scroll">
          <div
            className="flex justify-between flex-nowrap  transition-transform duration-300"
            style={{
              transform: `translateX(-${currentPastEventsIndex * 100}%)`,
            }}
          >
            {pastEventsData.map((pastEvent, index) => (
              <PastEvent key={index} {...pastEvent} />
            ))}
          </div>
        </div>
      </div>
    );
};

export default PastEventsSlider;
