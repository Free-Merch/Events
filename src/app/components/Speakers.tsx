import Image from 'next/image'
import React from 'react'

const Speakers = () => {
    return (
        <div className='container mx-auto mt-[40px]'>
            <div className='flex  flex-col justify-around bg-[#0B1237] p-[80px]'>
                <div>
                    <h1 className='text-[#FFFFFF] font-[800] text-[32px] leading-[46.7px]'>Our Speakers</h1>
                    <div className='flex gap-2 flex-wrap md:flex-nowrap rounded-[8px]'>
                        <Image src='/Rectangle 5.png' alt='img-2' width={400} height={400} />
                        <Image src='/Rectangle 6.png' alt='img-2' width={400} height={400} />
                        <Image src='/Rectangle 7.png' alt='img-2' width={400} height={400} />
                        <Image src='/Rectangle 8.png' alt='img-2' width={400} height={400} />
                    </div>

                </div>
                <div>
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
    )
}

export default Speakers