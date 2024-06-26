import Image from 'next/image'
import React from 'react'
import { AiOutlineArrowRight } from 'react-icons/ai'

const AboutEvent = () => {
    return (
      <div className="container mx-auto mt-[80px] mb-[115px] sm:mb-[55px]">
        <div className="flex  justify-around md:flex-nowrap flex-wrap items-start">
          <div className="sm:w-[45%] order-2 w-[100%] h-auto  mx-[20px] sm:mx-auto">
            <h1 className="font-[800] font-ppneue text-[32px] sm:mt-[41px] mt-[20px] whitespace-wrap  sm:text-left tracking-[0.48px] text-left mb-[20px] sm:mb-[38px]">
              Event Overview
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
          </div>
          <div className=" relative sm:w-[45%] h-auto  w-[100%] ">
            <div className="mt-[0px] h-auto sm:mt-[30px] mx-[10px] sm:mx-auto">
              <Image
                className="w-[100%] h-auto object-cover "
                src="/AboutEvent.svg"
                alt="img1"
                height={100}
                width={400}
              />
            </div>
          </div>
        </div>
      </div>
    );
}

export default AboutEvent