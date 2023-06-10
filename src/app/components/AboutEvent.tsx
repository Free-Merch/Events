import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const AboutEvent = () => {
    return (
        <div className='container max-w-[1000px] mx-auto mt-[100px] mb-[40px]'>
            <div className='flex justify-center md:flex-nowrap flex-wrap  items-start'>
                <div className='sm:w-[50%] w-[100%]  ml-[20px]'>
                    <h1 className='font-[800] text-[32px] text-center sm:text-left leading-[46.7px] tracking-[0.48px] mb-[20px]'>About this event</h1>
                    <p className='text-left font-[500] text-[16px] leading-[27px] tracking-[0.32px]'>
                        Crafting a beautiful portfolio and career story may seem like art, but
                        the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".
                        Crafting a beautiful portfolio and career story may seem like art, but
                        the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".
                        <br />
                        <br />
                        Crafting a beautiful portfolio and career story may seem like art, but
                        the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".
                        Crafting a beautiful portfolio and career story may seem like art, but
                        the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".
                    </p>
                    <div className='mt-[40px] mb-[20px] flex  md:justify-start justify-center '>
                        <div className='py-[10px] w-[35%] bg-[#F8F9FD] text-center  border-[1px] border-l-[2px] border-l-[#2ec866] px-1  relative'>
                            Get Registered
                            <span className='absolute right-[100000px] lg:top-[15px] lg:right-1 '><AiOutlineArrowRight /></span>
                        </div>

                    </div>
                </div>
                <div className=' relative sm:w-[50%] w-[100%] '>
                    <div className='h-[50%]'>
                        <Image className='w-[100%]  block h-[50%]' src='/Rectangle4.png' alt='img1' height={100} width={400} />
                    </div>

                    <div className='absolute   flex justify-evenly top-0 w-[100%]  h-[100%] border-[1px] border-white left-0'>
                        <div className='h-auto w-[50%] flex flex-col'>
                            <div className='w-[100%]  h-[50%] z-[1] rounded-[50%] block border-[1px] border-[green] '>

                            </div>
                            <div className='w-[100%]  z-[1] h-[50%] rounded-[50%] border-[1px] border-[green]'>

                            </div>
                        </div>

                        <div className='w-[50%] z-[1] h-[auto]  rounded-[50%] border-[1px] border-[green]  '>


                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default AboutEvent