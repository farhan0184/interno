'use client'
import Image, { StaticImageData } from 'next/image'
import { useRouter } from 'next/navigation'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

interface ItemType {
    title: string
    subTitle: string
    date: string
    img: string | StaticImageData;
}

interface ArticleProps {
    item: ItemType
    idx: number
    setId: React.Dispatch<React.SetStateAction<number>>
    id: number
}
export default function Article({ item, idx, setId, id }: ArticleProps) {
    const {push} = useRouter()
    return (

        <div key={idx} className='border-[1px] sm:w-full w-[70%]  2xl:h-[400px] lg:h-[330px] h-[400px]   border-gray-300 rounded-[15%] p-4 bg-white hover:bg-quaternary relative cursor-pointer' onMouseOver={() => setId(idx)} onMouseOut={() => setId(-1)} onClick={() => push(`/blogs/${idx}`)}>
            <div className='relative'>
                <Image src={item.img} alt="image" className='rounded-t-[15%] w-full ' />
                <div className='absolute bg-white  bottom-1 left-1 px-3'>
                    <p className='text-[12px] font-jost text-tertiary'>{item.subTitle}</p>
                </div>
            </div>
            <div className=''>
                <h1 className='text-[18px] font-dmSerif font-bold text-secondary'>{item.title}</h1>

                <div className='centerY justify-between absolute bottom-5 w-[90%]'>
                    <p className='text-[12px] font-jost text-tertiary'>{item.date}</p>
                    <div className={` ${id === idx ? 'bg-white' : 'bg-quaternary'} w-8 h-8 rounded-full centerY justify-center`}>
                        <HiChevronRight className={`  ${id === idx ? 'text-primary' : 'text-secondary'} text-xl cursor-pointer`} />
                    </div>
                </div>
            </div>
        </div>
    )
}
