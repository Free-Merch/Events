import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const AboutEvent = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <div className='flex justify-center md:flex-nowrap flex-wrap  items-center'>
                <div className='sm:w-[50%] w-[100%]  ml-[20px]'>
                    <h1 className='font-[800] text-[32px] text-center sm:text-left leading-[46.7px] tracking-[0.48px]'>About this event</h1>
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
                    <div className='mt-[40px] flex sm:justify-start justify-center'>
                        <div className='py-[17px]  border-[1px] px-1 w-[35%] relative'>
                            Get Registered
                            <span className='absolute top-[21px] right-1'><AiOutlineArrowRight/></span>
                        </div>

                    </div>
                </div>
                <div className='sm:w-[50%] w-[100%] border-[1px]'>
                    <Image className='w-[100%]' src='/Rectangle4.png' alt='img1' height={400} width={400} />
                </div>
            </div>

        </div>
    )
}

export default AboutEvent