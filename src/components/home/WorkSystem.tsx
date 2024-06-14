'use client'
import Link from 'next/link'
import React from 'react'
import { FaArrowRightLong } from 'react-icons/fa6'


interface Data{
    title: string
    disc: string
}

interface WorkSystemProps {
    data: Data[]
}


export default function WorkSystem({ data }: WorkSystemProps) {
    const [id, setId] = React.useState(-1)
    return (

        <div className='grid lg:grid-cols-3 sm:grid-cols-2 gap-y-10 sm:gap-0 gap-2 sm:w-full w-[60%] mx-auto pt-20 pb-10'>

            {
                data?.map((item, idx) => (
                    <div className={`flex justify-center flex-col items-center space-y-5 px-5 py-14 rounded-[20px]  cursor-pointer ${id === idx && 'bg-quaternary shadow-3xl'}`} key={idx} onMouseOver={() => setId(idx)} onMouseOut={() => setId(-1)}>
                        <h1 className='text-xl text-secondary font-bold font-dmSerif'>{item.title}</h1>
                        <p className='text-tertiary font-jost text-[16px] text-center'>{item.disc}</p>
                        <Link href={`/services/${item.title}`} className='centerY gap-2 text-secondary text-[16px] font-jost font-bold'>Read more <span className='text-primary text-[14px] '><FaArrowRightLong /></span></Link>
                    </div>
                ))
            }
        </div>

    )
}
