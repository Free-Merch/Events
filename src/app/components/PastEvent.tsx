'use client'
import Image from 'next/image'
import React, { useState } from 'react'
import { RxDotFilled } from 'react-icons/rx';
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'
import { Splide, SplideSlide } from '@splidejs/react-splide';
import ISlider from './ISlider';

const images = [
    '/Rectangle 5.png',
    '/Rectangle 6.png',
    '/Rectangle 7.png',
    '/Rectangle 8.png',

    // Add more image paths here
];

const PastEvent = () => {

    return (
        <div className='container mx-auto sm:mb-[90px] mb-[50px]'>
            <ISlider images={images} />

            {/* <div className='flex gap-[48px] md:flex-nowrap flex-wrap justify-center md:justify-between   px-[20px]'>
                <div className='md:w-[33%] mt-[13px] w-[100%]'>
                    <div>
                        <Image className='object-cover block h-full' src='/Rectangle13.png' alt='rect' width={450} height={450} />
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
            </div> */}

        </div>
    )
}

export default PastEvent