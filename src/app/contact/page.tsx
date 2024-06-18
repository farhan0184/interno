import { Location } from '@/assets/images'
import ContactUs from '@/components/aboutUs/ContactUs'
import AllHeader from '@/components/shares/AllHeader'
import Button from '@/components/shares/Button'
import Container from '@/components/shares/Container'
import Input from '@/components/shares/Input'
import Title from '@/components/shares/Title'
import SocialMediaAndLiks from '@/components/team/SocialMediaAndLiks'
import Image from 'next/image'
import React from 'react'

export default function Contact() {
    const img = '/contact.jpg'
    return (
        <div>
            <AllHeader img={img} title='Contact Us' disc='Home / Contact' />

            <Container isPadding={false} style='mt-20'>
                <div>
                    <Title title='We love meeting new people and helping them.' style='text-center md:w-[70%] mx-auto' />
                    <div className='md:flex mt-10'>
                        <div className='md:w-[33.3%] '>
                            <div className='w-[90%] flex flex-col py-16 justify-center h-min bg-quaternary px-5 space-y-8 rounded-2xl'>
                                <SocialMediaAndLiks isContact={true} />
                            </div>
                        </div>
                        <div className='md:w-[66.7%]'>
                            <div className='flex gap-5 mb-8'>
                                <Input placeholder='Name' />
                                <Input placeholder='Email' />
                            </div>
                            <div className='flex gap-5 mb-8'>
                                <Input placeholder='Subject' />
                                <Input placeholder='Phone' />
                            </div>
                            <div>
                                <Input placeholder='Hello Iam Intrested in..' isTextArea={true} />
                            </div>
                            <div className='mt-10 flex justify-end'>
                                <Button url='#' title='Send Now' isStyle={false} />
                            </div>
                        </div>
                    </div>
                </div>

                <div className='my-20 '>
                    <Image src={Location} alt='Contact Us' className='w-full rounded-[30px]'/>
                </div>
            </Container>
        </div>
    )
}
