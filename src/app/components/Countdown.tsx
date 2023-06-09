"use client"
import React, { useState, useEffect } from 'react';

interface CountdownProps {
    targetDate: Date;
}
interface timeLefts {
    days: Number,
    hours: Number,
    minutes: Number,
    seconds: Number
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
        <div className='flex justify-center'>
            <div className='border-[1px] w-[100%] sm:w-[70%] rounded-[27px] bg-[#0B1237]'>
                <h1 className='uppercase text-center pt-[26px] font-[400] text-[16px] text-[#FFFFFF]'>Countdown to Event</h1>
                <div className="text-center text-[#FFFFFF]">


                    <div className="flex justify-center pb-[20px]">
                        <div>
                            {timeLeft.days > 0 && (
                                <div className="sm:font-[800] font-[700] text-[20px] sm:text-[32px] ">
                                    {timeLeft.days} <span className=''>:</span>
                                    <div className='font-[400] text-[14px] text-left'>
                                        {timeLeft.days === 1 ? 'day' : 'days'}
                                    </div>
                                </div>
                            )}
                        </div>
                        <div className="sm:font-[800] font-[700] text-[20px] sm:text-[32px] ">
                            <div className="">
                                {addLeadingZero(timeLeft.hours)} :
                            </div>
                            <div className="font-[400] text-[14px] text-left">Hours</div>
                        </div>
                        <div className="sm:font-[800] font-[700] text-[20px] sm:text-[32px] ">
                            <div className="text-left">
                                {addLeadingZero(timeLeft.minutes)}  :
                            </div>
                            <div className=" font-[400] text-[14px] text-left">Mins</div>
                        </div>
                        <div className="sm:font-[800] font-[700] text-[20px] sm:text-[32px] ">
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
