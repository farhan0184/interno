import React from 'react'
import Title from '../shares/Title'
import { person1, person2, person3 } from '@/assets/images'
import Image from 'next/image'
import Discription from '../shares/Discription'

const data = [
    {
        name: "Nattasha Mith",
        disc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been.",
        image: person1,
        location: "Sydney, USA"
    },
    {
        name: "Raymond Galario",
        disc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled it to make a type book.",
        image: person2,
        location: "Sydney, USA"
    },
    {
        name: "Benny Roll",
        disc: "Lorem Ipsum is simply dummy text of the typesetting industry. Ipsum has been scrambled.",
        image: person3,
        location: "Sydney, USA"
    },
]

export default function AboutUs() {
    return (
        <div >
            <div className=' bg-quaternary rounded-[50px] pb-10'>
                <div className='w-[50%] mx-auto py-10'>
                    <Title title={'What the People Thinks About Us'} style='text-center' />
                </div>
                <div className='px-5 grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3'>
                    {
                        data?.map((item, idx) => (
                            <div key={idx} className='bg-white rounded-2xl gap-5 p-5'>
                                <div className='centerY gap-4'>
                                    <Image src={item.image} alt='Image' className='w-[50px] h-[50px] rounded-full' />
                                    <div className='font-dmSerif text-[16px]'>
                                        <h1 className='font-bold'>{item.name}</h1>
                                        <p className='font-thin'>{item.location}</p>
                                    </div>
                                </div>
                                <div className='mt-5'>
                                    <Discription disc={item.disc} />
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    )
}
