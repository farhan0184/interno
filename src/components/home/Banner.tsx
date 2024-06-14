import { BannerImg } from '@/assets/images'
import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import Button from '../shares/Button'
import Container from '../shares/Container'
import Discription from '../shares/Discription'

export default function Banner() {
    return (
        <div className={`bg-center bg-cover  bg-no-repeat  h-screen  rounded-bl-[100px]`} style={{ backgroundImage: `url(/homebanner.jpg)` }}>
            <Container style='h-full' isPadding={false}>
                <div className='lg:w-[50%] sm:w-[70%] w-[100%] flex justify-center flex-col h-full'>
                    <h1 className='lg:text-6xl md:text-5xl text-4xl text-secondary font-bold font-dmSerif'>Let Your Home
                        Be Unique</h1>
                    <Discription disc='There are many variations of the passages of lorem Ipsum fromavailable,variations of the passages.' style='py-5'/>
                    <div>
                        <Button url='#' title={"Get Started"}/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
