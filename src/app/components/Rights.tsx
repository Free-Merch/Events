import React from 'react'
import Image from 'next/image'
import { SocialIcon } from 'react-social-icons'

const Rights = () => {
  return (
    <div>
      <div className='bg-[#000D20] font-satoshi flex justify-center items-center'>
        <div className='text-[#FFFFFF] ' >
          <div className='flex justify-center sm:mt-[74px] mt-[60px]'>
            <Image src='/Buidl_ (1).svg' alt='footer' width={108} height={25} className='' />
          </div>

          <h2 className='font-[500] text-[16px] font-satoshi text-center my-[18px]'>Product Community and Future of Adoption</h2>
          <h3 className='text-center font-[500] text-[12px] font-satoshi mb-[8px]'>Sponsor contact details</h3>
          <div className='mb-[20px]'>

            <div className='sm:flex justify-center block text-center items-center font-[500] font-satoshi text-[14px] leading-[27px] tracking-[0.32px]'>
              <a href='themicheljerry@gmail.com' className=' sm:mr-[20px] text-center '>Send a mail: themichaeljerry@gmail.com</a>
              <div className='flex justify-center '>
                <div className='flex mr-[10px]'>
                  <Image className='mr-[8px]' src='/WhatsAppn.svg' alt='whatsapp' width={15} height={8.5} />
                  {/* <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://www.whatsapp.com/' className='mr-[8px]' /> */}
                  <Image className='' src='/XMLID_2_.svg' alt='whatsapp' width={15} height={8.5} />
                </div>

                <h2>07062514182</h2>
              </div>

            </div>
          </div>

          <div className='flex justify-between items-center cursor-pointer sm:mb-[47px] mb-[74px] '>
            <div className='flex mr-[10px] '>
              <Image className='mr-[8px]' src='/Vector-n.svg' alt='whatsapp' width={15} height={8.5} />
              <span>Twitter</span>
            </div>
            <div className='flex mr-[10px]'>
              <Image className='mr-[8px]' src='/Group-n.svg' alt='whatsapp' width={15} height={8.5} />
              {/* <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://www.Instagram.com/' className='mr-[8px]' /> */}
              <span>Instagram</span>
            </div>
            <div className='flex mr-[10px]'>
              <Image className='mr-[8px]' src='/Group1n.svg' alt='whatsapp' width={15} height={8.5} />
              {/* <SocialIcon style={{ width: '25px', height: '25px' }} bgColor='#fff' url='https://www.linkedin.com/' className='mr-[8px]' /> */}
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