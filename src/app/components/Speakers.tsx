import Image from 'next/image'
import React from 'react'
import { BsFillArrowRightCircleFill } from 'react-icons/bs'
import { BsFillArrowLeftCircleFill } from 'react-icons/bs'
import { BiDotsHorizontalRounded } from 'react-icons/bi'


const Speakers = () => {
    return (
        <div className=' relative bg-[#0B1237] mt-[40px]'>
            <div className='absolute right-[40px]'>
                <Image src='/Vector.svg' alt='svg' width={200} height = {200}/>
            </div>
            <div className='absolute top-[12%] '>
                <Image className='w-[100%]' src='/Vector1.svg' alt='svg' width={1000} height = {1000}/>
            </div>
            <div className='absolute bottom-0 '>
                <Image className='w-[100%]' src='/Vector2.svg' alt='svg' width={1000} height = {1000}/>
            </div>
            <div className='container  mx-auto'>
                <div className='flex  flex-col justify-around p-[80px]'>
                    <div className=' mt-[80px] z-[1]'> 
                        <div className='text-[#FFFFFF] flex justify-between item-center font-[800] text-[32px] tracking-[0.48px] mb-[40px] leading-[46.7px]'>
                            <h1>Our Speakers</h1>
                            <div className='flex justify-between w-[20%] items-center'>
                                <BsFillArrowLeftCircleFill />
                                <BiDotsHorizontalRounded />
                                <BsFillArrowRightCircleFill />
                            </div>

                        </div>
                        <div className='flex gap-2 z-[1] flex-wrap md:flex-nowrap rounded-[8px]'>
                            <Image src='/Rectangle 5.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle 6.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle 7.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle 8.png' alt='img-2' width={400} height={400} />
                        </div>

                    </div>
                    <div className='z-[1]'>
                        <h1 className='text-[#FFFFFF] font-[800] text-[32px] leading-[46.7px] pt-[40px] pb-[30px]'>Our Panelist</h1>
                        <div className='flex gap-2 flex-wrap md:flex-nowrap  rounded-[8px]'>
                            <Image src='/Rectangle9.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle10.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle11.png' alt='img-2' width={400} height={400} />
                            <Image src='/Rectangle12.png' alt='img-2' width={400} height={400} />

                        </div>


                    </div>
                </div>

            </div>

        </div>
    )
}

export default Speakers