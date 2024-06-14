'use client'
import React from 'react'
import TitleDisc from '../shares/TitleDisc'
import { image6, image7, image8 } from '@/assets/images'
import Article from '../shares/Article'

const data = [
    {
        title: 'Lets Get Solution For Building Construction Work',
        subTitle: "Kitchan Design",
        date: '26 May,2024',
        img: image6,
    },
    {
        title: 'Low Cost Latest Invented Interior Designing Ideas.',
        subTitle: "Living Design",
        date: '22 May,2024',
        img: image7,
    },
    {
        title: 'Best For Any Office & Business Interior Solution',
        subTitle: "Interior Design",
        date: '20 May,2024',
        img: image8,
    },
]

export default function Articles() {
    const [id, setId] = React.useState(-1)
    return (
        <div className='py-20 '>
            <TitleDisc title='Articles & News' disc='It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.' style='md:w-[70%] w-full mx-auto text-center' />


            <div className='sm:grid lg:grid-cols-3 sm:grid-cols-2 flex flex-wrap justify-center  gap-3 mt-14'>
                {
                    data.map((item, idx) => (
                        <Article key={idx} item={item} idx={idx} setId={setId} id={id} />
                    ))
                }
            </div>
        </div>
    )
}
