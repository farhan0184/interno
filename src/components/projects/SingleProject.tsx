'use client'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

export interface SingleProjectprops {
    title: string
    disc: string
    img: StaticImageData | string
    style: string
}
export default function SingleProject({item, isHome}: {item: SingleProjectprops, isHome?: boolean}) {
    const {push} = useRouter()
    return (
        <div  className={isHome?'sm:w-[45%] w-[70%] sm:mx-0 mx-auto':' break-inside-avoid mb-5 cursor-pointer'}>
            <div onClick={()=>push(`/projects/${item.title}`)}>
                <Image src={item.img} alt="image" className={`${item.style}`} />
                <div className='centerY justify-between mt-2'>
                    <div>
                        <h3 className='text-base header'>{item.title}</h3>
                        <p className='paragraph'>{item.disc}</p>
                    </div>
                    <div className='bg-quaternary w-10 h-10 rounded-full centerY justify-center'>
                        <HiChevronRight className='text-secondary hover:text-primary text-xl cursor-pointer' />
                    </div>
                </div>
            </div>
        </div>
    )
}
