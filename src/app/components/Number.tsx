import React from 'react'

interface Nprops {
    count: string
    time: string
}

const Number = ({ count, time }: Nprops) => {
    return (
        <div className=''>
            <div className=' font-[800] text-[32px] mr-[20px] '>
                <div>{count}</div>
                <div className='font-[700] text-[14px] leading-[47px]'>Days</div>
                {/* <span className='font-[400] text-[14px] leading-[47px]'>{time}</span> */}
            </div>
            {/* <div className="w-16 mx-2">
                <div className="text-3xl font-semibold">
                    {addLeadingZero(timeLeft.hours)}
                </div>
                <div className="text-sm">Hours</div>
            </div> */}

        </div>


    )
}

export default Number