"use client"
import Image from 'next/image'
import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

interface ImageSliderProps {
    images: string[];
}

const ISlider: React.FC<ImageSliderProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const goToPreviousImage = () => {
        if (currentImageIndex > 0) {
            setCurrentImageIndex(currentImageIndex - 1);
        }
    };

    const goToNextImage = () => {
        if (currentImageIndex < images.length - 1) {
            setCurrentImageIndex(currentImageIndex + 1);
        }
    };

    return (
        <div className="  ">
            <div className='px-[20px] sm:flex-nowrap flex-wrap flex justify-between items-center font-[800] mb-[48px] text-left text-[32px] '>
                <h1 className='text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-ppneue font-[800] '>Past Events</h1>
                <div className='flex  justify-between  items-center'>
                    <button className='' disabled={currentImageIndex === 0}>
                        <BsFillArrowLeftCircleFill  size={30} style={{color:'black',border:'2px'}} onClick={goToPreviousImage} className='cursor-pointer  transform ' />
                    </button>
                    <div className='flex'>
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                        <RxDotFilled size={10} className='' />
                    </div>

                    <button className='' disabled={currentImageIndex === images.length - 1}>
                        <BsFillArrowRightCircleFill size={30} onClick={goToNextImage} className=' cursor-pointer  transform ' />
                    </button>

                </div>
            </div>
            <div className=" overflow-x-scroll">
                <div
                    className="flex justify-between flex-nowrap  transition-transform duration-300"
                    style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}
                >
                    {images.map((image, index) => (
                        <div key={index} className='w-[100%] gap-[48px] md:flex-nowrap flex-wrap flex  h-auto px-[20px] justify-center md:justify-between shrink-0'>
                            <div className='md:w-[33%] mt-[13px] w-[100%]'>
                                <div>
                                    <Image className='object-cover bloc h-ful' src={image} alt='rect' width={450} height={450} />
                                </div>
                            </div>
                            <div className='grow md:w-[60%] w-[100%]'>
                                <div>
                                    <h1 className='font-[800] text-[20px] text-left font-ppneue leading-[46.7px]'>Lorem name of events</h1>
                                    <p className='font-[500] text-[16px] leading-[27px] font-satoshi tracking-[0.32px]'>Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes". Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                                        the person in the other chair needs to see to get to "yes".
                                        Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes".  Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                                        the person in the other chair needs to see to get to "yes".
                                    </p>
                                </div>
                                <div className='mt-[48px]'>
                                    <h1 className='text-left font-ppneue font-[800] text-[16px]'>Sponsors & Partners</h1>
                                    <div className='flex flex-col sm:w-[100%] justify-between py-[10px] ]'>
                                        <div className='flex justify-between w-full sm:w-[60%] mb-[20px]'>
                                            <Image className='w-[20%] block' src='/Vector.png' alt='vector' width={100} height={18} />
                                            <Image className='w-[20%] block' src='/Vector1.png' alt='vector' width={100} height={18} />
                                            <Image className='w-[20%] block' src='/Vector2.png' alt='vector' width={100} height={18} />
                                        </div>
                                        <div className='flex justify-between flex-nowrap w-full sm:w-[80%]'>
                                            <Image className='w-[20%] block' src='/Vector3.png' alt='vector' width={100} height={18} />
                                            <Image className='w-[20%] block' src='/Vector4.png' alt='vector' width={100} height={18} />
                                            <Image className='w-[20%] block' src='/Vector5.png' alt='vector' width={100} height={18} />
                                            <Image className='w-[20%] block' src='/Vector6.png' alt='vector' width={100} height={18} />
                                        </div>

                                    </div>
                                </div>

                            </div>
                        </div>

                    ))}
                </div>

                {/* <button
                    className="absolute top-1/2 bg-red-600 left-0 transform -translate-y-1/2"
                    onClick={goToPreviousImage}
                    disabled={currentImageIndex === 0}
                >
                    Previous
                </button>

                <button
                    className="absolute top-1/2 bg-blue-600 right-0 transform -translate-y-1/2"
                    onClick={goToNextImage}
                    disabled={currentImageIndex === images.length - 1}
                >
                    Next
                </button> */}
            </div>

        </div>

    );
};

export default ISlider;
