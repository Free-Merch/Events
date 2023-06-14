import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Rights = () => {
  return (
    <div>
      <div className='bg-[#000D20] font-satoshi flex justify-center items-center'>
        <div className='text-[#FFFFFF] my-[60px]' >
          <div className='flex justify-center'>
            <Image src='/Buidl_ (1).svg' alt='footer' width={108} height={25} className='' />
          </div>

          <h2 className='font-[500] text-[16px] font-satoshi text-center my-[18px]'>Product Community and Future of Adoption</h2>
          <h3 className='text-center font-[500] text-[12px] font-satoshi mb-[20px]'>Connect with us</h3>
          <div className='flex justify-between items-center cursor-pointer '>
            <div className='mr-[10px]'>
              <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://twitter.com/' className='mr-[8px]' />
              <span>Twitter</span>
            </div>
            <div className='mr-[10px]'>
              <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://www.Instagram.com/' className='mr-[8px]' />
              <span>Instagram</span>
            </div>
            <div className='mr-[10px]'>
              <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://www.linkedin.com/' className='mr-[8px]' />
              <span>Linkedin</span>
            </div>



          </div>
        </div>
      </div>

      <div className='bg-[#161616]'>
        <p className='text-center py-[30px] font-satoshi text-[#D1D1D6]'>All rights reserved . | Build, 2023 </p>
      </div>
    </div>

  )
}

export default Rights