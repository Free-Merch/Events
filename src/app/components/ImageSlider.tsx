import React, { useState } from 'react';
import Image from 'next/image'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';
import { RxDotFilled } from 'react-icons/rx';


interface ImageSliderProps {
    images: string[],
    spePan: string
}

const style = { color: "#0b1237", }


const ImageSlider: React.FC<ImageSliderProps> = ({ images, spePan }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
            console.log('next clicked');
        }



    }
    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
            console.log('prev clicked');
        }


    }

    return (
        <div className='sm:mx-0 mx-[10px] '>
            <div className='text-[#FFFFFF] flex justify-between item-center font-[800] text-[32px] tracking-[0.48px] mb-[40px] leading-[46.7px]'>
                <h1 className='text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-ppneue font-[500]'>{spePan}</h1>
                <div className='flex  justify-between  items-center'>
                    <button className='' disabled={currentImageIndex === 0}>
                        <BsFillArrowLeftCircleFill size={30} onClick={prevImage} className='cursor-pointer  transform ' />
                    </button>
                    <div className='flex'>
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                    </div>

                    <button className='' disabled={currentImageIndex === images.length - 1}>
                        <BsFillArrowRightCircleFill size={30} onClick={nextImage} className=' cursor-pointer  transform ' />
                    </button>

                </div>

            </div>
            <div className='overflow-x-scroll '>
                <div
                    className={` flex  relative transform  gap-4 transition-transform duration-300`}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-[90%] sm:w-full h-auto min-w-[28%]  shrink-0 sm:flex-shrink" >
                            <Image width={276} height={276} src={image} alt={`Image ${index}`} className="blur-sm w-full h-auto" />
                        </div>

                    ))}


                    <div className='absolute lg:block z-[10] top-[20%]  lg:top-[20%] left-0 sm:left-[10%] border-[1px] bg-[#FFFFFF] w-[100%] sm:w-[75%]'>
                        <div>
                            <h1 className='text-[#0b1237] text-center mt-[42px] md:mt-[10px] lg:mt-[20px] xl:mt-[47px] xl:mb-[10px]  font-ppneue leading-[24.6px] lg:leading-[69.7px]  font-[800] text-[24px] lg:text-[40px]'>We are accepting applications</h1>
                            <h2 className='relative text-center font-[500]  lg:mb-[30px] mb-[29.5px] font-satoshi text-[16px]'>Apply to be a speaker at Build:
                            <a href="#">< BsFillArrowRightCircleFill size='20px' color="#2ec866" style={{ border: '#2ec866' }} className='absolute md:right-[20%] right-[45%]  lg:right-[28%] xl:right-[33%] sm:bottom-[2px] ' /></a> </h2>
                        </div>

                    </div>
                </div>

            </div>

        </div>




    )
}

export default ImageSlider

