"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

interface CountdownProps {
    eventTargetDate: Date;
    eventEndDate: Date;
}


const Countdown: React.FC<CountdownProps> = ({ eventTargetDate, eventEndDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(eventTargetDate) - +new Date();

        let timeLeft = {
            days: 0,
            hours: 0,
            minutes: 0,
            seconds: 0
        };

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setTimeout(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearTimeout(timer);
    });

    const addLeadingZero = (value: number) => {
        return value < 10 ? `0${value}` : value;
    };

    return (
        <div>
            {+new Date() > +new Date(eventEndDate) ?
                <div>
                    <div className='flex   justify-center mb-[20px]'>

                        <div className='border-[1px]  mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]'>
                            <div className='absolute left-[-3%] top-[-10%]'>
                                <Image className='md:w-[50%] w-[50%]' src='/Frame25.svg' alt='web3' width={180} height={10} />
                            </div>


                            <h1 className='uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Event</h1>

                            <div className="text-center text-[#FFFFFF]">


                                <div className=" flex mx-auto w-[100%] text-center sm:w-[55%] items-center space-x-4 font-ppneue justify-evenly pb-[46px]">


                                    <div className="sm:font-[800] text-[#2AB160] font-[700] text-[24px] sm:text-[32px] ">
                                        Ended
                                    </div>




                                </div>
                            </div>

                        </div>

                    </div>
                </div> :
                <div className='flex   justify-center mb-[20px]'>

                    <div className='border-[1px]  mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]'>
                        <div className='absolute left-[-3%] top-[-10%]'>
                            <Image className='md:w-[50%] w-[50%]' src='/Frame25.svg' alt='web3' width={180} height={10} />
                        </div>
                        {timeLeft.seconds > 0 || timeLeft.minutes > 0 ?
                            <h1 className='uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Countdown to Event</h1> :
                            <h1 className='uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Event Day</h1>}

                        <div className="text-center text-[#FFFFFF]">


                            <div className=" flex mx-auto w-[100%] text-center sm:w-[55%] items-center space-x-4 font-ppneue justify-evenly pb-[46px]">


                                {timeLeft.days > 0 && (
                                    <div className=" sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                        <div className='relative  text-left'>
                                            {timeLeft.days} <span className='absolute right-[-80%] sm:right-[-160%] font-[700] sm:text-[32px] text-[24px] '>:</span>
                                        </div>

                                        <div className='font-[400] text-[14px] text-left'>
                                            {timeLeft.days === 1 ? 'Day' : 'Days'}
                                        </div>
                                    </div>
                                )}



                                {timeLeft.hours > 0 && (
                                    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] flex flex-col justify-start items-start ">
                                        <div className="relative text-left">
                                            {addLeadingZero(timeLeft.hours)}<span className='absolute  right-[-80%] sm:right-[-100%]'>:</span>
                                        </div>
                                        <div className="font-[400] text-[14px] text-left">Hours</div>
                                    </div>
                                )}




                                {timeLeft.minutes > 0 && (
                                    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                        <div className="relative text-start">
                                            {addLeadingZero(timeLeft.minutes)}<span className='absolute sm:right-[-100%]  right-[-80%]'>:</span>
                                        </div>
                                        <div className=" font-[400] text-[14px] text-left">Mins</div>
                                    </div>
                                )}




                                {timeLeft.seconds > 0 || timeLeft.minutes > 0 ?
                                    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                        <div className="text-left">
                                            {addLeadingZero(timeLeft.seconds)}
                                        </div>
                                        <div className="font-[400] text-[14px] text-left">Secs</div>
                                    </div> : <h1 className='font-[800] text-[24px] sm:text-[32px]'>Today</h1>
                                }



                            </div>
                        </div>

                    </div>

                </div>
            }




        </div>


    );
};

export default Countdown;
