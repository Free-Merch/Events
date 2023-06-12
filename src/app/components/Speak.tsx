import Image from 'next/image'
import React from 'react'

const Speak = () => {
    return (
        <div className='container mt-[30px] mb-[40px] mx-auto flex justify-center items-center text-[#FFFFFF]'>
            <div className='flex relative bg-[#0B1237] justify-center items-center rounded-[16px] border-[1px] w-[95%] h-[20%]'>
                <div className='absolute right-[50px] sm:right-[117px] top-[20px]'>
                    <Image src='/Vector336.svg' alt='spesss' width={100} height={10}/>
                </div>
                <div className='absolute left-[50px] sm:left-[117px] top-[20px]'>
                    <Image src='/Vector3.svg' alt='spess' width={100} height={10}/>
                </div>
                <div className='absolute left-[60px] bottom-0'>
                    <Image src='/Vector33.svg' alt='spes' width={10} height={10}/>
                </div>
                <div>
                    <div>
                        <h1 className='text-center font-[800] text-[20px] md:text-[32px] font-ppneue pb-[30px] pt-[100px]'>We want to hear from you</h1>
                    </div>
                    <div className='relative w-[100%] pb-[90px] rounded-[40px]'>
                        <input placeholder='Enter your email' className='md:w-[571px] w-[250px] font-satoshi p-[10px] md:p-[20px] rounded-[40px]' type='text' />
                        <button className='absolute uppercase font-[700] text-[16px] py-[5px] bg-[#2EC866] rounded-[40px] md:w-[200px] w-[100px] top-[70px] right-[70px] md:top-[16px] md:right-[18px]'>send</button>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default Speak