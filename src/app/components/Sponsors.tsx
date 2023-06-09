import React from 'react'
import Image from 'next/image'

const Sponsors = () => {
  return (
    <div className='container mx-auto mt-[50px]'>
        <div>
            <h1 className='text-center font-[800px] text-[32px]'>Sponsors & Partners</h1>
            <div className='flex justify-evenly py-[40px]'>
                <Image className='w-[10%]' src='/Vector.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]' src='/Vector1.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]' src='/Vector2.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]' src='/Vector3.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]' src='/Vector4.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]' src='/Vector5.png' alt='vector' width = {200} height={200}/>
                <Image className='w-[10%]'  src='/Vector6.png' alt='vector' width = {200} height={200}/>
                
            </div>
        </div>

    </div>
  )
}

export default Sponsors