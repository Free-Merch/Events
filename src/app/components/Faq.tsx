'use client'
import React from 'react'
import { IoIosAddCircleOutline } from 'react-icons/io'
import { AiOutlineMinusCircle } from 'react-icons/ai'
import { IoIosArrowUp } from 'react-icons/io'
import { Disclosure } from '@headlessui/react'
import Disclosures from './Disclosure'
// import { ChevronUpIcon } from '@heroicons/react/20/solid'

const Faq = () => {
    return (
        <div className=' '>
            <div className='container   sm:mx-auto ]'>
                <div className='flex justify-center items-center' >
                    <div className='w-[95%] mx-[20px]'>
                        <h1 className='mb-[20px] text-[32px] font-[800] font-ppneue text-start'>Frequently Asked Questions</h1>

                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures />
                            </div>
                        </div>
                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures />
                            </div>
                        </div>
                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures />
                            </div>
                        </div>
                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures />
                            </div>
                        </div>
                        
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Faq