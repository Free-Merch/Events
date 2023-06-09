import Image from 'next/image'
import React from 'react'

const PastEvent = () => {
    return (
        <div className='container mx-auto'>
            <h1 className='px-[20px] font-[800] text-[32px] pb-[20px]'>Past Events</h1>
            <div className='flex gap-[20px] justify-center items-start  px-[20px] mt-[30px]'>
            
                <div className='w-[40%]'>
                    <div>
                        <Image src='/Rectangle13.png' alt='rect' width={400} height={400}/>
                    </div>
                </div>
                <div className='w-[50%]'>
                    <h1 className='font-[800] text-[20px] leading-[46.7px]'>Learning name of events</h1>
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