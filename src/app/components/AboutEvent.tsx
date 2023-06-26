import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const AboutEvent = () => {
    return (
      <div className="container mx-auto mt-[80px] mb-[115px] sm:mb-[55px]">
        <div className="flex  justify-around md:flex-nowrap flex-wrap items-start">
          <div className="sm:w-[45%] order-2 w-[100%] h-auto  mx-[20px] sm:mx-auto">
            <p className="text-[#3DB5E6] mt-[60px] sm:mt-[25px] uppercase underline  text-left]">
              About this event
            </p>
            <h1 className="font-[800] font-ppneue text-[32px] sm:mt-[41px] mt-[20px] whitespace-wrap  sm:text-left tracking-[0.48px] text-left mb-[20px] sm:mb-[38px]">
              We are building ABC
            </h1>
            <p className="text-left whitespace-pre-line font-satoshi font-[500] text-[16px] leading-[27px] sm:leading-[27px] tracking-[0.32px]">
              The facade of Web3, Crypto as a get-rich-quick scheme is fading as
              communities prioritize building solutions and businesses using
              blockchain technology. Discussions among product builders and
              enthusiasts revolve around the future of blockchains, blockchain
              solutions, and products, fostering collaboration and idea
              exchange.
              <br /> <br />
              The conference focuses on sustainable projects leveraging
              blockchains and associated tools. Topics include ideation,
              scaling, and technical aspects like deploying solutions on
              blockchains and layer2 networks. The event aims to facilitate
              partnerships among builders, moving beyond tokenomics to explore
              the profound potential of blockchain. Despite the market's
              downturn, it offers opportunities for long-lasting solutions and
              businesses.
              <br /> <br />
              The meetup covers diverse perspectives in the crypto space,
              including DAOs, business development, startups, grants, investors,
              accelerators, navigating bear markets, and emerging trends.
              Attendees gain insights and resources to thrive in the evolving
              blockchain industry, fostering meaningful connections among
              builders and creators.
            </p>
            {/* <div className='mt-[40px] mb-[20px] flex  md:justify-start justify-center '>
                        <div className='py-[10px] w-[35%] bg-[#F8F9FD] text-center  border-[1px] border-l-[2px] border-l-[#2ec866] px-1  relative'>
                            Get Registered
                            <span className='absolute right-[100000px] lg:top-[15px] lg:right-1 '><AiOutlineArrowRight /></span>
                        </div>

                    </div> */}
          </div>
          <div className=" relative sm:w-[45%] h-auto  w-[100%] ">
            <div className="mt-[0px] h-auto sm:mt-[30px] mx-[10px] sm:mx-auto">
              <Image
                className="w-[100%] h-auto object-cover "
                src="/Maskgroup.svg"
                alt="img1"
                height={100}
                width={400}
              />
            </div>

            {/* <div className='absolute   flex justify-evenly top-0 w-[100%]  h-[100%] border-[1px] border-white left-0'>
                        <div className='h-auto w-[50%] flex flex-col'>
                            <div className='w-[100%]  h-[50%] z-[1] rounded-[50%] block border-[1px] border-[green] '>

                            </div>
                            <div className='w-[100%]  z-[1] h-[50%] rounded-[50%] border-[1px] border-[green]'>

                            </div>
                        </div>

                        <div className='w-[50%] z-[1] h-[auto]  rounded-[50%] border-[1px] border-[green]  '>


                        </div>
                    </div> */}
          </div>
        </div>
      </div>
    );
}

export default AboutEvent