'use client'
import { EndResult, WhatWeDo } from '@/assets/images'
import ContactUs from '@/components/aboutUs/ContactUs'
import ImgDetail from '@/components/aboutUs/ImgDetail'
import SayAbout from '@/components/aboutUs/SayAbout'
import SayAbouts from '@/components/aboutUs/SayAbouts'
import AllHeader from '@/components/shares/AllHeader'
import Button from '@/components/shares/Button'
import Container from '@/components/shares/Container'
import Input from '@/components/shares/Input'
import Title from '@/components/shares/Title'
import React from 'react'





export default function AboutUs() {
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

                        <p className='text-secondary italic font-dmSerif font-thin lg:text-[26px] text-xl'>I like an interior that defies labeling. I don&apos;t really want someone to walk into a room and know that I did it</p>
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

                    <SayAbouts />
                </Container>
            </div>

            {/*  productive talk  */}
            <ContactUs title='Creative project? Let&apos;s havea productive talk.' isCheckBox={false} />

        </div>
    )
}
