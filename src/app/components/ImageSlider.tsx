import React, { useState } from 'react';
import Image from 'next/image'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs';
import { BiDotsHorizontalRounded } from 'react-icons/bi';

interface ImageSliderProps {
    images: string[],
    spePan: string
}


const ImageSlider: React.FC<ImageSliderProps> = ({ images, spePan }) => {

    const [currentImageIndex, setCurrentImageIndex] = useState(0)

    const nextImage = () => {
        if (currentImageIndex < images.length) {
            setCurrentImageIndex(currentImageIndex - 1);
        }

    }
    const prevImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    }

    return (
        <div>
            <div className='text-[#FFFFFF] flex justify-between item-center font-[800] text-[32px] tracking-[0.48px] mb-[40px] leading-[46.7px]'>
                <h1 className='text-[30px] md:text-[32px] md:font-[800] font-[500]'>{spePan}</h1>
                <div className='flex justify-between w-[20%] items-center'>
                    <button disabled={currentImageIndex === 0}>
                        <BsFillArrowLeftCircleFill onClick={prevImage} className='cursor-pointer prev-btn' />
                    </button>

                    <BiDotsHorizontalRounded />
                    <button disabled={currentImageIndex === images.length - 1}>
                        <BsFillArrowRightCircleFill onClick={nextImage} className='cursor-pointer next-btn' />
                    </button>

                </div>

            </div>

            <div
                className=" flex relative  md:flex-nowrap border-[2px]   gap-2 transition-transform duration-300"
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                
                    {images.map((image, index) => (
                       
                            <Image width={400} height={400} key={index} src={image} alt={`Image ${index}`} className="" />
                        
                        
                    ))}
                

                <div className='absolute  hidden z-[10] h-[50%] md:h-[70%] top-[10%] left-[10%] border-[1px] bg-[#FFFFFF] w-[75%]'>
                    <div>
                        <h1 className='text-[#0b1237] text-center mt-[10px] md:mt-[30px]  font-[800] text-[20px] md:text-[40px]'>We are accepting applications</h1>
                        <h2 className='text-center font-[500] mt-[10px] mb-[37px] text-[16px]'>Apply to be a speaker or panelist at Build:</h2>
                    </div>

                </div>
            </div>
        </div>




    )
}

export default ImageSlider

