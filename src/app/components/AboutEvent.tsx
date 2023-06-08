import Image from 'next/image'
import React from 'react'

const AboutEvent = () => {
    return (
        <div className='container mx-auto mt-[100px]'>
            <div className='flex justify-center items-center  border-[#000000]'>
                <div className='w-[50%]  ml-[20px]'>
                    <h1 className='font-[800] text-[32px] text-left leading-[46.7px] tracking-[0.48px]'>About this event</h1>
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
                    <div className='mt-[40px]'>
                        <span className='py-[17px] border-[1px]'>
                            Get Registered
                        </span>

                    </div>
                </div>
                <div className='w-[50%] border-[1px]'>
                    <Image className='w-[100%]' src='/rectangle4.png' alt='img1' height={500} width={500} />
                </div>
            </div>

        </div>
    )
}

export default AboutEvent