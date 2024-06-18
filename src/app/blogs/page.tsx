import { LatestBlog } from '@/assets/images'
import Articles from '@/components/home/Articles'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Discription from '@/components/shares/Discription'
import Title from '@/components/shares/Title'
import Image from 'next/image'
import React from 'react'
import { HiChevronRight } from 'react-icons/hi2'

export default function Blogs() {
    const img = '/blogs.jpg'
    return (
        <div>
            <AllHeader img={img} title='Articles & News' disc='Home / Blogs' />
            <Container isPadding={false} style=' space-y-10  my-10'>
                <div className='space-y-5'>
                    <Title title='Latest Post' />
                    <div className='border-[1px] rounded-[30px] md:flex  p-3'>
                        <div className='md:w-[50%]'>
                            <Image src={LatestBlog} alt="image" className='w-full md:h-full h-[300px] object-cover rounded-[30px]' />
                        </div>
                        <div className='md:w-[50%]  space-y-5 py-12 md:mx-12  relative'>
                            <h3 className='text-xl header'>Low Cost Latest Invented Interior Designing Ideas</h3>
                            <Discription disc='Lorem ipsum dolor sit amet, adipiscing Aliquam eu sem vitae turpis dignissim maximus.posuere in.Contrary to popular belief.Lorem Ipsum is not simply random text. It has roots in a piece of classica.' />

                            <Discription disc='Lorem ipsum dolor sit amet, consectetur adipiscing elit. It has roots in a piece of classica.' />
                            <div className='centerY justify-between absolute bottom-3 md:w-[78%] w-[98%]'>
                                <p className='text-[12px] font-jost text-tertiary'>{'26 May,2024'}</p>
                                <div className={` bg-quaternary w-8 h-8 rounded-full centerY justify-center`}>
                                    <HiChevronRight className={`  text-secondary text-xl cursor-pointer`} />
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
                <div className='space-y-5'>
                    <Title title='Articles & News' />
                    <div>
                        <Articles isHome={false} />
                    </div>
                </div>
            </Container>
        </div>
    )
}
