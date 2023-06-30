import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { RxDotFilled } from 'react-icons/rx';
import { acceptingApplications } from '../data/speakers.data';


interface ImageSliderProps {
    images: string[],
    spePan: string,
    title: "panelist" | "speaker"
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images, spePan, title }) => {

    let defaultValue: number;
    const [windowWidth, setWindowWidth] = useState<number>(0);

    if (windowWidth > 640) {
        defaultValue = 4; // Set number for condition set 1
    } else {
        defaultValue = 0; // Set number for condition set 2
    }
    const [currentImageIndex, setCurrentImageIndex] = useState(0)
    const slider = useRef<HTMLDivElement>(null)

    useEffect(() => {
        const handleResize = () => {
            setWindowWidth(window.innerWidth);
            console.log('window width: ',windowWidth);
            
        };

        handleResize(); // Initial window width setup

        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const nextImage = () => {
      if(slider.current){
        slider.current.scrollLeft += 
          (windowWidth >= 640 ? 28 : 100)/100 * slider.current.clientWidth;
      }
    }

    const prevImage = () => {
      if (slider.current) {
        slider.current.scrollLeft -=
          (windowWidth >= 640 ? 28 : 100)/100 * slider.current.clientWidth;
      }
    }

    return (
      <div className="sm:mx-0 mx-[10px] ">
        <div className="text-[#FFFFFF] flex justify-between item-center font-[800] text-[32px] tracking-[0.48px] mb-[40px] leading-[46.7px]">
          <h1 className="text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-ppneue font-[500]">
            {spePan}
          </h1>
          {!acceptingApplications && (
            <div className="flex  justify-between  items-center">
              <button className="" disabled={currentImageIndex === 0}>
                <BsFillArrowLeftCircleFill
                  size={30}
                  onClick={prevImage}
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
                disabled={currentImageIndex === images.length - 1}
              >
                <BsFillArrowRightCircleFill
                  size={30}
                  onClick={nextImage}
                  className=" cursor-pointer  transform "
                />
              </button>
            </div>
          )}
        </div>
        {acceptingApplications ? (
          <div className="overflow-hidden ">
            <div
              className={` flex relative transform gap-0  sm:gap-4 transition-transform duration-300`}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[100%] sm:w-full h-auto min-w-[28%]  shrink-0 sm:flex-shrink"
                >
                  <Image
                    width={276}
                    height={276}
                    src={image}
                    alt={`Image ${index}`}
                    className="blur-sm w-full h-auto"
                  />
                </div>
              ))}

              <div className="absolute lg:block z-[10] top-[20%]  lg:top-[20%] left-0 sm:left-[10%] border-[1px] bg-[#FFFFFF] w-[100%] sm:w-[75%]">
                <div className="flex justify-center align-middle flex-col mt-[49px] md:mt-[42px] mb-[26px]">
                  <h1 className="text-[#0b1237] text-center xl:mb-[10px]  font-ppneue leading-none mb-[18px] font-[800] text-[24px] lg:text-[40px]">
                    We are accepting applications
                  </h1>
                  <a href="#">
                    <h2 className="flex justify-center items-center font-[500] font-satoshi text-[16px]">
                      Apply to be a {title} at Buidl: &nbsp;
                      <BsFillArrowRightCircleFill
                        size="20px"
                        fill="#2ec866"
                        stroke="#2ec866"
                        style={{ border: "#2ec866" }}
                        className="inline"
                      />
                    </h2>
                  </a>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="overflow-x-scroll" ref={slider}>
            <div
              className={`flex  relative transform gap-0  sm:gap-4 transition-transform duration-300`}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-[100%] sm:w-full h-auto min-w-[28%]  shrink-0 sm:flex-shrink"
                >
                  <Image
                    width={276}
                    height={276}
                    src={image}
                    alt={`Image ${index}`}
                    className="object-contain w-full h-auto"
                  />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    );
}

export default ImageSlider

