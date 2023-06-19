import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
    return (
        <div className='w-[100%] bg-[#F8F9FD] sm:mb-[26px] mb-[93px]'>
            <div className='container  mx-auto '>
                <div className='flex justify-center'>
                    <div className='flex flex-wrap w-[100%] justify-around sm:justify-between  bg-[#F8F9FD]  my-[26px]'>
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/Zepelin.svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/Vector(1).svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/morpheus.svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/Vector(3).svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/Vector(4).svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block mb-[20px] sm:mb-0 w-[40%]' src='/Vector(5).svg' alt='vector' width={140} height={20} />
                        <Image className='sm:w-[10%] block  w-[40%]' src='/Vector(6).svg' alt='vector' width={140} height={20} />

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Sponsors