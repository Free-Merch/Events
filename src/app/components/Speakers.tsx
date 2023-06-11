"use client"
import Image from 'next/image'
import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import ImageSlider from './ImageSlider'




const images = [
    '/Rectangle 5.png',
    '/Rectangle 6.png',
    '/Rectangle 7.png',
    '/Rectangle 8.png',

    // Add more image paths here
];


const Speakers = () => {
    return (
        <div className=' relative bg-[#0B1237] mt-[40px]'>
            <div className='absolute right-0 sm:right-[40px] '>
                <Image className='sm:w-[100%] w-[50%]' src='/Vector.svg' alt='svg' width={200} height={200} />
            </div>
            <div className='absolute top-[12%] '>
                <Image className='w-[100%]' src='/Vector1.svg' alt='svg' width={1000} height={1000} />
            </div>
            <div className='absolute bottom-0 '>
                <Image className='w-[100%]' src='/Vector2.svg' alt='svg' width={1000} height={1000} />
            </div>
            <div className='container  mx-auto'>

                <div className=' flex flex-col p-[0px] sm:p-[80px] '>
                    <div className=' mt-[80px] '>
                        <ImageSlider images={images} spePan='Our Speakers' />
                    </div>
                    <div className=' mt-[80px]'>
                        <ImageSlider images={images} spePan='Our Panelists' />
                    </div>
                </div>

            </div>
            {/* <ImageSlider images={images} /> */}

        </div>
    )
}

export default Speakers