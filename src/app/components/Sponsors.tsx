import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
    return (
        <div className='w-[100%] bg-[#F8F9FD]'>
            <div className='container  mx-auto mt-[50px]'>
                <div>
                    <div className='flex flex-wrap justify-evenly  bg-[#F8F9FD]  py-[40px]'>
                        <Image className='w-[10%]' src='/Zepelin.svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/Vector(1).svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/morpheus.svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/Vector(3).svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/Vector(4).svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/Vector(5).svg' alt='vector' width={1000} height={1000} />
                        <Image className='w-[10%]' src='/Vector(6).svg' alt='vector' width={1000} height={1000} />

                    </div>
                </div>

            </div>
        </div>

    )
}

export default Sponsors