import React from 'react'
import TitleDisc from './TitleDisc'
interface AllHeaderProps {
    img: string
    title: string
    disc: string
}

export default function AllHeader({img, title, disc}: AllHeaderProps) {
    return (
        <div style={{ backgroundImage: `url(${img})` }} className='bg-center w-full h-[300px] relative'>
            <div className='absolute w-[300px] h-[100px] rounded-t-xl bg-white bottom-0 left-1/2 -translate-x-1/2 centerY'>
                <TitleDisc title={title} disc={disc} style='text-center w-full' />
            </div>
        </div>
    )
}
