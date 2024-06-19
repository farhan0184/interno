import { ErrorImg } from '@/assets/images'
import Button from '@/components/shares/Button'
import Container from '@/components/shares/Container'
import Image from 'next/image'
import React from 'react'

export default function Page() {
  return (
    <Container isPadding={false} style='md:flex'>
      <div className='md:w-[50%] centerY'>
        <div className='space-y-5 w-[80%]'>
          <h1 className='lg:text-6xl md:text-5xl text-4xl text-primary font-bold font-dmSerif'>404</h1>
          <p className='lg:text-2xl md:text-xl text-base text-secondary font-dmSerif'>We are sorry, but the page
          you requested was not found</p>
          <Button title='Back To Home' url='/'/>
        </div>
      </div>
      <div className='md:w-[50%]'>
        <Image src={ErrorImg} alt='404' className='w-full rounded-bl-[30%]'/>
      </div>
    </Container>
  )
}
