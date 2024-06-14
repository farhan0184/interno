import React from 'react'
import TitleDisc from '../shares/TitleDisc'
import Button from '../shares/Button'
import Image, { StaticImageData } from 'next/image'

interface ImgDetailProps {
    title: string
    disc: string
    img: string | StaticImageData
    style?: string
    detailStyle?: string
}

export default function ImgDetail({title, disc, img,style, detailStyle}: ImgDetailProps) {
    return (
        <div className={`md:flex gap-5 md:space-y-0 space-y-10    ${style && style} `}>
            <div className={`md:w-[40%] sm:w-[80%] w-[95%] mx-auto space-y-5 flex flex-col justify-center ${detailStyle && detailStyle}`}>
                <TitleDisc title={title} disc={disc} discStyle='2xl:my-5 my-3' />
                <div>
                    <Button url='#' title='Our Concept' />
                </div>
            </div>
            <div className='md:w-[60%] sm:w-[80%] w-[95%] mx-auto'>
                <Image src={img} alt="image" className='w-full h-max rounded-[50px]' />
            </div>
        </div>
    )
}
