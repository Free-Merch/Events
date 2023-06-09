import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import Countdown from './Countdown'
import Number from './Number'

const targetDate = new Date('2023-12-31T23:59:59');

const Header = () => {
    return (
        <div className='container mx-auto h-[90vh] flex flex-col justify-between'>
            <div className='border-[#000000] sm:p-[0] px-[20px]'>
                <h1 className='text-[#000000] mt-[60px] text-[24px]  leading-[40px]'> Logo </h1>
            </div>


            <div className='flex justify-center items-center pt-[60px]'>
                <div className='text-center  '>
                    <div className='pb-[40px] '>
                        <h1 className='text-[#0B1237] font-[800] text-[100px] sm:text-[160px] leading-[57.2px] tracking-[0.48px]'>Buidl:</h1>

                    </div>
                    <div >
                        <h2 className='font-[800] text-[20px] md:text-[32px] md:leading-[46.7px] leading-[20px] tracking-[0.48px]'>Product, Community and Future of adoption</h2>
                    </div>
                    <div className='p-[40px] font-[500] text-[16px] relative text-center'>
                        <h3 className='text-center'>Get Started</h3>
                        <span className='absolute right-[10000px] md:top-[45.0px] md:right-[250px]'>
                            <AiOutlineArrowRight />
                        </span>
                    </div>
                </div>

            </div>

            <div >
                <Countdown targetDate={targetDate} />
            </div>


        </div>
    )
}

export default Header