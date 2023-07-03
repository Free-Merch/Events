"use client"
import React, { useState, useEffect } from 'react';
import Image from 'next/image'
import Confetti from 'react-confetti'


interface CountdownProps {
    eventTargetDate: Date;
    eventEndDate: Date;
}


const Countdown: React.FC<CountdownProps> = ({ eventTargetDate, eventEndDate }) => {

    const [elementWidth, setElementWidth] = useState(0)

    useEffect(() => {
        const handleResize = () => {
            const width = document.getElementById('myElement')?.offsetWidth || 0;
            setElementWidth(width)
        }
        handleResize();
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [])
    const [elementHeight, setElementHeight] = useState(0)

    useEffect(() => {
        const handleResizeH = () => {
            const height = document.getElementById('myElement')?.offsetHeight || 0;
            setElementHeight(height)
        }
        handleResizeH();
        window.addEventListener('resize', handleResizeH)

        return () => {
            window.removeEventListener('resize', handleResizeH);
        }
    }, [])


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
                    <div>
                        <div className='flex items-center justify-center mb-[20px]'>

                            <div id='myElement' className='border-[1px] border-b-[10px] border-b-[#2AB160]   mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]'>
                                <Confetti
                                    width={elementWidth}
                                    height={elementHeight}
                                    numberOfPieces={50}
                                    recycle={true}
                                    run={true}

                                />
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

                    </div>


                </div> :
                <div className='flex   justify-center mb-[20px]'>

                    <div className='border-[1px]  border-b-[10px] border-b-[#2AB160]  mx-[20px] relative w-[90%] lg:w-[52%] rounded-[27px] bg-[#0B1237]'>
                        {/* <Confetti
                            width={window.innerWidth/2}
                            height={200}
                            numberOfPieces={200}
                            recycle={true}
                        /> */}
                        <div className='absolute left-[-3%] top-[-10%]'>
                            <Image className='md:w-[50%] w-[50%]' src='/Frame25.svg' alt='web3' width={180} height={10} />
                        </div>
                        {timeLeft.seconds > 0 || timeLeft.minutes > 0 ?
                            <h1 className='uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Countdown to Event</h1> :
                            <h1 className='uppercase text-center pt-[47px] pb-[21px] font-[400] text-[16px] font-satoshi text-[#FFFFFF]'>Event Day</h1>}

                        <div className="text-center text-[#FFFFFF]">


                            <div className=" flex mx-auto w-[100%] text-center sm:w-[55%] items-start space-x-4 font-ppneue justify-center sm:justify-aroun pb-[46px]">


                                {timeLeft.days > 0 && (
                                    <div className=" sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                        <div className='relative  text-left'>
                                            {timeLeft.days}
                                        </div>

                                        <div className='font-[400] text-[14px] text-left'>
                                            {timeLeft.days === 1 ? 'Day' : 'Days'}
                                        </div>
                                    </div>
                                )}

                                {timeLeft.days > 0 && (
                                    <div className='font-[700]  sm:text-[32px] text-[24px]'>:</div>
                                )}





                                {timeLeft.hours > 0 && (
                                    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] flex flex-col justify-start items-start ">
                                        <div className="relative text-left">
                                            {addLeadingZero(timeLeft.hours)}
                                        </div>
                                        <div className="font-[400] text-[14px] text-left">Hours</div>
                                    </div>
                                )}

                                {timeLeft.hours > 0 && (
                                    <div className='font-[700]  sm:text-[32px] text-[24px]'>:</div>
                                )}




                                {timeLeft.minutes > 0 && (
                                    <div className="sm:font-[800] font-[700] text-[24px] sm:text-[32px] ">
                                        <div className="relative text-start">
                                            {addLeadingZero(timeLeft.minutes)}
                                        </div>
                                        <div className=" font-[400] text-[14px] text-left">Mins</div>
                                    </div>
                                )}


                                {timeLeft.minutes > 0 && (
                                    <div className='font-[700]  sm:text-[32px] text-[24px]'>:</div>
                                )}

                                {timeLeft.seconds > 0 && timeLeft.minutes > 0 && timeLeft.hours>0 && timeLeft.days>0 ?
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
