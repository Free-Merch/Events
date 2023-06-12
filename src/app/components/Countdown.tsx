"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'

interface CountdownProps {
    targetDate: Date;
}


const Countdown: React.FC<CountdownProps> = ({ targetDate }) => {
    const calculateTimeLeft = () => {
        const difference = +new Date(targetDate) - +new Date();
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
        <div className='flex relative justify-center mb-[20px]'>

            <div className='border-[1px] relative w-[100%] md:w-[50%] rounded-[27px] bg-[#0B1237]'>
                <div className='absolute left-[-3%] top-[-20%]'>
                    <Image className='md:w-[50%] w-[50%]' src='/Frame25.svg' alt='web3' width={180} height={10} />
                </div>
                <h1 className='uppercase text-center pt-[26px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Countdown to Event</h1>
                <div className="text-center text-[#FFFFFF]">


                    <div className="flex font-ppneue justify-evenly sm:justify-around pb-[20px]">
                        <div>
                            {timeLeft.days > 0 && (
                                <div className="relative sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                    {timeLeft.days} <span className='absolute right-[-80%]'>:</span>
                                    <div className='font-[400] text-[14px] text-left'>
                                        {timeLeft.days === 1 ? 'day' : 'Days'}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                            <div className="relative">
                                {addLeadingZero(timeLeft.hours)}<span className='absolute right-[-100%]'>:</span>
                            </div>
                            <div className="font-[400] text-[14px] text-left">Hours</div>
                        </div>
                        <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                            <div className="relative text-left">
                                {addLeadingZero(timeLeft.minutes)}<span className='absolute right-[-100%]'>:</span>
                            </div>
                            <div className=" font-[400] text-[14px] text-left">Mins</div>
                        </div>
                        <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                            <div className="text-left">
                                {addLeadingZero(timeLeft.seconds)}
                            </div>
                            <div className="font-[400] text-[14px] text-left">Secs</div>
                        </div>
                    </div>
                </div>

            </div>

        </div>


    );
};

export default Countdown;
