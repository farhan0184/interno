import React from 'react'
import Call from '../svg/Call'
import Button from '../shares/Button'
import Image from 'next/image'
import { image1 } from '@/assets/images'
import TitleDisc from '../shares/TitleDisc'


export default function Stylish() {
    return (
        <div className=' grid sm:grid-cols-2 grid-cols-1 my-10'>
            <div className='w-[85%]'>
                <TitleDisc title='We Create The Art
                    Of Stylish Living
                    Stylishly' disc='It is a long established fact that a reader will be distracted by the of readable content of a page
                    when lookings at its layouts the points of using
                    that it has a more-or-less normal.'  titleStyle='mb-2'/>
                

                <div className='centerY gap-3 my-8'>
                    <div className='w-16 h-16 rounded-full centerY justify-center bg-primary/15'>
                    <Call/>
                    </div>
                    <div>
                        <h4 className='text-xl font-dmSerif font-bold'>012345678</h4>
                        <p className='font-jost text-[18px]'>Call Us Now</p>
                    </div>
                </div>

                <Button url='#' title={'Get Free Estimate'}/>
            </div>
            <div className='sm:mt-0 mt-5'>
                <Image src={image1} alt="homebanner"   className='w-full h-full sm:rounded-tr-[50%] rounded-2xl sm:rounded-bl-[20%]'/>
            </div>
        </div>
    )
}
