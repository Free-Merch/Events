'use client'
import Image from 'next/image'
import React, { FormEvent, useState } from 'react'

interface FormData {
    name: string;
    email: string;
    message: string
}

const Speak = () => {

    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        message: '',
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    }


    const sendEmail = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const url = 'https://api.emailjs.com/api/v1.0/email/send'
        const data = {
            "user_id": "4gvp3whyoHSADhGum",
            "template_id": "template_y0axpyi",
            "service_id": "service_w5xro0b",
            "template_params": {
                "message": formData.message,
                "from_name": formData.name,
                "email": formData.email
            }
        }

        const response = await fetch(url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify(data)
        });

        if (response.ok) {
            // const jsonResponse = await response.json();
            console.log('done');
            setFormData({
                name: '',
                email: '',
                message: '',
            })

        } else {
            console.log('Request failed with status:', response.status);

        }
        
    }

    return (
        <div className='container mt-[30px] mb-[54px] mx-auto flex justify-center items-center sm:mb-[57px] text-[#FFFFFF]'>
            <div className='flex relative bg-[#0B1237] justify-center items-center rounded-[16px] border-[1px] w-[95%] h-[20%]'>
                <div className='absolute right-[50px] sm:right-[5%] top-0'>
                    <Image src='/Vector336.svg' alt='spesss' width={100} height={10} />
                </div>
                <div className='absolute left-[50px] sm:left-[117px] top-[20px]'>
                    <Image src='/Vector3.svg' alt='spess' width={100} height={10} />
                </div>
                <div className='absolute left-[60px] bottom-0'>
                    <Image src='/Vector33.svg' alt='spes' width={10} height={10} />
                </div>
                <div className='absolute hidden sm:block bottom-0 left-0 w-[45%] '>
                    <Image className=' ' src='/Buidl_real.svg' alt='spes' width={550} height={134} />
                </div>
                <div className='absolute bottom-0 right-[0%] w-[100%] sm:w-[45%] '>
                    <Image className='' src='/Buidl_real2.svg' alt='spes' width={550} height={134} />
                </div>
                <div className='sm:w-[50% flex sm:flex-row flex-col  justify-between w-full'>
                    <div className='sm:ml-[40px] ml-0'>
                        <h1 className=' font-[800] text-[24px] md:text-[40px] leading-[46.7px] font-ppneue whitespace-wrap sm:text-left text-center sm:w-[60%] mb-[46px] sm:mt-[40px]  mt-[93px]'>We want to  hear from you</h1>
                    </div>
                    {/* <div className='relative sm:hidden block w-[100%] mb-[114px]  rounded-[40px]'>
                        <input placeholder='Enter your email' className='  w-[100%] font-satoshi pl-[24px] py-[17px] rounded-[40px]' type='text' />
                        <button className='absolute uppercase font-[700] text-[16px] py-[10px] bg-[#2EC866] rounded-[40px] w-[140px] w-[100px  top-[7px] right-[4%]'>send</button>
                    </div> */}
                    <div>
                        <form className='sm:w-[50% mx-4 sm:mx-auto flex flex-col justify-center sm:mt-[40px] mt-0  sm:mr-[43px] gap-[10px]' action="#" onSubmit={sendEmail}>
                            <div className='  flex flex-wrap sm:flex-nowrap  justify-center items-center gap-1 '>
                                <input name='name' value={formData.name} onChange={handleChange} className='bg-[#0B1237]  block border-[1px] w-[100%] rounded-[12px] border-[#FFFFFF] opacity-[0.5] px-[20px] py-[16px]' placeholder='Full name' type="text" />
                                <input name='email' value={formData.email} onChange={handleChange} className='bg-[#0B1237] block border-[1px] w-[100%] rounded-[12px] border-[#FFFFFF] opacity-[0.5] px-[20px] py-[16px] ' placeholder='E-mail' type="email" />
                            </div>

                            <textarea name='message' value={formData.message} onChange={handleChange} className='bg-[#0B1237] mx-aut opacity-[0.5] box-border pl-[20px] pt-[20px] pb-[100px] border-[1px] rounded-[12px]' placeholder='Your message' >
                            </textarea>
                            
                            <button type='submit' className='mb-[40px] z-[20]  uppercase border-[1px] rounded-[12px] font-[700] text-[16px] border-[#2EC866] leading-[21.6px] bg-[#2EC866] pt-[14px] pb-[12px]'>send</button>
                        </form>
                    </div>



                </div>

            </div>
        </div>
    )
}

export default Speak