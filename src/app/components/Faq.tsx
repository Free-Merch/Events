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
                                <Disclosures 
                                question={
                                    "Who Can attend this event?"
                                } answer={
                                    "The Event is open to everyone curious about Learning about the vast Evolving Blockchain and Web3 technology. Developers, Designers, skilled artisans, Jobs seekers, community managers, content writers, etc."
                                }/>
                            </div>
                        </div>
                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures question={"Is this Event free? "} answer={"The event is free and open to participation for anyone. "}/>
                            </div>
                        </div>
                        <div className='flex  bg-[#F7F7F8] rounded-[10px] mb-[10px] '>
                            <div className='px-[20px] py-[30px] flex justify-between w-[100%] items-center'>
                                <Disclosures question={"What will You gain at this event? "} 
                                    answer={
                                        `Exposure to the Blockchain and Web3 technology, learning from top industry leaders sharing experience on onboarding, opportunities in the Blockchain and leveraging Blockchain to build sustainable businesses. 
                                        
                                        At the event, there will be a lot of Jobs opportunities, swags and merchandise, free crypto giveaways and opportunities to connect with more people.`
                                    }/>
                            </div>
                        </div>
                    </div>

                </div>


            </div>

        </div>
    )
}

export default Faq