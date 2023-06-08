import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Number from './Number'

const Header = () => {
    return (
        <div className='container mx-auto h-[80vh] flex flex-col justify-between'>
            <div className='border-[#000000]'>
                <h1 className='text-[#000000] mt-[60px] text-[24px] leading-[40px]'> Logo </h1>
            </div>


            <div className='flex justify-center items-center pt-[60px]'>
                <div className='text-center  '>
                    <div className='pb-[40px] '>
                        <h1 className='text-[#0B1237] font-[800] text-[160px] leading-[57.2px] tracking-[0.48px]'>Buidl:</h1>

                    </div>
                    <div >
                        <h2 className='font-[800] text-[32px] leading-[46.7px] tracking-[0.48px]'>Product, Community and Future of adoption</h2>
                    </div>
                    <div className='p-[40px] font-[500] text-[16px] relative text-center'>
                        <h3 className='text-center'>Get Started</h3>
                        <span className='absolute top-14 right-[400px]'>
                            <AiOutlineArrowRight />
                        </span>
                    </div>
                </div>

            </div>


            <div className='flex justify-center items- text-[#ffffff]'>
                <div className=' border-[1px] w-[70%] rounded-[27px] bg-[#0B1237]'>
                    <h1 className='uppercase text-center pt-[26px] font-[400] text-[16px]'>Countdown to Event</h1>
                    <div className='flex flex-col'>
                        <div className='flex justify-center items-center'>
                            <Number count='20' time='Days' />
                            <span className='font-[800] text-[32px] mr-[15px]'>:</span>
                            <Number count='20' time='Hours' />
                            <span className='font-[800] text-[32px] mr-[15px]'>:</span>
                            <Number count='20' time='Mins' />
                            <span className='font-[800] text-[32px] mr-[15px]'>:</span>
                            <Number count='20' time='Secs' />

                        </div>
                        <div className=' flex justify-center'>
                            <span className='font-[400] text-[14px] leading-[47px]'>Days</span>
                            <span className='font-[400] text-[14px] leading-[47px]'>Hours</span>
                            <span className='font-[400] text-[14px] leading-[47px]'>Mins</span>
                            <span className='font-[400] text-[14px] leading-[47px]'>Secs</span>
                        </div>


                    </div>



                </div>
            </div>
        </div>
    )
}

export default Header