import React, { useState } from 'react';
import Image from 'next/image'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';


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
                <div className='flex sm:hidden justify-between sm:w-[30%] w-[30%] items-center'>
                    <button className='' disabled={currentImageIndex === 0}>
                        <BsFillArrowLeftCircleFill onClick={prevImage} className='cursor-pointer  transform ' />
                    </button>

                    <BiDotsHorizontalRounded className='' />

                    <button className='' disabled={currentImageIndex === images.length - 1}>
                        <BsFillArrowRightCircleFill onClick={nextImage} className=' cursor-pointer  transform ' />
                    </button>

                </div>

            </div>
            <div className='overflow-x-scroll '>
                <div
                    className={` flex  relative transform  gap-4 transition-transform duration-300`}
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className="w-[90%] sm:w-full h-auto  shrink-0 sm:flex-shrink" >
                            <Image width={400} height={400} src={image} alt={`Image ${index}`} className="blur-sm w-full h-auto" />
                        </div>

                    ))}


                    <div className='absolute lg:block z-[10] top-[40%]  sm:top-[10%] left-[10%] border-[1px] bg-[#FFFFFF] w-[75%]'>
                        <div>
                            <h1 className='text-[#0b1237] text-center xl:mt-[47px] mt  font-ppneue  font-[800] md:text-[20px] lg:text-[40px]'>We are accepting applications</h1>
                            <h2 className='relative text-center font-[500] mt-[10px] lg:mb-[37px] mb-[17px] font-satoshi text-[16px]'>Apply to be a speaker or panelist at Build: < BsFillArrowRightCircleFill size='20px' color="#2ec866" style={{ border:'#2ec866' }} className='absolute hidden lg:inline right-[22%] xl:right-[29.5%] bottom-[2px] ' /></h2>
                        </div>

                    </div>
                </div>

            </div>

        </div>




    )
}

export default ImageSlider

