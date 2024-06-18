import { SingleProjectImg } from '@/assets/images'
import AllHeader from '@/components/shares/AllHeader'
import Container from '@/components/shares/Container'
import Discription from '@/components/shares/Discription'
import Title from '@/components/shares/Title'
import Image from 'next/image'
import React from 'react'
import { BiSearch } from 'react-icons/bi'

const data = [
    {
        id: 1,
        title: "Client",
        disc: "Jhon Deo",
    },
    {
        id: 2,
        title: "Category",
        disc: "Interiors",
    },
    {
        id: 3,
        title: "Tags",
        disc: "interior, Home",
    },
    {
        id: 4,
        title: "Date",
        disc: "Date 23,02,2024",
    },
    {
        id: 5,
        title: "Link",
        disc: "LInk example.com",
    },
]

export default function SingleProject({ params }: { params: { slug: string } }) {
    const img = '/singleproject.png'
    const slug = params.slug.replace('%20', " ")
    return (
        <div>
            <AllHeader img={img} title={'Single Project'} disc={`Home / Projects/ ${slug}`} />

            <Container isPadding={false} style='my-20 '>
                <div className='md:flex gap-5 items-center'>
                    <div className='md:w-[40%] h-max space-y-2 bg-quaternary p-10 rounded-[30px]'>
                        {data.map(item => (
                            <div key={item.id} className='flex font-jost text-[16px]'>
                                <p className='w-[40%] font-bold'>{item.title}</p>
                                <p className='w-[60%]'>{item.disc}</p>
                            </div>
                        ))}
                    </div>
                    <div className='md:w-[60%]'>
                        <Title title={'Minimal Look Bedrooms'} />
                        <div>
                            <Discription disc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'} style='mt-2 mb-3' />
                            <Discription disc={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquamsem vitae turpis dignissim maximus. Aliquam sollicitudin tellumassa, vbel maximus purus posuere in. Dojrices gravida dignissim. Praesent at nibh in mi fringilla mattis. Phasellus ut dolor odio. Aenean in the ipsum vel lectus bibendum commodo.'} style='' />
                        </div>
                    </div>

                </div>

                <div className='relative mt-20 mb-10'>
                    <Image src={SingleProjectImg} alt="image" className='w-full h-max rounded-[30px] bg-cover'/>
                    <div className='absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2 centerY search'>
                        <input className='  outline-none bg-white/40 h-10 px-2  border-0' type='text' placeholder='Search ...'></input>
                        <BiSearch size={30} className='text-primary'/>
                    </div>
                </div>
            </Container>
        </div>
    )
}
