import { Company1, Company2, Company3, Company4, Company5 } from '@/assets/images'
import Image from 'next/image'
import React from 'react'

const data = [
    {
        img: Company1
    },
    {
        img: Company2
    },
    {
        img: Company3
    },
    {
        img: Company4
    },
    {
        img: Company5
    },
]

export default function CompanyLogos() {
  return (
    <div className=' flex md:flex-nowrap flex-wrap   sm:justify-between justify-center sm:gap-0 gap-5 py-10'>
        {data.map((item, idx) => (
            <div key={idx} className='centerY'>
                <Image src={item.img} alt="companylogo" className='w-[100px] h-[100px] ' />
            </div>
        ))}
    </div>
  )
}
