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
        <div className='overflow-hidden sm:mx-0 mx-[10px] '>
            <div className='text-[#FFFFFF] flex justify-between item-center font-[800] text-[32px] tracking-[0.48px] mb-[40px] leading-[46.7px]'>
                <h1 className='text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-[500]'>{spePan}</h1>
                <div className='flex justify-between sm:w-[50%] w-[30%] items-center'>
                    <button className='pt-5' disabled={currentImageIndex === 0}>
                        <BsFillArrowLeftCircleFill onClick={prevImage} className='cursor-pointer  transform -translate-y-1/2' />
                    </button>

                    <BiDotsHorizontalRounded className='' />
                    
                    <button className='pt-5' disabled={currentImageIndex === images.length - 1}>
                        <BsFillArrowRightCircleFill onClick={nextImage} className=' cursor-pointer  transform -translate-y-1/2  ' />
                    </button>

                </div>

            </div>

            <div
                className={` flex relative  gap-2 transition-transform duration-300`}
                style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
            >
                {images.map((image, index) => (
                    <div key={index} className="w-[90%] sm:w-full h-auto  shrink-0 sm:flex-shrink" >
                        <Image width={400} height={400}  src={image} alt={`Image ${index}`} className="md:blur-sm w-full h-auto" />
                    </div>
                    
                ))}


                <div className='absolute lg:block  hidden z-[10] h-[50%] md:h-[70%] top-[10%] left-[10%] border-[1px] bg-[#FFFFFF] w-[75%]'>
                    <div>
                        <h1 className='text-[#0b1237] text-center mt-[10px] md:mt-[30px]  font-[800] text-[20px] md:text-[40px]'>We are accepting applications</h1>
                        <h2 className=' relative text-center font-[500] mt-[10px] mb-[37px] text-[16px]'>Apply to be a speaker or panelist at Build: < BsFillArrowRightCircleFill style = { style } className='absolute right-[22%] xl:right-[28%] bottom-[3px] '/></h2>
                    </div>

                </div>
            </div>
        </div>




    )
}

export default ImageSlider

