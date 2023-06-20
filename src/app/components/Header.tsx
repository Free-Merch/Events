import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'
import { GiFingerPrint } from 'react-icons/gi'
import Countdown from './Countdown'

const targetDate = new Date('2023-06-20T18:35:59');
const endTargetDate = new Date('2023-06-20T07:10:59');
const style = { color: "#2ec866", fontSize: "60px" }
const style1 = { color: "#2ec866", fontSize: "60px" }

const Header = () => {
    return (
        <div className='relative '>
            <div className="absolute sm:block hidden left-0 bottom-[30%]"><GiFingerPrint style={style} /></div>
            <div className="absolute right-[10%] top-[15%]"><GiFingerPrint style={style1} /></div>
            <div className='absolute  bottom-[-20px] sm:bottom-[-15px] right-0'>
                <Image className='' src='/Vector-Header2.svg' alt='vec' width={1000} height={200} />
            </div>
            <div className='absolute w-[100%]  bottom-[-20px]  sm:bottom-[-15px]  sm:left-0'>
                <Image className=' ' src='/Vector-Header1.svg' alt='vec1' width={1500} height={1000} />
            </div>
            <div className='container relative mx-auto h-[90vh] flex flex-col justify-between'>
                <div className='border-[#000000] sm:p-[0] px-[20px]'>
                    <h1 className='text-[#000000] mt-[60px] font-[600] text-[24px] uppercase leading-[40px]'> Logo </h1>
                </div>


                {/* <p className='absolute right-[3%] bottom-[64%] font-[500] text-[13px] rotate-[-40deg]'>Web2</p>
                <p className='absolute right-[3%] bottom-[58%] font-[500] text-[13px] rotate-[35deg]'>Web3</p> */}




                <div className='flex justify-center basis-[50%] items-center pt-[60px]'>
                    <div className='text-center  '>
                        <div className='pb-[40px] flex justify-center mx-auto items-center sm:w-full w-[50%]  '>
                            <div className=''>
                                <Image src='/Buidl_.svg' alt='build' width={450} height={100} />
                            </div>
                        </div>
                        <div >
                            <h2 className='font-[800] font-ppneue text-[20px] md:text-[32px] md:leading-[46.7px] leading-[20px] tracking-[0.48px]'>Product, Community and Future of adoption</h2>
                        </div>
                        {/* <div className='pt-[20px] font-[500] text-[16px] relative text-center'>
                            <h3 className='text-center'>Get Started</h3>
                            <span className='absolute right-[10000px] md:top-[25.0px] md:right-[250px]'>
                                <AiOutlineArrowRight />
                            </span>
                        </div> */}
                    </div>

                </div>

                <div className='' >
                    <Countdown eventTargetDate={targetDate}eventEndDate={endTargetDate} />
                </div>


            </div>

        </div>

    )
}

export default Header