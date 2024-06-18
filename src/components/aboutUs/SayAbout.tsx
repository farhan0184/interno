import Link from 'next/link'
import React from 'react'
import Facebook from '../svg/Facebook'
import Twitter from '../svg/Twitter'
import Linkedin from '../svg/Linkedin'
import Instagram from '../svg/Instagram'
import Image, { StaticImageData } from 'next/image'

interface Item {
    img: StaticImageData;
    name: string;
    profession: string;
    facebook: string;
    twitter: string;
    linkedin: string;
    instagram: string;
    phone: string;
    email: string;
}

interface SayAboutProps {
    item: Item;
    idx: number;
    id: number;
    setId: React.Dispatch<React.SetStateAction<number>>;
}

export default function SayAbout({ item, idx, id, setId }: SayAboutProps) {
    return (
        <div key={idx} className='w-full rounded-xl relative' onMouseOver={() => setId(idx)} onMouseOut={() => setId(-1)}>
            <Image src={item.img} alt="image" className='rounded-xl w-full' />
            {
                id === idx && <div className='w-full h-full absolute top-0 left-0 bg-white rounded-xl cursor-pointer text-center py-10 space-y-16'>
                    <div>
                        <h1 className='text-[18px] font-dmSerif font-bold text-secondary'>{item.name}</h1>
                        <p className='text-[14px] font-jost text-tertiary'>{item.profession}</p>
                    </div>
                    <div className='centerY justify-center gap-5'>
                        <Link href="#"><Facebook /></Link>
                        <Link href="#"><Twitter /></Link>
                        <Link href="#"><Linkedin /></Link>
                        <Link href="#"><Instagram /></Link>
                    </div>
                    <div>
                        <p className='text-[14px] font-jost text-tertiary'>{item.phone}</p>
                        <p className='text-[14px] font-jost text-tertiary'>{item.email}</p>
                    </div>
                </div>
            }
        </div>
    )
}
