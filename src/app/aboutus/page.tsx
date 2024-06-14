'use client'
import { EndResult, WhatWeDo, SayAbout1, SayAbout2, SayAbout3, SayAbout4 } from '@/assets/images'
import ImgDetail from '@/components/aboutUs/ImgDetail'
import AllHeader from '@/components/shares/AllHeader'
import Button from '@/components/shares/Button'
import Container from '@/components/shares/Container'
import Input from '@/components/shares/Input'
import Title from '@/components/shares/Title'
import Facebook from '@/components/svg/Facebook'
import Instagram from '@/components/svg/Instagram'
import Linkedin from '@/components/svg/Linkedin'
import Twitter from '@/components/svg/Twitter'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'


const data = [
    {
        img: SayAbout1,
        name: 'Nattasha Julie',
        profession: 'Design, Australia',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        phone: '+123 456 789',
        email: 'nH4pY@example.com',
    },
    {
        img: SayAbout2,
        name: 'Nattasha Julie',
        profession: 'Design, Australia',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        phone: '+123 456 789',
        email: 'nH4pY@example.com',
    },
    {
        img: SayAbout3,
        name: 'Nattasha Julie',
        profession: 'Design, Australia',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        phone: '+123 456 789',
        email: 'nH4pY@example.com',
    },
    {
        img: SayAbout4,
        name: 'Nattasha Julie',
        profession: 'Design, Australia',
        facebook: '#',
        twitter: '#',
        linkedin: '#',
        instagram: '#',
        phone: '+123 456 789',
        email: 'nH4pY@example.com',
    },
]



export default function AboutUs() {
    const [id, setId] = React.useState(-1)
    const img = '/about.png'
    return (
        <div>
            <AllHeader img={img} title='About Us' disc='Home / About Us' />

            <Container isPadding={false} style='my-20 '>
                {/* quote section */}
                <div className='h-[300px] sm:w-[80%] mx-auto relative centerY justify-center'>
                    <div className='h-full absolute top-0 left-0 w-[170px] border-[20px] border-r-0 border-quaternary bg-transparent rounded-l-[70px]' />
                    <div className='h-full absolute top-0 right-0 w-[170px] border-[20px] border-l-0 border-quaternary bg-transparent rounded-r-[70px]' />
                    <div className='w-[80%] mx-auto text-center z-50'>
                        <Title title='“' style='' />

                        <p className='text-secondary italic font-dmSerif font-thin lg:text-[26px] text-xl'>I like an interior that defies labeling. I don't really want someone to walk into a room and know that I did it</p>
                        <p className='paragraph mt-4'>-BUNNY WILLIAMS</p>
                    </div>
                </div>


                <ImgDetail title='What We Do' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.' img={WhatWeDo} style='my-20' />

                <ImgDetail title='The End Result' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using that it has a more-or-less normal.' img={EndResult} style='my-20' detailStyle='order-last pl-3' />
            </Container>

            {/* say about us */}
            <div className='bg-quaternary py-20 mb-20 w-full'>
                <Container isPadding={false}>
                    <Title title='What the People Thinks About Us' style='md:w-[50%] mx-auto text-center ' />

                    <div className='grid sm:grid-cols-4 grid-cols-2 gap-5 mt-5 '>
                        {
                            data.map((item, idx) => (
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
                            ))
                        }
                    </div>

                </Container>
            </div>

            {/*  productive talk  */}
            <Container isPadding={false} style=''>
                <Title title='Creative project? Let&apos;s havea productive talk.' style='md:w-[70%] mx-auto text-center' />
                <div className='md:w-[80%] mx-auto  mt-10'>
                    <div className='flex gap-5 mb-8'>
                        <Input placeholder='Name' />
                        <Input placeholder='Email' />
                    </div>
                    <div>
                       <Input placeholder='Hello Iam Intrested in..' isTextArea={true} />
                    </div>

                    <div className='mt-10 flex justify-center'>
                    <Button url='#' title='Send Now' isStyle={false} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
