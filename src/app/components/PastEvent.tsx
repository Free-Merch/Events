import Image from 'next/image'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const PastEvent = () => {
    return (
        <div className='container mx-auto mt-[60px]'>
            <div className='px-[20px] sm:flex-nowrap flex-wrap flex justify-between items-center font-[800] text-center md:text-left text-[32px] pb-[20px]'>
                <h1>Past Events</h1>
                <div className='flex justify-between w-[20%] items-center'>
                    <BsFillArrowLeftCircleFill />
                    <BiDotsHorizontalRounded />
                    <BsFillArrowRightCircleFill />
                </div>
            </div>
            <div className='flex gap-[20px] md:flex-nowrap flex-wrap justify-center md:justify-between items-start  px-[20px] mt-[30px]'>

                <div className='md:w-[40%] w-[100%]'>
                    <div>
                        <Image src='/Rectangle13.png' alt='rect' width={500} height={400} />
                    </div>
                </div>
                <div className='md:w-[60%] w-[100%]'>
                    <div>
                        <h1 className='font-[800] text-[20px] text-center sm:text-left leading-[46.7px]'>Learning name of events</h1>
                        <p className='font-[500] text-[16px] leading-[27px] tracking-[0.32px]'>Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes". Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                            the person in the other chair needs to see to get to "yes".
                            Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes".  Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                            the person in the other chair needs to see to get to "yes".
                        </p>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='text-left font-[800] text-[16px]'>Sponsors & Partners</h1>
                        <div className='flex justify-between py-[10px]'>
                            <Image className='w-[10%]' src='/Vector.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector1.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector2.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector3.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector4.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector5.png' alt='vector' width={1000} height={1000} />
                            <Image className='w-[10%]' src='/Vector6.png' alt='vector' width={1000} height={1000} />

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PastEvent