import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
    return (
      <div className="w-[100%] bg-[#F8F9FD] sm:mb-[26px] mb-[93px]">
        <div className="container  mx-auto ">
          <div className="flex justify-center">
            <div className="flex flex-wrap w-[100%]  justify-center  bg-[#F8F9FD]  my-[26px]">
              <div className='relative w-[137px] h-[21px]'>
                <Image
                  className=" block mb-[20px] sm:mb-0 object-contain"
                  src="/panvalaLogo.png"
                  alt="vector"
                  fill
                />
              </div>
              <div className='relative w-[137px] h-[21px]'>
                <Image
                  className="block mb-[20px] sm:mb-0 object-contain"
                  src="/dexp2pLogo.png"
                  alt="vector"
                  fill
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sponsors