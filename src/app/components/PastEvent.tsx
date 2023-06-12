import Image from 'next/image'
import React from 'react'
import { BiDotsHorizontalRounded } from 'react-icons/bi'
import { BsFillArrowLeftCircleFill, BsFillArrowRightCircleFill } from 'react-icons/bs'

const PastEvent = () => {
    return (
        <div className='container mx-auto mt-[50px]'>
            <div className='px-[20px] sm:flex-nowrap flex-wrap flex justify-between items-center font-[800] mb-[38px] text-left text-[32px] mt-[80px] '>
                <h1 className='text-[30px] md:text-[32px] whitespace-normal sm:w-[100%] w-[50%] md:font-[800] font-ppneue font-[800] '>Past Events</h1>
                <div className='flex justify-between w-[40%] items-center'>
                    <BsFillArrowLeftCircleFill />
                    <BiDotsHorizontalRounded />
                    <BsFillArrowRightCircleFill />
                </div>
            </div>
            <div className='flex gap-[20px] md:flex-nowrap flex-wrap justify-center md:justify-between items-start  px-[20px]'>

                <div className='md:w-[40%] mt-[20px] w-[100%]'>
                    <div>
                        <Image className='object-cover' src='/Rectangle13.png' alt='rect' width={500} height={400} />
                    </div>
                </div>
                <div className='md:w-[60%] w-[100%]'>
                    <div>
                        <h1 className='font-[800] text-[20px] text-left font-ppneue leading-[46.7px]'>Lorem name of events</h1>
                        <p className='font-[500] text-[16px] leading-[27px] font-satoshi tracking-[0.32px]'>Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes". Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                            the person in the other chair needs to see to get to "yes".
                            Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes".  Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                            the person in the other chair needs to see to get to "yes".
                        </p>
                    </div>
                    <div className='mt-[10px]'>
                        <h1 className='text-left font-[800] text-[16px]'>Sponsors & Partners</h1>
                        <div className='flex flex-col sm:w-[100%] justify-between py-[10px] ]'>
                            <div className='flex justify-between w-full sm:w-[60%] mb-[20px]'>
                                <Image className='w-[20%]' src='/Vector.png' alt='vector' width={1000} height={1000} />
                                <Image className='w-[20%]' src='/Vector1.png' alt='vector' width={1000} height={1000} />
                                <Image className='w-[20%]' src='/Vector2.png' alt='vector' width={1000} height={1000} />
                            </div>
                            <div className='flex justify-between flex-nowrap w-full sm:w-[80%]'>
                                <Image className='w-[20%]' src='/Vector3.png' alt='vector' width={1000} height={1000} />
                                <Image className='w-[20%]' src='/Vector4.png' alt='vector' width={1000} height={1000} />
                                <Image className='w-[20%]' src='/Vector5.png' alt='vector' width={1000} height={1000} />
                                <Image className='w-[20%]' src='/Vector6.png' alt='vector' width={1000} height={1000} />
                            </div>

                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default PastEvent