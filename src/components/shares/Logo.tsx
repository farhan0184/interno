import { LogoIcon } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

export default function Logo() {
  return (
    <div className='centerY gap-1 -mt-3'>
        <Image src={LogoIcon} alt='logo' width={30} height={30} className='w-7 h-7' />
        <span className='font-bold text-4xl  font-dmSerif'>Interior</span>
    </div>
  )
}
