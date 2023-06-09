import Image from 'next/image'
import React from 'react'

const PastEvent = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='px-[20px] font-[800] text-center md:text-left text-[32px] pb-[20px]'>Past Events</h1>
            <div className='flex gap-[20px] md:flex-nowrap flex-wrap justify-center items-start  px-[20px] mt-[30px]'>
            
                <div className='sm:w-[50%] w-[100%]'>
                    <div>
                        <Image src='/Rectangle13.png' alt='rect' width={500} height={400}/>
                    </div>
                </div>
                <div className='sm:w-[50%] w-[100%]'>
                    <h1 className='font-[800] text-[20px] text-center sm:text-left leading-[46.7px]'>Learning name of events</h1>
                    <p className='font-[500] text-[16px] leading-[27px] tracking-[0.32px]'>Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes". Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".
                        Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what the person in the other chair needs to see to get to "yes".  Crafting a beautiful portfolio and career story may seem like art, but the candidates who stand out know the exact science of what
                        the person in the other chair needs to see to get to "yes".</p>
                </div>
            </div>

        </div>
    )
}

export default PastEvent