import React from 'react'

interface Nprops {
    count: string
    time : string
}

const Number = ({ count,time }: Nprops) => {
    return (
        <div className=''>
            <div className=' font-[800] text-[32px] mr-[20px] '>
                <h1>{count}</h1>
                {/* <span className='font-[400] text-[14px] leading-[47px]'>{time}</span> */}
            </div>

        </div>


    )
}

export default Number