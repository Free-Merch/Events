import React from 'react'

const Speak = () => {
    return (
        <div className='container mt-[30px] mb-[40px] mx-auto flex justify-center items-center text-[#FFFFFF]'>
            <div className='flex bg-[#0B1237] justify-center items-center rounded-[16px] border-[1px] w-[80%] h-[20%]'>
                <div>
                    <div>
                        <h1 className='text-center font-[800] text-[32px] pb-[30px] pt-[100px]'>Speak with us</h1>
                    </div>
                    <div className='relative w-[581px] pb-[90px] rounded-[40px]'>
                        <input placeholder='Enter your email' className='w-[100%] p-[20px] rounded-[40px]' type='text' />
                        <button className='absolute uppercase font-[700] text-[16px] py-[5px] bg-[#2EC866] rounded-[40px] w-[200px]  top-[16px] right-[18px]'>send</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Speak